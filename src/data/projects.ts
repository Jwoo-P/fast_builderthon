import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    name: '사주킹',
    description: '인공지능을 활용한 사주 운세 서비스로, 사용자의 생년월일을 기반으로 개인 맞춤형 운세를 제공합니다.',
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow'],
    link: 'https://www.sajuking.store/',
    category: '운세 서비스',
  },
  {
    id: '2',
    name: '타로킹',
    description: '온라인 타로 카드 점을 제공하는 서비스로, 다양한 타로 카드 덱과 스프레드를 통해 사용자가 자신의 운세를 확인할 수 있습니다.',
    technologies: ['Vue.js', 'Express', 'Python', 'Scikit-learn'],
    link: 'https://taroking.store/',
    category: '운세 서비스',
  },
  {
    id: '3',
    name: '토지맥',
    description: '부동산 정보 제공 플랫폼으로, 사용자에게 최신 부동산 매물과 시장 동향을 제공합니다.',
    technologies: ['Angular', 'Spring Boot', 'PostgreSQL'],
    link: 'https://www.tojimak.com/',
    category: '부동산',
  },
  {
    id: '4',
    name: '보드게임 기반 웹앱',
    description: "'열네 밤의 꿈'이라는 보드게임을 온라인에서 즐길 수 있도록 구현한 웹 애플리케이션입니다.",
    technologies: ['React', 'Redux', 'Node.js', 'Socket.io'],
    link: 'https://boardgame-tc-frontend.vercel.app/',
    category: '게임',
  },
  {
    id: '5',
    name: '개인 브랜딩용 카드뉴스 생성앱',
    description: '사용자가 자신의 브랜드를 홍보할 수 있는 카드뉴스를 손쉽게 생성할 수 있는 웹 애플리케이션입니다.',
    technologies: ['Next.js', 'Tailwind CSS', 'Firebase'],
    link: 'https://julius-branding-cardnews.vercel.app/',
    category: '콘텐츠 도구',
  },
  {
    id: '6',
    name: '피트니스 서비스 웹앱',
    description: '사용자의 운동 데이터를 분석하여 맞춤형 피트니스 코칭을 제공하는 웹 애플리케이션입니다.',
    technologies: ['Flask', 'TensorFlow', 'React Native'],
    link: 'https://fitflow-ai-coach-403140052812.us-west1.run.app/',
    category: '헬스케어',
  },
];

