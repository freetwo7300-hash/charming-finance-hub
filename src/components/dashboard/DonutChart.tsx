type Slice = { name: string; value: number; color: string };

export function DonutChart({
  data,
  size = 210,
  thickness = 26,
  gap = 3,
}: {
  data: Slice[];
  size?: number;
  thickness?: number;
  gap?: number;
}) {
  const total = data.reduce((s, d) => s + d.value, 0);
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label="Balance by currency">
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          {data.map((d) => {
            const len = (d.value / total) * c;
            const dash = Math.max(len - gap, 0);
            const el = (
              <circle
                key={d.name}
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke={d.color}
                strokeWidth={thickness}
                strokeLinecap="round"
                strokeDasharray={`${dash} ${c - dash}`}
                strokeDashoffset={-offset}
              />
            );
            offset += len;
            return el;
          })}
        </g>
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-display text-xl font-semibold">100%</span>
      </div>
    </div>
  );
}
