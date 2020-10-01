import React from 'react'
import { Formik, Form, Field } from 'formik'

function AddData() {

    const initialValues = {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    }

    const handlePostData = (values, { resetForm }) => {
        console.log(values);
        resetForm({ values: '' });
    }



    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handlePostData}>
            <Form className='add-data__window'>
                <Field type="number" min='0' placeholder='id' name='id' />
                <Field type="text" placeholder='firstName' name='firstName' />
                <Field type="text" placeholder='lastName' name='lastName' />
                <Field type="email" placeholder='email' name='email' />
                <Field type="text" placeholder='phone' name='phone' />
                <button type='submit'>Добавить данные</button>

            </Form>
        </Formik>
    )
}

export default AddData
