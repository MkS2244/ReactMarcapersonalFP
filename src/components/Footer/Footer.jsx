//----------------------
// IMAGENES
//----------------------
import fb from '../../img/facebook-svgrepo-com.svg';
import tw from '../../img/twitter-rounded-com.svg';
import ig from '../../img/instagram-svgrepo-com.svg';
import tk from '../../img/brand-tiktok-sq-svgrepo-com.svg';
import yt from '../../img/youtube-168-svgrepo-com.svg';
import './Footer.css';

const Footer = () => {

    return (
        <footer>
            <div className="row">
                <div className="col-12 contenidoempresas">
                    <div className="col-md-3 contenido">
                        <h5 className='titulo'>Empresas</h5>
                        <h4 className='display-4'>0</h4>
                    </div>
                    <div className="col-md-3 contenido">
                        <h5 className='titulo'>Proyectos</h5>
                        <h4 className='display-4'>0</h4>
                    </div>
                    <div className="col-md-3 contenido">
                        <h5 className='titulo'>Alumnos</h5>
                        <h4 className='display-4'>0</h4>
                    </div>
                </div>
                <div className="text-center">
                    <ul>
                        <li><a href="https://cifpcarlos3.es/es"><h4>CIFP Carlos III</h4></a></li>
                        <li><small>C/ Carlos III, 30201 - Cartagena | 30019702@murciaeduca.es | 968321301</small></li>
                    </ul>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/cifpcarlos3" target='blank'>
                                <img className='logoF' src={fb} alt="Logo Facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/cifpcarlos3" target='blank' >
                                <img className='logoF' src={tw} alt="Logo Twitter" />
                            </a>                            
                        </li>
                        <li>
                            <a href="https://www.instagram.com/cifpcarlos3" target='blank'>
                                <img className='logoF' src={ig} alt="Logo Instagram" />
                            </a>                            
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/@cifpcarlos3" target='blank'>
                                <img className='logoF' src={tk} alt="Logo TikTok" />
                            </a>                            
                        </li>
                        <li>
                            <a href="https://www.youtube.com/c/cifpcarlosiiicartagena" target='blank'>
                                <img className='logoF' src={yt} alt="Logo YouTube" />
                            </a>                            
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer;