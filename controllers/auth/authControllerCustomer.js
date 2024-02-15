const User = require('../../models/CustomerModels/customerUserSchema');


// Controller to handle user signup
exports.signup = async (req, res) => {
    try {
        const { email, password, fullName, phoneNumber } = req.body;

        const newUser = new User({
            email,
            password,
            fullName,
            phoneNumber,
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Controller to handle user login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        if (user.password === password) {

            const userDataToSend = {
                _id: user._id,
                email: user.email,
            };

            res.status(200).json({
                message: 'Login successful',
                user: userDataToSend,
            });

        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
