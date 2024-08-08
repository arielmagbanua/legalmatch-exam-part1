import {useEffect} from "react";

function useBodyOverflowHidden() {
  return useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    }
  }, []);
}

export default useBodyOverflowHidden;