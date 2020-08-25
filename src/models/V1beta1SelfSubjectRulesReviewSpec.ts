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
 * 
 * @export
 * @interface V1beta1SelfSubjectRulesReviewSpec
 */
export interface V1beta1SelfSubjectRulesReviewSpec {
    /**
     * Namespace to evaluate rules for. Required.
     * @type {string}
     * @memberof V1beta1SelfSubjectRulesReviewSpec
     */
    namespace?: string;
}

export function V1beta1SelfSubjectRulesReviewSpecFromJSON(json: any): V1beta1SelfSubjectRulesReviewSpec {
    return V1beta1SelfSubjectRulesReviewSpecFromJSONTyped(json, false);
}

export function V1beta1SelfSubjectRulesReviewSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1SelfSubjectRulesReviewSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
    };
}

export function V1beta1SelfSubjectRulesReviewSpecToJSON(value?: V1beta1SelfSubjectRulesReviewSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'namespace': value.namespace,
    };
}


