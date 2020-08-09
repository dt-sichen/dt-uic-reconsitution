/**
 * 项目默认配置
 */

import { Settings as LayoutSettings } from '@ant-design/pro-layout';
// import logo from '@/assets/logo.png';

export default {
  navTheme: 'dark',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  menu: {
    locale: true,
  },
  title: '',
  pwa: false,
  iconfontUrl: '',
  // logo: logo,
} as LayoutSettings & {
  pwa: boolean;
};
