---
layout: base
title:  'Statistics of nsubj:outer in UD_Portuguese-PortJur'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PortJur: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="pt_portjur-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="pt_portjur-dep-nsubj-pass.html">nsubj:pass</a></tt>.

2 nodes (0%) are attached to their parents as `nsubj:outer`.

2 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 16.

The following 1 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 2 nsubj:outer	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	verdade	verdade	NOUN	_	Gender=Fem|Number=Sing	20	nsubj:outer	_	_
3	(	(	PUNCT	_	_	4	punct	_	SpaceAfter=No
4	...	...	PUNCT	_	_	2	punct	_	SpaceAfter=No
5	)	)	PUNCT	_	_	4	punct	_	_
6	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	_
7	que	que	SCONJ	_	_	20	mark	_	_
8	sem	sem	ADP	_	_	10	case	_	_
9	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	carona	carona	NOUN	_	Gender=Fem|Number=Sing	20	obl	_	_
11	atribuída	atribuir	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	10	acl	_	_
12	a	a	ADP	_	_	14	case	_	_
13	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	agravante	agravante	NOUN	_	Number=Sing	11	obl	_	_
15	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	16	det	_	_
16	eleitores	eleitor	NOUN	_	Gender=Masc|Number=Plur	20	nsubj	_	_
17	contemplados	contemplar	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	16	acl	_	_
18	teriam	ter	AUX	_	Mood=Cnd|Number=Plur|Person=3|VerbForm=Fin	20	aux	_	_
19	simplesmente	simplesmente	ADV	_	_	20	advmod	_	_
20	deixado	deixar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
21	de	de	ADP	_	_	22	mark	_	_
22	votar	votar	VERB	_	VerbForm=Inf	20	xcomp	_	SpaceAfter=No
23	,	,	PUNCT	_	_	25	punct	_	_
24	embora	embora	SCONJ	_	_	25	mark	_	_
25	desejassem	desejar	VERB	_	Mood=Sub|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	20	advcl	_	_
26	votar	votar	VERB	_	VerbForm=Inf	25	xcomp	_	_
27	em	em	ADP	_	_	29	case	_	_
28	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	29	det	_	_
29	candidato	candidato	NOUN	_	Gender=Masc|Number=Sing	26	obl	_	_
30	ora	ora	ADV	_	_	31	advmod	_	_
31	cassado	cassar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	29	acl	_	_
32	(	(	PUNCT	_	_	33	punct	_	SpaceAfter=No
33	ID	ID	PROPN	_	_	20	parataxis	_	_
34	157891775	157891775	NUM	_	NumType=Card	33	nmod	_	SpaceAfter=No
35	,	,	PUNCT	_	_	36	punct	_	_
36	p.	página	NOUN	_	Abbr=Yes|Gender=Fem|Number=Sing	33	nmod:spec	_	_
37	6	6	NUM	_	NumType=Card	36	nmod	_	SpaceAfter=No
38	)	)	PUNCT	_	_	33	punct	_	SpaceAfter=No
39	.	.	PUNCT	_	_	20	punct	_	_

~~~


