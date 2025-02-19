<script setup>

import FrontWheel from "@/components/FrontWheel.vue";
import RearWheel from "@/components/RearWheel.vue";
</script>

<template>
  <front-wheel></front-wheel>
  <rear-wheel></rear-wheel>
</template>





<!--<script setup>-->

<!--  import {reactive} from "vue";-->
<!--  import Greeting from "@/components/Greeting.vue";-->

<!--  const state = reactive({-->
<!--    visible: true-->
<!--  })-->
<!--</script>-->

<!--<template>-->
<!--  <Greeting v-if="state.visible"></Greeting>-->
<!--  <button @click="state.visible = false">hide</button>-->
<!--</template>-->





<!--<script setup>-->
<!--import {onUpdated, reactive} from "vue";-->

<!--  const state = reactive({-->
<!--    message: "hello!"-->
<!--  });-->

<!--onUpdated(() => {-->
<!--  console.log(document.getElementById('btn').innerText);-->
<!--});-->
<!--</script>-->

<!--<template>-->
<!--  <button id="btn" @click="state.message='aloha!'">{{state.message}}</button>-->
<!--</template>-->





<!--<script setup>-->

<!--  import {onMounted} from "vue";-->

<!--  onMounted(() => {-->
<!--    console.log(document.getElementById("message"));-->
<!--  });-->
<!--</script>-->

<!--<template>-->
<!--  <div id="message">aloha!</div>-->
<!--</template>-->



<!--<script setup>-->
<!--(async function onCreated() {-->
<!--  console.log(document.getElementById("message"));-->
<!--})();-->
<!--</script>-->

<!--<template>-->
<!--  <div id="message">Aloha!</div>-->
<!--</template>-->




<!--<script setup>-->
<!--(async function onCreated() {-->
<!--  const hook = "onCreated";-->
<!--  console.log(hook);-->
<!--})();-->
<!--</script>-->




<!--<script setup>-->
<!--  const hook = "onCreated";-->
<!--  console.log(hook);-->
<!--</script>-->







<!--<script setup>-->

<!--import {reactive} from "vue";-->

<!--const state = reactive({-->
<!--  form: {-->
<!--    id: "",-->
<!--    pw: ""-->
<!--  }-->
<!--});-->

<!--const login = () => {-->
<!--  window.alert(state.form.id + " 님 환영합니다.");-->
<!--};-->
<!--</script>-->

<!--<template>-->
<!--  <form @submit.prevent="login">-->
<!--    <input type="text" v-model="state.form.id" placeholder="아이디"/>-->
<!--    <input type="password" v-model="state.form.pw" placeholder="패스워드"/>-->
<!--  </form>-->

<!--  <button type="submit">로그인</button>-->
<!--</template>-->







<!--<script setup>-->
<!--// const message = "There";-->
<!--import {computed, nextTick, reactive, ref} from "vue";-->

<!--const message = {name: "Kim", age: 20};-->
<!--const page = "history";-->
<!--let loading = true;-->

<!--const parent = "fruits";-->
<!--const child = "item";-->

<!--// 클래스명에 여러개를 입력할 때 문자열을 공백으로 구분하거나 배열을 생성한다-->
<!--// class가 아닌 title이나 alt등에 사용하면 공백이아닌 쉼표로 구분된다-->
<!--// 개발자 도구에서 엘리먼트를 보면서 확인할 수 있다-->
<!--const fruits = "apple avocado"-->
<!--const fruitArr = ["banana", "blueberry"]-->

<!--// 클래스 속성은 객체로도 지정할 수 있다-->
<!--const visible = {fruit: true}-->
<!--const hidden = {fruit: false}-->

<!--// css스타일도 문자열로 입력해서 반환이 가능하다-->
<!--// 하지만 객체로 입력하는 편이 더 직관적이다.-->
<!--// const rect = "background:red;width:200px;height:100px"-->
<!--const rect = {-->
<!--  background: "red",-->
<!--  width: "200px",-->
<!--  height: "100px"-->
<!--}-->

<!--const carArr = ["car1", "car2", "car3"];-->

<!--// 많은 양의 데이터 반복 출력하기-->
<!--const members = [-->
<!--  {id: 1, name: "김유신"},-->
<!--  {id: 2, name: "강감찬"},-->
<!--  {id: 3, name: "이순신"},-->
<!--  {id: 4, name: "권율"},-->
<!--]-->

<!--const pop = (message) => {-->
<!--  window.alert(message);-->
<!--}-->

