---
layout: base
title:  'Low Saxon UD'
udver: '2'
---

# UD for Low Saxon <span class="flagspan"><img class="flag" src="../../flags/svg/DE-HANNOVER.svg" /></span>

## Introduction

A part of this documentation is copied from the current German documentation [UD for German](https://universaldependencies.org/de/index.html), which can mostly be applied to Low Saxon as well.

Since there is no official interregional spelling for Low Saxon, the examples provided here are given in the interregional spelling suggestion used e.g. by the Dutch Low Saxon Wikipedia (_Nysassiske Skryvwyse_, described in more detail here: https://skryvwyse.eu/ (only in Low Saxon)) and lemma forms are given in both the _Nysassiske Skryvwyse_ and normalised Middle Low Saxon following the _Mittelniederdeutsches Handwörterbuch_ by Agathe Lasch et al. 

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word.
  We usually tokenize them as separate tokens (words)
* Low Saxon compounds are written as one word and we do not split them.
* There are classes of multi-word tokens such as contractions of prepositions and definite articles as well as contractions of verbs and a (clitic) pronoun.
  Examples: _hek = hev + ik_ "I have", _im = in + dem_ "in the"

## Morphology

### Tags

* Low Saxon uses all 17 universal POS categories, including particles ([PART]()).
* The following words are particles in Low Saxon: _nich_/_nicht¹_ “not”, and the infinitive marker _to_/_tô⁵_ “to”.
* The pronoun ([PRON]()) vs. determiner ([DET]()) distinction is based on word lists because the traditional grammar does not define determiners.
  In general, words that inflect for gender, to be able to agree with a modified noun, are tagged [DET](), even if they
  act independently in a given sentence; that includes possessives.
* Low Saxon auxiliary verbs ([AUX]()) are:
  * _weasen_/_wēsen²_ for perfect tenses of some verbs (_ik bün koamen_ “I have come”) and as copula (_hee is old_ “he is old”)
  * _hebben_ for perfect tenses of the remaining verbs (_ik hev eaten_ “I have eaten”)
  * _werden_/_wērden¹_ for the passive (_dat wardt eaten_ “it is (being) eaten”)
  * _sköälen_/_schȫlen¹_, _willen_/_willen¹_ and _werden_/_wērden¹_ for future tense (_ik skal binnenkört dår weasen_ “I will arrive soon”)
  * modal verbs _dörven_ “may”, _künnen_ “can”, _möägen_/_mȫgen_ “may, want”, _möten_/_mö̂ten²_ “must”, _sköälen_/_schȫlen¹_ “shall”, _willen_/_willen¹_ “want”
  * _doon_/_dôn¹_, _willen_/_willen¹_ and _werden_/_wērden¹_ for a periphrastic conditional (_see dea em lever besöken_ “she would prefer to visit him“)
  * The verbs _weasen_/_wēsen²_, _hebben_, _doon_/_dôn¹_ and _werden_/_wērden¹_ can also occur as normal verbs ([VERB]()), meaning “be, have, do, become”.
* There are four main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [ADJ]().
  * Verbal noun `Vnoun`, tagged [NOUN](), looks like an infinitive or (especially in older language) like a present participle but has an article and may inflect.

### Features
#### Nominal Features

* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent [Gender]() feature with one of two or three values: `Masc`, `Fem` or `Neut`. Most dialects preserve three genders, while in some, `Masc` and `Fem` have merged. 
  * The following parts of speech inflect for `Gender` because they must agree with nouns: [ADJ](), [DET](),
    [VERB](), [AUX](). For verbs (including auxiliaries), only participles can inflect for gender. Finite verbs don't.
* The two main values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [VERB](), [AUX]() (finite and participles).
* The number of values for [Case]() depends on the dialect. Few dialects have preserved four cases: `Nom`, `Gen`, `Dat`, `Acc`. Most dialects do not distinguish dative and accusative anymore and thus only know three cases:  `Nom`, `Gen`, `Acc`.  Some dialects have also merged the nominative and accusative and therefore only two cases remain: `Nom`, `Gen`.
  Case occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET]().
  However, case forms of nouns are extremely ambiguous and most of the time the case is distinguished only by the form of the article.
* [Definite]() has 2 values: `Ind`, `Def`. It is used to distinguish the indefinite and definite articles ([DET]()).

#### Degree and Polarity

* [Degree]() applies to adjectives ([ADJ]()) and adverbs ([ADV]()) and has one of three possible values: `Pos`, `Cmp`, `Sup`.
* [Polarity]() is used to mark the negative particle _nich_/_nicht¹_, i.e., only the `Neg` value is used.

#### Verbal Features

* Finite verbs always have one of two values of [Mood](): `Ind` or `Imp`. Some dialects have preserved separate forms for `Sub` (called _konjunktiv_ in Low Saxon).
* Indicative and subjunctive verbs always have one of two values of [Tense](): `Past`, `Pres`.
  * In the subjunctive mood, the tense feature is used to distinguish _konjunktiv I_ (`Pres`) and _konjunktiv II_ (`Past`).
  * Imperative forms do not have the `Tense` feature.
  * The `Tense` feature is also used to distinguish present and past participles (_singen(d)_ “singing” vs. _sungen_ “sung”).
* In the plural, verbs do not commonly distinguish person and consequently are only tagged for `Plur`. Some dialects may show occasional exceptions to this rule in particular verbs (maybe due to influence from German or Dutch?), in case of which the person should be tagged. 
* The features [Aspect]() and [Voice]() are not used in Low Saxon because
  both the perfect aspect and the passive voice are expressed periphrastically.
  

#### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()), determiners ([DET]()) and adverbs ([ADV]()).
* [NumType]() is used with numerals ([NUM]()), adjectives ([ADJ]()) and determiners ([DET]()).
* The [Poss]() feature marks possessive personal determiners (e.g. _myn_/_mîn²_ “my”).
* The [Reflex]() feature is always used together with `PronType=Prs` and it marks reflexive pronouns _(my/mî, dy/dî, sik/sik¹, uns/uns², ju/iü²)._
  Note that their forms in the first and second person are ambiguous with irreflexive accusative forms, and the `Reflex` feature
  must be decided by context.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  With personal possessive determiners ([DET]()), the feature actually encodes the person of the possessor.
  Person is not marked on other types of pronouns and on nouns, although they can be almost always interpreted as the 3rd person.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).
