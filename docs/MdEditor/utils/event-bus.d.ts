export interface BusEvent {
    name: string;
    callback: (p?: any, p2?: any) => any;
}
declare class Bus {
    pools: {
        [key: string]: Array<(p?: any) => any>;
    };
    remove(name: string, func: (p?: any) => any): void;
    on(event: BusEvent): boolean;
    emit(name: string, ...params: any): void;
}
declare const _default: Bus;
export default _default;
