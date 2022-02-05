import 'ninja-keys';

interface Hotkey {
  id: string;
  title: string;
  hotkey?: string;
  handler?: Function;
  mdIcon?: string;
  icon?: string;
  parent?: string;
  keywords?: string;
  children?: Hotkey[];
  section?: string;
}

interface Props {
  isDark?: boolean;
  hotkeys?: Hotkey[];
  placeholder?: string;
  disableHotkeys?: boolean;
  hideBreadcrumbs?: boolean;
  openHotkey?: string;
  navigationUpHotkey?: string;
  navigationDownHotkey?: string;
  closeHotkey?: string;
  goBackHotkey?: string;
  selectHotkey?: string;
  hotKeysJoinedView?: boolean;
  noAutoLoadMdIcons?: boolean;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ninja-keys': Omit<Props, 'hotkeys' | 'isDark'> & {
        data: Props['hotkeys'];
        class: string;
      };
    }
  }
}

function NinjaKeys(props: Props) {
  return (
    <ninja-keys
      data={props.hotkeys}
      placeholder={props.placeholder}
      disableHotkeys={props.disableHotkeys}
      hideBreadcrumbs={props.hideBreadcrumbs}
      openHotkey={props.openHotkey}
      navigationUpHotkey={props.navigationUpHotkey}
      navigationDownHotkey={props.navigationDownHotkey}
      closeHotkey={props.closeHotkey}
      goBackHotkey={props.goBackHotkey}
      selectHotkey={props.selectHotkey}
      hotKeysJoinedView={props.hotKeysJoinedView}
      noAutoLoadMdIcons={props.noAutoLoadMdIcons}
      class={props.isDark ? 'dark' : 'light'}
    ></ninja-keys>
  );
}

export default NinjaKeys;
