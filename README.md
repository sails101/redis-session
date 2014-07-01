# How do I configure Redis as my session store?

To test this out, lift this app and visit http://localhost:1337/session/increment.

If you refresh a few times, you'll see the counter increase.  Then, if you kill the server and start it up again, you'll see that the counter still has the same value (b/c your session is being persisted in Redis).


> TODO: expand this readme

See [`config/session.js`](./config/session.js#L33)

