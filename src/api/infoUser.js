import service from "@/request";



export  function getUserPLaylist(data){
    return service({
        method:'get',
        url:`/user/playlist?uid=${data}`
    })
}

export  function getUserFollows(data){
    return service({
        method:'get',
        url:`/user/follows?uid=${data}`
    })
}
export  function getRecord(data){
    return service({
        method:'get',
        url:`/record/recent/song?limit=10&cookie=${data}`
    })
}
export  function getTopic(data){
    return service({
        method:'get',
        url:`/record/recent/dj?limit=5&cookie=${data}`
    })
}