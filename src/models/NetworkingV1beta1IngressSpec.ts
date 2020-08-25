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
    NetworkingV1beta1IngressBackend,
    NetworkingV1beta1IngressBackendFromJSON,
    NetworkingV1beta1IngressBackendFromJSONTyped,
    NetworkingV1beta1IngressBackendToJSON,
    NetworkingV1beta1IngressRule,
    NetworkingV1beta1IngressRuleFromJSON,
    NetworkingV1beta1IngressRuleFromJSONTyped,
    NetworkingV1beta1IngressRuleToJSON,
    NetworkingV1beta1IngressTLS,
    NetworkingV1beta1IngressTLSFromJSON,
    NetworkingV1beta1IngressTLSFromJSONTyped,
    NetworkingV1beta1IngressTLSToJSON,
} from './';

/**
 * IngressSpec describes the Ingress the user wishes to exist.
 * @export
 * @interface NetworkingV1beta1IngressSpec
 */
export interface NetworkingV1beta1IngressSpec {
    /**
     * 
     * @type {NetworkingV1beta1IngressBackend}
     * @memberof NetworkingV1beta1IngressSpec
     */
    backend?: NetworkingV1beta1IngressBackend;
    /**
     * IngressClassName is the name of the IngressClass cluster resource. The associated IngressClass defines which controller will implement the resource. This replaces the deprecated `kubernetes.io/ingress.class` annotation. For backwards compatibility, when that annotation is set, it must be given precedence over this field. The controller may emit a warning if the field and annotation have different values. Implementations of this API should ignore Ingresses without a class specified. An IngressClass resource may be marked as default, which can be used to set a default value for this field. For more information, refer to the IngressClass documentation.
     * @type {string}
     * @memberof NetworkingV1beta1IngressSpec
     */
    ingressClassName?: string;
    /**
     * A list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend.
     * @type {Array<NetworkingV1beta1IngressRule>}
     * @memberof NetworkingV1beta1IngressSpec
     */
    rules?: Array<NetworkingV1beta1IngressRule>;
    /**
     * TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI.
     * @type {Array<NetworkingV1beta1IngressTLS>}
     * @memberof NetworkingV1beta1IngressSpec
     */
    tls?: Array<NetworkingV1beta1IngressTLS>;
}

export function NetworkingV1beta1IngressSpecFromJSON(json: any): NetworkingV1beta1IngressSpec {
    return NetworkingV1beta1IngressSpecFromJSONTyped(json, false);
}

export function NetworkingV1beta1IngressSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkingV1beta1IngressSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'backend': !exists(json, 'backend') ? undefined : NetworkingV1beta1IngressBackendFromJSON(json['backend']),
        'ingressClassName': !exists(json, 'ingressClassName') ? undefined : json['ingressClassName'],
        'rules': !exists(json, 'rules') ? undefined : ((json['rules'] as Array<any>).map(NetworkingV1beta1IngressRuleFromJSON)),
        'tls': !exists(json, 'tls') ? undefined : ((json['tls'] as Array<any>).map(NetworkingV1beta1IngressTLSFromJSON)),
    };
}

export function NetworkingV1beta1IngressSpecToJSON(value?: NetworkingV1beta1IngressSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'backend': NetworkingV1beta1IngressBackendToJSON(value.backend),
        'ingressClassName': value.ingressClassName,
        'rules': value.rules === undefined ? undefined : ((value.rules as Array<any>).map(NetworkingV1beta1IngressRuleToJSON)),
        'tls': value.tls === undefined ? undefined : ((value.tls as Array<any>).map(NetworkingV1beta1IngressTLSToJSON)),
    };
}

