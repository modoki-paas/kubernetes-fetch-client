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
    V1WebhookConversion,
    V1WebhookConversionFromJSON,
    V1WebhookConversionFromJSONTyped,
    V1WebhookConversionToJSON,
} from './';

/**
 * CustomResourceConversion describes how to convert different versions of a CR.
 * @export
 * @interface V1CustomResourceConversion
 */
export interface V1CustomResourceConversion {
    /**
     * strategy specifies how custom resources are converted between versions. Allowed values are: - `None`: The converter only change the apiVersion and would not touch any other field in the custom resource. - `Webhook`: API Server will call to an external webhook to do the conversion. Additional information
     *   is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhook to be set.
     * @type {string}
     * @memberof V1CustomResourceConversion
     */
    strategy: string;
    /**
     * 
     * @type {V1WebhookConversion}
     * @memberof V1CustomResourceConversion
     */
    webhook?: V1WebhookConversion;
}

export function V1CustomResourceConversionFromJSON(json: any): V1CustomResourceConversion {
    return V1CustomResourceConversionFromJSONTyped(json, false);
}

export function V1CustomResourceConversionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CustomResourceConversion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'strategy': json['strategy'],
        'webhook': !exists(json, 'webhook') ? undefined : V1WebhookConversionFromJSON(json['webhook']),
    };
}

export function V1CustomResourceConversionToJSON(value?: V1CustomResourceConversion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'strategy': value.strategy,
        'webhook': V1WebhookConversionToJSON(value.webhook),
    };
}


