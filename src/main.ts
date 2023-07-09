import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount(document.body);

document.addEventListener('keydown', ev => {
  if (ev.key === 'F12' && !ev.altKey && !ev.metaKey && !ev.ctrlKey && !ev.shiftKey) {
    window.electronRenderer.shortcut('f12');
  }
  if (ev.key === 'F5' && !ev.altKey && !ev.metaKey && !ev.ctrlKey && !ev.shiftKey) {
    window.electronRenderer.shortcut('f5');
  }
  console.log(ev.key, {
    alt: ev.altKey,
    meta: ev.metaKey,
    ctrl: ev.ctrlKey,
    shift: ev.shiftKey,
  });
});
