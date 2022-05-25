const initialState = [];

const addFavorite = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_FAV': return !state.includes(action.payload) ? [...state, action.payload] : state;

        case 'REM_FROM_FAV':

            return state.filter(item => item.imdbID !== action.payload.imdbID);
            ;
        default:
            return state;

    };

}

export default addFavorite;
