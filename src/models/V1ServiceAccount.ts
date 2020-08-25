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
    V1LocalObjectReference,
    V1LocalObjectReferenceFromJSON,
    V1LocalObjectReferenceFromJSONTyped,
    V1LocalObjectReferenceToJSON,
    V1ObjectMeta,
    V1ObjectMetaFromJSON,
    V1ObjectMetaFromJSONTyped,
    V1ObjectMetaToJSON,
    V1ObjectReference,
    V1ObjectReferenceFromJSON,
    V1ObjectReferenceFromJSONTyped,
    V1ObjectReferenceToJSON,
} from './';

/**
 * ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral systems, for an identity * a principal that can be authenticated and authorized * a set of secrets
 * @export
 * @interface V1ServiceAccount
 */
export interface V1ServiceAccount {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1ServiceAccount
     */
    apiVersion?: string;
    /**
     * AutomountServiceAccountToken indicates whether pods running as this service account should have an API token automatically mounted. Can be overridden at the pod level.
     * @type {boolean}
     * @memberof V1ServiceAccount
     */
    automountServiceAccountToken?: boolean;
    /**
     * ImagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. ImagePullSecrets are distinct from Secrets because Secrets can be mounted in the pod, but ImagePullSecrets are only accessed by the kubelet. More info: https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod
     * @type {Array<V1LocalObjectReference>}
     * @memberof V1ServiceAccount
     */
    imagePullSecrets?: Array<V1LocalObjectReference>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1ServiceAccount
     */
    kind?: string;
    /**
     * 
     * @type {V1ObjectMeta}
     * @memberof V1ServiceAccount
     */
    metadata?: V1ObjectMeta;
    /**
     * Secrets is the list of secrets allowed to be used by pods running using this ServiceAccount. More info: https://kubernetes.io/docs/concepts/configuration/secret
     * @type {Array<V1ObjectReference>}
     * @memberof V1ServiceAccount
     */
    secrets?: Array<V1ObjectReference>;
}

export function V1ServiceAccountFromJSON(json: any): V1ServiceAccount {
    return V1ServiceAccountFromJSONTyped(json, false);
}

export function V1ServiceAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ServiceAccount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'automountServiceAccountToken': !exists(json, 'automountServiceAccountToken') ? undefined : json['automountServiceAccountToken'],
        'imagePullSecrets': !exists(json, 'imagePullSecrets') ? undefined : ((json['imagePullSecrets'] as Array<any>).map(V1LocalObjectReferenceFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : V1ObjectMetaFromJSON(json['metadata']),
        'secrets': !exists(json, 'secrets') ? undefined : ((json['secrets'] as Array<any>).map(V1ObjectReferenceFromJSON)),
    };
}

export function V1ServiceAccountToJSON(value?: V1ServiceAccount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'automountServiceAccountToken': value.automountServiceAccountToken,
        'imagePullSecrets': value.imagePullSecrets === undefined ? undefined : ((value.imagePullSecrets as Array<any>).map(V1LocalObjectReferenceToJSON)),
        'kind': value.kind,
        'metadata': V1ObjectMetaToJSON(value.metadata),
        'secrets': value.secrets === undefined ? undefined : ((value.secrets as Array<any>).map(V1ObjectReferenceToJSON)),
    };
}


