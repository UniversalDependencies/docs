---
layout: base
title:  'Guidelines Changes'
shortdef: 'guidelines changes'
udver: '2'
---

# Guidelines Changes

This pages summarizes the history of notable changes to the universal annotation [guidelines](guidelines.html).

Significant changes are classified as: 
- CLARIFICATION: resolution of an important ambiguity in the guidelines
- AMENDMENT: change that negates a policy articulated in an earlier version of the guidelines
- VALIDATOR: important change to the requirements checked by the official [UD validator](https://github.com/UniversalDependencies/tools/)

(Note: Many minor clarifications are not listed.)

## Changes in UDv2

Updates to UDv2 will NOT alter the inventory of basic top-level dependency relations, UPOS tags, etc. 
But some updates have been necessary to clarify how they should be applied to particular linguistic phenomena, as well as formal constraints to be enforced by validation.

| # | Date | Type |                                      |
|---|------|------|--------------------------------------|
| 3 | Feb. 2022 | AMENDMENT | Revised the policy regarding reported speech: the quoted material attaches as [ccomp]() to the speech verb regardless of order and punctuation; [parataxis]() should be used only if the quotation is interrupted. |
| 2 | Jan. 2022 | | [Updates](https://github.com/UniversalDependencies/docs/pull/838) to the policy on [typos](u/overview/typos.html) to clarify treatment of [goeswith]():
   <ul><li>[AMENDMENT, VALIDATOR] Effective in release 2.10, [Typo]()`=Yes` is now required on the first part of a [goeswith]() structure (previously stated to be unnecessary)</li>
   <li>[VALIDATOR] Morphological features and lemmas now prohibited on tokens attaching as [goeswith](); UPOS required to be [X]()</li>
   <li>[CLARIFICATION, VALIDATOR] Further explanation of [goeswith]() structures, including interaction with multiword tokens</li>
  </ul> |
| 1 | Dec. 2021 | | TODO |


| # | Date | Type |                                      |
|---|------|------|--------------------------------------|
| 3 | Feb. 2022 | AMENDMENT | <ul><li>list [ccomp]()</li><li>another</li><li>another [ccomp]() word</li></ul> |

- **Feb. 2022 [AMENDMENT]** Revised the policy regarding reported speech: the quoted material attaches as [ccomp]() to the speech verb regardless of order and punctuation; [parataxis]() should be used only if the quotation is interrupted.
- **Jan. 2022** [Updates](https://github.com/UniversalDependencies/docs/pull/838) to the policy on [typos](u/overview/typos.html) to clarify treatment of [goeswith]():
   * [AMENDMENT, VALIDATOR] Effective in release 2.10, [Typo]()`=Yes` is now required on the first part of a [goeswith]() structure (previously stated to be unnecessary)
   * [VALIDATOR] Morphological features and lemmas now prohibited on tokens attaching as [goeswith](); UPOS required to be [X]()
   * [CLARIFICATION, VALIDATOR] Further explanation of [goeswith]() structures, including interaction with multiword tokens
- **Dec. 2021 [CLARIFICATION, VALIDATOR]** Deverbal connectives may be tagged as [VERB]() while attaching as [case]() or [mark](). Documented at [ADP]().

## UDv1 and transition to UDv2

- [Archived v1 guidelines](/docsv1/)
- [Executive summary of changes from v1 to v2](/v2/summary.html)

## Discussions

- [Discussion notes](/discussion.html)
- [Universal guidelines issue tracker](https://github.com/UniversalDependencies/docs/issues)

## Data Releases

- [Release history on the homepage](/#download)
