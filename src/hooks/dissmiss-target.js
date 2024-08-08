import {useEffect} from "react";

// this is to dismiss a target when user clicked other than the target
function useDismissTarget(target, showTarget) {
  useEffect(() => {
    const handler = (event) => {
      if (!target.current) {
        return; // no reference then nothing else to do
      }

      if (!target.current.contains(event.target)) {
        showTarget(false);
      }
    }

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler); // during clean-up remove the click listener
    }
  }, [target, showTarget]);
}

export default useDismissTarget;