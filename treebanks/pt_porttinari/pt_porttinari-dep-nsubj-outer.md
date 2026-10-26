---
layout: base
title:  'Statistics of nsubj:outer in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="pt_porttinari-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="pt_porttinari-dep-nsubj-pass.html">nsubj:pass</a></tt>.

68 nodes (0%) are attached to their parents as `nsubj:outer`.

68 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.63235294117647.

The following 7 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (44; 65% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt> (10; 15% instances), <tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (5; 7% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt> (5; 7% instances), <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="pt_porttinari-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


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
12	.	.	PUNCT	_	_	11	punct	11:punct	_

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
17	.	.	PUNCT	_	_	16	punct	16:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 3 nsubj:outer	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	3:det	_
2	grande	grande	ADJ	_	Number=Sing	3	amod	3:amod	_
3	diferença	diferença	NOUN	_	Gender=Fem|Number=Sing	12	nsubj:outer	12:nsubj:outer	_
4	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	12:cop	_
5	que	que	SCONJ	_	_	12	mark	12:mark	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	7:punct	_
7	coletivamente	coletivamente	ADV	_	_	12	advmod	12:advmod	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	7:punct	_
9	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	10:det	_
10	Argentina	Argentina	PROPN	_	_	12	nsubj	12:nsubj	_
11	está	estar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	12:cop	_
12	arrasada	arrasado	ADJ	_	Gender=Fem|Number=Sing|VerbForm=Part	0	root	0:root	SpaceAfter=No
13	.	.	PUNCT	_	_	12	punct	12:punct	_

~~~


