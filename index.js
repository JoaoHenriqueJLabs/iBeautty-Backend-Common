const errorCode = require("./errorReturn/errorCode");
const errorMessage = require("./errorReturn/errorMessage");
const successCode = require("./successReturn/successCode");
const successMessage = require("./successReturn/successMessage");
const modelReturn = require("./modelReturn/modelReturn");

module.exports = function() {
    this.getErrorCode = () => {
        const errorCodeData = new errorCode();
        return errorCodeData;
    };
    this.getErrorMessage = () => {
        const errorMessageData = new errorMessage();
        return errorMessageData;
    };
    this.getSuccessCode = () => {
        const successCodeData = new successCode();
        return successCodeData
    };
    this.getSuccessMessage = () => {
        const successMessageData = new successMessage();
        return successMessageData;
    };
    this.getModelReturn = () => {
        const modelReturnData = new modelReturn();
        return modelReturnData;
    };
}