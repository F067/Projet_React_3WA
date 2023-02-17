export const localStorageMiddleware = (store) => (next) => (action) => {
    let result = next(action);
    localStorage.setItem("store", JSON.stringify(store.getState()));
    console.log(store.getState())
    return result
};