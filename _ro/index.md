---
layout: base
title:  'Romanian UD'
udver: '2'
---

# UD for Romanian <span class="flagspan"><img class="flag" src="../../flags/svg/RO.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word. We always tokenize them as separate tokens (words); that holds even for hyphenated words pronounced joining two syllables in a single one, such as  ne-am, v-ați.

## Morphology

### Tags

* Romanian uses all 17 universal POS categories.
* The pronoun ([PRON]()) vs. determiner ([DET]()) distinction is based on the syntactic position; `PRON` is
  independent, `DET` is subordinated to a noun or pronoun.
* CONTEMPORARY ROMANIAN (RRT) has three auxiliary verbs ([AUX]()), _fi_ (“to be”), _avea_ (“to have”),
  _vrea_ (“to want”). In Nonstandard Romanian, the auxiliaries _putea_ (“can”), _trebui_ (“must”),
  _ști_ (“to know”) were annotated. The auxiliary _vrea_ (“to want”) is used in the old language in many
  forms than in the contemporary, ex.: participle.
  * The copula with non-verbal predicates  was annotated as AUX.
  * Periphrastic future tense (vrea + infinitive of the main verb; vrea + fi+ participle of the main verb).
  * Periphrastic past tense (avea + participle of the main verb).
  * Periphrastic conditional (conditional form of avea + future of the main verb; conditional form of avea+ fi + participle of the main verb).
  * Periphrastic passive (any form of fi, including periphrastic forms, + participle of the main verb).
* There are four main (de)verbal forms, distinguished by the UPOS tag and the value of the VerbForm feature:
  * Infinitive Inf, tagged VERB or AUX.
  * Finite verb Fin, tagged VERB or AUX.
  * Participle Part, tagged VERB or AUX (in the nonstandard treebank) or ADJ (in the RRT treebank).
  * Gerundive verb Ger, tagged VERB or AUX.

### Nominal Features

* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent [Gender]() feature with one of
  two values: `Masc` or `Fem`. The neuter is in Romanian classified as masculine singular and
  feminine plural.
  * The following parts of speech inflect for `Gender` because they must agree with nouns:
    [ADJ](), [DET](), [NUM](), [VERB](), [AUX](). For verbs (including auxiliaries), only
    participles have gender.
* The two main values of the [Number]() feature are `Sing` and `Plur`. The following parts of
  speech inflect for number: [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [VERB](), [AUX]()
  (finite, participles), marginally [NUM]().
* [Case]() has 5 possible values: `Nom`, `Gen`, `Dat`, `Acc`, `Voc`. It occurs with the nominal
  words, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [NUM](). It can occur with
  participles but only with those tagged as `ADJ`. To nouns there is no distinction of form,
  they are annotated as nom.,-acc. and gen.,-dat. Only some pronouns have distinct forms of
  accusative and dative.
  * The `Case` feature also occurs with prepositions (ADP). Here it is a lexical feature.
    Prepositions do not inflect for case but they subcategorize for the case of their noun phrase.
* [Definite]() has 2 possible values: `Ind` and `Def`. Definiteness is marked morphologically on
  nouns.

### Degree and Polarity

* Degree applies to adjectives (ADJ) and adverbs (ADV) and has (rarely, in RRT) one of three possible values: Pos, Cmp, Sup.
* Polarity has two values, Pos and Neg, and applies primarily to verbs (VERB, AUX), adjectives (ADJ) and adverbs (ADV) that can be negated using the paricle “nu”, the ADV “nici” (or the morpheme “ne-” in nonstandard treebank).
  * The Polarity feature is not used with pronouns and determiners, although there is a subset of negative pronouns and determiners. The PronType=Neg feature is used there instead.

### Verbal Features

* Finite verbs always have one of three values of Mood: Ind, Imp or Subj.
* Verbs in the indicative mood have one of four values of Tense: Past simple, Pres, Imperfect, Pluperfect.
* The future are distinguished analytically.
* Imperative forms do not have the Tense feature
* Past and present conditionals are distinguished analytically; also the past subjunctive and the perfect future).

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()), determiners ([DET]()), and adverbs ([ADV]()).
* [NumType]() is used with numerals ([NUM]()).
* The [Poss]() feature marks possessive personal determiners.
* The [Reflex]() feature is marked by the language specific features: expl:pv, expl:poss, expl:impers, and expl:pass.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, 1, 2 and 3.
  With personal possessive determiners ([DET]()), the feature actually encodes the person of the possessor.
  Person is not marked on other types of pronouns and on nouns, although they can be almost always interpreted as the 3rd person.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).
