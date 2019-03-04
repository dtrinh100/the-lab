<template>
  <div class="base-attraction">
    <div class="image-container">
      <img
        class="image-container__image"
        v-if="attractionImage"
        :src="attractionImage.url"
        :alt="result.name"
      />
    </div>
    <div class="base-attraction__name">{{ result.name }}</div>
  </div>
</template>

<script>
import imageHelper from "@/utils/imageHelper";

export default {
  name: "BaseAttraction",
  props: {
    result: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      attractionImageHeight: 115
    };
  },
  computed: {
    attractionImage: function() {
      let image = null;
      if (this.result) {
        const images = this.result.images;
        if (images.length) {
          image = imageHelper(images, this.attractionImageHeight);
        }
      }
      return image;
    }
  }
};
</script>
<style scoped>
.base-attraction {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-right: 2rem;
  text-align: center;
}
</style>
