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
    DevTsuzuModokiV1alpha1AppPipelineSpec,
    DevTsuzuModokiV1alpha1AppPipelineSpecFromJSON,
    DevTsuzuModokiV1alpha1AppPipelineSpecFromJSONTyped,
    DevTsuzuModokiV1alpha1AppPipelineSpecToJSON,
    DevTsuzuModokiV1alpha1AppPipelineStatus,
    DevTsuzuModokiV1alpha1AppPipelineStatusFromJSON,
    DevTsuzuModokiV1alpha1AppPipelineStatusFromJSONTyped,
    DevTsuzuModokiV1alpha1AppPipelineStatusToJSON,
    V1ObjectMeta,
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
} from './';

/**
 * AppPipeline is the Schema for the apppipelines API
 * @export
 * @interface DevTsuzuModokiV1alpha1AppPipeline
 */
export interface DevTsuzuModokiV1alpha1AppPipeline {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof DevTsuzuModokiV1alpha1AppPipeline
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof DevTsuzuModokiV1alpha1AppPipeline
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof DevTsuzuModokiV1alpha1AppPipeline
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {DevTsuzuModokiV1alpha1AppPipelineSpec}
     * @memberof DevTsuzuModokiV1alpha1AppPipeline
     */
    spec?: DevTsuzuModokiV1alpha1AppPipelineSpec;
    /**
     * 
     * @type {DevTsuzuModokiV1alpha1AppPipelineStatus}
     * @memberof DevTsuzuModokiV1alpha1AppPipeline
     */
    status?: DevTsuzuModokiV1alpha1AppPipelineStatus;
}

export function DevTsuzuModokiV1alpha1AppPipelineFromJSON(json: any): DevTsuzuModokiV1alpha1AppPipeline {
    return DevTsuzuModokiV1alpha1AppPipelineFromJSONTyped(json, false);
}

export function DevTsuzuModokiV1alpha1AppPipelineFromJSONTyped(json: any, ignoreDiscriminator: boolean): DevTsuzuModokiV1alpha1AppPipeline {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : DevTsuzuModokiV1alpha1AppPipelineSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : DevTsuzuModokiV1alpha1AppPipelineStatusFromJSON(json['status']),
    };
}

export function DevTsuzuModokiV1alpha1AppPipelineToJSON(value?: DevTsuzuModokiV1alpha1AppPipeline | null): any {
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
        'spec': DevTsuzuModokiV1alpha1AppPipelineSpecToJSON(value.spec),
        'status': DevTsuzuModokiV1alpha1AppPipelineStatusToJSON(value.status),
    };
}


