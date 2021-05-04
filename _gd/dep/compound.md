---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

The `compound` relation is presently used for three constructions.

* Reduplicated adjectives.
* _deug_ 'ten' at the end of a numeric phrase (numbers to the left of the noun they are counting are `nummod`.

Currently noun--noun compounds are annotated with `nmod`.

### Examples
#### Reduplicated adjectives and adverbs
The motivation here is that they can appear both attributively and predicatively and the use is to intensify the meaning.

Attributive:
_lèabagan mòra <b>mòra</b> an fheadhainn ud_ 'very big flounders those ones' (c10_161)
~~~ conllu
1	lèabagan	lèabag	NOUN	Ncpfn	Case=Nom|Gender=Fem|Number=Plur	0	root	_	_
2	mòra	mòr	ADJ	Aq-pfn	Case=Nom|Gender=Fem|Number=Plur	1	amod	_	_
3	mòra	mòr	ADJ	Aq-pfn	Case=Nom|Gender=Fem|Number=Plur	2	compound	_	_
4	an	an	DET	Tdsf	Gender=Fem|Number=Sing	5	det	_	_
5	fheadhainn	feadhainn	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	_
6	ud	ud	DET	Dd	_	5	det	_	_

~~~

_tràigh mhòr <b>mhòr</b> <b>mhòr</b>_ 'a very very low tide' (c06_082a)
~~~ conllu
1	tràigh	tràigh	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	mhòr	mòr	ADJ	Aq-sfn	Case=Nom|Gender=Fem|Number=Sing	1	amod	_	_
3	mhòr	mòr	ADJ	Aq-sfn	Case=Nom|Gender=Fem|Number=Sing	2	compound	_	_
4	mhòr	mòr	ADJ	Aq-sfn	Case=Nom|Gender=Fem|Number=Sing	2	compound	_	__

~~~

Predicative:
_cha robh e ach beag <b>beag</b>_ 'it was nothing but really small' (c10_165)
~~~ conllu
1	cha	cha	PART	Qn	PartType=Cmpl|Polarity=Neg	2	mark:prt	_	_
2	robh	bi	VERB	V-s--d	Tense=Past	0	root	_	_
3	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
4	ach	ach	ADP	Sp	_	5	case	_	_
5	beag	beag	ADJ	Ap	_	2	xcomp:pred	_	_
6	beag	beag	ADJ	Ap	_	5	compound	_	_

~~~

#### _deug_
_an naodhamh latha <b>deug</b>_  'the nineteenth day' (fp06_001)

~~~ conllu
1	an	an	DET	Tdsm	Gender=Masc|Number=Sing	3	det	_	_
2	naodhamh	naodhamh	NUM	Mo	_	3	nummod	_	_
3	latha	latha	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
4	deug	deug	NUM	Mc	_	3	compound	_	_

~~~

