module.exports = mongoose => {
    const tableSchema = mongoose.Schema(
        {
            name: String,
            
        },
        { timestamps: true }
    );
    const Table = mongoose.model("table", tableSchema);
        return Table;
  };