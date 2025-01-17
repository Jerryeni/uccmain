"use client";

interface AmountInputProps {
  value: string;
  onChange: (value: string) => void;
  token: string;
  tokenIcon: string;
  readOnly?: boolean;
}

export function AmountInput({
  value,
  onChange,
  token,
  tokenIcon,
  readOnly = false
}: AmountInputProps) {
  return (
    <div className="relative mb-6">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        readOnly={readOnly}
        className="w-full bg-black/30 border border-[#181D20]/10 rounded-xl px-4 py-5 pr-24 text-lg"
        placeholder="0"
      />
      <div className="absolute right-3 top-1/2 bg-black/40 text-xs p-2 rounded-full -translate-y-1/2 flex items-center gap-2">
        <img src={tokenIcon} alt={token} className="w-6 h-6" />
        <span>{token}</span>
      </div>
    </div>
  );
}