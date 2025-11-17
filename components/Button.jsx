export default function Button({ text, className, ...props }) {
  return (
    <button
      {...props}
      className={`py-3 rounded-xl bg-pink-600 hover:bg-pink-500 transition shadow-[0_0_12px_#ff00e6] font-semibold ${className}`}
    >
      {text}
    </button>
  );
}