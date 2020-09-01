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
    V1beta1RoleRef,
    V1beta1RoleRefFromJSON,
    V1beta1RoleRefFromJSONTyped,
    V1beta1RoleRefToJSON,
    V1beta1Subject,
    V1beta1SubjectFromJSON,
    V1beta1SubjectFromJSONTyped,
    V1beta1SubjectToJSON,
} from './';

/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 RoleBinding, and will no longer be served in v1.20.
 * @export
 * @interface V1beta1RoleBinding
 */
export interface V1beta1RoleBinding {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1RoleBinding
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1RoleBinding
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1beta1RoleBinding
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1beta1RoleRef}
     * @memberof V1beta1RoleBinding
     */
    roleRef: V1beta1RoleRef;
    /**
     * Subjects holds references to the objects the role applies to.
     * @type {Array<V1beta1Subject>}
     * @memberof V1beta1RoleBinding
     */
    subjects?: Array<V1beta1Subject>;
}

export function V1beta1RoleBindingFromJSON(json: any): V1beta1RoleBinding {
    return V1beta1RoleBindingFromJSONTyped(json, false);
}

export function V1beta1RoleBindingFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1RoleBinding {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'roleRef': V1beta1RoleRefFromJSON(json['roleRef']),
        'subjects': !exists(json, 'subjects') ? undefined : ((json['subjects'] as Array<any>).map(V1beta1SubjectFromJSON)),
    };
}

export function V1beta1RoleBindingToJSON(value?: V1beta1RoleBinding | null): any {
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
        'roleRef': V1beta1RoleRefToJSON(value.roleRef),
        'subjects': value.subjects === undefined ? undefined : ((value.subjects as Array<any>).map(V1beta1SubjectToJSON)),
    };
}


