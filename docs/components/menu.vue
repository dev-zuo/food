<template>
  <div class="ex-wrap">
    <div class="menu-title">
      菜单食谱<span>（{{ total }}）</span>
    </div>
    <div class="ex-menu">
      <div
        v-for="category in menuList"
        :key="category.name"
        class="ex-menu-sec"
      >
        <div class="menu-sec-title">
          {{ category.name }}
          <span
            >({{
              category.list.filter((item) => item.name && item.name !== "-")
                .length
            }})</span
          >
        </div>
        <div class="menu-sec-main">
          <div
            v-for="food in category.list.filter((item) => item.name)"
            :key="food.name"
            class="sec-main-item"
          >
            <a
              v-if="food.name !== '-' && !food.todo"
              class="smi-title"
              :href="'./daily.html' + food.path"
            >
              {{ food.name }}
            </a>
            <span v-else-if="food.todo">{{ food.name }}</span>
            <div v-else class="gap"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const vegetable = {
  name: "素菜",
  list: [
    { name: "青椒炒青豆", path: "#白菜猪肉炖粉条、青椒炒青豆-22-09-17" },
    { name: "清炒黄瓜", path: "#豆瓣罗非鱼、清炒黄瓜、番茄炒蛋-22-09-03" },
    { name: "小炒茄子", path: "", todo: true },
    { name: "-", path: "豆制品" },
    { name: "尖椒豆腐皮", path: "#青椒回锅肉、尖椒豆腐皮-22-09-25" },
    { name: "香干炒肉", path: "#香干炒肉、白菜烧豆腐-22-09-18" },
    { name: "白菜烧豆腐", path: "#香干炒肉、白菜烧豆腐-22-09-18" },
    { name: "葱烧豆腐", path: "#葱烧豆腐、青椒肉丝-22-09-10" },
    { name: "-", path: "", desc: "根茎类" },
    { name: "青椒土豆片", path: "#豆豉鲮鱼油麦菜、青椒土豆片-22-09-12" },
    { name: "青椒土豆丝", path: "#青椒土豆丝、丝瓜炒蛋-22-08-27" },
    { name: "-", path: "", desc: "鸡蛋类" },
    { name: "大葱炒鸡蛋", path: "#大葱炒鸡蛋、大葱炒鸡胸肉-22-09-11" },
    { name: "酱炒鸡蛋", path: "#酱炒鸡蛋-22-09-04" },
    { name: "西红柿炒鸡蛋", path: "#豆瓣罗非鱼、清炒黄瓜、番茄炒蛋-22-09-03" },
    { name: "丝瓜炒鸡蛋", path: "#青椒土豆丝、丝瓜炒蛋-22-08-27" },
    { name: "青椒炒鸡蛋", path: "#青椒鸡腿、青椒炒鸡蛋-22-08-28" },

    { name: "", path: "" },
    { name: "", path: "" },
    { name: "", path: "" },
  ],
};

const greenVegetable = {
  name: "绿叶蔬菜",
  list: [
    { name: "酱圆白菜(包菜)", path: "#红烧鲫鱼、酱圆白菜-22-10-01" },
    { name: "豆豉鲮鱼油麦菜", path: "#豆豉鲮鱼油麦菜、青椒土豆片-22-09-12" },
    { name: "清炒小白菜", path: "#香煎鸡翅、清炒小白菜-22-09-04" },
    { name: "蒜蓉上海青", path: "#香辣虾尾、蒜蓉上海青-22-10-02" },
    { name: "韭黄炒蛋", path: "", todo: true },
    { name: "清炒黄芽白菜", path: "", todo: true },
    { name: "清炒空心菜", path: "", todo: true },
    { name: "清炒红苋菜", path: "", todo: true },
  ],
};

const whiteMeat = {
  name: "白肉",
  list: [
    { name: "大葱炒鸡胸肉", path: "#大葱炒鸡蛋、大葱炒鸡胸肉-22-09-11" },
    { name: "香煎鸡翅", path: "#香煎鸡翅、清炒小白菜-22-09-04" },
    { name: "青椒炒鸡腿", path: "#青椒鸡腿、青椒炒鸡蛋-22-08-28" },
    { name: "葱姜炒鸡", path: "", todo: true },
    { name: "", path: "" },
    { name: "", path: "" },
  ],
};

const redMeat = {
  name: "红肉",
  list: [
    { name: "青椒回锅肉", path: "#青椒回锅肉、尖椒豆腐皮-22-09-25" },
    { name: "白菜猪肉炖粉条", path: "#白菜猪肉炖粉条、青椒炒青豆-22-09-17" },
    { name: "青椒肉丝", path: "#葱烧豆腐、青椒肉丝-22-09-10" },
    { name: "土豆烧排骨", path: "", todo: true },
    { name: "", path: "" },
    { name: "", path: "" },
    { name: "", path: "" },
    { name: "", path: "" },
  ],
};

const fish = {
  name: "水产",
  list: [
    { name: "红烧鲫鱼", path: "#红烧鲫鱼、酱圆白菜-22-10-01" },
    { name: "豆瓣罗非鱼", path: "#豆瓣罗非鱼、清炒黄瓜、番茄炒蛋-22-09-03" },
    { name: "香辣虾尾", path: "#香辣虾尾、蒜蓉上海青-22-10-02" },
    { name: "白灼虾", path: "", todo: true },
    { name: "红烧鱼块", path: "", todo: true },
    { name: "清蒸鲈鱼", path: "", todo: true },
    { name: "", path: "" },
  ],
};

const soup = {
  name: "汤",
  list: [{ name: "", path: "" }],
};

const coldDish = {
  name: "凉菜",
  list: [{ name: "", path: "" }],
};

const total = computed(() => {
  let num = 0;
  menuList.forEach((category) => {
    num += category.list.filter(
      (item) => item.name && item.name !== "-"
    ).length;
  });
  return num;
});

const menuList = [
  greenVegetable,
  vegetable,
  whiteMeat,
  redMeat,
  fish,
  soup,
  coldDish,
];
</script>

<style lang="scss" scoped>
.ex-wrap {
  border: 1px solid #ccc;
  // border-radius: 8px;
  background: #fff;
}
.menu-title {
  display: flex;
  justify-content: center;
  padding: 15px 0;
  font-size: 20px;
  font-weight: bold;
  span {
    font-size: 14px;
    font-weight: normal;
  }
}
.ex-menu {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  // background: rgba(229, 243, 230);
}
.ex-menu-sec {
  margin-right: 20px;

  .menu-sec-title {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    span {
      font-size: 12px;
      font-weight: normal;
    }
  }
  .menu-sec-main {
    .sec-main-item {
      padding-bottom: 5px;
    }
    .sec-main-item span {
      color: #ccc;
      cursor: not-allowed;
    }
    .gap {
      border-bottom: 1px dashed #ccc;
      margin: 2px 0;
    }
    a {
      color: #666;
      text-decoration: underline;
    }
  }
}
</style>