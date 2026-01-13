import { TeamMember } from '../types';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="group bg-slate-800/40 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
      {/* 1. 3D 아바타 컨테이너 */}
      <div className="relative w-32 h-32 mx-auto mb-6">
        {/* 아바타 뒤의 빛나는 그라데이션 배경 */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${member.glowColor} opacity-80 blur-md group-hover:opacity-100 transition-opacity`}></div>
        {/* 3D 아바타 이미지 */}
        {member.avatarImage ? (
          <img
            src={member.avatarImage}
            alt={member.name}
            className="relative z-10 w-full h-full object-cover rounded-full border-2 border-white/10"
          />
        ) : (
          // 아바타 이미지가 없을 경우 플레이스홀더
          <div className="relative z-10 w-full h-full rounded-full border-2 border-white/10 bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center">
            <span className="text-4xl font-bold text-white/60">{member.name[0]}</span>
          </div>
        )}
      </div>

      {/* 2. 이름 및 정보 */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-white mb-1">
          {member.name}
        </h3>
        <p className="text-sm text-slate-400 mb-1">
          {member.nameEn}
        </p>
        <p className="text-sm text-slate-300 mb-4">
          {member.role}
        </p>

        {/* 3. 전문 분야 태그 */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {member.specialties.map((specialty, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-md backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(126, 214, 223, 0.2)', color: '#ffffff', border: '1px solid rgba(126, 214, 223, 0.4)' }}
            >
              {specialty}
            </span>
          ))}
        </div>

        {/* 4. 한 줄 소개 (Philosophy) */}
        <p className="text-sm text-slate-400 italic leading-relaxed">
          "{member.philosophy}"
        </p>
      </div>
    </div>
  );
}

