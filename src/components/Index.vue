<template>
  <div class="container" id="cv">
    <div class="side">
      <div class="me">
        <div
          class="portrait"
          :style="{backgroundImage: 'url(' + headImgae + ')'}"
        ></div>
        <h1 id="username" contenteditable="true">Raighne.Weng</h1>
      </div>
      <div class="profile info-unit">
        <h2 class="info-header">
          <i class="iconfont icon-person"></i>
          <span class="info-title" contenteditable="true">{{$t('basicInfo')}}</span>
          <span class="item-add" style="visibility: hidden;">
            <i class="iconfont icon-playlistadd"></i>
          </span>
          <span class="unit-remove" style="visibility: hidden;">
            <i class="iconfont icon-delete"></i>
          </span>
        </h2>
        <hr />
        <ul class="info-list">
          <li>
            <label class="left-label" contenteditable="true">{{$t('name')}}</label>
            <span class="label-value" contenteditable="true">{{$t('myName')}}</span>
            <span class="item-remove" style="visibility: hidden;">
              <i class="iconfont icon-delete"></i>
            </span>
          </li>
          <li>
            <label class="left-label" contenteditable="true">{{$t('degree')}}</label>
            <span class="label-value" contenteditable="true">{{$t('myDegree')}}</span>
            <span class="item-remove" style="visibility: hidden;">
              <i class="iconfont icon-delete"></i>
            </span>
          </li>
          <li>
            <label class="left-label" contenteditable="true">{{$t('school')}}</label>
            <span class="label-value" contenteditable="true">{{$t('mySchool')}}</span>
            <span class="item-remove" style="visibility: hidden;">
              <i class="iconfont icon-delete"></i>
            </span>
          </li>
          <li>
            <label class="left-label" contenteditable="true">{{$t('graduateTime')}}</label>
            <span class="label-value" contenteditable="true">{{$t('myGraduateTime')}}</span>
            <span class="item-remove" style="visibility: hidden;">
              <i class="iconfont icon-delete"></i>
            </span>
          </li>
        </ul>
      </div>
      <div class="contact info-unit">
        <h2 class="info-header">
          <i class="iconfont icon-call"></i>
          <span class="info-title" contenteditable="true">{{$t('contact')}}</span>
          <span class="item-add" style="visibility: hidden;">
            <i class="iconfont icon-playlistadd"></i>
          </span>
          <span class="unit-remove" style="visibility: hidden;">
            <i class="iconfont icon-delete"></i>
          </span>
        </h2>
        <hr />
        <ul class="info-list">
          <li>
            <label class="left-label" contenteditable="true">{{$t('mobile')}}</label>
            <span class="label-value" contenteditable="true">{{$t('myMobile')}}</span>
            <span class="item-remove" style="visibility: hidden;">
              <i class="iconfont icon-delete"></i>
            </span>
          </li>
          <li>
            <label class="left-label" contenteditable="true">{{$t('email')}}</label>
            <span class="label-value" contenteditable="true">{{$t('myEmail')}}</span>
            <span class="item-remove" style="visibility: hidden;">
              <i class="iconfont icon-delete"></i>
            </span>
          </li>
          <li>
            <label class="left-label" contenteditable="true">{{$t('page')}}</label>
            <span class="label-value" contenteditable="true">{{$t('myPage')}}</span>
            <span class="item-remove" style="visibility: hidden;">
              <i class="iconfont icon-delete"></i>
            </span>
          </li>
          <li>
            <label class="left-label" contenteditable="true">Github</label>
            <span class="label-value" contenteditable="true">
              <span
                style="background-color: rgb(245, 245, 245); display: inline !important;"
              >github.com/raighneweng</span>
            </span>
            <span class="item-remove" style="visibility: hidden;">
              <i class="iconfont icon-delete"></i>
            </span>
          </li>
        </ul>
      </div>
      <div class="skill info-unit">
        <h2 class="info-header">
          <i class="iconfont icon-star"></i>
          <span class="info-title" contenteditable="true">{{$t('skills')}}</span>
          <span class="item-add" style="visibility: hidden;">
            <i class="iconfont icon-playlistadd"></i>
          </span>
          <span class="unit-remove" style="visibility: hidden;">
            <i class="iconfont icon-delete"></i>
          </span>
        </h2>
        <hr />
        <ul class="progress-list">
          <li>
            <label class="left-label" contenteditable="true">Javascript</label>
            <progress value="80" max="100"></progress>
            <span class="item-remove" style="visibility: hidden;">
              <i class="iconfont icon-delete"></i>
            </span>
          </li>
          <li>
            <label class="left-label" contenteditable="true">Python</label>
            <progress value="60" max="100"></progress>
            <span class="item-remove" style="visibility: hidden;">
              <i class="iconfont icon-delete"></i>
            </span>
          </li>
          <li>
            <label class="left-label" contenteditable="true">HTML/CSS</label>
            <progress value="70" max="100"></progress>
            <span class="item-remove" style="visibility: hidden;">
              <i class="iconfont icon-delete"></i>
            </span>
          </li>
          <li>
            <label class="left-label" contenteditable="true">Android</label>
            <progress value="40" max="100"></progress>
            <span class="item-remove" style="visibility: hidden;">
              <i class="iconfont icon-delete"></i>
            </span>
          </li>
          <li>
            <label class="left-label" contenteditable="true">C</label>
            <progress value="43.90625" max="100"></progress>
            <span class="item-remove" style="visibility: hidden;">
              <i class="iconfont icon-delete"></i>
            </span>
          </li>
        </ul>
      </div>
      <div class="stack info-unit">
        <h2 class="info-header">
          <i class="iconfont icon-build"></i>
          <span class="info-title" contenteditable="true">{{$t('skillMap')}}</span>
          <span class="item-add" style="visibility: hidden;">
            <i class="iconfont icon-playlistadd"></i>
          </span>
          <span class="unit-remove" style="visibility: hidden;">
            <i class="iconfont icon-delete"></i>
          </span>
        </h2>
        <hr />
        <ul class="stack-list">
          <li>
            <label class="left-label" contenteditable="true">{{$t('frontEnd')}}</label>
            <span class="label-value" contenteditable="true">jQuery、Vue.js</span>
            <span class="item-remove" style="visibility: hidden;">
              <i class="iconfont icon-delete"></i>
            </span>
          </li>

          <li>
            <label class="left-label" contenteditable="true">{{$t('backEnd')}}</label>
            <span
              class="label-value"
              contenteditable="true"
            >Node.js TypeScript Python MongoDB MySQL Redis Elasticsearch SQS</span>
            <span class="item-remove" style="visibility: hidden;">
              <i class="iconfont icon-delete"></i>
            </span>
          </li>

          <li>
            <label class="left-label" contenteditable="true">{{$t('other')}}</label>
            <span class="label-value" contenteditable="true">{{$t('embedded')}}</span>
            <span class="item-remove" style="visibility: hidden;">
              <i class="iconfont icon-delete"></i>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="main">
      <div class="education info-unit right-list">
        <h2 class="info-header">
          <i class="iconfont icon-education"></i>
          <span class="info-title" contenteditable="true">{{$t('education')}}</span>
          <span class="item-add" style="visibility: hidden;">
            <i class="iconfont icon-playlistadd"></i>
          </span>
          <span class="unit-remove" style="visibility: hidden;">
            <i class="iconfont icon-delete"></i>
          </span>
        </h2>
        <hr />
        <ul class="experience-list">
          <li>
            <h3 contenteditable="true">{{$t('college')}}</h3>
            <p contenteditable="true">{{$t('lang')}}</p>
            <span class="item-remove" style="visibility: hidden;">
              <i class="iconfont icon-delete"></i>
            </span>
          </li>
        </ul>
      </div>
      <div class="work info-unit right-list">
        <h2 class="info-header">
          <i class="iconfont icon-work"></i>
          <span class="info-title" contenteditable="true">{{$t('experience')}}</span>
          <span class="item-add" style="visibility: hidden;">
            <i class="iconfont icon-playlistadd"></i>
          </span>
          <span class="unit-remove" style="visibility: hidden;">
            <i class="iconfont icon-delete"></i>
          </span>
        </h2>
        <hr />
        <ul class="experience-list">
          <li v-for="workExperience in workExperiences" :key="workExperience.id">
            <h3 contenteditable="true">{{workExperience.name[locale]}}</h3>
            <p contenteditable="true">{{workExperience.describe[locale]}}</p>
            <span class="item-remove" style="visibility: hidden;">
              <i class="iconfont icon-delete"></i>
            </span>
          </li>
        </ul>
      </div>
      <div class="project info-unit right-list">
        <h2 class="info-header">
          <i class="iconfont icon-project"></i>
          <span class="info-title" contenteditable="true">{{$t('projects')}}</span>
          <span class="item-add" style="visibility: hidden;">
            <i class="iconfont icon-playlistadd"></i>
          </span>
          <span class="unit-remove" style="visibility: hidden;">
            <i class="iconfont icon-delete"></i>
          </span>
        </h2>
        <hr />
        <ul class="experience-list">
          <li v-for="workProject in workProjects" :key="workProject.id">
            <h3 contenteditable="true">{{workProject.name[locale]}}</h3>
            <p contenteditable="true">{{workProject.describe[locale]}}</p>
            <span class="item-remove" style="visibility: hidden;">
              <i class="iconfont icon-delete"></i>
            </span>
          </li>
        </ul>
      </div>
      <div class="aboutme info-unit right-paragraph">
        <h2 class="info-header">
          <i class="iconfont icon-flower"></i>
          <span class="info-title" contenteditable="true">{{$t('selfAssement')}}</span>
          <span class="unit-remove" style="visibility: hidden;">
            <i class="iconfont icon-delete"></i>
          </span>
        </h2>
        <hr />
        <p contenteditable="true"></p>
        <p
          style="padding: 0px; cursor: default; color: rgb(0, 77, 64); font-family: 'Helvetica Neue', Helvetica, 'Lucida Grande', Arial, 'Hiragino Sans GB', 微软雅黑, 'WenQuanYi Micro Hei', STHeiti, SimSun, sans-serif; font-size: 18px; text-indent: 36px;"
        >{{$t('selfAssement1')}}</p>
        <p
          style="padding: 0px; cursor: default; color: rgb(0, 77, 64); font-family: 'Helvetica Neue', Helvetica, 'Lucida Grande', Arial, 'Hiragino Sans GB', 微软雅黑, 'WenQuanYi Micro Hei', STHeiti, SimSun, sans-serif; font-size: 18px; text-indent: 36px;"
        >{{$t('selfAssement2')}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import workProjects from "../static/workProjects.json";
import workExperiences from "../static/workExperiences.json";
import headImgae from "../assets/image/head.png";

export default {
  data() {
    return {
      locale: "cn",
      workProjects,
      workExperiences,
      headImgae,
    };
  },
  created() {
    document.title = this.$t("title");
    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);
    if (params.get("lng") == "en") {
      this.locale = "en";
    } else {
      this.locale = "cn";
    }
    $(document).ready(function($) {
      $("*").removeAttr("contenteditable");
    });
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
