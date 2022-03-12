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
| 3 | 2022-Feb     | 2.10              | AMENDMENT                | [Reported Speech](#reported-speech)           |
| 2 | 2022-Jan     | 2.10              | AMENDMENT, VALIDATOR     | [Typos and `goeswith`](#typos-and-goeswith)   |
| 1 | 2021-Dec     | 2.10              | CLARIFICATION, VALIDATOR | [Deverbal Connectives](#deverbal-connectives) |

### Reported Speech

Revised the policy regarding reported speech: the quoted material attaches as [ccomp]() to the speech verb regardless of order and punctuation; [parataxis]() should be used only if the quotation is interrupted.

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
