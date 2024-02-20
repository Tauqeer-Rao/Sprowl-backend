const Admin = require('../../models/AdminModels/adminUserSchema');


// Controller to handle user signup
exports.signup = async (req, res) => {
    try {
        const { email, password, fullName } = req.body;

        const newAdminUser = new Admin({
            email,
            password,
            fullName,
        });

        await newAdminUser.save();
        res.status(201).json({ message: 'Admin User created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Controller to handle user login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await Admin.findOne({ email });
        if (!admin || admin.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        if (admin.password === password) {

            const adminDataToSend = {
                _id: admin._id,
                email: admin.email,
            };

            res.status(200).json({
                message: 'Login successful',
                admin: adminDataToSend,
            });

        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
