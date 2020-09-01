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
    DevTsuzuModokiV1alpha1ApplicationListMetadata,
    DevTsuzuModokiV1alpha1ApplicationListMetadataFromJSON,
    DevTsuzuModokiV1alpha1ApplicationListMetadataFromJSONTyped,
    DevTsuzuModokiV1alpha1ApplicationListMetadataToJSON,
} from './';

/**
 * ApplicationList is a list of Application
 * @export
 * @interface DevTsuzuModokiV1alpha1ApplicationList
 */
export interface DevTsuzuModokiV1alpha1ApplicationList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof DevTsuzuModokiV1alpha1ApplicationList
     */
    apiVersion?: string;
    /**
     * List of applications. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
     * @type {Array<object>}
     * @memberof DevTsuzuModokiV1alpha1ApplicationList
     */
    items: Array<object>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof DevTsuzuModokiV1alpha1ApplicationList
     */
    kind?: string;
    /**
     * 
     * @type {DevTsuzuModokiV1alpha1ApplicationListMetadata}
     * @memberof DevTsuzuModokiV1alpha1ApplicationList
     */
    metadata?: DevTsuzuModokiV1alpha1ApplicationListMetadata;
}

export function DevTsuzuModokiV1alpha1ApplicationListFromJSON(json: any): DevTsuzuModokiV1alpha1ApplicationList {
    return DevTsuzuModokiV1alpha1ApplicationListFromJSONTyped(json, false);
}

export function DevTsuzuModokiV1alpha1ApplicationListFromJSONTyped(json: any, ignoreDiscriminator: boolean): DevTsuzuModokiV1alpha1ApplicationList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': json['items'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : DevTsuzuModokiV1alpha1ApplicationListMetadataFromJSON(json['metadata']),
    };
}

export function DevTsuzuModokiV1alpha1ApplicationListToJSON(value?: DevTsuzuModokiV1alpha1ApplicationList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': value.items,
        'kind': value.kind,
        'metadata': DevTsuzuModokiV1alpha1ApplicationListMetadataToJSON(value.metadata),
    };
}


