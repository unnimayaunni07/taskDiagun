import { action, computed, observable } from 'mobx';
import moment from 'moment';
import apiClient from './apiClient';
import axios from 'axios'

export class UserSessionStore {
    constructor() {
       this.getData()
    }
    @observable
    data: any = []
    
    // @action
    // getData() {
    //     // return axios.get('https://apimocha.com/dgrj2103/item')
    //     return axios.get('/data/dataa.json')
    //         .then(action((res: any) => {
    //             console.log('data',res)
    //             return [true, res.data]
    //         }))
    //         .catch(action(err => {
    //             let errorMsg = err.response ? err.response.data.error : err.message
    //             return [false, errorMsg]
    //         }))
    // }
    
    @action
    getData() {

        return apiClient.get("/data/dataa.json")
            .then(action((res: any) => {
                return [true, res.data]
            }))
            .catch(action(err => {
                let errorMsg = err.response ? err.response.data.error : err.message
                return [false, errorMsg]
            }))
    }

    // @action
    // getData() {
    //     fetch('https://apimocha.com/dgrj2103/item', {
    //         mode: 'no-cors' // 'cors' by default
    //     })
    //     .then(action((res: any) => {
    //                 console.log('data',res)
    //                 return [true, res.data]
    //             }))
    //             .catch(action(err => {
    //                 let errorMsg = err.response ? err.response.data.error : err.message
    //                 return [false, errorMsg]
    //             }))
        
    // }
}
