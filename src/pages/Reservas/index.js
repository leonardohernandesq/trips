import React from 'react';
import './style.css'
import { removeReserve, updateAmoutReserveRequest } from '../../store/modules/reserve/actions';
import { useSelector, useDispatch } from 'react-redux';
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md'

export default function Reservas() {
    const reserves = useSelector(state => state.reserve)
    const dispatch = useDispatch();

    function handleRemove(id) {
        dispatch(removeReserve(id))
    }

    function addAmount(trip) {
        dispatch(updateAmoutReserveRequest(trip.id, trip.amount + 1))
        console.log('aumentando')
    }

    function removeAmount(trip) {
        dispatch(updateAmoutReserveRequest(trip.id, trip.amount - 1))
        console.log('diminuindo')
    }

    return (
        <div>
            <h1 className='title'>Você solicitou {reserves.length} reservas</h1>


            {reserves.map(reserve => (
                <div key={reserve.id} className='reservas'>
                    <img
                        src={reserve.image}
                        alt={reserve.title}
                    />
                    <strong>{reserve.title}</strong>

                    <div className='amout'>
                        <button type="button" onClick={() => removeAmount(reserve)}>
                            <MdRemoveCircle size={25} color="#191919" />
                        </button>
                        <input type="text" readOnly value={reserve.amount} />
                        <button type="button" onClick={() => addAmount(reserve)}>
                            <MdAddCircle size={25} color="#191919" />
                        </button>
                    </div>


                    <button
                        type='button'
                        onClick={() => handleRemove(reserve.id)}
                    >
                        <MdDelete size={20} color="#191919" />
                    </button>
                </div>
            ))}

            <footer>
                <button type='button'>Solicitar Reservas</button>
            </footer>

        </div>
    );
}