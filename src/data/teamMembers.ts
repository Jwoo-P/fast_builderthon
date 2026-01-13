import { TeamMember } from '../types';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: '권동영',
    nameEn: 'Gwon Dongyeong',
    role: 'AI Product Manager',
    specialties: ['Data Driven', 'AI Service'],
    philosophy: '데이터의 논리로 AI 서비스의 방향성을 명확히 제시합니다',
    avatarImage: '/Gwon Dongyeong.png',
    glowColor: 'from-blue-500/60 to-cyan-500/60', // 블루-사이언 그라데이션
  },
  {
    id: '2',
    name: '김대성',
    nameEn: 'Kim Dae-sung',
    role: 'AI Service Manager',
    specialties: ['Data Driven', 'Growth'],
    philosophy: '데이터 속에서 인사이트를 찾아 서비스 성장을 견인합니다.',
    avatarImage: '/Kim Dae-sung.png',
    glowColor: 'from-purple-500/60 to-pink-500/60', // 퍼플-핑크 그라데이션
  },
  {
    id: '3',
    name: '김민균',
    nameEn: 'Kim Min Gyun',
    role: 'AI Product Manager',
    specialties: ['AI UX', 'Execution Lead'],
    philosophy: 'WHY를 나침반 삼아, 흩어진 점을 결과로 잇는 기획자',
    avatarImage: '/Kim Min Gyun.png',
    glowColor: 'from-cyan-500/60 to-blue-500/60', // 사이언-블루 그라데이션
  },
  {
    id: '4',
    name: '박다효',
    nameEn: 'Park Da-hyo',
    role: 'AI Service Planner',
    specialties: ['UX Research', 'Flow Design'],
    philosophy: '사용자의 숨겨진 니즈를 발굴하여 경험을 설계합니다.',
    avatarImage: '/Park Da-hyo.png',
    glowColor: 'from-indigo-500/60 to-purple-500/60', // 인디고-퍼플 그라데이션
  },
  {
    id: '5',
    name: '윤소율',
    nameEn: 'Yun So-Yul',
    role: 'Technical Product Manager',
    specialties: ['Logic Design', 'Workflow Automation'],
    philosophy: '데이터와 비즈니스를 잇는 최적의 로직을 설계합니다.',
    avatarImage: '/Yun So-Yul.png',
    glowColor: 'from-teal-500/60 to-cyan-500/60', // 틸-사이언 그라데이션
  },
];

