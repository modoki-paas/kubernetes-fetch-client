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
    NetworkingV1beta1IngressSpec,
    NetworkingV1beta1IngressSpecFromJSON,
    NetworkingV1beta1IngressSpecFromJSONTyped,
    NetworkingV1beta1IngressSpecToJSON,
    NetworkingV1beta1IngressStatus,
    NetworkingV1beta1IngressStatusFromJSON,
    NetworkingV1beta1IngressStatusFromJSONTyped,
    NetworkingV1beta1IngressStatusToJSON,
    V1ObjectMeta,
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './';

/**
 * Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
 * @export
 * @interface NetworkingV1beta1Ingress
 */
export interface NetworkingV1beta1Ingress {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof NetworkingV1beta1Ingress
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof NetworkingV1beta1Ingress
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof NetworkingV1beta1Ingress
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {NetworkingV1beta1IngressSpec}
     * @memberof NetworkingV1beta1Ingress
     */
    spec?: NetworkingV1beta1IngressSpec;
    /**
     * 
     * @type {NetworkingV1beta1IngressStatus}
     * @memberof NetworkingV1beta1Ingress
     */
    status?: NetworkingV1beta1IngressStatus;
}

export function NetworkingV1beta1IngressFromJSON(json: any): NetworkingV1beta1Ingress {
    return NetworkingV1beta1IngressFromJSONTyped(json, false);
}

export function NetworkingV1beta1IngressFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkingV1beta1Ingress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : NetworkingV1beta1IngressSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : NetworkingV1beta1IngressStatusFromJSON(json['status']),
    };
}

export function NetworkingV1beta1IngressToJSON(value?: NetworkingV1beta1Ingress | null): any {
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
        'spec': NetworkingV1beta1IngressSpecToJSON(value.spec),
        'status': NetworkingV1beta1IngressStatusToJSON(value.status),
    };
}


