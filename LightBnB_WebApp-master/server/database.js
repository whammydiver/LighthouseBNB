// const properties = require('./json/properties.json');
// const users = require('./json/users.json');


const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'lightbnb'
});


//
const getUserWithEmail = function(email) {
  return pool
    .query(
      `SELECT * FROM users WHERE email = $1`,
      [email])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      return (err.message);
    });
};
exports.getUserWithEmail = getUserWithEmail;

//
const getUserWithId = function(id) {
  return pool
    .query(
      `SELECT * FROM users WHERE id = $1`,
      [id])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      return (err.message);
    });
};
exports.getUserWithId = getUserWithId;


//
const addUser =  function(user) {
  return pool
    .query(
      `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)
      RETURNING *;`,
      [user.name, user.email, user.password])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      return (err.message);
    });
};
exports.addUser = addUser;

//
const getAllReservations = function(guest_id, limit = 10) {
  console.log(guest_id, limit);
  return pool
    .query(
      `SELECT properties.thumbnail_photo_url, properties.title, properties.number_of_bedrooms, 
      properties.number_of_bathrooms, properties.parking_spaces, reservations.id,  
      reservations.start_date, reservations.end_date, 
      avg(property_reviews.rating) as average_rating, properties.cost_per_night
      FROM reservations
      JOIN properties ON reservations.property_id = properties.id
      JOIN property_reviews ON properties.id = property_reviews.property_id
      JOIN users ON users.id = reservations.guest_id
      WHERE reservations.guest_id = $1
      GROUP BY reservations.id, properties.title, properties.cost_per_night, 
      properties.thumbnail_photo_url, properties.number_of_bedrooms, properties.number_of_bathrooms, 
      properties.parking_spaces
      ORDER BY reservations.start_date
      LIMIT $2;`, [guest_id, limit])
    .then((result) => {
      console.log(result);
      return result.rows;
    })
    .catch((err) => {
      return (err.message);
    });
};
exports.getAllReservations = getAllReservations;

//
const getAllProperties = (options, limit) => {
  
  const queryParams = [];
  
  let queryString = `
  SELECT properties.*, avg(property_reviews.rating) as average_rating
  FROM properties
  JOIN property_reviews ON properties.id = property_id
  WHERE 1 = 1`;
  
  if (options.city) {
    queryParams.push(`%${options.city}%`);
    queryString += ` AND city LIKE $${queryParams.length}`;
  }
  
  if (options.owner_id) {
    queryParams.push(Number(options.owner_id));
    queryString += ` AND owner_id = $${queryParams.length}`;
  }
  
  if (options.maximum_price_per_night) {
    queryParams.push(Number(options.maximum_price_per_night));
    queryString += ` AND cost_per_night < $${queryParams.length}`;
  }

  if (options.minimum_price_per_night) {
    queryParams.push(Number(options.minimum_price_per_night));
    queryString += ` AND cost_per_night > $${queryParams.length}`;
  }
  
  queryString += `
  GROUP BY properties.id`;
  
  if (options.minimum_rating) {
    queryParams.push(Number(options.minimum_rating));
    queryString += ` HAVING avg(property_reviews.rating) >= $${queryParams.length}`;
  }
  
  queryParams.push(limit);
  
  queryString += `
  ORDER BY cost_per_night
  LIMIT $${queryParams.length}
  `;

  console.log(queryString, queryParams);

  return pool.query(queryString, queryParams).then((res) => res.rows);
};
exports.getAllProperties = getAllProperties;

//
const addProperty = function(property) {
  console.log(property);
  const queryParams = [];
  queryParams.push(
    property.title, 
    property.description, 
    Number(property.number_of_bedrooms), 
    Number(property.number_of_bathrooms), 
    Number(property.parking_spaces), 
    Number(property.cost_per_night),
    property.thumbnail_photo_url, 
    property.cover_photo_url, 
    property.street,
    property.country,
    property.city,
    property.province,
    property. post_code,
    property.owner_id);
  console.log(queryParams);
  return pool.query(`
  INSERT INTO properties (title, description, number_of_bedrooms, number_of_bathrooms, parking_spaces, 
    cost_per_night, thumbnail_photo_url, cover_photo_url, street, country, city, province, post_code, owner_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *;`, queryParams);
};
exports.addProperty = addProperty;
