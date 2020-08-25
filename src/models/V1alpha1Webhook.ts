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
    V1alpha1WebhookClientConfig,
    V1alpha1WebhookClientConfigFromJSON,
    V1alpha1WebhookClientConfigFromJSONTyped,
    V1alpha1WebhookClientConfigToJSON,
    V1alpha1WebhookThrottleConfig,
    V1alpha1WebhookThrottleConfigFromJSON,
    V1alpha1WebhookThrottleConfigFromJSONTyped,
    V1alpha1WebhookThrottleConfigToJSON,
} from './';

/**
 * Webhook holds the configuration of the webhook
 * @export
 * @interface V1alpha1Webhook
 */
export interface V1alpha1Webhook {
    /**
     * 
     * @type {V1alpha1WebhookClientConfig}
     * @memberof V1alpha1Webhook
     */
    clientConfig: V1alpha1WebhookClientConfig;
    /**
     * 
     * @type {V1alpha1WebhookThrottleConfig}
     * @memberof V1alpha1Webhook
     */
    throttle?: V1alpha1WebhookThrottleConfig;
}

export function V1alpha1WebhookFromJSON(json: any): V1alpha1Webhook {
    return V1alpha1WebhookFromJSONTyped(json, false);
}

export function V1alpha1WebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1Webhook {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clientConfig': V1alpha1WebhookClientConfigFromJSON(json['clientConfig']),
        'throttle': !exists(json, 'throttle') ? undefined : V1alpha1WebhookThrottleConfigFromJSON(json['throttle']),
    };
}

export function V1alpha1WebhookToJSON(value?: V1alpha1Webhook | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'clientConfig': V1alpha1WebhookClientConfigToJSON(value.clientConfig),
        'throttle': V1alpha1WebhookThrottleConfigToJSON(value.throttle),
    };
}

