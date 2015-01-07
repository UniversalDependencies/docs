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

## New dependency relations
<!-- parts of this section originally from TDT guidelines section 4.2 -->

There are also dependency types that are specific to the UD Finnish
scheme.

The dependency types [`nmod:gsubj`]() and [`nmod:gobj`]() were added
to accommodate the frequent constructions of nouns that take a
subject- or object-like argument. The genitive subject and object take
the form of a genitive modifier, and thus they are subtypes of
[`nmod:poss`]().

The nominal and clausal subject types have received a new subtype
each, [`nsubj:cop`]() and [`csubj:cop`](), respectively, to be used
for subjects of copular clauses. These two new types come in place of
the passive subject types that are, as explained above, not applied in
UD Finnish.

We have introduced two new subtypes for open clausal complements
([`xcomp`]()): 1) *clausal complement with different subject*, [`xcomp:ds`](). This is
to distinguish which of the sentence elements is inherited from the higher clause. 2) *adjectival complement*, [`xcomp:a`](), to be used when the complement is an adjective.

The new types [`advcl:compar`]() and [`mark:comparator`]() are to be used in
structures involving comparisons of adjectives (and occasionally other
parts-of-speech).

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
| `compar`     | [advcl:compar]()    |                     |
| `comparator` | [mark:comparator]() |                     |
| `complm`     | [mark]()            | Removed distinction |
| `csubj-cop`  | [csubj:cop]()       |                     |
| `gobj`       | [nmod:gobj]()       |                     |
| `gsubj`      | [nmod:gsubj]()      |                     |
| `iccomp`     | [xcomp:ds]()        |                     |
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
Instead we use any normal dependency relation to catch the syntactic function of the relativizer (for example `nsubj` or `dobj`).

Additionally, the following dependency relations cannot be directly
created by mapping existing TDT annotations and may thus not occur in
the TDT-derived UD Finnish corpus:

* `dislocated`
* `foreign`
* `list`
* `remnant`
* `reparandum`
