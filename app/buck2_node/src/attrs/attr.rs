/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use std::fmt;
use std::fmt::Display;
use std::sync::Arc;

use allocative::Allocative;

use crate::attrs::attr_type::AttrType;
use crate::attrs::coerced_attr::CoercedAttr;
use crate::attrs::display::AttrDisplayWithContextExt;

/// Starlark compatible container for results from e.g. `attrs.string()`
#[derive(Clone, Debug, Eq, PartialEq, Hash, Allocative)]
pub struct Attribute {
    /// The default value. If None, the value is not optional and must be provided by the user
    default: Option<Arc<CoercedAttr>>,
    /// Documentation for what the attribute actually means
    doc: String,
    /// The coercer to take this parameter's value from Starlark value -> an
    /// internal representation
    coercer: AttrType,
}

impl Attribute {
    pub fn new(default: Option<Arc<CoercedAttr>>, doc: &str, coercer: AttrType) -> Self {
        Attribute {
            default,
            doc: doc.to_owned(),
            coercer,
        }
    }

    pub fn coercer(&self) -> &AttrType {
        &self.coercer
    }

    pub fn default(&self) -> Option<&Arc<CoercedAttr>> {
        self.default.as_ref()
    }

    pub fn doc(&self) -> &str {
        &self.doc
    }
}

impl Display for Attribute {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        self.coercer.fmt_with_default(
            f,
            self.default
                .as_ref()
                .map(|x| x.as_display_no_ctx().to_string())
                .as_deref(),
        )
    }
}

/// Attribute which may be either a custom value supplied by the user, or missing/None to indicate use the default.
pub enum CoercedValue {
    Custom(CoercedAttr),
    Default,
}

pub mod testing {
    // utilities to create attributes for testing
    use std::sync::Arc;

    use crate::attrs::attr::Attribute;
    use crate::attrs::attr_type::AttrType;
    use crate::attrs::coerced_attr::CoercedAttr;

    pub trait AttributeExt {
        fn testing_new(default: Option<Arc<CoercedAttr>>, coercer: AttrType) -> Self;
    }

    impl AttributeExt for Attribute {
        fn testing_new(default: Option<Arc<CoercedAttr>>, coercer: AttrType) -> Attribute {
            Attribute {
                default,
                doc: String::new(),
                coercer,
            }
        }
    }
}
