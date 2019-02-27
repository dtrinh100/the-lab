<template>
  <main class="labs-homepage" role="img" aria-label="Picture of a toy">
    <div class="search-container">
      <h1 class="search-container__header">Search The Labs</h1>
      <div class="search-bar">
        <input
          class="search-bar__input"
          type="search"
          placeholder="Search for a product"
          autofocus
        />
        <button class="search-bar__button" type="submit">
          <font-awesome-icon icon="search" size="2x" />
        </button>
      </div>
    </div>
  </main>
</template>

<script></script>
<style scoped>
.labs-homepage {
  background: url(../assets/img/home-bg.png) no-repeat center center fixed;
  background-size: cover;
  display: grid;
  height: 100%;
  justify-content: center;
  align-content: center;
}
.search-container {
  background-color: rgba(255, 194, 32, 0.9);
  height: 15rem;
  width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}
.search-container__header {
  margin-top: 0;
}
.search-bar {
  display: flex;
  align-items: center;
}
.search-bar__input {
  height: 3.2rem;
  width: 20rem;
  padding-left: 0.5rem;
  font-size: 1.2rem;
}
.search-bar__button {
  height: 3.3rem;
  width: 3.3rem;
  cursor: pointer;
  background-color: #003087;
  border: none;
}
.search-bar__button svg {
  color: white;
}
</style>
