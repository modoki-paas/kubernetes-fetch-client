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
    V1alpha1FlowSchema,
    V1alpha1FlowSchemaFromJSON,
    V1alpha1FlowSchemaFromJSONTyped,
    V1alpha1FlowSchemaToJSON,
} from './';

/**
 * FlowSchemaList is a list of FlowSchema objects.
 * @export
 * @interface V1alpha1FlowSchemaList
 */
export interface V1alpha1FlowSchemaList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1alpha1FlowSchemaList
     */
    apiVersion?: string;
    /**
     * `items` is a list of FlowSchemas.
     * @type {Array<V1alpha1FlowSchema>}
     * @memberof V1alpha1FlowSchemaList
     */
    items: Array<V1alpha1FlowSchema>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1alpha1FlowSchemaList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1alpha1FlowSchemaList
     */
    metadata?: V1ListMeta;
}

export function V1alpha1FlowSchemaListFromJSON(json: any): V1alpha1FlowSchemaList {
    return V1alpha1FlowSchemaListFromJSONTyped(json, false);
}

export function V1alpha1FlowSchemaListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1FlowSchemaList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1alpha1FlowSchemaFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1alpha1FlowSchemaListToJSON(value?: V1alpha1FlowSchemaList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1alpha1FlowSchemaToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}

