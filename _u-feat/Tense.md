---
layout: feature
title: 'Tense'
shortdef: 'tense'
---

Tense is a feature that specifies the time when the action took /
takes / will take place, in relation to the current moment or to
another action in the utterance. In some languages (e.g. English),
some tenses are actually combinations of tense and
[aspect](Aspect). In other languages (e.g. Czech), aspect and tense
are separate, although not completely independent of each other.

Note that we are defining features that apply to a single word. If a
tense is constructed periphrastically (two or more words,
e.g. auxiliary verb indicative + participle of the main verb) and none
of the participating words are specific to this tense, then the
features will probably not directly reveal the tense. For instance,
[en] _I <b>had been</b> there_ is past perfect (pluperfect) tense,
formed periphrastically by the simple past tense of the auxiliary _to
have_ and the past participle of the main verb _to be_. The auxiliary
will be tagged `VerbForm=Fin|Mood=Ind|Tense=Past` and the participle
will have `VerbForm=Part|Tense=Past`; none of the two will have
`Tense=Pqp`.  On the other hand, Portuguese can form the pluperfect
morphologically as just one word, which will thus be tagged
`VerbForm=Fin|Mood=Ind|Tense=Pqp`.

### `Past`: past tense / preterite / aorist

The past tense denotes actions that happened before the current
moment. In English, this is the simple past form. In German, this is
the Präteritum. In Turkish, this is the non-narrative past.  In
Bulgarian, this is aorist, the aspect-neutral past tense that can be
used freely with both imperfective and perfective verbs (see also
imperfect).

#### Examples

* [en] _he <b>went</b> home_

### `Pres`: present tense

The present tense denotes actions that are happening right now or that
usually happen.

#### Examples

* [en] _he <b>goes</b> home_

### `Fut`: future tense

The future tense denotes actions that will happen after the current
moment.

#### Examples

* [es] _<b>irá</b> a la casa_ "he/she/it will go home"

### `Imp`: imperfect

Used in e.g. Bulgarian and Croatian, imperfect is a special case of
the past tense. Note that, unfortunately, imperfect tense is not
always the same as past tense + imperfective aspect. For instance, in
Bulgarian, there is lexical aspect, inherent in verb meaning, and
grammatical aspect, which does not necessarily always match the
lexical one. In main clauses, imperfective verbs can have imperfect
tense and perfective verbs have perfect tense. However, both rules can
be violated in embedded clauses.

### `Nar`: narrative

Special case of the past tense, this is the Turkish _miş_-past. The
difference is whether the speaker personally witnessed the action he
is describing, or not.

### `Pqp`: pluperfect

The pluperfect denotes action that happened before another action in
past. This value does not apply to English where the pluperfect (past
perfect) is constructed analytically. It applies e.g. to Portuguese.
