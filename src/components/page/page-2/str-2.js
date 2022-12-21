import './str-2.scss';
import Summer_Smith from '../../../resources/image/Summer_Smith.png';

const Profile = () => {
    return (
        <div className='app__flex'>
            <div><img className='' src={Summer_Smith}></img></div>
            <div>
                <div><a className='app__name'>Summer Smith</a></div>
                <div><a className='app__status'>Gender:</a> <a>Female</a></div>
                <div><a className='app__status'>Location:</a> <a>Earth (Replacement Dimension)</a></div>
                <div><a className='app__status'>Status:</a> <a>Alive</a></div>
            </div>
        </div>
    )
}


const Str_2 = () => {
    return (
        <Profile />
    )
}
export default Str_2;