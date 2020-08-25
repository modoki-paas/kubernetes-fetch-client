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
    V1beta1AllowedCSIDriver,
    V1beta1AllowedCSIDriverFromJSON,
    V1beta1AllowedCSIDriverFromJSONTyped,
    V1beta1AllowedCSIDriverToJSON,
    V1beta1AllowedFlexVolume,
    V1beta1AllowedFlexVolumeFromJSON,
    V1beta1AllowedFlexVolumeFromJSONTyped,
    V1beta1AllowedFlexVolumeToJSON,
    V1beta1AllowedHostPath,
    V1beta1AllowedHostPathFromJSON,
    V1beta1AllowedHostPathFromJSONTyped,
    V1beta1AllowedHostPathToJSON,
    V1beta1FSGroupStrategyOptions,
    V1beta1FSGroupStrategyOptionsFromJSON,
    V1beta1FSGroupStrategyOptionsFromJSONTyped,
    V1beta1FSGroupStrategyOptionsToJSON,
    V1beta1HostPortRange,
    V1beta1HostPortRangeFromJSON,
    V1beta1HostPortRangeFromJSONTyped,
    V1beta1HostPortRangeToJSON,
    V1beta1RunAsGroupStrategyOptions,
    V1beta1RunAsGroupStrategyOptionsFromJSON,
    V1beta1RunAsGroupStrategyOptionsFromJSONTyped,
    V1beta1RunAsGroupStrategyOptionsToJSON,
    V1beta1RunAsUserStrategyOptions,
    V1beta1RunAsUserStrategyOptionsFromJSON,
    V1beta1RunAsUserStrategyOptionsFromJSONTyped,
    V1beta1RunAsUserStrategyOptionsToJSON,
    V1beta1RuntimeClassStrategyOptions,
    V1beta1RuntimeClassStrategyOptionsFromJSON,
    V1beta1RuntimeClassStrategyOptionsFromJSONTyped,
    V1beta1RuntimeClassStrategyOptionsToJSON,
    V1beta1SELinuxStrategyOptions,
    V1beta1SELinuxStrategyOptionsFromJSON,
    V1beta1SELinuxStrategyOptionsFromJSONTyped,
    V1beta1SELinuxStrategyOptionsToJSON,
    V1beta1SupplementalGroupsStrategyOptions,
    V1beta1SupplementalGroupsStrategyOptionsFromJSON,
    V1beta1SupplementalGroupsStrategyOptionsFromJSONTyped,
    V1beta1SupplementalGroupsStrategyOptionsToJSON,
} from './';

/**
 * PodSecurityPolicySpec defines the policy enforced.
 * @export
 * @interface V1beta1PodSecurityPolicySpec
 */
