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
    V1alpha1RoleBinding,
    V1alpha1RoleBindingFromJSON,
    V1alpha1RoleBindingFromJSONTyped,
    V1alpha1RoleBindingToJSON,
} from './';

/**
 * RoleBindingList is a collection of RoleBindings Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 RoleBindingList, and will no longer be served in v1.20.
 * @export
 * @interface V1alpha1RoleBindingList
 */
export interface V1alpha1RoleBindingList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1alpha1RoleBindingList
     */
    apiVersion?: string;
    /**
     * Items is a list of RoleBindings
     * @type {Array<V1alpha1RoleBinding>}
     * @memberof V1alpha1RoleBindingList
     */
    items: Array<V1alpha1RoleBinding>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1alpha1RoleBindingList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1alpha1RoleBindingList
     */
    metadata?: V1ListMeta;
}

export function V1alpha1RoleBindingListFromJSON(json: any): V1alpha1RoleBindingList {
    return V1alpha1RoleBindingListFromJSONTyped(json, false);
}

export function V1alpha1RoleBindingListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1RoleBindingList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1alpha1RoleBindingFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1alpha1RoleBindingListToJSON(value?: V1alpha1RoleBindingList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1alpha1RoleBindingToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}


