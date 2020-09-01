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
    V2beta2MetricIdentifier,
    V2beta2MetricIdentifierFromJSON,
    V2beta2MetricIdentifierFromJSONTyped,
    V2beta2MetricIdentifierToJSON,
    V2beta2MetricTarget,
    V2beta2MetricTargetFromJSON,
    V2beta2MetricTargetFromJSONTyped,
    V2beta2MetricTargetToJSON,
} from './';

/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 * @export
 * @interface V2beta2PodsMetricSource
 */
export interface V2beta2PodsMetricSource {
    /**
     * 
     * @type {V2beta2MetricIdentifier}
     * @memberof V2beta2PodsMetricSource
     */
    metric: V2beta2MetricIdentifier;
    /**
     * 
     * @type {V2beta2MetricTarget}
     * @memberof V2beta2PodsMetricSource
     */
    target: V2beta2MetricTarget;
}

export function V2beta2PodsMetricSourceFromJSON(json: any): V2beta2PodsMetricSource {
    return V2beta2PodsMetricSourceFromJSONTyped(json, false);
}

export function V2beta2PodsMetricSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2beta2PodsMetricSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metric': V2beta2MetricIdentifierFromJSON(json['metric']),
        'target': V2beta2MetricTargetFromJSON(json['target']),
    };
}

export function V2beta2PodsMetricSourceToJSON(value?: V2beta2PodsMetricSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'metric': V2beta2MetricIdentifierToJSON(value.metric),
        'target': V2beta2MetricTargetToJSON(value.target),
    };
}


