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
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 * @export
 * @interface V1beta1Subject
 */
export interface V1beta1Subject {
    /**
     * APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects.
     * @type {string}
     * @memberof V1beta1Subject
     */
    apiGroup?: string;
    /**
     * Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
     * @type {string}
     * @memberof V1beta1Subject
     */
    kind: string;
    /**
     * Name of the object being referenced.
     * @type {string}
     * @memberof V1beta1Subject
     */
    name: string;
    /**
     * Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error.
     * @type {string}
     * @memberof V1beta1Subject
     */
    namespace?: string;
}

export function V1beta1SubjectFromJSON(json: any): V1beta1Subject {
    return V1beta1SubjectFromJSONTyped(json, false);
}

export function V1beta1SubjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1Subject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiGroup': !exists(json, 'apiGroup') ? undefined : json['apiGroup'],
        'kind': json['kind'],
        'name': json['name'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
    };
}

export function V1beta1SubjectToJSON(value?: V1beta1Subject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiGroup': value.apiGroup,
        'kind': value.kind,
        'name': value.name,
        'namespace': value.namespace,
    };
}


