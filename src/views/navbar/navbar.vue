<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="nav-item">{{ $t('common.nav.home') }}</router-link>
      <router-link to="/resource" class="nav-item">{{ $t('common.nav.resource') }}</router-link>
      <router-link to="/history" class="nav-item">{{ $t('common.nav.history') }}</router-link>
      <router-link to="/art" class="nav-item">{{ $t('common.nav.art') }}</router-link>
      <router-link to="/about" class="nav-item">{{ $t('common.nav.aboutUs') }}</router-link>
      <router-link to="/document" class="nav-item">{{ $t('common.nav.document') }}</router-link>
      
      <!-- 语言切换按钮 -->
      <div class="lang-switcher">
        <button 
          @click="switchLang('zh')" 
          :class="['lang-btn', { active: $i18n.locale === 'zh' }]"
        >
          中文
        </button>
        <button 
          @click="switchLang('en')" 
          :class="['lang-btn', { active: $i18n.locale === 'en' }]"
        >
          EN
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
    methods: {
    switchLang(lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #1a4780;
  padding: 20px 0;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.nav-item {
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.3s;
}

.nav-item:hover {
  opacity: 0.8;
}

/* 语言切换器样式 */
.lang-switcher {
  display: flex;
  gap: 8px;
  margin-left: 20px;
}

.lang-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lang-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
}

.lang-btn.active {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.6);
  font-weight: bold;
}
</style>
