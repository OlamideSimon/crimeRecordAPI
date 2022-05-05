const { roles } = require("../config/roles")

exports.grantAccess = (action, resource) => {
    return async (req, res, next) => {
        try {
            const permission = roles.can(req.user.rank)[action](resource)
            if(!permission.granted) {
                return res.status(401).json({
                    error: 'You don\'t have permission to perform requested action'
                })
            }
            next()
        } catch (error) {
            next(error)
        }
    }
}