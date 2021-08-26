/*
 * @Description:
 * @Autor: botter
 * @Date: 2021-08-19 13:52:18
 * @LastEditTime: 2021-08-20 18:44:58
 */
import { addons } from '@storybook/addons';
import theme from './yuri-theme';

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  isToolshown: true,
  theme: theme,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: true,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});
