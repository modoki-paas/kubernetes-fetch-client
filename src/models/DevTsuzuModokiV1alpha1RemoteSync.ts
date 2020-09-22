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
    DevTsuzuModokiV1alpha1RemoteSyncSpec,
    DevTsuzuModokiV1alpha1RemoteSyncSpecFromJSON,
    DevTsuzuModokiV1alpha1RemoteSyncSpecFromJSONTyped,
    DevTsuzuModokiV1alpha1RemoteSyncSpecToJSON,
    DevTsuzuModokiV1alpha1RemoteSyncStatus,
    DevTsuzuModokiV1alpha1RemoteSyncStatusFromJSON,
    DevTsuzuModokiV1alpha1RemoteSyncStatusFromJSONTyped,
    DevTsuzuModokiV1alpha1RemoteSyncStatusToJSON,
    V1ObjectMeta,
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './';

/**
 * RemoteSync is the Schema for the remotesyncs API
 * @export
 * @interface DevTsuzuModokiV1alpha1RemoteSync
 */
export interface DevTsuzuModokiV1alpha1RemoteSync {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof DevTsuzuModokiV1alpha1RemoteSync
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof DevTsuzuModokiV1alpha1RemoteSync
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof DevTsuzuModokiV1alpha1RemoteSync
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {DevTsuzuModokiV1alpha1RemoteSyncSpec}
     * @memberof DevTsuzuModokiV1alpha1RemoteSync
     */
    spec?: DevTsuzuModokiV1alpha1RemoteSyncSpec;
    /**
     * 
     * @type {DevTsuzuModokiV1alpha1RemoteSyncStatus}
     * @memberof DevTsuzuModokiV1alpha1RemoteSync
     */
    status?: DevTsuzuModokiV1alpha1RemoteSyncStatus;
}

export function DevTsuzuModokiV1alpha1RemoteSyncFromJSON(json: any): DevTsuzuModokiV1alpha1RemoteSync {
    return DevTsuzuModokiV1alpha1RemoteSyncFromJSONTyped(json, false);
}

export function DevTsuzuModokiV1alpha1RemoteSyncFromJSONTyped(json: any, ignoreDiscriminator: boolean): DevTsuzuModokiV1alpha1RemoteSync {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : DevTsuzuModokiV1alpha1RemoteSyncSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : DevTsuzuModokiV1alpha1RemoteSyncStatusFromJSON(json['status']),
    };
}

export function DevTsuzuModokiV1alpha1RemoteSyncToJSON(value?: DevTsuzuModokiV1alpha1RemoteSync | null): any {
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
        'spec': DevTsuzuModokiV1alpha1RemoteSyncSpecToJSON(value.spec),
        'status': DevTsuzuModokiV1alpha1RemoteSyncStatusToJSON(value.status),
    };
}


