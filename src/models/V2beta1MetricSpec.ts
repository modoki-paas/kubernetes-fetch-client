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
    V2beta1ExternalMetricSource,
    V2beta1ExternalMetricSourceFromJSON,
    V2beta1ExternalMetricSourceFromJSONTyped,
    V2beta1ExternalMetricSourceToJSON,
    V2beta1ObjectMetricSource,
    V2beta1ObjectMetricSourceFromJSON,
    V2beta1ObjectMetricSourceFromJSONTyped,
    V2beta1ObjectMetricSourceToJSON,
    V2beta1PodsMetricSource,
    V2beta1PodsMetricSourceFromJSON,
    V2beta1PodsMetricSourceFromJSONTyped,
    V2beta1PodsMetricSourceToJSON,
    V2beta1ResourceMetricSource,
    V2beta1ResourceMetricSourceFromJSON,
    V2beta1ResourceMetricSourceFromJSONTyped,
    V2beta1ResourceMetricSourceToJSON,
} from './';

/**
 * MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
 * @export
 * @interface V2beta1MetricSpec
 */
export interface V2beta1MetricSpec {
    /**
     * 
     * @type {V2beta1ExternalMetricSource}
     * @memberof V2beta1MetricSpec
     */
    external?: V2beta1ExternalMetricSource;
    /**
     * 
     * @type {V2beta1ObjectMetricSource}
     * @memberof V2beta1MetricSpec
     */
    object?: V2beta1ObjectMetricSource;
    /**
     * 
     * @type {V2beta1PodsMetricSource}
     * @memberof V2beta1MetricSpec
     */
    pods?: V2beta1PodsMetricSource;
    /**
     * 
     * @type {V2beta1ResourceMetricSource}
     * @memberof V2beta1MetricSpec
     */
    resource?: V2beta1ResourceMetricSource;
    /**
     * type is the type of metric source.  It should be one of "Object", "Pods" or "Resource", each mapping to a matching field in the object.
     * @type {string}
     * @memberof V2beta1MetricSpec
     */
    type: string;
}

export function V2beta1MetricSpecFromJSON(json: any): V2beta1MetricSpec {
    return V2beta1MetricSpecFromJSONTyped(json, false);
}

export function V2beta1MetricSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2beta1MetricSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'external': !exists(json, 'external') ? undefined : V2beta1ExternalMetricSourceFromJSON(json['external']),
        'object': !exists(json, 'object') ? undefined : V2beta1ObjectMetricSourceFromJSON(json['object']),
        'pods': !exists(json, 'pods') ? undefined : V2beta1PodsMetricSourceFromJSON(json['pods']),
        'resource': !exists(json, 'resource') ? undefined : V2beta1ResourceMetricSourceFromJSON(json['resource']),
        'type': json['type'],
    };
}

export function V2beta1MetricSpecToJSON(value?: V2beta1MetricSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'external': V2beta1ExternalMetricSourceToJSON(value.external),
        'object': V2beta1ObjectMetricSourceToJSON(value.object),
        'pods': V2beta1PodsMetricSourceToJSON(value.pods),
        'resource': V2beta1ResourceMetricSourceToJSON(value.resource),
        'type': value.type,
    };
}


