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


### <a name="Fin">`Fin`</a>: finite verb

The finite verb forms are those, which have [Mood]() (see there for details) feature specified.
They may further inflect for all other verbal categories.
Finite verb forms are the most frequent.

#### Examples


### <a name="Part">`Part`</a>: participle

Participles are non-finite verb forms that share some properties with adjectives.
There are three types of participles in Pashto:
* present active (1)
* present passive (2) (only for transitive verbs)
* past, which has active meaning for intransitive verbs (3) and passive meaning for transitive verbs (4)

There is no participle with the past active meaning for transitive verbs.
  
The participles are used in usually adjectival positions meaning that the referent is doing (1), undergoing (2),
has done (3) or has undergone (4) the action expressed by the verb.

The participles are usually formed from the past imperfective stem
with endings ونکی- _-únkay_ (1), نی- _-ánay_ (2) and لی- _-ë́lay_ (3, 4).

The past participle is the most frequent one. It is also used for compound verb forms of perfect tenses,
accompanied with auxiliary verb ول _wël_ “to be” in finite forms.
The transitive verbs in perfect tenses use the ergative construction, where the verb, including the past participle,
agrees with the object, hence the participle has the passive meaning. (See also [Tense]() for more information about the perfect tenses.)

The present participles are less frequent, the active one being used more often.
The present active participle is in some cases nominalized and used as a noun,
but in that case is taggeed as NOUN, not as VERB.
(e.g. لیکونکی _likúnkay_ “writer”, lit. “the writing one”).

Like adjectives, the participles inflect for [Case](), [Number]() and [Gender]().
They bear also the [Tense]() feature with `Past` and `Pres` values
and the two present participles have also the [Voice]() feature with `Act` and `Pass` values.

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
They are used in compound predicates accompanied by finite forms of some non-content verbs, in patricular
* auxiliary verb کېدل _kedë́l_ “to become” creating the passive construction
* phasal verbs (to begin, to cease...)
It can be also used in nominal positions (similarly to the verbal noun, which it should not be confused with),
where it behaves like a plural noun and inflects for [Case]() and [Aspect]().
Unlike in other languages, the infinitive is not used in modal constructions, where subjunctive or potential moods are used instead.
The infinitive is formed with the ending ل- _-ë́l_ appended to the past imperfective or past perfective verb stem.
Infinitive in the nominative case and imperfective aspect serves as the verbal lemma.

#### Examples
* (imperfective): لیدل _lidë́l_ “to see”
* (perfective): ولیدل _wë́lidël_ “to see”
* (passive usage): هلک **لیدل** کیږي _halë́k **lidë́l** keǧí_ “the boy is seen”
* (phasal usage): ښځه **لیکل** پیل کوي _x̌ë́ża **likë́l** payl kawí_ “the woman starts to write”
* (nominal usage): د **څښلو** اوبه _dë **cx̌ë́lo** obë́_ “drinking water” (lit. “of to_drink water”)


### <a name="Vnoun">`Vnoun`</a>: verbal noun

The verbal noun is a noun (tagged [NOUN](), not [VERB]()) derived from the verb and denoting the action expressed by it.
The verbal noun has a different ending than the infinitive, but its use is similar to the nominal use of the infinitive.
The verbal noun is formed from the past imperfective stem with the ending نه- _-ë́na_.

#### Examples

<!-- Interlanguage links updated Ne 5. května 2024, 18:20:26 CEST -->
