
import service from "@/request";

export  function getBanners(){
    return service({
        method:'get',
        url:'/banner?type=2'
    })
}

export  function getMusiclist(){
    return service({
        method:'get',
        url:'/personalized?limit=30'
    })
}

export  function getSearch(data){
    return service({
        method:'get',
        url:`/cloudsearch?keywords=${data}`
    })
}

export function getEmailLogin(data){
    return service({
        method:"GET",
        url:`/login/email?email=${data.email}&password=${data.password}`
    })
}
export function getqr1Login(data){
    return service({
        method:"GET",
        url:`/login/qr/key?timestamp=${data}`
    })
}
export function getqr2Login(data){
    return service({
        method:"GET",
        url:`/login/qr/create?key=${data.key}&qrimg=${data.qrimg}`
    })
}
export function getqr3Login(data){
    return service({
        method:"GET",
        url:`/login/qr/check?key=${data.key}&timestamp=${data.timestamp}`
    })
}

export function getLoginUser(data){
    return service({
        method:"GET",
        url:`/user/detail?uid=${data}`
    })
}

export function getRecommendMusic(data){
    return service({
        method:"GET",
        url:`/recommend/resource?cookie=${data}`
    })
}

export function getpersonalFM(data){
    return service({
        method:"GET",
        url:`/personal_fm?cookie=${data}`
    })
}
export function getTop(data){
    return service({
        method:"GET",
        url:'/toplist'
    })
}
export function getSubscribe(data){
    return service({
        method:"GET",
        url:`/playlist/subscribe?t=${data.t}&id=${data.id}&cookie=${data.cookie}`
    })
}
export function getLoginStatus(data){
    return service({
        method:"GET",
        url:`/login/status?cookie=${data}`
    })
}


export function getDJ(data){
    return service({
        method:"GET",
        url:'/dj/today/perfered'
    })
}
export function getDJList(data){
    return service({
        method:"GET",
        url:`/dj/program?rid=${data}&limit=5`
    })
}







