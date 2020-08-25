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
    V1KeyToPath,
    V1KeyToPathFromJSON,
    V1KeyToPathFromJSONTyped,
    V1KeyToPathToJSON,
} from './';

/**
 * Adapts a secret into a projected volume.
 * 
 * The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
 * @export
 * @interface V1SecretProjection
 */
export interface V1SecretProjection {
    /**
     * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
     * @type {Array<V1KeyToPath>}
     * @memberof V1SecretProjection
     */
    items?: Array<V1KeyToPath>;
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * @type {string}
     * @memberof V1SecretProjection
     */
    name?: string;
    /**
     * Specify whether the Secret or its key must be defined
     * @type {boolean}
     * @memberof V1SecretProjection
     */
    optional?: boolean;
}

export function V1SecretProjectionFromJSON(json: any): V1SecretProjection {
    return V1SecretProjectionFromJSONTyped(json, false);
}

export function V1SecretProjectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SecretProjection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(V1KeyToPathFromJSON)),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'optional': !exists(json, 'optional') ? undefined : json['optional'],
    };
}

export function V1SecretProjectionToJSON(value?: V1SecretProjection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(V1KeyToPathToJSON)),
        'name': value.name,
        'optional': value.optional,
    };
}


