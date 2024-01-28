---
layout: base
title:  'Statistics of nsubj:outer in UD_Portuguese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-GSD: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="pt_gsd-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="pt_gsd-dep-nsubj-pass.html">nsubj:pass</a></tt>.

2 nodes (0%) are attached to their parents as `nsubj:outer`.

2 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.5.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="pt_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt> (1; 50% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 22 nsubj:outer	color:blue
1	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
2	Eu	eu	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	adoro	adorar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	Detalhes	Detalhes	PROPN	_	Gender=Masc|Number=Plur	3	obj	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	Emoções	emoção	NOUN	_	Gender=Fem|Number=Plur	4	conj	_	_
7	e	e	CCONJ	_	_	8	cc	_	_
8	tem	ter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	conj	_	_
9	aquela	aquele	PRON	_	Gender=Fem|Number=Sing|PronType=Dem	8	obj	_	_
10	que	que	PRON	_	Gender=Fem|Number=Sing|PronType=Rel	14	nsubj	_	_
11	não	não	ADV	_	Polarity=Neg	14	advmod	_	_
12	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	_
13	de	de	ADP	_	_	14	case	_	_
14	ele	ele	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	acl:relcl	_	_
15	,	,	PUNCT	_	_	19	punct	_	_
16	mas	mas	CCONJ	_	_	19	cc	_	_
17	que	que	PRON	_	_	19	obj	_	_
18	ninguém	ninguém	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	19	nsubj	_	_
19	cantou	cantar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	14	conj	_	_
20	como	como	ADP	_	_	21	case	_	_
21	ele	ele	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	19	obl	_	_
22	que	que	PRON	_	Gender=Masc|Number=Sing|PronType=Rel	28	nsubj:outer	_	_
23	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	cop	_	_
24	'	'	PUNCT	_	_	28	punct	_	SpaceAfter=No
25	Você	você	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	28	nsubj	_	_
26	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	28	cop	_	_
27	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	28	det	_	_
28	maior	maior	ADJ	_	Gender=Masc|Number=Sing	21	acl:relcl	_	_
29	de	de	ADP	_	_	32	case	_	_
30	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	32	det	_	_
31	meus	meu	DET	_	Gender=Masc|Number=Plur|PronType=Prs	32	det	_	_
32	casos	caso	NOUN	_	Gender=Masc|Number=Plur	28	obl	_	SpaceAfter=No
33	,	,	PUNCT	_	_	37	punct	_	_
34	de	de	ADP	_	_	37	case	_	_
35	todos	todo	DET	_	Gender=Masc|Number=Plur|PronType=Tot	37	det	_	_
36	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	37	det	_	_
37	abraços	abraço	NOUN	_	Gender=Masc|Number=Plur	32	conj	_	_
38	...	...	PUNCT	_	_	28	punct	_	SpaceAfter=No
39	'	'	PUNCT	_	_	28	punct	_	SpaceAfter=No
40	.	.	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 18 nsubj:outer	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Milan	Milan	PROPN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
3	também	também	ADV	_	_	4	advmod	_	_
4	revelou	revelar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	interesse	interesse	NOUN	_	Gender=Masc|Number=Sing	4	obj	_	_
6	em	em	ADP	_	_	7	case	_	_
7	Arouca	Arouca	PROPN	_	Gender=Masc|Number=Sing	5	nmod	_	_
8	e	e	CCONJ	_	_	11	cc	_	_
9	em	em	ADP	_	_	11	case	_	_
10	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	goleiro	goleiro	NOUN	_	Gender=Masc|Number=Sing	7	conj	_	_
12	Rafael	Rafael	PROPN	_	Gender=Masc|Number=Sing	11	appos	_	SpaceAfter=No
13	,	,	PUNCT	_	_	17	punct	_	_
14	sendo	ser	AUX	_	VerbForm=Ger	17	cop	_	_
15	este	este	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	17	nsubj	_	_
16	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	único	único	ADJ	_	Gender=Masc|Number=Sing	4	advcl	_	_
18	que	que	PRON	_	Gender=Masc|Number=Sing|PronType=Rel	23	nsubj:outer	_	_
19	de	de	ADP	_	_	21	case	_	_
20	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	21	det	_	_
21	três	três	NUM	_	NumType=Card	17	obl	_	_
22	que	que	PRON	_	Gender=Masc|Number=Sing|PronType=Rel	23	nsubj	_	_
23	tem	ter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	acl:relcl	_	_
24	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	det	_	_
25	passaporte	passaporte	NOUN	_	Gender=Masc|Number=Sing	23	obj	_	_
26	europeu	europeu	ADJ	_	Gender=Masc|Number=Sing	25	amod	_	SpaceAfter=No
27	.	.	PUNCT	_	_	4	punct	_	SpaceAfter=No

~~~


