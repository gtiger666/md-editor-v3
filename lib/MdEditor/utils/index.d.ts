/**
 * created by zbf at 2019-12-13 10:24:20
 *
 * 设置foucs位置/选中元素
 *
 * @param tarDom 目标元素
 * @param startPos 选中开始位置
 * @param endPos 结束位置
 */
export declare const setPosition: (tarDom: HTMLInputElement | HTMLTextAreaElement, startPos?: number, endPos?: number) => void;
/**
 * created by zbf at 2019-12-13 09:56:23
 *
 * 从focus位置插入元素
 *
 * @param dom 需要插入的input或textarea元素
 * @param tarValue 插入的目标值
 * @param params 光标定位偏移
 * @returns 插入后的值
 */
export declare const insert: (dom: HTMLInputElement | HTMLTextAreaElement, tarValue: string, params: {
    deviationStart?: number;
    deviationEnd?: number;
    select?: boolean;
    direct?: boolean;
}) => string;
export declare type ToolDirective = 'bold' | 'underline' | 'italic' | 'strikeThrough' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'quote' | 'unorderedList' | 'orderedList' | 'codeRow' | 'code' | 'link' | 'image' | 'table' | 'sub' | 'sup' | 'help' | 'prettier';
export declare const directive2flag: (direct: ToolDirective, selectedText: string | undefined, inputArea: HTMLTextAreaElement, params?: any) => string;
/**
 * js模拟a链接点击
 *
 * @param {string} url 目标地址
 * @param {*} option 是否新窗口、是否要求不跟踪
 */
export declare const goto: (url: string, option?: {
    newWindow: boolean;
    nofollow: boolean;
}) => void;
/**
 * 两块区域同步滚动
 *
 * @param pEle 宿主区域
 * @param cEle 寄主区域
 * @returns 清除监听的方法
 */
export declare const scrollAuto: (pEle: HTMLElement, cEle: HTMLElement) => () => void;
