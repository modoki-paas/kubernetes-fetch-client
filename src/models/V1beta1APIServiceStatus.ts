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
    V1beta1APIServiceCondition,
    V1beta1APIServiceConditionFromJSON,
    V1beta1APIServiceConditionFromJSONTyped,
    V1beta1APIServiceConditionToJSON,
} from './';

/**
 * APIServiceStatus contains derived information about an API server
 * @export
 * @interface V1beta1APIServiceStatus
 */
export interface V1beta1APIServiceStatus {
    /**
     * Current service state of apiService.
     * @type {Array<V1beta1APIServiceCondition>}
     * @memberof V1beta1APIServiceStatus
     */
    conditions?: Array<V1beta1APIServiceCondition>;
}

export function V1beta1APIServiceStatusFromJSON(json: any): V1beta1APIServiceStatus {
    return V1beta1APIServiceStatusFromJSONTyped(json, false);
}

export function V1beta1APIServiceStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1APIServiceStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(V1beta1APIServiceConditionFromJSON)),
    };
}

export function V1beta1APIServiceStatusToJSON(value?: V1beta1APIServiceStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(V1beta1APIServiceConditionToJSON)),
    };
}


