import join from '../../src/commands/useful/join';


describe('join/join-server', () => {
  it('should join execute joinServer and respond with with a success message', done => {
    function reply(res) {
      res.should.equal(`To invite me to your server, click the link below and select a server.
Only users with **Manage Server** permission in that server are able to invite me to it.
You may remove some of the permissions if you wish, but be warned it may break current and upcoming features.
<https://discordapp.com/api/oauth2/authorize?client_id=411253145029705729&permissions=8&scope=bot>`);
      done();
    }

    return join.join({}, {message: {reply}});
  });
});
