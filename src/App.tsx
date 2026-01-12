import { useState } from 'react';
import { projects } from './data/projects';
import { innovationIdeas } from './data/innovationIdeas';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import InnovationIdeaCard from './components/InnovationIdeaCard';
import { Project } from './types';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 사주킹 프로젝트 찾기
  const sajuking = projects.find(p => p.id === '1');
  // 나머지 프로젝트들을 지정된 순서로 정렬
  const subProjectsOrder = ['6', '2', '5', '3', '4']; // FitFlow AI Coach, 타로킹, Archive Gram, 토지맥, 열네 밤의 꿈
  const subProjects = subProjectsOrder
    .map(id => projects.find(p => p.id === id))
    .filter((project): project is Project => project !== undefined);

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
          <div className="flex items-center gap-2">
            <img 
              src="/logo.svg" 
              alt="AI Directors" 
              className="h-[30.24px] md:h-[40.32px] w-auto pb-[2px]"
            />
            <span className="text-white text-sm md:text-base font-light opacity-70">|</span>
            <span className="text-white text-xs md:text-sm font-light opacity-60 pt-[2px]">Builderthon 2026</span>
          </div>
          {/* 깃허브 링크 */}
          <a 
            href="https://github.com/Jwoo-P/fast_builderthon" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
          >
            <svg 
              className="w-5 h-5 md:w-6 md:h-6" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="text-sm md:text-base">GitHub</span>
          </a>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="relative w-full py-20 flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#130f40' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-title">2026 FASTCAMPUS AI HACKERTHON</span>
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
            <div className="relative overflow-hidden rounded-2xl shadow-2xl card-hover group" style={{ backgroundColor: '#30336b' }}>
              {/* 배경 이미지 */}
              {sajuking.image && (
                <div className="relative w-full min-h-[550px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px] overflow-hidden">
                  <img
                    src={sajuking.image}
                    alt={sajuking.name}
                    className="w-full h-full min-h-[550px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px] object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* AI Fortune 뱃지 */}
                  <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm z-10" style={{ backgroundColor: 'rgba(126, 214, 223, 0.9)', color: '#130f40' }}>
                    AI Fortune
                  </span>
                  {/* 그라데이션 오버레이 - 하단 절반에만 적용하여 상단 절반이 잘 보이도록 */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#130f40]/95 via-[#130f40]/70 to-transparent" />
                  
                  {/* 카드 내용 - 스크롤 없이 모든 내용 표시, 모바일에서 간격 최적화 */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12">
                    <div className="mb-2 sm:mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#ffffff', opacity: 0.9 }}>
                        MAIN PROJECT
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4" style={{ color: '#ffffff' }}>
                      사주킹 (SajuKing)
                    </h3>
                    <p className="text-sm sm:text-lg md:text-xl mb-3 sm:mb-4 max-w-3xl leading-relaxed" style={{ color: '#ffffff', opacity: 0.95 }}>
                      GPT-5.2와 Gemini-3.0을 결합한 AI 운세 에이전트입니다. 2030 MZ세대의 데이터 패턴을 분석하여, 전문 용어 대신 스토리텔링 기반의 직관적인 사주 해석을 제공합니다.
                    </p>
                    
                    {/* 사용된 기술 태그 */}
                    <div className="mb-3 sm:mb-6">
                      <h4 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3" style={{ color: '#ffffff', opacity: 0.9 }}>
                        사용된 기술
                      </h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {['GPT-5.2', 'Supabase', 'React', 'Data Analysis'].map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium rounded-md backdrop-blur-sm"
                            style={{ backgroundColor: 'rgba(126, 214, 223, 0.2)', color: '#ffffff', border: '1px solid rgba(126, 214, 223, 0.4)' }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => handleOpenModal(sajuking)}
                      className="btn-flat-primary inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg font-medium hover:shadow-lg"
                    >
                      <span>자세히 보기</span>
                      <svg
                        className="w-4 sm:w-5 h-4 sm:h-5"
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

      {/* Innovation Ideas 섹션 */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#130f40' }}>
        <div className="max-w-7xl mx-auto">
          {/* 섹션 헤더 */}
          <div className="mb-8 flex items-center gap-2">
            <span className="text-3xl">💡</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#ffffff' }}>
              Innovation Ideas
            </h2>
          </div>

          {/* Innovation Ideas 리스트 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {innovationIdeas.map((idea) => (
              <InnovationIdeaCard key={idea.id} idea={idea} />
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
            © 2026 AI Directors. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

