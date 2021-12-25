import { makeAutoObservable } from "mobx"



class ClientStore {
    
    client = {}
    isAuth = false

    constructor() {
        makeAutoObservable(this)

        if (typeof window != 'undefined') {
            if (localStorage.getItem('token')) {
                this.isAuth = true
            }
        }
    }

    login(data) {

        fetch(`http://localhost:5000/auth/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            if (json.token) {

                if (typeof window != 'undefined') {
                    localStorage.setItem('token', json.token)
                    window.location.href = '/lk'
                }

            } else {
                alert('Неверный пароль')
                
            }
        })

    }

    logout(data) {

        

        if (typeof window != 'undefined') {
            localStorage.removeItem('token')
            window.location.href = '/'
        }


    }

    setUserData(data) {
        this.client = data
        console.log(this.client)
    }
    
}

export default new ClientStore()