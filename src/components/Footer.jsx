import React from 'react';

const Footer = () => {
    return (
        <footer className=''>
            <section className='flex flex-col md:flex-row justify-center items-center md:justify-between m-5  font-helvetica'>
                <div className='mb-5 md:mb-0 md:mr-10  md:text-left '>
                    <strong className='font-roboto'>Suscribite al newsletters</strong><br />
                    <span className=''>Te enviaremos una sorpresa.</span>
                    <form action="">
                        <input className='border-b-2 border-black focus:outline-none mt-2' type="email" placeholder='Email' /><br />
                        <button className='bg-black font-helvetica mt-3 text-white p-2 tracking-widest'>ENVIAR</button>
                    </form>
                </div>


                <div className='mb-5 md:mb-0 md:mr-10  md:text-left'>
                    <strong>VENTAS:</strong><br />
                    <a href="mailto:ventas@smile.com.ar">ventas@smile.com.ar</a><br />
                    <strong>ATENCION AL CLIENTE:</strong><br />
                    <a href="mailto:atencionalcliente@smile.com.ar">atencionalcliente@smile.com.ar</a><br />
                    <strong>TRABAJA CON NOSOTROS:</strong><br />
                    <a href="mailto:rrhh@smile.com.ar">rrhh@smile.com.ar</a>
                </div>


                <div className='mb-5 md:mb-0 md:mr-10  md:text-left'>
                    <a href="">COMO COMPRAR</a><br />
                    <a href="">PAGOS</a><br />
                    <a href="">CAMBIOS Y DEVOLUCIONES</a><br />
                    <a href="">ENVIOS</a><br />
                    <a href="">PREGUNTAS GENERALES</a><br />
                </div>
            </section>
            <div className='flex justify-center text-center m-20 font-helvetica'>
                <p>
                    Copyright SMILE | Ropa sin género para humanos. - 2024. Todos los derechos reservados. <br />
                    Defensa de las y los consumidores. Para reclamos <a href=""> <strong>ingrese aquí</strong></a>
                </p>

            </div>

        </footer>
    );
}

export default Footer;
