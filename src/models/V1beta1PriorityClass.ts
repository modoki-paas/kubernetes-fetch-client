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
import {
    V1ObjectMeta,
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './';

/**
 * DEPRECATED - This group version of PriorityClass is deprecated by scheduling.k8s.io/v1/PriorityClass. PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 * @export
 * @interface V1beta1PriorityClass
 */
export interface V1beta1PriorityClass {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1PriorityClass
     */
    apiVersion?: string;
    /**
     * description is an arbitrary string that usually provides guidelines on when this priority class should be used.
     * @type {string}
     * @memberof V1beta1PriorityClass
     */
    description?: string;
    /**
     * globalDefault specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. Only one PriorityClass can be marked as `globalDefault`. However, if more than one PriorityClasses exists with their `globalDefault` field set to true, the smallest value of such global default PriorityClasses will be used as the default priority.
     * @type {boolean}
     * @memberof V1beta1PriorityClass
     */
    globalDefault?: boolean;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1PriorityClass
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1beta1PriorityClass
     */
    metadata?: V1ObjectMeta;
    /**
     * PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. This field is alpha-level and is only honored by servers that enable the NonPreemptingPriority feature.
     * @type {string}
     * @memberof V1beta1PriorityClass
     */
    preemptionPolicy?: string;
    /**
     * The value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec.
     * @type {number}
     * @memberof V1beta1PriorityClass
     */
    value: number;
}

export function V1beta1PriorityClassFromJSON(json: any): V1beta1PriorityClass {
    return V1beta1PriorityClassFromJSONTyped(json, false);
}

export function V1beta1PriorityClassFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1PriorityClass {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'globalDefault': !exists(json, 'globalDefault') ? undefined : json['globalDefault'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'preemptionPolicy': !exists(json, 'preemptionPolicy') ? undefined : json['preemptionPolicy'],
        'value': json['value'],
    };
}

export function V1beta1PriorityClassToJSON(value?: V1beta1PriorityClass | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'description': value.description,
        'globalDefault': value.globalDefault,
        'kind': value.kind,
        'metadata': V1ObjectMetaToJSON(value.metadata),
        'preemptionPolicy': value.preemptionPolicy,
        'value': value.value,
    };
}


