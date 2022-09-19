const {selector, t} = require("testcafe")
const {setupFixture, wrapTest} = require("./utility/main_util")

setupFixture();

const meta = {
    id : "12345",
    steps: [
        "Open the app",
        "Login to app"
    ],
    nodes: []
};

wrapTest(meta)(
    "My firt test",
     async t => {
    
})

