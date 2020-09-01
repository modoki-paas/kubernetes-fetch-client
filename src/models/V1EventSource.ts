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
 * EventSource contains information for an event.
 * @export
 * @interface V1EventSource
 */
export interface V1EventSource {
    /**
     * Component from which the event is generated.
     * @type {string}
     * @memberof V1EventSource
     */
    component?: string;
    /**
     * Node name on which the event is generated.
     * @type {string}
     * @memberof V1EventSource
     */
    host?: string;
}

export function V1EventSourceFromJSON(json: any): V1EventSource {
    return V1EventSourceFromJSONTyped(json, false);
}

export function V1EventSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EventSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'component': !exists(json, 'component') ? undefined : json['component'],
        'host': !exists(json, 'host') ? undefined : json['host'],
    };
}

export function V1EventSourceToJSON(value?: V1EventSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'component': value.component,
        'host': value.host,
    };
}