<!--const run = () => {-->
<!--  window.alert("run");-->
<!--};-->
<!--//-->
<!--// let pushUp = ref(0);-->
<!--//-->
<!--// let sitUp = ref(0);-->

<!--// 반응형 상태 생성하는 방법 1. ref() 메서드를 사용한다 기본 자료형이나 배열등에 사용한다-->
<!--const increasePushUp = () => {-->
<!--  pushUp.value++;-->
<!--  console.log(`pushUp: ${pushUp.value}`);-->
<!--};-->

<!--const increaseSitUp = () => {-->
<!--  sitUp.value++;-->
<!--  console.log(`sitUp: ${sitUp.value}`);-->
<!--};-->

<!--// 반응형 상태 생성하는 방법 2. reactive() 메서드를 사용한다 반응형 상태의 객체를 만들때 사용한다-->
<!--// const state = reactive({-->
<!--//   pushUp: 0,-->
<!--//   sitUp: 0,-->
<!--// });-->

<!--const increasePushUp1 = () => {-->
<!--  state.pushUp++;-->
<!--  console.log(`pushUp: ${state.pushUp}`);-->
<!--};-->

<!--const increaseSitUp1 = () => {-->
<!--  state.sitUp++;-->
<!--  // 스크립트 블록이아닌 템플릿블록의 데이터를 출력하면 개발자 도구의 콘솔창에서 숫자가 1이 적게 표시된다-->
<!--  // 콘솔 출력이 반응형 상태가 UI에 반영되기 전에 실행됐기 때문이다 nextTick 메서드를 호출하여 해결할 수 있다-->
<!--  // console.log(document.getElementById("sitUp").innerText);-->
<!--  nextTick(() => {-->
<!--    console.log(document.getElementById("sitUp").innerText);-->
<!--  });-->

<!--};-->

<!--const state =reactive({-->
<!--  mvpId: 7,-->
<!--  players: [-->
<!--    {id: 7, name: "john doe"},-->
<!--    {id: 9, name: "jane lee"},-->
<!--    {id: 12, name: "james park"}-->
<!--  ]-->
<!--});-->

<!--// mvp를 표시하는 템플릿 코드가 너무 길어 메서드를 활용한다-->
<!--const getMvpName = () => {-->
<!--  if (state.mvpId) {-->
<!--    const player = state.players.find(p => p.id === state.mvpId);-->

<!--    if(player) {-->
<!--      return player.name;-->
<!--    }-->
<!--  }-->
<!--  return '없음';-->
<!--};-->

<!--// 컴퓨티드 활용하기-->
<!--const computedMvpName = computed(() => {-->
<!--  if (state.mvpId) {-->
<!--    const player = state.players.find(p => p.id === state.mvpId);-->

<!--    if (player) {-->
<!--      return player.name;-->
<!--    }-->
<!--  }-->

<!--  return "없음";-->
<!--});-->

<!--import {reactive} from "vue";-->

<!--const state = reactive({-->
<!--  player: "kim"-->
<!--});-->

<!--</script>-->

<!--<template>-->
<!--&lt;!&ndash;  <div>Hello {{message}}</div>&ndash;&gt;-->

<!--  <div>-->
<!--    <span>Hello </span>-->
<!--&lt;!&ndash;    <span v-text="message"></span>&ndash;&gt;-->
<!--    <span v-text="JSON.stringify(message)"></span> &lt;!&ndash; 객체를 출력할때는 JSON으로 변환해야한다 &ndash;&gt;-->
<!--  </div>-->
<!--  <br/>-->
<!--&lt;!&ndash;  <div v-bind:id="page">HISTORY PAGE</div> v-bind는 :으로 생략할 수 있다&ndash;&gt;-->
<!--  <div :id="page">HISTORY PAGE</div>-->
<!--  <br/>-->
<!--  <input type="text" placeholder="아이디" :readonly="loading"/>-->
<!--  <input type="password" placeholder="비밀번호" :readonly="loading">-->
<!--  <button :disabled="loading">로그인</button>-->
<!--  <br/>-->

<!--  <ul :class="parent">-->
<!--    <li :class="child">사과</li>-->
<!--    <li :class="child">바나나</li>-->
<!--    <li :class="child">딸기</li>-->
<!--    <li :class="child">배</li>-->
<!--  </ul>-->

<!--  <br/>-->
<!--  <div :class="fruits">사과 / 아보카도</div>-->
<!--  <div :class="fruitArr">바나나 / 블루베리</div>-->
<!--  <div :title="fruitArr">바나나 / 블루베리</div>-->

