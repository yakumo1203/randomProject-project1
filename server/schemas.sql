-- Initial setup
CREATE DATABASE foris;
USE foris;

-- user
CREATE TABLE users(
  id VARCHAR(100) NOT NULL PRIMARY KEY,
  phone INT NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL UNIQUE,
  school_email VARCHAR(255) UNIQUE,
  personal_email VARCHAR(255) UNIQUE NOT NULL,
  is_active BOOLEAN DEFAULT 0,
  is_blocked BOOLEAN DEFAULT 0,
  is_verified BOOLEAN DEFAULT 0,
  is_honores BOOLEAN DEFAULT 0,
  time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  location_created_lat FLOAT(10, 6) DEFAULT 0,
  location_created_log FLOAT(10, 6) DEFAULT 0
)

-- profile
CREATE TABLE profile(
  profile_id INTEGER AUTO_INCREMENT PRIMARY KEY,

)

-- snsPosts

-- follow

-- comments

-- info

-- universities
