---
layout: base
title:  'Chechen UD'
udver: '2'
---

# UD for Chechen <span class="flagspan"><img class="flag" src="../../flags/svg/AQ.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace.
* Multiword tokens in Chechen are formed with clitics that attach phonologically to the following or preceding host word. The clitics are:

    * The proclitic _ma_, which is used to negate imperatives and desideratives; otherwise it is used with emphatic functions
    * The enclitic _’a_, which has coordinating, additive, and emphatic functions
    * The emphatic enclitic _q_
* Punctuation marks are attached to neighboring words. They are tokenized as separate tokens.
* There are no multiword tokens written with whitespace.

## Morphology

### Tags

* Chechen-MottDT uses 16 tags, with the exception of [SYM]().
* The tag [PART]() is applied to the proclitic _ma_, the enclitic _q_, and the quotatives _boox_ and _baax_
* The tag [AUX]() is applied to two lexemes: _du_ and _xülu_, which serves as an auxiliary in various temporal-aspectual constructions. Both lexemes also function as a copula in non-verbal predication.
The lexeme _du_ inflects for grammatical agreement. Both lexemes inflect for tense and have finite, participle, and free relative forms.
* The tag [DET]() is applied to pronominal items used attributively. One exception is possessive pronouns, which are all tagged as [PRON]().
* Predicative uses of pronominal items are tagged as [PRON]().

### Features

#### Nominal features

* Nouns, adjectives, determiners, and numerals up to 'five' inflect for [Case]() and [Number]().

    * Nouns and personal pronouns have extensive case paradigms: `Nom`, `Gen`, `Dat`, `Erg`, `Ins`, `Loc` (nouns only), `All`, `Abl`, `Ins`, `Lat`, and `Cmp`.
	* Attributive uses of adjectives and determiners make an absolutive / oblique distinction (the latter is annotated as `Acc` following the UD convention).
* There are two language-specific nominal features: [Log]() and [NounClass]().
* Personal pronouns have a feature [Log](), applied to uses of third person reflexive forms in reported speech to refer to the reported speaker.

#### Verbal Features

* Verbs inflect for [Tense](), [Aspect](), [Mood](), and [NounClass]() agreement.
* Verbs are annotated for [VerbForm](): `Conv`, `Inf`, `Part`, `Noun`.
* There is one language-specific verbal feature: [ConvType]().
* Auxiliaries inflect for [Tense](). The auxiliary _du_ inflects for [NounClass]() agreement.
* There are four [NounClass]() values: `J-class`, `V-class`, `D-class`, and `B-class`.

## Syntax

* Chechen has ergative-absolutive case alignment, ergative is marked, while absolutive is unmarked.
Ergative-marked arguments are semantic subjects of transitive verbs (A arguments). Absolutive arguments are semantic subjects of intransitive verbs (S arguments), semantic objects of transitive verbs (P arguments), and semantic subject of transitive verbs (A arguments) with certain temporal-aspectual forms (in the so-called bi-absolutive construction).
Predicates agree with the absolutive argument; the case of the argument, the agreement pattern, and the valence of the predicate are used to distinguish between the subject and the object argument.

* The main copula construction in Chechen uses a form of the copula _du_.

* There two language-specific relations: [advmod:emph]() and [ccomp:reported]().

* The subtype relations used are as follows:

    * [acl:relcl]()
    * [advmod:emph]()
    * [ccomp:reported]()
    * [compound:redup]()


## Treebanks

There is one Chechen UD treebank:

  * [Chechen-MottDT](../treebanks/ce_mottdt/index.html)
