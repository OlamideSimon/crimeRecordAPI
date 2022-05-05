const AccessControl = require('accesscontrol')
const { ranks } = require('../utils/enums')
const ac = new AccessControl()


exports.roles = (function () {
    ac.grant(ranks.slice(12))
        .readAny('crime')

    ac.grant(ranks.slice(0, 12))
        .extend(ranks.slice(12))
        .createAny('crime')
        .deleteAny('crime')
        .updateAny('crime')

    return ac;
})()