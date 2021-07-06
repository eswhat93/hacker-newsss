// node modules 하위의 라이브러리를 들고 온다
import axios from 'axios'


//1. HTTP Request & Response와 관련된 기본 설정
const config={
    baseUrl:"https://api.hnpwa.com/v0/"
}

//2. API 함수들 정리
async function fetchUserInfo(userName){
    try{
        return await axios.get(`${config.baseUrl}user/${userName}.json`)
    }catch(error){
        console.log(error);
    }

}
async function fetchItem(userId){
    try {
        return await axios.get(`${config.baseUrl}item/${userId}.json`)
    } catch (error) {
        console.log(error);
    }
    
}

async function fetchList(pageName){
    try {
        return await axios.get(`${config.baseUrl}${pageName}/1.json`)
    } catch (error) {
        console.log(error);
    }
    
}

export{
    fetchUserInfo,
    fetchItem,
    fetchList
}