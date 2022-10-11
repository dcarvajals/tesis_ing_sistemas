/**
 * @function Function for adding notification messages
 * @param {number} status
 * @param {string} information
 * @param {array} data
 * */
function setNotifications(status, information, data) {
    let notification = 
    {status: 0, information: "Thank you for using armadillo.js",
    type: "", data: []};
    notification.status = status;
    notification.information = information;
    notification.data = data;
    notification.type = 
    status === 0 ? "information" : status === 1 ? "success"
        : status === 2 ? "warning" : "error";
    console.log(notification);
    notifications.push(notification);
}