export interface V1beta1PodSecurityPolicySpec {
    /**
     * allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true.
     * @type {boolean}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    allowPrivilegeEscalation?: boolean;
    /**
     * AllowedCSIDrivers is a whitelist of inline CSI drivers that must be explicitly set to be embedded within a pod spec. An empty value indicates that any CSI driver can be used for inline ephemeral volumes. This is an alpha field, and is only honored if the API server enables the CSIInlineVolume feature gate.
     * @type {Array<V1beta1AllowedCSIDriver>}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    allowedCSIDrivers?: Array<V1beta1AllowedCSIDriver>;
    /**
     * allowedCapabilities is a list of capabilities that can be requested to add to the container. Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities.
     * @type {Array<string>}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    allowedCapabilities?: Array<string>;
    /**
     * allowedFlexVolumes is a whitelist of allowed Flexvolumes.  Empty or nil indicates that all Flexvolumes may be used.  This parameter is effective only when the usage of the Flexvolumes is allowed in the "volumes" field.
     * @type {Array<V1beta1AllowedFlexVolume>}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    allowedFlexVolumes?: Array<V1beta1AllowedFlexVolume>;
    /**
     * allowedHostPaths is a white list of allowed host paths. Empty indicates that all host paths may be used.
     * @type {Array<V1beta1AllowedHostPath>}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    allowedHostPaths?: Array<V1beta1AllowedHostPath>;
    /**
     * AllowedProcMountTypes is a whitelist of allowed ProcMountTypes. Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled.
     * @type {Array<string>}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    allowedProcMountTypes?: Array<string>;
    /**
     * allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to whitelist all allowed unsafe sysctls explicitly to avoid rejection.
     * 
     * Examples: e.g. "foo/*" allows "foo/bar", "foo/baz", etc. e.g. "foo.*" allows "foo.bar", "foo.baz", etc.
     * @type {Array<string>}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    allowedUnsafeSysctls?: Array<string>;
    /**
     * defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.  You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list.
     * @type {Array<string>}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    defaultAddCapabilities?: Array<string>;
    /**
     * defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process.
     * @type {boolean}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    defaultAllowPrivilegeEscalation?: boolean;
    /**
     * forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.
     * 
     * Examples: e.g. "foo/*" forbids "foo/bar", "foo/baz", etc. e.g. "foo.*" forbids "foo.bar", "foo.baz", etc.
     * @type {Array<string>}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    forbiddenSysctls?: Array<string>;
    /**
     * 
     * @type {V1beta1FSGroupStrategyOptions}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    fsGroup: V1beta1FSGroupStrategyOptions;
    /**
     * hostIPC determines if the policy allows the use of HostIPC in the pod spec.
     * @type {boolean}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    hostIPC?: boolean;
    /**
     * hostNetwork determines if the policy allows the use of HostNetwork in the pod spec.
     * @type {boolean}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    hostNetwork?: boolean;
    /**
     * hostPID determines if the policy allows the use of HostPID in the pod spec.
     * @type {boolean}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    hostPID?: boolean;
    /**
     * hostPorts determines which host port ranges are allowed to be exposed.
     * @type {Array<V1beta1HostPortRange>}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    hostPorts?: Array<V1beta1HostPortRange>;
    /**
     * privileged determines if a pod can request to be run as privileged.
     * @type {boolean}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    privileged?: boolean;
    /**
     * readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.  If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to.
     * @type {boolean}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    readOnlyRootFilesystem?: boolean;
    /**
     * requiredDropCapabilities are the capabilities that will be dropped from the container.  These are required to be dropped and cannot be added.
     * @type {Array<string>}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    requiredDropCapabilities?: Array<string>;
    /**
     * 
     * @type {V1beta1RunAsGroupStrategyOptions}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    runAsGroup?: V1beta1RunAsGroupStrategyOptions;
    /**
     * 
     * @type {V1beta1RunAsUserStrategyOptions}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    runAsUser: V1beta1RunAsUserStrategyOptions;
    /**
     * 
     * @type {V1beta1RuntimeClassStrategyOptions}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    runtimeClass?: V1beta1RuntimeClassStrategyOptions;
    /**
     * 
     * @type {V1beta1SELinuxStrategyOptions}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    seLinux: V1beta1SELinuxStrategyOptions;
    /**
     * 
     * @type {V1beta1SupplementalGroupsStrategyOptions}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    supplementalGroups: V1beta1SupplementalGroupsStrategyOptions;
    /**
     * volumes is a white list of allowed volume plugins. Empty indicates that no volumes may be used. To allow all volumes you may use '*'.
     * @type {Array<string>}
     * @memberof V1beta1PodSecurityPolicySpec
     */
    volumes?: Array<string>;
}

export function V1beta1PodSecurityPolicySpecFromJSON(json: any): V1beta1PodSecurityPolicySpec {
    return V1beta1PodSecurityPolicySpecFromJSONTyped(json, false);
}

