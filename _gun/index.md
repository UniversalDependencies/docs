---
layout: base
title:  'Mbya Guarani UD'
udver: '2'
---

# UD for Mbyá Guaraní <span class="flagspan"><img class="flag" src="../../flags/svg/PY.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/AR.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/BR.svg" /></span>

This is a brief overview of the UD annotation for Mbyá Guaraní. A full set of annotation guidelines can be downloaded at [gpythomas.com/Mbya_Treebank_Guidelines.pdf](https://www.gpythomas.com/Mbya_Treebank_Guidelines.pdf) and will be incorporated into the UD Mbya_Guarani documentation in the next release. 

These guidelines are very much a work in progress. They are meant to adapt [Dooley's (2015)](https://www.sil.org/resources/archives/72343) analysis of Mbyá to the UD framework:

* Dooley, Robert A. (2015). Léxico Guarani, Dialeto Mbyá -- com informações úteis para o ensino médio, a aprendizagem e a pesquisa lingüística Brasília, Brazil: Summer Institute of Linguistics. 

## Tokenization and Word Segmentation

* In general, words are delimited by white spaces or punctuation, Whitespaces or punctuation may appear in some abbreviations or numeric expressions.

* In order to capture interactions between syntax and morphology, clause level nominalizers (including the suffix _-a_) and adverbializers (including the switch reference markers _vy_ and _ramo_) have been represented as syntactic words.

* Glottal stops are represented by the apostrophe, which can therefore be part of a word. Reduplicated units are joined to their host by a hyphen.

## Morphology

### Tags

* Mbyá uses all 17 Universal POS categories:

| Open class words | Closed class words | Other |
|------------------|--------------------|-------|
| ADJ              | ADP                | PUNCT |
| ADV              | AUX                | SYM   |
| INTJ             | CCONJ              | X     |
| NOUN             | DET                |       |
| PROPN            | NUM                |       |
| VERB             | PART               |       |
|                  | PRON               |       |
|                  | SCONJ              |       |

* The language specific tagset (XPOS) is mapped to universal POS categories as follows:

| 	XPOS 		| 	UPOS				| XPOSDescription								|
|---------------|-----------------------|-----------------------------------------------|
|	aspprt		|	PART				| aspect particle								|
|	coordconn	|	CCONJ/ADV			| coordinating conjunction						|
|	dem			|	ADV/DET/PRON		| demonstrative									|
|	discprt		|	PART				| discourse particle							|
|	focprt		|	PART				| focus particle								|
|	for			|	X					| foreign token (not code-switching or loan)	|
|	illocprt	|	PART				| illocutionary particle						|
|	inact		|	ADJ/ADV/NOUN/VERB	| intransitive verb: inactive					|
|	indfpro		|	PRON				| indefinite pronoun							|
|	interj		|	INTJ				| interjection									|
|	interrog	|	PRON				| interrogative pro-form						|
|	intermod	|	ADV					| interrogative modifier						|
|	interpron	|	PRON				| interrogative pronoun							|
|	intprt		|	PART				| interrogative particle						|
|	mod			|	ADJ/ADV				| modifier										|
|	modprt		|	PART				| modal particle								|
|	n			|	NOUN				| noun											|
|	n:pred		|	VERB				| nominal predicate								|
|	negprt		|	PART				| negative particle								|
|	nmlzer		|	SCONJ				| nominalizer									|
|	nprop		|	PROPN				| proper noun									|
|	num			|	NUM					| numeral										|
|	onom		|	INTJ				| onomatopeia									|
|	post		|	ADP/SCONJ			| postposition									|
|	pro			|	PRON				| personal pronoun								|
|	prov		|	VERB				| pro-verb										|
|	ptcp		|	ADJ/VERB			| participle									|
|	punct		|	PUNCT				| punctuation									|
|	qprt		|	PART				| quantificational particle						|
|	quant		|	ADV/DET/PRON		| quantifier									|
|	quantprt	|	PART				| quantificational particle						|
|	rel			|	SCONJ				| relativizer									|
|	subordconn	|	SCONJ				| subordinating conjunction						|
|	temprt		|	PART				| temporal particle								|
|	univpro		|	PRON				| universal pronoun								|
|	v			|	AUX/VERB			| verb											|
|	vd			|	VERB				| ditransitive verb								|
|	vd:a		|	VERB				| indirect transitive verb: active				|
|	vd:i		|	VERB				| indirect transitive verb: inactive			|
|	vi			|	ADJ/VERB/AUX		| intransitive verb								|
|	vi:a		|	ADJ/VERB			| intransitive verb: active						|
|	vpos		|	VERB				| postposed verb								|
|	vs			|	VERB				| serial verb									|
|	vt			|	VERB				| transitive verb								|

### Features

* Verbs are inflected for person, number and clusivity:

	* Person has three possible values: 1, 2, 3.
	* Person uses the layers subj and obj.
	* Number has two possible values: Sing and Plur.
	* Number uses the layer psor.
	* Clusivity has two possible values, In and Ex.
	* Clusivity uses the layers subj and obj.

* Verbs have a subcategorization feature Subcat with two possible values: Ditran(sitive), Int(ransitive), IntInd(irect) and Tran(sitive).

* Verbs have a form feature with five possible values: Fin(ite), Inf(inite), Part(iciple), Post(posed verb), Prov(erb), Ser(ial), Vnoun (verbal noun).

* Verbs have an optional mood feature with three possible values: Des(iderative), Ind(icative), Imp(erative).

* Verbs have an optional Polarity feature with one possible value, Neg.

* Nouns can be used as predicates without copula, and inflect for person, number and clusivity like inactive intransitive verbs. They have Person, Number and Clusitivity features.

* Pronouns have a PronType feature with seven possible values: Add, Dem, Ind, Int, Neg, Prs, Tot.

* The feature value PronType=Add has been added for additive pronouns that are unspecified for definiteness (e.g. _amboae_, 'another' or 'the other')

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Subjects are noun phrases without postpositions that are the sole cross-referenced argument of intransitive verbs, or the argument of transitive verbs that is cross-referenced with an active agreement marker.

* Objects are noun phrases without postpositions that are cross-referenced on transitive verbs with inactive agreement markers. They may be followed by a differential object marker.

* Postpositional noun phrases are considered oblique.

### Non-verbal Clauses

* Mbyá Guaraní is an omnipredicative language. Nouns and other non-verbal open word classes can be used predicatively without copula. In certain environments, non-verbal predicates are introduced by the copula _iko_.

### Language Specific Syntactic Relations

* There are 6 relation subtypes in UD Mbya_Guarani:

| Relation			|	Description																						|
|-------------------|---------------------------------------------------------------------------------------------------|
| advmod:sentcon	| Adverbial modifier used as sentence initial discourse connective									|
| dep:mod			| Modifier underspecified for the syntactic category of its head									|
| compound:svc		| Used for a variety of complex predicates, notably serial verb and postposed verb constructions	|
| dislocated:cleft	| Used for cleft constructions that lack a copula													|
| obl:sentcon		| Nominal modifier used as a sentence initial discourse connective									|
| parataxis:rep		| Used to relate a reported speech form to a verb of speech report analyzed as its head				|

---

## Treebanks

There are [2](../treebanks/Mbya_Guarani-comparison.html) Mbyá Guaraní treebanks:

  * [Mbya_Guarani-Dooley](../treebanks/gun_dooley/index.html)
  * [Mbya_Guarani-Thomas](../treebanks/gun_thomas/index.html)

