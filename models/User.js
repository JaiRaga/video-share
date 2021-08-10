const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const tokenSecret = require("../config/keys").tokenSecret;
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    handle: {
      type: String,
      required: true
    },
    avatar: {
      type: String
    },
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Not a valid Email address!");
        }
      }
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
      validate(value) {
        const val = value.toLowerCase();
        if (val.includes("password")) {
          throw new Error("Cannot contain the word 'password'");
        }
      }
    },
    followers: [
      {
        userId: {
          type: Schema.Types.ObjectId,
          required: true
        }
      }
    ],
    following: [
      {
        userId: {
          type: Schema.Types.ObjectId,
          required: true
        }
      }
    ],
    caption: {
      type: String
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

userSchema.virtual("tweets", {
  ref: "Tweet",
  localField: "_id",
  foreignField: "owner"
});

// userSchema.virtual("comments", {
//   ref: "Tweet",
//   localField: "_id",
//   foreignField: "owner"
// });

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, tokenSecret, {
    expiresIn: "7 days"
  });

  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

userSchema.methods.updateUser = async function (
  username,
  handle,
  email,
  avatar
) {
  let user = this;

  username ? (user.username = username) : null;
  handle ? (user.handle = handle) : null;
  email ? (user.email = email) : null;
  avatar ? (user.avatar = avatar) : null;

  console.log("Avatar....", user.avatar, avatar, username, email, handle);
  await user.save();
  console.log("Avatar....", user.avatar, avatar);

  return user;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    console.log("FIRST");
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    console.log("SECOND");
    throw new Error("Unable to login");
  }

  return user;
};

userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

userSchema.pre("remove", async function (next) {
  const user = this;
  await Tweet.deleteMany({ owner: user._id });
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
