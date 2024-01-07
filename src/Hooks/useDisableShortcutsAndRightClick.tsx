import { useEffect } from 'react';

const useDisableShortcutsAndRightClick = () => {
  useEffect(() => {
    const disableShortcuts = (event: KeyboardEvent) => {
      event.preventDefault();
    };

    const disableRightClick = (event: MouseEvent) => {
      event.preventDefault();
    };

    document.addEventListener('keydown', disableShortcuts);
    document.addEventListener('contextmenu', disableRightClick);

    return () => {
      document.removeEventListener('keydown', disableShortcuts);
      document.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);
};

export default useDisableShortcutsAndRightClick;
