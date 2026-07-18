import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let users = [];
let posts = [
  {
    id: 1,
    title: 'How to turn ordinary ideas into memorable stories',
    content:
      'A strong story begins with a clear voice, a relatable moment, and a feeling that stays with the reader long after the last sentence.',
    category: 'Creativity',
    author: 'Maya Chen',
    createdAt: '2026-07-06T10:00:00.000Z',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'The calm routine that helped me write more consistently',
    content:
      'Consistency matters more than intensity. A simple ritual can make your ideas feel lighter and your writing more joyful.',
    category: 'Wellness',
    author: 'Nina Patel',
    createdAt: '2026-07-08T09:30:00.000Z',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'Why thoughtful travel writing builds deeper connections',
    content:
      'Travel stories are strongest when they focus on small details, local voices, and the feelings that linger after you return.',
    category: 'Travel',
    author: 'Theo Brooks',
    createdAt: '2026-07-09T15:20:00.000Z',
    readTime: '6 min read',
  },
];

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.post('/api/posts', (req, res) => {
  const { title, content, category, author } = req.body;

  if (!title || !content || !category || !author) {
    return res.status(400).json({ message: 'Please complete the form to publish.' });
  }

  const newPost = {
    id: Date.now(),
    title,
    content,
    category,
    author,
    createdAt: new Date().toISOString(),
    readTime: '3 min read',
  };

  posts = [newPost, ...posts];
  res.status(201).json({ post: newPost });
});

app.post('/api/auth/signup', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Please provide your name, email, and password.' });
  }

  const exists = users.some((user) => user.email === email);
  if (exists) {
    return res.status(409).json({ message: 'An account already exists with that email.' });
  }

  const newUser = { id: Date.now(), name, email, password };
  users.push(newUser);

  res.status(201).json({ user: { id: newUser.id, name: newUser.name, email: newUser.email } });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find((entry) => entry.email === email && entry.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }

  res.json({ user: { id: user.id, name: user.name, email: user.email } });
});

app.listen(PORT, () => {
  console.log(`Blog backend running on http://localhost:${PORT}`);
});
