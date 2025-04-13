---
layout: base
title:  'Guidelines Changes'
shortdef: 'guidelines changes'
udver: '2'
---

# Guidelines Changes

This pages summarizes the history of notable changes to the universal annotation [guidelines](guidelines.html).

Significant changes are classified as: 
- AMENDMENT: change that negates a policy articulated in an earlier version of the guidelines
- CLARIFICATION: resolution of an important ambiguity in the guidelines (that doesn't negate a previous policy)
- VALIDATOR: important change to the requirements checked by the official [UD validator](https://github.com/UniversalDependencies/tools/)

(Note: Many minor clarifications are not listed.)

## Changes in UDv2

Updates to UDv2 will NOT alter the inventory of basic top-level dependency relations, UPOS tags, etc. 
But some updates have been necessary to clarify how they should be applied to particular linguistic phenomena, as well as formal constraints to be enforced by validation.


| &nbsp;&nbsp;#&nbsp;&nbsp; | Date<br>Decided | Effective<Br>Release | Type                     | Title                                         |
|:-:|:------------:|:-----------------:|--------------------------|-----------------------------------------------|
|15 | 2024-Nov     | 2.16              | CLARIFICATION, VALIDATOR | [`ExtPos` for Fixed Expressions](#extpos-for-fixed-expressions) |
|14 | 2024-Apr     | 2.14              | CLARIFICATION            | [List Item Markers](#list-item-markers) |
|13 | 2023-Dec     | 2.14              | CLARIFICATION            | [Foreign Expressions and Code-Switching](#foreign-expressions-and-code-switching) |
|12 | 2023-Nov     | 2.14              | CLARIFICATION            | [Multiword Expressions](#multiword-expressions)   |
|11 | 2023-Nov     | 2.14              | CLARIFICATION            | [Semi-mandatory Relation Subtypes](#semi-mandatory-relation-subtypes)  |
|10 | 2023-Sep     | 2.13              | CLARIFICATION            | [Adpositional Predicative Complements](#adpositional-predicative-complements)  |
| 9 | 2023-Sep     | 2.13              | CLARIFICATION            | [Sufficiency and Excess Constructions](#sufficiency-and-excess-constructions)  |
| 8 | 2023-Mar     | 2.12              | AMENDMENT, VALIDATOR     | [Typos in Multiword Tokens](#typos-in-multiword-tokens)  |
| 7 | 2023-Jan     | 2.12              | AMENDMENT                | [Sole `iobj`](#sole-iobj)                     |
| 6 | 2022-Dec     | 2.12              | AMENDMENT                | [Nested `flat`](#nested-flat)                 |
| 5 | 2022-May     | 2.10              | AMENDMENT, VALIDATOR     | [Multiple Subjects](#multiple-subjects)       |
| 4 | 2022-May     | 2.10              | AMENDMENT                | [Optional Depictives](#optional-depictives)   |
| 3 | 2022-Feb     | 2.10              | AMENDMENT                | [Reported Speech](#reported-speech)           |
| 2 | 2022-Jan     | 2.10              | AMENDMENT, VALIDATOR     | [Typos and `goeswith`](#typos-and-goeswith)   |
| 1 | 2021-Dec     | 2.10              | CLARIFICATION, VALIDATOR | [Deverbal Connectives](#deverbal-connectives) |


### `ExtPos` for Fixed Expressions

In order to clarify the holistic status of expressions connected by the [fixed]() relation, it is strongly recommended to specify [ExtPos]() (in the FEATS column) on the first word of the expression. The validator has been updated to trigger a warning if [ExtPos]() is missing for a fixed expression. Some checks that previously made exceptions for words in fixed expressions no longer do so; adding [ExtPos]() may be necessary to pass these checks.

Worthy of note: (1) [ExtPos]() (“external part of speech”) has already been in use across several treebanks. It is not always limited just to [fixed]() expressions, and treebanks should feel free to apply it in other ways. At this time, we only specify as a universal matter that it is recommended for fixed expressions. (2)&nbsp;The [fixed]() relation is not intended for all multiword expressions that are morphosyntactically fossilized. [fixed]() should apply only to **grammaticized** expressions that appear internally anomalous, or whose external syntactic behavior diverges in important ways from the historical internal structure—especially for expressions functioning as [ADP](), [CCONJ](), [DET](), [SCONJ](), or [PRON](). ([issue 1037](https://github.com/UniversalDependencies/docs/issues/1037))

### List Item Markers

The [discourse]() page has been updated to include enumerators introducing a list item.
(Some corpora were using [nummod]() for this purpose, but it is inconsistent with the [nummod]() definition.)
Bullets are (still) [PUNCT]() and thus must attach as [punct](). ([issue 1027](https://github.com/UniversalDependencies/docs/issues/1027))

### Foreign Expressions and Code-Switching

A new page on [Foreign Expressions and Code-Switching](/foreign.html) consolidates the options for analyzing multilingual content ([issue 1001](https://github.com/UniversalDependencies/docs/issues/1001)).

### Multiword Expressions

The wording in the guidelines around “multiword expressions” has been updated to be more precise in the [syntax overview](/u/overview/syntax.html) and on the [flat](), [fixed](), and [compound]() pages ([issue 989](https://github.com/UniversalDependencies/docs/issues/989)). The examples of [flat]() have been revised and restructured around new prototypes ([issue 974](https://github.com/UniversalDependencies/docs/issues/974)), emphasizing that the treatment of many idiosyncratic expressions involving names and numbers should be determined based on language-specific criteria. The wording recommending the subtype [flat:foreign]() has been changed to merely acknowledge that some treebanks use it.

### Semi-mandatory Relation Subtypes

While relation subtypes are technically optional, the guidelines [state](https://universaldependencies.org/u/dep/index.html) that certain subtypes are “semi-mandatory”, i.e., languages are strongly encouraged to use them if relevant. Previously this set was open-ended. The guidelines now commit to a closed set of subtypes that are semi-mandatory ([issue 990](https://github.com/UniversalDependencies/docs/issues/990)).

### Adpositional Predicative Complements

Examples of predicative complements marked with *as* etc. have been [added](https://github.com/UniversalDependencies/docs/compare/2a3ac4d374932411df18d9e3554475147ce0cccb...f6be3292e733f73fd838347a7602ce407742fb88) to the [xcomp]() guidelines.

### Sufficiency and Excess Constructions

[Guidelines](/u/overview/specific-syntax.html#sufficiency-and-excess) for constructions like *so X that Y* (*so dusty that I sneezed*) and *too X to Y* (*too slowly to finish on time*) have been [added](https://github.com/UniversalDependencies/docs/commit/c3dcd63a80bf9fda1d32275179e3a2e3f27724b4).

### Typos in Multiword Tokens

The rule that multiword tokens must not have features in the FEATS column has been [relaxed](https://github.com/UniversalDependencies/docs/commit/609ddf20d5afb080d8feb2595231231137073097) to permit [Typo]()`=Yes`, as this is a surface feature and not every typo can be localized to a single syntactic word.
However, if a multiword token bears `Typo=Yes`, the feature cannot simultaneously appear on any of its component words.
See [discussion of typos](/u/overview/typos.html#misspelled-multiword-token).

### Sole `iobj`

The restriction that [iobj]() can only be used if there is also an overt [obj]() in the same clause is hereby [removed](https://github.com/UniversalDependencies/docs/issues/916). 
It is preferable not to have a relation whose label depends on the presence or absence of a sister phrase 
when its interpretation remains the same (like *them* in *tell them* vs. *tell them a story* vs. *tell them that the party is canceled*).
See [iobj]() for examples (note that specific criteria for identifying indirect objects will vary by language).

### Nested `flat`
  
In May 2021, the [flat]() guidelines were revised to clarify that nested expressions were allowed under a `flat` dependent, 
so long as the nested expression was not itself a flat expression. 
This constraint [is now lifted](https://github.com/UniversalDependencies/docs/commit/42023bd) (in fact, it was never enforced): 
if a flat name, for example, has a part which is itself a flat name, it may be indicated with a nested flat expression. 
The only constraint on `flat` edges is that they must point forward in the sentence: 
the first word of the expression is always the technical head, though linguistically speaking, the expression is considered headless.
  
### Multiple Subjects

In general, UD prohibits multiple subjects (i.e. a word may have at most one [nsubj]() or [csubj]() dependent), 
and enforcing this in validation is a useful way to catch errors.
However, a clause may serve as the predicate in a copular construction (e.g. _The problem is that we already paid_), posing a problem for this constraint.
Until now, the guidelines carved out an exception for such cases: the copula of the outer clause
would be promoted to head its subject and the predicate of the inner clause would attach to it as [ccomp]() (as explained in [v1 guidelines](/docsv1/u/dep/ccomp.html)).
But this yielded an odd interpretation of some copulas as transitive and offered no solution for zero copula constructions.
A [change](https://github.com/UniversalDependencies/docs/pull/868) was necessary.

The [new policy](/u/overview/complex-syntax.html#predicate-clauses)—a product of extensive deliberation—is that the predicate of the inner clause can have multiple subject dependents. 
The subject(s) of the non-innermost clause(s) can be subtyped with `:outer` to signify nesting: [nsubj:outer](), [csubj:outer](). 
The `:outer` subtype, like all subtypes, is (at least for now) technically optional.
Therefore, as an alternative, the validator will allow a treebank's maintainers to manually verify that 
any instances of multiple subjects are correct.
  
Note that using `:outer` just for subjects does not fully disambiguate the compositional structure: 
for example, [cop](), [aux](), [mark](), [advmod](), and [obl]() dependents of the predicate may belong to either the inner or outer clause. 
In order to avoid a proliferation of subtyped relations, the trees in the new guidelines do not apply the `:outer` label to anything other than subjects.
Treebanks are, of course, welcome to innovate in their use of subtypes and/or MISC attributes.  

### Optional Depictives

[Reanalyzed](https://github.com/UniversalDependencies/docs/pull/866) optional depictives as adverbial ([advcl]()) rather than adnominal ([acl]()), given that the predicand may not always be overt in the sentence, and even when it is overt it doesn't form a nominal phrase with the depictive. The secondary predication can instead be expressed via an enhanced dependency, similar to control. (A precise naming recommendation for the enhanced edge is deferred for further discussion.)
  
### Reported Speech

[Revised](https://github.com/UniversalDependencies/docs/pull/850) the policy regarding reported speech: the quoted material attaches as [ccomp]() to the speech verb regardless of order and punctuation; [parataxis]() should be used only if the quotation is interrupted.

### Typos and `goeswith`

[Updates](https://github.com/UniversalDependencies/docs/pull/838) to the policy on [typos](u/overview/typos.html) to clarify treatment of [goeswith]():
   * [Typo]()`=Yes` is now required on the first part of a [goeswith]() structure (previously stated to be unnecessary)
   * Morphological features and lemmas now prohibited on tokens attaching as [goeswith](); UPOS required to be [X]()
   * Further explanation of [goeswith]() structures, including interaction with multiword tokens

### Deverbal Connectives

Deverbal connectives may be tagged as [VERB]() while attaching as [case]() or [mark](). Documented at [ADP]().

## UDv1 and transition to UDv2

- [Archived v1 guidelines](/docsv1/)
- [Executive summary of changes from v1 to v2](/v2/summary.html)

## Discussions

- [Discussion notes](/discussion.html)
- [Issue tracker for guidelines (both universal and language-specific)](https://github.com/UniversalDependencies/docs/issues)

## Data Releases

- [Release history on the homepage](/#download)
