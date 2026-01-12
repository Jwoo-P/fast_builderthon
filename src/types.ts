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

