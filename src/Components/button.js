import google from '../../src/images/Group 9.png'
import facebook from '../../src/images/Rectangle 17.png'


export default function Button(props)
{
    return (
        <div className="button">
            {props.logo === 'google'? <img src={  google } alt='Logo' className='google' />:<img src={  facebook } alt='Logo' className='facebook' />}
           
            <button>{ props.name}</button>
        </div>
    )
}