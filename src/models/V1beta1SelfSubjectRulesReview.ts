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
    V1ObjectMeta,
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
    V1beta1SelfSubjectRulesReviewSpec,
    V1beta1SelfSubjectRulesReviewSpecFromJSON,
    V1beta1SelfSubjectRulesReviewSpecFromJSONTyped,
    V1beta1SelfSubjectRulesReviewSpecToJSON,
    V1beta1SubjectRulesReviewStatus,
    V1beta1SubjectRulesReviewStatusFromJSON,
    V1beta1SubjectRulesReviewStatusFromJSONTyped,
    V1beta1SubjectRulesReviewStatusToJSON,
} from './';

/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 * @export
 * @interface V1beta1SelfSubjectRulesReview
 */
export interface V1beta1SelfSubjectRulesReview {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1SelfSubjectRulesReview
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1SelfSubjectRulesReview
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1beta1SelfSubjectRulesReview
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1beta1SelfSubjectRulesReviewSpec}
     * @memberof V1beta1SelfSubjectRulesReview
     */
    spec: V1beta1SelfSubjectRulesReviewSpec;
    /**
     * 
     * @type {V1beta1SubjectRulesReviewStatus}
     * @memberof V1beta1SelfSubjectRulesReview
     */
    status?: V1beta1SubjectRulesReviewStatus;
}

export function V1beta1SelfSubjectRulesReviewFromJSON(json: any): V1beta1SelfSubjectRulesReview {
    return V1beta1SelfSubjectRulesReviewFromJSONTyped(json, false);
}

export function V1beta1SelfSubjectRulesReviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1SelfSubjectRulesReview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': V1beta1SelfSubjectRulesReviewSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1beta1SubjectRulesReviewStatusFromJSON(json['status']),
    };
}

export function V1beta1SelfSubjectRulesReviewToJSON(value?: V1beta1SelfSubjectRulesReview | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': V1ObjectMetaToJSON(value.metadata),
        'spec': V1beta1SelfSubjectRulesReviewSpecToJSON(value.spec),
        'status': V1beta1SubjectRulesReviewStatusToJSON(value.status),
    };
}


