import { COLORS, SIZES } from "@/data/Button";

const Button = ({ onClick, text, loading, color, size }) => {
  return (
    <button
      disabled={loading}
      data-cy={`${text}-button`}
      className={`${loading ? COLORS["gray"].bg : COLORS[color].bg} ${
        loading ? COLORS["gray"].text : COLORS[color].text
      } ${SIZES[size]} ${
        COLORS[color].border
      } py-1 font-bold px-12 rounded m-3 transition-colors hover:opacity-80`}
      onClick={onClick}
    >
      {loading ? "Loading..." : text}
    </button>
  );
};

export default Button;
