// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
// var parseJSON = function (json) {
//   let num = Number(json);
//   let arr = String(json).split('')
//   let arrayContents = arr.slice(1, arr.length - 1)

//   if (json[0] === '[' && json[json.length-1] !== ']' || json.includes('\\')) {
//     throw new SyntaxError('Syntax error');
//   }

//   // booleans
//   if (json === 'true') {
//     return true;
//   } else if (json === 'false') {
//     return false;
//   }

//   // null
//   if (json === 'null') {
//     return null;
//   }

//   // arrays
 
//   if (json === '[]') {
//     return [];
//   }

//   if (json[0] ==='[' && json[json.length-1] === ']') {
//     return json;
//   }

//   // Numbers
//   if (/^\d+$/.test(json)) {
//     return num;
//   }

//   // objects
//   if (json[0] === '{' && json[json.length-1] === '}') {
//     let results = {};
//     let firstKey = json.split(':' || ',')[0].split('"')[1];
//     let nextKey = json.split(':' || ',')[1].split('"')[1];


//     if (nextKey === "") {
//       results[firstKey] = '';
//       return results;
//     }

//     if (json.includes('[')) {
     
//       let prop = json.split(':')[0].slice(1).split('"')[1];
//       console.log(prop)
//       let key = json.split(':')[1].slice(0, -1);
     

//       console.log(parseJSON(key).split('"')[1])
//       console.log(parseJSON(key).split('"')[3])
      
//     }
   
//     let value = json.split(':' || ',')[2].split('"')[1];
//     results[firstKey] = {};
//     results.a[nextKey] = value; 
//     return (results);
  
//   }
  
//   // Strings
//   if (!/^\d+$/.test(json) && json !== 'null' && json !== 'true' && json !== 'false') {
//     if (json.includes(',')) {
//       return '[' + arrayContents.join('') + ']';
//     } else {
//       return arrayContents.join('');
//     }
//   }

// };

// // console.log(parseJSON('[1, 2, 3, 4]'));
// // console.log(parseJSON('"hello"'));
// // console.log(parseJSON('333'));
// // console.log(parseJSON('null'));
// // console.log(parseJSON('{"foo": ""}'));
// console.log(parseJSON('{"a":{"b":"c"}}'));
// console.log(parseJSON( '{"a":["b", "c", "d"]}'));
// )

// // console.log(parseJSON('["foo", "bar"'));
// // console.log(parseJSON('["foo", "bar\\"]'));

// var expected = JSON.parse('{"a":["b", "c"]}')
// console.log(expected)



// // In-depth: 
// /* Need to see if input is:

//   1) Object
//   2) Array
//   3) String
//   4) Boolean
// * 5) Number      
//   6) Null        

// */


               


// //--------------------------------------//
// // console.log(JSON.parse('[]'));
// // parseableStrings = [
// //   // basic stuff
// //   '[]',
// //   '{"foo": ""}',
// //   '{}',
// //   '{"foo": "bar"}',
// //   '["one", "two"]',
// //   '{"a": "b", "c": "d"}',
// //   '[null,false,true]',
// //   '{"foo": true, "bar": false, "baz": null}',
// //   '[1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999]',
// //   '{"boolean, true": true, "boolean, false": false, "null": null }',

// //   // basic nesting
// //   '{"a":{"b":"c"}}',
// //   '{"a":["b", "c"]}',
// //   '[{"a":"b"}, {"c":"d"}]',
// //   '{"a":[],"c": {}, "b": true}',
// //   '[[[["foo"]]]]',

// //   // escaping
// //   '["\\\\\\"\\"a\\""]',
// //   '["and you can\'t escape thi\s"]',

// //   // everything all at once
// //   '{"CoreletAPIVersion":2,"CoreletType":"standalone",' +
// //     '"documentation":"A corelet that provides the capability to upload' +
// //     ' a folderâ€™s contents into a userâ€™s locker.","functions":[' +
// //     '{"documentation":"Displays a dialog box that allows user to ' +
// //     'select a folder on the local system.","name":' +
// //     '"ShowBrowseDialog","parameters":[{"documentation":"The ' +
// //     'callback function for results.","name":"callback","required":' +
// //     'true,"type":"callback"}]},{"documentation":"Uploads all mp3 files' +
// //     ' in the folder provided.","name":"UploadFolder","parameters":' +
// //     '[{"documentation":"The path to upload mp3 files from."' +
// //     ',"name":"path","required":true,"type":"string"},{"documentation":' +
// //     ' "The callback function for progress.","name":"callback",' +
// //     '"required":true,"type":"callback"}]},{"documentation":"Returns' +
// //     ' the server name to the current locker service.",' +
// //     '"name":"GetLockerService","parameters":[]},{"documentation":' +
// //     '"Changes the name of the locker service.","name":"SetLockerSer' +
// //     'vice","parameters":[{"documentation":"The value of the locker' +
// //     ' service to set active.","name":"LockerService","required":true' +
// //     ',"type":"string"}]},{"documentation":"Downloads locker files to' +
// //     ' the suggested folder.","name":"DownloadFile","parameters":[{"' +
// //     'documentation":"The origin path of the locker file.",' +
// //     '"name":"path","required":true,"type":"string"},{"documentation"' +
// //     ':"The Window destination path of the locker file.",' +
// //     '"name":"destination","required":true,"type":"integer"},{"docum' +
// //     'entation":"The callback function for progress.","name":' +
// //     '"callback","required":true,"type":"callback"}]}],' +
// //     '"name":"LockerUploader","version":{"major":0,' +
// //     '"micro":1,"minor":0},"versionString":"0.0.1"}',
// //   '{ "firstName": "John", "lastName" : "Smith", "age" : ' +
// //     '25, "address" : { "streetAddress": "21 2nd Street", ' +
// //     '"city" : "New York", "state" : "NY", "postalCode" : ' +
// //     ' "10021" }, "phoneNumber": [ { "type" : "home", ' +
// //     '"number": "212 555-1234" }, { "type" : "fax", ' +
// //     '"number": "646 555-4567" } ] }',
// //   '{\r\n' +
// //     '          "glossary": {\n' +
// //     '              "title": "example glossary",\n\r' +
// //     '      \t\t"GlossDiv": {\r\n' +
// //     '                  "title": "S",\r\n' +
// //     '      \t\t\t"GlossList": {\r\n' +
// //     '                      "GlossEntry": {\r\n' +
// //     '                          "ID": "SGML",\r\n' +
// //     '      \t\t\t\t\t"SortAs": "SGML",\r\n' +
// //     '      \t\t\t\t\t"GlossTerm": "Standard Generalized ' +
// //     'Markup Language",\r\n' +
// //     '      \t\t\t\t\t"Acronym": "SGML",\r\n' +
// //     '      \t\t\t\t\t"Abbrev": "ISO 8879:1986",\r\n' +
// //     '      \t\t\t\t\t"GlossDef": {\r\n' +
// //     '                              "para": "A meta-markup language,' +
//     ' used to create markup languages such as DocBook.",\r\n' +
//     '      \t\t\t\t\t\t"GlossSeeAlso": ["GML", "XML"]\r\n' +
//     '                          },\r\n' +
//     '      \t\t\t\t\t"GlossSee": "markup"\r\n' +
//     '                      }\r\n' +
//     '                  }\r\n' +
//     '              }\r\n' +
//     '          }\r\n' +
//     '      }\r\n'
// ];

// // JSON does not allow you to parse these strings
// unparseableStrings = [
//   '["foo", "bar"',
//   '["foo", "bar\\"]'
// ];