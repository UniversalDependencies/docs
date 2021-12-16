---
layout: feature
title: 'VerbForm'
shortdef: 'form of verb or deverbative'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Conv">Conv</a></td> 
  <td><a href="#Fin">Fin</a></td>
  <td><a href="#Ger">Ger</a></td>
  <td><a href="#Gdv">Gdv</a></td>
  <td><a href="#Inf">Inf</a></td>
  <td><a href="#Part">Part</a></td>
  <td><a href="#Sup">Sup</a></td>
  <td><a href="#Vnoun">Vnoun</a></td>
</tr>
</table>

[NB: This page is till partly work in progress]

This **morphological** feature represents a coarse classification of [verbal](la-pos/VERB) forms based on the presence or absence of given grammatical categories and their respectively expressed values. It is also used for forms which are no longer identified as [`VERB`](la-pos/VERB)s, but originated as verbal forms. 

In Latin, the first, fundamental distinction is between so-called *finite* and *non-finite* verbal forms: the former express the categories of [**time**](la-feat/Tense), [mood](la-feat/Mood) and [person](la-feat/Person), while the latter do not. This distinction is also reflected by the fact that, while finite forms use two main specific [sets of endings](la-feat/InflClass) divided into subgroups defined by thematic vowels (traditionally called *conjugations*), non-finite forms share the same paradigms of [nominal elements](la-feat/InflClass-nominal) (traditionally called *declensions*), befitting their syntactic behaviour. 

Non-finite verbal forms are further traditionally subdivided into *participles* (three types), *gerundives*, *gerunds*, *infinitives* and *supines*, according to the inflectional paradigms they follow and the typical syntactic functions they fulfill in a clause. Taking into account also finite forms, one might see a more general gradation from more definite and [predicate-like](la-pos/VERB) forms, expressing both an [aspect](la-feat/Aspect) of the [predication](la-dep/root) and an agreement (in [person](la-feat/Person), [number](la-feat/Number) and/or [case](la-feat/Case)) with a given argument (most prototypically a [subject](la-dep/nsubj)), down to more indefinite and [noun-like](la-pos/NOUN) forms (e.g. the "passive" supine), which are sometimes hardly longer distinguishable from other deverbal nouns, apart from the fact that their formation is synchronically productive, considered to be part of a verb's paradigm and/or regularly used as an element or argument in complex predicative constructions (see **Note 1** for further analysis of `VerbForm` denominations). We note that, since in Latin the [auxiliary verb(s)](la-pos/AUX) effectively are verbs from a morphological point of view (possibly with the only difference of *sum* 'to be' not expressing a voice), the discussion of this feature also applies to `AUX` integrally; in this section, "verb" has to be intended in a morphological sense.

In Latin, every different value of `VerbForm` corresponds to a different and unique combination of morphological features taken from among [aspect](la-feat/Aspect), [case](la-feat/Case), [gender](la-feat/Gender), [mood](la-feat/Mood), [number](la-feat/Number), [person](la-feat/Person), [tense](la-feat/Tense), [voice](la-feat/Voice), and possibly [degree](la-feat/Degree), assigned to a [verbal](la-pos/VERB) stem by means of one or more fusional inflective **suffixes** and sometimes following constraints of a semantical nature (e.g. with regard to the possibility of expressing a passive diathesis). This actually makes the `VerbForm` feature redundant *per se* when annotated on verbal forms, but it still acts as a useful synthesis of all the aforementioned characteristics and the observed syntactic role.  

This feature is also marked on words of deverbative origin, irrespective of their synchronical parts of speech, even if they do not actually bear the corresponding grammatical categories anymore (and thus are not annotated for them). The most typical case, and where the line is often most blurred, is that of adjectives ([ADJ](la-pos/ADJ)) of a participial origin.

### <a name="Conv">`Conv`</a>: converb ("active supine")

[To be completed]

#### Examples

- *te **admonitum** venio* 'I come so as to advise you', from *admoneo*


### <a name="Fin">`Fin`</a>: finite forms

*Finite forms* in Latin express (apart from [aspect](la-feat/Aspect)) [tense](la-feat/Tense), [mood](la-feat/Mood) and [voice](la-feat/Voice), and agree in [person](la-feat/Person) and [number](la-feat/Number) with their syntactic [subject](la-dep/nsubj), and only with it. While all these grammatical categories are represented by fusive (i.e. condensing more categories into one single form, e.g. *-s* = 2nd person singular active, *-ba-* = past indicative) suffixes with particular combination rules (e.g. *-ba-* is only used for imperfective stems, i.e. bare stems with thematic vowel) which make them appear as complex independent suffixes (e.g. *-bas* = 2nd person singular active past indicative), aspect, especially perfective, can also be conveyed by an alteration of the stem by other means (e.g. *fec-*, perfective stem of ***fac**io* 'to make'). 

In Latin, only finite forms of verbs can function as [roots](la-dep/root) of independent clauses or sentences without being part of an ([elliptic](la-dep/orphan)) [copular](la-dep/cop) construction. In fact, a finite form is not compatible with a copula. Periphrastic verbal constructions using a copula always accompany it with a non-finite form: while the former expresses tense, mood, person and number, the latter asserts aspect and voice. 

Verbal finite forms variate between past/present/future for **tense**, indicative/subjunctive/imperative for **mood**, active/passive for **voice**, and imperfective/inchoative/perfective for **aspect**; there are no synthetic prospective forms. They agree with subjects with regard to the 1st/2nd/3rd **person** and singular/plural **number**. 

* The actual realisations of finite forms show many [variations](la-feat/InflClass) in their paradigms; here, we show the first (or second for imperative mood) singular persons only of *amo* 'to love', of the first conjugation, in the active/passive voices, for all theoretically possible combinations of tense & mood and aspect:

Mood: Tense / Aspect | Imperfective | Inchoative |  Perfective | Prospective
--|--|--|--|--
**Indicative: past**  | *amabam* / *amabar* | *amascebam* / *amascebar* | *amaueram* / - | - / -
**Indicative: present**   | *amo* / *amor* | *amasco* / *amascor* | *amaui* / - | - / -
**Indicative: future**   | *amabo* / *amabor* | *amascam* / *amascar* | *amauero* / - | - / -
**Subjunctive: past**  | *amarem* / *amarer* | *amascerem* / *amascerer* | *amauissem* / - | - / -
**Subjunctive: present**   | *amem* / *amer* | *amascam* / *amascar* | *amauerim* / - | - / -
**Subjunctive: future**  | - / - | - / - | - / - | - / -
**Imperative: past**  | - / - | - / - | - / - | - / -
**Imperative: present **  | *ama* / *amare* | *amasce* / *amascere* | - / - | - / -
**Imperative: future** | *amato* / *amator* | *amascito* / *amascitor* | - / - | - / -

Some combinations with respect to aspect and voice are not expressed by a single (i.e. synthetic) finite form, and instead require [periphrastic constructions](la-dep/cop); some others are not expressed at all, like a theoretically possible, but never occurring, perfective present imperative or future subjunctive (these latter gaps are probably determined by semantic constraints). On the other hand, some of the synchronically synthetic finite forms like *amauero* are derived from the grammaticalisation of the copula (here *ero* 'I will be') into an inflectional suffix applied to the perfective stem.

A very common occurrence for a deverbative word based on a finite form is a conjunction of either kind ([`CCONJ`](la-pos/CCONJ) or [`SCONJ`](la-feat)), arising as the grammaticalisation of a [paratactic](la-dep/parataxis) insertion before another finite clause.


#### Examples

