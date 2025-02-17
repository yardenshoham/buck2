/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

//! Common utilities for bxl
use std::sync::Arc;

use buck2_core::configuration::pair::ConfigurationNoExec;
use buck2_core::execution_types::execution::ExecutionPlatform;
use buck2_core::execution_types::execution::ExecutionPlatformResolution;
use buck2_core::execution_types::executor_config::CommandExecutorConfig;
use buck2_core::execution_types::executor_config::CommandGenerationOptions;
use buck2_core::execution_types::executor_config::Executor;
use buck2_core::execution_types::executor_config::LocalExecutorOptions;
use buck2_core::execution_types::executor_config::PathSeparatorKind;
use once_cell::sync::Lazy;

// TODO(bobyf) this should be configured by the bxl function similar to
// execution groups, which we don't have yet. Currently we hard code this to
// local since IDE will mostly be invoking local tools anyways
pub static EXECUTION_PLATFORM: Lazy<ExecutionPlatformResolution> = Lazy::new(|| {
    ExecutionPlatformResolution::new(
        Some(ExecutionPlatform::legacy_execution_platform(
            Arc::new(CommandExecutorConfig {
                executor: Executor::Local(LocalExecutorOptions::default()),
                options: CommandGenerationOptions {
                    path_separator: PathSeparatorKind::system_default(),
                    output_paths_behavior: Default::default(),
                },
            }),
            ConfigurationNoExec::unspecified(),
        )),
        vec![],
    )
});
