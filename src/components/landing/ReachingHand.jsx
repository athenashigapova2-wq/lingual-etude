// Стилизованная (не буквальная) иллюстрация тянущейся руки — простой
// геометричный силуэт в золотом акцентном цвете сайта, вдохновлённый
// универсальным жестом "тянущихся друг к другу рук", а не копия
// конкретного произведения искусства.
export default function ReachingHand({ flip = false, className = '' }) {
  return (
    <svg
      viewBox="-40 0 320 160"
      className={className}
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* предплечье */}
      <rect x="-40" y="60" width="200" height="34" rx="17" fill="#B8863F" />
      {/* ладонь */}
      <ellipse cx="168" cy="75" rx="34" ry="30" fill="#B8863F" />
      {/* мизинец */}
      <rect x="172" y="46" width="38" height="12" rx="6" fill="#B8863F" transform="rotate(10 172 52)" />
      {/* безымянный */}
      <rect x="178" y="38.5" width="46" height="13" rx="6" fill="#B8863F" transform="rotate(-8 178 45)" />
      {/* средний */}
      <rect x="180" y="33.5" width="54" height="13" rx="6" fill="#B8863F" transform="rotate(-22 180 40)" />
      {/* указательный — самый длинный, тянется вперёд */}
      <rect x="182" y="31.5" width="64" height="13" rx="6" fill="#B8863F" transform="rotate(-38 182 38)" />
      {/* большой палец */}
      <rect x="150" y="87.5" width="44" height="15" rx="7" fill="#B8863F" transform="rotate(48 150 95)" />
    </svg>
  );
}
