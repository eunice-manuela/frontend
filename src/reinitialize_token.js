import axios from 'axios';

 async function reinitialize_token(){

    let start = localStorage.getItem('startTime')
    let elapsed = Date.now() - start
    elapsed /= 1000
    let elapsedTime = Math.round(elapsed);
    let expiresIn = parseInt(localStorage.getItem('expiresIn').toString().substr(0, 3), 10)

    console.log("==========================================================",expiresIn - elapsedTime)
    if((expiresIn - elapsedTime)<=10){

        const data = {
            _id : localStorage.getItem('userId')
        }

        await axios.post('users/login/refresh', data)
            .then(
                res => {
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('startTime', Date.now())
                    console.log("le token a été réinitialisé", res.data)
                },
            
                err => {
                    console.log(err.response)
                })

            .catch(err => {
                console.log(err)
            })
    }
}

export default reinitialize_token