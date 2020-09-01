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
 * PodDNSConfigOption defines DNS resolver options of a pod.
 * @export
 * @interface V1PodDNSConfigOption
 */
export interface V1PodDNSConfigOption {
    /**
     * Required.
     * @type {string}
     * @memberof V1PodDNSConfigOption
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V1PodDNSConfigOption
     */
    value?: string;
}

export function V1PodDNSConfigOptionFromJSON(json: any): V1PodDNSConfigOption {
    return V1PodDNSConfigOptionFromJSONTyped(json, false);
}

export function V1PodDNSConfigOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PodDNSConfigOption {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function V1PodDNSConfigOptionToJSON(value?: V1PodDNSConfigOption | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': value.value,
    };
}


