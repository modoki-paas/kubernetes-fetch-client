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
    V1LabelSelector,
    V1LabelSelectorFromJSON,
    V1LabelSelectorFromJSONTyped,
    V1LabelSelectorToJSON,
} from './';

/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 * @export
 * @interface V1alpha1AggregationRule
 */
export interface V1alpha1AggregationRule {
    /**
     * ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added
     * @type {Array<V1LabelSelector>}
     * @memberof V1alpha1AggregationRule
     */
    clusterRoleSelectors?: Array<V1LabelSelector>;
}

export function V1alpha1AggregationRuleFromJSON(json: any): V1alpha1AggregationRule {
    return V1alpha1AggregationRuleFromJSONTyped(json, false);
}

export function V1alpha1AggregationRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1AggregationRule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clusterRoleSelectors': !exists(json, 'clusterRoleSelectors') ? undefined : ((json['clusterRoleSelectors'] as Array<any>).map(V1LabelSelectorFromJSON)),
    };
}

export function V1alpha1AggregationRuleToJSON(value?: V1alpha1AggregationRule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'clusterRoleSelectors': value.clusterRoleSelectors === undefined ? undefined : ((value.clusterRoleSelectors as Array<any>).map(V1LabelSelectorToJSON)),
    };
}


