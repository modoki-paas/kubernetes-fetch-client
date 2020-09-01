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
 * This information is immutable after the request is created. Only the Request and Usages fields can be set on creation, other fields are derived by Kubernetes and cannot be modified by users.
 * @export
 * @interface V1beta1CertificateSigningRequestSpec
 */
export interface V1beta1CertificateSigningRequestSpec {
    /**
     * Extra information about the requesting user. See user.Info interface for details.
     * @type {{ [key: string]: Array<string>; }}
     * @memberof V1beta1CertificateSigningRequestSpec
     */
    extra?: { [key: string]: Array<string>; };
    /**
     * Group information about the requesting user. See user.Info interface for details.
     * @type {Array<string>}
     * @memberof V1beta1CertificateSigningRequestSpec
     */
    groups?: Array<string>;
    /**
     * Base64-encoded PKCS#10 CSR data
     * @type {string}
     * @memberof V1beta1CertificateSigningRequestSpec
     */
    request: string;
    /**
     * Requested signer for the request. It is a qualified name in the form: `scope-hostname.io/name`. If empty, it will be defaulted:
     *  1. If it's a kubelet client certificate, it is assigned
     *     "kubernetes.io/kube-apiserver-client-kubelet".
     *  2. If it's a kubelet serving certificate, it is assigned
     *     "kubernetes.io/kubelet-serving".
     *  3. Otherwise, it is assigned "kubernetes.io/legacy-unknown".
     * Distribution of trust for signers happens out of band. You can select on this field using `spec.signerName`.
     * @type {string}
     * @memberof V1beta1CertificateSigningRequestSpec
     */
    signerName?: string;
    /**
     * UID information about the requesting user. See user.Info interface for details.
     * @type {string}
     * @memberof V1beta1CertificateSigningRequestSpec
     */
    uid?: string;
    /**
     * allowedUsages specifies a set of usage contexts the key will be valid for. See: https://tools.ietf.org/html/rfc5280#section-4.2.1.3
     *      https://tools.ietf.org/html/rfc5280#section-4.2.1.12
     * @type {Array<string>}
     * @memberof V1beta1CertificateSigningRequestSpec
     */
    usages?: Array<string>;
    /**
     * Information about the requesting user. See user.Info interface for details.
     * @type {string}
     * @memberof V1beta1CertificateSigningRequestSpec
     */
    username?: string;
}

export function V1beta1CertificateSigningRequestSpecFromJSON(json: any): V1beta1CertificateSigningRequestSpec {
    return V1beta1CertificateSigningRequestSpecFromJSONTyped(json, false);
}

export function V1beta1CertificateSigningRequestSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1CertificateSigningRequestSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'extra': !exists(json, 'extra') ? undefined : json['extra'],
        'groups': !exists(json, 'groups') ? undefined : json['groups'],
        'request': json['request'],
        'signerName': !exists(json, 'signerName') ? undefined : json['signerName'],
        'uid': !exists(json, 'uid') ? undefined : json['uid'],
        'usages': !exists(json, 'usages') ? undefined : json['usages'],
        'username': !exists(json, 'username') ? undefined : json['username'],
    };
}

export function V1beta1CertificateSigningRequestSpecToJSON(value?: V1beta1CertificateSigningRequestSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'extra': value.extra,
        'groups': value.groups,
        'request': value.request,
        'signerName': value.signerName,
        'uid': value.uid,
        'usages': value.usages,
        'username': value.username,
    };
}


