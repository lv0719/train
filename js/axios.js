function Axios(type = 'GET', url, param = null) {
    if (type == 'POST') {
        return new Promise((resolve, reject) => {
            axios.post(url, param && {...param
                })
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    } else {
        return new Promise((resovle, reject) => {
            axios.get(url, param && {
                    params: {...param
                    }
                })
                .then(res => resovle(res))
                .catch(err => reject(err))
        })
    }
}