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
    V1beta1VolumeError,
    V1beta1VolumeErrorFromJSON,
    V1beta1VolumeErrorFromJSONTyped,
    V1beta1VolumeErrorToJSON,
} from './';

/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 * @export
 * @interface V1beta1VolumeAttachmentStatus
 */
export interface V1beta1VolumeAttachmentStatus {
    /**
     * 
     * @type {V1beta1VolumeError}
     * @memberof V1beta1VolumeAttachmentStatus
     */
    attachError?: V1beta1VolumeError;
    /**
     * Indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
     * @type {boolean}
     * @memberof V1beta1VolumeAttachmentStatus
     */
    attached: boolean;
    /**
     * Upon successful attach, this field is populated with any information returned by the attach operation that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
     * @type {{ [key: string]: string; }}
     * @memberof V1beta1VolumeAttachmentStatus
     */
    attachmentMetadata?: { [key: string]: string; };
    /**
     * 
     * @type {V1beta1VolumeError}
     * @memberof V1beta1VolumeAttachmentStatus
     */
    detachError?: V1beta1VolumeError;
}

export function V1beta1VolumeAttachmentStatusFromJSON(json: any): V1beta1VolumeAttachmentStatus {
    return V1beta1VolumeAttachmentStatusFromJSONTyped(json, false);
}

export function V1beta1VolumeAttachmentStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1VolumeAttachmentStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attachError': !exists(json, 'attachError') ? undefined : V1beta1VolumeErrorFromJSON(json['attachError']),
        'attached': json['attached'],
        'attachmentMetadata': !exists(json, 'attachmentMetadata') ? undefined : json['attachmentMetadata'],
        'detachError': !exists(json, 'detachError') ? undefined : V1beta1VolumeErrorFromJSON(json['detachError']),
    };
}

export function V1beta1VolumeAttachmentStatusToJSON(value?: V1beta1VolumeAttachmentStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attachError': V1beta1VolumeErrorToJSON(value.attachError),
        'attached': value.attached,
        'attachmentMetadata': value.attachmentMetadata,
        'detachError': V1beta1VolumeErrorToJSON(value.detachError),
    };
}


