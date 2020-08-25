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
/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 * @export
 * @interface ApiextensionsV1beta1ServiceReference
 */
export interface ApiextensionsV1beta1ServiceReference {
    /**
     * name is the name of the service. Required
     * @type {string}
     * @memberof ApiextensionsV1beta1ServiceReference
     */
    name: string;
    /**
     * namespace is the namespace of the service. Required
     * @type {string}
     * @memberof ApiextensionsV1beta1ServiceReference
     */
    namespace: string;
    /**
     * path is an optional URL path at which the webhook will be contacted.
     * @type {string}
     * @memberof ApiextensionsV1beta1ServiceReference
     */
    path?: string;
    /**
     * port is an optional service port at which the webhook will be contacted. `port` should be a valid port number (1-65535, inclusive). Defaults to 443 for backward compatibility.
     * @type {number}
     * @memberof ApiextensionsV1beta1ServiceReference
     */
    port?: number;
}

export function ApiextensionsV1beta1ServiceReferenceFromJSON(json: any): ApiextensionsV1beta1ServiceReference {
    return ApiextensionsV1beta1ServiceReferenceFromJSONTyped(json, false);
}

export function ApiextensionsV1beta1ServiceReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiextensionsV1beta1ServiceReference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'namespace': json['namespace'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'port': !exists(json, 'port') ? undefined : json['port'],
    };
}

export function ApiextensionsV1beta1ServiceReferenceToJSON(value?: ApiextensionsV1beta1ServiceReference | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'namespace': value.namespace,
        'path': value.path,
        'port': value.port,
    };
}


