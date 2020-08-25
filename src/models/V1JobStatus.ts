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
    V1JobCondition,
    V1JobConditionFromJSON,
    V1JobConditionFromJSONTyped,
    V1JobConditionToJSON,
} from './';

/**
 * JobStatus represents the current state of a Job.
 * @export
 * @interface V1JobStatus
 */
export interface V1JobStatus {
    /**
     * The number of actively running pods.
     * @type {number}
     * @memberof V1JobStatus
     */
    active?: number;
    /**
     * Represents time when the job was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC.
     * @type {Date}
     * @memberof V1JobStatus
     */
    completionTime?: Date;
    /**
     * The latest available observations of an object's current state. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
     * @type {Array<V1JobCondition>}
     * @memberof V1JobStatus
     */
    conditions?: Array<V1JobCondition>;
    /**
     * The number of pods which reached phase Failed.
     * @type {number}
     * @memberof V1JobStatus
     */
    failed?: number;
    /**
     * Represents time when the job was acknowledged by the job controller. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC.
     * @type {Date}
     * @memberof V1JobStatus
     */
    startTime?: Date;
    /**
     * The number of pods which reached phase Succeeded.
     * @type {number}
     * @memberof V1JobStatus
     */
    succeeded?: number;
}

export function V1JobStatusFromJSON(json: any): V1JobStatus {
    return V1JobStatusFromJSONTyped(json, false);
}

export function V1JobStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1JobStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': !exists(json, 'active') ? undefined : json['active'],
        'completionTime': !exists(json, 'completionTime') ? undefined : (new Date(json['completionTime'])),
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(V1JobConditionFromJSON)),
        'failed': !exists(json, 'failed') ? undefined : json['failed'],
        'startTime': !exists(json, 'startTime') ? undefined : (new Date(json['startTime'])),
        'succeeded': !exists(json, 'succeeded') ? undefined : json['succeeded'],
    };
}

export function V1JobStatusToJSON(value?: V1JobStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
        'completionTime': value.completionTime === undefined ? undefined : (value.completionTime.toISOString()),
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(V1JobConditionToJSON)),
        'failed': value.failed,
        'startTime': value.startTime === undefined ? undefined : (value.startTime.toISOString()),
        'succeeded': value.succeeded,
    };
}


