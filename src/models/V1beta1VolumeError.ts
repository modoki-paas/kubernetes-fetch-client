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
 * VolumeError captures an error encountered during a volume operation.
 * @export
 * @interface V1beta1VolumeError
 */
export interface V1beta1VolumeError {
    /**
     * String detailing the error encountered during Attach or Detach operation. This string may be logged, so it should not contain sensitive information.
     * @type {string}
     * @memberof V1beta1VolumeError
     */
    message?: string;
    /**
     * Time the error was encountered.
     * @type {Date}
     * @memberof V1beta1VolumeError
     */
    time?: Date;
}

export function V1beta1VolumeErrorFromJSON(json: any): V1beta1VolumeError {
    return V1beta1VolumeErrorFromJSONTyped(json, false);
}

export function V1beta1VolumeErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1VolumeError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
        'time': !exists(json, 'time') ? undefined : (new Date(json['time'])),
    };
}

export function V1beta1VolumeErrorToJSON(value?: V1beta1VolumeError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'time': value.time === undefined ? undefined : (value.time.toISOString()),
    };
}


