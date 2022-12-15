---
layout: base
title:  'German UD'
udver: '2'
---

# UD for German <span class="flagspan"><img class="flag" src="../../flags/svg/DE.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/AT.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/LI.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/CH.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/LU.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word.
  We usually tokenize them as separate tokens (words)
  with the exception of abbreviations such as _usw._ “etc.” which are kept as one token with the period.
* German compounds are written as one word and we do not split them.
* There is one class of multi-word tokens: the contractions of prepositions and definite articles.
  Example: _zum = zu + dem_ “to the”.

## Morphology

### Tags

* German uses all 17 universal POS categories, including particles ([PART]()).
* The following words are particles in German: _nicht_ “not”, and the infinitive marker _zu_ “to”.
* The pronoun ([PRON]()) vs. determiner ([DET]()) distinction is based on word lists because the traditional grammar does not define determiners.
  In general, words that inflect for gender, to be able to agree with a modified noun, are tagged [DET](), even if they
  act independently in a given sentence; that includes possessives.
* German auxiliary verbs ([AUX]()) are:
  * _sein_ for perfect tenses of some verbs (_ich bin gekommen_ “I have come”) and as copula (_er ist alt_ “he is old”)
  * _haben_ for perfect tenses of the remaining verbs (_ich habe gegessen_ “I have eaten”)
  * _werden_ for future tense (_ich werde reisen_ “I will travel”) and for the passive (_es wurde gegessen_ “it was eaten”)
  * modal verbs _dürfen_ “may”, _können_ “can”, _mögen_ “want”, _müssen_ “must”, _sollen_ “shall”, _wollen_ “want”
  * The verbs _sein, haben_ and _werden_ can also occur as normal verbs ([VERB]()), meaning “be, have, become”.
* There are four main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [AUX]().
  * Verbal noun `Vnoun`, tagged [NOUN](), looks like a capitalized infinitive but has an article and may inflect.

### Nominal Features

* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent [Gender]() feature with one of three values: `Masc`, `Fem` or `Neut`.
  * The following parts of speech inflect for `Gender` because they must agree with nouns: [ADJ](), [DET](),
    [VERB](), [AUX](). For verbs (including auxiliaries), only participles can inflect for gender. Finite verbs don't.
* The two main values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [VERB](), [AUX]() (finite and participles).
* [Case]() has 4 possible values: `Nom`, `Gen`, `Dat`, `Acc`.
  It occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET]().
  However, case forms of nouns are extremely ambiguous and most of the time the case is distinguished only by the form of the article.
* [Definite]() has 2 values: `Ind`, `Def`. It is used to distinguish the indefinite and definite articles ([DET]()).

### Degree and Polarity

* [Degree]() applies to adjectives ([ADJ]()) and adverbs ([ADV]()) and has one of three possible values: `Pos`, `Cmp`, `Sup`.
* [Polarity]() is used to mark the negative particle _nicht,_ i.e., only the `Neg` value is used.

### Verbal Features

* Finite verbs always have one of three values of [Mood](): `Ind`, `Imp` or `Sub` (called _Konjunktiv_ in German).
* Indicative and subjunctive verbs always have one of two values of [Tense](): `Past`, `Pres`.
  * In the subjunctive mood, the tense feature is used to distinguish Konjunktiv I (`Pres`) and Konjunktiv II (`Past`).
  * Imperative forms do not have the `Tense` feature.
  * The `Tense` feature is also used to distinguish present and past participles (_kommend_ “coming” vs. _gekommen_ “come”).
* The features [Aspect]() and [Voice]() are not used in German because
  both the perfect aspect and the passive voice are expressed periphrastically.

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()), determiners ([DET]()) and adverbs ([ADV]()).
* [NumType]() is used with numerals ([NUM]()), adjectives ([ADJ]()) and determiners ([DET]()).
* The [Poss]() feature marks possessive personal determiners (e.g. _mein_ “my”),
  possessive interrogative or relative determiners (e.g. _wessen_ “whose”).
* The [Reflex]() feature is always used together with `PronType=Prs` and it marks reflexive pronouns _(mich/mir, dich/dir, sich, uns, euch)._
  Note that their forms in the first and second person are ambiguous with irreflexive accusative forms, and the `Reflex` feature
  must be decided by context.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  With personal possessive determiners ([DET]()), the feature actually encodes the person of the possessor.
  Person is not marked on other types of pronouns and on nouns, although they can be almost always interpreted as the 3rd person.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).
