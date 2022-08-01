INSERT INTO users (name, email, password) VALUES ('Paul Taylor', 'taylor@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO users (name, email, password) VALUES ('Kendall Smigh', 'smith@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO users (name, email, password) VALUES ('Logan Nova', 'nova@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO users (name, email, password) VALUES ('Boaty McBoatface', 'boaty@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO users (name, email, password) VALUES ('Rick Astley', 'yougotrickrolled@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, 
  cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, 
  city, province, postal_code, active) 
  VALUES (
    1, 
    'Abbotsford Retreat', 
    'long ass description', 
    'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg',
    300,
    1,
    2,
    2,
    'Canada',
    '123 King Road',
    'Abbotsford',
    'British Columbia',
    'A1A 1A1',
    TRUE
 );

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, 
  cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, 
  city, province, postal_code, active) 
  VALUES (
    3, 
    'Toronto Retreat', 
    'longest ass description EVER', 
    'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg',
    800,
    1,
    2,
    4,
    'Canada',
    '123 King Road',
    'Toronto',
    'Ontario',
    'A1A 1A1',
    TRUE
  );

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, 
  cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, 
  city, province, postal_code, active) 
  VALUES (
    4, 
    'Banff Breathtaking Breakaway', 
    'omg the mountains!!', 
    'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg',
    450,
    2,
    3,
    3,
    'Canada',
    '123 King Road',
    'Banff',
    'Alberta',
    'A1A 1A1',
    TRUE
  );

INSERT INTO reservations (start_date, end_date, property_id, guest_id) 
  VALUES ('2018-09-11', '2019-09-26', 2, 3);

INSERT INTO reservations (start_date, end_date, property_id, guest_id) 
  VALUES ('2019-01-04', '2019-02-01', 2, 2);

INSERT INTO reservations (start_date, end_date, property_id, guest_id) 
  VALUES ('2022-09-11', '2022-09-16', 1, 4);

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message) 
  VALUES (3, 2, 1, 4, 'awesome');

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message) 
  VALUES (2, 2, 2, 5, 'amazing!');

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message) 
  VALUES (4, 1, 3, 3, 'average');

