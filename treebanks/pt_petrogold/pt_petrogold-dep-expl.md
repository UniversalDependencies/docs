---
layout: base
title:  'Statistics of expl in UD_Portuguese-PetroGold'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PetroGold: Relations: `expl`

This relation is universal.
There are 3 language-specific subtypes of `expl`: <tt><a href="pt_petrogold-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="pt_petrogold-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="pt_petrogold-dep-expl-pv.html">expl:pv</a></tt>.

2 nodes (0%) are attached to their parents as `expl`.

2 instances of `expl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `expl`: <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 expl	color:blue
1	Mecanismo	mecanismo	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
2	este	este	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	1	expl	_	_
3	que	que	PRON	_	Gender=Masc|Number=Sing|PronType=Rel	4	nsubj	_	_
4	pode	poder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	acl:relcl	_	_
5	ter	ter	AUX	_	VerbForm=Inf	7	aux	_	_
6	sido	ser	AUX	_	VerbForm=Part	7	aux:pass	_	_
7	influenciado	influenciar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	4	xcomp	_	_
8	por	por	ADP	_	_	10	case	_	_
9	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	diferenças	diferença	NOUN	_	Gender=Fem|Number=Plur	7	obl:agent	_	_
11	em	em	ADP	_	_	13	case	_	_
12	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	13	det	_	_
13	curvas	curva	NOUN	_	Gender=Fem|Number=Plur	10	nmod	_	_
14	reológicas	reológico	ADJ	_	Gender=Fem|Number=Plur	13	amod	_	_
15	de	de	ADP	_	_	17	case	_	_
16	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	17	det	_	_
17	fluidos	fluido	NOUN	_	Gender=Masc|Number=Plur	13	nmod	_	SpaceAfter=No
18	.	.	PUNCT	_	_	1	punct	_	_

~~~


