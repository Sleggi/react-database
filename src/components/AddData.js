import React from 'react'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'

function AddData({ setAddedData }) {



    const initialValues = {
        firstName: '',
        email: '',
        body: ''
    }

    const handlePostData = (values, { resetForm }) => (
        values.firstName && values.email && values.body ?
            axios.post('https://jsonplaceholder.typicode.com/comments', values)
                .then((resp) => {
                    const addedData = resp.data;
                    setAddedData(addedData)
                }) : alert('Заполните поля ввода'),
        resetForm(values = '')
    )




    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handlePostData}>
            <Form className='add-data__window'>
                <Field type="text" placeholder='firstName' name='firstName' />
                <Field type="email" placeholder='email' name='email' />
                <Field type="text" placeholder='body' name='body' />
                <button type='submit'>Добавить данные</button>
            </Form>
        </Formik>
    )
}

export default AddData
