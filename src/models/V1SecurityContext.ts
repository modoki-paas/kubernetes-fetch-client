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
    V1Capabilities,
    V1CapabilitiesFromJSON,
    V1CapabilitiesFromJSONTyped,
    V1CapabilitiesToJSON,
    V1SELinuxOptions,
    V1SELinuxOptionsFromJSON,
    V1SELinuxOptionsFromJSONTyped,
    V1SELinuxOptionsToJSON,
    V1WindowsSecurityContextOptions,
    V1WindowsSecurityContextOptionsFromJSON,
    V1WindowsSecurityContextOptionsFromJSONTyped,
    V1WindowsSecurityContextOptionsToJSON,
} from './';

/**
 * SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.
 * @export
 * @interface V1SecurityContext
 */
export interface V1SecurityContext {
    /**
     * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN
     * @type {boolean}
     * @memberof V1SecurityContext
     */
    allowPrivilegeEscalation?: boolean;
    /**
     * 
     * @type {V1Capabilities}
     * @memberof V1SecurityContext
     */
    capabilities?: V1Capabilities;
    /**
     * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false.
     * @type {boolean}
     * @memberof V1SecurityContext
     */
    privileged?: boolean;
    /**
     * procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled.
     * @type {string}
     * @memberof V1SecurityContext
     */
    procMount?: string;
    /**
     * Whether this container has a read-only root filesystem. Default is false.
     * @type {boolean}
     * @memberof V1SecurityContext
     */
    readOnlyRootFilesystem?: boolean;
    /**
     * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
     * @type {number}
     * @memberof V1SecurityContext
     */
    runAsGroup?: number;
    /**
     * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
     * @type {boolean}
     * @memberof V1SecurityContext
     */
    runAsNonRoot?: boolean;
    /**
     * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
     * @type {number}
     * @memberof V1SecurityContext
     */
    runAsUser?: number;
    /**
     * 
     * @type {V1SELinuxOptions}
     * @memberof V1SecurityContext
     */
    seLinuxOptions?: V1SELinuxOptions;
    /**
     * 
     * @type {V1WindowsSecurityContextOptions}
     * @memberof V1SecurityContext
     */
    windowsOptions?: V1WindowsSecurityContextOptions;
}

export function V1SecurityContextFromJSON(json: any): V1SecurityContext {
    return V1SecurityContextFromJSONTyped(json, false);
}

export function V1SecurityContextFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SecurityContext {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowPrivilegeEscalation': !exists(json, 'allowPrivilegeEscalation') ? undefined : json['allowPrivilegeEscalation'],
        'capabilities': !exists(json, 'capabilities') ? undefined : V1CapabilitiesFromJSON(json['capabilities']),
        'privileged': !exists(json, 'privileged') ? undefined : json['privileged'],
        'procMount': !exists(json, 'procMount') ? undefined : json['procMount'],
        'readOnlyRootFilesystem': !exists(json, 'readOnlyRootFilesystem') ? undefined : json['readOnlyRootFilesystem'],
        'runAsGroup': !exists(json, 'runAsGroup') ? undefined : json['runAsGroup'],
        'runAsNonRoot': !exists(json, 'runAsNonRoot') ? undefined : json['runAsNonRoot'],
        'runAsUser': !exists(json, 'runAsUser') ? undefined : json['runAsUser'],
        'seLinuxOptions': !exists(json, 'seLinuxOptions') ? undefined : V1SELinuxOptionsFromJSON(json['seLinuxOptions']),
        'windowsOptions': !exists(json, 'windowsOptions') ? undefined : V1WindowsSecurityContextOptionsFromJSON(json['windowsOptions']),
    };
}

export function V1SecurityContextToJSON(value?: V1SecurityContext | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowPrivilegeEscalation': value.allowPrivilegeEscalation,
        'capabilities': V1CapabilitiesToJSON(value.capabilities),
        'privileged': value.privileged,
        'procMount': value.procMount,
        'readOnlyRootFilesystem': value.readOnlyRootFilesystem,
        'runAsGroup': value.runAsGroup,
        'runAsNonRoot': value.runAsNonRoot,
        'runAsUser': value.runAsUser,
        'seLinuxOptions': V1SELinuxOptionsToJSON(value.seLinuxOptions),
        'windowsOptions': V1WindowsSecurityContextOptionsToJSON(value.windowsOptions),
    };
}

