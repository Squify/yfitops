export default class CategoryService {

    static categories = [
        {_id: 1, name: 'Electro'},
        {_id: 2, name: 'Pop'},
        {_id: 3, name: 'Rap'},
        {_id: 4, name: 'Gospel'},
        {_id: 5, name: 'Acoustic'},
    ]

    static nextId = 6;

    static getCategories() {
        return this.categories;
    }

    static getCategory(id) {
        return this.categories.find(category => category._id === parseInt(id));
    }

    static create(formData, category) {
        //TODO: Replace with api connection
        category._id = this.nextId;
        this.nextId++;
        this.categories.push(category);
        console.log('created')
    }

    static update(formData, categoryToUpdate) {
        //TODO: Replace with api connection
        const categoryToUpdateInArray = this.categories.find(category => category._id === categoryToUpdate._id);
        this.categories[categoryToUpdateInArray._id - 1] = categoryToUpdate;
        console.log('updated')
    }

    static delete(categoryIdToDelete) {
        //TODO: Replace with api connection
        this.categories.splice(categoryIdToDelete - 1, 1)
        console.log('delete')
    }
}
