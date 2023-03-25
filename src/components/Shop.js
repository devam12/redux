import { React } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
import { useSelector } from 'react-redux'

const Notes = (props) => {
    const amount = useSelector(state => state.amount) 
    const dispatch = useDispatch();
    // const action = bindActionCreators(actionCreators, dispatch);
    const {deposite , withdraw} = bindActionCreators(actionCreators, dispatch);


    return (
        <div className="container">
            <h2> Deposit & Withraw money {amount} </h2>
            {/* <button type="button" className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.deposite(100))}}>+</button>
            <button type="button" className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdraw(100))}}>-</button> */}
            
            <button type="button" className="btn btn-primary mx-2" onClick={()=>{deposite(100)}}>+</button>
            <button type="button" className="btn btn-primary mx-2" onClick={()=>{withdraw(100)}}>-</button>
        </div>
    )
}

export default Notes