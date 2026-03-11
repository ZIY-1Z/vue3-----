<template>
  <div class="team-page">
    <!-- 顶部标识 -->
    <div class="top-badge">
      <div class="badge-icon">{{ $t('aboutUs.icon') }}</div>
      <span>{{ $t('aboutUs.text') }}</span>
    </div>

    <!-- 核心介绍 -->
    <section class="hero">
      <h1>{{ $t('hero.title1') }}<br>{{ $t('hero.title2') }}</h1>
      <p>{{ $t('hero.desc') }}</p>
    </section>

    <!-- 为什么做 -->
    <section class="section why">
      <h2>{{ $t('why.title') }}</h2>
      <p>{{ $t('why.content') }}</p>
    </section>

    <!-- 我们做了什么（精简版） -->
    <section class="section what">
      <h2>{{ $t('what.title') }}</h2>
      <div class="what-list">
        <div class="what-item">
          <div class="what-icon">🎙️</div>
          <p>{{ $t('what.cards.0.content') }}</p>
        </div>
        <div class="what-item">
          <div class="what-icon">💻</div>
          <p>{{ $t('what.cards.1.content') }}</p>
        </div>
        <div class="what-item">
          <div class="what-icon">📣</div>
          <p>{{ $t('what.cards.2.content') }}</p>
        </div>
      </div>
    </section>

    <!-- 未来想做什么 -->
    <section class="section future">
      <h2>{{ $t('future.title') }}</h2>
      <p>{{ $t('future.content') }}</p>
    </section>

    <!-- 联系我们 -->
    <section class="section contact">
      <h2>{{ $t('contact.title') }}</h2>
      <p>{{ $t('contact.content') }}</p>
      <div class="contact-info">
        <p>{{ $t('contact.info.label') }}</p>
        <p>{{ $t('contact.info.value') }}</p>
      </div>
    </section>

    <!-- 页脚 -->
    <footer>
      <p>{{ $t('fotter.content') }}</p>
    </footer>
  </div>
</template>

<script setup>
// 可修改联系方式等信息
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Microsoft YaHei', sans-serif;
}

.team-page {
  background: #fcfcfc;
  color: #333;
  line-height: 1.6;
}

/* 顶部标识 */
.top-badge {
  padding: 15px 20px;
  background: #f0f7ff;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #e6f0ff;
}

.badge-icon {
  font-size: 1.5rem;
  color: #3498db;
}

/* 核心介绍 */
.hero {
  padding: 60px 20px;
  text-align: center;
  background: #f0f7ff;
}

.hero h1 {
  font-size: 2.2rem;
  margin-bottom: 20px;
  color: #2c3e50;
}

.hero p {
  font-size: 1.1rem;
  color: #555;
  max-width: 600px;
  margin: 0 auto;
}

/* 通用区块 */
.section {
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.section h2 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
}

.section h2::after {
  content: '';
  width: 60px;
  height: 2px;
  background: #3498db;
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
}

.section p {
  font-size: 1rem;
  color: #555;
  max-width: 600px;
  margin: 0 auto;
}

/* 我们做了什么 */
.what-list {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.what-item {
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.what-icon {
  font-size: 1.8rem;
  color: #3498db;
  margin-bottom: 10px;
}

/* 联系我们 */
.contact-info {
  margin-top: 20px;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 8px;
}

.contact-info p {
  margin: 8px 0;
  color: #3498db;
}

/* 页脚 */
footer {
  padding: 20px;
  background: #2c3e50;
  color: white;
  text-align: center;
  margin-top: 30px;
}

/* 响应式 */
@media (max-width: 600px) {
  .hero h1 {
    font-size: 1.8rem;
  }
  
  .what-list {
    grid-template-columns: 1fr;
  }
}
</style>