// Read configuration from the environment

// Datbase configruation
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword =process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const dbPort = process.env.DB_PORT;

// Twilio configruation
const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
const twilioFromPhoneNumber = process.env.TWILIO_FROM_PHONE_NUMBER;

// User Manager configruation
const userManagerServiceUrl = '';
const userManagerAPIkey = '';

module.exports = {
    dbHost,
    dbUser,
    dbPassword,
    dbName,
    dbPort,
    twilioAccountSid,
    twilioAuthToken,
    twilioFromPhoneNumber,
    userManagerServiceUrl,
    userManagerAPIkey
};
