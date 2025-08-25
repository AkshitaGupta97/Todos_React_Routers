import { useEffect } from "react";

export default function StartApi() {

    useEffect(()=> {
        getUserData();
    }, []);
    
    async function getUserData(){
        const API = 'https://api.restful-api.dev/objects';
        let response = await fetch(API);
        let data = await response.json();
        console.log(data);  
    }


    return(
        <div>
            <h1>API Calling </h1>
        </div>
    )
}