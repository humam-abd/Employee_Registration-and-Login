exports.setresponse = function(token, status, message, res) {
    commonresponse = {
        token: token,
        status: status,
        message: message,
        res: res
    }
    return commonresponse;
}