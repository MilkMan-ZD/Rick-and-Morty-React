import './banner.scss';
import logo_1 from '../../resources/image/bannerLogo_1.png';
import logo_2 from '../../resources/image/bannerLogo_2.png';

const Banner = () => {
    return (
        <div className="app__banner">
            <img src={logo_1} alt="Logo"/>
            <div className="app__banner-text">
                Rick and motry!<br/>
                Portal!
            </div>
            <img className='app__banner-img_2' src={logo_2} alt="Logo"/>
        </div>
    )
}

export default Banner;