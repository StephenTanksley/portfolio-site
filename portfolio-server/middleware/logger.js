module.exports = (type) => (req, res, next) => {
    let time = new Date();
    let utcTime = time.toUTCString();

    if(type === 'long') {
        console.log(`
        Request type: ${req.method}\n
        Request route: ${req.url}\n
        Request time: ${utcTime}\n
        Client IP: ${req.ip}`)
        next()
    } else {
        console.log(req)
        return
    }     
}