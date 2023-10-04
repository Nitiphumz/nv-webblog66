import Api from '@/services/Api'

export default{
    register(){
        return Api().post('register', credentials)
    },
    login(credentials){
        return Api().post('login',credentials)

    }
}