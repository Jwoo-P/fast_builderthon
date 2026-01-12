import { InnovationIdea } from '../types';

interface InnovationIdeaCardProps {
  idea: InnovationIdea;
}

export default function InnovationIdeaCard({ idea }: InnovationIdeaCardProps) {
  const getStatusColor = (status: InnovationIdea['status']) => {
    switch (status) {
      case 'MVP READY':
        return { bg: 'rgba(0, 245, 255, 0.2)', border: 'rgba(0, 245, 255, 0.5)', text: '#7ed6df' };
      case 'PROTOTYPE':
        return { bg: 'rgba(95, 39, 205, 0.2)', border: 'rgba(95, 39, 205, 0.5)', text: '#a29bfe' };
      case 'PLANNED':
        return { bg: 'rgba(255, 159, 243, 0.2)', border: 'rgba(255, 159, 243, 0.5)', text: '#fd79a8' };
      case 'CONCEPT':
      default:
        return { bg: 'rgba(255, 107, 107, 0.2)', border: 'rgba(255, 107, 107, 0.5)', text: '#ff7675' };
    }
  };

  const statusStyle = getStatusColor(idea.status);

  return (
    <div 
      className="card-hover group relative overflow-hidden rounded-2xl shadow-lg flex flex-col h-full"
      style={{ backgroundColor: '#30336b', borderColor: '#130f40' }}
    >
      {/* 상단 그라데이션 바 */}
      <div 
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: idea.gradientColor }}
      />

      {/* 카드 내용 */}
      <div className="flex flex-col flex-1 p-6">
        {/* 헤더 */}
        <div className="flex flex-col items-start gap-2 mb-4">
          {/* 카테고리 뱃지 */}
          <span 
            className="px-3 py-1 text-xs font-semibold rounded-full"
            style={{ 
              backgroundColor: statusStyle.bg, 
              color: statusStyle.text,
              border: `1px solid ${statusStyle.border}`
            }}
          >
            {idea.status}
          </span>
          {/* 서비스명 */}
          <div className="flex items-center gap-3">
            <span className="text-3xl">{idea.icon}</span>
            <h3 className="text-xl font-bold transition-colors group-hover:text-[#4BCFFA]" style={{ color: '#ffffff' }}>
              {idea.name}
            </h3>
          </div>
        </div>

        {/* 설명 */}
        <p className="leading-relaxed mb-4 flex-1" style={{ color: '#ffffff', opacity: 0.9 }}>
          {idea.description}
        </p>

        {/* 기술 스택 */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2" style={{ color: '#ffffff', opacity: 0.8 }}>
            사용된 기술
          </h4>
          <div className="flex flex-wrap gap-2">
            {idea.technologies.map((tech, index) => (
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

        {/* Core Innovation 하이라이트 */}
        <div 
          className="rounded-lg p-4"
          style={{ backgroundColor: '#130f40', border: '1px solid #30336b' }}
        >
          <h4 className="text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#7ed6df' }}>
            Core Innovation
          </h4>
          <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: '#ffffff', opacity: 0.95 }}>
            {idea.coreInnovation}
          </p>
        </div>
      </div>
    </div>
  );
}

