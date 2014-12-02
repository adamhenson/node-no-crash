node-no-crash
=============

> Example method to prevent server crashing from uncaught exceptions, using the cluster module

## Notes
I discovered that Express sessions don't support clusters and only work on a single instance :( [read one report on stackoverflow](http://stackoverflow.com/questions/17626279/nodejs-clustering-and-expressjs-sessions).