export function V1beta1PodSecurityPolicySpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1PodSecurityPolicySpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowPrivilegeEscalation': !exists(json, 'allowPrivilegeEscalation') ? undefined : json['allowPrivilegeEscalation'],
        'allowedCSIDrivers': !exists(json, 'allowedCSIDrivers') ? undefined : ((json['allowedCSIDrivers'] as Array<any>).map(V1beta1AllowedCSIDriverFromJSON)),
        'allowedCapabilities': !exists(json, 'allowedCapabilities') ? undefined : json['allowedCapabilities'],
        'allowedFlexVolumes': !exists(json, 'allowedFlexVolumes') ? undefined : ((json['allowedFlexVolumes'] as Array<any>).map(V1beta1AllowedFlexVolumeFromJSON)),
        'allowedHostPaths': !exists(json, 'allowedHostPaths') ? undefined : ((json['allowedHostPaths'] as Array<any>).map(V1beta1AllowedHostPathFromJSON)),
        'allowedProcMountTypes': !exists(json, 'allowedProcMountTypes') ? undefined : json['allowedProcMountTypes'],
        'allowedUnsafeSysctls': !exists(json, 'allowedUnsafeSysctls') ? undefined : json['allowedUnsafeSysctls'],
        'defaultAddCapabilities': !exists(json, 'defaultAddCapabilities') ? undefined : json['defaultAddCapabilities'],
        'defaultAllowPrivilegeEscalation': !exists(json, 'defaultAllowPrivilegeEscalation') ? undefined : json['defaultAllowPrivilegeEscalation'],
        'forbiddenSysctls': !exists(json, 'forbiddenSysctls') ? undefined : json['forbiddenSysctls'],
        'fsGroup': V1beta1FSGroupStrategyOptionsFromJSON(json['fsGroup']),
        'hostIPC': !exists(json, 'hostIPC') ? undefined : json['hostIPC'],
        'hostNetwork': !exists(json, 'hostNetwork') ? undefined : json['hostNetwork'],
        'hostPID': !exists(json, 'hostPID') ? undefined : json['hostPID'],
        'hostPorts': !exists(json, 'hostPorts') ? undefined : ((json['hostPorts'] as Array<any>).map(V1beta1HostPortRangeFromJSON)),
        'privileged': !exists(json, 'privileged') ? undefined : json['privileged'],
        'readOnlyRootFilesystem': !exists(json, 'readOnlyRootFilesystem') ? undefined : json['readOnlyRootFilesystem'],
        'requiredDropCapabilities': !exists(json, 'requiredDropCapabilities') ? undefined : json['requiredDropCapabilities'],
        'runAsGroup': !exists(json, 'runAsGroup') ? undefined : V1beta1RunAsGroupStrategyOptionsFromJSON(json['runAsGroup']),
        'runAsUser': V1beta1RunAsUserStrategyOptionsFromJSON(json['runAsUser']),
        'runtimeClass': !exists(json, 'runtimeClass') ? undefined : V1beta1RuntimeClassStrategyOptionsFromJSON(json['runtimeClass']),
        'seLinux': V1beta1SELinuxStrategyOptionsFromJSON(json['seLinux']),
        'supplementalGroups': V1beta1SupplementalGroupsStrategyOptionsFromJSON(json['supplementalGroups']),
        'volumes': !exists(json, 'volumes') ? undefined : json['volumes'],
    };
}

export function V1beta1PodSecurityPolicySpecToJSON(value?: V1beta1PodSecurityPolicySpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowPrivilegeEscalation': value.allowPrivilegeEscalation,
        'allowedCSIDrivers': value.allowedCSIDrivers === undefined ? undefined : ((value.allowedCSIDrivers as Array<any>).map(V1beta1AllowedCSIDriverToJSON)),
        'allowedCapabilities': value.allowedCapabilities,
        'allowedFlexVolumes': value.allowedFlexVolumes === undefined ? undefined : ((value.allowedFlexVolumes as Array<any>).map(V1beta1AllowedFlexVolumeToJSON)),
        'allowedHostPaths': value.allowedHostPaths === undefined ? undefined : ((value.allowedHostPaths as Array<any>).map(V1beta1AllowedHostPathToJSON)),
        'allowedProcMountTypes': value.allowedProcMountTypes,
        'allowedUnsafeSysctls': value.allowedUnsafeSysctls,
        'defaultAddCapabilities': value.defaultAddCapabilities,
        'defaultAllowPrivilegeEscalation': value.defaultAllowPrivilegeEscalation,
        'forbiddenSysctls': value.forbiddenSysctls,
        'fsGroup': V1beta1FSGroupStrategyOptionsToJSON(value.fsGroup),
        'hostIPC': value.hostIPC,
        'hostNetwork': value.hostNetwork,
        'hostPID': value.hostPID,
        'hostPorts': value.hostPorts === undefined ? undefined : ((value.hostPorts as Array<any>).map(V1beta1HostPortRangeToJSON)),
        'privileged': value.privileged,
        'readOnlyRootFilesystem': value.readOnlyRootFilesystem,
        'requiredDropCapabilities': value.requiredDropCapabilities,
        'runAsGroup': V1beta1RunAsGroupStrategyOptionsToJSON(value.runAsGroup),
        'runAsUser': V1beta1RunAsUserStrategyOptionsToJSON(value.runAsUser),
        'runtimeClass': V1beta1RuntimeClassStrategyOptionsToJSON(value.runtimeClass),
        'seLinux': V1beta1SELinuxStrategyOptionsToJSON(value.seLinux),
        'supplementalGroups': V1beta1SupplementalGroupsStrategyOptionsToJSON(value.supplementalGroups),
        'volumes': value.volumes,
    };
}


