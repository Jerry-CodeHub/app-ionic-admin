/**
 * 常量定义模块
 */

/**
 * API 相关常量
 */
export const API_CONFIG = {
  TIMEOUT: 10000,
  BASE_URL: import.meta.env.VITE_API_BASE_URL || '/api',
} as const;

/**
 * 存储键名常量
 */
export const STORAGE_KEYS = {
  TOKEN: 'auth_token',
  USER_INFO: 'user_info',
  THEME: 'theme',
} as const;

/**
 * 路由路径常量
 */
export const ROUTES = {
  TAB1: '/tab1',
  TAB2: '/tab2',
  TAB3: '/tab3',
} as const;
