//Response structure
exports.setresponse = function(auth, token, status, message, res) {
    commonresponse = {
        auth: auth,
        token: token,
        status: status,
        message: message,
        res: res
    }
    return commonresponse;
}