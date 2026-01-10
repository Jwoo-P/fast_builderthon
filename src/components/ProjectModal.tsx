import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden"
        style={{ backgroundColor: '#34495e' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 영역 (고정) */}
        <div className="relative flex-shrink-0 px-8 pt-8 pb-4" style={{ backgroundColor: '#34495e' }}>
          {/* 닫기 버튼 */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-700 transition-colors"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#ecf0f1' }}
            aria-label="닫기"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* 제목 */}
          <h2 className="text-3xl md:text-4xl font-bold pr-12" style={{ color: '#ecf0f1' }}>
            {project.name}
          </h2>
        </div>

        {/* 스크롤 가능한 내용 영역 */}
        <div 
          className="flex-1 overflow-y-auto px-8 pb-8 modal-scroll"
          style={{ backgroundColor: '#34495e' }}
        >

          {/* 썸네일 이미지 */}
          {project.image && (
            <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden mb-6 mt-6">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* 서비스 소개 섹션 */}
          <div className="mb-8">
            <div className="mb-4">
              <h3 className="text-sm font-semibold mb-2" style={{ color: '#ecf0f1', opacity: 0.7 }}>
                서비스 소개
              </h3>
              <h4 className="text-xl font-bold mb-2" style={{ color: '#ecf0f1' }}>
                {project.name}
              </h4>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#ecf0f1', opacity: 0.9 }}>
                {project.description}
              </p>
            </div>
            {/* 프로젝트 바로가기 버튼 */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg"
              style={{ backgroundColor: '#3498db', color: '#ffffff' }}
            >
              <span>프로젝트 바로가기</span>
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* 문제 정의 + 해결 섹션 */}
          {(project.problem || project.solution) && (
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 문제 정의 카드 */}
              {project.problem && (
                <div 
                  className="p-6 rounded-xl flex flex-col h-full"
                  style={{ backgroundColor: '#2c3e50', border: '1px solid #34495e' }}
                >
                  {/* 아이콘 + 제목 */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#e74c3c' }}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: '#ffffff' }}
                      >
                        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="2" fill="currentColor"/>
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold" style={{ color: '#ecf0f1' }}>
                      문제 정의
                    </h4>
                  </div>
                  {/* 내용 */}
                  <p className="text-base leading-relaxed flex-1" style={{ color: '#ecf0f1', opacity: 0.9 }}>
                    {project.problem}
                  </p>
                </div>
              )}

              {/* 해결 방안 카드 */}
              {project.solution && (
                <div 
                  className="p-6 rounded-xl flex flex-col h-full"
                  style={{ backgroundColor: '#2c3e50', border: '1px solid #34495e' }}
                >
                  {/* 아이콘 + 제목 */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#27ae60' }}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: '#ffffff' }}
                      >
                        <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold" style={{ color: '#ecf0f1' }}>
                      해결 방안
                    </h4>
                  </div>
                  {/* 내용 */}
                  <p className="text-base leading-relaxed flex-1" style={{ color: '#ecf0f1', opacity: 0.9 }}>
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* 기술 스택 + 기술적 한계 섹션 */}
          <div className="mb-8 space-y-4">
            {/* 기술 스택 카드 */}
            {project.technologies && project.technologies.length > 0 && (
              <div 
                className="p-6 rounded-xl flex flex-col"
                style={{ backgroundColor: '#2c3e50', border: '1px solid #34495e' }}
              >
                {/* 아이콘 + 제목 */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#9b59b6' }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: '#ffffff' }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold" style={{ color: '#ecf0f1' }}>
                    기술 스택
                  </h4>
                </div>
                {/* 기술 스택 태그들 */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm font-medium rounded-md"
                      style={{ backgroundColor: '#34495e', color: '#ecf0f1', border: '1px solid #34495e' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 기술적 한계 + 해결책 카드 */}
            {project.challenge && (
              <div 
                className="p-6 rounded-xl flex flex-col"
                style={{ backgroundColor: '#2c3e50', border: '1px solid #34495e' }}
              >
                {/* 아이콘 + 제목 */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#f39c12' }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: '#ffffff' }}
                    >
                      <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold" style={{ color: '#ecf0f1' }}>
                    기술적 한계 + 해결책
                  </h4>
                </div>
                {/* 내용 */}
                <p className="text-base leading-relaxed" style={{ color: '#ecf0f1', opacity: 0.9 }}>
                  {project.challenge}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

