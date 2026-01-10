import { projects } from './data/projects';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="min-h-screen">
      {/* 헤더 섹션 */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            AI Directors의 포트폴리오
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            기존에 제작했었던 프로덕트들을 한곳에 모아서 제공합니다
          </p>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      {/* 푸터 */}
      <footer className="mt-20 py-8 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Side Projects Showcase. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

