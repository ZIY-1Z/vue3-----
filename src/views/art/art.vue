<template>
  <div class="container art-container">
    <h2>{{ $t('art.title') }}</h2>
    <div class="art-cards">
      <div class="art-card">
        <h3>{{ $t('art.cards.0.title') }}</h3>
        <p>{{ $t('art.cards.0.content') }}</p>
        <img src="../../assets/images/a2.png" :alt="$t('art.cards.0.imgAlt')" />
      </div>
      <div class="art-card">
        <h3>{{ $t('art.cards.1.title') }}</h3>
        <p>{{ $t('art.cards.1.content') }}</p>
        <img src="../../assets/images/a3.png" :alt="$t('art.cards.1.imgAlt')" />
      </div>
      <div class="art-card">
        <h3>{{ $t('art.cards.2.title') }}</h3>
        <p>{{ $t('art.cards.2.content') }}</p>
        <img src="../../assets/images/a4.png" :alt="$t('art.cards.2.imgAlt')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Art",
};
</script>

<style scoped>
.container {
  background-color: white;
  padding: 20px;
  margin: 20px auto;
  max-width: 1200px;
}
.art-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.art-card {
  flex: 1 1 300px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.art-card h3 {
  color: #1a56db;
  margin-bottom: 10px;
}
.art-card p {
  line-height: 1.6;
  margin-bottom: 15px;
}
.art-card img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}
</style>
