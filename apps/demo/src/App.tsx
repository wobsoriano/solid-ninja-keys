import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import { NinjaKeys, createNinjaKeys } from 'solid-ninja-keys';
import logo from './logo.svg';
import styles from './App.module.css';

function openInNewTab(url: string) {
  const win = window.open(url, '_blank');
  win?.focus();
}

const App: Component = () => {
  const [isDark, setIsDark] = createSignal(false);
  const { open } = createNinjaKeys();
  const hotkeys = [
    {
      id: 'GitHub',
      title: 'GitHub',
      hotkey: 'cmd+h',
      handler: () => {
        openInNewTab('https://github.com/wobsoriano/solid-ninja-keys');
      },
    },
    {
      id: 'Contact',
      title: 'Contact',
      hotkey: 'cmd+c',
      handler: () => {
        openInNewTab('mailto:sorianorobertc@gmail.com');
      },
    },
    {
      id: 'Twitter',
      title: 'Twitter',
      hotkey: 'cmd+t',
      handler: () => {
        openInNewTab('https://twitter.com/wobsoriano');
      },
    },
    {
      id: 'Theme',
      title: 'Change theme...',
      mdIcon: 'desktop_windows',
      children: [
        {
          id: 'Light Theme',
          title: 'Change theme to Light',
          mdIcon: 'light_mode',
          handler: () => {
            setIsDark(false);
          },
        },
        {
          id: 'Dark Theme',
          title: 'Change theme to Dark',
          mdIcon: 'dark_mode',
          keywords: 'lol',
          handler: () => {
            setIsDark(true);
          },
        },
      ],
    },
  ];
  return (
    <div class={styles.App}>
      <header class={`${styles.header} ${isDark() ? styles['dark-mode'] : ''}`}>
        <img src={logo} class={styles.logo} alt="logo" onClick={() => open()} />
        <p>
          Press <kbd>cmd</kbd>+<kbd>k</kbd> (macOS) or <kbd>ctrl</kbd>+<kbd>k</kbd> (Linux/Windows),
          or click the Solid logo.
        </p>
        <a
          class={styles.link}
          href="https://github.com/wobsoriano/solid-ninja-keys"
          target="_blank"
          rel="noopener noreferrer"
        >
          solid-ninja-keys
        </a>
      </header>
      <NinjaKeys isDark={isDark()} hotkeys={hotkeys} />
    </div>
  );
};

export default App;
