import React from 'react'
import ShowSelectedPerson from '../components/ShowSelectedPerson'

function UserData(props) {

    const [selectedPerson, setSelectedPerson] = React.useState()

    const { persons } = props

    if (!persons || persons.lengt === 0) return <p className='no-data'>Нет данных. Попробуйте загрузить (:</p>



    const showDataHandle = (id) => {
        persons.filter(person => {
            if (person.id === id) return setSelectedPerson(person)
            else return null
        })
    }


    return (
        <div>
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
                        persons.map((person) =>
                            <tr key={person.id} onClick={() => showDataHandle(person.id)}
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
