---
layout: base
title:  'Syntax'
udver: '2'
---

# Specific constructions

## Impersonal verbs

The small class of mostly Greek origin impersonal verbs takes subject clauses, such as ⲉⲝⲉⲥⲧⲓ 'it is appropriate', which points from main verb to subordinate verb with `csubj`:

~~~ sdparse
ⲟⲩⲕ ⲉⲝⲉⲥⲧⲓ/VERB ⲉ ⲁⲁ/VERB ϥ \n it is not appropriate to do it

csubj(ⲉⲝⲉⲥⲧⲓ, ⲁⲁ)
~~~

## Non-coordinating Greek conjunctions and particles

Greek conjunctions and particles that are non-coordinating (i.e. not meaning ‘and/or’) are labeled as `advmod` to their associated predicate, as in the following example:

~~~ sdparse
ⲙⲏ ⲁⲣⲁ ⲉ ⲓ ⲟⲩⲏϩ ⲟⲛ ϩⲓϫⲛ ⲧ ⲙⲏⲧⲉ ⲛ ϫⲱ ⲕ \n After all do I still sit upon the middle of your head?

advmod(ⲟⲩⲏϩ, ⲁⲣⲁ)
~~~

## Inverted modifying construction - ⲛⲟϭ ⲛϭⲟⲙ

Inverted modifiers of the type ⲛⲟϭ ⲛϭⲟⲙ ‘great power’ (lit. a ‘great of a power’), are analyzed in purely syntactic terms, such that the semantic modifier (ⲛⲟϭ, ⲕⲟⲩⲓ etc.) is the head, as shown below. The initial article also attaches to the syntactic head. The reason for this is primarily to allow for better parser performance, since making the second noun the head would be a very unusual exception. To find this construction we can look for the set of lexemes appearing in this configuration, most often ⲛⲟϭ and ⲕⲟⲩⲓ.

~~~ sdparse
ⲡⲓ ⲛⲟϭ ⲛ ⲃⲁⲣⲟⲥ \n this great burden

det(ⲛⲟϭ, ⲡⲓ)
nmod(ⲛⲟϭ, ⲃⲁⲣⲟⲥ)
case(ⲃⲁⲣⲟⲥ, ⲛ)
~~~

## Independent possessive pronoun construction – ⲡⲁ/ⲧⲁ/ⲛⲁ + noun phrase

The independent possessive pronoun ‘that, which is of X, belongs to X’ is analyzed as the head of the phrase, and the possessor is attached as nmod to this:

~~~ sdparse
ⲛⲁ ⲡⲉ ⲭⲣⲓⲥⲧⲟⲥ \n that which is Christ's

nmod(ⲛⲁ, ⲭⲣⲓⲥⲧⲟⲥ)
det(ⲭⲣⲓⲥⲧⲟⲥ, ⲡⲉ)
~~~

## Rather than - the preposition ⲉϩⲟⲩⲉ

The word ⲉϩⲟⲩⲉ ‘rather than’ is treated as a preposition modifying the nominal it is contrasted with:

~~~ sdparse
ⲁ ⲧⲉⲧⲛ ⲥⲱⲧⲡ ⲛⲏ ⲧⲛ ⲙ ⲡ ⲙⲟⲩ · ⲉϩⲟⲩⲉ/ADP ⲡ ⲱⲛϩ \n you have chosen for yourselves death, rather than life

nmod(ⲙⲟⲩ, ⲱⲛϩ)
case(ⲱⲛϩ,ⲉϩⲟⲩⲉ)
~~~

In cases having a double preposition, ⲉϩⲟⲩⲉ ⲉ, both are attached as `case` to the alternative:

~~~ sdparse
ⲁ ⲧⲉⲧⲛ ⲙⲉⲣⲉ ⲡ ⲕⲁⲕⲉ/N ⲉϩⲟⲩⲉ/ADP ⲉ/ADP ⲡ ⲟⲩⲟⲉⲓⲛ/N \n you have loved darkness, rather than light

nmod(ⲕⲁⲕⲉ, ⲟⲩⲟⲉⲓⲛ)
case(ⲟⲩⲟⲉⲓⲛ,ⲉϩⲟⲩⲉ)
case(ⲟⲩⲟⲉⲓⲛ,ⲉ)
~~~

## Multiple ACONJ chaining rule- ⲛ̄ⲧⲉ-, ⲛ̄= 

In constructions with multiple auxiliary conjunctives (ACONJ), link the clauses together in a chain rather than linking each clause seperately from the root.

