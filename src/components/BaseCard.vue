<template>
  <div class="base-card">
    <div class="base-card__image-container">
      <router-link
        class="base-card__link"
        :to="{ name: 'event', params: { eventId: result.id } }"
      >
        <img
          class="base-card__image"
          v-if="image"
          :src="image.url"
          :alt="image.alt"
        />
      </router-link>
    </div>
    <div class="base-card__content">
      <h2 class="base-card__title">
        <router-link
          class="base-card__link"
          :to="{ name: 'event', params: { eventId: result.id } }"
          >{{ result.name }}</router-link
        >
      </h2>
      <div class="base-card__date">{{ result.date }}</div>
      <div class="base-card__description">
        <strong>Please Note:</strong>
        {{ result.pleaseNote }}
      </div>
      <div
        class="base-card__classifications"
        v-if="result.genre || result.subGenre || result.segment"
      >
        <div class="base-card__segment">Segment: {{ result.segment }}</div>
        <div class="base-card__genre">Genre: {{ result.genre }}</div>
        <div class="base-card__subgenre">Sub-Genre: {{ result.subGenre }}</div>
        &nbsp;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
  mounted: function() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  props: {
    result: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      imageHeight: 0
    };
  },
  computed: {
    // Creates an image property based on the imageHeight data. It filters the array of images to find
    // an image that matches the imageHeight data, then returns an object representing that image.
    image: function() {
      let image = null;
      const images = this.result.images;
      if (images.length) {
        image = images.filter(image => {
          return image.height === this.imageHeight;
        });
      }
      return image[0];
    }
  },
  methods: {
    async handleResize() {
      await this.$nextTick();
      if (window.innerWidth < 1000) {
        this.imageHeight = 56;
      } else {
        this.imageHeight = 203;
      }
    }
  }
};
</script>
<style scoped>
.base-card {
  height: auto;
  margin-bottom: 2rem;
  width: 20rem;
  border-top: 2px solid #eff0f1;
  border-bottom: 2px solid #eff0f1;
  padding: 0.8rem 0;
  display: flex;
  justify-content: center;
}
.base-card__date {
  font-size: 0.8rem;
  margin: 0.2rem 0;
}
.base-card__content {
  font-size: 0.7rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
}
.base-card__link {
  color: black;
  text-decoration: none;
}
.base-card__link:hover {
  color: var(--primary-color);
}
.base-card__classifications {
  display: flex;
  font-size: 0.5rem;
  flex: 1; /* Takes up the remaning height of the card */
  align-items: flex-end;
  margin-top: 1rem;
}

.base-card__segment {
  background-color: var(--secondary-color-two);
  border-radius: 5px;
  border: 1px solid var(--secondary-color-two);
  color: white;
  padding: 0.2rem;
}
.base-card__genre {
  margin: 0 0.5rem;
  background-color: var(--secondary-color-two);
  border-radius: 5px;
  border: 1px solid var(--secondary-color-two);
  color: white;
  padding: 0.2rem;
}

.base-card__subgenre {
  background-color: var(--secondary-color-two);
  border-radius: 5px;
  border: 1px solid var(--secondary-color-two);
  color: white;
  padding: 0.2rem;
}

@media only screen and (min-width: 1000px) {
  .base-card {
    width: 50rem;
  }
  .base-card__content {
    font-size: 1rem;
  }
  .base-card__classifications {
    font-size: 0.8rem;
  }
}
</style>
