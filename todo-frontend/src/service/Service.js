export const postData= async (payload)=>{
    try{
        const response = await fetch(`http://localhost:8080/api/create`, {
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": JSON.stringify(payload)
        })
        
        const data = await response.json();

        if(!response.ok){
            console.log(data)
        }
        console.log("created Successfully:", data);
        return data;

    } catch(e){
        console.log(e.message);
    }
    
}

export const getDataById= async (id)=>{
    try{
        const response = await fetch(`http://localhost:8080/api/${id}`)
        const data = await response.json()
        if(!response.ok){
            console.log("errot", data)
        }
        return data
    } catch(e){
        throw(e)
    }
}
