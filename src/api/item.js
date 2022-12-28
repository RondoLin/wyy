import service from "@/request";

export  function getItemMusic(data){
    return service({
        method:'post',
        url:`/playlist/detail?id=${data}`
    })
}

export  function getItemList(data){
    return service({
        method:'post',
        url:`/playlist/track/all?id=${data}&limit=30&offset=0`
    })
}
export  function getMusicLyric(data){
    return service({
        method:'get',
        url:`/lyric?id=${data}`
    })
}
