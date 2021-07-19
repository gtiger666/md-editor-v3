/**
 * 设置页面元素可移动
 *
 * @param trigger 触发器，通过该元素移动父级元素
 */
export declare const keyMove: (trigger: HTMLElement, moveHandler?: ((left: number, top: number) => void) | undefined) => (() => void);
