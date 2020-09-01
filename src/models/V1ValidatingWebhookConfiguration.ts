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
    V1ObjectMeta,
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
    V1ValidatingWebhook,
    V1ValidatingWebhookFromJSON,
    V1ValidatingWebhookFromJSONTyped,
    V1ValidatingWebhookToJSON,
} from './';

/**
 * ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
 * @export
 * @interface V1ValidatingWebhookConfiguration
 */
export interface V1ValidatingWebhookConfiguration {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1ValidatingWebhookConfiguration
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1ValidatingWebhookConfiguration
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1ValidatingWebhookConfiguration
     */
    metadata?: V1ObjectMeta;
    /**
     * Webhooks is a list of webhooks and the affected resources and operations.
     * @type {Array<V1ValidatingWebhook>}
     * @memberof V1ValidatingWebhookConfiguration
     */
    webhooks?: Array<V1ValidatingWebhook>;
}

export function V1ValidatingWebhookConfigurationFromJSON(json: any): V1ValidatingWebhookConfiguration {
    return V1ValidatingWebhookConfigurationFromJSONTyped(json, false);
}

export function V1ValidatingWebhookConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ValidatingWebhookConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'webhooks': !exists(json, 'webhooks') ? undefined : ((json['webhooks'] as Array<any>).map(V1ValidatingWebhookFromJSON)),
    };
}

export function V1ValidatingWebhookConfigurationToJSON(value?: V1ValidatingWebhookConfiguration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': V1ObjectMetaToJSON(value.metadata),
        'webhooks': value.webhooks === undefined ? undefined : ((value.webhooks as Array<any>).map(V1ValidatingWebhookToJSON)),
    };
}


