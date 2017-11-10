INSERT INTO donors (nick_name, email, street_address, zip_code, blood_type, phone, accept_sms, donation_date, institution_name) 
VALUES ('Mollie', 'mollie@somewhere.com', '123 March Lane', '80110', 'O+', '303.555.5555', true, '2017-10-01', 'Swedish Medical Center');

INSERT INTO donors (nick_name, email, street_address, zip_code, blood_type, phone, accept_sms, donation_date, institution_name) 
VALUES ('Partha', 'partha@somewhere.com', '255 Elm Ct', '80121', null , '303.777.7777', true, '2017-07-06', 'St. Joseph"s Hospital');

INSERT INTO donors (nick_name, email, street_address, zip_code, blood_type, phone, accept_sms, donation_date, institution_name) 
VALUES ('Sam', 'sam@somewhere.com', '1010 Welton St', '80204', 'AB-', '303.888.8888', false, '2017-1-30', 'Porter Adventist Hospital');



INSERT INTO insts (name, street_address, zip_code, phone, email, hours, need_blood_type, need_amount, need_description, request_message) 
VALUES ('Swedish Medical Center', '5555 Hampden Ave', '80113', '303.788.7888', 'swedish@swedish.com', 'Monday-Friday, 8am-5pm', 'O-', 17, 'smc desc', 'smc message');

INSERT INTO insts (name, street_address, zip_code, phone, email, hours, need_blood_type, need_amount, need_description, request_message) 
VALUES ('St. Joseph"s Hospitadonorsl', '1515 S. Colorado Blvd', '80209', '303.848.4444', 'national@nj.com', 'Monday-Friday, 8am-3pm', 'AB-', 9, 'stj desc', 'stj message');

INSERT INTO insts (name, street_address, zip_code, phone, email, hours, need_blood_type, need_amount, need_description, request_message) 
VALUES ('Porter Adventist Hospital', '3500 S Downing', '80120', '303.788.7888', 'swedish@swedish.com', 'Monday-Friday, 7am-7pm', 'A', 12, 'port desc', 'port message'donors);

