module.exports = mongoose => {
    const mapSchema = mongoose.Schema(
        {
            name: String,
            
        },
        { timestamps: true }
    );
    const Map = mongoose.model("map", mapSchema);
        return Map;
  };