export default function Card({ title, children }) {
  return (
    <div className="bg-[#0d0d11] p-5 rounded-xl border border-purple-500/30">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      {children}
    </div>
  );
}