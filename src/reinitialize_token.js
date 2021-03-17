import axios from 'axios';

 async function reinitialize_token(){

    let start = localStorage.getItem('startTime')
    let elapsed = Date.now() - start
    elapsed /= 1000
    let elapsedTime = Math.round(elapsed);

    if(localStorage.getItem('expiresIn')){
        let expiresIn = parseInt(localStorage.getItem('expiresIn').toString().substr(0, 5), 10)
        console.log("==========================================================",expiresIn - elapsedTime,expiresIn, elapsedTime)
        if((expiresIn - elapsedTime)<=10){
    
            const data = {
                userId : localStorage.getItem('userId'),
                deviceId: localStorage.getItem('deviceId')
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
    }else{
        alert("Vous n'êtes pas connecté")
    }
    
}

export default reinitialize_token