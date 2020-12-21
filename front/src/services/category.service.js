export default class CategoryService {

    static categories = [
        {_id: 1, name: 'Electro'},
        {_id: 2, name: 'Pop'},
        {_id: 3, name: 'Rap'},
        {_id: 4, name: 'Gospel'},
        {_id: 5, name: 'Acoustic'},
    ]

    static getCategories() {
        return this.categories;
    }
}
