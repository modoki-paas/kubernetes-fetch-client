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
 * DeploymentCondition describes the state of a deployment at a certain point.
 * @export
 * @interface V1DeploymentCondition
 */
export interface V1DeploymentCondition {
    /**
     * Last time the condition transitioned from one status to another.
     * @type {Date}
     * @memberof V1DeploymentCondition
     */
    lastTransitionTime?: Date;
    /**
     * The last time this condition was updated.
     * @type {Date}
     * @memberof V1DeploymentCondition
     */
    lastUpdateTime?: Date;
    /**
     * A human readable message indicating details about the transition.
     * @type {string}
     * @memberof V1DeploymentCondition
     */
    message?: string;
    /**
     * The reason for the condition's last transition.
     * @type {string}
     * @memberof V1DeploymentCondition
     */
    reason?: string;
    /**
     * Status of the condition, one of True, False, Unknown.
     * @type {string}
     * @memberof V1DeploymentCondition
     */
    status: string;
    /**
     * Type of deployment condition.
     * @type {string}
     * @memberof V1DeploymentCondition
     */
    type: string;
}

export function V1DeploymentConditionFromJSON(json: any): V1DeploymentCondition {
    return V1DeploymentConditionFromJSONTyped(json, false);
}

export function V1DeploymentConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DeploymentCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastTransitionTime': !exists(json, 'lastTransitionTime') ? undefined : (new Date(json['lastTransitionTime'])),
        'lastUpdateTime': !exists(json, 'lastUpdateTime') ? undefined : (new Date(json['lastUpdateTime'])),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'status': json['status'],
        'type': json['type'],
    };
}

export function V1DeploymentConditionToJSON(value?: V1DeploymentCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lastTransitionTime': value.lastTransitionTime === undefined ? undefined : (value.lastTransitionTime.toISOString()),
        'lastUpdateTime': value.lastUpdateTime === undefined ? undefined : (value.lastUpdateTime.toISOString()),
        'message': value.message,
        'reason': value.reason,
        'status': value.status,
        'type': value.type,
    };
}


