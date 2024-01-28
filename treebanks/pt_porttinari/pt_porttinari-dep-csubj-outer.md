---
layout: base
title:  'Statistics of csubj:outer in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `csubj:outer`

This relation is a language-specific subtype of <tt><a href="pt_porttinari-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="pt_porttinari-dep-csubj-pass.html">csubj:pass</a></tt>.

4 nodes (0%) are attached to their parents as `csubj:outer`.

4 instances of `csubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 13.5.

The following 2 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt> (3; 75% instances), <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 1 csubj:outer	color:blue
1	Entender	entender	VERB	_	VerbForm=Inf	20	csubj:outer	_	_
2	que	que	SCONJ	_	_	6	mark	_	_
3	arte	arte	NOUN	_	Gender=Fem|Number=Sing	6	nsubj	_	_
4	só	só	ADV	_	_	6	advmod	_	_
5	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	arte	arte	NOUN	_	Gender=Fem|Number=Sing	1	ccomp	_	_
7	se	se	SCONJ	_	_	11	mark	_	_
8	ela	ele	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	_
9	não	não	ADV	_	_	11	advmod	_	_
10	"	"	PUNCT	_	_	11	punct	_	SpaceAfter=No
11	invadir	invadir	VERB	_	VerbForm=Inf	6	advcl	_	_
12	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	espaço	espaço	NOUN	_	Gender=Masc|Number=Sing	11	obj	_	_
14	de	de	ADP	_	_	16	case	_	_
15	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	senso	senso	NOUN	_	Gender=Masc|Number=Sing	13	nmod	_	_
17	comum	comum	ADJ	_	Number=Sing	16	amod	_	SpaceAfter=No
18	"	"	PUNCT	_	_	11	punct	_	_
19	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	_
20	pressupor	pressupor	VERB	_	VerbForm=Inf	0	root	_	_
21	que	que	SCONJ	_	_	22	mark	_	_
22	existe	existir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	ccomp	_	_
23	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	24	det	_	_
24	árbitro	árbitro	NOUN	_	Gender=Masc|Number=Sing	22	nsubj	_	_
25	de	de	ADP	_	_	27	case	_	_
26	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	27	det	_	_
27	senso	senso	NOUN	_	Gender=Masc|Number=Sing	24	nmod	_	_
28	comum	comum	ADJ	_	Number=Sing	27	amod	_	SpaceAfter=No
29	.	.	PUNCT	_	_	20	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 csubj:outer	color:blue
1	Estar	estar	AUX	_	VerbForm=Inf	3	cop	_	_
2	em	em	ADP	_	_	3	case	_	_
3	frente	frente	NOUN	_	Gender=Fem|Number=Sing	10	csubj:outer	_	_
4	a	a	ADP	_	_	5	case	_	_
5	mim	mim	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	3	nmod	_	_
6	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
7	estar	estar	AUX	_	VerbForm=Inf	10	cop	_	_
8	perante	perante	ADP	_	_	10	case	_	_
9	outra	outro	DET	_	Gender=Fem|Number=Sing|PronType=Ind	10	det	_	_
10	pessoa	pessoa	NOUN	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	_
12	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	estranho	estranho	NOUN	_	Gender=Masc|Number=Sing	10	appos	_	SpaceAfter=No
14	,	,	PUNCT	_	_	13	punct	_	_
15	quase-estranho	quase-estranho	NOUN	_	Gender=Masc|Number=Sing	10	appos	_	SpaceAfter=No
16	.	.	PUNCT	_	_	10	punct	_	SpaceAfter=No

~~~


