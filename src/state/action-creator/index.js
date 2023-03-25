export const deposite = (amount) =>{
    return (dispath) =>{
        dispath({
            type : "diposite",
            payload : amount,
        })
    }  
}

export const withdraw = (amount) =>{
    return (dispath) =>{
        dispath({
            type : "withdraw",
            payload : amount,
        })
    }
}

