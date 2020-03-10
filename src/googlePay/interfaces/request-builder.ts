/**
 * Mounts a request of Type T 
 * @returns {T} request
 */
export interface RequestBuilder<T> {
    getRequest(): T;
}