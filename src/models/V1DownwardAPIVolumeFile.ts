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
    V1ObjectFieldSelector,
    V1ObjectFieldSelectorFromJSON,
    V1ObjectFieldSelectorFromJSONTyped,
    V1ObjectFieldSelectorToJSON,
    V1ResourceFieldSelector,
    V1ResourceFieldSelectorFromJSON,
    V1ResourceFieldSelectorFromJSONTyped,
    V1ResourceFieldSelectorToJSON,
} from './';

/**
 * DownwardAPIVolumeFile represents information to create the file containing the pod field
 * @export
 * @interface V1DownwardAPIVolumeFile
 */
export interface V1DownwardAPIVolumeFile {
    /**
     * 
     * @type {V1ObjectFieldSelector}
     * @memberof V1DownwardAPIVolumeFile
     */
    fieldRef?: V1ObjectFieldSelector;
    /**
     * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     * @type {number}
     * @memberof V1DownwardAPIVolumeFile
     */
    mode?: number;
    /**
     * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
     * @type {string}
     * @memberof V1DownwardAPIVolumeFile
     */
    path: string;
    /**
     * 
     * @type {V1ResourceFieldSelector}
     * @memberof V1DownwardAPIVolumeFile
     */
    resourceFieldRef?: V1ResourceFieldSelector;
}

export function V1DownwardAPIVolumeFileFromJSON(json: any): V1DownwardAPIVolumeFile {
    return V1DownwardAPIVolumeFileFromJSONTyped(json, false);
}

export function V1DownwardAPIVolumeFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DownwardAPIVolumeFile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fieldRef': !exists(json, 'fieldRef') ? undefined : V1ObjectFieldSelectorFromJSON(json['fieldRef']),
        'mode': !exists(json, 'mode') ? undefined : json['mode'],
        'path': json['path'],
        'resourceFieldRef': !exists(json, 'resourceFieldRef') ? undefined : V1ResourceFieldSelectorFromJSON(json['resourceFieldRef']),
    };
}

export function V1DownwardAPIVolumeFileToJSON(value?: V1DownwardAPIVolumeFile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fieldRef': V1ObjectFieldSelectorToJSON(value.fieldRef),
        'mode': value.mode,
        'path': value.path,
        'resourceFieldRef': V1ResourceFieldSelectorToJSON(value.resourceFieldRef),
    };
}


