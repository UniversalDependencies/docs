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
| 5 | 2022-May     | 2.10              | AMENDMENT, VALIDATOR     | [Multiple Subjects](#multiple-subjects)       |
| 4 | 2022-May     | 2.10              | AMENDMENT                | [Optional Depictives](#optional-depictives)   |
| 3 | 2022-Feb     | 2.10              | AMENDMENT                | [Reported Speech](#reported-speech)           |
| 2 | 2022-Jan     | 2.10              | AMENDMENT, VALIDATOR     | [Typos and `goeswith`](#typos-and-goeswith)   |
| 1 | 2021-Dec     | 2.10              | CLARIFICATION, VALIDATOR | [Deverbal Connectives](#deverbal-connectives) |


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
Treebanks are, of course, welcome to innovate in their use of subtypes and/or MISC features.  

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
- [Universal guidelines issue tracker](https://github.com/UniversalDependencies/docs/issues)

## Data Releases

- [Release history on the homepage](/#download)
