<template>
  <div class="container history-container">
    <h2>{{ $t('history.title') }}</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-date">{{ $t('history.timeline.0.period') }}</div>
        <div class="timeline-content">
          <h3>{{ $t('history.timeline.0.title') }}</h3>
          <p>{{ $t('history.timeline.0.content') }}</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">{{ $t('history.timeline.1.period') }}</div>
        <div class="timeline-content">
          <h3>{{ $t('history.timeline.1.title') }}</h3>
          <p>{{ $t('history.timeline.1.content') }}</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">{{ $t('history.timeline.2.period') }}</div>
        <div class="timeline-content">
          <h3>{{ $t('history.timeline.2.title') }}</h3>
          <p>{{ $t('history.timeline.2.content') }}</p>
          <img src="../../assets/images/a4.png" :alt="$t('history.timeline.2.imgAlt')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "History",
};
</script>

<style scoped>
.container {
  background-color: rgb(250, 241, 241);
  padding: 20px;
  margin: 20px auto;
  max-width: 1200px;
}
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}
.timeline::after {
  content: "";
  position: absolute;
  width: 6px;
  background-color: #1a56db;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}
.timeline-item {
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
}
.timeline-item:nth-child(odd) {
  left: 0;
}
.timeline-item:nth-child(even) {
  left: 50%;
}
.timeline-date {
  background-color: #1a56db;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  display: inline-block;
}
.timeline-content {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 6px;
  margin-top: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.timeline-content h3 {
  color: #1a56db;
  margin-bottom: 10px;
}
.timeline-content p {
  line-height: 1.6;
}
.timeline-content img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-top: 10px;
}
</style>