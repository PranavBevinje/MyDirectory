exports.config = {
    directConnect: true,
    capabilities:
    {
        'browserName': 'chrome'
    },
    framework: 'jasmine framework',
    specs: ['..//JASMINE//SmartTest.js'],
    jasmineNodeOpts:
    {
        defualtTimeoutInterval: 30000
    }
};