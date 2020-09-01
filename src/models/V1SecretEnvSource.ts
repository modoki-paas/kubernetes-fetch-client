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
 * SecretEnvSource selects a Secret to populate the environment variables with.
 * 
 * The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
 * @export
 * @interface V1SecretEnvSource
 */
export interface V1SecretEnvSource {
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * @type {string}
     * @memberof V1SecretEnvSource
     */
    name?: string;
    /**
     * Specify whether the Secret must be defined
     * @type {boolean}
     * @memberof V1SecretEnvSource
     */
    optional?: boolean;
}

export function V1SecretEnvSourceFromJSON(json: any): V1SecretEnvSource {
    return V1SecretEnvSourceFromJSONTyped(json, false);
}

export function V1SecretEnvSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SecretEnvSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'optional': !exists(json, 'optional') ? undefined : json['optional'],
    };
}

export function V1SecretEnvSourceToJSON(value?: V1SecretEnvSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'optional': value.optional,
    };
}


