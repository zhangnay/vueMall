import axios from 'axios'
export  function request(config){
    const a1 = axios.create({
    // baseURL: 'http://123.207.32.32:8000', 
    baseURL:"http://152.136.185.210:7878/api/hy66",
    timeout:5000
    });
    a1.interceptors.request.use(config=>{return config},err=>{console.log(err);})
    a1.interceptors.response.use(res=>{return res},err=>{console.log(err);})
    return a1(config)
}