---
layout: base
title:  'Statistics of xcomp in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `xcomp`

This relation is universal.

2316 nodes (1%) are attached to their parents as `xcomp`.

2312 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.80569948186528.

The following 12 pairs of parts of speech are connected with `xcomp`: <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt> (1791; 77% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (333; 14% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (146; 6% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt> (13; 1% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt> (10; 0% instances), <tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt> (7; 0% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Diferentes	diferente	ADJ	_	Number=Plur	2	amod	_	_
2	críticas	crítico	NOUN	_	Gender=Fem|Number=Plur	3	nsubj	_	_
3	podem	poder	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	ser	ser	AUX	_	VerbForm=Inf	5	aux:pass	_	_
5	feitas	fazer	VERB	_	Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	3	xcomp	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 xcomp	color:blue
1	Para	para	ADP	_	_	2	case	_	_
2	ele	ele	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	obl	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	"	"	PUNCT	_	_	8	punct	_	SpaceAfter=No
5	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	questão	questão	NOUN	_	Gender=Fem|Number=Sing	8	nsubj	_	_
7	partidária	partidário	ADJ	_	Gender=Fem|Number=Sing	6	amod	_	_
8	deve	dever	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	ser	ser	AUX	_	VerbForm=Inf	10	cop	_	_
10	secundária	secundário	ADJ	_	Gender=Fem|Number=Sing	8	xcomp	_	SpaceAfter=No
11	"	"	PUNCT	_	_	8	punct	_	SpaceAfter=No
12	.	.	PUNCT	_	_	8	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
1	Danúbia	Danúbia	PROPN	_	_	5	nsubj	_	_
2	e	e	CCONJ	_	_	3	cc	_	_
3	Nem	Nem	PROPN	_	_	1	conj	_	_
4	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	5	expl	_	_
5	tornaram	tornar	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
6	celebridades	celebridade	NOUN	_	Gender=Fem|Number=Plur	5	xcomp	_	_
7	de	de	ADP	_	_	9	case	_	_
8	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	Rocinha	Rocinha	PROPN	_	_	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	SpaceAfter=No

~~~


