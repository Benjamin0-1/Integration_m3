const users = [
    { email: 'example@email.com', password: 'password' },
    {email: 'username', password: 'password'}
];

module.exports = (req, res) => {
    const { email, password } = req.query;
    let access = false;

    if (Array.isArray(users)) {
        users.forEach((user) => {
            if (user.email === email && user.password === password) {
                access = true;
            }
        });

        if (access) {
            console.log('ACCESS: ', access);
            res.json({ status: 'success', message: 'home', access: access });
        } else {
            console.log('ACCEES: ', access);
            res.status(200).json({ status: 'success', message: 'failed login' });
        }
    } else {
        res.status(500).send('Invalid users data');
    }
};
