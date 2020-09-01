/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.18.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * ContainerStateWaiting is a waiting state of a container.
 * @export
 * @interface V1ContainerStateWaiting
 */
export interface V1ContainerStateWaiting {
    /**
     * Message regarding why the container is not yet running.
     * @type {string}
     * @memberof V1ContainerStateWaiting
     */
    message?: string;
    /**
     * (brief) reason the container is not yet running.
     * @type {string}
     * @memberof V1ContainerStateWaiting
     */
    reason?: string;
}

export function V1ContainerStateWaitingFromJSON(json: any): V1ContainerStateWaiting {
    return V1ContainerStateWaitingFromJSONTyped(json, false);
}

export function V1ContainerStateWaitingFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ContainerStateWaiting {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
    };
}

export function V1ContainerStateWaitingToJSON(value?: V1ContainerStateWaiting | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'reason': value.reason,
    };
}


