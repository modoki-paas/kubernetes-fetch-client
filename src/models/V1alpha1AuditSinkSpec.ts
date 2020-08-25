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
    V1alpha1Policy,
    V1alpha1PolicyFromJSON,
    V1alpha1PolicyFromJSONTyped,
    V1alpha1PolicyToJSON,
    V1alpha1Webhook,
    V1alpha1WebhookFromJSON,
    V1alpha1WebhookFromJSONTyped,
    V1alpha1WebhookToJSON,
} from './';

/**
 * AuditSinkSpec holds the spec for the audit sink
 * @export
 * @interface V1alpha1AuditSinkSpec
 */
export interface V1alpha1AuditSinkSpec {
    /**
     * 
     * @type {V1alpha1Policy}
     * @memberof V1alpha1AuditSinkSpec
     */
    policy: V1alpha1Policy;
    /**
     * 
     * @type {V1alpha1Webhook}
     * @memberof V1alpha1AuditSinkSpec
     */
    webhook: V1alpha1Webhook;
}

export function V1alpha1AuditSinkSpecFromJSON(json: any): V1alpha1AuditSinkSpec {
    return V1alpha1AuditSinkSpecFromJSONTyped(json, false);
}

export function V1alpha1AuditSinkSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1AuditSinkSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'policy': V1alpha1PolicyFromJSON(json['policy']),
        'webhook': V1alpha1WebhookFromJSON(json['webhook']),
    };
}

export function V1alpha1AuditSinkSpecToJSON(value?: V1alpha1AuditSinkSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'policy': V1alpha1PolicyToJSON(value.policy),
        'webhook': V1alpha1WebhookToJSON(value.webhook),
    };
}


