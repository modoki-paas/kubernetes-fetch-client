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
 * GroupSubject holds detailed information for group-kind subject.
 * @export
 * @interface V1alpha1GroupSubject
 */
export interface V1alpha1GroupSubject {
    /**
     * name is the user group that matches, or "*" to match all user groups. See https://github.com/kubernetes/apiserver/blob/master/pkg/authentication/user/user.go for some well-known group names. Required.
     * @type {string}
     * @memberof V1alpha1GroupSubject
     */
    name: string;
}

export function V1alpha1GroupSubjectFromJSON(json: any): V1alpha1GroupSubject {
    return V1alpha1GroupSubjectFromJSONTyped(json, false);
}

export function V1alpha1GroupSubjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1GroupSubject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function V1alpha1GroupSubjectToJSON(value?: V1alpha1GroupSubject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}


