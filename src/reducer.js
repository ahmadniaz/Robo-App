// export const CHANGE_SEARCH_FIELD='CHANGE_SEARCH_FIELD';

import { CHANGE_SEARCH_FIELD,
         REQUEST_ROBOT_PENDING,
         REQUEST_ROBOT_SUCCESS,
         REQUEST_ROBOT_FAILED
} from './constants.js'

const initialStateSearch = {
	searchField: ''

}

export const searchRobots=(state=initialStateSearch, action={})=>{

    
     switch(action.type){

     	case CHANGE_SEARCH_FIELD:
     	return Object.assign({}, state, {searchField:action.payload})

      	default:
     	return state;
     }   
}

const initialStateRobots = {
	isPending: true,
    robots:[],
    error:''

}

export const robotsRequest=(state=initialStateRobots, action={})=>{

    
     switch(action.type){

     	case REQUEST_ROBOT_PENDING:
     	return Object.assign({}, state, {isPending:true})
     	case REQUEST_ROBOT_SUCCESS:
     	return Object.assign({}, state, {robots:action.payload, isPending:false})
     	case REQUEST_ROBOT_FAILED:
     	return Object.assign({}, state, {eror:action.payload, isPending:false})

     	default:
     	return state;
     }   
}
	