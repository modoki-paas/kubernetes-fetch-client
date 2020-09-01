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
import {
    V1LabelSelector,
    V1LabelSelectorFromJSON,
    V1LabelSelectorFromJSONTyped,
    V1LabelSelectorToJSON,
} from './';

/**
 * MetricIdentifier defines the name and optionally selector for a metric
 * @export
 * @interface V2beta2MetricIdentifier
 */
export interface V2beta2MetricIdentifier {
    /**
     * name is the name of the given metric
     * @type {string}
     * @memberof V2beta2MetricIdentifier
     */
    name: string;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V2beta2MetricIdentifier
     */
    selector?: V1LabelSelector;
}

export function V2beta2MetricIdentifierFromJSON(json: any): V2beta2MetricIdentifier {
    return V2beta2MetricIdentifierFromJSONTyped(json, false);
}

export function V2beta2MetricIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2beta2MetricIdentifier {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'selector': !exists(json, 'selector') ? undefined : V1LabelSelectorFromJSON(json['selector']),
    };
}

export function V2beta2MetricIdentifierToJSON(value?: V2beta2MetricIdentifier | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'selector': V1LabelSelectorToJSON(value.selector),
    };
}


