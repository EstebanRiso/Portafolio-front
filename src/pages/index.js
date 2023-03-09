import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState,useEffect } from 'react';
import { useRef } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  
  const myRef = useRef(null);
  const myRef2 = useRef(null);

  const [showNavbar, setShowNavbar] = useState(true);

  const [buttonStates, setButtonStates] = useState({
    button1: false,
    button2: false,
    button3: false,
  });

  const [direcciones,setDirecciones]=useState({
     direccion1:'right',
     direccion2:'right',
     direccion3:'right',
  })

  const [iterator,setIterator]=useState(1);
  const [loaded, setLoaded] = useState(false)


  const handleButtonClick = (button) => {
    
    setButtonStates((prevState) => ({
      ...prevState,
      [button]: !prevState[button],
    }));
  };

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };
  

  function handleScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 650) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  useEffect(() => {
    const timer=setInterval(()=>{
      setLoaded(false)  
        setTimeout(() => {
          setIterator(prevIterator => {  
            if (prevIterator < 6) {
              return prevIterator + 1;
            } else {
              return 1;
            }
          })
        },500);
      
    }, 4000)


    return () => {
      clearInterval(timer);
    }
  },[])



  const genImage=()=>{
    const image_src='/stiv_'+iterator+'.png'

    return <>
              <div className={`${styles.image_container} ${loaded? styles.loaded : ''}`}>
                  <Image  
                      src={image_src} 
                      width={620} 
                      height={480}
                      priority={true}
                      onLoadingComplete={() => setLoaded(true)}
                      alt={'esteban_riso'}
                      style={{display:'block', position: 'relative', zIndex: '1', top:'120px'}}
                  />
                </div>
            </>
  }

  const genArrow=(direccion)=>{
    setDirecciones((prevState) => ({
      ...prevState,
      [direccion]: 'right'? 'left':'right',
    }));
  }
  
  
  
  return (
    <>
      <Head>
          Bienvenido al Portafolio de Esteban Risopatrón
      </Head>
      <main className={styles.main}>
        <nav style={{ display: showNavbar ? 'flex' : 'none' }} className={styles.hud}>
            <button className={styles.item_hud}>¿Quién soy?</button>
            <button className={styles.item_hud} onClick={()=>scrollToRef(myRef)}>Proyectos</button>
            <button className={styles.item_hud} onClick={()=>scrollToRef(myRef2)}>Contacto</button>
        </nav>

        <div className={styles.content}> 

              <div className={styles.imagen_holder}>
                 <Image  
                      src={'/logo.png'} 
                      priority={true}
                      width={1280} 
                      height={480}
                      alt={'logo'}
                      style={{ position: 'absolute', top:'-50px'}}
                  />
                {genImage()}
                <p className={styles.presentacion}> <br></br><br></br>
                      ¡Hola!, me llamo Esteban Risopatrón, soy un Ingeniero Informático de la Universidad del 
                      Bío-Bío y te doy una cordial bienvenida a mi página web.
                      <br></br><br></br>Mi misión es satisfacer a mis clientes y empleadores por igual con todo 
                      lo relacionado sobre el rubro de la informática.
                </p>

              </div>
        
              <div className={styles.presentacion2}>
                  <h1 ref={myRef} className={styles.titular}>PROYECTOS</h1>
                  <br></br><br></br> <br></br><br></br>    
                  <p className={styles.subtitulo}>Reconocimiento de Imagenes</p>
                    <button className={styles.proyectos_button} onClick={() => {handleButtonClick('button1'); genArrow('direccion1')}}>
                      <Image  priority={true} src={'/arrow_down.png'} width={15} height={15} 
                      className={`${styles[`rotate_${direcciones.direccion1}`]}${buttonStates.button1 ? styles.rotate_active : '' }`}  
                    style={{ position: 'absolute', left:'3.5px',top:'3px'}}/>
                    </button>
                    {buttonStates.button1 ? 
                    <div>
                        <p>EL proyecto de reconocimiento de Imagenes lo hice en la Universidad del Bío Bío, como parte de un trabajo solicitado procesos
                          la facultad de ingenieria CIM UBB, el cual contemplaba la realización de un reconocedor de imagenes entrenado para reconocer herramientas
                          utilizando la API de inteligencia artificial Pytorch de Facebook, actualmente Meta.
                          Esta aplicación solo está para escritorio,la versión que poseo no tiene muchos datasets, por lo que es bastante proclive a errores, aqui el enlace de descarga</p>
                    </div> : <div></div>}
                  <br></br><br></br>
                  <p className={styles.subtitulo}>Giro de Ahorros del Minvu</p>
                    <button  className={styles.proyectos_button}  onClick={() =>{ handleButtonClick('button2'); genArrow('direccion2')}}>
                      <Image priority={true} src={'/arrow_down.png'} width={15} height={15} 
                        className={`${styles[`rotate_${direcciones.direccion2}`]}${buttonStates.button2 ? styles.rotate_active : '' }`}  
                        style={{ position: 'absolute', left:'3.5px',top:'3px'}}/>
                    </button>
                  { buttonStates.button2 ? 
                    <div>
                      <p>Este proyecto contempla la creación de una aplicación fullstack para el minvu en react de frontend y de backend nodejs express con el orm de sequelize
                      Tambien se proveyo la documentación, siguiendo todos los procesos formales de la creación de historias de usuario, 
                      los casos de uso, por lo tanto se entrevistó al departamento encargado de pagos del Minvu para conseguir los 
                      requerimientos, en el enlace a continuación pueden ver la aplicación, siendo ustedes los encargados de los giros
                      para que vean como funciona el programa </p>
                    </div> : 
                  <div></div>}



                <br></br><br></br>  
                <p className={styles.subtitulo}>Knn en k<sup>2</sup>-tree</p>
                  <button  className={styles.proyectos_button}  onClick={() => { handleButtonClick('button3'); genArrow('direccion3')}}>
                    <Image priority={true} src={'/arrow_down.png'} width={15} height={15} 
                      className={`${styles[`rotate_${direcciones.direccion2}`]}${buttonStates.button3 ? styles.rotate_active : '' }`}  
                      style={{ position: 'absolute', left:'3.5px',top:'3px'}}/>
                    </button>
                    {buttonStates.button3 ?
                      <div>
                        <p> Este proyecto es mi proyecto de titulación, como tiene mucha teoria de por medio sere un poco simple en explicar, 
                          aunque tambien tendrán descargable mi 
                          informe si quieren entrar en detalle</p>
                      </div>
                      :<div></div>
                    }
            
              </div>
              
              <div className={styles.presentacion2}>
                <h1 ref={myRef2} className={styles.titular}>CONTACTO</h1>
              </div>

            </div>
      </main>
    </>
  )
}
