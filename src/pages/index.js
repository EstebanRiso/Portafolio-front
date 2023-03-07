import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState,useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
   
  const [buttonStates, setButtonStates] = useState({
    button1: false,
    button2: false,
    button3: false,
  });

  const [iterator,setIterator]=useState(1);
  
  const [loaded, setLoaded] = useState(false)

  const handleButtonClick = (button) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [button]: !prevState[button],
    }));
  };
  

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
      
    }, 3000)
    return () => clearInterval(timer)
  },[])



  const genImage=()=>{
    const image_src='/stiv_'+iterator+'.png'

    return <div className={`${styles.image_container} ${loaded? styles.loaded : ''}`}>
                <Image  
                    src={image_src} 
                    width={620} 
                    height={480}
                    onLoadingComplete={() => setLoaded(true)}
                    alt={'esteban_riso'}
                />
            </div>
  }
  
  
  
  return (
    <>
      <Head>
          Bienvenido al Portafolio de Esteban Risopatrón
      </Head>
      <main className={styles.main}>
        <div className={styles.hud}>
            <button className={styles.item_hud}>¿Quién soy?</button>
            <button className={styles.item_hud}>Trabajos</button>
            <button className={styles.item_hud}>Contacto</button>
        </div>

        <div className={styles.content}> 

              <div className={styles.imagen_holder}>
                {genImage()}
              </div>

              <div className={styles.presentacion}>
                <p> Hola me llamo Esteban Risopatrón, soy un ingeniero informático de la Universidad del Bío-Bío y te doy una cordial bienvenida a mi página web portafolio,
                mi misión es satisfacer a mis clientes y empleadores por igual con todo lo relacionado sobre el rubro de la informática.</p>
                <br></br>
                <p>La proactividad y atención al detalle son mis mayores ventajas competitivas, y en esta página web veras todos mis proyectos que haré en el transcurso de mi carrera</p>
              </div>
        
              <div className={styles.presentacion}>
                  Proyectos
                <div>Reconocimiento de Imagenes</div>
                <button className={styles.proyectos_button} onClick={() => handleButtonClick('button1')}>
                  
                </button>
                {buttonStates.button1 ? 
                  <div>
                    <p>EL proyecto de reconocimiento de Imagenes lo hice en la Universidad del Bío Bío, como parte de un trabajo solicitado por</p>
                    <p>la facultad de ingenieria CIM UBB, el cual contemplaba la realización de un reconocedor de imagenes entrenado para reconocer herramientas</p>
                    <p>utilizando la API de inteligencia artificial Pytorch de Facebook, actualmente Meta.</p>
                    <p>Esta aplicación solo está para escritorio,la versión que poseo no tiene muchos datasets, por lo que es bastante proclive a errores, aqui el enlace de descarga</p>
                  </div> :
                  <div></div>}
                <div>Creador de Giro de Ahorros del Minvu</div>
                  <button onClick={() => handleButtonClick('button2')}>
                    click
                  </button>
                  { buttonStates.button2 ? 
                    <div>
                      <p>Este proyecto contempla la creación de una aplicación fullstack para el minvu en react de frontend y de backend nodejs express con el orm de sequelize</p>
                      <p>Tambien se proveyo la documentación, siguiendo todos los procesos formales de la creación de historias de usuario, los casos de uso, por lo tanto se entrevistó</p>
                      <p>al departamento encargado de pagos del Minvu para conseguir los requerimientos, en el enlace a continuación pueden ver la aplicación, siendo ustedes los "encargados de los giros"</p>
                      <p>para que vean como funciona el programa</p>
                    </div> : 
                  <div></div>}
                <div>Knn en k<sup>2</sup>-tree</div>
                  <button onClick={() => handleButtonClick('button3')}>
                      click
                    </button>
                    {buttonStates.button3 ?
                      <div>
                        <p> Este proyecto es mi proyecto de titulación, como tiene mucha teoria de por medio sere un poco simple en explicar, aunque tambien tendrán descargable mi informe si quieren entrar en detalle</p>
                        <p> </p> 
                      </div>
                      :<div></div>
                    }
            
              </div>
            </div>
      </main>
    </>
  )
}
