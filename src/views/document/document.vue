<template>
  <div class="she-culture-app">
    <!-- 左侧导航（新增神话传说板块） -->
    <aside class="sidebar">
      <a href="#songs" class="sidebar-link">{{ $t('songs.title') }}</a>
      <a href="#mythology" class="sidebar-link">{{ $t('mythology.title') }}</a>
      <a href="#dictionary" class="sidebar-link">{{ $t('dictionary.title') }}</a>
      <a href="#culture" class="sidebar-link">{{ $t('culture.title') }}</a>
    </aside>

    <!-- 主内容区（按新顺序排列） -->
    <main class="main-content">
      <!-- 1. 歌曲板块 -->
      <section id="songs" class="section-container">
        <h1>{{ $t('songs.title') }}</h1>
        
        <div class="song-item">
          <h2>{{ $t('songs.cards.0.title') }}</h2>
          <div class="card">
            <p><strong>{{ $t('songs.cards.0.background') }}</strong>{{ $t('songs.cards.0.content') }}</p>
            <p><strong>{{ $t('songs.cards.0.strong') }}</strong></p>
            <div class="lyrics">
              {{ $t('songs.cards.0.lyrics1') }}<br>
              {{ $t('songs.cards.0.lyrics2') }}<br>
              {{ $t('songs.cards.0.lyrics3') }}<br>
              {{ $t('songs.cards.0.lyrics4') }}<br>
              {{ $t('songs.cards.0.lyrics5') }}<br>
              {{ $t('songs.cards.0.lyrics6') }}<br>
            </div>
          </div>
        </div>

        <div class="song-item">
          <h2>{{ $t('songs.cards.1.title') }}</h2>
          <div class="card">
            <p><strong>{{ $t('songs.cards.1.background') }}</strong>{{ $t('songs.cards.1.background') }}</p>
            <p><strong>{{ $t('songs.cards.1.strong') }}</strong></p>
            <div class="lyrics">
              {{ $t('songs.cards.1.lyrics1') }}<br>
              {{ $t('songs.cards.1.lyrics2') }}<br>
              {{ $t('songs.cards.1.lyrics3') }}<br>
              {{ $t('songs.cards.1.lyrics4') }}<br>
              {{ $t('songs.cards.1.lyrics5') }}<br>
              {{ $t('songs.cards.1.lyrics6') }}<br>
            </div>
          </div>
        </div>

        <div class="song-item">
          <h2>{{ $t('songs.cards.2.title') }}</h2>
          <div class="card">
            <p><strong>{{ $t('songs.cards.2.background') }}</strong>{{ $t('songs.cards.2.background') }}</p>
            <p><strong>{{ $t('songs.cards.2.strong') }}</strong></p>
            <div class="lyrics">
              {{ $t('songs.cards.2.lyrics1') }}<br>
              {{ $t('songs.cards.2.lyrics2') }}<br>
              {{ $t('songs.cards.2.lyrics3') }}<br>
              {{ $t('songs.cards.2.lyrics4') }}<br>
              {{ $t('songs.cards.2.lyrics5') }}<br>
              {{ $t('songs.cards.2.lyrics6') }}<br>
            </div>
          </div>
        </div>

        <div class="song-item">
          <h2>{{ $t('songs.cards.3.title') }}</h2>
          <div class="card">
            <p><strong>{{ $t('songs.cards.3.background') }}</strong>{{ $t('songs.cards.3.background') }}</p>
            <p><strong>{{ $t('songs.cards.3.strong') }}</strong></p>
            <div class="lyrics">
              {{ $t('songs.cards.3.lyrics1') }}<br>
              {{ $t('songs.cards.3.lyrics2') }}<br>
              {{ $t('songs.cards.3.lyrics3') }}<br>
              {{ $t('songs.cards.3.lyrics4') }}<br>
              {{ $t('songs.cards.3.lyrics5') }}<br>
              {{ $t('songs.cards.3.lyrics6') }}<br>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. 新增：神话传说板块 -->
      <section id="mythology" class="section-container">
        <h1>{{ $t('mythology.title') }}</h1>
        
        <div class="card">
          <h2>{{ $t('mythology.card.0.title') }}</h2>
          <p>{{ $t('mythology.card.0.content1') }}</p>
          <p>{{ $t('mythology.card.0.content2') }}</p>
          <p>{{ $t('mythology.card.0.content3') }}</p>
        </div>

        <div class="card">
          <h2>{{ $t('mythology.card.1.title') }}</h2>
          <p>{{ $t('mythology.card.1.content1') }}</p>
          <p>{{ $t('mythology.card.1.content2') }}</p>
          <p>{{ $t('mythology.card.1.content3') }}</p>
        </div>

        <div class="card">
          <h2>{{ $t('mythology.card.2.title') }}</h2>
          <p>{{ $t('mythology.card.2.content1') }}</p>
          <p>{{ $t('mythology.card.2.content2') }}</p>
          <p>{{ $t('mythology.card.2.content3') }}</p>
        </div>

        <div class="card">
          <h2>{{ $t('mythology.card.3.title') }}</h2>
          <p>{{ $t('mythology.card.3.content1') }}</p>
          <p>{{ $t('mythology.card.3.content2') }}</p>
          <p>{{ $t('mythology.card.3.content3') }}</p>
        </div>
      </section>

      <!-- 3. 词典板块 -->
      <section id="dictionary" class="section-container">
        <h1>{{ $t('dictionary.title') }}</h1>
        <div class="dictionary-grid">
          <div class="card" v-for="item in dictionary" :key="item.word">
            <h3>{{ item.word }} ({{ item.pronunciation }})</h3>
            <p><strong>{{ $t('dictionary.title1') }}</strong>{{ item.meaning }}</p>
            <p><strong>{{ $t('dictionary.title2') }}</strong>{{ item.example }}</p>
          </div>
        </div>
      </section>

      <!-- 4. 文化背景板块 -->
      <section id="culture" class="section-container">
        <h1>{{ $t('culture.title') }}</h1>
        
        <div class="card">
          <h2>{{ $t('culture.cards.0.title') }}</h2>
          <p>{{ $t('culture.cards.0.content') }}</p>
          <p>{{ $t('culture.cards.0.content2') }}</p>
        </div>

        <div class="card">
          <h2>{{ $t('culture.cards.1.title') }}</h2>
          <p>{{ $t('culture.cards.1.content') }}</p>
          <ul>
            <li><strong>{{ $t('culture.cards.1.content1') }}</strong>{{ $t('culture.cards.1.content2') }}</li>
            <li><strong>{{ $t('culture.cards.1.content3') }}</strong>{{ $t('culture.cards.1.content4') }}</li>
            <li><strong>{{ $t('culture.cards.1.content5') }}</strong>{{ $t('culture.cards.1.content6') }}</li>
            <li><strong>{{ $t('culture.cards.1.content7') }}</strong>{{ $t('culture.cards.1.content8') }}</li>
            <li><strong>{{ $t('culture.cards.1.content9') }}</strong>{{ $t('culture.cards.1.content10') }}</li>
            <li><strong>{{ $t('culture.cards.1.content11') }}</strong>{{ $t('culture.cards.1.content12') }}</li>
          </ul>
          <p>{{ $t('culture.cards.1.content13') }}</p>
        </div>

        <div class="card">
          <h2>{{ $t('culture.cards.2.title') }}</h2>
          <p>{{ $t('culture.cards.2.content') }}</p>
          <p>{{ $t('culture.cards.1.content2') }}</p>
          <ol>
            <li>{{ $t('culture.cards.1.content3') }}</li>
            <li>{{ $t('culture.cards.1.content4') }}</li>
            <li>{{ $t('culture.cards.1.content5') }}</li>
            <li>{{ $t('culture.cards.1.content6') }}</li>
          </ol>
          <p>{{ $t('culture.cards.1.content7') }}</p>
        </div>

        <div class="card">
          <h2>{{ $t('culture.cards.2.title') }}</h2>
          <p>{{ $t('culture.cards.1.content') }}</p>
          <p>{{ $t('culture.cards.1.content2') }}</p>
          <p>{{ $t('culture.cards.1.content3') }}</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
