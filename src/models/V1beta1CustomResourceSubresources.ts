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
    V1beta1CustomResourceSubresourceScale,
    V1beta1CustomResourceSubresourceScaleFromJSON,
    V1beta1CustomResourceSubresourceScaleFromJSONTyped,
    V1beta1CustomResourceSubresourceScaleToJSON,
} from './';

/**
 * CustomResourceSubresources defines the status and scale subresources for CustomResources.
 * @export
 * @interface V1beta1CustomResourceSubresources
 */
export interface V1beta1CustomResourceSubresources {
    /**
     * 
     * @type {V1beta1CustomResourceSubresourceScale}
     * @memberof V1beta1CustomResourceSubresources
     */
    scale?: V1beta1CustomResourceSubresourceScale;
    /**
     * status indicates the custom resource should serve a `/status` subresource. When enabled: 1. requests to the custom resource primary endpoint ignore changes to the `status` stanza of the object. 2. requests to the custom resource `/status` subresource ignore changes to anything other than the `status` stanza of the object.
     * @type {object}
     * @memberof V1beta1CustomResourceSubresources
     */
    status?: object;
}

export function V1beta1CustomResourceSubresourcesFromJSON(json: any): V1beta1CustomResourceSubresources {
    return V1beta1CustomResourceSubresourcesFromJSONTyped(json, false);
}

export function V1beta1CustomResourceSubresourcesFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1CustomResourceSubresources {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'scale': !exists(json, 'scale') ? undefined : V1beta1CustomResourceSubresourceScaleFromJSON(json['scale']),
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function V1beta1CustomResourceSubresourcesToJSON(value?: V1beta1CustomResourceSubresources | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'scale': V1beta1CustomResourceSubresourceScaleToJSON(value.scale),
        'status': value.status,
    };
}


