export default function responseDelay(req, res, next) {
    
    setTimeout(() => {
        next();
    }, 1000);

}