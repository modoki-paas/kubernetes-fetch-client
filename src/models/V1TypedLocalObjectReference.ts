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
/**
 * TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
 * @export
 * @interface V1TypedLocalObjectReference
 */
export interface V1TypedLocalObjectReference {
    /**
     * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
     * @type {string}
     * @memberof V1TypedLocalObjectReference
     */
    apiGroup?: string;
    /**
     * Kind is the type of resource being referenced
     * @type {string}
     * @memberof V1TypedLocalObjectReference
     */
    kind: string;
    /**
     * Name is the name of resource being referenced
     * @type {string}
     * @memberof V1TypedLocalObjectReference
     */
    name: string;
}

export function V1TypedLocalObjectReferenceFromJSON(json: any): V1TypedLocalObjectReference {
    return V1TypedLocalObjectReferenceFromJSONTyped(json, false);
}

export function V1TypedLocalObjectReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1TypedLocalObjectReference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiGroup': !exists(json, 'apiGroup') ? undefined : json['apiGroup'],
        'kind': json['kind'],
        'name': json['name'],
    };
}

export function V1TypedLocalObjectReferenceToJSON(value?: V1TypedLocalObjectReference | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiGroup': value.apiGroup,
        'kind': value.kind,
        'name': value.name,
    };
}


