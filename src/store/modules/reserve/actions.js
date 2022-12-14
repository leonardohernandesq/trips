export function addReserveRequest(id) {
    return {
        type: 'ADD_RESERVE_REQUEST',
        id
    }
}

export function addReserveSuccess(trip) {
    return {
        type: 'ADD_RESERVE_SUCCESS',
        trip
    }
}

export function removeReserve(id) {
    return {
        type: 'REMOVE_RESERVE',
        id,
    }
}

export function updateAmoutReserveRequest(id, amount) {
    return {
        type: 'UPDATE_RESERVE_REQUEST',
        id,
        amount
    }
}

export function updateAmoutReserveSuccess(id, amount) {
    return {
        type: 'UPDATE_RESERVE_SUCCESS',
        id,
        amount
    }
}