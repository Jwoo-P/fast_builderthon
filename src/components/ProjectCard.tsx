import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  return (
    <div className="card-hover group relative overflow-hidden rounded-2xl shadow-lg flex flex-col h-full" style={{ backgroundColor: '#30336b', borderColor: '#130f40' }}>
      {/* 프로젝트 이미지 */}
      {project.image && (
        <div className="relative w-full h-48 overflow-hidden" style={{ backgroundColor: '#130f40' }}>
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#130f40]/80 via-[#130f40]/0 to-[#130f40]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {project.category && (
            <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm" style={{ backgroundColor: 'rgba(76, 207, 250, 0.9)', color: '#130f40' }}>
              {project.category}
            </span>
          )}
        </div>
      )}

      {/* 카드 내용 */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-2xl font-bold transition-colors mb-3 group-hover:text-[#4BCFFA]" style={{ color: '#ffffff' }}>
          {project.name}
        </h3>
        
        <p className="leading-relaxed mb-4 flex-1" style={{ color: '#ffffff', opacity: 0.9 }}>
          {project.description}
        </p>

        {/* 기술 스택 */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-2" style={{ color: '#ffffff', opacity: 0.8 }}>
            사용된 기술
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-md"
                style={{ backgroundColor: '#130f40', color: '#ffffff', border: '1px solid #30336b' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 자세히 보기 버튼 */}
        <button
          onClick={() => onOpenModal(project)}
          className="btn-flat-primary inline-flex items-center justify-center gap-2 px-4 py-3 font-medium rounded-lg group/link hover:shadow-lg cursor-pointer"
        >
          <span>자세히 보기</span>
          <svg
            className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
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
  );
}

