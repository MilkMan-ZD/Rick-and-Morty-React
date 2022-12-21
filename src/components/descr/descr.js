import './descr.scss';
import Morty from '../../resources/image/Morty.png';
import Rick from '../../resources/image/Rick.png';

const Descr = () => {
    return (
        <div className='app__first'>
            <div className='app__morty'><div className='color'><img src={Morty}></img><div>Morty Smith</div></div></div>
            <div className='app__morty'><div className='color'><img src={Morty}></img><div>Morty Smith</div></div></div>
            <div className='app__morty'><div className='color'><img src={Morty}></img><div>Morty Smith</div></div></div>
            <div className='app__morty'><div className='color'><img src={Rick}></img><div>Rick Sanchezh</div></div></div>
            <div className='app__morty'><div className='color'><img src={Rick}></img><div>Rick Sanchez</div></div></div>
            <div className='app__morty'><div className='color'><img src={Rick}></img><div>Rick Sanchez</div></div></div>
            <div className='app__morty'><div className='color'><img src={Morty}></img><div>Morty Smith</div></div></div>
            <div className='app__morty'><div className='color'><img src={Morty}></img><div>Morty Smith</div></div></div>
            <div className='app__morty'><div className='color'><img src={Morty}></img><div>Morty Smith</div></div></div>
        </div>
        )
    }
    
    export default Descr;