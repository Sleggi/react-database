import React from 'react'
import ShowSelectedPost from '../components/ShowSelectedPost'
import AddData from '../components/AddData'

function UserData(props) {

    // стейт выбранного пользователя
    const [selectedPost, setSelectedPost] = React.useState()
    // стейт отображения добавления новый пользователей
    const [showAddData, setShowAddData] = React.useState(false)
    // добавленные данные
    const [addedData, setAddedData] = React.useState()
    // достаем persons из пропс
    const { posts } = props
    // проверяем есть ли данные в пропс
    if (!posts || posts.lengt === 0) return <p className='no-data'>Нет данных. Попробуйте загрузить (:</p>


    // отображаем выбранного пользователя под таблицей
    const showDataHandle = (id) => {
        posts.filter(post => {
            if (post.id === id) return setSelectedPost(post)
            else return null
        })
    }

    const handleAddData = () => {
        setShowAddData(true)
    }

    return (
        <div className='data-table'>
            <p className='add-data'>Добавить данные в <button className='add-data__btn' onClick={handleAddData}>таблицу</button></p>
            {
                showAddData ? <AddData setAddedData={setAddedData} /> : ''
            }
            {
                addedData ?
                    <div className="addedData">
                        <p>Вы добавили следующие данные на сервер:</p>
                        <p>ID - <b>{addedData.id}</b></p>
                        <p>Name - <b>{addedData.firstName}</b></p>
                        <p>Email - <b>{addedData.email}</b></p>
                    </div>
                    : ''
            }
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>firstName</th>

                        <th>email</th>
                        <th>text</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((post) =>
                            <tr key={post.id} onClick={() => showDataHandle(post.id)}
                                className={selectedPost
                                    ? selectedPost.id === post.id
                                        ? 'clicable-row selected'
                                        : 'clicable-row'
                                    : 'clicable-row'}
                            >
                                <td>{post.id}</td>
                                <td>{post.name}</td>

                                <td>{post.email}</td>
                                <td>{post.body}</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
            <ShowSelectedPost post={selectedPost} />
        </div>
    )
}

export default UserData
