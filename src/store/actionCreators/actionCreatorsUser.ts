import { AppDispatch } from '../index';
import { AuthEnum, SetErrorAction, SetUserAction, SetLoadingAction, SetAuthAction } from '../reducers/auth/types';
import { User } from '../../models/user';
import axios from 'axios';

export const authActionCreators = {
   setUser: (user: User): SetUserAction => ({type: AuthEnum.SET_USER, payload: user}),
   setError: (error: string): SetErrorAction => ({type: AuthEnum.SET_ERROR, payload: error}),
   setLoading: (loading: boolean): SetLoadingAction => ({type: AuthEnum.SET_LOADING, payload: loading}),
   setAuth: (auth: boolean): SetAuthAction => ({type: AuthEnum.SET_AUTH, payload: auth}),
   login: (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
         dispatch(authActionCreators.setLoading(true))
         const {data} = await axios.get<User[]>('./user.json')
         const mockUser = data.find(user => user.username === username && user.password === password) 
         // console.log(mockUser)
         setTimeout(async() => {
            if (mockUser) {
               localStorage.setItem("auth", "true")
               localStorage.setItem("username", mockUser.username)
               dispatch(authActionCreators.setAuth(true))
               dispatch(authActionCreators.setUser(mockUser))
            } else {
               dispatch(authActionCreators.setError('Wrong Login or Password'))
            }
            dispatch(authActionCreators.setLoading(false))
         }, 1000)
         
      } catch (e) {
         dispatch(authActionCreators.setError('something wrong with authentification'))
      }
   },
   logout: () =>  async (dispatch: AppDispatch) => {
      try {
         localStorage.removeItem('auth')
         localStorage.removeItem('username')
         dispatch(authActionCreators.setUser({} as User))
         dispatch(authActionCreators.setAuth(false))
      } catch (e) {
         dispatch(authActionCreators.setError('something wrong with authentification'))
      }
   }
}