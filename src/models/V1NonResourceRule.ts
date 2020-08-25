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
 * NonResourceRule holds information that describes a rule for the non-resource
 * @export
 * @interface V1NonResourceRule
 */
export interface V1NonResourceRule {
    /**
     * NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path.  "*" means all.
     * @type {Array<string>}
     * @memberof V1NonResourceRule
     */
    nonResourceURLs?: Array<string>;
    /**
     * Verb is a list of kubernetes non-resource API verbs, like: get, post, put, delete, patch, head, options.  "*" means all.
     * @type {Array<string>}
     * @memberof V1NonResourceRule
     */
    verbs: Array<string>;
}

export function V1NonResourceRuleFromJSON(json: any): V1NonResourceRule {
    return V1NonResourceRuleFromJSONTyped(json, false);
}

export function V1NonResourceRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NonResourceRule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nonResourceURLs': !exists(json, 'nonResourceURLs') ? undefined : json['nonResourceURLs'],
        'verbs': json['verbs'],
    };
}

export function V1NonResourceRuleToJSON(value?: V1NonResourceRule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nonResourceURLs': value.nonResourceURLs,
        'verbs': value.verbs,
    };
}


