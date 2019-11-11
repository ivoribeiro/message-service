
'use strict'

const nodemailer = require('nodemailer')

module.exports = [{
  name: 'sendEmail',
  description: 'This action was generated using the command line tool',
  inputs: {
    from: {
      required: true,
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
      required: false,
      default: 'Default value'
    }
  },

  async run(api, action) {
    // put the input parameters on the response object
    const { from, to, subject, html, text } = action.params

    const transporter = await nodemailer.createTransport(api.config.smtpConfig)
    const email = await transporter.sendMail({ from, to, subject, html, text })
    action.response.email = email
  }
}]
