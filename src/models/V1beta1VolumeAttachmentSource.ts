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
    V1PersistentVolumeSpec,
    V1PersistentVolumeSpecFromJSON,
    V1PersistentVolumeSpecFromJSONTyped,
    V1PersistentVolumeSpecToJSON,
} from './';

/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 * @export
 * @interface V1beta1VolumeAttachmentSource
 */
export interface V1beta1VolumeAttachmentSource {
    /**
     * 
     * @type {V1PersistentVolumeSpec}
     * @memberof V1beta1VolumeAttachmentSource
     */
    inlineVolumeSpec?: V1PersistentVolumeSpec;
    /**
     * Name of the persistent volume to attach.
     * @type {string}
     * @memberof V1beta1VolumeAttachmentSource
     */
    persistentVolumeName?: string;
}

export function V1beta1VolumeAttachmentSourceFromJSON(json: any): V1beta1VolumeAttachmentSource {
    return V1beta1VolumeAttachmentSourceFromJSONTyped(json, false);
}

export function V1beta1VolumeAttachmentSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1VolumeAttachmentSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'inlineVolumeSpec': !exists(json, 'inlineVolumeSpec') ? undefined : V1PersistentVolumeSpecFromJSON(json['inlineVolumeSpec']),
        'persistentVolumeName': !exists(json, 'persistentVolumeName') ? undefined : json['persistentVolumeName'],
    };
}

export function V1beta1VolumeAttachmentSourceToJSON(value?: V1beta1VolumeAttachmentSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'inlineVolumeSpec': V1PersistentVolumeSpecToJSON(value.inlineVolumeSpec),
        'persistentVolumeName': value.persistentVolumeName,
    };
}


