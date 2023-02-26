<template>
  <div class="ex-wrap">
    <div class="menu-title">
      菜单食谱<span>（{{ foodCount }}）</span>
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
              :href="'/daily/' + food.path"
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

interface CategoryInfo {
  name: string;
  list: Array<{ name: string; path: string; todo?: boolean }>;
}
const vegetable = {
  name: "素菜",
  list: [
    { name: "青椒毛豆粒", path: "22-09-17.html" },
    { name: "清炒黄瓜", path: "22-09-03.html" },
    { name: "鱼香茄子", path: "22-10-03.html" },
    { name: "莴笋炖肉", path: "23-02-26.html" },
    { name: "清炒冬瓜", path: "", todo: true },
    { name: "炒青豆", path: "", todo: true },
    { name: "-", path: "豆制品" },
    { name: "尖椒豆腐皮", path: "22-09-25.html" },
    { name: "香干炒肉", path: "22-09-18.html" },
    { name: "白菜烧豆腐", path: "22-09-18.html" },
    { name: "葱烧豆腐", path: "22-09-10.html" },
    { name: "家常豆腐(嫩)", path: "22-10-30.html" },
    { name: "麻婆豆腐", path: "", todo: true },
    { name: "-", path: "", desc: "根茎类" },
    { name: "青椒土豆片", path: "22-09-12.html" },
    { name: "青椒土豆丝", path: "22-08-27.html" },
    { name: "清炒藕片", path: "", todo: true },
    { name: "藕夹/藕盒", path: "22-11-05.html" },
    { name: "-", path: "", desc: "鸡蛋类" },
    { name: "大葱炒鸡蛋", path: "22-09-11.html" },
    { name: "酱炒鸡蛋", path: "22-09-04.html" },
    { name: "西红柿炒鸡蛋", path: "22-09-03.html" },
    { name: "丝瓜炒鸡蛋", path: "22-08-27.html" },
    { name: "青椒炒鸡蛋", path: "22-08-28.html" },
    { name: "炸胡椒", path: "", todo: true }, // 湖北
  ],
};

const greenVegetable = {
  name: "绿叶蔬菜",
  list: [
    { name: "酱圆白菜(包菜)", path: "22-10-01.html" },
    { name: "豆豉鲮鱼油麦菜", path: "22-09-12.html" },
    { name: "清炒小白菜", path: "22-09-04-a.html" },
    { name: "蒜蓉上海青", path: "22-10-02.html" },
    { name: "韭黄炒蛋", path: "22-10-04.html" },
    { name: "清炒黄芽白菜", path: "22-10-05.html" },
    { name: "清炒空心菜", path: "22-10-22.html" },
    { name: "清炒红苋菜", path: "22-10-29.html" },
    { name: "手撕包菜", path: "22-11-06.html" },
    { name: "清炒红菜苔", path: "22-11-13.html" },
    { name: "蚝油生菜", path: "", todo: true },
  ],
};

const whiteMeat = {
  name: "白肉",
  list: [
    { name: "大葱炒鸡胸肉", path: "22-09-11.html" },
    { name: "香煎鸡翅", path: "22-09-04-a.html" },
    { name: "青椒炒鸡腿", path: "22-08-28.html" },
    { name: "葱姜炒鸡", path: "22-10-04.html" },
    { name: "黄焖鸡", path: "", todo: true },
    { name: "可乐鸡翅", path: "", todo: true },
    { name: "葱油鸡", path: "", todo: true },
    { name: "辣子鸡", path: "", todo: true },
    { name: "新疆大盘鸡", path: "", todo: true },
    { name: "三杯鸡", path: "", todo: true }, // https://www.bilibili.com/video/BV1dp4y1e73R
    { name: "家常版酱鸭", path: "", todo: true }, 
    { name: "家庭版咸水鸭", path: "", todo: true }, 
    { name: "东名菜陈皮鸭", path: "", todo: true },  // https://www.bilibili.com/video/BV1we411L717
    { name: "冰糖酸梅鸭", path: "", todo: true }, // https://www.bilibili.com/video/BV1Um4y1R7Na
    { name: "砂锅啤酒鸭", path: "", todo: true }, // https://www.bilibili.com/video/BV1BP4y1M7w8
  ],
};

const redMeat = {
  name: "红肉",
  list: [
    { name: "青椒回锅肉", path: "22-09-25.html" },
    { name: "白菜猪肉炖粉条", path: "22-09-17.html" },
    { name: "青椒肉丝", path: "22-09-10.html" },
    { name: "土豆烧排骨", path: "22-10-22.html" },
    { name: "小酥肉", path: "22-11-06.html"},
    { name: "葱爆肉(大葱)", path: "", todo: true },
    { name: "蒜苗回锅肉", path: "", todo: true },
    { name: "蒜苔炒肉", path: "", todo: true },
    { name: "猪脚饭", path: "", todo: true },
    { name: "溜肉段", path: "", todo: true },
    { name: "葱爆羊肉", path: "", todo: true },
    { name: "酱牛肉", path: "", todo: true },
    { name: "小炒黄牛肉", path: "", todo: true },
    // { name: "", path: "", todo: true },
  ],
};

