
'use strict'

const nodemailer = require('nodemailer')

module.exports = [{
  name: 'sendEmail',
  description: 'This action was generated using the command line tool',
  inputs: {
    from: {
      required: true,
      validator: 'filled|max:20'
    },
    to: {
      required: true,
      default: 'Default value'
    },
    subject: {
      required: true,
      default: 'Default value'
    },
    html: {
      required: true,
      default: 'Default value'
    },
    text: {
      required: true,
      default: 'Default value'
    }
  },

  async run(api, action) {
    // put the input parameters on the response object
    const { from, to, subject, html, text } = action.params
    const smtpConfig = {
      host: "smtp.mailtrap.io",
      port: "2525",
      secure: false, // upgrade later with STARTTLS
      auth: {
        user: "d55b7fdb18c00d",
        pass: "83170d319d9ca2",
      }
    }

    const transporter = await nodemailer.createTransport(smtpConfig)
    const email = await transporter.sendMail({ from, to, subject, html, text })
    action.response.email = email
  }
}]
