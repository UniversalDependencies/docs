---
layout: entry
title:  'foreign'
shortdef : 'foreign'
---

The dependency relation `foreign` is used to label sequences
of unanalyzed foreign words. These are annotated without regard
to internal structure, marking all words in the sequence direct
dependents of the head.

Note that `foreign` does not apply to foreign *names*, which
are annotated using [name](), or to sequences of *analyzed* words
of foreign origin (such as established loanwords), which are
annotated with their full syntactic structure.

(TODO example)

## Diffs

### Turku Dependency Treebank

Contrary to the general UD definition of [u-dep/foreign](), in
UD Finnish the last word in a sequence of foreign words is
considered the head.
