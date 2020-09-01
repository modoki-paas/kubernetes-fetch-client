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
 * CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
 * @export
 * @interface V1beta1CustomResourceDefinitionNames
 */
export interface V1beta1CustomResourceDefinitionNames {
    /**
     * categories is a list of grouped resources this custom resource belongs to (e.g. 'all'). This is published in API discovery documents, and used by clients to support invocations like `kubectl get all`.
     * @type {Array<string>}
     * @memberof V1beta1CustomResourceDefinitionNames
     */
    categories?: Array<string>;
    /**
     * kind is the serialized kind of the resource. It is normally CamelCase and singular. Custom resource instances will use this value as the `kind` attribute in API calls.
     * @type {string}
     * @memberof V1beta1CustomResourceDefinitionNames
     */
    kind: string;
    /**
     * listKind is the serialized kind of the list for this resource. Defaults to "`kind`List".
     * @type {string}
     * @memberof V1beta1CustomResourceDefinitionNames
     */
    listKind?: string;
    /**
     * plural is the plural name of the resource to serve. The custom resources are served under `/apis/<group>/<version>/.../<plural>`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`). Must be all lowercase.
     * @type {string}
     * @memberof V1beta1CustomResourceDefinitionNames
     */
    plural: string;
    /**
     * shortNames are short names for the resource, exposed in API discovery documents, and used by clients to support invocations like `kubectl get <shortname>`. It must be all lowercase.
     * @type {Array<string>}
     * @memberof V1beta1CustomResourceDefinitionNames
     */
    shortNames?: Array<string>;
    /**
     * singular is the singular name of the resource. It must be all lowercase. Defaults to lowercased `kind`.
     * @type {string}
     * @memberof V1beta1CustomResourceDefinitionNames
     */
    singular?: string;
}

export function V1beta1CustomResourceDefinitionNamesFromJSON(json: any): V1beta1CustomResourceDefinitionNames {
    return V1beta1CustomResourceDefinitionNamesFromJSONTyped(json, false);
}

export function V1beta1CustomResourceDefinitionNamesFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1CustomResourceDefinitionNames {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'categories': !exists(json, 'categories') ? undefined : json['categories'],
        'kind': json['kind'],
        'listKind': !exists(json, 'listKind') ? undefined : json['listKind'],
        'plural': json['plural'],
        'shortNames': !exists(json, 'shortNames') ? undefined : json['shortNames'],
        'singular': !exists(json, 'singular') ? undefined : json['singular'],
    };
}

export function V1beta1CustomResourceDefinitionNamesToJSON(value?: V1beta1CustomResourceDefinitionNames | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'categories': value.categories,
        'kind': value.kind,
        'listKind': value.listKind,
        'plural': value.plural,
        'shortNames': value.shortNames,
        'singular': value.singular,
    };
}


