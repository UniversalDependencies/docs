---
layout: base
title:  'Statistics of nsubj:pass in UD_Portuguese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-GSD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="pt_gsd-dep-nsubj.html">nsubj</a></tt>.

2011 nodes (1%) are attached to their parents as `nsubj:pass`.

1750 instances of `nsubj:pass` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.47737444057683.

The following 17 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (1445; 72% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt> (310; 15% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (186; 9% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-NUM.html">NUM</a></tt> (26; 1% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-SYM.html">SYM</a></tt> (10; 0% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (9; 0% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (8; 0% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-PART.html">PART</a></tt> (6; 0% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:pass	color:blue
1	Os	_	DET	DET	_	2	det	_	_
2	cuidados	cuidado	NOUN	NOUN	_	7	nsubj:pass	_	_
3	de	_	ADP	ADP	_	4	mark	_	_
4	sempre	sempre	ADV	ADV	_	2	nmod	_	_
5	estão	estar	AUX	AUX	_	7	aux	_	_
6	sendo	ser	AUX	AUX	_	7	aux:pass	_	_
7	tomados	tomar	VERB	VERB	_	0	root	_	_
8	por	por	ADP	ADP	_	10	case	_	_
9	o	o	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	consumidor	consumidor	NOUN	NOUN	_	7	nmod	_	SpaceAfter=No
11	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	"	_	PUNCT	.	_	6	punct	_	SpaceAfter=No
2	Eles	ele	PRON	PRON	_	6	nsubj:pass	_	_
3	não	não	ADV	ADV	Polarity=Neg	6	advmod	_	_
4	podem	poder	AUX	AUX	_	6	aux	_	_
5	ser	ser	AUX	AUX	_	6	aux:pass	_	_
6	considerados	considerar	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	_
7	marginais	marginal	ADJ	_	Gender=Masc|Number=Plur	6	obj	_	SpaceAfter=No
8	"	_	PUNCT	.	_	7	punct	_	SpaceAfter=No
9	,	_	PUNCT	.	_	10	punct	_	_
10	disse	dizer	VERB	VERB	_	6	parataxis	_	_
11	ele	_	PRON	PRON	_	10	nsubj	_	SpaceAfter=No
12	.	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:pass	color:blue
1	Em	em	ADP	ADP	_	3	case	_	_
2	o	o	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	hospital	hospital	NOUN	NOUN	_	7	nmod	_	SpaceAfter=No
4	,	_	PUNCT	.	_	3	punct	_	_
5	Carmen	_	PROPN	PNOUN	_	7	nsubj:pass	_	_
6	será	ser	AUX	AUX	_	7	aux:pass	_	_
7	levada	levar	VERB	VERB	_	0	root	_	_
8	para	_	ADP	ADP	_	10	case	_	_
9	a	_	DET	DET	_	10	det	_	_
10	mesa	mesa	NOUN	NOUN	_	7	nmod	_	_
11	de	_	ADP	ADP	_	12	case	_	_
12	cirurgia	cirurgia	NOUN	NOUN	_	10	nmod	_	SpaceAfter=No
13	.	_	PUNCT	.	_	7	punct	_	_

~~~