* The [Polite]() feature distinguishes informal second-person pronouns (_du_/_dû¹_, _jy_/_gî²_, `Polite=Infm`)
  from the formal _Jy_/_gî²_ and _See_/_sê²_ (`Polite=Form`).
  The formal pronoun _Jy_/_gî²_ is phonologically equivalent in all its case forms to the second-person plural _Jy_/_gî²_, 
  and the formal pronoun _See_/_sê²_ is phonologically equivalent in part of its case forms to the third-person plural _see_/_sê²_
  but they are distinguished in orthography by the capital letters _J_ and _S_.
  We tag the formal pronoun _See_/_sê²_ as second person (because that is its meaning) and we do not tag formal pronouns for number (because they are used both
  for singular and plural addressees) despite the fact that they combine with plural verbs.
  The parser must learn that `Person=2|Polite=Form` subject attaches to `Number=Plur` verbs,
  while `Number=Sing|Person=2|Polite=Infm` subject attaches to `Number=Sing|Person=2` verbs.

#### Other Features

* The following universal features are not used in German: [Animacy](), [Evident]().

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a noun phrase in the nominative case, without preposition.
  * A finite subordinate clause may serve as the subject and is labeled `csubj`.
  * If a verb is to serve as the subject, it becomes a verbal noun
    (its form resembles the infinitive, or especially in older language the present participle, but it gets the neuter singular nominative article),
    thus it is labeled `nsubj`.
* Objects defined in the Low Saxon grammar may be bare noun phrases in accusative, and in dialects which have preserved the dative-accusative distinction, a dative object is possible as well. Bare genitive phrases do not generally occur as objects in the modern language anymore. 
  Prepositional phrases in accusative (or also dative, in some dialects) can function as objects as well. 
  For the purpose of UD the objects are divided to core objects, labeled [obj]() or [iobj](),
  and oblique objects, labeled [obl:arg]().
  * Bare accusative (and dative) objects are considered core.
  * All prepositional objects are considered oblique.
  * Accusative objects of some verbs alternate with finite clausal complements, which are labeled [ccomp]().
  * If a verb subcategorizes for the infinitive (e.g. phasal verbs or verbs of control), the infinitival complement is labeled [xcomp]().
  * If a verb subcategorizes for two core objects, one of them accusative (or `ccomp`) and the other non-accusative,
    then the non-accusative object is labeled [iobj]().
    Core nominal objects in other situations are labeled just [obj]().
* Adjuncts (or, following the German grammar, adverbial modifiers realized as noun phrases) are usually
  prepositional phrases, but they can be bare noun phrases as well. They are labeled [obl]():
  * Temporal modifiers realized as accusative noun phrases: _ik werke elken dag_ “I work every day.”
  * All prepositional phrases that are not prepositional objects (i.e., their role and form is not defined lexically by the predicate)
    are adjuncts.
* Extra attention has to be paid to the reflexive pronoun _sik_. It can function as:
  * Core object ([obj]() or [iobj]()): _hee sügt sik in'n spegel_ “he sights himself in the mirror.”
  * Reciprocal core objects (`obj` or `iobj`): _see küsset sik_ “they are kissing each other.”
  * Inherently reflexive verb, cannot exist without the reflexive clitic, and the clitic cannot be substituted by an irreflexive pronoun
    or a noun phrase.
    In accord with the current UD guidelines, we label the relation
    between the verb and the clitic as [expl:pv](), not `compound`. Example: _wy mussen uns spoden_ “we had to hurry.”
* In passive clauses, the subject is labeled with [nsubj:pass]() or [csubj:pass](), respectively.
  * The auxiliary verb in periphrastic passive is labeled [aux:pass]().
  * If the demoted agent is present, it has the form of a bare instrumental phrase and its relation is labeled [obl:agent]().

### Non-verbal Clauses

* The copula verb _weasen_/_wēsen²_ (be) is used in existential, equational, attributional, locative, possessive and benefactory nonverbal clauses.
  * Existential clauses, especially in dialects from the German side, may also use a different verb, _geaven_/_gēven_ (give) with an accusative object: _dat givt eaten_ “there is food.”

### Relations Overview

* The following relation subtypes are used in Low Saxon:
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [csubj:pass]() for clausal subjects of passive verbs
  * [obl:agent]() for agents of passive verbs
  * [obl:arg]() for prepositional objects
  * [expl:pv]() for reflexive clitics of inherently reflexive verbs
  * [aux:pass]() for passive auxiliaries
  * [compound:prt]() for separable verb prefixes
  * [det:poss]() for possessive determiners
  * [nmod:poss]() for possessive modifier phrases

## Treebanks

There are [N](../treebanks/nds-comparison.html) Low Saxon UD treebanks:

  * [Low Saxon-A](../treebanks/nds_a/index.html)
  * [Low Saxon-B](../treebanks/nds_b/index.html)

