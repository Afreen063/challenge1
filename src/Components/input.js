import '../../src/App.css';
import errorImg from '../images/Group 2.svg'


export default function Input(props)
{
    return (
        <div className='input_div'>
            <input type={props.type} placeholder={props.placeholder} className='inputs' value={props.value} onChange={(event)=>{props.setValue(event.target.value)}} />
            {props.error?<div className='errorMsg'>
          <img src={errorImg} alt='error' className='errorImg' />
          <p className='msg'>{props.errorMsg}</p>
        </div>:null}
             
        </div>
       
    )
}