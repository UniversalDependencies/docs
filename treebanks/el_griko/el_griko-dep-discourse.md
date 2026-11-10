---
layout: base
title:  'Statistics of discourse in UD_Greek-Griko'
udver: '2'
---

## Treebank Statistics: UD_Greek-Griko: Relations: `discourse`

This relation is universal.

7 nodes (1%) are attached to their parents as `discourse`.

6 instances of `discourse` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.57142857142857.

The following 4 pairs of parts of speech are connected with `discourse`: <tt><a href="el_griko-pos-VERB.html">VERB</a></tt>-<tt><a href="el_griko-pos-INTJ.html">INTJ</a></tt> (4; 57% instances), <tt><a href="el_griko-pos-ADV.html">ADV</a></tt>-<tt><a href="el_griko-pos-ADV.html">ADV</a></tt> (1; 14% instances), <tt><a href="el_griko-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_griko-pos-INTJ.html">INTJ</a></tt> (1; 14% instances), <tt><a href="el_griko-pos-VERB.html">VERB</a></tt>-<tt><a href="el_griko-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	Oh	oh	INTJ	_	_	4	discourse	_	_
2	,	,	PUNCT	_	_	1	punct	_	_
3	ka	ka	SCONJ	_	_	4	mark	_	_
4	fonàsete	fonazo	VERB	_	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	10	ccomp	_	_
5	o	evò	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	obj	_	_
6	,	,	PUNCT	_	_	7	punct	_	_
7	kàmete	kanno	VERB	_	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	_
8	brodo	brodo	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	7	obj	_	_
9	,	,	PUNCT	_	_	7	punct	_	_
10	ipe	leo	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
11	cino	cino	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	10	nsubj	_	_
12	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	nsomma	nsomma	ADV	_	_	3	discourse	_	_
2	,	,	PUNCT	_	_	1	punct	_	_
3	'cessu	ecessu	ADV	_	_	0	root	_	_
4	este	steo	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	_	_
5	cini	cino	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	3	nsubj	_	_
6	,	,	PUNCT	_	_	7	punct	_	_
7	skura	skuro	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	5	amod	_	_
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 discourse	color:blue
1	Ipìrte	pao	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	ittòtsu	ittotsu	ADV	_	_	1	advmod	_	_
3	,	,	PUNCT	_	_	4	punct	_	_
4	ivrice	vrisko	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	conj	_	_
5	dio	dio	NUM	_	Case=Acc|Gender=Masc|NumType=Card	6	nummod	_	_
6	tsangùnu	tsanguni	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	4	obj	_	_
7	,	,	PUNCT	_	_	9	punct	_	_
8	dio	dio	NUM	_	Case=Acc|Gender=Fem|NumType=Card	9	nummod	_	_
9	morìćce	moriccia	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	6	conj	_	_
10	,	,	PUNCT	_	_	13	punct	_	_
11	insomma	insomma	INTJ	_	_	13	discourse	_	_
12	dio	dio	NUM	_	Case=Acc|Gender=Neut|NumType=Card	13	nummod	_	_
13	smìmmata	smimma	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	6	parataxis	_	_
14	.	.	PUNCT	_	_	1	punct	_	_

~~~


