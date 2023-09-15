"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 69819:
/***/ ((module) => {

module.exports = require("@panva/hkdf");

/***/ }),

/***/ 84802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 41567:
/***/ ((module) => {

module.exports = require("jose");

/***/ }),

/***/ 77507:
/***/ ((module) => {

module.exports = require("next/dist/server/web/spec-extension/adapters/headers.js");

/***/ }),

/***/ 22006:
/***/ ((module) => {

module.exports = require("next/dist/server/web/spec-extension/adapters/request-cookies.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/server/web/spec-extension/cookies.js");

/***/ }),

/***/ 81532:
/***/ ((module) => {

module.exports = require("oauth");

/***/ }),

/***/ 56942:
/***/ ((module) => {

module.exports = require("openid-client");

/***/ }),

/***/ 68108:
/***/ ((module) => {

module.exports = require("preact");

/***/ }),

/***/ 62284:
/***/ ((module) => {

module.exports = require("preact-render-to-string");

/***/ }),

/***/ 25828:
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 8195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  authOptions: () => (/* binding */ authOptions),
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "bcrypt"
const external_bcrypt_namespaceObject = require("bcrypt");
var external_bcrypt_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next-auth/index.js
var next_auth = __webpack_require__(85413);
var next_auth_default = /*#__PURE__*/__webpack_require__.n(next_auth);
// EXTERNAL MODULE: ./node_modules/next-auth/providers/credentials.js
var credentials = __webpack_require__(11622);
// EXTERNAL MODULE: ./node_modules/next-auth/providers/github.js
var github = __webpack_require__(99915);
// EXTERNAL MODULE: ./node_modules/next-auth/providers/google.js
var google = __webpack_require__(74654);
;// CONCATENATED MODULE: external "@next-auth/prisma-adapter"
const prisma_adapter_namespaceObject = require("@next-auth/prisma-adapter");
;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./app/libs/prismadb.ts

const client = globalThis.prisma || new client_namespaceObject.PrismaClient();
if (false) {}
/* harmony default export */ const prismadb = (client);

;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].ts







const authOptions = {
    adapter: (0,prisma_adapter_namespaceObject.PrismaAdapter)(prismadb),
    providers: [
        (0,github/* default */.Z)({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        (0,google/* default */.Z)({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        (0,credentials/* default */.Z)({
            name: "credentials",
            credentials: {
                email: {
                    label: "email",
                    type: "text"
                },
                password: {
                    label: "password",
                    type: "password"
                }
            },
            async authorize (credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Invalid credentials");
                }
                const user = await prismadb.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });
                if (!user || !user?.hashedPassword) {
                    throw new Error("Invalid credentials");
                }
                const isCorrectPassword = await external_bcrypt_default().compare(credentials.password, user.hashedPassword);
                if (!isCorrectPassword) {
                    throw new Error("Invalid credentials");
                }
                return user;
            }
        })
    ],
    pages: {
        signIn: "/"
    },
    debug: "production" === "development",
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET
};
/* harmony default export */ const _nextauth_ = (next_auth_default()(authOptions));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [775,181], () => (__webpack_exec__(8195)));
module.exports = __webpack_exports__;

})();