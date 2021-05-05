const NodejsCppAddonSample = require("../dist/binding.js");
const assert = require("assert");

assert(NodejsCppAddonSample, "The expected module is undefined");

function testBasic()
{
    const instance = new NodejsCppAddonSample("mr-yeoman");
    assert(instance.greet, "The expected method is not defined");
    assert.strictEqual(instance.greet("kermit"), "mr-yeoman", "Unexpected value returned");
}

function testInvalidParams()
{
    const instance = new NodejsCppAddonSample();
}

assert.doesNotThrow(testBasic, undefined, "testBasic threw an expection");
assert.throws(testInvalidParams, undefined, "testInvalidParams didn't throw");

console.log("Tests passed- everything looks OK!");