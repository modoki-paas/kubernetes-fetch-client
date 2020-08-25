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
    V1alpha1GroupSubject,
    V1alpha1GroupSubjectFromJSON,
    V1alpha1GroupSubjectFromJSONTyped,
    V1alpha1GroupSubjectToJSON,
    V1alpha1ServiceAccountSubject,
    V1alpha1ServiceAccountSubjectFromJSON,
    V1alpha1ServiceAccountSubjectFromJSONTyped,
    V1alpha1ServiceAccountSubjectToJSON,
    V1alpha1UserSubject,
    V1alpha1UserSubjectFromJSON,
    V1alpha1UserSubjectFromJSONTyped,
    V1alpha1UserSubjectToJSON,
} from './';

/**
 * Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
 * @export
 * @interface FlowcontrolV1alpha1Subject
 */
export interface FlowcontrolV1alpha1Subject {
    /**
     * 
     * @type {V1alpha1GroupSubject}
     * @memberof FlowcontrolV1alpha1Subject
     */
    group?: V1alpha1GroupSubject;
    /**
     * Required
     * @type {string}
     * @memberof FlowcontrolV1alpha1Subject
     */
    kind: string;
    /**
     * 
     * @type {V1alpha1ServiceAccountSubject}
     * @memberof FlowcontrolV1alpha1Subject
     */
    serviceAccount?: V1alpha1ServiceAccountSubject;
    /**
     * 
     * @type {V1alpha1UserSubject}
     * @memberof FlowcontrolV1alpha1Subject
     */
    user?: V1alpha1UserSubject;
}

export function FlowcontrolV1alpha1SubjectFromJSON(json: any): FlowcontrolV1alpha1Subject {
    return FlowcontrolV1alpha1SubjectFromJSONTyped(json, false);
}

export function FlowcontrolV1alpha1SubjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlowcontrolV1alpha1Subject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'group': !exists(json, 'group') ? undefined : V1alpha1GroupSubjectFromJSON(json['group']),
        'kind': json['kind'],
        'serviceAccount': !exists(json, 'serviceAccount') ? undefined : V1alpha1ServiceAccountSubjectFromJSON(json['serviceAccount']),
        'user': !exists(json, 'user') ? undefined : V1alpha1UserSubjectFromJSON(json['user']),
    };
}

export function FlowcontrolV1alpha1SubjectToJSON(value?: FlowcontrolV1alpha1Subject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'group': V1alpha1GroupSubjectToJSON(value.group),
        'kind': value.kind,
        'serviceAccount': V1alpha1ServiceAccountSubjectToJSON(value.serviceAccount),
        'user': V1alpha1UserSubjectToJSON(value.user),
    };
}

