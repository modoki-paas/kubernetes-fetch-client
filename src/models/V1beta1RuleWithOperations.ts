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
/**
 * RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid.
 * @export
 * @interface V1beta1RuleWithOperations
 */
export interface V1beta1RuleWithOperations {
    /**
     * APIGroups is the API groups the resources belong to. '*' is all groups. If '*' is present, the length of the slice must be one. Required.
     * @type {Array<string>}
     * @memberof V1beta1RuleWithOperations
     */
    apiGroups?: Array<string>;
    /**
     * APIVersions is the API versions the resources belong to. '*' is all versions. If '*' is present, the length of the slice must be one. Required.
     * @type {Array<string>}
     * @memberof V1beta1RuleWithOperations
     */
    apiVersions?: Array<string>;
    /**
     * Operations is the operations the admission hook cares about - CREATE, UPDATE, or * for all operations. If '*' is present, the length of the slice must be one. Required.
     * @type {Array<string>}
     * @memberof V1beta1RuleWithOperations
     */
    operations?: Array<string>;
    /**
     * Resources is a list of resources this rule applies to.
     * 
     * For example: 'pods' means pods. 'pods/log' means the log subresource of pods. '*' means all resources, but not subresources. 'pods/*' means all subresources of pods. '*/scale' means all scale subresources. '*/*' means all resources and their subresources.
     * 
     * If wildcard is present, the validation rule will ensure resources do not overlap with each other.
     * 
     * Depending on the enclosing object, subresources might not be allowed. Required.
     * @type {Array<string>}
     * @memberof V1beta1RuleWithOperations
     */
    resources?: Array<string>;
    /**
     * scope specifies the scope of this rule. Valid values are "Cluster", "Namespaced", and "*" "Cluster" means that only cluster-scoped resources will match this rule. Namespace API objects are cluster-scoped. "Namespaced" means that only namespaced resources will match this rule. "*" means that there are no scope restrictions. Subresources match the scope of their parent resource. Default is "*".
     * @type {string}
     * @memberof V1beta1RuleWithOperations
     */
    scope?: string;
}

export function V1beta1RuleWithOperationsFromJSON(json: any): V1beta1RuleWithOperations {
    return V1beta1RuleWithOperationsFromJSONTyped(json, false);
}

export function V1beta1RuleWithOperationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1RuleWithOperations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiGroups': !exists(json, 'apiGroups') ? undefined : json['apiGroups'],
        'apiVersions': !exists(json, 'apiVersions') ? undefined : json['apiVersions'],
        'operations': !exists(json, 'operations') ? undefined : json['operations'],
        'resources': !exists(json, 'resources') ? undefined : json['resources'],
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
    };
}

export function V1beta1RuleWithOperationsToJSON(value?: V1beta1RuleWithOperations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiGroups': value.apiGroups,
        'apiVersions': value.apiVersions,
        'operations': value.operations,
        'resources': value.resources,
        'scope': value.scope,
    };
}

