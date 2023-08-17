import EErrors from "../../services/errors/enums.js";

export default (error, req, res, next) => {
    console.log(error.cause);
    switch (error.code) {
        case EErrors.INVALID_TYPES:
            res.send({ status: 'error', error: error.name })
            break;

        case EErrors.INVALID_PARAM:
            res.send({ status: 'error', error: error.name, cause: error.cause })
            break;
        
        default:
            res.send({ status: 'error', error: 'Unhandled error' })
    }
}