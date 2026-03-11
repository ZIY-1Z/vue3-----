<template>
  <div class="container resource-container">
    <h2>{{ $t('resource.title') }}</h2>
    <!-- 搜索栏 -->
    <div class="search-bar">
      <input
        type="text"
        v-model="searchKeyword"
        :placeholder="$t('resource.search.placeholder')"
      />
      <button @click="searchResource">{{ $t('resource.search.button') }}</button>
    </div>
    <!-- 分类筛选 -->
    <div class="resource-categories">
      <h3>{{ $t('resource.categories.title') }}</h3>
      <div class="category-buttons">
        <button
          @click="filterCategory('all')"
          :class="{ active: currentCategory === 'all' }"
        >
          {{ $t('resource.categories.all') }}
        </button>
        <button
          @click="filterCategory('labor')"
          :class="{ active: currentCategory === 'labor' }"
        >
          {{ $t('resource.categories.labor') }}
        </button>
        <button
          @click="filterCategory('love')"
          :class="{ active: currentCategory === 'love' }"
        >
          {{ $t('resource.categories.love') }}
        </button>
        <button
          @click="filterCategory('ritual')"
          :class="{ active: currentCategory === 'ritual' }"
        >
          {{ $t('resource.categories.ritual') }}
        </button>
        <button
          @click="filterCategory('narrative')"
          :class="{ active: currentCategory === 'narrative' }"
        >
          {{ $t('resource.categories.narrative') }}
        </button>
      </div>
    </div>

    <!-- 滚动简介显示区域 -->
    <div class="scroll-desc-container" v-if="showScrollDesc">
      <div class="scroll-content" :style="{ transform: `translateX(${scrollPosition}px)` }">
        {{ formattedDesc }}
      </div>
    </div>

    <!-- 资源列表 -->
    <div class="resource-list">
      <div class="resource-item" v-for="(item, index) in filteredResources" :key="index">
        <h4>{{ item.title }}</h4>
        <p class="resource-category">{{ $t('resource.categories.title') }}：{{ item.categoryText }}</p>
        <!-- 视频播放时触发简介滚动 -->
        <video 
          controls 
          :src="item.videoUrl" 
          class="video-player"
          @play="startScrollDesc(index, item.description)"
          @pause="pauseScrollDesc"
          @ended="stopScrollDesc"
        >
          {{ $t('resource.video.noSupport') }}
        </video>
        <p class="resource-desc">{{ item.description }}</p>
        <div class="resource-actions">
          <button>{{ $t('resource.video.actions.download') }}</button>
          <button>{{ $t('resource.video.actions.collect') }}</button>
        </div>
      </div>
      <p v-if="filteredResources.length === 0">{{ $t('resource.noResource') }}</p>
    </div>
  </div>
</template>

<script>
import zhResources from '../../i18n/langs/zh.js';
import enResources from '../../i18n/langs/en.js';

