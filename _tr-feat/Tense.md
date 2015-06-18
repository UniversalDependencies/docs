---
layout: feature
title: 'Tense'
shortdef: 'tense'
---

**This document is a work-in-progress proposal. See http://universaldependencies.github.io/docs for current/accepted specification** 

Turkish has a complex tense/aspect/modality system.

Turkish verbs can indicates actions in the present, past or future. Complex tenses for actions that happened before, during, and after a past event can also be specified by suffixation. The actions that happen before/after/during a future event is expressed using an auxiliary. So, complex tenses with respect to a future reference do not require special feature values.

The verbs expressing actions that happened before a reference in the past are marked with value `Pqp`, and the verbs expressing actions that happen after a past reference should be marked `Pfut` (**new, proposed label**). For events that happen during the past reference, we use `Tense=Past` with proper progressive (`Prog`) or habitual (not in current UD specification) `Aspect`.

### `Past`: paste tense

Turkish past tense is realized with *-DI* or *-mIş* suffixes on verbal predicates, and  with *-(y)DI* and *-(y)mIş* suffixes on nominal predicates. The difference between the *-DI* and *-mIş* forms are related to `Mood` rather than `Tense`. Both cases refer to a (completed) past event.

These suffixes also combine with others to refer to time relative to a past event, which will be discussed below.

#### Examples

* *eve gitti* 'she went home'
* *eve gitmiş* 'she went home' (evidential: speaker does not have direct information on the event)
* *eve gitmeliydi* 'she should have gone home'
* *eve gitseydi* 'if she went home'
* *hastaydı* 'she was sick'
* *hastaymış* 'she was sick' (evidential)

### `Fut`: future tense

Turkish future tense is expressed with suffix *-(y)AcAk*. 

#### Examples

* *eve gidecek* 'she will go home'

### `Pres`: present tense

The present tense in Turkish is realized by lack of past or future morphemes. Nominal phrases cannot directly take future `Tense`. Future tense in nominal phrases are expressed using auxiliary *ol-* (e.g., *hasta olacak* 'she is going to be sick'). 

#### Examples

* *eve gidiyor* 'she is going home'
* *eve gitmeli* 'she should go home'
* *eve gider* 'she goes home'

The differences between these forms are `Aspect` and `Mood` differences.

### `Pqp`: pluperfect

This denotes an action that happened before a reference time in the past. In Turkish this is realized by combination of *-DI*/*-mIş* and *-(y)DI*/*-(y)mIş* (only three combinations exemplified below possible). As in future tense, nominal predicates require *ol-* for this tense (*hasta olmuştu* 'she had been sick'). Hence, we only mark verbal predicates with double past indicators as `Pqp`.

#### Examples

* *eve gitmişti* 'she had gone home' (this is **not** evidential)
* *eve gitmişmiş* 'she had gone home' (this is evidential)
* *eve gittiydi* 'she had gone home' (colloquial)

### `Pfut`: future with respect to a past reference

This denotes actions that happened after a reference event. This is realized by combining future marker *-AcAk* and one of the past (copular) markers.

#### Examples

* *eve gidecekti* 'she was going to go home'
* *eve gidecekmiş* 'she was going to go home'
