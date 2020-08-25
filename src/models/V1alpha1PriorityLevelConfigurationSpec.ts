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
    V1alpha1LimitedPriorityLevelConfiguration,
    V1alpha1LimitedPriorityLevelConfigurationFromJSON,
    V1alpha1LimitedPriorityLevelConfigurationFromJSONTyped,
    V1alpha1LimitedPriorityLevelConfigurationToJSON,
} from './';

/**
 * PriorityLevelConfigurationSpec specifies the configuration of a priority level.
 * @export
 * @interface V1alpha1PriorityLevelConfigurationSpec
 */
export interface V1alpha1PriorityLevelConfigurationSpec {
    /**
     * 
     * @type {V1alpha1LimitedPriorityLevelConfiguration}
     * @memberof V1alpha1PriorityLevelConfigurationSpec
     */
    limited?: V1alpha1LimitedPriorityLevelConfiguration;
    /**
     * `type` indicates whether this priority level is subject to limitation on request execution.  A value of `"Exempt"` means that requests of this priority level are not subject to a limit (and thus are never queued) and do not detract from the capacity made available to other priority levels.  A value of `"Limited"` means that (a) requests of this priority level _are_ subject to limits and (b) some of the server's limited capacity is made available exclusively to this priority level. Required.
     * @type {string}
     * @memberof V1alpha1PriorityLevelConfigurationSpec
     */
    type: string;
}

export function V1alpha1PriorityLevelConfigurationSpecFromJSON(json: any): V1alpha1PriorityLevelConfigurationSpec {
    return V1alpha1PriorityLevelConfigurationSpecFromJSONTyped(json, false);
}

export function V1alpha1PriorityLevelConfigurationSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1PriorityLevelConfigurationSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'limited': !exists(json, 'limited') ? undefined : V1alpha1LimitedPriorityLevelConfigurationFromJSON(json['limited']),
        'type': json['type'],
    };
}

export function V1alpha1PriorityLevelConfigurationSpecToJSON(value?: V1alpha1PriorityLevelConfigurationSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'limited': V1alpha1LimitedPriorityLevelConfigurationToJSON(value.limited),
        'type': value.type,
    };
}

