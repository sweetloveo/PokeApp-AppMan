import { put, takeEvery, all } from 'redux-saga/effects'
import axios from 'axios';


export function* cardFetching() {
    let card
    try{console.log('Hello Sagas!')
        yield axios.get('http://localhost:3030/api/cards')
            .then(res => {
                console.log(res.data)
                card = res.data
            })

        yield put({ type: "SUCCESS_FETCH_CARD", allCard:card});

    }
    catch(error) {
        yield put({ type: "ERROR_FETCH_CARD"});
    }
}

export function* watchIncrementAsync() {
    yield takeEvery('START_FETCH_CARD', cardFetching)
}

export default function* rootSaga() {
    yield all([
        watchIncrementAsync()
    ])
}