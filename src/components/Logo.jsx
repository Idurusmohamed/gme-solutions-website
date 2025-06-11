
// Your new logo with a lightning bolt symbol.
// The `fill="currentColor"` means its color will be determined by the text color of its parent.
const Logo = ({ className }) => {
  return (
    <svg
      width="230"
      height="42"
      viewBox="0 0 230 42"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Lightning Bolt Icon */}
      <path
        d="M13.62 0L0 19.69H12.29L3.89 42L27.5 15.52H15.21L24.32 0H13.62Z"
        fill="currentColor"
      />
      {/* GME Wordmark */}
      <text
        x="38"
        y="32"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
        fontSize="36"
        fontWeight="800"
        fill="currentColor"
      >
        GME
      </text>
      {/* "Solutions" Wordmark */}
      <text
        x="122"
        y="32"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
        fontSize="28"
        fontWeight="300"
        fill="currentColor"
      >
        Solutions
      </text>
    </svg>
  );
};

export default Logo;