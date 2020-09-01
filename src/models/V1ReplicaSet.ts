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
    V1ReplicaSetSpec,
    V1ReplicaSetSpecFromJSON,
    V1ReplicaSetSpecFromJSONTyped,
    V1ReplicaSetSpecToJSON,
    V1ReplicaSetStatus,
    V1ReplicaSetStatusFromJSON,
    V1ReplicaSetStatusFromJSONTyped,
    V1ReplicaSetStatusToJSON,
} from './';

/**
 * ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 * @export
 * @interface V1ReplicaSet
 */
export interface V1ReplicaSet {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1ReplicaSet
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1ReplicaSet
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1ReplicaSet
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1ReplicaSetSpec}
     * @memberof V1ReplicaSet
     */
    spec?: V1ReplicaSetSpec;
    /**
     * 
     * @type {V1ReplicaSetStatus}
     * @memberof V1ReplicaSet
     */
    status?: V1ReplicaSetStatus;
}

export function V1ReplicaSetFromJSON(json: any): V1ReplicaSet {
    return V1ReplicaSetFromJSONTyped(json, false);
}

export function V1ReplicaSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ReplicaSet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : V1ReplicaSetSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1ReplicaSetStatusFromJSON(json['status']),
    };
}

export function V1ReplicaSetToJSON(value?: V1ReplicaSet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': V1ObjectMetaToJSON(value.metadata),
        'spec': V1ReplicaSetSpecToJSON(value.spec),
        'status': V1ReplicaSetStatusToJSON(value.status),
    };
}


