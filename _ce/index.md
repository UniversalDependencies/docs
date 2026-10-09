---
layout: base
title:  '<Chechen> UD'
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
* The tag [AUX]() is applied to two lexemes: _d.u_, which functions as a copula, and _xülu_, which serves as an auxiliary in complex temporal-aspectual constructions. 
Both items are inflected for grammatical agreement, tense, and have finite, participle, and free relative forms. 
In addition, the tag [AUX]() is applied to the lexical root _wa_ 'stay' when used as an auxiliary in complex temporal-aspectual constructions to contribute imperfective reading.
* The tag [DET]() is applied to pronominal items used attributively. One exception is possessive pronouns, which are all tagged as [PRON](). 
* Predicative uses of pronominal items are tagged as [PRON]().

### Features

#### Nominal features

* Nouns, adjectives, determiners, and numerals up to 'five' inflect for [Case]() and [Number]().
 
    * Nouns and personal pronouns have extensive case paradigms: `Nom`, `Gen`, `Dat`, `Erg`, `Ins`, `Loc` (nouns only), `All`, `Abl`, `Ins`, `Lat`, and `Cmp`.
	* Adjectives and determiners make a `Nom` nominative / `Acc` accusative (oblique) distinction.
* There are two language-specific nominal features: [Log]{} and [NounClass]().
* Personal pronouns have a feature [Log](), applied for uses of third person reflexive forms in direct speech to refer to the reported speaker.

#### Verbal Features

* Verbs inflect for [Tense](), [Aspect](), [Mood](), and [NounClass]() agreement.
* Verbs are annotated for [VerbForm](): `Conv`, `Inf`, `Part`, `Noun`.
* Auxiliaries inflect for [Tense]() and [NounClass]() agreement.
* There are four [NounClass]() types: `J-class`, `V-class`, `D-class`, and `B-class`.

## Syntax

* Chechen has ergative-absolutive alignment, ergative is marked, while absolutive is unmarked. 
Ergative-marked arguments are syntactic subjects of transitive verbs. Absolutive arguments are syntactic subjects of intransitive verbs and are syntactic objects of transitive verbs. 
Predicates agree with the absoultive argument; the case of the argument, the agreement pattern, and the valence of the predicate are used to distinguish between the subject and the object argument.

* The main copula construction in Chechen uses a form of the copula _d.u_. 
In finite clauses, the copula is inflected for subject agreement, tense, and aspect (as relevant).

~~~ conllu

1	so	so	PRON	_	Case=Abs|Number=Sing|Person=1	5	nsubj
2-3	juq	_	_	_	_	_	_
2	ju	d.u	ADV	_	NounClass=Jclass|Tense=Pres	5	cop
3	q	q	PART	_	_	2	advmod:emph
4	hwa	hwa	PRON	_	Case=Gen|Number=Sing|Person=2	5	nmod
5	jow	jow	NOUN	_	Case=Abs	15	root

so      ju       =q   hwa     jow
1SG.ABS J-be.PRS EMPH 2SG.GEN girl
"I am your daughter."
~~~

* There two language-specific relations: [advmod:emph](), [ccomp:reported](), and [obj:caus]().

* The subtype relations used are as follows:

    * [acl:relcl]()
    * [advmod:emph]()
    * [ccomp:reported]()
    * [compound:redup]()
    * [nmod:poss]()
    * [obj:caus]()


## Treebanks

There is [one](../treebanks/ce-comparison.html) Chechen UD treebank:

  * [Chechen-MottDT](../treebanks/ce_mottdt/index.html)
