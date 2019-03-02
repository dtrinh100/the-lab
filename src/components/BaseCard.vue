<template>
  <div class="base-card">
    <div class="base-card__image-container">
      <img class="base-card__image" :src="image.url" :alt="image.alt" />
    </div>
    <div class="base-card__content">
      <div class="base-card__title">
        <h2>{{ result.name }}</h2>
      </div>
      <div class="base-card__date">{{ result.date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
  props: {
    result: {
      type: Object,
      required: true
    }
  },
  computed: {
    image: function() {
      let image = null;
      const images = this.result.images;
      if (images.length) {
        image = images.filter(image => {
          return image.height === 115;
        });
      }
      return image[0];
    }
  }
};
</script>
<style scoped>
.base-card {
  height: 115px;
  margin-bottom: 2rem;
  width: 50rem;
  border-top: 2px solid #eff0f1;
  border-bottom: 2px solid #eff0f1;
  display: flex;
}
.base-card__title {
  font-size: 0.9rem;
}
.base-card__content {
  margin: 0.5rem 0 0 1rem;
}
</style>
