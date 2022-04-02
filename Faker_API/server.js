const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

const createUser = () => {
  const newUser = {
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
  return newUser;
};

const createCompany = () => {
  const newCompany = {
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  };
  return newCompany;
};

// Create an api route "/api/users/new" that returns a new user
app.get("/api/users/new", (req, res) => {
  const userOne = createUser();
  res.json(userOne);
});

// Create an api route "/api/companies/new" that returns a new company
app.get("/api/companies/new", (req, res) => {
  const companyOne = createCompany();
  res.json(companyOne);
});

// Create an api route "/api/user/company" that returns both a new user and a new company
app.get("/api/user/company", (req, res) => {
  const user = createUser();
  const company = createCompany();
  const userAndCompany = {
    user: user,
    company: company,
  };
  res.json(userAndCompany);
});

// Start up the port
app.listen(port, () => console.log(`express server fired up on port ${port}`));
