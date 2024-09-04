<template>
  <div class="container">
    <img
      :src="getImageUrl(article.id)"
      class="card-img-top"
      alt="Gambar Artikel">
      <h1>{{  article.title }}</h1>
      <p>{{ article.body }}</p>
      <comment-section :article-id="article.id"></comment-section>
  </div>
</template>

<script>
import axios from 'axios';
import CommentSection from '../views/CommentSectionView.vue';
export default {
  components: {
    CommentSection
  },
  data() {
    
    return {
      article: {}
    };
  },
  created() {
   const articleId = this.$route.params.id;
   axios.get(`https://jsonplaceholder.typicode.com/posts/${articleId}`)
   .then(response => {
     this.article = response.data
   });
  },
  methods: {
    getImageUrl(id) {
      return `https://picsum.photos/seed/${id}/50/10`;
    }
  }
}

</script>
