
insert into party_type (party_type_id,party_type_description) values (1,'Birthday');
insert into party_type (party_type_id,party_type_description) values (2,'Marriage');
insert into party_type (party_type_id,party_type_description) values (3,'Ball');
insert into party_type (party_type_id,party_type_description) values (4,'Luau');

insert into party_status (party_status_id,party_status_description) values (1,'Created');
insert into party_status (party_status_id,party_status_description) values (2,'Happening');
insert into party_status (party_status_id,party_status_description) values (3,'Ended');
insert into party_status (party_status_id,party_status_description) values (4,'Cancelled');

insert into invite_type (invite_type_id,invite_type_description) values (1,'Regular');
insert into invite_type (invite_type_id,invite_type_description) values (2,'VIP');

insert into invite_status (invite_status_id,invite_status_description) values (1,'Created');
insert into invite_status (invite_status_id,invite_status_description) values (2,'Used');
insert into invite_status (invite_status_id,invite_status_description) values (3,'Cancelled');

insert into person (person_id,person_name) values (1,'Joe');
insert into person (person_id,person_name) values (2,'Mary');
insert into person (person_id,person_name) values (3,'Bill');
insert into person (person_id,person_name) values (4,'Jane');
insert into person (person_id,person_name) values (5,'Paul');
insert into person (person_id,person_name) values (6,'Simone');
insert into person (person_id,person_name) values (7,'Bob');
insert into person (person_id,person_name) values (8,'Alice');

insert into party (party_id,person_id,party_title) values (1,1,'Bobby''s son is here!');
insert into party (party_id,person_id,party_title,party_type_id) values (2,1,'Moon and beach',4);
insert into party (party_id,person_id,party_title,party_type_id,party_status_id) values (3,1,'Alice marriage',2,4);

insert into invite (invite_id,party_id,person_id) values (1,1,1);
insert into invite (invite_id,party_id,person_id) values (2,1,2);
insert into invite (invite_id,party_id,person_id) values (3,1,4);

insert into invite (invite_id,party_id,person_id) values (4,2,6);
insert into invite (invite_id,party_id,person_id) values (5,2,8);
insert into invite (invite_id,party_id,person_id) values (6,2,1);
insert into invite (invite_id,party_id,person_id) values (7,2,2);

insert into invite (invite_id,party_id,person_id,invite_type_id) values (8,3,4,2);
insert into invite (invite_id,party_id,person_id,invite_status_id) values (9,3,6,3);
