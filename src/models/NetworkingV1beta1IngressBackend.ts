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
    V1TypedLocalObjectReference,
    V1TypedLocalObjectReferenceFromJSON,
    V1TypedLocalObjectReferenceFromJSONTyped,
    V1TypedLocalObjectReferenceToJSON,
} from './';

/**
 * IngressBackend describes all endpoints for a given service and port.
 * @export
 * @interface NetworkingV1beta1IngressBackend
 */
export interface NetworkingV1beta1IngressBackend {
    /**
     * 
     * @type {V1TypedLocalObjectReference}
     * @memberof NetworkingV1beta1IngressBackend
     */
    resource?: V1TypedLocalObjectReference;
    /**
     * Specifies the name of the referenced service.
     * @type {string}
     * @memberof NetworkingV1beta1IngressBackend
     */
    serviceName?: string;
    /**
     * Specifies the port of the referenced service.
     * @type {object}
     * @memberof NetworkingV1beta1IngressBackend
     */
    servicePort?: object;
}

export function NetworkingV1beta1IngressBackendFromJSON(json: any): NetworkingV1beta1IngressBackend {
    return NetworkingV1beta1IngressBackendFromJSONTyped(json, false);
}

export function NetworkingV1beta1IngressBackendFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkingV1beta1IngressBackend {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'resource': !exists(json, 'resource') ? undefined : V1TypedLocalObjectReferenceFromJSON(json['resource']),
        'serviceName': !exists(json, 'serviceName') ? undefined : json['serviceName'],
        'servicePort': !exists(json, 'servicePort') ? undefined : json['servicePort'],
    };
}

export function NetworkingV1beta1IngressBackendToJSON(value?: NetworkingV1beta1IngressBackend | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'resource': V1TypedLocalObjectReferenceToJSON(value.resource),
        'serviceName': value.serviceName,
        'servicePort': value.servicePort,
    };
}


