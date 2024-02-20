const AdminUser = require('../../models/AdminModels/adminUserSchema');


// Controller to create a new user
exports.createAdminUser = async (req, res) => {
    try {

        console.log("req arrived in create user", req.body)
        const newAdminUser = new AdminUser(req.body);
        await newAdminUser.save();
        res.status(201).json(newAdminUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to get all users
exports.getAllUsers = async (req, res) => {
    try {
        console.log("req arrived in get all users", req.body)
        const users = await AdminUser.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to get a single user by ID
exports.getUserById = async (req, res) => {
    try {
        console.log("req arrived in get user by id", req.body)
        const user = await AdminUser.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to update a user by ID
exports.updateUserById = async (req, res) => {
    try {

        const user = await AdminUser.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to delete a user by ID
exports.deleteUserById = async (req, res) => {
    try {
        console.log("req arrived in delete user", req.body)
        const user = await AdminUser.findByIdAndDelete(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
