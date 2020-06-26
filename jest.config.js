// jest.config.js

module.exports = {
    testRegex: 'resources/js/tests/.*.spec.js$'
}
transform =  {
    "^.+\\.js$": "babel-jest",
        "^.+\\.css$": "jest-transform-css"
}