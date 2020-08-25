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
    V1ObjectMeta,
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
    V1alpha1AuditSinkSpec,
    V1alpha1AuditSinkSpecFromJSON,
    V1alpha1AuditSinkSpecFromJSONTyped,
    V1alpha1AuditSinkSpecToJSON,
} from './';

/**
 * AuditSink represents a cluster level audit sink
 * @export
 * @interface V1alpha1AuditSink
 */
export interface V1alpha1AuditSink {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1alpha1AuditSink
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1alpha1AuditSink
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1alpha1AuditSink
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1alpha1AuditSinkSpec}
     * @memberof V1alpha1AuditSink
     */
    spec?: V1alpha1AuditSinkSpec;
}

export function V1alpha1AuditSinkFromJSON(json: any): V1alpha1AuditSink {
    return V1alpha1AuditSinkFromJSONTyped(json, false);
}

export function V1alpha1AuditSinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1AuditSink {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : V1alpha1AuditSinkSpecFromJSON(json['spec']),
    };
}

export function V1alpha1AuditSinkToJSON(value?: V1alpha1AuditSink | null): any {
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
        'spec': V1alpha1AuditSinkSpecToJSON(value.spec),
    };
}


