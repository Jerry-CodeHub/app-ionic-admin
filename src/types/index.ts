/**
 * 全局类型定义
 */

/**
 * API 响应类型
 */
export interface ApiResponse<T = unknown> {
  code: number;
  message: string;
  data: T;
}

/**
 * 分页参数
 */
export interface PaginationParams {
  page: number;
  pageSize: number;
}

/**
 * 分页响应
 */
export interface PaginationResponse<T> {
  list: T[];
  total: number;
  page: number;
  pageSize: number;
}

/**
 * 用户信息类型
 */
export interface UserInfo {
  id: string;
  username: string;
  email?: string;
  avatar?: string;
}
