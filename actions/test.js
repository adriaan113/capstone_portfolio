"use strict";
let datafire = require('datafire');

let myActions = datafire.Project.main().actions;
let google_gmail = require('@datafire/google_gmail').actions;
module.exports = new datafire.Action({
  inputs: [{
    type: "string",
    title: "input1"
  }],
  handler: async (input, context) => {
    let message = await google_gmail.users.drafts.send({}, context);
    return message;
  },
});
