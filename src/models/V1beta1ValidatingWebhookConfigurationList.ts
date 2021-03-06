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
    V1ListMeta,
    V1ListMetaFromJSON,
    V1ListMetaFromJSONTyped,
    V1ListMetaToJSON,
    V1beta1ValidatingWebhookConfiguration,
    V1beta1ValidatingWebhookConfigurationFromJSON,
    V1beta1ValidatingWebhookConfigurationFromJSONTyped,
    V1beta1ValidatingWebhookConfigurationToJSON,
} from './';

/**
 * ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration.
 * @export
 * @interface V1beta1ValidatingWebhookConfigurationList
 */
export interface V1beta1ValidatingWebhookConfigurationList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1ValidatingWebhookConfigurationList
     */
    apiVersion?: string;
    /**
     * List of ValidatingWebhookConfiguration.
     * @type {Array<V1beta1ValidatingWebhookConfiguration>}
     * @memberof V1beta1ValidatingWebhookConfigurationList
     */
    items: Array<V1beta1ValidatingWebhookConfiguration>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1ValidatingWebhookConfigurationList
     */
    kind?: string;
    /**
     * 
     * @type {V1ListMeta}
     * @memberof V1beta1ValidatingWebhookConfigurationList
     */
    metadata?: V1ListMeta;
}

export function V1beta1ValidatingWebhookConfigurationListFromJSON(json: any): V1beta1ValidatingWebhookConfigurationList {
    return V1beta1ValidatingWebhookConfigurationListFromJSONTyped(json, false);
}

export function V1beta1ValidatingWebhookConfigurationListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1ValidatingWebhookConfigurationList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1beta1ValidatingWebhookConfigurationFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ListMetaFromJSON(json['metadata']),
    };
}

export function V1beta1ValidatingWebhookConfigurationListToJSON(value?: V1beta1ValidatingWebhookConfigurationList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1beta1ValidatingWebhookConfigurationToJSON)),
        'kind': value.kind,
        'metadata': V1ListMetaToJSON(value.metadata),
    };
}


