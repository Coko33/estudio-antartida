import Logo from '../svgs/Logo';
import './Nav.css'
import { useState, useEffect } from "react";
import { AnimatedText } from './AnimatedText';
import { useNavigate, Link } from "react-router-dom";

export default function Nav() {
	const navigate = useNavigate();
    const [navIsOpen, setNavIsOpen] = useState(false);
	const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
	const goToHome = () => {
		navigate("/");
		navIsOpen && setNavIsOpen(false)
	  };

	const navegar = () => {
		setNavIsOpen(false)
		setIsChecked(false)
	} 
    return(
        <>
            <div className='nav__container'>
                <div onClick={goToHome} className='nav-logo__container floating-icon'>
                    <Logo></Logo>
                </div>
                <div className='nav-title__container'><AnimatedText word="ESTUDIO ANTARTIDA"></AnimatedText></div>
                <div class={`nav-button__container movil ${navIsOpen && 'navIsOpen'}`}>
		            <input type="checkbox" id="btn_menu" checked={isChecked} 
        onChange={handleChange} onClick={() => setNavIsOpen(prev => !prev)}></input>
		                <label for="btn_menu" class="btn_menu flex_column">
			                <span id="btn_span_1" class="btn_span"></span>
			                <span id="btn_span_2" class="btn_span"></span>
			                <span id="btn_span_3" class="btn_span"></span>
		                </label>    
	            </div>
            </div>
            <div class={`nav-list__container`}>
		    	<nav>
		    		<ul class={`container_menu flex_column ${navIsOpen && 'navIsOpen'}`}>
		    			<li onClick={() => navegar()}><Link to="/nuestrostrabajos">nuestros trabajos</Link></li>
		    			<li onClick={() => navegar()}><Link to="/nosotros">nosotros</Link></li>
		    			<li><a href="#">diseños</a></li>
		    			<li><a href="#">contacto</a></li>
		    		</ul>
		    	</nav>
		    </div>
        </>
    )
}