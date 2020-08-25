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
    V1ListMeta,
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
    V1alpha1PodPreset,
    V1alpha1PodPresetFromJSON,
    V1alpha1PodPresetFromJSONTyped,
    V1alpha1PodPresetToJSON,
} from './';

/**
 * PodPresetList is a list of PodPreset objects.
 * @export
 * @interface V1alpha1PodPresetList
 */
export interface V1alpha1PodPresetList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1alpha1PodPresetList
     */
    apiVersion?: string;
    /**
     * Items is a list of schema objects.
     * @type {Array<V1alpha1PodPreset>}
     * @memberof V1alpha1PodPresetList
     */
    items: Array<V1alpha1PodPreset>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1alpha1PodPresetList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1alpha1PodPresetList
     */
    metadata?: V1ListMeta;
}

export function V1alpha1PodPresetListFromJSON(json: any): V1alpha1PodPresetList {
    return V1alpha1PodPresetListFromJSONTyped(json, false);
}

export function V1alpha1PodPresetListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1PodPresetList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1alpha1PodPresetFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1alpha1PodPresetListToJSON(value?: V1alpha1PodPresetList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1alpha1PodPresetToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}

