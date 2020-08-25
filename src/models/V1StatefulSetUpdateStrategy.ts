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
    V1RollingUpdateStatefulSetStrategy,
    V1RollingUpdateStatefulSetStrategyFromJSON,
    V1RollingUpdateStatefulSetStrategyFromJSONTyped,
    V1RollingUpdateStatefulSetStrategyToJSON,
} from './';

/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 * @export
 * @interface V1StatefulSetUpdateStrategy
 */
export interface V1StatefulSetUpdateStrategy {
    /**
     * 
     * @type {V1RollingUpdateStatefulSetStrategy}
     * @memberof V1StatefulSetUpdateStrategy
     */
    rollingUpdate?: V1RollingUpdateStatefulSetStrategy;
    /**
     * Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate.
     * @type {string}
     * @memberof V1StatefulSetUpdateStrategy
     */
    type?: string;
}

export function V1StatefulSetUpdateStrategyFromJSON(json: any): V1StatefulSetUpdateStrategy {
    return V1StatefulSetUpdateStrategyFromJSONTyped(json, false);
}

export function V1StatefulSetUpdateStrategyFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1StatefulSetUpdateStrategy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rollingUpdate': !exists(json, 'rollingUpdate') ? undefined : V1RollingUpdateStatefulSetStrategyFromJSON(json['rollingUpdate']),
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function V1StatefulSetUpdateStrategyToJSON(value?: V1StatefulSetUpdateStrategy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rollingUpdate': V1RollingUpdateStatefulSetStrategyToJSON(value.rollingUpdate),
        'type': value.type,
    };
}


