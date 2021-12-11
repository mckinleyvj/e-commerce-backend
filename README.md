# e-commerce-backend

![mysql](https://img.shields.io/static/v1?label=mysql2&message=mysql2&color=red)
![sequelize](https://img.shields.io/static/v1?label=sequelize&message=sequelize&color=green)
![dotenv](https://img.shields.io/static/v1?label=dotenv&message=dotenv&color=yellow)

## Table of Contents

-   [Contributing](#contributing)
-   [Installation](#installation)
-   [Demonstration](#demonstration)
-   [Usage](#usage)
-   [Resources](#resources)
-   [Author](#author)
-   [Questions](#questions)

## Description

This application uses the <kbd>MySQL2</kbd> and <kbd>Sequelize</kbd> package that connects the <kbd>ExpressJS API</kbd> to a <kbd>MySQL</kbd> database.
After completing the installation, we can manipulate the database tables using <kbd>Insomnia</kbd> to fetch all, fetch by id, create new, update and delete records within the database tables.

Please make sure to install the required <kbd>dependencies</kbd> and <kbd>MySQL Server</kbd> on your local machine after cloning the repository.

## Contributing

I am always looking for contributors of all skill levels! If you have something in mind to add to the project, try out by [creating an issue](https://github.com/mckinleyvj/e-commerce-backend/issues) and let's see where we can go from there.

[Back to top](#e-commerce-backend)

## Installation

Fork and clone the repository, then install the required packages to run the application.

1. Fork the repository to your Github profile.

2. Clone the repository to your local desktop.

```bash
git clone git@github.com:mckinleyvj/e-commerce-backend.git
```

3. Req: Install <kbd>node</kbd> dependencies. Use the latest version or a version higher than 14.0.0

```bash
npm i || npm install n -g || npm install v15.0.0 (Specific version)
```

4. Req: Install <kbd>MySQL</kbd> schema and seeds. Make sure to have MySQL installed on your local machine.

```bash
mysql -u root -p
source db/schema.sql
quit
```

```git
node seeds/index.js
```

4. Run the application invoking <kbd>npm run start</kbd>

```bash
npm run start
```

[Back to top](#e-commerce-backend)

## Demonstration

Please find the demonstration video here https://watch.screencastify.com/v/AjFNizndRDnw3wcR9tIG

[Back to top](#e-commerce-backend)

## Usage

-   This project creates a new database on the local MySQL server then injects data into it. Data can be manipulated with the use of Insomnia.
-   This project does not collect any bank details or personal information for misuse.
-   This project is open source and is available to all developers that finds interest to enhancing features by raising [an issue](https://github.com/mckinleyvj/e-commerce-backend/issues) or simply by [contacting me](#questions).

[Back to top](#e-commerce-backend)

## Resources

-   [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [NodeJS](https://nodejs.org/)
-   Node Packages:
    -   [MySQL2](https://www.npmjs.com/package/mysql2)
    -   [Sequelize](https://www.npmjs.com/package/sequelize)
    -   [dotenv](https://www.npmjs.com/package/dotenv)
    -   [express](https://www.npmjs.com/package/express)

[Back to top](#e-commerce-backend)

## Author

Mckinley Jimenez

-   [Portfolio](https://mckinleyvj.github.io/professional-portfolio/)
-   [GitHub](https://github.com/mckinleyvj)
-   [LinkedIn](https://www.linkedin.com/in/mckinleyjimenez)

[Back to top](#e-commerce-backend)

## Questions

Visit my [GitHub profile](https://github.com/mckinleyvj) for more information about me and my other repositories.

You can also send me an <a href="mailto:mckinleyvj@gmail.com?">email</a> to know more information.

[Back to top](#e-commerce-backend)
