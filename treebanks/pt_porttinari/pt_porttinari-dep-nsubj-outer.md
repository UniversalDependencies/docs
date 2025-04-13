---
layout: base
title:  'Statistics of nsubj:outer in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="pt_porttinari-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="pt_porttinari-dep-nsubj-pass.html">nsubj:pass</a></tt>.

97 nodes (0%) are attached to their parents as `nsubj:outer`.

97 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.77319587628866.

The following 7 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (67; 69% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt> (14; 14% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt> (7; 7% instances), <tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (5; 5% instances), <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="pt_porttinari-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 nsubj:outer	color:blue
1	E	e	CCONJ	_	_	11	cc	11:cc	_
2	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	4:det	_
3	grande	grande	ADJ	_	Number=Sing	4	amod	4:amod	_
4	dúvida	dúvida	NOUN	_	Gender=Fem|Number=Sing	11	nsubj:outer	11:nsubj:outer	_
5	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	11:cop	_
6	se	se	SCONJ	_	_	11	mark	11:mark	_
7	essas	esse	DET	_	Gender=Fem|Number=Plur|PronType=Dem	8	det	8:det	_
8	cicatrizes	cicatriz	NOUN	_	Gender=Fem|Number=Plur	11	nsubj	11:nsubj	_
9	vão	ir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	aux	11:aux	_
10	realmente	realmente	ADV	_	_	11	advmod	11:advmod	_
11	sarar	sarar	VERB	_	VerbForm=Inf	0	root	0:root	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	11:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 nsubj:outer	color:blue
1	"	"	PUNCT	_	_	9	punct	9:punct	SpaceAfter=No
2	O	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	nsubj:outer	6:nsubj|9:nsubj:outer	_
3	que	que	PRON	_	PronType=Rel	6	nsubj	2:ref	_
4	mais	mais	ADV	_	_	6	advmod	6:advmod	_
5	me	me	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	6	iobj	6:iobj	_
6	dói	doer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	2:acl:relcl	_
7	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	9:cop	_
8	que	que	SCONJ	_	_	9	mark	9:mark	_
9	foi	ser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	16	ccomp:speech	16:ccomp:speech	_
10	por	por	ADP	_	_	12	case	12:case	_
11	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	12	det	12:det	_
12	coisa	coisa	NOUN	_	Gender=Fem|Number=Sing	9	obl	9:obl:por	_
13	besta	besta	ADJ	_	Number=Sing	12	amod	12:amod	SpaceAfter=No
14	"	"	PUNCT	_	_	9	punct	9:punct	SpaceAfter=No
15	,	,	PUNCT	_	_	9	punct	9:punct	_
16	disse	dizer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	SpaceAfter=No
17	.	.	PUNCT	_	_	16	punct	16:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 nsubj:outer	color:blue
1	Um	um	NUM	_	Gender=Masc|NumType=Card	8	nsubj:outer	8:nsubj:outer	_
2	de	de	ADP	_	_	4	case	4:case	_
3	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	4	det	4:det	_
4	motivos	motivo	NOUN	_	Gender=Masc|Number=Plur	1	nmod	1:nmod:de	_
5	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	cop	8:cop	_
6	Lucas	Lucas	PROPN	_	_	8	nsubj	8:nsubj|9:nsubj	_
7	Pratto	Pratto	PROPN	_	_	6	flat:name	6:flat:name	_
8	ficar	ficar	VERB	_	Number=Sing|Person=3|VerbForm=Inf	0	root	0:root	_
9	responsável	responsável	ADJ	_	Number=Sing	8	xcomp	8:xcomp	_
10	por	por	ADP	_	_	11	mark	11:mark	_
11	puxar	puxar	VERB	_	VerbForm=Inf	9	acl	9:acl:por	_
12	alguns	algum	PRON	_	Gender=Masc|Number=Plur|PronType=Ind	11	obj	11:obj	_
13	de	de	ADP	_	_	14	case	14:case	_
14	eles	ele	PRON	_	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs	12	nmod	12:nmod:de	_
15	.	.	PUNCT	_	_	8	punct	8:punct	SpaceAfter=No

~~~


