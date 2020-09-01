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
    ApiextensionsV1beta1WebhookClientConfig,
    ApiextensionsV1beta1WebhookClientConfigFromJSON,
    ApiextensionsV1beta1WebhookClientConfigFromJSONTyped,
    ApiextensionsV1beta1WebhookClientConfigToJSON,
} from './';

/**
 * CustomResourceConversion describes how to convert different versions of a CR.
 * @export
 * @interface V1beta1CustomResourceConversion
 */
export interface V1beta1CustomResourceConversion {
    /**
     * conversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail. Defaults to `["v1beta1"]`.
     * @type {Array<string>}
     * @memberof V1beta1CustomResourceConversion
     */
    conversionReviewVersions?: Array<string>;
    /**
     * strategy specifies how custom resources are converted between versions. Allowed values are: - `None`: The converter only change the apiVersion and would not touch any other field in the custom resource. - `Webhook`: API Server will call to an external webhook to do the conversion. Additional information
     *   is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhookClientConfig to be set.
     * @type {string}
     * @memberof V1beta1CustomResourceConversion
     */
    strategy: string;
    /**
     * 
     * @type {ApiextensionsV1beta1WebhookClientConfig}
     * @memberof V1beta1CustomResourceConversion
     */
    webhookClientConfig?: ApiextensionsV1beta1WebhookClientConfig;
}

export function V1beta1CustomResourceConversionFromJSON(json: any): V1beta1CustomResourceConversion {
    return V1beta1CustomResourceConversionFromJSONTyped(json, false);
}

export function V1beta1CustomResourceConversionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1CustomResourceConversion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conversionReviewVersions': !exists(json, 'conversionReviewVersions') ? undefined : json['conversionReviewVersions'],
        'strategy': json['strategy'],
        'webhookClientConfig': !exists(json, 'webhookClientConfig') ? undefined : ApiextensionsV1beta1WebhookClientConfigFromJSON(json['webhookClientConfig']),
    };
}

export function V1beta1CustomResourceConversionToJSON(value?: V1beta1CustomResourceConversion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conversionReviewVersions': value.conversionReviewVersions,
        'strategy': value.strategy,
        'webhookClientConfig': ApiextensionsV1beta1WebhookClientConfigToJSON(value.webhookClientConfig),
    };
}


