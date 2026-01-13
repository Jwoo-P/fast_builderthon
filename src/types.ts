export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link: string;
  category?: string;
  image?: string;
  problem?: string; // 문제 정의
  solution?: string; // 해결 방안
  challenge?: string; // 기술적 한계 + 해결책
}

export interface InnovationIdea {
  id: string;
  icon: string;
  name: string;
  description: string;
  technologies: string[];
  status: 'CONCEPT' | 'PLANNED' | 'PROTOTYPE' | 'MVP READY';
  coreInnovation: string;
  gradientColor: string; // 그라데이션 색상 (CSS gradient)
}

export interface TeamMember {
  id: string;
  name: string;
  nameEn: string;
  role: string;
  specialties: string[]; // 전문 분야 태그 (2개)
  philosophy: string; // 한 줄 소개
  avatarImage?: string; // 3D 아바타 이미지 경로
  glowColor: string; // 그라데이션 배경 색상 (Tailwind 클래스)
}

