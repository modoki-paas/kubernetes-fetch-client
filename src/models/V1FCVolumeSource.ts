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
 * Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.
 * @export
 * @interface V1FCVolumeSource
 */
export interface V1FCVolumeSource {
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
     * @type {string}
     * @memberof V1FCVolumeSource
     */
    fsType?: string;
    /**
     * Optional: FC target lun number
     * @type {number}
     * @memberof V1FCVolumeSource
     */
    lun?: number;
    /**
     * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     * @type {boolean}
     * @memberof V1FCVolumeSource
     */
    readOnly?: boolean;
    /**
     * Optional: FC target worldwide names (WWNs)
     * @type {Array<string>}
     * @memberof V1FCVolumeSource
     */
    targetWWNs?: Array<string>;
    /**
     * Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.
     * @type {Array<string>}
     * @memberof V1FCVolumeSource
     */
    wwids?: Array<string>;
}

export function V1FCVolumeSourceFromJSON(json: any): V1FCVolumeSource {
    return V1FCVolumeSourceFromJSONTyped(json, false);
}

export function V1FCVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1FCVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fsType': !exists(json, 'fsType') ? undefined : json['fsType'],
        'lun': !exists(json, 'lun') ? undefined : json['lun'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'targetWWNs': !exists(json, 'targetWWNs') ? undefined : json['targetWWNs'],
        'wwids': !exists(json, 'wwids') ? undefined : json['wwids'],
    };
}

export function V1FCVolumeSourceToJSON(value?: V1FCVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fsType': value.fsType,
        'lun': value.lun,
        'readOnly': value.readOnly,
        'targetWWNs': value.targetWWNs,
        'wwids': value.wwids,
    };
}