const fish = {
  name: "水产",
  list: [
    { name: "红烧鲫鱼", path: "22-10-01.html" },
    { name: "豆瓣罗非鱼", path: "22-09-03.html" },
    { name: "香辣虾尾", path: "22-10-02.html" },
    { name: "白灼虾", path: "22-10-03.html" },
    { name: "红烧鱼块", path: "22-10-05.html" },
    { name: "清蒸鲈鱼", path: "22-10-29.html" },
    { name: "红烧黄骨鱼", path: "22-12-04.html" },
    { name: "炒虾球", path: "", todo: true },
    { name: "红烧鲤鱼", path: "", todo: true },
    { name: "香煎刁子鱼", path: "", todo: true },
    { name: "蒜香鲈鱼", path: "", todo: true },
    { name: "油焖大虾", path: "", todo: true },
    { name: "生炒田鸡", path: "", todo: true }, // https://www.bilibili.com/video/BV14Q4y1S7tZ
    { name: "黄瓜烧鳝鱼", path: "", todo: true }, // https://www.bilibili.com/video/BV1MF411V7GJ/
    { name: "藿香鳝鱼", path: "", todo: true }, //  https://www.bilibili.com/video/BV1ut411P7HM/
    { name: "泥鳅烧黄瓜", path: "", todo: true }, // https://www.bilibili.com/video/BV1hD4y1y7Kv
    { name: "干煸泥鳅", path: "", todo: true }, // https://www.bilibili.com/video/BV1434y147Rp
  ],
};

const soup = {
  name: "汤",
  list: [
    { name: "莲藕排骨汤", path: "22-11-13.html" },
    { name: "鲫鱼豆腐汤", path: "23-02-18.html" },
    { name: "-", path: "", desc: "素菜类" },
    { name: "西红柿鸡蛋汤", path: "22-11-05.html" },
    { name: "平菇鸡蛋汤", path: "22-12-04.html" },
    { name: "紫菜蛋花汤", path: "23-02-26.html" },
    { name: "丝瓜鸡蛋汤", path: "", todo: true },
  ],
};

const coldDish = {
  name: "凉菜",
  list: [
    { name: "凉拌鸡胸肉", path: "22-10-30.html" },
    { name: "手撕鸡", path: "23-02-18.html" },
    { name: "口水鸡", path: "", todo: true },
    { name: "白切鸡", path: "", todo: true }, // https://www.bilibili.com/video/BV1se4y1a7C5
    { name: "鲜椒杏鲍菇", path: "", todo: true },
    { name: "拍黄瓜", path: "", todo: true },
  ],
};

const luDish = {
  name: "卤菜",
  list: [
    { name: "卤藕片", path: "", todo: true },
    { name: "卤千张/豆腐皮", path: "", todo: true },
    { name: "卤海带", path: "", todo: true },
    { name: "卤土豆片", path: "", todo: true },
    { name: "卤蛋", path: "", todo: true },
    { name: "卤肉", path: "", todo: true },
    { name: "卤鸡", path: "", todo: true },
  ],
};

const huoguo = {
  name: "火锅",
  list: [
    { name: "牛油锅底", path: "", todo: true },
    { name: "番茄锅底", path: "", todo: true },
  ]
}

const zheng = {
  name: "蒸菜",
  list: [
    { name: "蒸菜(茼蒿)", path: "23-02-19.html" },
    { name: "粉蒸肉", path: "23-02-19.html"},
    { name: "粉蒸鱼", path: "23-02-25.html" },
    { name: "粉蒸土豆块", path: "23-02-19.html" },
    { name: "粉蒸排骨", path: "", todo: true },
    { name: "粉蒸藕块", path: "23-02-25.html" },
  ]
}

const foodCount = computed(() => {
  let num = 0;
  let todo = 0;
  menuList.forEach((category: CategoryInfo) => {
    num += category.list.filter(
      (item) => item.name && item.name !== "-"
    ).length;
    todo += category.list.filter((item) => item?.todo).length;
  });
  return `${num - todo}/${num}`
});

const menuList = [
  greenVegetable,
  vegetable,
  whiteMeat,
  redMeat,
  fish,
  soup,
  coldDish,
  luDish,
  huoguo,
  zheng
];
</script>

<style lang="scss" scoped>
.ex-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 20px 40px;
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