import React from 'react'

function Paginator({ totalPosts, pageSize, currentPage, onPageChange }) {

    let pageCount = Math.ceil(totalPosts / pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }


    return (
        <div className='pagination'>
            {
                pages.map((page, index) => {
                    return <span key={index} className={page === currentPage ? 'page current-page' : 'page'} onClick={() => { onPageChange(page) }}>{page}</span>
                })
            }
        </div>
    )
}

export default Paginator
