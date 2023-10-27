exports.generateCrudMetods = Model =>{
    return {
        getAll: ()=> Model.find(),
        getById: id => Model.findById(id),
        create: record => Model.create(record),
        update: (id, data) => Model.findByIdAndUpdate(id, data),
        delete: id => Model.findByIdAndDelete(id)
    }
}