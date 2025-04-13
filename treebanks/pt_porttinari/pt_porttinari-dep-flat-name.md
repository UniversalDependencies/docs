---
layout: base
title:  'Statistics of flat:name in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="pt_porttinari-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="pt_porttinari-dep-flat-foreign.html">flat:foreign</a></tt>.

3356 nodes (2%) are attached to their parents as `flat:name`.

3356 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5834326579261.

The following 2 pairs of parts of speech are connected with `flat:name`: <tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt> (3355; 100% instances), <tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat:name	color:blue
1	Outro	outro	DET	_	Gender=Masc|Number=Sing|PronType=Ind	2	det	2:det	_
2	lugar	lugar	NOUN	_	Gender=Masc|Number=Sing	6	nsubj	6:nsubj	_
3	legal	legal	ADJ	_	Number=Sing	2	amod	2:amod	_
4	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	6:cop	_
5	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	6:det	_
6	Stunt	Stunt	PROPN	_	_	0	root	0:root	_
7	Burger	Burger	PROPN	_	_	6	flat:name	6:flat:name	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	6:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	Era	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	cop	3:cop	_
2	"	"	PUNCT	_	_	3	punct	3:punct	SpaceAfter=No
3	Histórias	Histórias	PROPN	_	_	0	root	0:root|13:obl:em	_
4	que	que	PRON	_	PronType=Rel	3	flat:name	3:flat:name	Proper=Yes
5	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	6:det	Proper=Yes
6	Povo	Povo	PROPN	_	_	3	flat:name	3:flat:name	_
7	Conta	Conta	PROPN	_	_	3	flat:name	3:flat:name	SpaceAfter=No
8	"	"	PUNCT	_	_	3	punct	3:punct	SpaceAfter=No
9	,	,	PUNCT	_	_	13	punct	13:punct	_
10	em	em	ADP	_	_	11	case	11:case	_
11	que	que	PRON	_	PronType=Rel	13	obl	3:ref	_
12	ouvintes	ouvinte	NOUN	_	Number=Plur	13	nsubj	13:nsubj	_
13	mandavam	mandar	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	3	acl:relcl	3:acl:relcl	_
14	-	-	PUNCT	_	_	18	punct	18:punct	SpaceAfter=No
15	para	para	ADP	_	_	18	mark	18:mark	_
16	Silvio	Silvio	PROPN	_	_	18	nsubj	18:nsubj	_
17	Santos	Santos	PROPN	_	_	16	flat:name	16:flat:name	_
18	ler	ler	VERB	_	VerbForm=Inf	13	advcl	13:advcl:para	_
19	em	em	ADP	_	_	21	case	21:case	_
20	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	21:det	_
21	ar	ar	NOUN	_	Gender=Masc|Number=Sing	18	obl	18:obl:em	SpaceAfter=No
22	-	-	PUNCT	_	_	18	punct	18:punct	_
23	casos	caso	NOUN	_	Gender=Masc|Number=Plur	13	obj	13:obj	_
24	escabrosos	escabroso	ADJ	_	Gender=Masc|Number=Plur	23	amod	23:amod	_
25	envolvendo	envolver	VERB	_	VerbForm=Ger	23	acl	23:acl	_
26	fantasmas	fantasma	NOUN	_	Gender=Masc|Number=Plur	25	obj	25:obj	SpaceAfter=No
27	,	,	PUNCT	_	_	28	punct	28:punct	_
28	ETs	ETs	PROPN	_	_	26	conj	25:obj|26:conj:e	_
29	e	e	CCONJ	_	_	31	cc	31:cc	_
30	toda	todo	DET	_	Gender=Fem|Number=Sing|PronType=Ind	31	det	31:det	_
31	sorte	sorte	NOUN	_	Gender=Fem|Number=Sing	26	conj	25:obj|26:conj:e	_
32	de	de	ADP	_	_	33	case	33:case	_
33	aparições	aparição	NOUN	_	Gender=Fem|Number=Plur	31	nmod	31:nmod:de	_
34	sobrenaturais	sobrenatural	ADJ	_	Number=Plur	33	amod	33:amod	SpaceAfter=No
35	.	.	PUNCT	_	_	3	punct	3:punct	SpaceAfter=No

~~~