* The [Polite]() feature distinguishes informal second-person pronouns (_du, ihr,_ `Polite=Infm`)
  from the formal _Sie_ (`Polite=Form`).
  The formal pronoun is phonologically equivalent in all its case forms to the third-person plural _sie_
  but it is distinguished in orthography by the capital letter _S._
  We tag it as second person (because that is its meaning) and we do not tag its number (because it is used both
  for singular and plural addressees) despite the fact that it combines with third-person plural verbs.
  The parser must learn that `Person=2|Polite=Form` subject attaches to `Number=Plur|Person=3` verbs,
  while `Number=Sing|Person=2|Polite=Infm` subject attaches to `Number=Sing|Person=2` verbs.
* There are two [layered features](../../u/overview/feat-layers.html), [Gender[psor]]() and [Number[psor]]().
  They appear with certain possessive determiners and encode the lexical gender/number of the possessor.
  The extra layer is needed to distinguish these lexical features from the inflectional gender and number
  that mark agreement with the modified (possessed) noun.

### Other Features

* Besides the layered features listed above, there are several other language-specific features:
  * [Typo]()
* The following universal features are not used in German: [Animacy](), [Evident]().

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a noun phrase in the nominative case, without preposition.
  * A finite subordinate clause may serve as the subject and is labeled `csubj`.
  * If an infinitive verb is to serve as the subject, it becomes a verbal noun
    (it gets the neuter singular nominative article and it is capitalized in writing),
    thus it is labeled `nsubj`.
* Objects defined in the German grammar may be bare noun phrases in accusative, dative or genitive,
  or prepositional phrases in accusative, dative or genitive.
  For the purpose of UD the objects are divided to core objects, labeled [obj](),
  and oblique objects, labeled [obl:arg]().
  * Bare accusative objects are considered core.
  * Bare dative and genitive objects, and all prepositional objects are considered oblique.
  * Accusative objects of some verbs alternate with finite clausal complements, which are labeled [ccomp]().
  * If a verb subcategorizes for the infinitive (e.g. phasal verbs or verbs of control), the infinitival complement is labeled [xcomp]().
* Adjuncts (or, following the German grammar, adverbial modifiers realized as noun phrases) are usually
  prepositional phrases, but they can be bare noun phrases as well. They are labeled [obl]():
  * Temporal modifiers realized as accusative noun phrases: _ich arbeite jeden Tag_ “I work every day.”
  * All prepositional phrases that are not prepositional objects (i.e., their role and form is not defined lexically by the predicate)
    are adjuncts.
* Extra attention has to be paid to the reflexive pronoun _sich_. It can function as:
  * Core object ([obj]()): _er sah sich im Spiegel_ “he sighted himself in the mirror.”
  * Reciprocal core objects (`obj`): _sie küssten sich_ “they were kissing each other.”
  * Inherently reflexive verb, cannot exist without the reflexive clitic, and the clitic cannot be substituted by an irreflexive pronoun
    or a noun phrase.
    In accord with the UD guidelines, we label the relation
    between the verb and the clitic as [expl:pv](), not `compound`. Example: _wir müssen uns beeilen_ “we must hurry.”
* In passive clauses, the subject is labeled with [nsubj:pass]() or [csubj:pass](), respectively.
  * The auxiliary verb in periphrastic passive is labeled [aux:pass]().
  * If the demoted agent is present, it has the form of a bare instrumental phrase and its relation is labeled [obl:agent]().

### Non-verbal Clauses

* The copula verb _sein_ (be) is used in equational, attributional, locative, possessive and benefactory nonverbal clauses.
  * Existential clauses use a different verb, _geben_ (give) with an accusative object: _es gibt Essen_ “there is food.”

### Relations Overview

* The following relation subtypes are used in German:
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [csubj:pass]() for clausal subjects of passive verbs
  * [obl:agent]() for agents of passive verbs
  * [obl:arg]() for prepositional objects
  * [expl:pv]() for reflexive clitics of inherently reflexive verbs
  * [aux:pass]() for passive auxiliaries
  * [compound:prt]() for separable verb prefixes
  * [det:poss]() for possessive determiners
  * [nmod:poss]() for possessive modifier phrases
  * [acl:relcl]() for adnominal relative clauses
  * [advcl:relcl]() for relative clauses whose antecedent is a clause
* The following relation types are not used in German at all:
  [clf](), [dislocated]()

## Treebanks

There are [four](../../treebanks/de-comparison.html) German UD treebanks:

  * [German-GSD](../../treebanks/de_gsd/index.html)
  * [German-HDT](../../treebanks/de_hdt/index.html)
  * [German-PUD](../../treebanks/de_pud/index.html)
  * [German-LIT](../../treebanks/de_lit/index.html)
