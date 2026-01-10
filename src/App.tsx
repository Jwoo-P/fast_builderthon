import { useState } from 'react';
import { projects } from './data/projects';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { Project } from './types';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 사주킹 프로젝트 찾기
  const sajuking = projects.find(p => p.id === '1');
  // 나머지 프로젝트들
  const subProjects = projects.filter(p => p.id !== '1');

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#130f40' }}>
      {/* 헤더 */}
      <header className="w-full py-4 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#130f40' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded" style={{ backgroundColor: '#6C5CE7' }}>
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-white font-semibold text-lg">Builderthon 2026</span>
          </div>
          {/* 헤더 텍스트 */}
          <span className="text-white text-sm md:text-base">AI Directors Portfolio</span>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="relative w-full py-20 flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#130f40' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span style={{ color: '#ffffff' }}>Build the </span>
            <span className="gradient-text">
              Future
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-2" style={{ color: '#ffffff' }}>
            패스트캠퍼스 빌더톤 2026 참가 포트폴리오입니다.
          </p>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#ffffff' }}>
            문제를 정의하고 기술로 해결한 6가지 프로젝트를 소개합니다.
          </p>
        </div>
      </section>

      {/* Representative Project 섹션 */}
      {sajuking && (
        <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#130f40' }}>
          <div className="max-w-7xl mx-auto">
            {/* 섹션 헤더 */}
            <div className="mb-8 flex items-center gap-2">
              <svg className="w-5 h-5" fill="#FDCB6E" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#ffffff' }}>
                Representative Project
              </h2>
            </div>

            {/* 사주킹 큰 카드 */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{ backgroundColor: '#30336b' }}>
              {/* 배경 이미지 */}
              {sajuking.image && (
                <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
                  <img
                    src={sajuking.image}
                    alt={sajuking.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* 그라데이션 오버레이 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#130f40]/95 via-[#130f40]/60 to-transparent" />
                  
                  {/* 카드 내용 */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#ffffff', opacity: 0.9 }}>
                        MAIN PROJECT
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>
                      AI 기반 모던 사주 분석 플랫폼 '사주킹 (SajuKing)'
                    </h3>
                    <p className="text-lg md:text-xl mb-6 max-w-3xl leading-relaxed" style={{ color: '#ffffff', opacity: 0.95 }}>
                      복잡한 명리학을 현대적인 언어로 재해석하고, MBTI와 결합하여 2030 MZ세대에게<br />
                      최적화된 AI 운세 서비스입니다.
                    </p>
                    <button
                      onClick={() => handleOpenModal(sajuking)}
                      className="btn-flat-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium hover:shadow-lg"
                    >
                      <span>자세히 보기</span>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Sub Projects 섹션 */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#130f40' }}>
        <div className="max-w-7xl mx-auto">
          {/* 섹션 헤더 */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#ffffff' }}>
              Sub Projects
            </h2>
          </div>

          {/* 서브 프로젝트 리스트 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpenModal={handleOpenModal} />
            ))}
          </div>
        </div>
      </section>

      {/* 모달 */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}

      {/* 푸터 */}
      <footer className="mt-20 py-12 border-t" style={{ backgroundColor: '#130f40', borderColor: '#30336b' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg" style={{ color: '#ffffff', opacity: 0.8 }}>
            © 2024 AI Directors. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

