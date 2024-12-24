import { createRouter, createWebHistory } from 'vue-router';

// 컴포넌트 임포트
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/StudyView.vue';
import AniView from '../views/AniView.vue';

import GuideButton from '../views/GuideButton.vue';
import GuideText from '../views/GuideText.vue';
import GuideTooltip from '../views/GuideTooltip.vue';

// 라우터 설정
const routes = [
  {
    path: '/',  // 기본 경로 (홈 화면)
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about', 
    name: 'About',
    component: AboutView
  },
  {
    path: '/Animation',
    name: 'Animation',
    component: AniView
  },

  // guide 페이지 경로
  {
    path: '/guideButton',  
    name: 'GuideButton',
    component: GuideButton
  },
  {
    path: '/guideText',  
    name: 'GuideText',
    component: GuideText
  },
  {
    path: '/guideTooltip',
    name: 'GuideTooltip',
    component: GuideTooltip
  }
];

// 라우터 인스턴스 생성
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;