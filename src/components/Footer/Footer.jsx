//----------------------
// IMAGENES
//----------------------
import fb from '../../img/facebook-svgrepo-com.svg';
import tw from '../../img/twitter-rounded-com.svg';
import ig from '../../img/instagram-svgrepo-com.svg';
import tk from '../../img/brand-tiktok-sq-svgrepo-com.svg';
import yt from '../../img/youtube-168-svgrepo-com.svg';
import logoFooter from '../../img/mp-logoReves.png';
//----------------------
// CSS
//----------------------
import './Footer.css';

import IdiomaContext from '../../contexto/idiomaContext';
import { useContext } from 'react';

// -----------------------
// HOOKS
// -----------------------
import useCount from '../../hooks/useCount';


const Footer = () => {
    // Accedo a los idiomas desde el contexto
    const idioma = useContext(IdiomaContext);

    const contador = useCount();

    return (
        <footer className='footer'>
            <div className="row">
                <div className="col-12 contenidoempresas">
                    <div className="col-md-3 contenido">
                        {/* Aqui utilizo el Context de idiomas y accedo al contenido.
                            Hago lo mismo con el custom hook useCount */}
                        <h5 className='titulo'>{idioma.emp}</h5>
                        <h4 className='display-4'>{contador.count.empresas}</h4>
                    </div>
                    <div className="col-md-3 contenido">
                        <h5 className='titulo'>{idioma.pro}</h5>
                        <h4 className='display-4'>{contador.count.proyectos}</h4>
                    </div>
                    <div className="col-md-3 contenido">
                        <h5 className='titulo'>{idioma.alu}</h5>
                        <h4 className='display-4'>{contador.count.alumnos}</h4>
                    </div>
                </div>
                <div className="text-center">
                    <ul className='ul'>
                        <li className='li'>
                            <a href="https://cifpcarlos3.es/es" target='blank'>
                                <h4 className='C3'>CIFP Carlos III</h4>
                            </a>
                        </li>
                        <li className='li'><small>C/ Carlos III, 30201 - Cartagena | 30019702@murciaeduca.es | 968321301</small></li>
                    </ul>
                    <ul className='d-flex ul justify-content-center align-items-center mt-3'>
                        <li className='mx-2 li'>
                            <a href="https://www.facebook.com/cifpcarlos3" target='blank'>
                                <img className='logoF' src={fb} alt="Logo Facebook" />
                            </a>
                        </li>
                        <li className='mx-2 li'>
                            <a href="https://twitter.com/cifpcarlos3" target='blank' >
                                <img className='logoF' src={tw} alt="Logo Twitter" />
                            </a>                            
                        </li>
                        <li className='mx-2 li'>
                            <a href="https://www.instagram.com/cifpcarlos3" target='blank'>
                                <img className='logoF' src={ig} alt="Logo Instagram" />
                            </a>                            
                        </li>
                        <li className='mx-2 li'>
                            <a href="https://www.tiktok.com/@cifpcarlos3" target='blank'>
                                <img className='logoF' src={tk} alt="Logo TikTok" />
                            </a>                            
                        </li>
                        <li className='mx-2 li'>
                            <a href="https://www.youtube.com/c/cifpcarlosiiicartagena" target='blank'>
                                <img className='logoF' src={yt} alt="Logo YouTube" />
                            </a>                            
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='ul'>
                        <li className='li'>
                            <a href="/">
                                <img src={logoFooter} className='logoF' alt="Logo Marca Personal" />
                            </a>
                        </li>
                        <li className='li'>
                            <small><span>Marca Personal FP</span> | Diseño Web CFGS Desarrollo de Aplcaciones Web &copy; 2025</small>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer;