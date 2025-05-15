---
layout: base
title:  'Pashto UD'
udver: '2'
---

# UD for Pashto <span class="flagspan"><img class="flag" src="../../flags/svg/AF.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/PK.svg" /></span>

For the principles of transliteration of Pashto used in UD see the [Transliteration page](transliteration.html).

## Tokenization and Word Segmentation

* The words are delimited by whitespaces and punctuation.
* Multiword tokens are used in these cases:
  * separable light verb verbs in forms, when the two parts are joined, e.g. بندوم _bandawë́m_ “I close” → کوم _band_ + بند _kawë́m_
  * contractions of pronouns and adpositions, e.g. پرې _pre_ “on it/him/her/them” → پر یې _për ye_ (see [ADP]() for details)

## Morphology

### Lemmatization

* Direct (nominative) singular masculine (if applicable) form is used as lemma for nominals.
* Infinitive (in the direct case) is usually used as lemma for verbs.
  * The existential word شته _šta_ “there is / there are”, tagged as [VERB](), has only one form, so it is used as the lemma.

### Tags
* The overview of part-of-speech tags used in Pashto can be found [here](pos-index.html).
* Pashto uses all 17 universal tags.
* Several words are tagged as [PART]():
  * Negative particles نه _në_ and مه _ma_ “no, not” and the affirmative particle هو _ho_ “yes”.
  * Modal particles: باید _bấyad_ (necessity “must, have to, should”) and دې _de_ (order or desire “let, should”).
* These verbs may be tagged as [AUX]():
  * verb ول _wël_ “to be”, used as copula and auxiliary verb for perfect tenses
  * verb کېدل _kedë́l_ “to become”, used for passive voice or potential forms
  * verb کول _kawë́l_ “to do”, used for longer potential forms
  * word بۀ _bë_, used for future tense, habitual past forms and in conditional sentences
  * word ونۀ _wënë́_ joining a perfective prefix (in affirmative forms connected to the verb) with a negation particle, this may hold also for some other prefixes.
* Modal verbs, such as غوښتل _ġox̌të́l_ “to want to”, are tagged as [VERB]() (besides that, some modal meanings are expressed using modal particles or using the mentioned potential verb forms). Light verbs are tagged also as VERB, with the nominal part depending on them with `compound:lvc` relation.
* Pronouns that depend on nouns and behave similarly like their attributes (some of them even agree with the nouns in number, case and gender) are tagged as [DET](); possessive pronouns are mostly treated this way. Pronouns used individually (often as arguments of a verb) are tagged as [PRON](). This includes e.g. relative or non-possessive personal pronouns. Various interrogative, demonstrative or indefinite pronouns can be tagged both ways depending on the situation. Enclitic weak pronouns, used as unstressed core arguments or as alternative possessive pronouns, are always tagged as PRON, even when marking possession, because they do not have the attributive relation to the noun, e.g. they follow the noun, while all other pronouns tagged as DET precede it. Directional pronouns, merged with several prepositions, are separated from them with a PRON tag.
* The deverbal forms like infinitive or participles (sometimes behaving like verbal noun and verbal adjectives) are usually tagged as VERB. Only nouns and adjectives originally derived from infinitives or participles, but now perceived clearly as nouns and adjectives, are tagged as [NOUN]() and [ADJ]().
* Adjectives and adverbs derived from adjectives have often the same form. Their tagging as [ADJ]() or [ADV]() depends on the context.

### Features
* The overview of all features used in Pashto can be found [here](feat-index.html).
* There are three [VerbForm]() values used in Pashto: finite `Fin`, infinitive `Inf` and participle `Part`.
* An important feature of Pashto verbs is [Aspect](), which strictly divides verb forms to imperfect `Imp` and perfecgt `Perf`.
* The finite verb forms inflect for [Mood]() feature with indicative `Ind`, imperative `Imp`, subjunctive `Sub` and potential `Pot` values.
* The finite verb forms conjugate for [Tense]() feature taking present `Pres` or past `Past` mark, with an auxiliary with marking the future `Fut`.
* The finite verb forms inflect also for the [Person]() feature with the common three values, which is also an inherent feature of many personal pronouns.
* Generally all inlfectional parts of speech inflect for [Number]() taking a singular `Sing` or a plural `Plur` value. There is a few collective nouns having the collective `Coll` number. Infinitives always behave like plural, so they do not have the number tagged. Non-past finite verb forms do not have the number feature in the third person, since the forms for both numbers are always identical.
* Nominals, participles and infinitives inflect for [Case]() feature. There are five cases tagged in UD for Pashto: direct (marked as nominative) `Nom`, oblique (marked as accusative) `Acc`, locative `Loc`, ablative `Abl` and vocative `Voc`.
* Nouns and some pronouns have inherent [Gender]() feature with two possible values: masculine `Masc` and feminine `Fem`. Adjectives, other pronouns and participles inflect for the gender in order to agree with nouns. Finite verb forms inflect for the gender only in the past forms in the third person (both singular and plural).
* Other important features of Pashto include [PronType](), [Animacy](), [Deixis]() or [Variant]().

  
## Syntax
* The overview of all dependency relations used in Pashto can be found [here](dep-index.html).

