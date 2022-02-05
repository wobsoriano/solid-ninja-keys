import { onMount } from 'solid-js';

interface NinjaKeyMethods {
  open: (opts?: { parent: string }) => void;
  close: () => void;
  setParent: (parent: string) => void;
}

export function useNinjaKeys() {
  let el: NinjaKeyMethods | undefined;

  onMount(() => {
    el = document.querySelector('ninja-keys') as NinjaKeyMethods;
  });

  /**
   * Open menu with parent, if null then open root menu
   */
  const open = (parent?: string) => {
    el?.open(parent ? { parent } : undefined);
  };

  /**
   * Close menu
   */
  const close = () => {
    el?.close();
  };

  /**
   * Navigate to parent menu
   */
  const setParent = (parent: string) => {
    el?.setParent(parent);
  };

  return {
    open,
    close,
    setParent,
  };
}
