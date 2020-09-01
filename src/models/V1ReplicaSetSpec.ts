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
    V1LabelSelector,
    V1LabelSelectorFromJSON,
    V1LabelSelectorFromJSONTyped,
    V1LabelSelectorToJSON,
    V1PodTemplateSpec,
    V1PodTemplateSpecFromJSON,
    V1PodTemplateSpecFromJSONTyped,
    V1PodTemplateSpecToJSON,
} from './';

/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 * @export
 * @interface V1ReplicaSetSpec
 */
export interface V1ReplicaSetSpec {
    /**
     * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
     * @type {number}
     * @memberof V1ReplicaSetSpec
     */
    minReadySeconds?: number;
    /**
     * Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
     * @type {number}
     * @memberof V1ReplicaSetSpec
     */
    replicas?: number;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V1ReplicaSetSpec
     */
    selector: V1LabelSelector;
    /**
     * 
     * @type {V1PodTemplateSpec}
     * @memberof V1ReplicaSetSpec
     */
    template?: V1PodTemplateSpec;
}

export function V1ReplicaSetSpecFromJSON(json: any): V1ReplicaSetSpec {
    return V1ReplicaSetSpecFromJSONTyped(json, false);
}

export function V1ReplicaSetSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ReplicaSetSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'minReadySeconds': !exists(json, 'minReadySeconds') ? undefined : json['minReadySeconds'],
        'replicas': !exists(json, 'replicas') ? undefined : json['replicas'],
        'selector': V1LabelSelectorFromJSON(json['selector']),
        'template': !exists(json, 'template') ? undefined : V1PodTemplateSpecFromJSON(json['template']),
    };
}

export function V1ReplicaSetSpecToJSON(value?: V1ReplicaSetSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'minReadySeconds': value.minReadySeconds,
        'replicas': value.replicas,
        'selector': V1LabelSelectorToJSON(value.selector),
        'template': V1PodTemplateSpecToJSON(value.template),
    };
}


