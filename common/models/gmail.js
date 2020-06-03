'use strict';

module.exports = function(Gmail) {
    Gmail.sendEmail = function(dest,pass,cb) {
        Gmail.app.models.Email.send({
          to: dest,
          from: 'pruebaenviogm@gmail.com',
          subject: 'Contraseña DualApp',
          text: 'La contraseña que le a sido asignada es: '+pass,
          html: 'my <em>html</em>'
        }, function(err, mail) {
          console.log('email sent!');
          cb(err);
        });
      }
};
