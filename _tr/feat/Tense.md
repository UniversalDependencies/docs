---
layout: feature
title: 'Tense'
shortdef: 'tense'
udver: '2'
---

Turkish has a complex tense/aspect/modality system.

Turkish verbs can indicate actions in the present, past or future.
Complex tenses for actions that happened before, during, or after a past event can also be specified by suffixation.
The actions that happen before, during, or after a future event are expressed using an auxiliary.

The verbs expressing actions that happened before a reference in the past are marked with value `Pqp`.
For events that happen during the past reference, we use `Tense=Past` with proper progressive (`Prog`) or habitual (`Hab`) [Aspect]().

### <a name="Past">`Past`</a>: past tense

Turkish past tense is realized with *-DI* or *-mIş* suffixes on verbal predicates, and  with *-(y)DI* and *-(y)mIş* suffixes on nominal predicates.
The difference between the *-DI* and *-mIş* forms are related to evidentiality ([Evident]()) rather than `Tense`. Both morphemes refer to a (completed) past event.

These suffixes also combine with others to refer to time relative to a past event, which will be discussed below.

#### Examples

* *eve gitti* 'she went home'
* *eve gitmiş* 'she went home' (evidential: speaker does not have direct information on the event)
* *eve gitmeliydi* 'she should have gone home'
* *eve gitseydi* 'if she went home'
* *hastaydı* 'she was sick'
* *hastaymış* 'she was sick' (evidential)

### <a name="Fut">`Fut`</a>: future tense

Turkish future tense is expressed with suffix *-(y)AcAk*.
Copular predicates cannot directly take future `Tense` morphemes.
Future tense in nominal phrases are expressed using auxiliary *ol-*.

#### Examples

* *eve gidecek* 'she will go home'

### <a name="Pres">`Pres`</a>: present tense

The present tense in Turkish is realized by lack of past or future morphemes.

#### Examples

* *eve gidiyor* 'she is going home'
* *eve gitmeli* 'she should go home'
* *eve gider* 'she goes home'

The differences between these forms are [Aspect]() and [Mood]() differences.

### <a name="Pqp">`Pqp`</a>: pluperfect

This denotes an action that happened before a reference time in the past.
In Turkish, this is realized by combination of *-DI*/*-mIş* and *-(y)DI*/*-(y)mIş* (only three combinations exemplified below possible).
As in future tense, nominal predicates require the auxiliary *ol-* for this tense (*hasta olmuştu* 'she had been sick').
Hence, we only mark verbal predicates with double past indicators as `Pqp`.

#### Examples

* *eve gitmişti* 'she had gone home' (this is **not** evidential)
* *eve gitmişmiş* 'she had gone home' (this is evidential)
* *eve gittiydi* 'she had gone home' (colloquial)

<!--
DZ:
The Turkic treebanks also use `Tense=Aor` (aorist), although this value has not been documented.
Göksel and Kerslake (2005) say in §21.5.4 (page 368):

Aorist marking of the lexical verb is restricted to compounds in which the auxiliary has
perfective marking (the modally neutral _-DI_ or evidential _-mIş_).

(i) The affirmative aorist form _-(A/I)r_ followed by _oldu/olmuş_ expresses the fact that an event
began or has begun to happen recurrently, or as a matter of habit:

* (194) _Son zamanlarda sık sık tiyatroya gid<b>er oldu</b>k._
        ‘Recently we _have started_ go_ing_ to the theatre a lot.’

(ii) The negative aorist form with _oldu/olmuş_ expresses the fact that a formerly recurrent event
(has) ceased to happen:

* (195) _O olaydan sonra Hakan bir süre bize uğra<b>maz oldu</b>._
        ‘After that incident Hakan _stopped_ call_ing_ on us for a while.’

DZ: The form _gider_, which example (194) from Göksel and Kerslake shows as aorist, is indicated
above on this documentation page as one of the forms of the present tense.

In their Glossary on page 548, Göksel and Kerslake define aorist as follows:
a **finite verb form** marked by the suffix _-(A/I)r_ (or its negative counterpart _-z_);
the aorist expresses either habitual aspect or various kinds of modality: generalizing,
hypothetical, presumptive (with future time reference) or volitional
-->

<!-- Interlanguage links updated Čt lis 12 09:43:07 CET 2020 -->
