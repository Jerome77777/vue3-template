import type { VNode } from 'vue';

export type WithFalse<T> = T | false;

export type TargetType = '_blank' | '_self' | unknown;

export interface MetaRecord {
  /**
   * @name 菜单的icon
   */
  icon?: string | VNode;
  /**
   * @type 有 children 的菜单的组件类型 可选值 'group'
   */
  type?: string;
  /**
   * @name 自定义菜单的国际化 key，如果没有则返回自身
   */
  title?: string;
  /**
   * @name 内建授权信息
   */
  authority?: string | string[];
  /**
   * @name 打开目标位置 '_blank' | '_self' | null | undefined
   */
  target?: TargetType;
  /**
   * @name 在菜单中隐藏子节点
   */
  hideChildInMenu?: boolean;
  /**
   * @name 在菜单中隐藏自己和子节点
   */
  hideInMenu?: boolean;
  /**
   * @name disable 菜单选项
   */
  disabled?: boolean;
  /**
   * @name 隐藏自己，并且将子节点提升到与自己平级
   */
  flatMenu?: boolean;

  [key: string]: any;
}

export interface MenuDataItem {
  /**
   * @name 用于标定选中的值，默认是 path
   */
  path: string;
  name?: string | symbol;
  meta?: MetaRecord;
  /**
   * @name 子菜单
   */
  children?: MenuDataItem[];
}
