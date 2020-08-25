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
    V1StorageClass,
    V1StorageClassFromJSON,
    V1StorageClassFromJSONTyped,
    V1StorageClassToJSON,
} from './';

/**
 * StorageClassList is a collection of storage classes.
 * @export
 * @interface V1StorageClassList
 */
export interface V1StorageClassList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1StorageClassList
     */
    apiVersion?: string;
    /**
     * Items is the list of StorageClasses
     * @type {Array<V1StorageClass>}
     * @memberof V1StorageClassList
     */
    items: Array<V1StorageClass>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1StorageClassList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1StorageClassList
     */
    metadata?: V1ListMeta;
}

export function V1StorageClassListFromJSON(json: any): V1StorageClassList {
    return V1StorageClassListFromJSONTyped(json, false);
}

export function V1StorageClassListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1StorageClassList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1StorageClassFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1StorageClassListToJSON(value?: V1StorageClassList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1StorageClassToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}