// 词典数据（30个条目）
const dictionary = [
  { word: "山哈", pronunciation: "shān hā", meaning: "畲族人的自称，意为‘山里人’或‘居住在山里的客人’", example: "山哈人爱唱山歌，歌声能绕山三圈。" },
  { word: "盘瓠", pronunciation: "pán hù", meaning: "畲族传说中的始祖，是一只神犬，因助皇帝平乱有功而得婚配", example: "盘瓠是我们畲族的祖先，祖图里详细画了他的故事。" },
  { word: "凤凰装", pronunciation: "fèng huáng zhuāng", meaning: "畲族女性的传统服饰，因装饰有凤凰图案和银饰而得名", example: "畲族新娘穿上凤凰装，全身银饰叮当响，像一只美丽的凤凰。" },
  { word: "三月三", pronunciation: "sān yuè sān", meaning: "畲族最隆重的传统节日，又称‘乌饭节’，是祭祖和歌会的日子", example: "每年三月三，山哈人都要聚在一起对歌、吃乌米饭。" },
  { word: "乌米饭", pronunciation: "wū mǐ fàn", meaning: "畲族特色食品，用乌稔树叶汁浸泡糯米蒸制而成，呈紫黑色", example: "三月三吃乌米饭，据说能祛风解毒，保佑一年平安。" },
  { word: "祖图", pronunciation: "zǔ tú", meaning: "描绘畲族起源和迁徙历史的长卷画卷，是畲族重要的文化遗产", example: "祭祖时悬挂祖图，老人会对着祖图唱《高皇歌》讲述历史。" },
  { word: "打尺寸", pronunciation: "dǎ chǐ cùn", meaning: "畲族传统体育项目，类似击棍游戏，考验力量和技巧", example: "节日里年轻人喜欢打尺寸，胜者能赢得姑娘们的青睐。" },
  { word: "畲歌", pronunciation: "shē gē", meaning: "畲族传统民歌的统称，包含多种类型和曲调", example: "畲歌是山哈人的第二语言，什么话都能编成歌。" },
  { word: "对歌", pronunciation: "duì gē", meaning: "畲族传统歌唱形式，男女双方或群体间互相演唱应答", example: "三月三歌会上，青年男女通过对歌寻找心上人。" },
  { word: "蓝姓", pronunciation: "lán xìng", meaning: "畲族主要姓氏之一，与雷、钟姓并称畲族三大姓", example: "蓝姓是畲族的大姓，许多歌王都姓蓝。" },
  { word: "雷姓", pronunciation: "léi xìng", meaning: "畲族主要姓氏之一，在畲族社会中多担任族长或祭司", example: "雷氏家族保存了许多古老的畲歌抄本。" },
  { word: "钟姓", pronunciation: "zhōng xìng", meaning: "畲族主要姓氏之一，分布广泛，人才辈出", example: "钟姓畲族人擅长银饰制作，也爱唱山歌。" },
  { word: "银饰", pronunciation: "yín shì", meaning: "畲族传统银制装饰品，包括头饰、项圈、手镯等", example: "畲族妇女的银饰越多，说明家庭越富足。" },
  { word: "糍粑", pronunciation: "cí bā", meaning: "畲族传统食品，糯米蒸熟后捶打制成，可煎可炸", example: "过年时畲族人会做糍粑，寓意团团圆圆。" },
  { word: "谷仓舞", pronunciation: "gǔ cāng wǔ", meaning: "畲族传统舞蹈，模拟丰收后谷物入仓的场景，动作欢快", example: "丰收后大家跳起谷仓舞，庆祝好收成。" },
  { word: "采茶调", pronunciation: "cǎi chá diào", meaning: "畲族采茶时唱的曲调，节奏轻快，富有生活气息", example: "采茶姑娘唱着采茶调，一天能采满三竹篓。" },
  { word: "祭祖", pronunciation: "jì zǔ", meaning: "畲族传统祭祀祖先的活动，多在节日或重要时刻举行", example: "祭祖时要献上乌米饭，唱祭祀歌，表达感恩之情。" },
  { word: "迁徙", pronunciation: "qiān xǐ", meaning: "畲族历史上多次从北方南迁的活动，记录在《高皇歌》中", example: "祖图详细描绘了我们畲族的七次大迁徙。" },
  { word: "歌王", pronunciation: "gē wáng", meaning: "畲族中擅长唱歌、对歌技巧高超的人，受族人尊敬", example: "村里的歌王能连续唱三天三夜不重样。" },
  { word: "歌节", pronunciation: "gē jié", meaning: "畲族专门举行歌唱活动的节日，以三月三最为著名", example: "歌节期间，四面八方的人都来对歌，比过年还热闹。" },
  { word: "火塘", pronunciation: "huǒ táng", meaning: "畲族传统民居中用于取暖、做饭和聚会的火坑，是家庭活动中心", example: "晚上大家围坐在火塘边，听老人唱古老的畲歌。" },
  { word: "畲药", pronunciation: "shē yào", meaning: "畲族传统医药，利用山区草药治疗疾病，有独特疗法", example: "畲药治疗跌打损伤很有效，配方都编在歌里代代传。" },
  { word: "织带", pronunciation: "zhī dài", meaning: "畲族传统手工编织品，用于服饰装饰或生活用品", example: "她织的彩带图案精美，上面的花纹都有吉祥寓意。" },
  { word: "藤牌舞", pronunciation: "téng pái wǔ", meaning: "畲族传统舞蹈，模拟古代战斗场景，手持藤牌和短刀", example: "藤牌舞既能强身健体，也能纪念祖先的战斗历史。" },
  { word: "婚歌", pronunciation: "hūn gē", meaning: "畲族婚礼上唱的系列歌曲，包括迎亲、哭嫁、拜堂等环节", example: "新娘的哭嫁歌既伤心又甜蜜，听得人眼泪直流。" },
  { word: "丧歌", pronunciation: "sàng gē", meaning: "畲族丧葬仪式上唱的歌，表达哀思并指引亡灵回归祖地", example: "丧歌音调低沉，歌词讲述逝者生平，祈愿安息。" },
  { word: "童谣", pronunciation: "tóng yáo", meaning: "畲族儿童唱的歌谣，语言简单活泼，包含生活知识", example: "妈妈教的童谣里，藏着很多做人的道理。" },
  { word: "狩猎歌", pronunciation: "shòu liè gē", meaning: "畲族狩猎时唱的歌，有呼唤同伴、驱赶野兽的作用", example: "猎人进山前唱狩猎歌，祈求满载而归。" },
  { word: "石硪号子", pronunciation: "shí wò hào zi", meaning: "畲族集体打地基时唱的号子，统一节奏、鼓舞士气", example: "修房子时，石硪号子一响，大家干劲就更足了。" },
  { word: "畲银", pronunciation: "shē yín", meaning: "畲族传统银器工艺及制品，以精美花纹和吉祥寓意著称", example: "畲银不仅好看，还能避邪，是给孩子最好的礼物。" }
]
</script>

