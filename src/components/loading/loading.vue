
<template>
  <div class="j-loading" :class="{
    'has-mask': mask,
    [type]: true
  }">
    <template v-if="loading">

      <div v-if="type === 'sk-circle' || type === 'sk-fading-circle'" class="circle">
        <div class="sk-circle1 sk-child"></div>
        <div class="sk-circle2 sk-child"></div>
        <div class="sk-circle3 sk-child"></div>
        <div class="sk-circle4 sk-child"></div>
        <div class="sk-circle5 sk-child"></div>
        <div class="sk-circle6 sk-child"></div>
        <div class="sk-circle7 sk-child"></div>
        <div class="sk-circle8 sk-child"></div>
        <div class="sk-circle9 sk-child"></div>
        <div class="sk-circle10 sk-child"></div>
        <div class="sk-circle11 sk-child"></div>
        <div class="sk-circle12 sk-child"></div>
      </div>

      <div v-else class="spinner">

        <template v-if="type === 'double-bounce'">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </template>

        <template v-else-if="type === 'rect'">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
          <div class="rect5"></div>
        </template>

        <template v-else-if="type === 'cube'">
          <div class="cube1"></div>
          <div class="cube2"></div>
        </template>

        <template v-else-if="type === 'bounce'">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </template>

        
        
      </div>
      <div class="loading-text" v-if="!noText"> {{ text || '正在加载...' }}</div>
    </template>
    <slot v-else></slot>
  </div>
</template>

