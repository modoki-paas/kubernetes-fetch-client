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
 * ContainerStateTerminated is a terminated state of a container.
 * @export
 * @interface V1ContainerStateTerminated
 */
export interface V1ContainerStateTerminated {
    /**
     * Container's ID in the format 'docker://<container_id>'
     * @type {string}
     * @memberof V1ContainerStateTerminated
     */
    containerID?: string;
    /**
     * Exit status from the last termination of the container
     * @type {number}
     * @memberof V1ContainerStateTerminated
     */
    exitCode: number;
    /**
     * Time at which the container last terminated
     * @type {Date}
     * @memberof V1ContainerStateTerminated
     */
    finishedAt?: Date;
    /**
     * Message regarding the last termination of the container
     * @type {string}
     * @memberof V1ContainerStateTerminated
     */
    message?: string;
    /**
     * (brief) reason from the last termination of the container
     * @type {string}
     * @memberof V1ContainerStateTerminated
     */
    reason?: string;
    /**
     * Signal from the last termination of the container
     * @type {number}
     * @memberof V1ContainerStateTerminated
     */
    signal?: number;
    /**
     * Time at which previous execution of the container started
     * @type {Date}
     * @memberof V1ContainerStateTerminated
     */
    startedAt?: Date;
}

export function V1ContainerStateTerminatedFromJSON(json: any): V1ContainerStateTerminated {
    return V1ContainerStateTerminatedFromJSONTyped(json, false);
}

export function V1ContainerStateTerminatedFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ContainerStateTerminated {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'containerID': !exists(json, 'containerID') ? undefined : json['containerID'],
        'exitCode': json['exitCode'],
        'finishedAt': !exists(json, 'finishedAt') ? undefined : (new Date(json['finishedAt'])),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'signal': !exists(json, 'signal') ? undefined : json['signal'],
        'startedAt': !exists(json, 'startedAt') ? undefined : (new Date(json['startedAt'])),
    };
}

export function V1ContainerStateTerminatedToJSON(value?: V1ContainerStateTerminated | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'containerID': value.containerID,
        'exitCode': value.exitCode,
        'finishedAt': value.finishedAt === undefined ? undefined : (value.finishedAt.toISOString()),
        'message': value.message,
        'reason': value.reason,
        'signal': value.signal,
        'startedAt': value.startedAt === undefined ? undefined : (value.startedAt.toISOString()),
    };
}


