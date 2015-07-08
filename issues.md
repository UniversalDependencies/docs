---
layout: base
title:  'Unresolved Issues'
---

## Issues to discuss at the Uppsala meeting

The main goal for the next UD release is to improve consistency across languages in the application of the UD guidelines. This will require resolving a number of issues where the guidelines are not specific enough to prescribe a unique analysis and where treebanks are known to diverge (or can be expected to diverge). Below we list a number of such issues that are suitable for discussion at the Uppsala meeting and where guidelines may need to be modified in future versions of the UD standard.

This list does not replace the Github <a href="https://github.com/universaldependencies/docs/issues">issue tracker</a>. It is rather a subset of open issues from the issue tracker, with main points emphasized here. The relevant issues in the issue tracker should be referenced from here; comments and on-line discussion should remain there.

* Ellipsis.
  See the
  <a href="http://universaldependencies.github.io/docs/cs/overview/specific-syntax.html#ellipsis">Czech documentation</a>
  for an overview of possibilities.
  A related issue is <a href="https://github.com/UniversalDependencies/docs/issues/164">#164</a> (multiple root trees).
  Questions:
  - Are we satisfied with the [u-dep/remnant]() analysis in cases where function word promotion by head elision is not applicable?
  - Even if we are, what do we do in cases where it cannot be applied (such as two orphaned verb arguments, no coordination)?
  - Do we still believe that `NULL` nodes are evil?
  Ideally, we should collect all examples related to ellipsis and provide guidelines how they should be analyzed.

* Multi-word abbreviations (<a href="https://github.com/UniversalDependencies/docs/issues/181">#181</a>).
  Some treebanks may split them to syntactic words? Others keep them together.
  The issue is also related to how different treebanks tokenize abbreviations and their punctuation.