<!--  <br/>-->
<!--  &lt;!&ndash; 객체의 값이 참일때만 키를 클래스에 반영한다 &ndash;&gt;-->
<!--  <div :class="visible">사과</div>-->
<!--  <div :class="hidden">오이</div>-->
<!--  <div :class="{fruit: true}">배</div>-->
<!--  <div :style="rect"></div>-->

<!--&lt;!&ndash; v-if 와 v-else 조건 디렉티브를 사용하여 조건에 따라 출력 여부를 결정할 수 있다&ndash;&gt;-->
<!--  <br/>-->
<!--  <div v-if="loading">로딩 중</div>-->
<!--  <div v-else>로딩 성공</div>-->

<!--&lt;!&ndash;  템플릿 태그는 특수한 태그로 개발자도구의 엘리먼트에서 별도의 태그없이 텍스트만 출력할 수 있게 해준다&ndash;&gt;-->
<!--  <br/>-->
<!--  <template v-if="loading">로딩 중</template>-->
<!--  <template v-else>로딩 성공</template>-->

<!--&lt;!&ndash;  v-show는 v-if와 동작하는 방식은 같지만 값이 false인 경우에도 소스코드 상에 표시된다-->
<!--      하지만 화면에는 display: none으로 표시되지 않는다&ndash;&gt;-->
<!--  <br/>-->
<!--  <div v-show="loading">로딩 중</div>-->
<!--  <div v-show="!loading">로딩 성공</div>-->

<!--&lt;!&ndash;  v-show는 display: 의 값에 따라 화면에 표시여부를 결정하기 때문에 템플릿 태그를 사용하여-->
<!--      태그가 없이 문자열만 출력하면 화면에는 표시되지 않는다&ndash;&gt;-->
<!--  <template v-show="loading">로딩 중</template>-->

<!--&lt;!&ndash;  반복 디렉티브&ndash;&gt;-->
<!--  <br/>-->
<!--  <div v-for="f in carArr">{{f}}</div>-->

<!--&lt;!&ndash;  아래와 같이 배열의 인덱스를 받아올 수도 있다&ndash;&gt;-->
<!--  <br/>-->
<!--  <div v-for="(f, idx) in carArr">{{idx}} {{f}}</div>-->

<!--  <template v-for="f in carArr">{{f}}</template>-->

<!--&lt;!&ndash;  많은 양의 데이터를 반복 출력할때 성능을 고려한 코드-->
<!--      각 항목의 고유한 값 여기서는 id를 key 속성의 값으로 지정하여 vue가 항목을 고유하게 구별할 수 있게한다&ndash;&gt;-->
<!--  <li v-for="m in members" :key="m.id">{{m.name}}</li>-->

<!--  <br/>-->
<!--&lt;!&ndash;  <button v-on:click="pop('hello')">Hello</button> v-on은 @으로 대체할 수 있다&ndash;&gt;-->
<!--  <button @:click="pop('hello')">Hello</button>-->

<!--&lt;!&ndash;  메서드에 인수가 없는 경우에는 메서드 이름만 입력해도 호출할 수 있다&ndash;&gt;-->
<!--  <button @:click="run">Run</button>-->

<!--  <br/>-->
<!--  <div>-->
<!--    <h1>체력 검사</h1>-->
<!--    <br/>-->
<!--    <hr/>-->
<!--    <ul>-->
<!--&lt;!&ndash;      <li id="pushUp">팔 굽혀 펴기: {{pushUp}}</li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li id="sitUp">윗몸 일으키기: {{sitUp}}</li>&ndash;&gt;-->
<!--      <li id="pushUp">팔 굽혀 펴기: {{state.pushUp}}</li>-->
<!--      <li id="sitUp">윗몸 일으켜기: {{state.sitUp}}</li>-->

<!--    </ul>-->
<!--    <hr/>-->
<!--    <br/>-->
<!--    <button @click="increasePushUp1()">팔 굽혀 펴기 증가</button>-->
<!--    <button @click="increaseSitUp1()">윗몸 일으켜기 증가</button>-->
<!--  </div>-->

<!--  <br/>-->
<!--  <div>-->
<!--    <h1>오늘의 MVP</h1>-->
<!--    <div>-->
<!--      <template v-if="state.mvpId">-->
<!--        {{getMvpName()}}-->
<!--      </template>-->
<!--      <template v-else>없음</template>-->
<!--    </div>-->
<!--    <div>{{computedMvpName}}</div>-->
<!--  </div>-->

<!--  <div>-->
<!--    <h1>{{state.player}}</h1>-->
<!--    <input type="text" v-model="state.player">-->
<!--  </div>-->

<!--  -->
<!--  -->
<!--</template>-->