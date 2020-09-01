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
    V1ServerAddressByClientCIDR,
    V1ServerAddressByClientCIDRFromJSON,
    V1ServerAddressByClientCIDRFromJSONTyped,
    V1ServerAddressByClientCIDRToJSON,
} from './';

/**
 * APIVersions lists the versions that are available, to allow clients to discover the API at /api, which is the root path of the legacy v1 API.
 * @export
 * @interface V1APIVersions
 */
export interface V1APIVersions {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1APIVersions
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1APIVersions
     */
    kind?: string;
    /**
     * a map of client CIDR to server address that is serving this group. This is to help clients reach servers in the most network-efficient way possible. Clients can use the appropriate server address as per the CIDR that they match. In case of multiple matches, clients should use the longest matching CIDR. The server returns only those CIDRs that it thinks that the client can match. For example: the master will return an internal IP CIDR only, if the client reaches the server using an internal IP. Server looks at X-Forwarded-For header or X-Real-Ip header or request.RemoteAddr (in that order) to get the client IP.
     * @type {Array<V1ServerAddressByClientCIDR>}
     * @memberof V1APIVersions
     */
    serverAddressByClientCIDRs: Array<V1ServerAddressByClientCIDR>;
    /**
     * versions are the api versions that are available.
     * @type {Array<string>}
     * @memberof V1APIVersions
     */
    versions: Array<string>;
}

export function V1APIVersionsFromJSON(json: any): V1APIVersions {
    return V1APIVersionsFromJSONTyped(json, false);
}

export function V1APIVersionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1APIVersions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'serverAddressByClientCIDRs': ((json['serverAddressByClientCIDRs'] as Array<any>).map(V1ServerAddressByClientCIDRFromJSON)),
        'versions': json['versions'],
    };
}

export function V1APIVersionsToJSON(value?: V1APIVersions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'serverAddressByClientCIDRs': ((value.serverAddressByClientCIDRs as Array<any>).map(V1ServerAddressByClientCIDRToJSON)),
        'versions': value.versions,
    };
}


