-- Initial setup
CREATE DATABASE foris;
USE foris;

-- user
CREATE TABLE users(
  id VARCHAR(100) NOT NULL PRIMARY KEY,
  phone INT NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL UNIQUE,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  school_email VARCHAR(255) UNIQUE,
  personal_email VARCHAR(255) UNIQUE NOT NULL,
  is_active BOOLEAN DEFAULT 0,
  is_blocked BOOLEAN DEFAULT 0,
  is_verified BOOLEAN DEFAULT 0,
  is_honores BOOLEAN DEFAULT 0,
  time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  location_created_lat FLOAT(10, 6),
  location_created_log FLOAT(10, 6)
);

-- profile
CREATE TABLE profile(
  profile_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  bio TEXT,
  img_url VARCHAR(255),
  updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY profile_id REFERENCES users(id)
);

-- snsPosts
CREATE TABLE snsPosts(
  post_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title TEXT NOT NULL UNIQUE,
  content TEXT,
  img_url VARCHAR(255),
  time_posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  location_posted_lat FLOAT(10, 6),
  location_posted_log FLOAT(10, 6),
  FOREIGN KEY post_id REFERENCES users(id)
);

-- follow
CREATE TABLE follow(
  follower_id VARCHAR(255) NOT NULL,
  followee_id VARCHAR(255) NOT NULL,
  
)

-- comments

-- info

-- universities
