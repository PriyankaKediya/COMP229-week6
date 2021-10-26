"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secret = exports.HostName = exports.RemoteURI = exports.LocalURI = void 0;
exports.LocalURI = "mongodb://localhost/store";
//export let RemoteURI = "mongodb+srv://priyanka:WyVc4m0EkNidYbEe@comp229-f2021.r3dat.mongodb.net/store?retryWrites=true&w=majority";
exports.RemoteURI = process.env.RemoteURI;
exports.HostName = (process.env.RemoteURI) ? "remotohost" : "localhost";
exports.Secret = "someSecret";
//# sourceMappingURL=db.js.map