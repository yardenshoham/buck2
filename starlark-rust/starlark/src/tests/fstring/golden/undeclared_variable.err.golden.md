# @generated
# To regenerate, run:
# ```
# STARLARK_RUST_REGENERATE_GOLDEN_TESTS=1 cargo test -p starlark --lib tests
# ```

error: Variable `bar` not found, did you mean `str`?
 --> assert.bzl:1:8
  |
1 | f'foo {bar}'
  |        ^^^
  |