export default {
  name: "VideoResource",
  data() {
    return {
      searchKeyword: "",
      currentCategory: "all",
      // 滚动简介相关变量
      showScrollDesc: false,       // 是否显示滚动简介
      currentDesc: "",             // 当前视频的完整简介
      formattedDesc: "",           // 格式化后的滚动文本（补全重复用于无缝滚动）
      scrollPosition: 0,           // 滚动位置
      scrollInterval: null,        // 滚动定时器
      activeVideoIndex: -1,        // 当前激活的视频索引
      scrollSpeed: 2,              // 滚动速度（像素/帧）
      visibleChars: 15             // 每次显示的字符数
    };
  },
  computed: {
    resources() {
      const currentLocale = this.$i18n.locale;
      const resourcesData = currentLocale === 'zh' ? zhResources.resource.resources : enResources.resource.resources;
      
      if (!Array.isArray(resourcesData)) {
        console.warn('Resources data is not an array:', resourcesData);
        return [];
      }
      
      return resourcesData.map((item, index) => ({
        ...item,
        videoUrl: this.getVideoUrl(index)
      }));
    },
    filteredResources() {
      let result = this.resources;
      if (this.currentCategory !== "all") {
        result = result.filter((item) => item.category === this.currentCategory);
      }
      if (this.searchKeyword) {
        const keyword = this.searchKeyword.toLowerCase();
        result = result.filter(
          (item) =>
            item.title.toLowerCase().includes(keyword) ||
            item.description.toLowerCase().includes(keyword) ||
            item.categoryText.toLowerCase().includes(keyword)
        );
      }
      return result;
    },
    // 计算滚动容器的宽度（根据显示字符数动态调整）
    scrollContainerWidth() {
      // 每个汉字约占16px宽度，15字约240px，加边距
      return `${this.visibleChars * 16 + 40}px`;
    }
  },
  methods: {
    // 获取视频URL的方法
    getVideoUrl(index) {
      const videoFiles = [
        require("../../assets/images/s1.mp4"),
        require("../../assets/images/s2.mp4"),
        require("../../assets/images/s6.mp4"),
        require("../../assets/images/s4.mp4"),
        require("../../assets/images/s5.mp4"),
        require("../../assets/images/s7.mp4"),
        require("../../assets/images/s8.mp4"),
        require("../../assets/images/s4.mp4"),
        require("../../assets/images/s1.mp4")
      ];
      return videoFiles[index] || require("../../assets/images/s1.mp4");
    },
    // 开始滚动简介
    startScrollDesc(index, description) {
      // 若切换视频，先清除之前的滚动
      if (this.activeVideoIndex !== index) {
        this.stopScrollDesc();
      }
      this.activeVideoIndex = index;
      this.currentDesc = description;
      this.showScrollDesc = true;

      // 格式化文本：如果文本过短，重复拼接使其能滚动；否则正常使用
      this.formattedDesc = this.currentDesc.length > this.visibleChars 
        ? `${this.currentDesc}   ${this.currentDesc}`  // 中间加空格分隔
        : this.currentDesc;

      // 启动滚动定时器（每30ms滚动一次）
      this.scrollInterval = setInterval(() => {
        const textWidth = this.formattedDesc.length * 16; // 文本总宽度（估算）
        const halfWidth = textWidth / 2; // 一半宽度（滚动到此处重置，实现无缝）

        // 滚动到一半时重置位置，形成循环
        if (this.scrollPosition <= -halfWidth) {
          this.scrollPosition = 0;
        } else {
          this.scrollPosition -= this.scrollSpeed;
        }
      }, 30);
    },

    // 暂停滚动
    pauseScrollDesc() {
      if (this.scrollInterval) {
        clearInterval(this.scrollInterval);
        this.scrollInterval = null;
      }
    },

    // 停止滚动并重置
    stopScrollDesc() {
      this.pauseScrollDesc();
      this.scrollPosition = 0;
      this.showScrollDesc = false;
      this.activeVideoIndex = -1;
    },

    // 切换分类时停止滚动
    filterCategory(category) {
      this.currentCategory = category;
      this.searchKeyword = "";
      this.stopScrollDesc();
    },

    // 搜索时停止滚动
    searchResource() {
      this.stopScrollDesc();
    }
  },
  // 组件卸载时清除定时器
  beforeUnmount() {
    this.stopScrollDesc();
  }
};
</script>

<style scoped>
.container {
  background-color: white;
  padding: 20px;
  margin: 20px auto;
  max-width: 1200px;
}
.search-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.search-bar input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.search-bar button {
  padding: 8px 15px;
  background-color: #1a56db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.resource-categories {
  margin-bottom: 20px;
}
.category-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.category-buttons button {
  padding: 6px 12px;
  border: 1px solid #1a56db;
  background-color: white;
  color: #1a56db;
  border-radius: 4px;
  cursor: pointer;
}
.category-buttons button.active {
  background-color: #1a56db;
  color: white;
}

/* 滚动简介样式 */
.scroll-desc-container {
  width: 100%;
  height: 50px;
  margin: 20px 0;
  padding: 0 20px;
  background: linear-gradient(135deg, #f0f7ff 0%, #e6f0ff 100%);
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(26, 86, 219, 0.1);
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
}
.scroll-content {
  white-space: nowrap; /* 禁止文本换行 */
  font-size: 16px;
  color: #1a56db;
  font-weight: 500;
  transition: transform 0.03s linear; /* 平滑滚动动画 */
  position: absolute;
}

.resource-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
.resource-item {
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}
.resource-item h4 {
  color: #1a56db;
  margin-bottom: 8px;
}
.resource-category {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}
.video-player {
  width: 100%;
  margin-bottom: 10px;
  border-radius: 4px;
  cursor: pointer;
}
.resource-desc {
  line-height: 1.6;
  margin-bottom: 10px;
  flex-grow: 1;
}
.resource-actions button {
  padding: 5px 10px;
  margin-right: 5px;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
}
.resource-actions button:hover {
  background-color: #f0f0f0;
}
</style>