<style scoped>
.she-culture-app {
  display: flex;
  min-height: 100vh;
  font-family: 'Microsoft YaHei', sans-serif;
  background: #ecf0f1;
}

/* 左侧导航样式 */
.sidebar {
  width: 220px;
  background: #3498db;
  color: white;
  padding: 20px 0;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  align-self: flex-start;
  height: 100vh;
}

.sidebar-link {
  display: block;
  color: white;
  text-decoration: none;
  padding: 12px 20px;
  transition: background 0.3s;
}

.sidebar-link:hover {
  background: #2980b9;
  text-decoration: none;
}

/* 主内容区样式 */
.main-content {
  flex: 1;
  padding: 30px;
  max-width: calc(100% - 220px);
  box-sizing: border-box;
  scroll-behavior: smooth; /* 平滑滚动 */
}

/* 板块容器样式 */
.section-container {
  margin-bottom: 60px;
  scroll-margin-top: 20px; /* 滚动到板块时顶部留白 */
}

h1, h2, h3 {
  color: #2c3e50;
}

h1 {
  margin-top: 0;
  border-left: 4px solid #3498db;
  padding-left: 10px;
  margin-bottom: 30px;
  font-size: 2rem;
}

h2 {
  border-bottom: 2px solid #3498db;
  padding-bottom: 8px;
  margin-top: 30px;
  margin-bottom: 20px;
}

/* 卡片样式 */
.card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-left: 3px solid #3498db;
}

/* 词典网格布局 */
.dictionary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

/* 歌曲项样式 */
.song-item {
  margin-bottom: 40px;
}

/* 歌词样式 */
.lyrics {
  background: #f5f5f5;
  padding: 15px;
  border-radius: 4px;
  white-space: pre-line;
  font-family: 'SimSun', serif;
  line-height: 1.8;
  margin-top: 10px;
  border-left: 2px solid #7f8c8d;
}

/* 列表样式 */
ul, ol {
  padding-left: 20px;
  margin: 10px 0;
}

li {
  margin-bottom: 8px;
}

p {
  line-height: 1.6;
  margin: 10px 0;
}
</style>