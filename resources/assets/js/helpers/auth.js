export function login(credientials){
    return new Promise((res, rej) => {
        axios.post('/api/auth/login', credientials)
            .then((response) => {
                res(response.data);
            })
            .catch((err) => {
                rej({error: "Wrong email/Password"});
            })
    })
}

export function getLocalUser(){
    const Userstr = localStorage.getItem("user");

    if(!Userstr){
        return null;
    }

    return JSON.parse(Userstr);
}

export function setLocalUser(access_token){
    localStorage.setItem("user", access_token);
}