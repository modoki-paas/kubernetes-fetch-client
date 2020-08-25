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
    V1PodAffinityTerm,
    V1PodAffinityTermFromJSON,
    V1PodAffinityTermFromJSONTyped,
    V1PodAffinityTermToJSON,
    V1WeightedPodAffinityTerm,
    V1WeightedPodAffinityTermFromJSON,
    V1WeightedPodAffinityTermFromJSONTyped,
    V1WeightedPodAffinityTermToJSON,
} from './';

/**
 * Pod affinity is a group of inter pod affinity scheduling rules.
 * @export
 * @interface V1PodAffinity
 */
export interface V1PodAffinity {
    /**
     * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
     * @type {Array<V1WeightedPodAffinityTerm>}
     * @memberof V1PodAffinity
     */
    preferredDuringSchedulingIgnoredDuringExecution?: Array<V1WeightedPodAffinityTerm>;
    /**
     * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
     * @type {Array<V1PodAffinityTerm>}
     * @memberof V1PodAffinity
     */
    requiredDuringSchedulingIgnoredDuringExecution?: Array<V1PodAffinityTerm>;
}

export function V1PodAffinityFromJSON(json: any): V1PodAffinity {
    return V1PodAffinityFromJSONTyped(json, false);
}

export function V1PodAffinityFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PodAffinity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'preferredDuringSchedulingIgnoredDuringExecution': !exists(json, 'preferredDuringSchedulingIgnoredDuringExecution') ? undefined : ((json['preferredDuringSchedulingIgnoredDuringExecution'] as Array<any>).map(V1WeightedPodAffinityTermFromJSON)),
        'requiredDuringSchedulingIgnoredDuringExecution': !exists(json, 'requiredDuringSchedulingIgnoredDuringExecution') ? undefined : ((json['requiredDuringSchedulingIgnoredDuringExecution'] as Array<any>).map(V1PodAffinityTermFromJSON)),
    };
}

export function V1PodAffinityToJSON(value?: V1PodAffinity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'preferredDuringSchedulingIgnoredDuringExecution': value.preferredDuringSchedulingIgnoredDuringExecution === undefined ? undefined : ((value.preferredDuringSchedulingIgnoredDuringExecution as Array<any>).map(V1WeightedPodAffinityTermToJSON)),
        'requiredDuringSchedulingIgnoredDuringExecution': value.requiredDuringSchedulingIgnoredDuringExecution === undefined ? undefined : ((value.requiredDuringSchedulingIgnoredDuringExecution as Array<any>).map(V1PodAffinityTermToJSON)),
    };
}


