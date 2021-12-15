module.exports = mongoose => {
    var Schema = mongoose.Schema({
        name: String,
        canCreate: Boolean,
        canUpdate: Boolean,
        canUpdateStore: Boolean,
        financial: Boolean,
        resources: Boolean,
    });

const Role = mongoose.model("role", Schema);
    return Role;
  };