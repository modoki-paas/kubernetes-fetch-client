/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.18.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V1LoadBalancerStatus,
    V1LoadBalancerStatusFromJSON,
    V1LoadBalancerStatusFromJSONTyped,
    V1LoadBalancerStatusToJSON,
} from './';

/**
 * IngressStatus describe the current state of the Ingress.
 * @export
 * @interface ExtensionsV1beta1IngressStatus
 */
export interface ExtensionsV1beta1IngressStatus {
    /**
     * 
     * @type {V1LoadBalancerStatus}
     * @memberof ExtensionsV1beta1IngressStatus
     */
    loadBalancer?: V1LoadBalancerStatus;
}

export function ExtensionsV1beta1IngressStatusFromJSON(json: any): ExtensionsV1beta1IngressStatus {
    return ExtensionsV1beta1IngressStatusFromJSONTyped(json, false);
}

export function ExtensionsV1beta1IngressStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtensionsV1beta1IngressStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'loadBalancer': !exists(json, 'loadBalancer') ? undefined : V1LoadBalancerStatusFromJSON(json['loadBalancer']),
    };
}

export function ExtensionsV1beta1IngressStatusToJSON(value?: ExtensionsV1beta1IngressStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'loadBalancer': V1LoadBalancerStatusToJSON(value.loadBalancer),
    };
}


