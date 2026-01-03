/**
 * 本地存储工具函数
 */

export const storage = {
  /**
   * 获取本地存储
   */
  get(key: string): string | null {
    return localStorage.getItem(key);
  },

  /**
   * 设置本地存储
   */
  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  },

  /**
   * 删除本地存储
   */
  remove(key: string): void {
    localStorage.removeItem(key);
  },

  /**
   * 清空本地存储
   */
  clear(): void {
    localStorage.clear();
  },

  /**
   * 获取并解析 JSON
   */
  getJSON<T>(key: string): T | null {
    const value = this.get(key);
    if (!value) return null;
    try {
      return JSON.parse(value) as T;
    } catch {
      return null;
    }
  },

  /**
   * 设置 JSON
   */
  setJSON<T>(key: string, value: T): void {
    this.set(key, JSON.stringify(value));
  },
};
