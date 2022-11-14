---
layout: base
title:  'Statistics of flat:foreign in UD_Portuguese-PetroGold'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PetroGold: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="pt_petrogold-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="pt_petrogold-dep-flat-name.html">flat:name</a></tt>.

82 nodes (0%) are attached to their parents as `flat:foreign`.

82 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.20731707317073.

The following 2 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="pt_petrogold-pos-X.html">X</a></tt>-<tt><a href="pt_petrogold-pos-X.html">X</a></tt> (81; 99% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat:foreign	color:blue
1	Para	para	ADP	_	_	2	mark	_	_
2	resolver	resolver	VERB	_	VerbForm=Inf	6	advcl	_	_
3	estes	este	DET	_	Gender=Masc|Number=Plur|PronType=Dem	4	det	_	_
4	problemas	problema	NOUN	_	Gender=Masc|Number=Plur	2	obj	_	_
5	foram	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|VerbForm=Fin	6	aux:pass	_	_
6	desenvolvidos	desenvolver	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	_
7	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
8	chamados	chamar	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	9	acl	_	_
9	fluidos	fluido	NOUN	_	Gender=Masc|Number=Plur	6	nsubj:pass	_	_
10	drill	drill	X	_	_	9	nmod	_	_
11	n	n	X	_	_	10	flat:foreign	_	_
12	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat:foreign	color:blue
1	Para	para	ADP	_	_	2	mark	_	_
2	verificar	verificar	VERB	_	VerbForm=Inf	5	advcl	_	_
3	tal	tal	DET	_	Gender=Fem|Number=Sing|PronType=Ind	4	det	_	_
4	observação	observação	NOUN	_	Gender=Fem|Number=Sing	2	obj	_	_
5	plotou	plotar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Se=pass
6	se	se	PRON	_	_	5	expl:pass	_	_
7	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	gráfico	gráfico	NOUN	_	Gender=Masc|Number=Sing	5	nsubj:pass	_	_
9	log(	log(	X	_	_	8	flat:foreign	_	SpaceAfter=No
10	∆P	∆p	NOUN	_	Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
11	)	)	PUNCT	_	_	10	punct	_	_
12	vs	vs	ADP	_	_	13	case	_	_
13	log(t	log(t	NOUN	_	Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
14	)	)	PUNCT	_	_	13	punct	_	SpaceAfter=No
15	,	,	PUNCT	_	_	16	punct	_	_
16	figura	figura	NOUN	_	Gender=Fem|Number=Sing	5	parataxis	_	_
17	4.29	4.29	NUM	_	NumType=Card	16	nummod	_	SpaceAfter=No
18	.	.	PUNCT	_	_	5	punct	_	_

~~~


