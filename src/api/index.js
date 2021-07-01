// node modules 하위의 라이브러리를 들고 온다
import axios from 'axios'


//1. HTTP Request & Response와 관련된 기본 설정
const config={
    baseUrl:"https://api.hnpwa.com/v0/"
}

//2. API 함수들 정리
function fetchUserInfo(userName){
    return axios.get(`${config.baseUrl}user/${userName}.json`)
}
function fetchItem(userId){
    return axios.get(`${config.baseUrl}item/${userId}.json`)
}

function fetchList(pageName){
    return axios.get(`${config.baseUrl}${pageName}/1.json`)
}

export{
    fetchUserInfo,
    fetchItem,
    fetchList
}