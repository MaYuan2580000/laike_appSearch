<template>
     <section class="page_evaluate">
            <Header leftArrow title="评价" border>
             <img src="https://xiaochengxu.laiketui.com/static/img/back2x.png" alt=""  slot="headerLeft" class="imgs" @click="backgp"/>
         </Header>
         <section class="TabNav">
             <ul class="evaluate-classify">
                 <li class="evaluate-classify_li">全部 {{comments_total}}</li>
                 <li class="evaluate-classify_li">好评 {{comments_hao}}</li>
                 <li class="evaluate-classify_li" v-if="comments_cha.lenght<0">差评 {{comments_cha}}</li>
                 <li class="evaluate-classify_li">中评 {{comments_zhong}}</li>
                 <li class="evaluate-classify_li">有图 {{comments_image}}</li>
            
             </ul>
         </section>
         <section class="neiUl">
             <ul class="evaluate-content">
                 <li v-for="(value,index) in dataList" :key="index">
                     <div class="content-user">
                         <div class="content_n">
                             <img :src="value.headimgurl" alt="">
                             <span class="user-name">{{value.user_name}}</span>
                               <div class="starall">
                               <van-rate
                                    v-model.number="value.CommentType"
                                    :size="25"
                                    color="#ee0a24"
                                    void-icon="star"
                                    void-color="#eee"
                                    :count=5
                                    readonly 
                                  />
                              </div>
                         </div>
                        
                     </div>
                       <div  class="date">{{value.add_time}}</div>
                       <p class="pstyle">{{value.content}}</p>
                       <div class="content_img">
                              <ul>
                                <li v-for="(item,index) in value.imges" :key="index"><img :src="item.images" alt=""></li>
                              </ul>
                       </div>
                 </li>
             </ul>
         </section>
     </section>
</template>

<script>
import Header from "../components/header.vue";
import { evaluate } from "../api/home.js";
import { Rate } from "vant";
export default {
  data() {
    return {
      comments_total: "", //总评论数
      comments_zhong: "", //点评
      comments_image: "", //有图
      comments_hao: "", //好评
      comments_cha: "", //差评
      dataList: [],
      CommentType:0,
      imges:[]
    };
  },
  components: {
    Header,
    [Rate.name]: Rate
  },
  created() {
    var pid = this.$route.query.pid;

    evaluate(pid)
      .then(res => {
        console.log(res.data.data.images);
        this.comments_total = res.data.comments_total;
        this.comments_hao = res.data.comments_hao;
        this.comments_zhong = res.data.comments_zhong;
        this.comments_image = res.data.comments_image;
        this.comments_cha = res.data.comments_cha;
        this.dataList = res.data.data;
        this.imges = res.data.data.images
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    backgp() {
      this.$router.push({ path: "/goodsDetailed" });
    }
  }
};
</script>

<style lang="less" scoped>
.page_evaluate {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .content_img{
    margin-top: 10px;
  }
  .pstyle {
    text-align: left;
    font-size: 13px;
    color: #020202;
    padding-top: 20px;
  }
  .imgs {
    width: 12px;
  }
  .TabNav {
    .evaluate-classify {
      padding: 10px 15px 0 15px;
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      .evaluate-classify_li {
        border-radius: 5px;
        margin: 0 10px 10px 0;
        width: 90px;
        height: 27px;
        background-color: #eee;
        text-align: center;
        line-height: 27px;
        font-size: 11px;
        color: #9d9d9d;
      }
    }
  }
  .neiUl {
    .evaluate-content {
      li {
        background-color: #fff;
        padding: 20px 0 15px 0;
        border-bottom: 1px solid #eee;
        margin: 0 15px;
        .date {
          font-size: 10px;
          color: gray;
          text-align: left;
          padding-top: 15px;
        }
        .content-user {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .content_n {
            display: flex;
            justify-content: space-between;
            align-items: center;
            img {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              vertical-align: bottom;
              margin-right: 10px;
            }
            .user-name {
              font-size: 13px;
              color: #020202;
            }
          }
          .starall {
            margin-left: 10px;
            img {
              width: 19px;
              height: 19px;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
