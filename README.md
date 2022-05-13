********MUST BE LOGGED IN TO ACCESS ANY ROUTE**********
Routes: [
    '/api/users',
    '/api/crimes'
]

<!-- USERS APIs AND REQUIREMENTS -->
- GET /api/users/me: returns user details and requires token passed to the header(jsonwebtoken)
- POST /api/users: registers a user with the following credentials: name, email, password, rank(based on Nigerian police rank) and district(any of the 36 states in Nigeria)
- GET /api/users/login: allows registered user to login. Requirements include email and password only.

<!-- CRIMES APIs AND REQUIREMENTS -->
- POST /api/crimes: creates a new crime report with the following needed: crime(suspicious activity, threat or incidence report) and location(any of the 36 states)
- GET /api/crimes(can only be accessed by the police thereby requires login token): returns reports that happened in the police district.
- POST /api/crimes/:id: Allows certain ranks to update actions to be taken and status of selected crime record
- DELETE /api/crimes/:id: Allows certain ranks to delete records after completion.



*** Ranks are being used in the project so as to assign different roles to them. For example, an inspector general can update and delete a crime record while a constable can't
