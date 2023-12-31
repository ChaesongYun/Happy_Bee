# Happy Bee

<img src="./readme_assets/메인화면.png">

## 목차

1. [서비스 소개](#1)
2. [기술 스택](#2)
3. [시스템 아키텍쳐](#3)
4. [주요 기능](#4)
5. [협업 관리](#5)
6. [개발 멤버](#6)
7. [구현 정도](#7)
8. [개발 일지](#8)

<br>

<div id="1"></div>

## 서비스 소개

여러분에게 행복과 금융정보를 전달해주는 부지런한 꿀벌, Happy Bee 입니다.
<br>
예적금 금융상품을 소개하고 추천해주는 서비스와 환율, 주변 은행 찾기와 같은 서비스를 제공합니다.<br>
이외에도 기본적인 회원관리 및 커뮤니티 기능이 있는 웹사이트입니다.
<br>
상세한 정보들을 한번에 모두 보는 비슷한 많은 사이트와의 차별성을 두기 위하여 정보전달의 기능을 유지하면서도 벌집에서 착안한 육각형의 독특한 디자인을 실험적으로 사용해보았습니다.
<br>
<br>

<div id="2"></div>

## 기술 스택

<div align=center>
<div>프론트엔드</div>
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white">
<br>
<br>
<div>백엔드</div>
<img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white">
 <img src="https://img.shields.io/badge/django-092E20?style=for-the-badge&logo=django&logoColor=white">
<br>
<br>
<div>협업</div>
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
</div>

<div id="3"></div>

## 시스템 아키텍쳐

<div id="4"></div>

## 주요 기능

1. 커뮤니티

- 게시글 및 댓글 작성이 가능합니다.
- 주제별 원활한 소통을 지원하기 위해, 게시글을 카테고리에 따라 작성합니다. 관리자가 원할 경우, 카테고리를 편집할 수 있습니다.
  <table>
    <tr>
      <td><img src="./readme_assets/게시판.png"></td>
      <td><img src="./readme_assets/게시판2.png"></td>
    </tr>
  </table>

2. 금융 상품 조회

- 공시된 예금상품, 적금상품을 모두 조회할 수 있습니다.
- 개성있는 디자인으로 은행별로 전체 상품을 조회할 수 있으며, 상품을 선택하면 해당 상품의 모든 옵션 또한 조회할 수 있습니다.
- 은행, 가입기간에 따른 필터 조회를 지원합니다.
  <table>
    <tr>
      <td><img src="./readme_assets/예금조회.png"></td>
      <td><img src="./readme_assets/적금조회.png"></td>
    </tr>
    <tr>
    <td><img src="./readme_assets/예금필터.png"></td>
    <td><img src="./readme_assets/적금필터.png"></td>
    </tr>
  </table>

3. 환율계산기

- 50여 종 통화 간 환전 계산을 할 수 있습니다.
  <img src="./readme_assets/환율계산기.png">
- 프론트 단에서 처리하며 사용자가 요청할 때마다 api를 통해 가져온 환율을 그때그때 계산하여 보여줍니다.
  <br>
  <br>

4. 영업점 찾기

- 주소와 은행을 선택하면 해당 위치의 해당 은행을 검색하여 지도에 표시합니다.
  <img src="./readme_assets/영업점 찾기.png">
  <br>
  <br>

5. 금융 상품 일반 추천

- 회원가입과 로그인 없이도 이용할 수 있는 서비스입니다.
- 현재 공시된 상품들 중 우대 금리가 가장 높은 상품, 우대조건에 있어서 신규가입 또는 인터넷 가입에 대해 우대하는 상품, 가입 금액에 한도가 없는 상품을 조회할 수 있습니다.
  <br>
  <br>
  <table>
    <tr>
      <td><img src="./readme_assets/예금일반추천.png"></td>
      <td><img src="./readme_assets/적금일반추천.png"></td>
    </tr>
  </table>

6. 금융 맞춤 추천

- 맞춤 추천을 위해 회원가입과 로그인, 그리고 프로필에 개인 금융정보의 기입이 필요합니다. 로그인되어있지 않다면 해당 메뉴가 표시되지 않습니다.
- 현재 자신과 가장 비슷한 연봉과 자산을 가진 사람이 가입한 금융상품을 추천하고 있습니다.

<div id="5"></div>

## 협업 관리

- 회의록: 노션
  https://www.notion.so/1116_-48f617e36e6d4e98a9f8b259ac99c7d0?pvs=4
  <br>
  <br>

<div id="6"></div>

## 개발 멤버

#### 윤채송

- 회원가입 구현
- 로그인, 로그아웃 구현
- 프로필 조회 및 수정 구현
- 게시글 작성 및 조회, 삭제, 수정 기능 구현
- 댓글 조회, 작성, 삭제 기능 구현
- 영업점 조회 구현
- UI/ UX 담당

#### 장준영

- 예적금 상품 조회 구현
- 상품 옵션 구현
- 환율 조회 구현
- 상품 필터(금리, 가입 기간) 구현
- 상품 추천 알고리즘 구현 : 랜덤, 인터넷가입 우대, 최고금리, 신규가입, 나와 비슷한 조건(연봉, 자산)을 가진 사람이 가입한 상품.

<div id="7"></div>

## 구현 정도

1. 로그인, 로그아웃 기능 100%
2. 회원가입 기능 95%
3. 예적금 데이터 (최소 50개 이상) 100%
4. 예적금 상품 조회 100%
5. 예적금 상세 목록 조회 100%
6. 커뮤니티 게시글 기능 100%
7. 커뮤니티 댓글 기능 100%
8. 환율 계산 기능 100%
9. 프로필 기능 95%
10. 은행 검색 기능 100%
11. 금융 상품 추천 알고리즘 50%

<div id=8></div>

## 개발 일지

기간 : 2023.11.16(목) ~ 2023.11.24(금)

#### 11.16

- 기획, 설계 : 많은 것을 확정하지는 않고 대략적으로, 후순위로 둘 것을 구분하는 등의 기획을 했습니다.
- 금융상품정보 저장 : 금감원 API를 활용해 DB에 저장을 구현했습니다. 프론트 출력은 당장은 안됩니다.
- 커뮤니티 - 회원가입 게시글 작성을 구현하고 후일 댓글작성, 수정 등을 차차 구현했습니다.

#### 11.17

- 환율 계산기 : 오래 걸려서 주말을 포함해서 진행
- 커뮤니티 기능 추가 작업

#### 11.20

- 금융상품 정보 출력
- UI, UX : 초기 기획에 없이 진행 중 만들어 진 것이 많지만, 은행별 조회의 육각형 디자인도 그러한 것 중 하나였습니다.
- 지도 : 카카오 API를 이용한 은행 위치 찾기 구현

#### 11.22

- 금융상품 일반추천 : 로그인 없이 데이터 내 특정 조건으로 추천

#### 11.23

- 금융상품 맞춤추천 : 로그인 한 계정 정보에 따른 상품 추천

#### 11.24

- 프로필 금리 차트 추가
- 디버깅

