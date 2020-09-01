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
    V1beta1SubjectAccessReviewSpec,
    V1beta1SubjectAccessReviewSpecFromJSON,
    V1beta1SubjectAccessReviewSpecFromJSONTyped,
    V1beta1SubjectAccessReviewSpecToJSON,
    V1beta1SubjectAccessReviewStatus,
    V1beta1SubjectAccessReviewStatusFromJSON,
    V1beta1SubjectAccessReviewStatusFromJSONTyped,
    V1beta1SubjectAccessReviewStatusToJSON,
} from './';

/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 * @export
 * @interface V1beta1LocalSubjectAccessReview
 */
export interface V1beta1LocalSubjectAccessReview {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1LocalSubjectAccessReview
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1LocalSubjectAccessReview
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1beta1LocalSubjectAccessReview
     */
    metadata?: V1ObjectMeta;
    /**
     * 
     * @type {V1beta1SubjectAccessReviewSpec}
     * @memberof V1beta1LocalSubjectAccessReview
     */
    spec: V1beta1SubjectAccessReviewSpec;
    /**
     * 
     * @type {V1beta1SubjectAccessReviewStatus}
     * @memberof V1beta1LocalSubjectAccessReview
     */
    status?: V1beta1SubjectAccessReviewStatus;
}

export function V1beta1LocalSubjectAccessReviewFromJSON(json: any): V1beta1LocalSubjectAccessReview {
    return V1beta1LocalSubjectAccessReviewFromJSONTyped(json, false);
}

export function V1beta1LocalSubjectAccessReviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1LocalSubjectAccessReview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'spec': V1beta1SubjectAccessReviewSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1beta1SubjectAccessReviewStatusFromJSON(json['status']),
    };
}

export function V1beta1LocalSubjectAccessReviewToJSON(value?: V1beta1LocalSubjectAccessReview | null): any {
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
        'spec': V1beta1SubjectAccessReviewSpecToJSON(value.spec),
        'status': V1beta1SubjectAccessReviewStatusToJSON(value.status),
    };
}


