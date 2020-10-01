import React from 'react'

function ShowSelectedPost({ post }) {

    return post ?
        (

            <div className='show-selected-person'>
                <p>Выбран пользователь <b>{post.name}</b></p>
                <p>Описание:</p>
                <p>{post.body}</p>
                <p>Почта: <b>{post.email}</b></p>
            </div>

        ) : (
            <p className='no-data'>Выберите строку для отображения данных</p>
        )
}

export default ShowSelectedPost