* There are two layered features, [Gender[psor]]() and [Number[psor]](). They appear with certain possessive
  adjectives and determiners and encode the lexical gender/number of the possessor. The extra layer
  is needed to distinguish these lexical features from the inflectional gender and number that mark
  agreement with the modified (possessed) noun.
* [Strength]() distinguishes strong (independent) and weak (clitic) forms of personal pronouns.

### Other Features

* Besides the layered features listed above, there are several other language-specific features:
  * [Polite]()
  * [Variant]()
    * `Variant=Long` distinguishes long forms of infinitives and negative imperatives in nonstandard Romanian.
    * `Variant=Short` distinguishes the words written with hyphen, whish loss some characters in RRT.

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a noun phrase in the nominative case, without preposition.
  * An infinitive verb may serve as the subject and is labeled as clausal subject, [csubj]().
  * A finite subordinate clause may serve as the subject and is labeled `csubj`.
* For the purpose of UD the objects are divided to core objects, labeled [obj]() or [iobj](), and oblique objects, labeled [obl]().
  * All prepositional objects are considered oblique.
  * Accusative objects of some verbs alternate with finite clausal complements, which are labeled [ccomp]().
  * If a verbal construction expands the `iobj`, it is labeled [xcomp]().
  * If a verb subcategorizes for two core objects, one of them accusative (or ccomp) and the other non-accusative,
    then the non-accusative object is labeled `iobj`. Core nominal objects in other situations are labeled just `obj`.
* Adjuncts are usually prepositional phrases, but they can be bare noun phrases as well. They are labeled `obl`.
* For the prepositional objects which cannot be omitted we used the label [nmod:pmod]().
* This label is also used for the direct object which in Romanian language is preceded by the preposition _pe_
  to show that it names a person.
  * Temporal modifiers are annotated as: [nmod:tmod](); [advmod:tmod]() or [advcl:tcl]().
* Extra attention has to be paid to clitic forms of pronouns (accusative) and (dative). They can function as:
  * Core objects with weak form can be (`obj` or `iobj`): or `expl` if the `obj`. `iobj` is named also by a noun or another pronoun.
  * The reflexive can be [expl:pv](), [expl:impers](), [expl:poss](), [expl:pass]().
* In passive clauses (both reflexive and periphrastic passive), the subject is labeled with [nsubj:pass]() or [csubj:pass](), respectively.
  * The auxiliary verb in periphrastic passive is labeled [aux:pass]().
  * If the demoted agent is present, it has the form of a bare instrumental phrase and its relation is labeled [nmod:agent]().

## Non-verbal Clauses

* The copula verb _fi_ (“be”) is used in equational, attributional, possessive and benefactory
  nonverbal clauses. Purely existential clauses use _fi_ as well but it is treated as the head
  of the clause and tagged [VERB]().

## Relations Overview

* The following relation subtypes are used in Romanian:
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [csubj:pass]() for clausal subjects of passive verbs
  * [nmod:agent]() for agents of passive verbs
  * [nmod:pmod]() for prepositional objects which cannot be omitted as determiners of some verbs.
  * [expl:impers]() for impersonal value of the reflexive
  * [expl:pv]() for reflexive clitics of inherently reflexive verbs
  * [expl:pass]() for reflexive clitics with passive value
  * [expl:poss]() for reflexive clitics with possessive value
  * [aux:pass]() for passive auxiliaries
  * [nmod:tmod]() for prepositional nouns with temporal value
  * [advcl:tcl]()  for adverbial clauses with temporal value
  * [advmod:tmod]() for adverbs with temporal value
* The following main types are also used alone: [expl]() if a [nsubj](), [obj]() or [iobj]() is repeated by a pronoun.


## Treebanks

There are [three](../treebanks/ro-comparison.html) Romanian UD treebanks:

  * [RRT](../treebanks/ro_rrt/index.html)
  * [Nonstandard](../treebanks/ro_nonstandard/index.html)
  * [SiMoNERo](../treebanks/ro_simonero/index.html)
