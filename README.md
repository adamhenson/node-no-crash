node-no-crash
=============

> Example technique to prevent server crashing from uncaught exceptions, using the cluster module.

## Notes
I discovered that Express sessions don't support clusters and only work on a single instance :( [read one report on stackoverflow](http://stackoverflow.com/questions/17626279/nodejs-clustering-and-expressjs-sessions).

Another technique is to let the server crash and automatically restart using things like "forever" or "forever-monitor". Here's an [example from a different branch of this repo](https://github.com/adamhenson/node-no-crash/tree/forever).