<script>
  export default {

    name: 'j-loading',

    data() {
      return {}
    },

    props: {
      loading: Boolean,
      mask: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: 'rotate-plane'
      },
      text: String,
      noText: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="less">
  .j-loading {
    padding: 100px;

    &.has-mask {
      background-color: rgba(0, 0, 0, 0.8);
    }
    
    .spinner {
      width: 30px;
      height: 30px;
      margin: 10px auto;
      position: relative;

      .rotate-plane& {
        background-color: #ccc;
        -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
        animation: sk-rotateplane 1.2s infinite ease-in-out;

        .has-mask& {
          background-color: #fff;
        }
      }

      .rect& {
        width: 50px;
        height: 40px;
        text-align: center;
        font-size: 10px;

        & > div {
          height: 100%;
          width: 6px;
          display: inline-block;
          background-color: #333;

          .has-mask& {
            background-color: #fff;
          }
          
          -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
          animation: sk-stretchdelay 1.2s infinite ease-in-out;
        }

        > .rect2 {
          -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s;
        }

        > .rect3 {
          -webkit-animation-delay: -1.0s;
          animation-delay: -1.0s;
        }

        > .rect4 {
          -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s;
        }

        > .rect5 {
          -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s;
        }
      }

      .cube& {
        width: 60px;
        height: 60px;
      }

      .cube1, .cube2 {
        width: 15px;
        height: 15px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #333;

        .has-mask& {
          background-color: #fff;
        }
        
        -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;
        animation: sk-cubemove 1.8s infinite ease-in-out;
      }

      .cube2 {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
      }

      .scaleout& {
        width: 40px;
        height: 40px;
        background-color: #333;

        .has-mask& {
          background-color: #fff;
        }

        border-radius: 100%;  
        -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
        animation: sk-scaleout 1.0s infinite ease-in-out;
      }

      .bounce& {
        width: 70px;
        height: 20px;
        text-align: center;

        > div {
          width: 18px;
          height: 18px;
          background-color: #333;
          border-radius: 100%;
          display: inline-block;
          -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
          animation: sk-bouncedelay 1.4s infinite ease-in-out both;

          .has-mask& {
            background-color: #fff;
          }
        }

        .bounce1 {
          -webkit-animation-delay: -0.32s;
          animation-delay: -0.32s;
        }

        .bounce2 {
          -webkit-animation-delay: -0.16s;
          animation-delay: -0.16s;
        }
      }
    }

    .circle {
      width: 40px;
      height: 40px;
      margin: 10px auto;
      position: relative;

      .sk-child {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;

        &:before {
          content: '';
          display: block;
          margin: 0 auto;
          width: 15%;
          height: 15%;
          background-color: #333;
          border-radius: 100%;

          .sk-circle& {
            -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
                    animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
          }

          .sk-fading-circle& {
            -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
                      animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
          }

          .has-mask& {
            background-color: #fff;
          }
        }

        &.sk-circle2:before {
          -webkit-animation-delay: -1.1s;
                  animation-delay: -1.1s; }
        &.sk-circle3:before {
          -webkit-animation-delay: -1s;
                  animation-delay: -1s; }
        &.sk-circle4:before {
          -webkit-animation-delay: -0.9s;
                  animation-delay: -0.9s; }
        &.sk-circle5:before {
          -webkit-animation-delay: -0.8s;
                  animation-delay: -0.8s; }
        &.sk-circle6:before {
          -webkit-animation-delay: -0.7s;
                  animation-delay: -0.7s; }
        &.sk-circle7:before {
          -webkit-animation-delay: -0.6s;
                  animation-delay: -0.6s; }
        &.sk-circle8:before {
          -webkit-animation-delay: -0.5s;
                  animation-delay: -0.5s; }
        &.sk-circle9:before {
          -webkit-animation-delay: -0.4s;
                  animation-delay: -0.4s; }
        &.sk-circle10:before {
          -webkit-animation-delay: -0.3s;
                  animation-delay: -0.3s; }
        &.sk-circle11:before {
          -webkit-animation-delay: -0.2s;
                  animation-delay: -0.2s; }
        &.sk-circle12:before {
          -webkit-animation-delay: -0.1s;
                  animation-delay: -0.1s; }
      }

      .sk-circle2 {
        -webkit-transform: rotate(30deg);
            -ms-transform: rotate(30deg);
                transform: rotate(30deg); }
      .sk-circle3 {
        -webkit-transform: rotate(60deg);
            -ms-transform: rotate(60deg);
                transform: rotate(60deg); }
      .sk-circle4 {
        -webkit-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
                transform: rotate(90deg); }
      .sk-circle5 {
        -webkit-transform: rotate(120deg);
            -ms-transform: rotate(120deg);
                transform: rotate(120deg); }
      .sk-circle6 {
        -webkit-transform: rotate(150deg);
            -ms-transform: rotate(150deg);
                transform: rotate(150deg); }
      .sk-circle7 {
        -webkit-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
                transform: rotate(180deg); }
      .sk-circle8 {
        -webkit-transform: rotate(210deg);
            -ms-transform: rotate(210deg);
                transform: rotate(210deg); }
      .sk-circle9 {
        -webkit-transform: rotate(240deg);
            -ms-transform: rotate(240deg);
                transform: rotate(240deg); }
      .sk-circle10 {
        -webkit-transform: rotate(270deg);
            -ms-transform: rotate(270deg);
                transform: rotate(270deg); }
      .sk-circle11 {
        -webkit-transform: rotate(300deg);
            -ms-transform: rotate(300deg);
                transform: rotate(300deg); }
      .sk-circle12 {
        -webkit-transform: rotate(330deg);
            -ms-transform: rotate(330deg);
                transform: rotate(330deg); }
    }

    .loading-text {
      font-size: 12px;
      text-align: center;

      .has-mask& {
        color: #fff;
      }
    }

    @-webkit-keyframes sk-rotateplane {
      0% { -webkit-transform: perspective(120px) }
      50% { -webkit-transform: perspective(120px) rotateY(180deg) }
      100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
    }

    @keyframes sk-rotateplane {
      0% { 
        transform: perspective(120px) rotateX(0deg) rotateY(0deg);
        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) 
      } 50% { 
        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) 
      } 100% { 
        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
      }
    }

    /* double-bounce */
    .double-bounce1, .double-bounce2 {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #333;
      opacity: 0.6;
      position: absolute;
      top: 0;
      left: 0;

      .has-mask& {
        background-color: #fff;
      }
      
      -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
      animation: sk-bounce 2.0s infinite ease-in-out;
    }

    .double-bounce2 {
      -webkit-animation-delay: -1.0s;
      animation-delay: -1.0s;
    }

    @-webkit-keyframes sk-bounce {
      0%, 100% { -webkit-transform: scale(0.0) }
      50% { -webkit-transform: scale(1.0) }
    }

    @keyframes sk-bounce {
      0%, 100% { 
        transform: scale(0.0);
        -webkit-transform: scale(0.0);
      } 50% { 
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
      }
    }

    /* rect */
    @-webkit-keyframes sk-stretchdelay {
      0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
      20% { -webkit-transform: scaleY(1.0) }
    }

    @keyframes sk-stretchdelay {
      0%, 40%, 100% { 
        transform: scaleY(0.4);
        -webkit-transform: scaleY(0.4);
      }  20% { 
        transform: scaleY(1.0);
        -webkit-transform: scaleY(1.0);
      }
    }

    /* cube */
    @-webkit-keyframes sk-cubemove {
      25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }
      50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }
      75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }
      100% { -webkit-transform: rotate(-360deg) }
    }

    @keyframes sk-cubemove {
      25% { 
        transform: translateX(42px) rotate(-90deg) scale(0.5);
        -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
      } 50% { 
        transform: translateX(42px) translateY(42px) rotate(-179deg);
        -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
      } 50.1% { 
        transform: translateX(42px) translateY(42px) rotate(-180deg);
        -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
      } 75% { 
        transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
        -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
      } 100% { 
        transform: rotate(-360deg);
        -webkit-transform: rotate(-360deg);
      }
    }

    /* scaleout */
    @-webkit-keyframes sk-scaleout {
      0% { -webkit-transform: scale(0) }
      100% {
        -webkit-transform: scale(1.0);
        opacity: 0;
      }
    }

    @keyframes sk-scaleout {
      0% { 
        -webkit-transform: scale(0);
        transform: scale(0);
      } 100% {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
        opacity: 0;
      }
    }

    /* bounce */
    @-webkit-keyframes sk-bouncedelay {
      0%, 80%, 100% { -webkit-transform: scale(0) }
      40% { -webkit-transform: scale(1.0) }
    }

    @keyframes sk-bouncedelay {
      0%, 80%, 100% { 
        -webkit-transform: scale(0);
        transform: scale(0);
      } 40% { 
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
      }
    }

    /* sk-circle */
    @-webkit-keyframes sk-circleBounceDelay {
      0%, 80%, 100% {
        -webkit-transform: scale(0);
                transform: scale(0);
      } 40% {
        -webkit-transform: scale(1);
                transform: scale(1);
      }
    }

    @keyframes sk-circleBounceDelay {
      0%, 80%, 100% {
        -webkit-transform: scale(0);
                transform: scale(0);
      } 40% {
        -webkit-transform: scale(1);
                transform: scale(1);
      }
    }

    /* sk-fading-circle */
    @-webkit-keyframes sk-circleFadeDelay {
      0%, 39%, 100% { opacity: 0; }
      40% { opacity: 1; }
    }

    @keyframes sk-circleFadeDelay {
      0%, 39%, 100% { opacity: 0; }
      40% { opacity: 1; } 
    }
  }
</style>
