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
    V1ListMeta,
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
    V1VolumeAttachment,
    V1VolumeAttachmentFromJSON,
    V1VolumeAttachmentFromJSONTyped,
    V1VolumeAttachmentToJSON,
} from './';

/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 * @export
 * @interface V1VolumeAttachmentList
 */
export interface V1VolumeAttachmentList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1VolumeAttachmentList
     */
    apiVersion?: string;
    /**
     * Items is the list of VolumeAttachments
     * @type {Array<V1VolumeAttachment>}
     * @memberof V1VolumeAttachmentList
     */
    items: Array<V1VolumeAttachment>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1VolumeAttachmentList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1VolumeAttachmentList
     */
    metadata?: V1ListMeta;
}

export function V1VolumeAttachmentListFromJSON(json: any): V1VolumeAttachmentList {
    return V1VolumeAttachmentListFromJSONTyped(json, false);
}

export function V1VolumeAttachmentListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VolumeAttachmentList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1VolumeAttachmentFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1VolumeAttachmentListToJSON(value?: V1VolumeAttachmentList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1VolumeAttachmentToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}


