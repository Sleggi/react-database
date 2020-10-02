import React from 'react'
import ShowSelectedPost from '../components/ShowSelectedPost'
import AddData from '../components/AddData'
import Paginator from '../components/Paginator'

function UserData(props) {
    // стейт страниц
    const [currentPage, setCurrentPage] = React.useState(1)
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
    // Отображение окна добавления данных
    const handleAddData = () => {
        setShowAddData(true)
    }

    // Переход по страницам
    const onPageChange = (page) => {
        setCurrentPage(page)
    }
    const pageSize = 20


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
            <Paginator totalPosts={posts.length} pageSize={pageSize} currentPage={currentPage} onPageChange={onPageChange} />
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
                        posts.slice(((pageSize * currentPage) - pageSize), (pageSize * currentPage))
                            // 1 -> ((20 * 1) - 20), (20 * 1) .slice(0, 20)
                            // 2 -> ((20 * 2) - 20), (20 * 2) .slice(20, 40)
                            .map((post) =>
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