Example from Corinthians 1:10:

~~~ sdparse
ϫⲱ ⲙ ⲡⲓ ϣⲁϫⲉ ... ⲛⲧⲉ/ACONJ ⲧⲙ ⲡⲱⲣϫ ϣⲱⲡⲉ ⲛϩⲏⲧ ⲧⲏⲩⲧⲛ. ⲛ/ACONJ ⲧⲉⲧⲛ ϣⲱⲡⲉ.. \n ...all speak the same thing and that there be no divisions among you

advcl(ϫⲱ, ϣⲱⲡⲉ)
aux(ϣⲱⲡⲉ,ⲛⲧⲉ)
advcl(ϣⲱⲡⲉ, ϣⲱⲡⲉ..)
aux(ϣⲱⲡⲉ..,ⲛ)

~~~

## Clauses and fragments with ϩⲱⲥ

The Greek conjunction ϩⲱⲥ introduces adverbial clauses which can be analyzed like any `advcl`:

~~~ sdparse
ϣϣⲉ ⲉⲣⲟ ⲛ ⲉ ⲙⲉⲉⲩⲉ ⲛ ⲧⲉⲓ ϩⲉ ϩⲱⲥ/SCONJ ⲉ ⲛ ⲛⲁ ϯⲗⲟⲅⲟⲥ/V ⲙ ⲡ ⲛⲟⲩⲧⲉ ⲙ ⲙⲏⲛⲉ \n it is fitting for us to think in this way, as if we will report to God daily

advcl(ⲙⲉⲉⲩⲉ,ϯⲗⲟⲅⲟⲥ)
mark(ϯⲗⲟⲅⲟⲥ,ϩⲱⲥ)
~~~

However, ϩⲱⲥ is also used sometimes to introduce an NP, similarly to native Coptic prepositions, despite the fact that it does not behave like a preposition in other respects (e.g. not tightly bound to the following noun). For consistency with the normal adverbial clause case, we annotate these as elliptical adverbial clauses, retaining the label `advcl` for the lexical item and `mark` for ϩⲱⲥ:

~~~ sdparse
ⲛⲉⲕ/DET ⲙⲏⲙⲟⲟⲩ/N ⲉⲧ/SCONJ ϩⲛ/ADP ϩⲉⲛ/DET ϣⲟϣⲟⲩ/N ϩⲱⲥ/SCONJ ⲏⲣⲡ/N \n your urine, which is in jars as wine [is]

acl(ⲙⲏⲙⲟⲟⲩ,ϣⲟϣⲟⲩ)
advcl(ϣⲟϣⲟⲩ,ⲏⲣⲡ)
mark(ⲏⲣⲡ,ϩⲱⲥ)
~~~

## ⲁϩⲣⲟ as the source of a clausal complement (ccomp)

The interrogative pronoun ⲁϩⲣⲟ 'why' can be the source of a clausal complement with `ccomp` pointing to the subordinate clause predicate

Example from Corinthians 4:7:

~~~ sdparse
ⲁϩⲣⲟ/VBD ⲕ/PPERS ⲕ/PPERS ϣⲟⲩϣⲟⲩ/V ⲙⲙⲟ/PREP ⲕ/PPERO ϩⲱⲥ/CONJ ⲉ/CFOC ⲙⲡ/ANEGPST ⲕ/PPERS ϫⲓ/V \n why do you boast as if you had not received it?

ccomp(ⲁϩⲣⲟ, ϣⲟⲩϣⲟⲩ)
advcl(ϣⲟⲩϣⲟⲩ, ϫⲓ)
nsubj(ⲁϩⲣⲟ,ⲕ)

~~~

## Constructions with ⲉⲓⲥ

The presentative particle ⲉⲓⲥ, sometimes translated 'lo, behold!' appears in multiple Coptic constructions. All of these are analyzed with ⲉⲓⲥ as an adverbial element, perhaps best translated etymologically as 'already' for the sake of these analyses, or as 'here' (though it is not a locative predicate). In line with the lexicocentric approach in UD, it is always analyzed as a dependent, rather than an existential head (unlike ⲟⲩⲛ/ⲙⲛ, which can be roots in existential constructions).

### Presentative

With a plain noun, ⲉⲓⲥ 'behold' can also be thought of as a weak 'already', i.e. 'it is (already) X' or 'an X there'. In this construction, the presented noun can be the local root:

