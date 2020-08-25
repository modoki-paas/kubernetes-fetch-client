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
    V1JSONSchemaProps,
    V1JSONSchemaPropsFromJSON,
    V1JSONSchemaPropsFromJSONTyped,
    V1JSONSchemaPropsToJSON,
} from './';

/**
 * CustomResourceValidation is a list of validation methods for CustomResources.
 * @export
 * @interface V1CustomResourceValidation
 */
export interface V1CustomResourceValidation {
    /**
     * 
     * @type {V1JSONSchemaProps}
     * @memberof V1CustomResourceValidation
     */
    openAPIV3Schema?: V1JSONSchemaProps;
}

export function V1CustomResourceValidationFromJSON(json: any): V1CustomResourceValidation {
    return V1CustomResourceValidationFromJSONTyped(json, false);
}

export function V1CustomResourceValidationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CustomResourceValidation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'openAPIV3Schema': !exists(json, 'openAPIV3Schema') ? undefined : V1JSONSchemaPropsFromJSON(json['openAPIV3Schema']),
    };
}

export function V1CustomResourceValidationToJSON(value?: V1CustomResourceValidation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'openAPIV3Schema': V1JSONSchemaPropsToJSON(value.openAPIV3Schema),
    };
}


