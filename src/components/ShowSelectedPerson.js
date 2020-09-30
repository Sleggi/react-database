import React from 'react'

function ShowSelectedPerson({ person }) {

    return person ?
        (

            <div className='show-selected-person'>
                <p>Выбран пользователь <b>{person.firstName} {person.lastName}</b></p>
                <p>Описание:</p>
                <p>{person.description}</p>
                <p>Адрес проживания: <b>{person.address.streetAddress}</b></p>
                <p>Город: <b>{person.address.city}</b></p>
                <p>Провинция/штат: <b>{person.address.state}</b></p>
                <p> Индекс: <b>{person.address.zip}</b></p>
            </div>

        ) : (
            <p className='no-data'>Выберите строку для отображения данных</p>
        )
}

export default ShowSelectedPerson
