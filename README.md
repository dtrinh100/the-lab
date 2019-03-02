# the-labs

The Labs is an application that features the usage of Ticketmaster's APIs. It allows the users to search for an event and get more information on the event via Ticketmaster's events APIs.

## Project structure overview

All of the code is layout in a way that follows best practices. Vuex is used to passed around shared props for smart
componenets. Models are used to format the code returned from the API. Files that has the name "Base" are meant to be presentational components, while those without "Base" in front of their names are smart components that deals with connecting to the Vuex store and handle non UI logic. Components with "The" in front of their names are special components in which only one instance should exist.

Unit tests for included for each smart component, VueX modules, and models to test their logic. Some UI unit tests are included as well for presentational components.

## Configuration

To run this code, please go over to [Ticketmaster's website](https://developer.ticketmaster.com/) and register for an account to get your API key. After getting your API key, refer to the `sample.env.local` file to create your own `.env.local` file (note your own file name should not have the word _sample_ in it).

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```
