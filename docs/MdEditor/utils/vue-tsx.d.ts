import { ComponentPublicInstance, SetupContext, EmitsOptions } from 'vue';
/**
 * 获取指定插槽内容
 * 方法设定：vue组件中v-slot优先级高于props
 *
 * @param param0 组件实例instance，SetupContext（setup二入参），props
 * @param name 插槽名或者props名
 * @returns VNode
 */
export declare const getSlot: ({ instance, ctx, props }: {
    instance?: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | undefined;
    ctx?: SetupContext<EmitsOptions> | undefined;
    props?: any;
}, name?: string) => any;
