export const BASE_URL = "http://34.133.126.202"
export const PORT = 3000

export async function createUser(object) {
    const response = await fetch(`${BASE_URL}:${PORT}/users`, {
        method:"post",
        headers: new Headers({
            'Content-Type':'application/json',
        }),
        body: JSON.stringify(object)
    })

    let isJsonContent = false;
    const contentType = response.headers.get('content-type');
    if(contentType && contentType.indexOf('application/json') !== -1){
        isJsonContent = true;
    }

    if(response.ok){
        let retVal = {
            success:true,
            status:response.status
        }

        if(isJsonContent){
            retVal.data = await response.json();
        }

        return retVal;
    }
}

export async function getAllUsers() {
    const response = await fetch(`${BASE_URL}:${PORT}/users`, {
            method:'get'
        });

        if(response.ok){
            let responseJson = [];
            if(response.status === 200){
                responseJson = await response.json();
            }

            return {
                success: true,
                status: response.status,
                statusText: response.statusText,
                data: responseJson
            }
        }
}

export async function getUserById(id) {
    console.log(id)
    const response = await fetch(`${BASE_URL}:${PORT}/users/${id}`, {
        method: "get"
    })

    if(response.ok){
        let responseJson = [];
        if(response.status === 200){
            responseJson = await response.json();
        }

        return {
            success: true,
            status: response.status,
            statusText: response.statusText,
            data: responseJson
        }
    }
}

export async function createChallenge(object) {
    const response = await fetch(`${BASE_URL}:${PORT}/challenges`, {
        method:"post",
        headers: new Headers({
            'Content-Type':'application/json',
        }),
        body: JSON.stringify(object)
    })

    let isJsonContent = false;
    const contentType = response.headers.get('content-type');
    if(contentType && contentType.indexOf('application/json') !== -1){
        isJsonContent = true;
    }

    if(response.ok){
        let retVal = {
            success:true,
            status:response.status
        }

        if(isJsonContent){
            retVal.data = await response.json();
        }

        return retVal;
    }
}

export async function getAllChallenges() {
    const response = await fetch(`${BASE_URL}:${PORT}/challenges`, {
            method:'get'
        });

        if(response.ok){
            let responseJson = [];
            if(response.status === 200){
                responseJson = await response.json();
            }

            return {
                success: true,
                status: response.status,
                statusText: response.statusText,
                data: responseJson
            }
        }
        console.log("Something went wrong")
}

export async function getChallengeById(id) {
    console.log(id)
    const response = await fetch(`${BASE_URL}:${PORT}/challenges/${id}`, {
        method: "get"
    })

    if(response.ok){
        let responseJson = [];
        if(response.status === 200){
            responseJson = await response.json();
        }

        return {
            success: true,
            status: response.status,
            statusText: response.statusText,
            data: responseJson
        }
    }
}