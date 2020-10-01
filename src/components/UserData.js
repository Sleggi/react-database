import React from 'react'
import ShowSelectedPerson from '../components/ShowSelectedPerson'
import AddData from '../components/AddData'

function UserData(props) {

    // стейт выбранного пользователя
    const [selectedPerson, setSelectedPerson] = React.useState()
    // стейт отображения добавления новый пользователей
    const [showAddData, setShowAddData] = React.useState(false)
    // достаем persons из пропс
    const { persons, dataSize } = props
    // проверяем есть ли данные в пропс
    if (!persons || persons.lengt === 0) return <p className='no-data'>Нет данных. Попробуйте загрузить (:</p>


    // отображаем выбранного пользователя под таблицей
    const showDataHandle = (id) => {
        persons.filter(person => {
            if (person.id === id) return setSelectedPerson(person)
            else return null
        })
    }

    const handleAddSmallData = () => {
        setShowAddData(true)
    }

    return (
        <div className='data-table'>
            <p className='add-data'>Добавить данные в {
                dataSize === 'small' ? <button className='add-data__btn' onClick={handleAddSmallData}>малую базу данных</button> : <button className='add-data__btn' onClick={handleAddSmallData}>крупную базу данных</button>
            }</p>
            {
                showAddData ? <AddData /> : ''
            }

            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>email</th>
                        <th>phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        persons.map((person, index) =>
                            <tr key={index} onClick={() => showDataHandle(person.id)}
                                className={selectedPerson
                                    ? selectedPerson.id === person.id
                                        ? 'clicable-row selected'
                                        : 'clicable-row'
                                    : 'clicable-row'}
                            >
                                <td>{person.id}</td>
                                <td>{person.firstName}</td>
                                <td>{person.lastName}</td>
                                <td>{person.email}</td>
                                <td>{person.phone}</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
            <ShowSelectedPerson person={selectedPerson} />
        </div>
    )
}

export default UserData
