import axios from '@/lib/axios'

export const useContacts = () => {
    // Hook para guardar un elemento.
    const postContacts = async ({ setErrors, setResponse, ...props }) => {
        await axios
            .post(`api/contact`, props)
            .then(res => {
                if (res.status == 200) {
                    setResponse({
                        action: 'POST',
                        status: true,
                        result: res,
                    })
                }
            })
            .catch(error => {
                if (error.response.status != 422) throw error

                setErrors({
                    action: 'POST',
                    status: true,
                    result: error.response.data.errors,
                })
            })
    }

    // Hook para obtener lista de elementos con paginación y filtro de búsqueda.
    const getContacts = async ({ setErrors, setResponse, setContacts }) => {
        axios
            .get(`api/contacts`)
            .then(res => {
                if (res.status == 200) {
                    setResponse({
                        action: 'GET',
                        status: true,
                        result: res,
                    })
                    setContacts(res.data)
                }
            })
            .catch(error => {
                if (error.response.status != 422) throw error

                setErrors({
                    action: 'GET',
                    status: true,
                    result: error.response.data.errors,
                })
            })
    }

    return {
        postContacts,
        getContacts,
    }
}
