INSERT INTO donors (nick_name, email, accept_email, street_address, zip_code, blood_type, phone, accept_sms, donation_date, institution_name) 
VALUES ('Mollie', 'mollie@somewhere.com', true, '123 March Lane', '80110', 'O+', '303.555.5555', true, '2017-10-01', 'Swedish');

INSERT INTO donors (nick_name, email, accept_email, street_address, zip_code, blood_type, phone, accept_sms, donation_date, institution_name) 
VALUES ('Partha', 'partha@somewhere.com', false, '255 Elm Ct', '80121', null , '303.777.7777', true, '2017-07-06', 'NationalJewish');

INSERT INTO donors (nick_name, email, accept_email, street_address, zip_code, blood_type, phone, accept_sms, donation_date, institution_name) 
VALUES ('Sam', 'sam@somewhere.com', true, '1010 Welton St', '80204', 'AB-', '303.888.8888', false, '2017-1-30', 'Porter');



INSERT INTO insts (name, street_address, zip_code, phone, email, hours, need_blood_type, need_amount) 
VALUES ('Swedish', '5555 Hampden Ave', '80113', '303.788.7888', 'swedish@swedish.com', 'Monday-Friday, 8am-5pm', 'O-', 17);

INSERT INTO insts (name, street_address, zip_code, phone, email, hours, need_blood_type, need_amount) 
VALUES ('NationalJewish', '1515 S. Colorado Blvd', '80209', '303.848.4444', 'national@nj.com', 'Monday-Friday, 8am-3pm', 'AB-', 9);

INSERT INTO insts (name, street_address, zip_code, phone, email, hours, need_blood_type, need_amount) 
VALUES ('Porter', '3500 S Downing', '80120', '303.788.7888', 'swedish@swedish.com', 'Monday-Friday, 7am-7pm', 'A', 12);