ⲉⲓⲥ/PART ⲟⲩ/DET ⲥϩⲓⲙⲉ/NOUN ⲉ/SCONJ ⲥ/PRON ⲛⲕⲟⲧⲕ/VERB ϩⲁⲣⲁⲧ/ADP ϥ/PRON \n Behold, a woman was sleeping beneath him

~~~ sdparse

advmod(ⲥϩⲓⲙⲉ,ⲉⲓⲥ)
acl(ⲥϩⲓⲙⲉ,ⲛⲕⲟⲧⲕ)

~~~

This item is interchangeable with the two-token fixed expression ⲉⲓⲥ ϩⲏⲏⲧⲉ (`advmod`+`fixed`).

### Auxiliary-like presentative

This construction is similar to presentatives but occurs with verbs, similarly to existential ⲟⲩⲛ, but is not limited to indefinite subjects and is still analyzable as adverbial and subordinate:

~~~ conllu
# A multitude was sitting around him, and they told him, 'Behold, your mother, your brothers, and your sisters are outside looking for you.' (or: "your mother, your brothers and your sisters are already outside/here they are outside, etc.")
1	ⲁⲩⲱ	ⲁⲩⲱ	CCONJ	CONJ	_	4	cc	_	_
2	ⲛⲉ	ⲛⲉⲣⲉ	AUX	CPRET	_	4	aux	_	_
3	ϥ	ⲛⲧⲟϥ	PRON	PPERS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
4	ϩⲙⲟⲟⲥ	ϩⲙⲟⲟⲥ	VERB	V	VerbForm=Fin	0	root	_	_
5	ϩⲙ	ϩⲛ	ADP	PREP	_	7	case	_	_
6	ⲡⲉϥ	ⲡⲉϥ	DET	PPOS	Definite=Def|Gender=Masc|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	7	det	_	_
7	ⲕⲱⲧⲉ	ⲕⲱⲧⲉ	VERB	V	VerbForm=Fin	4	obl	_	_
8	ⲛϭⲓ	ⲛϭⲓ	PART	PTC	_	10	case	_	_
9	ⲟⲩ	ⲟⲩ	DET	ART	Definite=Ind|Number=Sing|PronType=Art	10	det	_	_
10	ⲙⲏⲏϣⲉ	ⲙⲏⲏϣⲉ	NOUN	N	_	4	dislocated	_	_
11	ⲡⲉϫⲁ	ⲡⲉϫⲉ	VERB	VBD	VerbForm=Fin	4	parataxis	_	_
12	ⲩ	ⲛⲧⲟⲟⲩ	PRON	PPERS	Definite=Def|Number=Plur|Person=3|PronType=Prs	11	nsubj	_	_
13	ⲇⲉ	ⲇⲉ	PART	PTC	_	11	advmod	_	_
14	ⲛⲁ	ⲛⲁ	ADP	PREP	_	15	case	_	_
15	ⲩ	ⲛⲧⲟⲟⲩ	PRON	PPERO	Definite=Def|Number=Plur|Person=3|PronType=Prs	11	obl	_	_
16	ϫⲉ	ϫⲉ	CCONJ	CONJ	_	24	mark	_	_
17	ⲉⲓⲥ	ⲉⲓⲥ	PART	PTC	_	24	advmod	_	_
18	ⲧⲉⲕ	ⲡⲉⲕ	DET	PPOS	Definite=Def|Gender=Fem|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	19	det	_	_
19	ⲙⲁⲁⲩ	ⲙⲁⲁⲩ	NOUN	N	_	24	dislocated	_	_
20	ⲙⲛ	ⲙⲛ	ADP	PREP	_	22	cc	_	_
21	ⲛⲉⲕ	ⲡⲉⲕ	DET	PPOS	Definite=Def|Gender[psor]=Masc|Number=Plur|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	22	det	_	_
22	ⲥⲛⲏⲩ	ⲥⲟⲛ	NOUN	N	_	19	conj	_	_
23	ⲥⲉ	ⲛⲧⲟⲟⲩ	PRON	PPERS	Definite=Def|Number=Plur|Person=3|PronType=Prs	24	nsubj	_	_
24	ⲕⲱⲧⲉ	ⲕⲱⲧⲉ	VERB	V	VerbForm=Fin	11	ccomp	_	_
25	ⲛⲥⲱ	ⲛⲥⲁ	ADP	PREP	_	26	case	_	_
26	ⲕ	ⲛⲧⲟⲕ	PRON	PPERO	Definite=Def|Gender=Masc|Number=Sing|Person=2|PronType=Prs	24	obl	_	_
27	ϩⲓⲃⲟⲗ	ϩⲓⲃⲟⲗ	ADV	ADV	_	24	advmod	_	_
~~~

