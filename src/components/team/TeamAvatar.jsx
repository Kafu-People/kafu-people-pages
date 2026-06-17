/* eslint-disable react/prop-types */

const sizeClasses = {
  sm: "h-20 w-20 text-lg",
  md: "h-24 w-24 text-xl",
  lg: "h-32 w-32 text-2xl",
};

function getInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function TeamAvatar({ name, image, size = "md", className = "" }) {
  const sizeClass = sizeClasses[size] || sizeClasses.md;

  if (image) {
    return (
      <img
        src={image}
        alt={name}
        loading="lazy"
        className={`rounded-full object-cover ${sizeClass} ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-CPurple font-bold text-white ${sizeClass} ${className}`}
      aria-label={name}
    >
      {getInitials(name)}
    </div>
  );
}
