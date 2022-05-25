import axios from "axios"



export const addFav = (movie) => {
    return {
        type: 'ADD_TO_FAV',
        payload: movie
    }
}

export const remFav = (movie) => {
    return {
        type: 'REM_FROM_FAV',
        payload: movie
    }
}

export const PutUsers = (movie) => {
    return function (dispatch) {
        dispatch(addFav(movie));

        axios.get('https://jsonplaceholder.typicode.com/users').then(resp => {

            console.log(resp.data);
        });
    }

}
