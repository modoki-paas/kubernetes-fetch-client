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
    V1NodeSelectorTerm,
    V1NodeSelectorTermFromJSON,
    V1NodeSelectorTermFromJSONTyped,
    V1NodeSelectorTermToJSON,
} from './';

/**
 * A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
 * @export
 * @interface V1NodeSelector
 */
export interface V1NodeSelector {
    /**
     * Required. A list of node selector terms. The terms are ORed.
     * @type {Array<V1NodeSelectorTerm>}
     * @memberof V1NodeSelector
     */
    nodeSelectorTerms: Array<V1NodeSelectorTerm>;
}

export function V1NodeSelectorFromJSON(json: any): V1NodeSelector {
    return V1NodeSelectorFromJSONTyped(json, false);
}

export function V1NodeSelectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NodeSelector {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nodeSelectorTerms': ((json['nodeSelectorTerms'] as Array<any>).map(V1NodeSelectorTermFromJSON)),
    };
}

export function V1NodeSelectorToJSON(value?: V1NodeSelector | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nodeSelectorTerms': ((value.nodeSelectorTerms as Array<any>).map(V1NodeSelectorTermToJSON)),
    };
}


