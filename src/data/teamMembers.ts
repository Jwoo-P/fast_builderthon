import { TeamMember } from '../types';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: '권동영',
    nameEn: 'Gwon Dong-young',
    role: 'AI Product Manager',
    specialties: ['System Design', 'AI Strategy'],
    philosophy: '기술적 구조와 비즈니스 목표를 일치시키는 전략가',
    avatarImage: '/Gwon Dong-young.png',
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
    nameEn: 'Kim Min-kyun',
    role: 'AI Product Manager',
    specialties: ['Tech Lead', 'Modeling'],
    philosophy: 'AI 모델의 가능성을 실제 프로덕트 가치로 구현합니다.',
    avatarImage: '/Kim Min-kyun.png',
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
    nameEn: 'Yoon So-yul',
    role: 'AI Product Manager',
    specialties: ['Project Mgmt', 'Communication'],
    philosophy: '팀의 시너지를 극대화하여 프로젝트를 완수로 이끕니다.',
    avatarImage: '/Yoon So-yul.png',
    glowColor: 'from-teal-500/60 to-cyan-500/60', // 틸-사이언 그라데이션
  },
];

