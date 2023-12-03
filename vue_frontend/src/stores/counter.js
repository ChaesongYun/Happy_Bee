import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore(
  "counter",
  () => {
    const router = useRouter();
    const articles = ref([]);
    const API_URL = "http://127.0.0.1:8000";
    const token = ref(null);
    const isLoginFailed = ref(null);
    const userId = ref(null);

    const isLogin = computed(() => {
      return token.value != null;
    });

    // DRF에 article 조회 요청을 보내는 action
    const getArticles = function () {
      axios({
        method: "get",
        url: `${API_URL}/articles/`,
        headers: { Authorization: `Token ${token.value}` },
      })
        .then((res) => {
          articles.value = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getSpecificArticles = function (category_pk) {
      axios({
        method: "get",
        url: `${API_URL}/articles/category/${category_pk}`,
        headers: { Authorization: `Token ${token.value}` },
      })
        .then((res) => {
          articles.value = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const signUp = function (payload) {
      const {
        username,
        password1,
        password2,
        age,
        money,
        salary,
        nickname,
        address,
        risk_aversion,
        profile_img,
      } = payload;

      axios({
        method: "post",
        url: `${API_URL}/accounts/signup/`,
        data: {
          username,
          password1,
          password2,
          age,
          money,
          salary,
          nickname,
          address,
          risk_aversion,
          profile_img,
        },
      })
        .then((res) => {
          const password = password1;
          logIn({ username, password });
        })
        .catch((err) => {
          console.log(err.request.response);
        });
    };

    const logIn = function (payload) {
      const { username, password } = payload;

      axios({
        method: "post",
        url: `${API_URL}/accounts/login/`,
        data: {
          username,
          password,
        },
      })
        .then((res) => {
          isLoginFailed.value = false;
          token.value = res.data.key;
          if (token) {
            axios({
              method: "get",
              url: `${API_URL}/accounts/user/`,
              headers: { Authorization: `Token ${token.value}` },
            })
              .then((res2) => {
                userId.value = res2.data.pk;
              })
              .catch((err) => {
                console.log(err);
              });
          }

          router.push({ name: "ArticleView" });
        })
        .catch((err) => {
          isLoginFailed.value = true;
          console.log(err.request.response);
        });
    };

    const logOut = function () {
      axios({
        method: "post",
        url: `${API_URL}/accounts/logout/`,
      })
        .then((res) => {
          token.value = null;
          router.push({ name: "MainView" });
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const infos = ref([
      {
        id: 1,
        prov: "서울특별시",
        city: [
          "종로구",
          "중구",
          "용산구",
          "성동구",
          "광진구",
          "동대문구",
          "중랑구",
          "성북구",
          "강북구",
          "도봉구",
          "노원구",
          "은평구",
          "서대문구",
          "마포구",
          "양천구",
          "강서구",
          "구로구",
          "금천구",
          "영등포구",
          "동작구",
          "관악구",
          "서초구",
          "강남구",
          "송파구",
          "강동구",
        ],
      },
      {
        id: 2,
        prov: "부산광역시",
        city: [
          "중구",
          "서구",
          "동구",
          "영도구",
          "부산진구",
          "동래구",
          "남구",
          "북구",
          "해운대구",
          "사하구",
          "금정구",
          "강서구",
          "연제구",
          "수영구",
          "사상구",
          "기장군",
        ],
      },
      {
        id: 3,
        prov: "대구광역시",
        city: [
          "중구",
          "동구",
          "서구",
          "남구",
          "북구",
          "수성구",
          "달서구",
          "달성군",
          "군위군",
        ],
      },
      {
        id: 4,
        prov: "인천광역시",
        city: [
          "중구",
          "동구",
          "미추홀구",
          "연수구",
          "남동구",
          "부평구",
          "계양구",
          "서구",
          "강화군",
          "옹진군",
        ],
      },
      {
        id: 5,
        prov: "광주광역시",
        city: ["동구", "서구", "남구", "북구", "광산구"],
      },
      {
        id: 6,
        prov: "대전광역시",
        city: ["동구", "중구", "서구", "유성구", "대덕구"],
      },
      {
        id: 7,
        prov: "울산광역시",
        city: ["중구", "남구", "동구", "북구", "울주군"],
      },
      {
        id: 8,
        prov: "세종특별자치시",
        city: [],
      },
      {
        id: 9,
        prov: "경기도",
        city: [
          "수원시",
          "고양시",
          "용인시",
          "성남시",
          "부천시",
          "화성시",
          "안산시",
          "남양주시",
          "안양시",
          "평택시",
          "시흥시",
          "파주시",
          "의정부시",
          "김포시",
          "광주시",
          "광명시",
          "군포시",
          "하남시",
          "오산시",
          "양주시",
          "이천시",
          "구리시",
          "안성시",
          "포천시",
          "의왕시",
          "양평군",
          "여주시",
          "동두천시",
          "가평군",
          "과천시",
          "연천군",
        ],
      },
      {
        id: 10,
        prov: "강원특별자치도",
        city: [
          "춘천시",
          "원주시",
          "강릉시",
          "동해시",
          "태백시",
          "속초시",
          "삼척시",
          "홍천군",
          "횡성군",
          "영월군",
          "평창군",
          "정선군",
          "철원군",
          "화천군",
          "양구군",
          "인제군",
          "고성군",
          "양양군",
        ],
      },
      {
        id: 11,
        prov: "충청북도",
        city: [
          "청주시",
          "충주시",
          "제천시",
          "보은군",
          "옥천군",
          "영동군",
          "증평군",
          "진천군",
          "괴산군",
          "음성군",
          "단양군",
        ],
      },
      {
        id: 12,
        prov: "충청남도",
        city: [
          "천안시",
          "공주시",
          "보령시",
          "아산시",
          "서산시",
          "논산시",
          "계룡시",
          "당진시",
          "금산군",
          "부여군",
          "서천군",
          "청양군",
          "홍성군",
          "예산군",
          "태안군",
        ],
      },
      {
        id: 13,
        prov: "전라북도",
        city: [
          "목포시",
          "여수시",
          "순천시",
          "나주시",
          "광양시",
          "담양군",
          "곡성군",
          "구례군",
          "고흥군",
          "보성군",
          "화순군",
          "장흥군",
          "강진군",
          "해남군",
          "영암군",
          "무안군",
          "함평군",
          "영광군",
          "장성군",
          "완도군",
          "진도군",
          "신안군",
        ],
      },
      {
        id: 14,
        prov: "경상북도",
        city: [
          "포항시",
          "경주시",
          "김천시",
          "안동시",
          "구미시",
          "영주시",
          "영천시",
          "상주시",
          "문경시",
          "경산시",
          "의성군",
          "청송군",
          "영양군",
          "영덕군",
          "청도군",
          "고령군",
          "성주군",
          "칠곡군",
          "예천군",
          "봉화군",
          "울진군",
          "울릉군",
        ],
      },
      {
        id: 15,
        prov: "경상남도",
        city: [
          "창원시",
          "진주시",
          "통영시",
          "사천시",
          "김해시",
          "밀양시",
          "거제시",
          "양산시",
          "의령군",
          "함안군",
          "창녕군",
          "고성군",
          "남해군",
          "하동군",
          "산청군",
          "함양군",
          "거창군",
          "합천군",
        ],
      },
      {
        id: 16,
        prov: "제주특별자치도",
        city: ["제주시", "서귀포시"],
      },
    ]);

    const banks = ref([
      "산업은행",
      "광주은행",
      "기업은행",
      "제주은행",
      "국민은행",
      "전북은행",
      "수협은행",
      "경남은행",
      "농협은행",
      "새마을금고",
      "우리은행",
      "신협은행",
      "SC은행",
      "우체국",
      "씨티은행",
      "KEB하나은행",
      "대구은행",
      "신한은행",
      "부산은행",
    ]);

    return {
      articles,
      getArticles,
      getSpecificArticles,
      API_URL,
      signUp,
      logIn,
      userId,
      token,
      isLogin,
      isLoginFailed,
      logOut,
      infos,
      banks,
    };
  },
  { persist: true }
);
