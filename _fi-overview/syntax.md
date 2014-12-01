---
layout: base
title:  'Structure'
permalink: fi/overview/syntax.html
---

# Syntax: General Principles

This document is a placeholder for the language-specific overview of
guidelines for syntactic annotation.

(note: some additional documentation-related material is for the time
found in [extra.html](extra.html))

## Unused UD dependency relations
<!-- parts of this section originally from TDT guidelines section 4.1 -->

Some dependency types defined by the general UD dependency annotation
guidelines are not applied in UD Finnish as the phenomenon they are
intended to annotate does not occur in Finnish. Specifically, the
following UD dependency relations are not applied in UD Finnish:

* [`expl`](u-dep/expl) (expletive)
* [`nsubjpass`](u-dep/nsubjpass) (passive nominal subject)
* [`csubjpass`](u-dep/csubjpass) (clausal passive subject)
* [`iobj`](u-dep/iobj) (indirect object)

Finnish existential clauses do not contain an expletive there, nor do
passive clauses have a subject. What is considered the passive subject
in e.g. English is the direct object in Finnish, and thus the
corresponding type, [`dobj`]() is used instead, or in the case of a
clause acting as the direct object, it is marked as a clausal
complement ([`ccomp`]()). Finally, indirect objects do not occur in
Finnish, as regardless of word order, the corresponding argument is
expressed by a nominal modifier ([`nmod`]()).

---

## Differences to TDT

UD Finnish annotation differs in a number of ways from the [Turku
Dependency Treebank](http://bionlp.utu.fi/fintreebank.html) annotation.
This section documents these differences.

(Please note: this part of the documentation is a work in progress.)

### Dependency type mapping

The following table provides a mapping from TDT dependency type labels
to (nearly) corresponding UD Finnish labels. (See also [issue
#64](https://github.com/UniversalDependencies/docs/issues/64).)

|----------------------------------------------------------|
| TDT          | UD Finnish          | Notes               |
|:-------------|:--------------------|:--------------------|
| `acomp`      | [xcomp:a]()         |                     |
| `adpos`      | [case]()            |                     |
| `compar`     | ?                   | Mapping pending     |
| `comparator` | [mark:comparator]() |                     |
| `complm`     | [mark]()            | Removed distinction |
| `csubj-cop`  | [csubj:cop]()       |                     |
| `gobj`       | [nmod:gobj]()       |                     |
| `gsubj`      | [nmod:gsubj]()      |                     |
| `iccomp`     | [ccomp:nf]()        |                     |
| `infmod`     | [acl:infmod]()      |                     |
| `intj`       | [discourse]()       |                     |
| `nn`         | [compound:nn]()     |                     |
| `nommod`     | [nmod]()            |                     |
| `nommod-own` | [nmod:own]()        |                     |
| `nsubj-cop`  | [nsubj:cop]()       |                     |
| `num`        | [nummod]()          |                     |
| `number`     | [compound]()        | Removed distinction |
| `partmod`    | [acl:partmod]()     |                     |
| `poss`       | [nmod:poss]()       |                     |
| `preconj`    | [cc:preconj]()      |                     |
| `prt`        | [compound:prt]()    |                     |
| `quantmod`   | [advmod:q]()        |                     |
| `rcmod`      | [acl:relcl]()       |                     |
| `rel`        | (multiple)          | See below           |
| `voc`        | [vocative]()        |                     |
|--------------|---------------------|---------------------|

The TDT dependency type `rel` is not mapped to any single UD type.
Instead (... TODO document mapping using second layer)

Additionally, the following dependency relations cannot be directly
created by mapping existing TDT annotations and may thus not occur in
the TDT-derived UD Finnish corpus:

* `discourse`
* `dislocated`
* `foreign`
* `list`
* `remnant`
* `reparandum`
