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
 * A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future.
 * @export
 * @interface V1TopologySelectorLabelRequirement
 */
export interface V1TopologySelectorLabelRequirement {
    /**
     * The label key that the selector applies to.
     * @type {string}
     * @memberof V1TopologySelectorLabelRequirement
     */
    key: string;
    /**
     * An array of string values. One value must match the label to be selected. Each entry in Values is ORed.
     * @type {Array<string>}
     * @memberof V1TopologySelectorLabelRequirement
     */
    values: Array<string>;
}

export function V1TopologySelectorLabelRequirementFromJSON(json: any): V1TopologySelectorLabelRequirement {
    return V1TopologySelectorLabelRequirementFromJSONTyped(json, false);
}

export function V1TopologySelectorLabelRequirementFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1TopologySelectorLabelRequirement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['key'],
        'values': json['values'],
    };
}

export function V1TopologySelectorLabelRequirementToJSON(value?: V1TopologySelectorLabelRequirement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'values': value.values,
    };
}


