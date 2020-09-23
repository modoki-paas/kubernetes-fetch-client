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
/**
 * 
 * @export
 * @interface DevTsuzuModokiV1alpha1AppPipelineSpecImage
 */
export interface DevTsuzuModokiV1alpha1AppPipelineSpecImage {
    /**
     * 
     * @type {string}
     * @memberof DevTsuzuModokiV1alpha1AppPipelineSpecImage
     */
    name: string;
    /**
     * SecretName is the secret to pull from / push to the image registry
     * @type {string}
     * @memberof DevTsuzuModokiV1alpha1AppPipelineSpecImage
     */
    secretName?: string;
}

export function DevTsuzuModokiV1alpha1AppPipelineSpecImageFromJSON(json: any): DevTsuzuModokiV1alpha1AppPipelineSpecImage {
    return DevTsuzuModokiV1alpha1AppPipelineSpecImageFromJSONTyped(json, false);
}

export function DevTsuzuModokiV1alpha1AppPipelineSpecImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): DevTsuzuModokiV1alpha1AppPipelineSpecImage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'secretName': !exists(json, 'secretName') ? undefined : json['secretName'],
    };
}

export function DevTsuzuModokiV1alpha1AppPipelineSpecImageToJSON(value?: DevTsuzuModokiV1alpha1AppPipelineSpecImage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'secretName': value.secretName,
    };
}


