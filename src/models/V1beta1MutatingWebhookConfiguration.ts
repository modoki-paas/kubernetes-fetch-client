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
    V1beta1MutatingWebhook,
    V1beta1MutatingWebhookFromJSON,
    V1beta1MutatingWebhookFromJSONTyped,
    V1beta1MutatingWebhookToJSON,
} from './';

/**
 * MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object. Deprecated in v1.16, planned for removal in v1.19. Use admissionregistration.k8s.io/v1 MutatingWebhookConfiguration instead.
 * @export
 * @interface V1beta1MutatingWebhookConfiguration
 */
export interface V1beta1MutatingWebhookConfiguration {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1MutatingWebhookConfiguration
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1MutatingWebhookConfiguration
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1beta1MutatingWebhookConfiguration
     */
    metadata?: V1ObjectMeta;
    /**
     * Webhooks is a list of webhooks and the affected resources and operations.
     * @type {Array<V1beta1MutatingWebhook>}
     * @memberof V1beta1MutatingWebhookConfiguration
     */
    webhooks?: Array<V1beta1MutatingWebhook>;
}

export function V1beta1MutatingWebhookConfigurationFromJSON(json: any): V1beta1MutatingWebhookConfiguration {
    return V1beta1MutatingWebhookConfigurationFromJSONTyped(json, false);
}

export function V1beta1MutatingWebhookConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1MutatingWebhookConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'webhooks': !exists(json, 'webhooks') ? undefined : ((json['webhooks'] as Array<any>).map(V1beta1MutatingWebhookFromJSON)),
    };
}

export function V1beta1MutatingWebhookConfigurationToJSON(value?: V1beta1MutatingWebhookConfiguration | null): any {
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
        'webhooks': value.webhooks === undefined ? undefined : ((value.webhooks as Array<any>).map(V1beta1MutatingWebhookToJSON)),
    };
}


