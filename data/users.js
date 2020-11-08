import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Lance Dang',
    email: 'lance@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Dexter Coder',
    email: 'dexter@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
