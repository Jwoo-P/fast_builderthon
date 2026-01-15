import { InnovationIdea } from '../types';

export const innovationIdeas: InnovationIdea[] = [
  {
    id: '1',
    icon: '🎨',
    name: 'Memory Tales',
    description: '스마트폰 속 1년치 아이 사진을 AI가 분석하여, 아이가 주인공이 되는 세상에 하나뿐인 맞춤형 동화책으로 제작하는 연간 구독 서비스',
    technologies: ['GPT-4', 'Stable Diffusion', 'React Native', '개인화 AI'],
    status: 'CONCEPT',
    coreInnovation: '디지털 추억을 영구 보존 가능한 실물로 전환\n매년 12월, 가족만의 연례 전통 창조',
    gradientColor: 'linear-gradient(90deg, #ff6b6b, #ee5a24)',
  },
  {
    id: '2',
    icon: '💕',
    name: '매력진단소 (Charm Lab)',
    description: '"이성이 보는 나"를 AI가 진단하고 맞춤형 연애 코칭을 제공하는 플랫폼. 소개팅 시뮬레이션과 안전한 피드백으로 연애 자신감 향상',
    technologies: ['Claude 3.5', 'LLM', '페르소나 AI', '소셜 서비스'],
    status: 'PLANNED',
    coreInnovation: '현실에서 들을 수 없는 솔직한 피드백\n안전한 환경에서 연애 자신감 향상',
    gradientColor: 'linear-gradient(90deg, #ff9ff3, #f368e0)',
  },
  {
    id: '3',
    icon: '📦',
    name: '스마트 재고 관리',
    description: '사물인식과 OCR 기술로 유통기한을 자동 관리하고, FIFO 배치 추적과 다단계 알림으로 음식점의 폐기 손실을 85% 예방하는 시스템',
    technologies: ['Computer Vision', 'OCR', 'IoT', 'B2B SaaS'],
    status: 'CONCEPT',
    coreInnovation: '개봉 전/후 구분으로 정확한 유통기한 관리\nD-3, D-1, D-Day 다단계 알림 시스템',
    gradientColor: 'linear-gradient(90deg, #54a0ff, #2e86de)',
  },
  {
    id: '4',
    icon: '💼',
    name: '창업 시뮬레이터',
    description: '예비 창업자가 업종별 실제 데이터를 바탕으로 창업 비용, 예상 매출, 손익분기점을 미리 시뮬레이션할 수 있는 분석 플랫폼',
    technologies: ['Data Analysis', 'AI 알고리즘', '비즈니스 툴', '창업 지원'],
    status: 'PROTOTYPE',
    coreInnovation: '실제 데이터 기반 현실적 창업 계획 수립\n리스크 사전 파악으로 실패 확률 감소',
    gradientColor: 'linear-gradient(90deg, #5f27cd, #341f97)',
  },
  {
    id: '5',
    icon: '⚡',
    name: 'Fast Builder Moment',
    description: '온라인 강의가 끝나는 순간, AI가 학습 내용을 바탕으로 \'지금 당장 해야 할 단 하나의 행동\'을 제안하여 학습을 실행으로 전환',
    technologies: ['EdTech', 'LLM', '학습 효율화', '행동 전환'],
    status: 'MVP READY',
    coreInnovation: '학습 완료 순간의 \'망설임\' 제거\n지식을 행동으로 전환하는 혁신적 접근',
    gradientColor: 'linear-gradient(90deg, #00d2d3, #01a3a4)',
  },
];


