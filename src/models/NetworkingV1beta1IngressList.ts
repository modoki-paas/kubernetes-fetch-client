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
    NetworkingV1beta1Ingress,
    NetworkingV1beta1IngressFromJSON,
    NetworkingV1beta1IngressFromJSONTyped,
    NetworkingV1beta1IngressToJSON,
    V1ListMeta,
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
} from './';

/**
 * IngressList is a collection of Ingress.
 * @export
 * @interface NetworkingV1beta1IngressList
 */
export interface NetworkingV1beta1IngressList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof NetworkingV1beta1IngressList
     */
    apiVersion?: string;
    /**
     * Items is the list of Ingress.
     * @type {Array<NetworkingV1beta1Ingress>}
     * @memberof NetworkingV1beta1IngressList
     */
    items: Array<NetworkingV1beta1Ingress>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof NetworkingV1beta1IngressList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof NetworkingV1beta1IngressList
     */
    metadata?: V1ListMeta;
}

export function NetworkingV1beta1IngressListFromJSON(json: any): NetworkingV1beta1IngressList {
    return NetworkingV1beta1IngressListFromJSONTyped(json, false);
}

export function NetworkingV1beta1IngressListFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkingV1beta1IngressList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(NetworkingV1beta1IngressFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function NetworkingV1beta1IngressListToJSON(value?: NetworkingV1beta1IngressList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(NetworkingV1beta1IngressToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}


