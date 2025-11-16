---
layout: base
title:  'Naga UD'
udver: '2'
---


# UD for Naga <span class="flagspan"><img class="flag" src="../../flags/svg/IN.svg" /></span>

## Tokenization and Word Segmentation

* Words in Naga-Suansu are generally delimited by whitespace or punctuation. Exceptions:

    * Multiword tokens occur in the case of clitics. The nominalizer _di_ is written after the verb complex without whitespace. For example, _mazokwoan ngamme<b>di</b>_ ("think.arrive + be able to + NMLZ = memory").

    * No words with internal whitespace appear in the current data.

## Morphology

### Tags

<!-- This is an overview only. For more detailed discussion and examples, see the list of [Naga-Suansu POS tags]()-->

* Naga-Suansu employs 16 universal POS tags. The `SYM` category does not appear in the current dataset.

#### Determiners vs. Pronouns

* The [DET]() tag applies to words functioning as determiners, including demonstratives (_hai_, _tye_), indefinites (_kwehn_, _za_), total quantifiers (_mazohm_), reflexives (_drekhalai_, _khalailehnda_), and interrogatives (_mwe_, _gare_).
* The [PRON]() tag is reserved for words serving as the head of a noun phrase, including personal, demonstrative, indefinite, total, and interrogative pronouns.

#### (De)verbal Forms

Naga-Suansu distinguishes four main (de)verbal forms based on the [VerbForm]() feature:

* Finite verbs (`Fin`), tagged as [VERB]() or [AUX]()
* Infinitives (`Inf`), tagged as [VERB]() or [AUX]()
* Converbs (`Conv`), tagged as [VERB]() or [AUX]()
* Verbal nouns (`Vnoun`), tagged as [NOUN]()

### Features

<!-- This is an overview only. For more detailed discussion and examples, see the list of [Naga-Suansu features]() -->

#### Nominal Features

* Nominals ([NOUN](), [PRON](), [PROPN]()) carry [Number]() (`Sing`, `Plur`), and can carry [Case]() (`Abl`, `Ben`, `Dat`, `DatErg`, `Erg`, `ErgTop`, `Gen`, `GenAbl`, `GenTop`, `Loc`, `LocTop`, `Top`).
* [ADJ]() and [NUM]() inherit nominal features of the whole noun phrase.
* [DET]() gets nominal features when it is the final element in a noun phrase.

#### Verbal Features

* [VERB]() and verbal auxiliary _la_ "be" ([AUX]()) may have features such as [Aspect]() (`Imp`, `Perf`, `Prog`), [Modal]() (`Abil`, `Perm`, `Poss`), [Mood]() (`Imp`, `Ind`), and [Tense]() (`Past`, `Pqp`, `Pres`).
* All verbal features also appear on [ADP]() and [ADV]() in phrasal verb particles.
* Mood auxiliaries have [Mood]() (`Des`, `Jus`, `Hort`, `Imp`, `Int`, `Irr`) feature.
* The evidential auxiliaries _gu_ and _ga_ use the [Evident]() (`Fh`, `Nfh`) feature.

* The obligatory modal auxiliary _geraha_ has the [Modal]() (`Obl`) feature.

#### Pronouns, Determiners, and Quantifiers

* [PronType]() (`Dem`, `Ind`, `Int`, `Prs`, `Tot`) is used with [PRON](), [DET](), and [ADV]().
* Personal pronouns have the [Person]() feature in addition to [Case](), and [Number]().
* Demonstratives have [Deixis]() (`Prox`, `Remt`).
* [Reflex]() (`Yes`) is used with reflexive [DET]()


#### Other Features

* [Abbr]() (`Yes`) is applied to abbreviations, mostly [PROPN]().
* [Degree]() (`Cmp`, `Pos`) is used with [ADJ]().
* [ExtPos]() (`ADV`, `VERB`) is used on the first words of fixed multiword expressions ([fixed]()).
* [Foreign]() (`Yes`) is applied to foreign words tagged as [X]().
* [NumType]() (`Card`) and [NumForm]() (`Digit`, `Word`) are used with [NUM]().
* [Polarity]() (`Neg`) is used on negative [PART]() and [INTJ]() and on the last word in the clause ([VERB](), [AUX](), etc.). [Polarity]() (`Pos`) is used on positive [INTJ]() (e.g., _ay_ "yes").
* The following universal features are currently not used in Naga-Suansu: [Animacy](), [Clusivity](), [DeixisRef](), [Gender](), [NounClass](), [Polite](), [Poss](), [Typo](), [Voice]().

## Syntax

<!-- For more information, see the list of [Naga-Suansu relations](). -->

### Core Arguments, Oblique Arguments, and Adjuncts


* A nominal subject ([nsubj]()) is a noun phrase, typically in the first position of a clause. It can have an Ergative case (_-nan_), a Topic case (_-di_), or no case marking, and it does not have a postposition.

    * Intransitive predicates are usually unmarked, although they can take the Topic case in certain types of predications.

    * Transitive predicates usually have subjects with the Ergative case, though it can be omitted.

    * A finite subordinate clause can serve as the subject and is labeled [csubj]().

* For transitive predicates, the other argument (the one that is not the subject) is the direct object ([obj]()). It is usually in the second position of the clause, has a Topic case or no case marking, and does not have a postposition.

* Indirect nominal objects ([iobj]()) of ditransitive predicates usually have the Dative case (_-la_), though it can be omitted.

* Adjuncts are either postpositional phrases or bare nominals with cases other than Ergative, Topic, or Dative, or with omitted case marking. They are labeled [obl]().

### Non-verbal Clauses

The copula e is found in equational clauses only. Attributional, locative, possessive and benefactory nonverbal clauses use [VERB]() forms or the auxiliary _la_ "be" ([AUX]()).

<!-- Example from Czech page
The copula verb být (be) is used in equational, attributional, locative, possessive and benefactory nonverbal clauses. Purely existential clauses (without indicating location) use být as well but it is treated as the head of the clause and tagged VERB. -->



### Relations Overview

* The following relation subtypes are used in Naga-Suansu:

    * [acl:relcl]() - relative clause modifier
    * [advmod:emph]() - emphasizing word, intensifier
    * [compound:prt]() - phrasal verb particle
    * [compound:svc]() - serial verb compounds
    * [csubj:outer]() - outer clause clausal subject
    * [flat:foreign]() - foreign words
    * [flat:name]() - multiword names
    * [nmod:poss]() - possessive nominal modifier
    * [nsubj:outer]() - outer clause nominal subject
    * [nsubj:pass]()- passive nominal subject


* The following relation types are not currently used in Naga-Suansu: [clf](), [dep](), [dislocated](), [expl](), [goeswith](), [list]().

## Treebanks

There is 1 Naga UD treebank:

  * [Naga-Suansu](../treebanks/nmf_suansu/index.html)
