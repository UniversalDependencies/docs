---
layout: base
title:  'Statistics of expl:pass in UD_Portuguese-PetroGold'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PetroGold: Relations: `expl:pass`

This relation is a language-specific subtype of <tt><a href="pt_petrogold-dep-expl.html">expl</a></tt>.
There are also 2 other language-specific subtypes of `expl`: <tt><a href="pt_petrogold-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="pt_petrogold-dep-expl-pv.html">expl:pv</a></tt>.

793 nodes (0%) are attached to their parents as `expl:pass`.

612 instances of `expl:pass` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.00252206809584.

The following 1 pairs of parts of speech are connected with `expl:pass`: <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt> (793; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 expl:pass	color:blue
1	Acrescenta	acrescentar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Se=pass
2	se	se	PRON	_	PronType=Prs	1	expl:pass	_	_
3	a	a	ADP	_	_	4	case	_	_
4	isto	isto	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	1	obl:arg	_	SpaceAfter=No
5	,	,	PUNCT	_	_	1	punct	_	_
6	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	efeito	efeito	NOUN	_	Gender=Masc|Number=Sing	1	nsubj:pass	_	_
8	viscosificante	viscosificante	ADJ	_	Gender=Masc|Number=Sing	7	amod	_	_
9	em	em	ADP	_	_	10	case	_	_
10	água	água	NOUN	_	Gender=Fem|Number=Sing	7	nmod	_	_
11	doce	doce	ADJ	_	Gender=Fem|Number=Sing	10	amod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	1	punct	_	_

~~~


