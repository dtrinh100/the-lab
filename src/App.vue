<template>
  <router-view />
</template>

<style>
:root {
  --background-color: #ffffff;
  --secondary-color: #003087;
  margin: 0;
  padding: 0;
}
html,
body {
  margin: 0;
  padding: 0;
  font-family: "BogleWeb Regular", Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
}
h1,
h2,
h3 {
  margin: 0;
  font-family: "BogleWeb Bold", Arial, sans-serif;
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: "BogleWeb Black";
  src: url("./assets/fonts/BogleWeb-Black.woff2");
}
@font-face {
  font-family: "BogleWeb Bold";
  src: url("./assets/fonts/BogleWeb-Bold.woff2");
}
@font-face {
  font-family: "BogleWeb Regular";
  src: url("./assets/fonts/BogleWeb-Regular.woff2");
}
</style>
