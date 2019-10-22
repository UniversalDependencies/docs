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
depending on whether borderline word forms such as participles
are classified as verbs or as the other category.

Tense is a feature that specifies the time when the action took /
takes / will take place, in relation to a reference point.
The reference is often the moment of producing the sentence,
but it can be also another event in the context.
In some languages (e.g. English),
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

The past tense denotes actions that happened before a reference point.
In the prototypical case, the reference point is the moment of producing
the sentence and the past event happened before the speaker speaks about
it. However, `Tense=Past` is also used to distinguish past participles
from other kinds of participles, and past converbs from other kinds
of converbs; in these cases, the reference point may itself be in past
or future, when compared to the moment of speaking. For instance, the
Czech converb _spatřivše_ “having seen” in the sentence
_spatřivše vojáky, velmi se ulekli_
“having seen the soldiers, they got very scared”
describes an event that is anterior to the event of getting scared.
It also happens to be anterior to the moment of speaking, but that fact
is not encoded in the converb itself, it is rather a consequence of
“getting scared” being in the past tense.

Among finite forms,
the simple past in English is an example of `Tense=Past`.
In German, this is the Präteritum.
In Turkish, this is the non-narrative past.
In Bulgarian, this is aorist, the aspect-neutral past tense that can be
used freely with both imperfective and perfective verbs (see also
imperfect).

#### Examples

* [en] _he <b>went</b> home_
* [en] _he has <b>gone</b> home_



### <a name="Pres">`Pres`</a>: present / non-past tense

The present tense denotes actions that are in progress (or states that
are valid) in a reference point; it may also describe events that usually
happen.
In the prototypical case, the reference point is the moment of producing
the sentence; however, `Tense=Pres` is also used to distinguish present
participles from other kinds of participles, and present converbs from
other kinds of converbs. In these cases, the reference point may be in
past or future when compared to the moment of speaking. For instance,
the English present participle may be used to form a past progressive tense:
_he was watching TV when I arrived._

Some languages (e.g. Uralic) only distinguish past vs. non-past morphologically,
and then `Tense=Pres` can be used to represent the non-past form.
Similarly, some Slavic languages (e.g. Czech), although they do
distinguish the future tense, nevertheless have a subset of verbs
where the morphologically present form has actually a future meaning.

#### Examples

* [en] _he <b>goes</b> home_
* [en] _he was <b>going</b> home_



### <a name="Fut">`Fut`</a>: future tense

The future tense denotes actions that will happen after a reference point;
in the prototypical case, the reference point is the moment of producing
the sentence.

#### Examples

* [es] _<b>irá</b> a la casa_ “he/she/it will go home”



### <a name="Imp">`Imp`</a>: imperfect

Used in e.g. Bulgarian and Croatian, imperfect is a special case of
the past tense. Note that, unfortunately, imperfect tense is not
always the same as past tense + imperfective aspect. For instance, in
Bulgarian, there is lexical aspect, inherent in verb meaning, and
grammatical aspect, which does not necessarily always match the
lexical one. In main clauses, imperfective verbs can have imperfect
tense and perfective verbs have perfect tense. However, both rules can
be violated in embedded clauses.

#### Examples

* [bg] _тя оставаше, където той и да <b>отидеше</b>_ / _tja ostavaše, kădeto toj i da <b>otideše</b>_ “it remained where he left it”



### <a name="Pqp">`Pqp`</a>: pluperfect

The pluperfect denotes action that happened before another action in
past. This value does not apply to English where the pluperfect (past
perfect) is constructed analytically. It applies e.g. to Portuguese.

#### Examples

* [pt] _afirmou que os sequestradores já <b>ligaram</b>_ “he said that the kidnappers had already called”
