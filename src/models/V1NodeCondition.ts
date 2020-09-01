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
/**
 * NodeCondition contains condition information for a node.
 * @export
 * @interface V1NodeCondition
 */
export interface V1NodeCondition {
    /**
     * Last time we got an update on a given condition.
     * @type {Date}
     * @memberof V1NodeCondition
     */
    lastHeartbeatTime?: Date;
    /**
     * Last time the condition transit from one status to another.
     * @type {Date}
     * @memberof V1NodeCondition
     */
    lastTransitionTime?: Date;
    /**
     * Human readable message indicating details about last transition.
     * @type {string}
     * @memberof V1NodeCondition
     */
    message?: string;
    /**
     * (brief) reason for the condition's last transition.
     * @type {string}
     * @memberof V1NodeCondition
     */
    reason?: string;
    /**
     * Status of the condition, one of True, False, Unknown.
     * @type {string}
     * @memberof V1NodeCondition
     */
    status: string;
    /**
     * Type of node condition.
     * @type {string}
     * @memberof V1NodeCondition
     */
    type: string;
}

export function V1NodeConditionFromJSON(json: any): V1NodeCondition {
    return V1NodeConditionFromJSONTyped(json, false);
}

export function V1NodeConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1NodeCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastHeartbeatTime': !exists(json, 'lastHeartbeatTime') ? undefined : (new Date(json['lastHeartbeatTime'])),
        'lastTransitionTime': !exists(json, 'lastTransitionTime') ? undefined : (new Date(json['lastTransitionTime'])),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'status': json['status'],
        'type': json['type'],
    };
}

export function V1NodeConditionToJSON(value?: V1NodeCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lastHeartbeatTime': value.lastHeartbeatTime === undefined ? undefined : (value.lastHeartbeatTime.toISOString()),
        'lastTransitionTime': value.lastTransitionTime === undefined ? undefined : (value.lastTransitionTime.toISOString()),
        'message': value.message,
        'reason': value.reason,
        'status': value.status,
        'type': value.type,
    };
}


