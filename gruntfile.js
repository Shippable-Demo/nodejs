
module.exports = function (grunt) {
 grunt.initConfig({
   express: {
     test: {
       options: {
         script: "index.js"
       }
     }
   },
   mochaTest: {
     test: {
       options: {
         reporter: 'xunit',
         captureFile: "shippable/testresults/result.xml"
       },
       src: ["./test.js"]
     }
   }
 });
 grunt.loadNpmTasks("grunt-express-server");
 grunt.loadNpmTasks("grunt-mocha-test");
 grunt.registerTask("default", ["express:test", "mochaTest"]);
};
