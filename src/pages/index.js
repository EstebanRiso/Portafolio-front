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
  const myRef3 = useRef(null);

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
    if (scrollY > 625) {
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
             
                  <div className={`${styles.anim} ${loaded? styles.loaded : ''}`}>
                    <Image  
                        className={styles.image_styles}
                        src={image_src} 
                        width={620} 
                        height={480}
                        priority={true}
                        onLoadingComplete={() => setLoaded(true)}

                        alt={'Esteban Risopatron'}
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
          <link rel='icon' href='/favicon.ico'/>
          <title>Bienvenido al Portafolio de Esteban Risopatr??n</title>
      </Head>
      <main className={styles.main}>
        <nav style={{ display: showNavbar ? 'flex' : 'none' }} className={styles.hud}>
            <button className={styles.item_hud} onClick={()=>scrollToRef(myRef)}>??Qui??n soy?</button>
            <button className={styles.item_hud} onClick={()=>scrollToRef(myRef2)}>Proyectos</button>
            <button className={styles.item_hud} onClick={()=>scrollToRef(myRef3)}>Contacto</button>
        </nav>

        <div ref={myRef} className={styles.content}> 

              <div className={styles.content_holder}>
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
                      ??Hola!, me llamo Esteban Risopatr??n, soy un Ingeniero Inform??tico de la Universidad del 
                      B??o-B??o y te doy una cordial bienvenida a mi p??gina web.
                      <br></br><br></br>Mi misi??n es satisfacer a mis clientes y empleadores por igual con todo 
                      lo relacionado sobre el rubro de la inform??tica.
                </p>

              </div>
        
              <div className={styles.presentacion2}>
                  <h1 ref={myRef2} className={styles.titular}>PROYECTOS</h1>
                  <br></br><br></br> <br></br><br></br>    
                  <p className={styles.subtitulo}>Reconocimiento de Imagenes</p>
                    <button className={styles.proyectos_button} onClick={() => {handleButtonClick('button1'); genArrow('direccion1')}}>
                      <Image  priority={true} src={'/arrow_down.png'} width={15} height={15} 
                      className={`${styles[`rotate_${direcciones.direccion1}`]}${buttonStates.button1 ? styles.rotate_active : '' }`}  
                    style={{ position: 'absolute', left:'3.5px',top:'3px'}}/>
                    </button>
                    {buttonStates.button1 ? 
                    <div>
                        <p>EL proyecto de reconocimiento de Imagenes lo hice en la Universidad del B??o B??o, como parte de un trabajo solicitado procesos
                          la facultad de ingenieria CIM UBB, el cual contemplaba la realizaci??n de un reconocedor de imagenes entrenado para reconocer herramientas
                          utilizando la API de inteligencia artificial Pytorch de Facebook, actualmente Meta.
                          Esta aplicaci??n solo est?? para escritorio,la versi??n que poseo no tiene muchos datasets, por lo que es bastante proclive a errores, aqui el enlace de descarga</p>
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
                      <p>Este proyecto contempla la creaci??n de una aplicaci??n fullstack para el minvu en react de frontend y de backend nodejs express con el orm de sequelize
                      Tambien se proveyo la documentaci??n, siguiendo todos los procesos formales de la creaci??n de historias de usuario, 
                      los casos de uso, por lo tanto se entrevist?? al departamento encargado de pagos del Minvu para conseguir los 
                      requerimientos, en el enlace a continuaci??n pueden ver la aplicaci??n, siendo ustedes los encargados de los giros
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
                        <p> Este proyecto es mi proyecto de titulaci??n, como tiene mucha teoria de por medio sere un poco simple en explicar, 
                          aunque tambien tendr??n descargable mi 
                          informe si quieren entrar en detalle</p>
                      </div>
                      :<div></div>
                    }
            
              </div>
              
              <div className={styles.presentacion2}>
                <h1 ref={myRef3} className={styles.titular}>CONTACTO</h1>
              </div>

            </div>
      </main>
    </>
  )
}
