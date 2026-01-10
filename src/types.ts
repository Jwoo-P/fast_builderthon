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

