---
layout: base
title:  'Mbya Guarani UD'
udver: '2'
---

# UD for Mbya Guarani

This is a brief overview of the UD annotation for Mbyá Guaraní. A full set of annotation guidelines can be downloaded at gpythomas.com/Mbya_Treebank_Guidelines.pdf and will be incorporated into the UD Mbya_Guarani documentation in the next release. 

These guidelines are an attempt at adapting [Dooley's (2015)](https://www.sil.org/resources/archives/72343) analysis of Mbyá to the UD framework:

	Dooley, Robert A. (2015). Léxico Guarani, Dialeto Mbyá -- com informações úteis para o ensino médio, a aprendizagem e a pesquisa lingüística Brasília, Brazil: Summer Institute of Linguistics. 

## Tokenization and Word Segmentation

* Words are delimited by whitespace character.

* Glottal stops are commonly represented by the apostrophe, which can therefore be part of a word. Reduplicated units are joined to their host by a hyphen.

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

| 	XPOS 		| 	UPOS	| XPOSDescription								|
|---------------|-----------|-----------------------------------------------|
| 	adj			| 	ADJ		| adjective										|	 
|	aspprt		|	PART	| aspect particle								|
|	coordconn	|	CCONJ	| coordinating conjunction						|
|	dem			|	PRON	| demonstrative pronoun							|
|	demadv		|	ADV		| demonstrative adverb							|
|	det			|	DET		| determiner									|
|	discprt		|	PART	| discourse particle							|
|	focprt		|	PART	| focus particle								|
|	for			|	X		| foreign token (not code-switching or loan)	|
|	illocprt	|	PART	| illocutionary particle						|
|	indfpro		|	PRON	| indefinite pronoun							|
|	interj		|	INTJ	| interjection									|
|	interrog	|	PRON	| interrogative pro-form						|
|	interadv	|	ADV		| interrogative adverb							|
|	interpron	|	PRON	| interrogative pronoun							|
|	intprt		|	PART	| interrogative particle						|
|	modprt		|	PART	| modal particle								|
|	negpro		|	PRON	| negative pronoun								|
|	negprt		|	PART	| negative particle								|
|	nmlzer		|	SCONJ	| nominalizer									|
|	n			|	NOUN	| noun											|
|	nprop		|	PROPN	| proper noun									|
|	num			|	NUM		| numeral										|
|	onom		|	INTJ	| onomatopeia									|
|	ptcp		|	VERB	| participle									|
|	prt			|	PART	| particle										|
|	post		|	ADP		| postposition									|
|	pro-form	|	PRON	| pro-form										|
|	pro			|	PRON	| personal pronoun								|
|	prov		|	VERB	| pro-verb										|
|	qprt		|	PART	| quantificational particle						|
|	quant		|	DET		| quantifier									|
|	quantprt	|	PART	| quantificational particle						|
|	rel			|	SCONJ	| relativizer									|
|	subordconn	|	SCONJ	| subordinating conjunction						|
|	tensprt		|	PART	| tense particle								|
|	univpro		|	PRON	| universal pronoun								|
|	v			|	VERB	| verb											|
|	vi			|	VERB	| intransitive verb								|
|	vi:a		|	VERB	| intransitive verb: active						|
|	vi:i		|	VERB	| intransitive verb: inactive					|
|	vt			|	VERB	| transitive verb								|
|	vd			|	VERB	| ditransitive verb: active						|
|	vd:a		|	VERB	| indirect transitive verb: active				|
|	vd:i		|	VERB	| indirect transitive verb: inactive			|
|	vpos		|	VERB	| postposed verb								|
|	vs			|	VERB	| serial verb									|
|	punct		|	PUNCT	| punctuation									|

### Features

* Verbs are inflected for person, number and clusivity:

	* Person has four possible values: 1, 2, 3, and 12. 
	* Person=12 indicates portmanteau inflection, which cross-reference a first person subject and a second person object.
	* Number has two possible values: Sing and Plur.
	* Clusivity has two possible values, In and Ex.

* Verbs have a subcategorization feature Subcat with two possible values: Int and Tran.

* Verbs have an optional form feature with four possible values: Part(iciple), Ser(ial), Post(posed verb), Prov(erb)

* Verbs have an optional Polarity feature with one possible value, Neg.

* Nouns can be used as predicates without copula, and inflect for person, number and clusivity like inactive intransitive verbs. They have Person, Number and Clusitivity features.

* Pronouns have a PronType feature with six possible values: Dem, Ind, Int, Neg, Prs, Tot.

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Subjects are noun phrases without postpositions that are the sole cross-referenced argument of intransitive verbs, or the argument of transitive verbs that is cross-referenced with active agreement markers.

* Objects are noun phrases without postpositions that are cross-referenced on transitive verbs with inactive agreement markers. They may be followed by a differential object marker.

* Postpositional noun phrases are considered oblique.

### Non-verbal Clauses

* Mbyá Guaraní is an omnipredicative language. Nouns and other non-verbal open word classes can be used predicatively without copula.

### Language Specific Syntactic Relations

* There are 6 relation subtypes in UD Mbya_Guarani:

| Relation			|	Description																						|
|-------------------|---------------------------------------------------------------------------------------------------|
| advmod:sentcon	| Adverbial modifier used as sentence initial discourse connective									|
| compound:svc		| Used for a variety of complex predicates, notably serial verb and postposed verb constructions	|
| discourse:q		| Used for question particles, whose head can be verbal or nominal									|
| dislocated:cleft	| Used for cleft constructions that lack a copula													|
| obl:sentcon		| Nominal modifier used as a sentence initial discourse connective									|
| parataxis:rep		| Used to relate a reported speech form to a verb of speech report									|

---

## Treebanks

There are [2](../treebanks/Mbya_Guarani-comparison.html) LANGUAGE UD treebanks:

  * [Mbya_Guarani-Dooley](../treebanks/gun_dooley/index.html)
  * [Mbya_Guarani-Thomas](../treebanks/gun_thomas/index.html)