### Core Arguments
* Core arguments (subjects and objects) in Pashto are mostly nouns, pronouns or infinitives in either bare direct case `Nom` or bare oblique case `Acc`. The exact use of these cases depends on the inherent transitivity of the verb and the voice and tense used (language phenomenon called _split ergativity_ occurring also in other Indo-Iranian langages)
* The only argument (i.e. the subject) of intransitive verbs or of transitive verbs used in the passive voice are always in the direct case `Nom`.
* For transitive verbs in the active voice holds:
  * The **subject** in **non-past** tenses is always in the **direct** case `Nom`.
  * The **subject** in **past** tenses is always in the **oblique** case `Acc`.
  * The **object** in **all** tenses is almost always in the **direct** case `Nom`.
    * The only exceptions are personal pronouns for the first and the second person singular in **non-past** tenses, where oblique forms ما _mâ_ “me”, تا _tâ_ “you” are used instead of the direct رۀ _zë_ “I”, تۀ _të_ “you”.
  * The subject usually comes before the object regardless of the case.
  * The verb agrees in `Person` and `Number` (and also `Gender` in the third person of past tenses) with the subject in non-past tenses and with the object in past tenses.

<table class="typeindex" border="1">
<tr>
  <td align="middle" rowspan="2"></td>
  <td align="middle">intransitive</td>
  <td align="middle" colspan="2">transitive</td>
</tr>
<tr>
  <td align="middle">nsubj</td>
  <td align="middle">nsubj</td>
  <td align="middle">obj</td>
</tr>
<tr>
  <td align="middle">non-past</td>
  <td align="middle"><b>direct</b></td>
  <td align="middle"><b>direct</b></td>
  <td align="middle"><b>direct *</b></td>
</tr>
<tr>
  <td align="middle">past</td>
  <td align="middle"><b>direct</b></td>
  <td align="middle"><b>oblique</b></td>
  <td align="middle"><b>direct</b></td>
</tr>
</table>
* exceptions: ما _mâ_, تا _tâ_ (see above)

### Non-verbal Clauses
* The copula verb ول _wël_ “to be” is used in most non-verbal clauses.
* The nominal part of the predicate is usually in the direct case `Nom`
* In the existential clauses the word شته _šta_ “there is / there are” is used, but it is tagged [VERB]()

### Relations Overview
* The following relation subtypes are used in Pashto:
  
  Auxiliaries (see [aux](./dep/aux.html)):
  * [aux:pass](./dep/aux-pass.html) for passive voice
  * [aux:pot](./dep/aux-pot.html) for potential mood
  * [aux:perf](./dep/aux-perf.html) for perfect tenses (do not confuse with the perfective aspect)
  * [aux:fut](./dep/aux-fut.html) for future tense
  * [aux:hab](./dep/aux-hab.html) for habitual past tense
  * [aux:cnd](./dep/aux-cnd.html) for conditional mood
  
  Orphan constructions (see [orphan](./dep/orphan.html)):
  * [orphan:nsubjobj](./dep/orphan-nsubjobj.html) for orphan objects dependent on orphan subjects
  * [orphan:nsubjobl](./dep/orphan-nsubjobl.html) for orphan obliques dependent on orphan subjects
  * [orphan:objobl](./dep/orphan-objobl.html) for orphan obliques dependent on orphan objects
 
  Other:
  * [nsubj:pass]() for nominal subjects of passive
  * [compound:lvc]() for nominal part of light verb construction

## Treebanks
There is currently one Pashto UD treebank:
  * [Pashto-Sikaram](../treebanks/ps_sikaram/index.html)

