const validation = (userData) => {
    let errors={}
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)){
        errors.username='email imvalido'
    }
    if (!userData.username){errors.username='ingresar email'}
    if (userData.username.length>35){errors.username='no puede tener mas  de 35 caracteres'}
    if (!userData.password.match(/\d/)){errors.password='La contraseña debe tener al menos un numero'}
    if (userData.password.length<6||userData.password.length>10){errors.password='La contraseña debe tener entre 6 y 10 caracteres'}
    return errors
}
export default validation