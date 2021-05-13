---
layout: base
title:  'Statistics of det in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Relations: `det`

This relation is universal.
There are 2 language-specific subtypes of `det`: <tt><a href="it_vit-dep-det-poss.html">det:poss</a></tt>, <tt><a href="it_vit-dep-det-predet.html">det:predet</a></tt>.

42269 nodes (15%) are attached to their parents as `det`.

42216 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15592987768814.

The following 12 pairs of parts of speech are connected with `det`: <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-DET.html">DET</a></tt> (36655; 87% instances), <tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_vit-pos-DET.html">DET</a></tt> (2905; 7% instances), <tt><a href="it_vit-pos-NUM.html">NUM</a></tt>-<tt><a href="it_vit-pos-DET.html">DET</a></tt> (1423; 3% instances), <tt><a href="it_vit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_vit-pos-DET.html">DET</a></tt> (528; 1% instances), <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_vit-pos-DET.html">DET</a></tt> (385; 1% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-DET.html">DET</a></tt> (133; 0% instances), <tt><a href="it_vit-pos-X.html">X</a></tt>-<tt><a href="it_vit-pos-DET.html">DET</a></tt> (113; 0% instances), <tt><a href="it_vit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_vit-pos-DET.html">DET</a></tt> (72; 0% instances), <tt><a href="it_vit-pos-ADP.html">ADP</a></tt>-<tt><a href="it_vit-pos-DET.html">DET</a></tt> (31; 0% instances), <tt><a href="it_vit-pos-DET.html">DET</a></tt>-<tt><a href="it_vit-pos-DET.html">DET</a></tt> (21; 0% instances), <tt><a href="it_vit-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="it_vit-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Ha	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	3	det	_	SpaceAfter=No
3	acqua	acqua	NOUN	S	Gender=Fem|Number=Sing	1	obj	_	_
4	calda	caldo	ADJ	A	Gender=Fem|Number=Sing	3	amod	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	10	punct	_	_
6	più	più	ADV	B	_	10	advmod	_	_
7	o	o	CCONJ	CC	_	8	cc	_	_
8	meno	meno	ADV	B	_	6	conj	_	_
9	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	10	expl	_	_
10	veste	vestire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	conj	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det	color:blue
1	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	storia	storia	NOUN	S	Gender=Fem|Number=Sing	10	nsubj	_	_
3	di	di	ADP	E	_	5	case	_	_
4	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	laboratorio	laboratorio	NOUN	S	Gender=Masc|Number=Sing	2	nmod	_	_
6	di	di	ADP	E	_	8	case	_	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	Gran	Gran	PROPN	SP	_	5	nmod	_	_
9	Sasso	Sasso	PROPN	SP	_	8	flat:name	_	_
10	inizia	iniziare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
11	in	in	ADP	E	_	13	case	_	_
12	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	1980	1980	NUM	N	NumType=Card	10	obl	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 det	color:blue
1	in	in	ADP	E	_	2	case	_	_
2	riunioni	riunione	NOUN	S	Gender=Fem|Number=Plur	0	root	_	_
3	non	non	ADV	BN	PronType=Neg	4	advmod	_	_
4	previste	previsto	ADJ	A	Gender=Fem|Number=Plur	2	amod	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	2	punct	_	_
6	per	per	ADP	E	_	9	case	_	_
7	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	altro	altro	ADJ	A	Gender=Masc|Number=Sing	9	amod	_	_
9	10	10	NUM	N	NumType=Card	2	nummod	_	_
10	per	per	ADP	E	_	11	case	_	_
11	cento	cento	NUM	N	NumType=Card	9	nummod	_	SpaceAfter=No
12	;	;	PUNCT	FC	_	2	punct	_	_

~~~


