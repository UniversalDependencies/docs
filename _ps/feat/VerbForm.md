---
layout: feature
title: 'VerbForm'
shortdef: 'form of verb'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Fin">Fin</a></td>
  <td><a href="#Part">Part</a></td>
  <td><a href="#Inf">Inf</a></td>
  <td><a href="#Vnoun">Vnoun</a></td>
</tr>
</table>

Verb form is an inflectional feature of verbs and verbal nouns.
It classifies the form to several most general types of verb forms.
The `VerbForm` feature occurs with verbs ([VERB]() and [AUX]())
and in some cases also with nominals ([NOUN]() and [ADJ]()).

For overview of verb stems mentioned below see [Pashto verbal system](../verbal-system.html).


### <a name="Fin">`Fin`</a>: finite verb

The finite verb forms are those, which have [Mood]() (see there for further categorization) feature specified.
They may further inflect for all other verbal categories.
Finite verb forms are the most frequent.
Different finite forms are formed from all four verb stems using various endings.

#### Examples


### <a name="Part">`Part`</a>: participle

Participles are words on the edge between verbs and adjectives, sharing properties of both.
There are three types of participles in Pashto:
* active (1)
* passive (2) (only for transitive verbs)
* past (3, 4)

Like adjectives, all participles inflect for [Case](), [Number]() and [Gender]().

The active and passive participles are together refered as present participles,
but they do not have the `Tense=Pres` feature marked.
They take the [Voice]() feature with `Act` or `Pass` values.

The past participle takes the `Tense=Past` feature.
It has active meaning for intransitive verbs (3) and passive meaning for transitive verbs (4).
There is no participle with the past active meaning for transitive verbs.

The present participles are tagged with [ADJ]() UPOS tag, because they are used only in typically adjectival positions.
The past participles is tagged with [VERB]() UPOS tag, because they are typically compound verb forms,
although they may be used also in the adjectival positions.

#### Formation
* active participle (1): past imperfective stem + ending ونکی- _-únkay_
* passive participle (2): past imperfective stem + ending نی- _-ánay_
* past participle (3, 4): past imperfective stem + ending لی- _-ë́lay_

#### Use
The present participles are used in usually adjectival positions meaning that the referent expressed by the noun is
* (1) doing or
* (2) undergoing
the action expressed by the verb from which the participle derived.
The past participle may be also used in this way meaning that the referent has
* (3) has done or
* (4) has undergone
the action.

The participles in the use case can either depend on the noun as attributes
([amod]() relation for the present participles and [acl]() relation for the past participle)
or they can be the head of the clause in non-verbal clauses.

The active participle is in some cases nominalized and used as a noun,
but in that case is taggeed as [NOUN]() and does not take the `VerbForm=Part` feature at all.
(e.g. لیکونکی _likúnkay_ “writer”, lit. “the writing one”).

The past participle is mainly used for compound verb forms of perfect tenses,
accompanied with auxiliary verb ول _wël_ “to be” (with [aux:perf](../dep/aux-perf.html) relation) in finite forms.
The transitive verbs in perfect tenses use the ergative construction, where the verb, including the past participle,
agrees with the object, hence the participle has the passive meaning. (See also [Tense]() for more information about the perfect tenses.)

#### Examples
* (present active, intransitive): تلونی _tlúnkay_ “going”
* (present active, transitive): لیدونکی _lidúnkay_ “seeing”
* (present passive, transitive): لیدنی _lidánay_ “beeing seen”
* (past, intransitive): تللی _tlë́lay_ “having come”
* (past, transitive): لیدلی _lidë́lay_ “(having been) seen”
* (attributive usage): **خوړونې** ښځه _**xwaṛúnke** x̌ë́ża_  “eating woman”
* (present perfect tense): ما کورونه **لیدلي** دي _mâ korúna **lidë́li** di_ “I have seen the houses”


### <a name="Inf">`Inf`</a>: infinitive

Infinitives are non-finite verb form that share some properties with nouns.
There are two infinitives according to their [Aspect]().
The infinitve behaves like a plural noun and inflects for [Case]().
Infinitive in the nominative case and imperfective aspect serves as the verbal lemma.

#### Use
* passive: infinitive + auxiliary verb کېدل _kedë́l_ “to become” (with [aux:pass](../dep/aux-perf.html) relation)
* phasal: after the verbs like to begin, to cease etc.
* nominal: denoting the action expressed by the verb (similarly to the verbal noun, which it should not be confused with)
Unlike in other languages, the infinitive is not used in modal constructions, where subjunctive or potential moods are used instead.

#### Formation
* imperfective infinitive: past imperfective stem + ending ل- _-ë́l_
* perfective infinitive: past perfective stem + ending ل- _-ël_
That is the direct case of the infinitive. All other cases are formed by adding an additional ending و- _o_.

#### Examples
* imperfective: لیدل _lidë́l_ “to see”
* perfective: ولیدل _wë́lidël_ “to see”
* passive use: هلک **لیدل** کیږي _halë́k **lidë́l** keǧí_ “the boy is seen”
* phasal use: ښځه **لیکل** پیل کوي _x̌ë́ża **likë́l** payl kawí_ “the woman starts to write”
* nominal use: د **څښلو** اوبه _dë **cx̌ë́lo** obë́_ “drinking water” (lit. “of to_drink water”)


### <a name="Vnoun">`Vnoun`</a>: verbal noun

The verbal noun is a noun (tagged [NOUN](), not [VERB]()) derived from the verb and denoting the action expressed by it.
The verbal noun has a different ending than the infinitive, but its use is similar to the nominal use of the infinitive.

#### Formation
* past imperfective stem + ending نه- _-ë́na_
The verb noun has the feminine gender and inflects only in singular as usual feminine nouns ending in ه _a_.

#### Examples
* verbal noun: **پوهونه** مهمه ده _**pohawë́na** muhíma da_ “The education is important”

<!-- Interlanguage links updated So 10. května 2025, 18:14:40 CEST -->
