declare type IAPIResponseGeneric<T> = {
    status: number;
    error?: string | null;
    data?: T
}