import VueI18n from "vue-i18n";
import Vue from "vue";
import cn from "./lang/cn";
import en from "./lang/en";
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "cn", // 语言标识
  messages: {
    cn: cn, // 中文语言包
    en: en, // 英文语言包
  },
});

export default i18n;
