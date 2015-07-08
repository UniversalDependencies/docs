---
layout: base
title:  'Unresolved Issues'
---

## Issues to resolve at the Uppsala meeting

This is a list of selected issues that need more discussion and may lead to future modifications of the UD standard.
It does not replace the Github <a href="https://github.com/universaldependencies/docs/issues">Issue Tracker</a>.
It is rather a subset of open issues from the issue tracker, with main points emphasized here.
The relevant issues in the issue tracker should be referenced from here; comments and on-line discussion should
remain there.

* Ellipsis.
  See the
  <a href="http://universaldependencies.github.io/docs/cs/overview/specific-syntax.html#ellipsis">Czech documentation</a>
  for an overview of possibilities.
  A related issue is <a href="https://github.com/UniversalDependencies/docs/issues/164">#164</a> (multiple root trees).
  Questions:
  Are we satisfied with the [u-dep/remnant]() analysis?
  Even if we are, what do we do in cases where it cannot be applied (such as two orphaned verb arguments, no coordination)?
  Do we still believe that `NULL` nodes are evil?
  Ideally, we should collect all examples related to ellipsis and provide guidelines how they should be analyzed.
* Multi-word abbreviations (<a href="https://github.com/UniversalDependencies/docs/issues/181">#181</a>).
  Some treebanks may split them to syntactic words? Others keep them together.
  The issue is also related to how different treebanks tokenize abbreviations and their punctuation.
