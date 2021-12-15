module.exports = mongoose => {
    var userSchema = mongoose.Schema({
        username: String,
        email: String,
        password: String,
        characters: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "character" 
            }
        ],
        tables: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "table" 
            }
        ],
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "role"
            }
      ],
    }, 
    { timestamps: true }
    )

    const User = mongoose.model("user", userSchema);
    return User;
  };
  