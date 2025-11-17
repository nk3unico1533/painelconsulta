export default function Input({ label, ...props }) {
  return (
    <div className="mb-4">
      <label className="text-sm text-gray-300 mb-1 block">{label}</label>
      <input
        {...props}
        className="w-full bg-[#0d0d11] border border-purple-500/40 rounded-xl p-3 focus:outline-none focus:border-purple-400 transition"
      />
    </div>
  );
}