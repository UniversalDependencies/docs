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
1	Entender	entender	VERB	_	VerbForm=Inf	20	csubj:outer	20:csubj:outer	_
2	que	que	SCONJ	_	_	6	mark	6:mark	_
3	arte	arte	NOUN	_	Gender=Fem|Number=Sing	6	nsubj	6:nsubj	_
4	só	só	ADV	_	_	6	advmod	6:advmod	_
5	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	6:cop	_
6	arte	arte	NOUN	_	Gender=Fem|Number=Sing	1	ccomp	1:ccomp	_
7	se	se	SCONJ	_	_	11	mark	11:mark	_
8	ela	ele	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	11	nsubj	11:nsubj	_
9	não	não	ADV	_	_	11	advmod	11:advmod	_
10	"	"	PUNCT	_	_	11	punct	11:punct	SpaceAfter=No
11	invadir	invadir	VERB	_	VerbForm=Inf	6	advcl	6:advcl:se	_
12	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	13:det	_
13	espaço	espaço	NOUN	_	Gender=Masc|Number=Sing	11	obj	11:obj	_
14	de	de	ADP	_	_	16	case	16:case	_
15	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	16:det	_
16	senso	senso	NOUN	_	Gender=Masc|Number=Sing	13	nmod	13:nmod:de	_
17	comum	comum	ADJ	_	Number=Sing	16	amod	16:amod	SpaceAfter=No
18	"	"	PUNCT	_	_	11	punct	11:punct	_
19	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	cop	20:cop	_
20	pressupor	pressupor	VERB	_	VerbForm=Inf	0	root	0:root	_
21	que	que	SCONJ	_	_	22	mark	22:mark	_
22	existe	existir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	ccomp	20:ccomp	_
23	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	24	det	24:det	_
24	árbitro	árbitro	NOUN	_	Gender=Masc|Number=Sing	22	nsubj	22:nsubj	_
25	de	de	ADP	_	_	27	case	27:case	_
26	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	27	det	27:det	_
27	senso	senso	NOUN	_	Gender=Masc|Number=Sing	24	nmod	24:nmod:de	_
28	comum	comum	ADJ	_	Number=Sing	27	amod	27:amod	SpaceAfter=No
29	.	.	PUNCT	_	_	20	punct	20:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 csubj:outer	color:blue
1	Estar	estar	AUX	_	VerbForm=Inf	3	cop	3:cop	_
2	em	em	ADP	_	_	3	case	3:case	_
3	frente	frente	NOUN	_	Gender=Fem|Number=Sing	10	csubj:outer	10:csubj:outer	_
4	a	a	ADP	_	_	5	case	5:case	_
5	mim	mim	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	3	nmod	3:nmod:a	_
6	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	10:cop	_
7	estar	estar	AUX	_	VerbForm=Inf	10	cop	10:cop	_
8	perante	perante	ADP	_	_	10	case	10:case	_
9	outra	outro	DET	_	Gender=Fem|Number=Sing|PronType=Ind	10	det	10:det	_
10	pessoa	pessoa	NOUN	_	Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	13:punct	_
12	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	13	det	13:det	_
13	estranho	estranho	NOUN	_	Gender=Masc|Number=Sing	10	appos	10:appos	SpaceAfter=No
14	,	,	PUNCT	_	_	13	punct	13:punct	_
15	quase-estranho	quase-estranho	NOUN	_	Gender=Masc|Number=Sing	10	appos	10:appos	SpaceAfter=No
16	.	.	PUNCT	_	_	10	punct	10:punct	SpaceAfter=No

~~~


