# Cooking Recipe Portal

## Description

Cooking Recipe Portal is a web application created using React.js, FastAPI, and MySQL to store and manage recipes.

> Live deployment hosted on a DigitalOcean droplet, configured with an NGINX reverse proxy, SSL certificate via Let's Encrypt, and served over HTTPS: [Cooking Recipe Portal](https://cooking-recipes-portal.netlify.app/)  
> Alternatively, clone the repo, navigate to the `app` directory, and run:  
> `npm run dev`  
> Or, navigate to the `server` directory, and run:  
> `npm run dev`  
> Set up a local Microsoft SQL Server database and create a `.env` file with the following properties:  
> `DB_HOST`, `DB_USER`, `DB_PASSWORD`, and `DB`

### Tables Used

```sql
CREATE TABLE categories(
    categoryName VARCHAR(100) PRIMARY KEY NOT NULL,
    createdAt VARCHAR(100) NOT NULL,
    categoryDescription VARCHAR(200) NOT NULL
) ENGINE=INNODB;

CREATE TABLE recipes(
    recipeId VARCHAR(100) PRIMARY KEY,
    recipeTitle VARCHAR(100) NOT NULL,
    recipeAuthor VARCHAR(100) NOT NULL,
    createdAt VARCHAR(100) NOT NULL,
    recipeContent VARCHAR(10000) NOT NULL,
    recipeCategory VARCHAR(100),
    CONSTRAINT fk_category
    FOREIGN KEY (recipeCategory)
        REFERENCES categories(categoryName)
) ENGINE=INNODB;
