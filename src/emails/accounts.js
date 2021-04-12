const sgMail = require("@sendgrid/mail");

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "michael.diedricks@hotmail.com",
    subject: "Welcome to the App!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    html: `<p>Welcome to the app, ${name}. Let me know how you get along with the app.</p>`,
  });
};
const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "michael.diedricks@hotmail.com",
    subject: "Sorry to see you go!",
    text: `We're sorry you have to leave, ${name}. Could you please let us know if there is anything we could have done to improved your experience.`,
    html: `<p>We're sorry you have to leave, ${name}. Could you please let us know if there is anything we could have done to improved your experience.</p>`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
