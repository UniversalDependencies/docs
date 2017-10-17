---
layout: feature
title: 'Tense'
shortdef: 'tense'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Fut">Fut</a></td>
  <td><a href="#Imp">Imp</a></td>
  <td><a href="#Past">Past</a></td>
  <td><a href="#Pqp">Pqp</a></td>
  <td><a href="#Pres">Pres</a></td>
</tr>
</table>

Tense is typically a feature of [verbs](u-pos/VERB).
It may also occur with other parts of speech
([nouns](u-pos/NOUN), [adjectives](u-pos/ADJ), [adverbs](u-pos/ADV)),
depending on whether borderline word forms such as gerunds and participles
are classified as verbs or as the other category.

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
`Tense=Pqp`. On the other hand, Portuguese can form the pluperfect
morphologically as just one word, such as _estivera_, which will thus be tagged
`VerbForm=Fin|Mood=Ind|Tense=Pqp`.

### <a name="Past">`Past`</a>: past tense / preterite / aorist

The past tense denotes actions that happened before the current
moment. In English, this is the simple past form. In German, this is
the Präteritum. In Turkish, this is the non-narrative past.  In
Bulgarian, this is aorist, the aspect-neutral past tense that can be
used freely with both imperfective and perfective verbs (see also
imperfect).

#### Examples

* [en] _he <b>went</b> home_

### <a name="Pres">`Pres`</a>: present tense

The present tense denotes actions that are happening right now or that
usually happen.

#### Examples

* [en] _he <b>goes</b> home_

### <a name="Fut">`Fut`</a>: future tense

The future tense denotes actions that will happen after the current
moment.

#### Examples

* [es] _<b>irá</b> a la casa_ "he/she/it will go home"

### <a name="Imp">`Imp`</a>: imperfect

Used in e.g. Bulgarian and Croatian, imperfect is a special case of
the past tense. Note that, unfortunately, imperfect tense is not
always the same as past tense + imperfective aspect. For instance, in
Bulgarian, there is lexical aspect, inherent in verb meaning, and
grammatical aspect, which does not necessarily always match the
lexical one. In main clauses, imperfective verbs can have imperfect
tense and perfective verbs have perfect tense. However, both rules can
be violated in embedded clauses.

### <a name="Pqp">`Pqp`</a>: pluperfect

The pluperfect denotes action that happened before another action in
past. This value does not apply to English where the pluperfect (past
perfect) is constructed analytically. It applies e.g. to Portuguese.
