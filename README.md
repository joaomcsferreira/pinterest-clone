# About

I'm building a Pinterest clone using React and TypeScript with a focus on user experience. Users can create boards, save and organize their favorite images, and discover new content in an engaging way.

# Contents

- [Global requisites](#global-requisites)
- [Getting started](#getting-started)
- [Installation and configuration](#installation-and-configuration)
- [Author](#author)

# Global requisites

- node

# Getting started

Below mentioned are the steps to install, configure and run this app.

## Installation and configuration

```bash
# clone the project.
https://github.com/Joao-MCF/pinterest-clone.git

# enter the cloned directory.
cd pinterest-clone
```

This application uses a MongoDB API for the backend, [API Pinterest](https://github.com/Joao-MCF/api_pinterest) , and without it, only the home screen will function. The API is crucial to the application's ability to save, retrieve, and organize user data, and is essential for the full functionality of the application. Please follow the provided link.

```bash
# You need have MongoDB running in the background and you have created the database.
npm install

# You need edit you archive .env using any editor.
# You Should add all the configurations details or else default values will be used.
vim .env

# run the app.
npm start
```

# Author

João Marcos C. Ferreira - Code and Documentation [Linkedin](https://www.linkedin.com/in/joao-mcf/)
