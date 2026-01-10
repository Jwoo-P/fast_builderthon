import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card-hover group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      {/* 카드 상단 헤더 */}
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {project.name}
          </h3>
          {project.category && (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300">
              {project.category}
            </span>
          )}
        </div>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* 기술 스택 */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-400 mb-2">
          사용된 기술
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 링크 버튼 */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-200 group/link"
      >
        <span>서비스 확인하기</span>
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
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>

      {/* 호버 효과를 위한 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-50/0 dark:from-primary-900/0 dark:to-primary-900/0 group-hover:from-primary-50/50 group-hover:to-primary-100/30 dark:group-hover:from-primary-900/20 dark:group-hover:to-primary-800/20 transition-all duration-300 pointer-events-none" />
    </div>
  );
}

