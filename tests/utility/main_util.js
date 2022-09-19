const {credentials} = require("./credentials")
const minimist = require("minimist")
const args = minimist(process.argv.slice(2))
const origin = args.origin || credentials.origin;


const readingSkipConfigs = (relativePath = "../../skip.json") => {
    try{
        return require(relativePath).skipTestIds;
    }
    catch(error){
        console.warn("WARNING: No skip config found. Running all tests.");
        console.log("skip.json file is not defined")
        return [];
    }
}

const setupFixture = () => {
    return fixture `My Fixture`
        .page(origin)
}

const skipTestIds = readingSkipConfigs();

const wrapTest = ({id, ...meta}) => {
    return skipTestIds.includes(id) && !(args.debug || args.edit)
    ? test.meta({id, ...meta}).skip:
    test.meta({id, ...meta})
}

module.exports.setupFixture = setupFixture;
module.exports.wrapTest = wrapTest;