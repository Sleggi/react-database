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


    // достаем пропсы
    const { posts, setSorted, sorted } = props

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

    // Сортировка
    const handleSort = () => {
        setSorted(!sorted)
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
            <Paginator totalPosts={posts.length} pageSize={pageSize} currentPage={currentPage} onPageChange={onPageChange} />
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>firstName</th>
                        <th><span className='sort-icon' onClick={handleSort}>
                            <svg className={sorted ? 'icon-transform' : ''} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C" />
                            </svg>
                        </span> email</th>
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
