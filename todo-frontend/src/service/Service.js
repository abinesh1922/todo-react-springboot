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
            console.log("error:", data)
        }
        return data;
    } catch(e){
        throw(e)
    }
}

export const deleteById = async (id) => {
    try{
        const response = await fetch(`http://localhost:8080/api/delete/${id}`);
        const data = await response.json();

        if(!response.ok){
            console.log("Error:", data);
        }
        return data;
    }catch(e){
        throw(e);
    }
}

export const deleteAllTodo= async ()=>{
    try{
        const response = await fetch(`http://localhost:8080/api/delete`);
        const data = await response.json();
        if(!response.ok){
            console.log("Error in Deleting");
        }
        return data;
    } catch(e){
        throw(e);
    }
}

export const getAllTodo = async () => {
    try{
        const response = await fetch (`http://localhost:8080/api`);
        const data =await response.json();

        if(!response.ok){
            console.log("Error");
        }
        return data;
    } catch(e){
        throw(e);
    }
}
