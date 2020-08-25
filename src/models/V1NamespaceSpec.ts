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
 * NamespaceSpec describes the attributes on a Namespace.
 * @export
 * @interface V1NamespaceSpec
 */
export interface V1NamespaceSpec {
    /**
     * Finalizers is an opaque list of values that must be empty to permanently remove object from storage. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
     * @type {Array<string>}
     * @memberof V1NamespaceSpec
     */
    finalizers?: Array<string>;
}

export function V1NamespaceSpecFromJSON(json: any): V1NamespaceSpec {
    return V1NamespaceSpecFromJSONTyped(json, false);
}

export function V1NamespaceSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NamespaceSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'finalizers': !exists(json, 'finalizers') ? undefined : json['finalizers'],
    };
}

export function V1NamespaceSpecToJSON(value?: V1NamespaceSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'finalizers': value.finalizers,
    };
}


