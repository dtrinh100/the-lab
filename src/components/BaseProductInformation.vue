<template>
  <main class="base-product-information">
    <NavigationBar/>
    <section class="message-container" v-show="message">
      <div class="message-container__message">{{ message }}</div>
    </section>
    <section v-if="!loading && !error" class="product-content">
      <h1 class="product-content__title">{{ result.name }}</h1>
      <div class="product-content__container">
        <div class="image-container">
          <img class="image-container__image" v-if="image" :src="image.url" :alt="result.name">
        </div>
        <div class="product-info">
          <div class="product-info__date" v-if="result.date">
            <strong>Date:</strong>
            {{ result.date }}
          </div>
          <div class="product-info__note" v-if="result.pleaseNote">
            <strong>Please Note:</strong>
            {{ result.pleaseNote }}
          </div>
          <div
            class="product-info__classifications"
            v-if="result.genre || result.subGenre || result.segment"
          >
            <div v-if="result.segment" class="product-info__segment">Segment: {{ result.segment }}</div>
            <div v-if="result.genre" class="product-info__genre">Genre: {{ result.genre }}</div>
            <div
              v-if="result.subGenre"
              class="product-info__subgenre"
            >Sub-Genre: {{ result.subGenre }}</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavigationBar from "@/components/TheNavigationBar";
export default {
  name: "BaseProductInformation",
  mounted: function() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  components: {
    NavigationBar
  },
  props: {
    result: {
      type: Object,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    },
    error: {
      type: Boolean,
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
      if (this.result) {
        const images = this.result.images;
        if (images.length) {
          const data = images.filter(image => {
            return image.height === this.imageHeight;
          });
          image = Object.assign({}, data[0]);
        }
      }
      return image;
    },
    message() {
      let message = null;
      if (this.loading) {
        message = "Gathering your data...";
      }
      if (this.noResults && !this.loading) {
        message = `No results found for ${this.searchText}.`;
      }
      if (this.error) {
        message = "An error has occured.";
      }
      return message;
    }
  },
  methods: {
    async handleResize() {
      await this.$nextTick();
      if (window.innerWidth < 1000) {
        this.imageHeight = 203;
      } else {
        this.imageHeight = 360;
      }
    }
  }
};
</script>
<style scoped>
.base-product-information {
  background-color: var(--background-color);
  margin: 0;
}

.message-container {
  display: flex;
  justify-content: center;
  height: 50rem;
  align-items: center;
}

.message-container__message {
  font-size: 3rem;
}

.product-content {
  margin: 5rem 2rem 0 2rem;
}

.product-content__title {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
}

.image-container {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.product-content__container {
  display: block;
}

.product-info__classifications {
  display: flex;
  font-size: 0.7rem;
  flex: 1; /* Takes up the remaning height of the card */
  align-items: flex-end;
  margin-top: 1rem;
}

.product-info__segment {
  background-color: var(--secondary-color-two);
  border-radius: 5px;
  border: 1px solid var(--secondary-color-two);
  color: white;
  padding: 0.2rem;
}

.product-info__genre {
  margin: 0 0.5rem;
  background-color: var(--secondary-color-two);
  border-radius: 5px;
  border: 1px solid var(--secondary-color-two);
  color: white;
  padding: 0.2rem;
}

.product-info__subgenre {
  background-color: var(--secondary-color-two);
  border-radius: 5px;
  border: 1px solid var(--secondary-color-two);
  color: white;
  padding: 0.2rem;
}

@media only screen and (min-width: 660px) {
  .product-content {
    margin-top: 8rem;
  }
  .product-content__container {
    display: flex;
  }

  .image-container {
    margin-bottom: 0;
  }

  .product-content__title {
    font-size: 2.3rem;
  }

  .product-info {
    display: flex;
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    width: 100%;
  }
  .product-info__classifications {
    font-size: 1rem;
  }
}
</style>
