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
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR NOT NULL UNIQUE,
  bio TEXT,
  img_url VARCHAR(255),
  updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY user_id REFERENCES users(id)
);

-- snsPosts
CREATE TABLE sns_posts(
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL UNIQUE,
  content TEXT,
  img_url VARCHAR(255),
  time_posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  location_posted_lat FLOAT(10, 6),
  location_posted_log FLOAT(10, 6),
  FOREIGN KEY user_id REFERENCES users(id)
);

-- follow
CREATE TABLE follow(
  follower_id VARCHAR(255) NOT NULL,
  followee_id VARCHAR(255) NOT NULL,
  time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(follower_id) REFERENCES users(id),
  FOREIGN KEY(followee_id) REFERENCES users(id),
  PRIMARY KEY(follower_id, followee_id)
);

-- comments
CREATE TABLE comments_on_posts(
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  post_id INTEGER NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  comment_text VARCHAR(255) NOT NULL,
  time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY post_id REFERENCES snsPosts(id),
  FOREIGN KEY user_id REFERENCES users(id)
);

-- like
CREATE TABLE likes(
  user_id VARCHAR(255) NOT NULL,
  post_id INTEGER NOT NULL,
  time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(post_id) REFERENCES snsPosts(post_id),
  PRIMARY KEY(user_id, post_id)
);

-- qandas
CREATE TABLE question_posts(
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL UNIQUE,
  question_text TEXT NOT NULL UNIQUE,
  time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);

CREATE TABLE answer_posts(
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL UNIQUE,
  answer_text TEXT NOT NULL UNIQUE,
  time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tags(
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  tag_name VARCHAR(255) UNIQUE NOT NULL,
  time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sns_post_tags(
  sns_post_tag_id INTEGER NOT NULL,
  tag_id INTEGER NOT NULL,
  FOREIGN KEY sns_post_tag_id REFERENCES sns_posts(id),
  FOREIGN KEY tag_id REFERENCES tags(id),
  PRIMARY KEY(sns_post_tag_id, tag_id)
);

CREATE TABLE question_post_tags(
  question_post_tag_id INTEGER NOT NULL,
  tag_id INTEGER NOT NULL,
  FOREIGN KEY question_post_tag_id REFERENCES question_posts(id),
  FOREIGN KEY tag_id REFERENCES tags(id),
  PRIMARY KEY(question_post_tag_id, tag_id)
);

-- universities
