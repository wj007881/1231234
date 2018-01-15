// module.exports = function (app) {
//   app.dataSources.mymongo.automigrate('loginuser', function (err) {
//     if (err) throw err;

//     app.models.loginuser.create([{
//       "fullname": "wj",
//       "age": 20,
//       "realm": "456",
//       "username": "qwe",
//       "password": "qwer123",
//       "credentials": {},
//       "challenges": {},
//       "email": "425547052@qq.com",
//       "emailVerified": true,
//       "status": "200",
//       "created": "2017-12-08T06:31:22.794Z",
//       "lastUpdated": "2017-12-08T06:31:22.794Z",
//       "id": 123
//     }], function (err, loginusers) {
//       if (err) throw err;

//       console.log('Models created: \n', loginusers);
//     });
//   });
// };
