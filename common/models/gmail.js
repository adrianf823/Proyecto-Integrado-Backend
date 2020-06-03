'use strict';

module.exports = function(Gmail) {
    Gmail.sendEmail = function(dest,pass,cb) {
        Gmail.app.models.Gmail.send({
          to: dest,
          from: 'pruebaenviogm@gmail.com',
          subject: 'Contraseña DualApp',
          text: 'La contraseña que le ha sido asignada es: '+pass,
          html: 'La contraseña que le ha sido asignada es: '+pass
        }, function(err, mail) {
          console.log('email sent!');
          cb(err);
        });
      }
      Gmail.remoteMethod('sendEmail', {
        accepts:[ {arg: 'dest', type:'string'},
        {arg: 'pass', type:'string'}],
        returns: {arg: 'resp', type: 'string'}
  });
};
