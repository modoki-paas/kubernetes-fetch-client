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
    V1NamespaceCondition,
    V1NamespaceConditionFromJSON,
    V1NamespaceConditionFromJSONTyped,
    V1NamespaceConditionToJSON,
} from './';

/**
 * NamespaceStatus is information about the current status of a Namespace.
 * @export
 * @interface V1NamespaceStatus
 */
export interface V1NamespaceStatus {
    /**
     * Represents the latest available observations of a namespace's current state.
     * @type {Array<V1NamespaceCondition>}
     * @memberof V1NamespaceStatus
     */
    conditions?: Array<V1NamespaceCondition>;
    /**
     * Phase is the current lifecycle phase of the namespace. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
     * @type {string}
     * @memberof V1NamespaceStatus
     */
    phase?: string;
}

export function V1NamespaceStatusFromJSON(json: any): V1NamespaceStatus {
    return V1NamespaceStatusFromJSONTyped(json, false);
}

export function V1NamespaceStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NamespaceStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(V1NamespaceConditionFromJSON)),
        'phase': !exists(json, 'phase') ? undefined : json['phase'],
    };
}

export function V1NamespaceStatusToJSON(value?: V1NamespaceStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(V1NamespaceConditionToJSON)),
        'phase': value.phase,
    };
}


