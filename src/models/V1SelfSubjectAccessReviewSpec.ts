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
    V1NonResourceAttributes,
    V1NonResourceAttributesFromJSON,
    V1NonResourceAttributesFromJSONTyped,
    V1NonResourceAttributesToJSON,
    V1ResourceAttributes,
    V1ResourceAttributesFromJSON,
    V1ResourceAttributesFromJSONTyped,
    V1ResourceAttributesToJSON,
} from './';

/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 * @export
 * @interface V1SelfSubjectAccessReviewSpec
 */
export interface V1SelfSubjectAccessReviewSpec {
    /**
     * 
     * @type {V1NonResourceAttributes}
     * @memberof V1SelfSubjectAccessReviewSpec
     */
    nonResourceAttributes?: V1NonResourceAttributes;
    /**
     * 
     * @type {V1ResourceAttributes}
     * @memberof V1SelfSubjectAccessReviewSpec
     */
    resourceAttributes?: V1ResourceAttributes;
}

export function V1SelfSubjectAccessReviewSpecFromJSON(json: any): V1SelfSubjectAccessReviewSpec {
    return V1SelfSubjectAccessReviewSpecFromJSONTyped(json, false);
}

export function V1SelfSubjectAccessReviewSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SelfSubjectAccessReviewSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nonResourceAttributes': !exists(json, 'nonResourceAttributes') ? undefined : V1NonResourceAttributesFromJSON(json['nonResourceAttributes']),
        'resourceAttributes': !exists(json, 'resourceAttributes') ? undefined : V1ResourceAttributesFromJSON(json['resourceAttributes']),
    };
}

export function V1SelfSubjectAccessReviewSpecToJSON(value?: V1SelfSubjectAccessReviewSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nonResourceAttributes': V1NonResourceAttributesToJSON(value.nonResourceAttributes),
        'resourceAttributes': V1ResourceAttributesToJSON(value.resourceAttributes),
    };
}

