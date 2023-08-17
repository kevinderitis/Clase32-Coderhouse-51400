export const generateUserErrorInfo = user => {
    return `Uno o mas parametros no son validos: 
    - first_name: necesita recibir un String, recibió: ${user.first_name}
    - last_name: necesita recibir un String, recibió: ${user.last_name}
    - email: necesita recibir un String, recibió: ${user.email}`
}

export const generateUIDErrorInfo = uid => {
    return `- uid tiene que ser un numero y se recibió: ${uid}`
}