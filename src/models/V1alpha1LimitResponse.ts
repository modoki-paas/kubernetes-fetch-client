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
    V1alpha1QueuingConfiguration,
    V1alpha1QueuingConfigurationFromJSON,
    V1alpha1QueuingConfigurationFromJSONTyped,
    V1alpha1QueuingConfigurationToJSON,
} from './';

/**
 * LimitResponse defines how to handle requests that can not be executed right now.
 * @export
 * @interface V1alpha1LimitResponse
 */
export interface V1alpha1LimitResponse {
    /**
     * 
     * @type {V1alpha1QueuingConfiguration}
     * @memberof V1alpha1LimitResponse
     */
    queuing?: V1alpha1QueuingConfiguration;
    /**
     * `type` is "Queue" or "Reject". "Queue" means that requests that can not be executed upon arrival are held in a queue until they can be executed or a queuing limit is reached. "Reject" means that requests that can not be executed upon arrival are rejected. Required.
     * @type {string}
     * @memberof V1alpha1LimitResponse
     */
    type: string;
}

export function V1alpha1LimitResponseFromJSON(json: any): V1alpha1LimitResponse {
    return V1alpha1LimitResponseFromJSONTyped(json, false);
}

export function V1alpha1LimitResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1LimitResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'queuing': !exists(json, 'queuing') ? undefined : V1alpha1QueuingConfigurationFromJSON(json['queuing']),
        'type': json['type'],
    };
}

export function V1alpha1LimitResponseToJSON(value?: V1alpha1LimitResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'queuing': V1alpha1QueuingConfigurationToJSON(value.queuing),
        'type': value.type,
    };
}

