/* eslint-disable react/prop-types */
import { PopupModal, useCalendlyEventListener } from "react-calendly";

export default function CalendlyModal({
  url,
  open,
  onClose,
  pageSettings,
  user,
  utm,
}) {
  useCalendlyEventListener({
    onEventScheduled: onClose,
  });

  return (
    <PopupModal
      url={url}
      open={open}
      onModalClose={onClose}
      pageSettings={pageSettings}
      prefill={
        user
          ? {
              name: user.name,
              email: user.email,
            }
          : undefined
      }
      rootElement={document.getElementById("root")}
      utm={utm}
    />
  );
}
