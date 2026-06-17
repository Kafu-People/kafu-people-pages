/* eslint-disable react/prop-types */
import CalendlyPopup from "../ui/CalendlyPopup";

const variantClasses = {
  primary:
    "bg-primary hover:bg-primary-dark text-white shadow-md hover:shadow-lg",
  secondary:
    "bg-white text-primary border-2 border-primary hover:bg-surface",
  ghost:
    "bg-transparent text-primary border border-primary/30 hover:bg-surface",
};

export default function BookMeetingButton({
  buttonText = "Book a Meeting",
  variant = "primary",
  className = "",
}) {
  return (
    <CalendlyPopup
      buttonText={buttonText}
      className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition ${variantClasses[variant] || variantClasses.primary} ${className}`}
    />
  );
}
