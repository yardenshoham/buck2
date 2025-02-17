# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under both the MIT license found in the
# LICENSE-MIT file in the root directory of this source tree and the Apache
# License, Version 2.0 found in the LICENSE-APACHE file in the root directory
# of this source tree.

load(
    "@prelude//utils:utils.bzl",
    "expect",
    "flatten",
)

# Model the various "split" debug scenarios (e.g. `-gsplit-dwarf`).
SplitDebugMode = enum(
    # Debug info, if present, is inline in the object file, and will be linked
    # into executables and shared libraries (e.g. traditional behavior when
    # using `-g`).
    "none",
    # Debug info. if present is included in the object file, but will *not* be
    # linked into executables and shared libraries.  This style usually requires
    # an additional step, separate from the link, to combine and package debug
    # info (e.g. `dSYM`, `dwp`).
    "single",
    # FIXME(agallagher): Add support for "split", which probably just requires
    # modifying `compile_cxx` to add a `.dwo` file as a hidden output in this
    # case.
    #"split",
)

ExternalDebugInfo = record(
    label = field("label"),
    artifacts = field(["artifact"]),
)

def _get_debug_artifacts(entries: [ExternalDebugInfo.type]) -> ["artifact"]:
    return flatten([entry.artifacts for entry in entries])

ExternalDebugInfoTSet = transitive_set(args_projections = {
    "external_debug_info": _get_debug_artifacts,
})

def maybe_external_debug_info(
        actions: "actions",
        label: ["label", None] = None,
        artifacts: ["artifact"] = [],
        infos: [ExternalDebugInfo.type] = [],
        children: [[ExternalDebugInfoTSet.type, None]] = []) -> [ExternalDebugInfoTSet.type, None]:
    # As a convenience for our callers, filter our `None` children.
    children = [c for c in children if c != None]

    # Build list of all non-child values.
    values = []
    if artifacts:
        expect(label != None)
        values.append(ExternalDebugInfo(label = label, artifacts = artifacts))
    values.extend(infos)

    # If there's no children or artifacts, return `None`.
    if not values and not children:
        return None

    # We only build a `ExternalDebugInfoTSet` if there's something to package.
    kwargs = {}
    if values:
        kwargs["value"] = values
    if children:
        kwargs["children"] = children
    return actions.tset(ExternalDebugInfoTSet, **kwargs)

def project_external_debug_info(
        actions: "actions",
        infos: [[ExternalDebugInfoTSet.type, None]] = []) -> ["transitive_set_args_projection"]:
    """
    Helper to project a list of optional tsets.
    """

    info = maybe_external_debug_info(
        actions = actions,
        children = infos,
    )

    if info == None:
        return []

    return [info.project_as_args("external_debug_info")]
