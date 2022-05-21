function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {}
    const save = () => {
        localStorage.setItem(key, JSON.stringify(store));
    }
    const storage = {
        get(key) {
            return store[key];
        },
        set(key, value) {
            store[key] = value;
            save();
        },
        remove(key) {
            delete store[key];
            save();
        }
    }
    return storage;
}
const profileSettings = createStorage('profile_setting');
profileSettings.set('fullName', "Tran Dung")
profileSettings.set('age', 21)
// profileSettings.remove('fullName')
console.log(profileSettings.get('fullName'))
const obj = {
    fullName: 'Tran Van Dung'
}
localStorage.setItem("profile", JSON.stringify(obj))
const getData = JSON.parse(localStorage.getItem('profile'));

console.log((getData['fullName']))