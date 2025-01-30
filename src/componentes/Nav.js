import Logo from '../svgs/Logo';
import './Nav.css'
import { useState, useEffect } from "react";

export default function Nav() {
    const [navIsOpen, setNavIsOpen] = useState(false);
    console.log(navIsOpen)
    return(
        <>
            <div className='nav__container'>
                <div className='nav-logo__container'>
                    <Logo></Logo>
                </div>
                <div className='nav-title__container'><h2>ESTUDIO ANTARTIDA</h2></div>
                <div class={`nav-button__container movil ${navIsOpen && 'navIsOpen'}`}>
		            <input type="checkbox" id="btn_menu" onClick={() => setNavIsOpen(prev => !prev)}></input>
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
		    			<li><a href="#">inicio</a></li>
		    			<li><a href="#">nosotros</a></li>
		    			<li><a href="#">diseños</a></li>
		    			<li><a href="#">contacto</a></li>
		    		</ul>
		    	</nav>
		    </div>
        </>
    )
}