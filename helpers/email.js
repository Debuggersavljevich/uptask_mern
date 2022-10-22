import nodemailer from 'nodemailer'


export const emailRegistro = async (datos) => {
    const {nombre, email, token} = datos
  
  
    const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "65f04d6619fd96",
        pass: "0523d5a55be3bb"
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