* ***uidebatis*** 'you (pl.) were seeing'
* ***leguntor*** 'that they will be read!' (future imperative) 
* ***feci*** 'I have done/made'
* ***scilicet*** 'that is', [explicative](la-feat/ConjType#Exp) co-ordinative conjunction, from the contraction of *scire **licet*** lit. 'one is allowed to know'

### <a name="Ger">`Ger`</a>: gerund (deprecated)

The *gerund* is morphologically identical with the gerundive (see below and **Note 1**) and thus the use of this value for the `VerbForm` feature should be considered to be deprecated, as it is in UD already for its being terminologically misleading. The value `Gdv` (or `VNoun`, see **Note 1**) should be used instead in all occurrences.

We notice that the traditional terminological and conceptual distinction between *gerund* and *gerundive* is based on a possible observed variation in **syntactic** behaviour: in certain contexts, the gerundive form, even of non-deponent/intransitive verbs, seems to behave following an active diathesis (and transitive syntax), and not a passive one as expected (cf. Miller 2000). Further, a gerundive form can allegedly appear as the head of its (non-finite) clause without agreeing with the supposed subject in [number](la-feat/Number) and [case](la-feat/Case) (as is the case in the [absolute constructions](la-dep/advcl-abs)), but staying in the neuter singular (of impersonal type; cf. Haspelmath 1987). It is not entirely clear how much this would represent an early stage of the language, but, in later stages, a tendency towards an active reinterpretation of gerunds/gerundives can be seen, up to its clearly active diathesis in some modern Romance languages (e.g. Italian *<b>leggendo</b> un libro ho imparato molte cose* 'I have learnt many things <b>by reading</b> a book', where it. *leggendo* (invariable) = lat. *legendo*, ablative from *legendum* < *lego* 'to read'). It has to be noted that the actual voice is not always easily assessed in such constructions, and sometimes this is not even possible.

Finally, since the difference between traditional gerunds and gerundives is possibly represented at a syntactic (e.g. presence of [`obj`](la-dep/obj) relation), and not morphological level, only the value `Gdv` should be retained (and even that could be simplified, see **Note 1**).

#### Examples

* ***uidendum*** '(the) being seen' / '(the) seeing'?


### <a name="Gdv">`Gdv`</a>: gerundive

The *gerundive* form (including therein the traditional denomination of *gerund*) is a participial form (see entry for **`Part`**) and, as such, apart from [aspect](la-feat/Aspect), it expresses [voice](la-feat/Voice) and agrees with a given nominal element in [number](la-feat/Number), [gender](la-feat/Gender) and [case](la-feat/Case). As a participle, it can also vary in [degree](la-feat/Degree). It is characterised by the infix *-nd-*, coming after the thematic vowel and before the nominal suffix of the [first/second declension](la-feat/InflClass-nominal) bearing number/gender/case (therefore, the denomination "*nd*-form" also exists).

The gerundive is more specifically a **passive** participle, sometimes referred to as the *future passive participle*, where "future" actually has to be intended in an aspectual sense, precisely as the [prospective](la-feat/Aspect#Prosp) aspect (expressing the relative imminence of an action/state/event, not an absolute time reference). Like for the morphological passive voice, it can be used also with normally intransitive verbs in an impersonal sense; however, under certain circumstances (and more so in later stages of the language) the gerundive form seems to also gain an active reading *and* syntax (cf. Miller 2000, Haspelmath 1987), blurring the line between gerundive and (active) future/present participle. A diachronic analogy can be seen between this development and the phenomenon of deponent verbs (i.e. verbs with passive morphology but active syntax/meaning); the view held by traditional grammars of the neuter gerundive as an "inflected equivalent" of the infinitive in certain contexts might be considered the acknowledgment of such a development in its final stage. Nevertheless, on the morphological level gerundive forms are always marked with `Voice=Pass`, exactly like deponent verbs; possible shifts are left for interpretation from the syntactic annotation. This reflects the linguistic system that we can observe in written documents at our disposal, which does not necessarily let a possibly different vernacular use of the language show through.

The origins of the *nd*-form are not entirely clear and are part of the problem: beyond the exact morphological derivation history, opinions vary as to whether the participial gerundive is a generalisation of a former verbal noun (i.e. the gerund), or if the "infinitival" use of gerundive forms is a later specialisation. The latter currently appears, especially from typological, morphological and diachronic points of view, as the most probable hypothesis.

The gerundive is often seen as the predicative element of [absolute constructions](la-dep/advcl-abs) or [verbal complements](la-dep/acl) (where it undisputably retains its passive diathesis and makes up for the lack of a passive imperfective participle in Latin) and also appears in a "necessitative" periphrastic construction together with the copula *sum* 'to be'. In the latter, the prospective aspect assumes a nuance of inevitability, and as such of something that "has to" happen.

#### Examples

* *ad has analogias verborum <b>exprimendas</b>* 'for expressing these double regularities of words' (from Varro, *De Lingua Latina* 10.72, as reported in Miller 2000)
    * the gerundive agrees in the feminine plural accusative with *analogia* 'resemblance', its passive subject, and the accusative itself is determined by *ad* 'to'; this is a predicative use embedded in a nominal context, lit. 'towards these resemblances being expressed' 
* *bello **gerendo*** 'during the conduction of war', lit. 'as war would be conducted'
    * use in an [absolute construction](la-dep/advcl-abs), where by definition the subject is different from that of the main clause, but an active reading with the same subject is clearly possible: 'as he/she/it would be waging war' 
* ***reuerendissimus*** 'most venerable' lit. 'being most revered', from *reuereor* 'to respect, honor' a deponent verb which however can be understood as the passive of *reuereo* (this explains the passive meaning of this expression)
* ***secundum*** 'after, according to', [adverb](la-pos/ADV)/[preposition](la-pos/ADP) from *sequor* 'to follow', a deponent verb, and thus with active meaning 'which is to follows'
    * this word is attested very early, and is considered by some the model from which a gerundive form was generalised for all verbs
* There are some [adjectives](la-pos/ADJ) like *moribundus* 'in procinct of dying' and *iucundus* 'delightful' which seem to have a relation to gerundive forms, but as the nature of this relation is unclear, they are not marked for `VerbForm=Gdv`



### <a name="Inf">`Inf`</a>: infinitive

The *infinitive* is a particular verbal noun which is characterised by an absence of [inflection](la-feat/InflClass-nominal) and, beyond [aspect](la-feat/Aspect), only expresses [voice](la-feat/Voice). It never agrees with any possible [subject](la-dep/nsubj). It is marked by a *-re/ri* suffix (originally *-se*, as still in *esse* 'to be', and sometimes assimilated as in *uelle* 'to want'), which is adjoined to the stem after the thematic vowel (if any) and can appear as *-i* for the passive voice of [athematic stems](la-feat/InflClass#LatX). 

The (morphological) voice of the infinitive can be either active or passive, and the aspect can vary between imperfective or perfective. A prospective aspect ending in *-ssere* is sparingly attested (e.g. *reconciliassere* 'to be going to recover', Pl. Capt. 1.2) and probably represents an archaic trait, lost in subsequent Latinity. Beyond that, such a formation coincides with the imperfective infinitive of desiderative verbs, e.g. *capessere* from *capesso* 'to want to seize, to seize eagerly' wrt. *capio* 'to seize': the interplay between future/prospective and desiderative meanings, which is also seen in some sigmatic future indicative perfective formations (e.g. *capso*, from *capio*, related to *capesso*) and in couples like *esurio* (desiderative) / *esurus* (future participle, see entry below), from *edo* 'to eat', makes an aspectual interpretation not entirely transparent.

The origin of the Latin infinitive seems to lie in the crystallised [dative/locative](la-feat/Case) inflected form of a now lost deverbative noun (a nearly identical development is seen for other Indo-European languages, too). The distribution of the Latin infinitive appears specialised in the **core arguments**, so it is mostly observed to act either as head predicate of a [clausal subject](la-dep/csubj), or as head predicate of an [open](la-dep/ccomp)/[closed](la-dep/xcomp) clausal complement (the difference seemingly determined by the semantics of the "main" verb), i.e. as [object](la-dep/obj) of the main predicate (or, equivalently, of a deverbative [noun](la-pos/NOUN)). When heading an open clausal complement, the infinitive can take an explicit subject which then appears in the accusative case, but there is still no agreement, unless the infinitive is expressed periphrastically (see below). The spreading of accusative between predicate and subject is reminiscent of [absolute constructions](la-dep/advcl-abs). Conversely, the possible subject of an infinitival subject clause can stay in the nominative case. The infinitive cannot occur as head of a non-core argument: in that case, a participial form (including gerundive/gerund), capable of inflection and agreement, needs to be employed. Another, more marginal use of the infinitive is as the predicate of independent clauses in narrative contexts, the so-called "historical infintive": there, the action is presented in a more vivid and fluid way by leaving only the imperfective aspect and forgoing all other grammatical categories (i.e. tense, mood and person/number agreement). Finally, another marginal use is as an equivalent of the [imperative](la-feat/Mood#Imp), a use often observed also in many living languages today.

The fact that the infinitive form almost only occurs in core arguments and is invariable makes it natural for it to be interpreted as a neuter noun, when it appears embedded in a nominal context like *hoc ipsum nihil agere* 'this same nothing-doing' (Cic. de Orat. 2.24). However, this is a kind of default, "external" agreement which is not morphologically present in the infinitive form itself, so that it is better never to annotate it with `Gender=Neut`, and consequently `Number=Sing` and `Case=Acc|Nom`: as already stated, these grammatical categories are not pertinent to the infinitive form.


* All variations of the infinitive with respect to aspect and voice with the example of *amo* 'to love':

Voice / Aspect | Imperfective | Inchoative | Perfective | *Prospective
--|--|--|--|--
**Active** | *amare* | *amascere* | *amauisse* | **amassere* / -
**Passive** | *amari* / *amarier* | ?*amasceri* | - | ?*amasseri* / -

From the scheme it appears that Latin has no synthetic form for a passive perfect infinitive, for which it resorts to the [periphrastic construction](la-dep/cop) *amatus esse*. The same is valid for the prospective aspect, where the construction *amaturus esse* regularly expresses it in Classical Latin for the active diathesis, while a more complex construction of the type of *amatum iri* is attested to express the passive diathesis, making use of the supine (see entry for **`Sup`**) and the passive imperfective infinitive of the intransitive *eo* 'to go' in impersonal function, so literally 'to be there a going for loving'. This construction is an *unicum*: the verb *eo* is nowhere else used in this auxiliary function in Latin.

Since the infinitive is already a (verbal) noun and acts as such, it is difficult to find cases where an actual verbal interpretation is no longer possible and a truly nominal one (i.e. [`NOUN`](la-pos/NOUN)) is needed or justified: a common candidate may be ***esse***, from the [auxiliary](la-pos/AUX) *sum*, in the sense of 'being' rather than 'to be', but here, too, expressions like *esse bonus* 'the being good' are observed, where *esse* fully retains its use as a verbal [copula](la-dep/cop). On the other hand, some Romance languages have formalised the nounness of such forms inserting them in a nominal paradigm, e.g. it. *essere* 'being', pl. *esser**i*** (and the nominal *esseri buoni* 'good beings' contrasts with the predicative *essere buoni* 'to be good (pl.)'). 


#### Examples

- ***ferre*** 'to carry' (note: the ending *-re* is directly attached to the stem with no intervening thematic vowel)
- ***uideri*** or ***uiderier*** (more archaic form) 'to be seen' (note: thematic vowel *-e-*)
- ***uigilauisse*** 'to have been wakeful' (note that the ending -isse is applied to the [perfective stem](la-feat/Aspect#Perf) of the verb)
- ***deargentassere*** 'to be going to deprive of money' (Lucil., Sat. 682)

### <a name="Part">`Part`</a>: participle

[To be completed]

* All variations of canonical participial forms with respect to aspect and voice with the example of *amo* 'to love', in the masculine nominative singular:

Voice/Aspect | Imperfective | Inchoative | Perfective | Prospective 
--|--|--|--|--
**Active**  | *amans* | *amascens* | - | *amaturus*  
**Passive**  | - | - | *amatus* | *amandus*


#### Examples

- ***ferentem*** 'carrying (m./f. acc. sg.)', present participle of *fero*
- *suspicio **acceptae** pecuniae* 'the suspicion that money has been/had been/will be received', perfect participle (f. gen. sing.) of *accipio*
    - a case of "dominant participle", where an entire clause is embedded as the [modifier](la-dep/acl) of a noun, and predicate and passive subject agree in gender, number and case
- ***morituri*** 'soon going to die (m. nom. pl.)', future participle of *morior*
    - the base verb is morphologically [passive](la-feat/Voice) , but, being deponent (i.e. active syntax/meaning), it can be formed into an active participle
- ***constanter*** 'constantly', [adverbial](la-pos/ADV) form of the present participle *constans* of the verb *consto* 'to stand firm' 
- ***natura*** 'nature', feminine [noun](la-pos/NOUN), originally future participle from the root of *nascor* 'to be born', so literally '[condition] when going to be born', so 'birth' and then extended to 'nature'. In this meaning, there is no longer any verbal aspect or paradigmatic relation with the original verb.
- ***altus*** 'tall, high', [adjective](la-pos/ADJ), originally perfect participle of *alo* 'to nourish', so lit. 'having been nourished'. As for *natura*, this meaning has become "static" and no aspectual nor diathetic reading is present anymore, e.g. it cannot accept an [agent](la-dep/obl-agent).




### <a name="Sup">`Sup`</a>: supine

[To be completed]

The *supine* appears as a verbal noun which does not show agreement with other arguments in the clause: it is (originally) a [noun](la-pos/NOUN) of fixed masculine [gender](la-feat/Gender) following the inflectional paradigm of the [fourth declension](la-feat/InflClass-nominal#IndEurU). What are canonically considered the forms of the supine are the singular accusative and ablative [cases](la-feat/Case) of such a noun. It is characterised by the infix *-s/t-* applied to the stem + thematic vowel (with same variations as for the perfect participle), followed by the inflectional ending. 

With respect to the other verb forms, the supine is an outlier in that it does not have any attributive function expressed by any morphological agreement by means of [person](la-feat/Person)/[number](la-feat/Number)/[gender](la-feat/Gender)/[case](la-feat/Case) like a participle, nor does it appears as the core argument of a clause like the infinitive. In fact, from a morphological point of view, it is not at all distinguishable from regularly formed masculine, [fourth-declension](la-feat/InflClassl#IndEurU) **abstract deverbal nouns**, e.g. *auditus* 'a hearing; the sense of hearing' from *audio* 'to hear, listen' or *cantus* 'a singing; song' from *cano* 'to sing'. 

From a syntactic point of view, in traditional grammars a difference is made between "passive" and "active" supine, the former being in the (singular) ablative case and the latter in the (singular) accusative. Actually, there are also occurrences identified as supines and in the dative case (see **Examples**), and, widening the field to all similar abstract deverbal names, there is no limitation to case nor number in their inflection. However, what is usually identified as the "active" supine does show some verbal syntax (in particular, the possibility to have an [object argument](la-dep/obj) in the accusative), and appears as a crystallised form of the aforementioned original fourth-declension nominal paradigm: this, together with its syntactic distribution, actually concurs to considering it a **converb** (see entry for **`Conv`**). 


* Complete paradigm of the abstract [fourth-declension](la-feat/InflClass#IndEurU) deverbal noun in the singular number with the canonical forms of the supine highlighted, with the example of *amo* 'to love', hence *\*amatus* 'the act of loving' (not attested as an independent word):

[Case](la-feat/Case) | [Singular](la-feat/Number)
--|--
**Nominative**   | *amatŭs* 
**Genitive**   | *amatūs*
**Dative**  | *amatui*
**Accusative**   | ***amatŭm*** 
**Vocative**   | *amatŭs*
**Ablative** | ***amatū***

#### Examples

- ***uisu** terribile* 'terrible with regard to the seeing of it', i.e. 'terrible to behold', from *uideo*, in the ablative case (relation): here, it appears as a completely [nominal](la-pos/NOUN) form
- *te **admonitum** venio* 'I come to the advising of you', i.e. 'I come to advise you', from *admoneo*, in the accusative case ([movement towards](la-dep/obl-lmod)): here, we observe it acting as a converb
- *quia istaec lepida sunt <b>memoratui</b>* (Pl. Bac. 1.1, 28) 'because these things here are pleasant to the mentioning', i.e. 'because these things here are pleasant to mention', from *memoro* 'to mention', in the **dative** case (purpose): like its ablative counterpart, what we have here is a full-fledged `NOUN`, not dissimilar to
- ***gressus*** 'the stepping, the going; step', abstract deverbal [noun](la-pos/NOUN) from *gradior* 'to step, walk'


### <a name="Vnoun">`Vnoun`</a>: verbal noun

[To be completed]

#### Examples
- ***ferre***, imperfective active infinitive
- ***uigilauisse***, perfective active infinitive
- ***uisu***, supine, in the ablative case
- ***gressus***, abstract deverbal noun (supine)


##### Note 1: rationalisation of Latin `VerbForm`s with regard to universality

[To be completed; see upcoming article (Cecchini, 2021).]


##### Note 2: when is a word no longer a verb?

[To be completed]


### References

* Cecchini, F. M. (2021, to be published). **Formae reformandae*: for a reorganisation of verb form annotation in Universal Dependencies illustrated by the specific case of Latin*, in Proceedings of the Fifth Workshop on Universal Dependencies (UDW 2021), Sofia, Bulgaria, March 2022; Association for Computational Linguistics.
* Haspelmath M. (1987). *Verbal noun or verbal adjective? The case of the Latin gerundive and gerund*, Arbeitspapier Nr. 3 (Neue Folge). Institut für Linguistik (Köln).
* Miller, D. G. (2000). *Gerund and gerundive in Latin*, Diachronica XVII:2.293–349.
