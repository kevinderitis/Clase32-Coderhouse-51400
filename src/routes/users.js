import { Router } from 'express';
import CustomError from '../services/errors/CustomError.js';
import EErrors from '../services/errors/enums.js';
import { generateUserErrorInfo, generateUIDErrorInfo } from '../services/errors/info.js';

const userRouter = Router();

const users = [];

userRouter.get('/', (req, res) => {
    res.send({ status: 'success', payload: users })
});

userRouter.post('/', (req, res) => {
    const { first_name, last_name, email } = req.body;
    if(!first_name || !last_name || !email){
        CustomError.createError({
            name: 'Error al registrar usuario',
            cause: generateUserErrorInfo({ first_name, last_name, email}),
            message: 'Error al intentar crear el usuario',
            code: EErrors.INVALID_TYPES
        })
    }

    const user = {
        first_name,
        last_name,
        email
    }

    users.push(user);
    res.send({ status: 'success', payload: user})
})

userRouter.get('/:uid', (req, res) => {
    const uid = parseInt(req.params.uid);
    if(isNaN(uid) || uid < 0 || uid === undefined){
        CustomError.createError({
            name: 'uid invalido',
            cause: generateUIDErrorInfo(req.params.uid),
            message: 'uid invalido enviado',
            code: EErrors.INVALID_PARAM
        })
    }

    res.send({uid})
})

export default userRouter;