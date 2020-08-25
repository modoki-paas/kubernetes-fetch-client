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
    V1alpha1AggregationRule,
    V1alpha1AggregationRuleFromJSON,
    V1alpha1AggregationRuleFromJSONTyped,
    V1alpha1AggregationRuleToJSON,
    V1alpha1PolicyRule,
    V1alpha1PolicyRuleFromJSON,
    V1alpha1PolicyRuleFromJSONTyped,
    V1alpha1PolicyRuleToJSON,
} from './';

/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRole, and will no longer be served in v1.20.
 * @export
 * @interface V1alpha1ClusterRole
 */
export interface V1alpha1ClusterRole {
    /**
     * 
     * @type {V1alpha1AggregationRule}
     * @memberof V1alpha1ClusterRole
     */
    aggregationRule?: V1alpha1AggregationRule;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1alpha1ClusterRole
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1alpha1ClusterRole
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1alpha1ClusterRole
     */
    metadata?: V1ObjectMeta;
    /**
     * Rules holds all the PolicyRules for this ClusterRole
     * @type {Array<V1alpha1PolicyRule>}
     * @memberof V1alpha1ClusterRole
     */
    rules?: Array<V1alpha1PolicyRule>;
}

export function V1alpha1ClusterRoleFromJSON(json: any): V1alpha1ClusterRole {
    return V1alpha1ClusterRoleFromJSONTyped(json, false);
}

export function V1alpha1ClusterRoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1ClusterRole {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aggregationRule': !exists(json, 'aggregationRule') ? undefined : V1alpha1AggregationRuleFromJSON(json['aggregationRule']),
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'rules': !exists(json, 'rules') ? undefined : ((json['rules'] as Array<any>).map(V1alpha1PolicyRuleFromJSON)),
    };
}

export function V1alpha1ClusterRoleToJSON(value?: V1alpha1ClusterRole | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aggregationRule': V1alpha1AggregationRuleToJSON(value.aggregationRule),
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': V1ObjectMetaToJSON(value.metadata),
        'rules': value.rules === undefined ? undefined : ((value.rules as Array<any>).map(V1alpha1PolicyRuleToJSON)),
    };
}


