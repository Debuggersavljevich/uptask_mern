import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()



export const emailRegistro = async (datos) => {
    const {nombre, email, token} = datos
  
  
    const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
     }
    });
    // Informacion del email
    const info = await transport.sendMail({
        from: '"Uptask - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "Uptask - Confirmacion de cuenta",
        text: "Comprueba tu cuenta de Uptask",
        html: `<p>Hola ${nombre}</p>. Comprueba tu cuenta para poder entrar al sitio
                <p>Tu cuenta esta casi lista. Confirmala accediendo al siguiente enlace</p>
                <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Compruebala aqui</a>

                <p>Si no creaste tu cuenta, ignra este mail</p>
        `
    }) 

}

export const emailOlvidePassword = async (datos) => {

    
    const {nombre, email, token} = datos
  
  
    const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
     }
    });

   
    // Informacion del email
    const info = await transport.sendMail({
        from: '"Uptask - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "Uptask - Reestablece tu Password",
        text: "Reestablecer tu password:",
        html: `<p>Hola ${nombre}.</p> Has solicitado reestablecer tu password</p>
                <p>Sigue el siguiente enlace para modificar tu password:</p>
                <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a>
                <p>Si no solicitaste este cambio, ignora este mail</p>
        `
    }) 

}

