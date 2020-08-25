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
/**
 * VolumeNodeResources is a set of resource limits for scheduling of volumes.
 * @export
 * @interface V1beta1VolumeNodeResources
 */
export interface V1beta1VolumeNodeResources {
    /**
     * Maximum number of unique volumes managed by the CSI driver that can be used on a node. A volume that is both attached and mounted on a node is considered to be used once, not twice. The same rule applies for a unique volume that is shared among multiple pods on the same node. If this field is nil, then the supported number of volumes on this node is unbounded.
     * @type {number}
     * @memberof V1beta1VolumeNodeResources
     */
    count?: number;
}

export function V1beta1VolumeNodeResourcesFromJSON(json: any): V1beta1VolumeNodeResources {
    return V1beta1VolumeNodeResourcesFromJSONTyped(json, false);
}

export function V1beta1VolumeNodeResourcesFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1VolumeNodeResources {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
    };
}

export function V1beta1VolumeNodeResourcesToJSON(value?: V1beta1VolumeNodeResources | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
    };
}


