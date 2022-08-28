<template>
  <div id="ex-home">
    <img src="/images/human-centered-experience-design.png" />
    <div id="ex-right">
      <div class="ex-right-warp">
        <p>生活就像一个循环，时而勤奋，时而懒惰，反反复复。</p>
        <p>人一般比较健忘，在一个地方跌倒一次，后面大概率还会犯同一个错误。</p>
        <p>为了更好的管理时间、精力，避免重复犯同一个错误。</p>
        <p>这里记录每天的经验总结，提醒自己。</p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
#ex-home {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  margin-top: 10%;
  img {
    max-width: 300px;
    width: 45%;
  }
  #ex-right {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      margin: 1em;
    }
  }
}
</style>
