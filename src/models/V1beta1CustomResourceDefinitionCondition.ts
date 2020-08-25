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
 * CustomResourceDefinitionCondition contains details for the current condition of this pod.
 * @export
 * @interface V1beta1CustomResourceDefinitionCondition
 */
export interface V1beta1CustomResourceDefinitionCondition {
    /**
     * lastTransitionTime last time the condition transitioned from one status to another.
     * @type {Date}
     * @memberof V1beta1CustomResourceDefinitionCondition
     */
    lastTransitionTime?: Date;
    /**
     * message is a human-readable message indicating details about last transition.
     * @type {string}
     * @memberof V1beta1CustomResourceDefinitionCondition
     */
    message?: string;
    /**
     * reason is a unique, one-word, CamelCase reason for the condition's last transition.
     * @type {string}
     * @memberof V1beta1CustomResourceDefinitionCondition
     */
    reason?: string;
    /**
     * status is the status of the condition. Can be True, False, Unknown.
     * @type {string}
     * @memberof V1beta1CustomResourceDefinitionCondition
     */
    status: string;
    /**
     * type is the type of the condition. Types include Established, NamesAccepted and Terminating.
     * @type {string}
     * @memberof V1beta1CustomResourceDefinitionCondition
     */
    type: string;
}

export function V1beta1CustomResourceDefinitionConditionFromJSON(json: any): V1beta1CustomResourceDefinitionCondition {
    return V1beta1CustomResourceDefinitionConditionFromJSONTyped(json, false);
}

export function V1beta1CustomResourceDefinitionConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1CustomResourceDefinitionCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastTransitionTime': !exists(json, 'lastTransitionTime') ? undefined : (new Date(json['lastTransitionTime'])),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'status': json['status'],
        'type': json['type'],
    };
}

export function V1beta1CustomResourceDefinitionConditionToJSON(value?: V1beta1CustomResourceDefinitionCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lastTransitionTime': value.lastTransitionTime === undefined ? undefined : (value.lastTransitionTime.toISOString()),
        'message': value.message,
        'reason': value.reason,
        'status': value.status,
        'type': value.type,
    };
}


