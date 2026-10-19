export const invalidLogins = [
  { name: 'wrong password',        email: process.env.EH_EMAIL, password: 'WrongPass@999' },
  { name: 'unregistered email',    email: 'nouser@example.com', password: 'Whatever@123' },
  { name: 'empty email',           email: '',                   password: 'Mark@123' },
  { name: 'empty password',        email: process.env.EH_EMAIL, password: '' },
  { name: 'both empty',            email: '',                   password: '' },
  { name: 'invalid email format',  email: 'abc.com',            password: 'Mark@123' },
];