### Temporal

This structure often appears with time expressions. Since ⲉⲓⲥ is not prepositional (incompatible with pronouns, appears with clauses), the temporal expression modified by ⲉⲓⲥ is considered an adverbial clause, and ⲉⲓⲥ is an adverb. It is similar to constructions in other languages expressing 'it's been (X time) that...', and we take the time expression to be the head of the clause, which is subordindated to the main predicate for which a time span is given:

~~~ conllu
# Analysis: "And a woman that blood flowed from her, it's already been 12 years" (head: flow; modifier: it's already been 12 years)

1	ⲁⲩⲱ	ⲁⲩⲱ	CCONJ	CONJ	_	3	cc	_	_
2	ⲟⲩ	ⲟⲩ	DET	ART	Definite=Ind|Number=Sing|PronType=Art	3	det	_	_
3	ⲥϩⲓⲙⲉ	ⲥϩⲓⲙⲉ	NOUN	N	_	0	root	_	_
4	ⲉⲣⲉ	ⲉⲣⲉ	SCONJ	CREL	_	7	mark	_	_
5	ⲡⲉ	ⲡ	DET	ART	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	ⲥⲛⲟϥ	ⲥⲛⲟϥ	NOUN	N	_	7	nsubj	_	_
7	ϣⲟⲩⲟ	ϣⲟⲩⲟ	VERB	V	VerbForm=Fin	3	acl	_	_
8	ⲙⲙⲟ	ⲛ	ADP	PREP	_	9	case	_	_
9	ⲥ	ⲛⲧⲟⲥ	PRON	PPERO	Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	obl	_	_
10	ⲉⲓⲥ	ⲉⲓⲥ	PART	PTC	_	13	advmod	_	_
11	ⲙⲛⲧⲥⲛⲟⲟⲩⲥ	ⲙⲛⲧⲥⲛⲟⲟⲩⲥ	NUM	NUM	NumType=Card	13	nummod	_	Morphs=ⲙⲛⲧ-ⲥⲛⲟⲟⲩⲥ
12	ⲛ	ⲛ	ADP	PREP	_	13	case	_	Orig=ⲣ
13	ⲣⲟⲙⲡⲉ	ⲣⲟⲙⲡⲉ	NOUN	N	_	7	advcl	_	_
14	.	.	PUNCT	PUNCT	_	3	punct	_	_
~~~

## ⲙⲉϣⲉ ⲛⲓⲙ 'someone, you don't know who'

The rare irregular fossilized negative verb ⲙⲉϣⲉ can appear in a construction ⲙⲉϣⲉ ⲛⲓⲙ meaning 'someone', but literally composed of '(you) don't know who'. The UD analysis of this construction treats the interrogative ⲛⲓⲙ as `obj`, meaning that the entire complex is treated as clausal. This can be a subject clause:

~~~ sdparse
ⲙⲉϣⲉ/VERB ⲛⲓⲙ/PRON ⲛⲏⲩ/VERB ϣⲁⲣⲟ/ADP ⲕ/PRON \n someone is coming to you (lit. 'don't-know-who is coming to you')

csubj(ⲛⲏⲩ,ⲙⲉϣⲉ)
obj(ⲙⲉϣⲉ,ⲛⲓⲙ)

~~~

The reason for not treating this as a fixed expression is that the object can have dependents, as in the following example (if the construction is oblique it can only be analyzed as `advcl`):

~~~ sdparse
ⲃⲱⲕ/VERB ϣⲁ/ADP ⲙⲉϣⲉ/VERB ⲛⲓⲙ/PRON ⲛ/ADP ⲁⲣⲭⲓⲙⲁⲛⲇⲣⲓⲧⲏⲥ/NOUN \n go to some archmandrite

advcl(ⲃⲱⲕ,ⲙⲉϣⲉ)
mark(ⲙⲉϣⲉ,ϣⲁ)
obj(ⲙⲉϣⲉ,ⲛⲓⲙ)
nmod(ⲛⲓⲙ,ⲁⲣⲭⲓⲙⲁⲛⲇⲣⲓⲧⲏⲥ)
case(ⲁⲣⲭⲓⲙⲁⲛⲇⲣⲓⲧⲏⲥ,ⲛ)
~~~
