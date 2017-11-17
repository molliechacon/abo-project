### Schema

-- DELETE THIS ONCE WE MOVE PAST THE TESTING PHASE!!
-- DROP DATABASE IF EXISTS aboproject;

-- CREATE DATABASE aboproject;
USE ebw4c0et5tcj1xr9;

CREATE TABLE donors (
  donor_id INT NOT NULL AUTO_INCREMENT,
  nick_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  accept_email BOOLEAN DEFAULT FALSE,
  street_address VARCHAR(255),
  zip_code VARCHAR(255) NOT NULL,
  blood_type VARCHAR(3),
  phone VARCHAR(15),
  -- limit to just email?
  accept_sms BOOLEAN DEFAULT FALSE,
  donation_date DATE,
  institution_name VARCHAR(255),
  PRIMARY KEY (donor_id)
);

-- CREATE TABLE donations (
--   donation_id INT NOT NULL AUTO_INCREMENT,
--   donation_date DATE,
--   institution_name VARCHAR(255),
--   fk_donor_id INT NOT NULL,
--   PRIMARY KEY (donation_id)
-- );

CREATE TABLE insts (
  inst_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  street_address VARCHAR(255) NOT NULL,
  zip_code VARCHAR(255) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  email VARCHAR(255) NOT NULL,
  hours VARCHAR(255) NOT NULL,
  need_blood_type VARCHAR(3),
  need_amount INT,
  need_description VARCHAR(255) DEFAULT 'None',
  request_message VARCHAR(255) DEFAULT 'None',
  PRIMARY KEY (inst_id)
);

-- CREATE TABLE inst_needs (
--   inst_need_id INT NOT NULL AUTO_INCREMENT,
--   blood_type VARCHAR(3),
--   amount INT,
--   description VARCHAR(255),
--   fk_inst_id INT NOT NULL,
--   PRIMARY KEY (inst_need_id)
-- );

-- CREATE TABLE inst_messages (
--   inst_message_id INT NOT NULL AUTO_INCREMENT,
--   message VARCHAR(255) NOT NULL,
--   fk_inst_id INT NOT NULL,
--   PRIMARY KEY (inst_message_id)
-- );