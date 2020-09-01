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
 * HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.
 * @export
 * @interface V1HostAlias
 */
export interface V1HostAlias {
    /**
     * Hostnames for the above IP address.
     * @type {Array<string>}
     * @memberof V1HostAlias
     */
    hostnames?: Array<string>;
    /**
     * IP address of the host file entry.
     * @type {string}
     * @memberof V1HostAlias
     */
    ip?: string;
}

export function V1HostAliasFromJSON(json: any): V1HostAlias {
    return V1HostAliasFromJSONTyped(json, false);
}

export function V1HostAliasFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HostAlias {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hostnames': !exists(json, 'hostnames') ? undefined : json['hostnames'],
        'ip': !exists(json, 'ip') ? undefined : json['ip'],
    };
}

export function V1HostAliasToJSON(value?: V1HostAlias | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hostnames': value.hostnames,
        'ip': value.ip,
    };
}


