import { Router } from 'express';
import { supabase } from '../config/supabase';

const router = Router();

// LOGIN
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return res.status(400).json({ error: error.message });
    }

    res.json({
        user: data.user,
        session: data.session,
        message: 'Login successful',
    });
});

// SIGNUP
router.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        return res.status(400).json({ error: error.message });
    }

    res.json({
        message: 'Check your email for confirmation',
        user: data.user,
    });
});

export default router;