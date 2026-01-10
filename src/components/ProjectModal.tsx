import React from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

// 마크다운 볼드 형식(**텍스트**)을 HTML bold로 변환하는 함수
const parseMarkdownBold = (text: string): React.ReactNode => {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  const regex = /\*\*(.+?)\*\*/g;
  let match;
  
  while ((match = regex.exec(text)) !== null) {
    // 이전 텍스트 추가
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    // 볼드 처리된 텍스트 추가
    parts.push(
      <strong key={match.index} style={{ fontWeight: 600 }}>
        {match[1]}
      </strong>
    );
    lastIndex = regex.lastIndex;
  }
  
  // 남은 텍스트 추가
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  
  return parts.length > 0 ? <>{parts}</> : text;
};

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(19, 15, 64, 0.95)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden"
        style={{ backgroundColor: '#30336b' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 영역 (고정) */}
        <div className="relative flex-shrink-0 px-8 pt-8 pb-4" style={{ backgroundColor: '#30336b' }}>
          {/* 닫기 버튼 */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#130f40] transition-colors"
            style={{ backgroundColor: 'rgba(19, 15, 64, 0.7)', color: '#ffffff' }}
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
          <h2 className="text-3xl md:text-4xl font-bold pr-12" style={{ color: '#ffffff' }}>
            {project.name}
          </h2>
        </div>

        {/* 스크롤 가능한 내용 영역 */}
        <div 
          className="flex-1 overflow-y-auto px-8 pb-8 modal-scroll"
          style={{ backgroundColor: '#30336b' }}
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
              <h3 className="text-sm font-semibold mb-2" style={{ color: '#ffffff', opacity: 0.7 }}>
                서비스 소개
              </h3>
              <h4 className="text-xl font-bold mb-2" style={{ color: '#ffffff' }}>
                {project.id === '1' 
                  ? '데이터로 검증된 2030 MZ세대 맞춤형 AI 점술가' 
                  : project.id === '2'
                  ? 'Gemini 3.0 Pro가 선사하는 초개인화 타로 상담 솔루션'
                  : project.id === '3'
                  ? '위성 이미지와 데이터가 만나는 곳, 토지맥 (LandMaek)'
                  : project.id === '4'
                  ? '가족과 함께 즐기는 실시간 여행 전략 보드게임'
                  : project.id === '5'
                  ? '크리에이터를 위한 AI 기반 올인원 브랜딩 솔루션'
                  : project.id === '6'
                  ? '오늘의 컨디션에 반응하는 나만의 AI 퍼스널 트레이너'
                  : project.name}
              </h4>
              <p className="text-base leading-relaxed mb-4 whitespace-pre-line" style={{ color: '#ffffff', opacity: 0.9 }}>
                {project.id === '2' 
                  ? '타로킹 (TarotKing)은 LLM의 강력한 추론 능력을 활용해 타로의 상징을 사용자의 고민 맥락에 맞춰 해석해주는 AI 상담 서비스입니다. 단순 랜덤 생성이 아닌, RAG/Context Injection 기술을 응용하여 카드 간의 인과관계를 분석하고 심층적인 대화가 가능합니다.'
                  : project.id === '3'
                  ? '토지맥 (LandMaek)은 복잡한 부동산 데이터와 위성 이미지를 융합하여 토지의 현재 가치와 미래 변화를 분석하는 AI 솔루션입니다. VQ(Vector Quantization) 모델을 통해 지형적 특성을 패턴화하고, 실거래가 데이터와 교차 분석하여 기존에 없던 새로운 투자 인사이트를 제공합니다.'
                  : project.id === '4'
                  ? '열네 밤의 꿈은 오프라인 보드게임의 경험을 웹으로 옮겨온 멀티플레이어 게임 서비스입니다. 최대 5인이 동시에 접속하여 14라운드 동안 경쟁하며, WebSocket을 통해 모든 플레이어의 행동이 밀리초(ms) 단위로 동기화되는 몰입감 높은 환경을 제공합니다.'
                  : project.id === '5'
                  ? 'Archive Gram은 인스타그램의 그리드 시스템을 완벽하게 재현한 콘텐츠 아카이빙 및 제작 도구입니다. Gemini 3.0 Flash를 활용해 클릭 한 번으로 국문 콘텐츠를 영문으로 번역하고, 맥락에 맞는 해시태그를 제안받을 수 있으며, 웹에서 제작한 슬라이드를 즉시 고화질 이미지로 추출할 수 있습니다.'
                  : project.id === '6'
                  ? 'FitFlow는 정해진 루틴을 강요하는 기존 앱과 달리, 사용자의 신체 상태에 따라 유동적으로 운동 강도를 조절하는 AI 코칭 솔루션입니다. Gemini 3 Pro의 추론 능력과 2.5 Flash의 TTS(음성 합성) 기술을 결합하여, 마치 실제 트레이너가 옆에 있는 듯한 몰입감 높은 홈트레이닝 경험을 제공합니다.'
                  : project.description}
              </p>
            </div>
            {/* 프로젝트 바로가기 버튼 */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-project-link inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium hover:shadow-lg"
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
                  style={{ backgroundColor: '#130f40', border: '1px solid #30336b' }}
                >
                  {/* 아이콘 + 제목 */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#FF7675' }}
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
                    <h4 className="text-lg font-semibold" style={{ color: '#ffffff' }}>
                      문제 정의 (Problem Definition)
                    </h4>
                  </div>
                  {/* 내용 */}
                  <div className="flex flex-col gap-4 flex-1">
                    {(() => {
                      const problemText = project.id === '3'
                        ? 'Information Fragmentation (정보 파편화): 실거래가, 공시지가, 개발 정보가 여러 공공 사이트에 흩어져 있어, 사용자가 통합적인 의사결정을 내리기 어려운 구조였습니다.\n\nLack of Visual Insight (시각화 부재): 기존 서비스는 텍스트와 표 위주의 정적(Static) 데이터만 제공하여, 실제 토지의 상태(식생 변화, 개발 진행도)를 직관적으로 파악할 수 없었습니다.'
                        : project.id === '4'
                        ? 'State Synchronization (상태 동기화 난이도): 턴제 게임 특성상 한 플레이어의 행동(카드 구매, 자원 획득)이 다른 모든 플레이어의 화면에 즉시, 그리고 정확하게 반영되어야 하는 정합성 문제가 있었습니다.\n\nComplex Game Logic (복잡한 룰셋): 107장의 카드 효과, 찬스 상호작용, 2인 전용 변형 규칙 등 방대한 오프라인 룰북을 예외 없이 코드로 구현해야 했습니다.'
                        : project.id === '5'
                        ? 'Inefficient Workflow (비효율적 워크플로우): 콘텐츠 기획, 디자인, 번역, 해시태그 선정이 파편화되어 있어 크리에이터가 하나의 게시물을 완성하는 데 과도한 리소스가 소요되었습니다.\n\nVisual Inconsistency (시각적 불일치): 다양한 플랫폼에 포트폴리오를 업로드할 때 1:1 비율이나 썸네일 크롭(Crop)이 어긋나 개인 브랜딩의 톤앤매너를 유지하기 어려웠습니다.'
                        : project.id === '6'
                        ? 'Static Rigidity (정적 루틴의 한계): 기존 홈트레이닝 앱은 사용자의 당일 컨디션(부상, 피로도)을 고려하지 않고 고정된 커리큘럼만 제시하여, 부상 위험과 중도 포기율(Churn Rate)이 높았습니다.\n\nLack of Real-time Guidance (피드백 부재): 혼자 운동할 때 자세나 템포에 대한 가이드가 없어 운동 효율이 떨어지고 동기 부여가 지속되기 어려웠습니다.'
                        : project.problem || '';

                      // 항목들을 파싱 (빈 줄로 구분)
                      const items = problemText.split('\n\n').filter(item => item.trim());
                      
                      return items.map((item, index) => {
                        // ":" 기준으로 소제목과 내용 분리
                        const colonIndex = item.indexOf(':');
                        if (colonIndex !== -1) {
                          const subtitle = item.substring(0, colonIndex).trim();
                          const content = item.substring(colonIndex + 1).trim();
                          
                          return (
                            <div key={index} className="space-y-2">
                              <h6 className="text-sm font-semibold" style={{ color: '#ffffff' }}>
                                {subtitle}
                              </h6>
                              <p className="text-sm leading-relaxed" style={{ color: '#ffffff', opacity: 0.85 }}>
                                {content}
                              </p>
                            </div>
                          );
                        }
                        
                        // ":"가 없으면 전체를 내용으로 표시
                        return (
                          <p key={index} className="text-sm leading-relaxed" style={{ color: '#ffffff', opacity: 0.85 }}>
                            {parseMarkdownBold(item)}
                          </p>
                        );
                      });
                    })()}
                  </div>
                </div>
              )}

              {/* 해결 방안 카드 */}
              {project.solution && (
                <div 
                  className="p-6 rounded-xl flex flex-col h-full"
                  style={{ backgroundColor: '#130f40', border: '1px solid #30336b' }}
                >
                  {/* 아이콘 + 제목 */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#00B894' }}
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
                    <h4 className="text-lg font-semibold" style={{ color: '#ffffff' }}>
                      해결 방안 (Solution)
                    </h4>
                  </div>
                  {/* 내용 */}
                  <div className="flex flex-col gap-4 flex-1">
                    {(() => {
                      const solutionText = project.id === '3'
                        ? 'Multi-Layer Visualization: Leaflet과 PostGIS를 활용해 가격 정보와 위성 데이터(NDVI, 변화 탐지)를 지도 위에 레이어링하여, 직관적인 시각화 대시보드를 구축했습니다.\n\nHybrid AI Discovery: 단순 필터링 검색이 아닌, **유사 이미지 검색(Visual Search)**과 가격 데이터 분석을 결합한 하이브리드 추천 엔진을 통해 \'저평가된 유망 지역(Hidden Gem)\'을 능동적으로 제안합니다.'
                        : project.id === '4'
                        ? 'Event-Driven Architecture: Socket.io를 활용하여 클라이언트와 서버 간 양방향 통신 채널을 구축, \'방 참여 -> 게임 시작 -> 턴 진행 -> 결과\'의 전체 라이프사이클을 실시간 이벤트로 관리했습니다.\n\nAI Player Agent: 인원이 부족할 경우, 여행지 테마 가중치와 자원 상태를 분석하여 최적의 경로를 판단하는 전략적 AI 봇을 도입해 게임의 완결성을 높였습니다.'
                        : project.id === '5'
                        ? 'AI-Powered Automation: Gemini 3.0 API를 연동하여 본문 입력 시 자연스러운 영문 번역과 바이럴에 최적화된 해시태그 5~7개를 자동 생성하는 \'스마트 에디터\'를 구현했습니다.\n\nGrid System Architecture: 인스타그램의 UI 로직을 역설계하여, 텍스트와 이미지가 1:1 \'Safe Zone\' 내에 완벽하게 배치되도록 강제하는 반응형 그리드 시스템을 구축했습니다.'
                        : project.id === '6'
                        ? 'Dynamic Routine Generation: 매일 체크인 데이터(체중, 통증 부위, 수면 질)를 Gemini 3 Pro가 분석하여, 그날 수행 가능한 최적의 종목과 강도(Set/Rep)를 JSON 형태로 실시간 생성합니다.\n\nMultimodal Coaching: Gemini 2.5 Flash TTS 모델을 활용하여 단순 텍스트가 아닌 \'보이스 코칭\'을 제공하고, 운동 중 실시간 질문이 가능한 AI 챗봇을 탑재해 상호작용성을 극대화했습니다.'
                        : project.solution || '';

                      // 항목들을 파싱 (빈 줄로 구분)
                      const items = solutionText.split('\n\n').filter(item => item.trim());
                      
                      return items.map((item, index) => {
                        // ":" 기준으로 소제목과 내용 분리
                        const colonIndex = item.indexOf(':');
                        if (colonIndex !== -1) {
                          const subtitle = item.substring(0, colonIndex).trim();
                          const content = item.substring(colonIndex + 1).trim();
                          
                          return (
                            <div key={index} className="space-y-2">
                              <h6 className="text-sm font-semibold" style={{ color: '#ffffff' }}>
                                {subtitle}
                              </h6>
                              <p className="text-sm leading-relaxed" style={{ color: '#ffffff', opacity: 0.85 }}>
                                {parseMarkdownBold(content)}
                              </p>
                            </div>
                          );
                        }
                        
                        // ":"가 없으면 전체를 내용으로 표시
                        return (
                          <p key={index} className="text-sm leading-relaxed" style={{ color: '#ffffff', opacity: 0.85 }}>
                            {parseMarkdownBold(item)}
                          </p>
                        );
                      });
                    })()}
                  </div>
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
                style={{ backgroundColor: '#130f40', border: '1px solid #1a1549' }}
              >
                {/* 아이콘 + 제목 */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#6C5CE7' }}
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
                  <h4 className="text-lg font-semibold" style={{ color: '#ffffff' }}>
                    기술 스택 (Tech Stack)
                  </h4>
                </div>
                {/* 기술 스택 태그들 */}
                <div className="flex flex-col gap-4">
                  {(project.id === '2' 
                    ? ['Frontend : React, TypeScript, Tailwind CSS, shadcn-ui', 'Backend : Supabase (Edge Functions, PostgreSQL)', 'AI Model : Gemini 3.0 Pro (Primary), GPT 5.2 (Fallback)', 'DevOps : Vercel']
                    : project.id === '3'
                    ? ['Frontend : Next.js 16, React 19, Leaflet, CSS Modules', 'Backend : Next.js API Routes, PostgreSQL (PostGIS)', 'AI/ML : VQ Model (TorchServe), Pinecone (Vector Search)', 'Data : Sentinel Hub (Satellite), Google Earth Engine']
                    : project.id === '4'
                    ? ['Frontend : React, TypeScript, Vite, Socket.io-client', 'Backend : Node.js, Express, Socket.io, PostgreSQL', 'Database : Supabase (Schema, Seed Data)', 'Infrastructure : Vercel (FE), Render (BE)']
                    : project.id === '5'
                    ? ['Frontend : React (ES6+), Tailwind CSS', 'Backend : Supabase (Database, Auth, Storage)', 'AI Engine : Google Gemini 3.0 Flash (Text & Reasoning)', 'Rendering : html-to-image, jszip (Client-side Export)']
                    : project.id === '6'
                    ? ['Frontend : React 19, TypeScript, Tailwind CSS, Lucide React', 'Backend : Firebase (Firestore, Analytics, Auth)', 'AI Engine : Gemini 3.0 Pro (Logic), Gemini 2.5 Flash (TTS)', 'Visualization : Recharts (Bento Grid Dashboard)']
                    : project.technologies
                  ).map((tech, index) => {
                    // ":" 기준으로 소제목과 기술 스택 분리
                    const [category, ...techParts] = tech.split(':');
                    const techStack = techParts.join(':').trim();
                    const techItems = techStack.split(',').map(item => item.trim()).filter(item => item);
                    
                    return (
                      <div key={index} className="flex flex-col gap-2">
                        {/* 소제목 */}
                        <h5 className="text-sm font-semibold" style={{ color: '#ffffff', opacity: 0.9 }}>
                          {category.trim()}
                        </h5>
                        {/* 기술 뱃지들 */}
                        <div className="flex flex-wrap gap-2">
                          {techItems.map((item, itemIndex) => (
                            <span
                              key={itemIndex}
                              className="px-3 py-1.5 text-xs font-medium rounded-md"
                              style={{ backgroundColor: '#30336b', color: '#ffffff', border: '1px solid #6C5CE7' }}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 기술적 한계 + 해결책 카드 */}
            {project.challenge && (
              <div 
                className="p-6 rounded-xl flex flex-col"
                style={{ backgroundColor: '#130f40', border: '1px solid #1a1549' }}
              >
                {/* 아이콘 + 제목 */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#FDCB6E' }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: '#130f40' }}
                    >
                      <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold" style={{ color: '#ffffff' }}>
                    기술적 한계 및 해결책 (Challenges & Solutions)
                  </h4>
                </div>
                {/* 내용 */}
                <div className="space-y-6">
                  {(() => {
                    const challengeText = project.id === '3'
                      ? '① 대용량 공간 데이터 처리와 성능 이슈\n- 한계: 위성 이미지와 전국 단위의 필지 데이터를 실시간으로 렌더링할 때 발생하는 높은 대기 시간(Latency)과 브라우저 부하.\n- 해결: Tile-based Caching & Vector Tiling.\n정적인 지형 데이터는 벡터 타일로 변환하여 전송량을 최소화하고, 자주 조회되는 위성 분석 결과는 Redis에 캐싱하여 응답 속도를 **2초 미만(p95)**으로 최적화했습니다.\n\n② 이종 데이터(이미지 vs 텍스트) 간의 결합 분석\n- 한계: \'시각적 특징(개발된 땅)\'과 \'정형 데이터(가격 상승률)\'는 서로 다른 데이터 차원을 가져 통합 추천이 어려움.\n- 해결: Hybrid Score Fusion.\n위성 이미지는 VQ 모델로 임베딩하여 시각적 유사도를 계산하고, 가격 데이터는 정규화(Normalization)하여 두 점수를 가중 합산(Weighted Sum)하는 하이브리드 랭킹 알고리즘을 자체 구현했습니다.'
                      : project.id === '4'
                      ? '① 동시성 이슈와 레이스 컨디션 (Race Condition)\n- 한계: 찬스 카드나 공동 자원 획득 시, 여러 플레이어가 동시에 요청을 보낼 경우 데이터 불일치나 중복 처리가 발생할 위험.\n- 해결: Turn-Lock Mechanism & Transaction.\n서버 메모리 상에 Turn-Lock 플래그를 두어 현재 턴 주인 외의 요청을 원천 차단하고, DB 트랜잭션(BEGIN...COMMIT)을 적용하여 자원 변동의 원자성(Atomicity)을 보장했습니다.\n\n② 플레이어 이탈 시 게임 중단 문제\n- 한계: 네트워크 불안정이나 고의적인 이탈로 인해 한 명이라도 연결이 끊기면 남은 인원들이 게임을 진행할 수 없는 상황.\n- 해결: Graceful Handling & Bot Substitution.\nWebSocket 연결이 끊기면 30초의 재접속 대기 시간을 부여하고, 타임아웃 시 자동으로 해당 플레이어를 AI 에이전트로 교체하여 남은 사용자들이 게임을 끝까지 마칠 수 있도록 \'중단 없는 경험\'을 구현했습니다.'
                      : project.id === '5'
                      ? '① DOM 요소의 고화질 이미지 변환 이슈\n- 한계: 웹 브라우저상의 HTML/CSS 슬라이드를 이미지로 다운로드할 때, 해상도 저하(Blur)나 폰트 렌더링 깨짐 현상 발생.\n- 해결: High-DPI Scaling Pipeline.\nhtml-to-image 라이브러리 사용 시 Pixel Ratio를 강제로 2배수 이상(Retina Display 기준)으로 스케일링하여 캡처하는 파이프라인을 구축, 1080x1080px의 선명한 PNG 출력을 보장했습니다.\n\n② 다국어 레이아웃의 시각적 위계(Hierarchy) 충돌\n- 한계: 국문보다 영문 텍스트 길이가 길어질 경우, 고정된 카드뉴스 레이아웃(1:1)을 벗어나거나 디자인이 무너지는 문제.\n- 해결: Adaptive Typography Engine.\n텍스트 길이에 따라 폰트 사이즈(rem)와 줄 간격(leading)을 동적으로 계산하는 유틸리티 함수를 적용하고, AI 프롬프트에 \'요약 번역(Summarized Translation)\' 제약을 걸어 레이아웃 안정성을 확보했습니다.'
                      : project.id === '6'
                      ? '① 비정형 데이터의 구조화 (Unstructured to Structured)\n- 한계: 생성형 AI는 기본적으로 텍스트를 반환하므로, 앱 내의 타이머나 카운터와 연동하기 위한 정형 데이터(JSON)로 변환하는 데 불안정성이 존재.\n- 해결: Strict Schema Enforcement & JSON Mode.\n프롬프트 레벨에서 Exercise, Reps, RestTime 등의 스키마를 엄격하게 정의하고, Gemini의 JSON 모드를 강제하여 앱 클라이언트가 100% 파싱 가능한 데이터 포맷을 보장했습니다.\n\n② 운동 안전성 확보 (Safety Constraints)\n- 한계: AI가 사용자의 신체적 제약(예: 무릎 통증)을 무시하고 고강도 운동(예: 점프 스쿼트)을 추천할 위험성(Hallucination).\n- 해결: Negative Prompting & Condition Filtering.\n체크인 단계에서 \'통증 부위\'가 감지되면, 해당 부위에 부하를 주는 운동 태그를 시스템 프롬프트의 **Negative Constraint(금지 조건)**로 주입하여 부상 위험을 원천 차단했습니다.'
                      : project.challenge || '';

                    // 챌린지 항목들을 파싱 (①, ② 등의 번호로 구분)
                    const challenges = challengeText.split(/\n(?=①|②|③|④|⑤)/).filter(item => item.trim());
                    
                    return challenges.map((challengeItem, index) => {
                      const lines = challengeItem.trim().split('\n');
                      const titleLine = lines[0]; // ①로 시작하는 제목
                      
                      // 한계와 해결 부분 찾기
                      let limitText = '';
                      let solutionTitle = '';
                      let solutionText = '';
                      
                      const limitIndex = lines.findIndex(line => line.trim().startsWith('- 한계:'));
                      const solutionIndex = lines.findIndex(line => line.trim().startsWith('- 해결:'));
                      
                      if (limitIndex !== -1) {
                        limitText = lines[limitIndex].replace('- 한계:', '').trim();
                      }
                      
                      if (solutionIndex !== -1) {
                        const solutionLine = lines[solutionIndex].replace('- 해결:', '').trim();
                        
                        // 해결 라인의 첫 번째 부분(마침표 전까지)이 제목
                        const firstPeriodIndex = solutionLine.indexOf('.');
                        if (firstPeriodIndex !== -1) {
                          solutionTitle = solutionLine.substring(0, firstPeriodIndex + 1).trim();
                          // 마침표 뒤의 내용이 있고, 다음 줄에 더 내용이 있는지 확인
                          const remainingInLine = solutionLine.substring(firstPeriodIndex + 1).trim();
                          const nextLineContent = lines.slice(solutionIndex + 1).join('\n').trim();
                          solutionText = (remainingInLine ? remainingInLine + '\n' : '') + nextLineContent;
                        } else {
                          // 마침표가 없으면 전체가 제목이고, 다음 줄이 설명
                          solutionTitle = solutionLine;
                          solutionText = lines.slice(solutionIndex + 1).join('\n').trim();
                        }
                      }
                      
                      return (
                        <div key={index} className="space-y-4">
                          {/* 소제목 */}
                          <h5 className="text-base font-semibold" style={{ color: '#ffffff' }}>
                            {titleLine}
                          </h5>
                          
                          {/* 한계와 해결 영역 */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* 한계 부분 */}
                            {limitText && (
                              <div 
                                className="p-4 rounded-lg"
                                style={{ backgroundColor: 'rgba(255, 118, 117, 0.1)', border: '1px solid rgba(255, 118, 117, 0.3)' }}
                              >
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FF7675' }} />
                                  <h6 className="text-sm font-semibold" style={{ color: '#FF7675' }}>
                                    한계
                                  </h6>
                                </div>
                                <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: '#ffffff', opacity: 0.9 }}>
                                  {parseMarkdownBold(limitText)}
                                </p>
                              </div>
                            )}
                            
                            {/* 해결 부분 */}
                            {solutionTitle && (
                              <div 
                                className="p-4 rounded-lg"
                                style={{ backgroundColor: 'rgba(0, 184, 148, 0.1)', border: '1px solid rgba(0, 184, 148, 0.3)' }}
                              >
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00B894' }} />
                                  <h6 className="text-sm font-semibold" style={{ color: '#00B894' }}>
                                    해결
                                  </h6>
                                </div>
                                <div className="space-y-2">
                                  <p className="text-sm font-semibold" style={{ color: '#ffffff' }}>
                                    {solutionTitle}
                                  </p>
                                  {solutionText && (
                                    <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: '#ffffff', opacity: 0.9 }}>
                                      {parseMarkdownBold(solutionText)}
                                    </p>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    });
                  })()}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

