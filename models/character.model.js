module.exports = mongoose => {
    
    const secondaryStatsSchema = new mongoose.Schema({
        type: String, 
        value: Number, 
        total: Number
    });

    const spellSchema = new mongoose.Schema({
        name: String,
        type: String,
        texture: String,
        damage: String, 
        effect: String
    });

    const characterSchema = mongoose.Schema(
        {
            name: String,
            primaryStats: {
                totalHP: Number,
                currentHP: Number,
                totalMana: Number,
                currentMana: Number
            },
            secondaryStats: [secondaryStatsSchema],
            texture: String,
            secondaryTexture:String,
            owner: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "user"
            },
            spells: [spellSchema]
        },
        { timestamps: true }
    );
    
    const Character = mongoose.model("character", characterSchema);
        return Character;
      };