module.exports = function() {
    this.error = "Error";
    this.success = "Success";
    this.defaultReturnNoData = (statusReturn, messageReturn, codeReturn) => {
        return { status: statusReturn, message: messageReturn, code: codeReturn };
    };
    this.defaultReturnWithData = (statusReturn, dataReturn) => {
        return { status: statusReturn, data: dataReturn };
    };
};