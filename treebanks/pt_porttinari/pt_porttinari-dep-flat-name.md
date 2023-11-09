---
layout: base
title:  'Statistics of flat:name in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="pt_porttinari-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="pt_porttinari-dep-flat-foreign.html">flat:foreign</a></tt>.

3351 nodes (2%) are attached to their parents as `flat:name`.

3351 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.58131900925097.

The following 2 pairs of parts of speech are connected with `flat:name`: <tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt> (3350; 100% instances), <tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat:name	color:blue
1	Outro	outro	DET	_	Gender=Masc|Number=Sing|PronType=Ind	2	det	_	_
2	lugar	lugar	NOUN	_	Gender=Masc|Number=Sing	6	nsubj	_	_
3	legal	legal	ADJ	_	Number=Sing	2	amod	_	_
4	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
5	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Stunt	Stunt	PROPN	_	_	0	root	_	_
7	Burger	Burger	PROPN	_	_	6	flat:name	_	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	Era	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	cop	_	_
2	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
3	Histórias	Histórias	PROPN	_	_	0	root	_	_
4	que	que	PRON	_	PronType=Rel	3	flat:name	_	Proper=Yes
5	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	Proper=Yes
6	Povo	Povo	PROPN	_	_	3	flat:name	_	_
7	Conta	Conta	PROPN	_	_	3	flat:name	_	SpaceAfter=No
8	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
9	,	,	PUNCT	_	_	13	punct	_	_
10	em	em	ADP	_	_	11	case	_	_
11	que	que	PRON	_	PronType=Rel	13	obl	_	_
12	ouvintes	ouvinte	NOUN	_	Number=Plur	13	nsubj	_	_
13	mandavam	mandar	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	3	acl:relcl	_	_
14	-	-	PUNCT	_	_	18	punct	_	SpaceAfter=No
15	para	para	ADP	_	_	18	mark	_	_
16	Silvio	Silvio	PROPN	_	_	18	nsubj	_	_
17	Santos	Santos	PROPN	_	_	16	flat:name	_	_
18	ler	ler	VERB	_	VerbForm=Inf	13	advcl	_	_
19	em	em	ADP	_	_	21	case	_	_
20	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
21	ar	ar	NOUN	_	Gender=Masc|Number=Sing	18	obl	_	SpaceAfter=No
22	-	-	PUNCT	_	_	18	punct	_	_
23	casos	caso	NOUN	_	Gender=Masc|Number=Plur	13	obj	_	_
24	escabrosos	escabroso	ADJ	_	Gender=Masc|Number=Plur	23	amod	_	_
25	envolvendo	envolver	VERB	_	VerbForm=Ger	23	acl	_	_
26	fantasmas	fantasma	NOUN	_	Gender=Masc|Number=Plur	25	obj	_	SpaceAfter=No
27	,	,	PUNCT	_	_	28	punct	_	_
28	ETs	ETs	PROPN	_	_	26	conj	_	_
29	e	e	CCONJ	_	_	31	cc	_	_
30	toda	todo	DET	_	Gender=Fem|Number=Sing|PronType=Ind	31	det	_	_
31	sorte	sorte	NOUN	_	Gender=Fem|Number=Sing	26	conj	_	_
32	de	de	ADP	_	_	33	case	_	_
33	aparições	aparição	NOUN	_	Gender=Fem|Number=Plur	31	nmod	_	_
34	sobrenaturais	sobrenatural	ADJ	_	Number=Plur	33	amod	_	SpaceAfter=No
35	.	.	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


