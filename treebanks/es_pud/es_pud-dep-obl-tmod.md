---
layout: base
title:  'Statistics of obl:tmod in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="es_pud-dep-obl.html">obl</a></tt>.

68 nodes (0%) are attached to their parents as `obl:tmod`.

48 instances of `obl:tmod` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.66176470588235.

The following 4 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (43; 63% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-NUM.html">NUM</a></tt> (16; 24% instances), <tt><a href="es_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (8; 12% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 obl:tmod	color:blue
1	Le	_	PRON	PRP	Case=Dat|Number=Sing|Person=3	2	iobj	_	_
2	apasiona	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
3	la	_	DET	DT	Gender=Fem|Number=Sing	4	det	_	_
4	guitarra	_	NOUN	NN	Gender=Fem|Number=Sing	2	obj	_	_
5	y	_	CCONJ	CC	_	6	cc	_	_
6	dio	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	2	conj	_	_
7	un	_	DET	DT	Gender=Masc|Number=Sing	8	det	_	_
8	concierto	_	NOUN	NN	Gender=Masc|Number=Sing	6	obj	_	_
9	allí	_	ADV	RB	_	6	advmod	_	_
10	ese	_	DET	DT	Gender=Masc|Number=Sing	12	det	_	_
11	mismo	_	ADJ	JJ	Gender=Masc|Number=Sing	12	amod	_	_
12	año	_	NOUN	NN	Gender=Masc|Number=Sing	6	obl:tmod	_	SpaceAfter=No
13	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:tmod	color:blue
1	La	_	DET	DT	Gender=Fem|Number=Sing	3	det	_	_
2	alegre	_	ADJ	JJ	Gender=Fem|Number=Sing	3	amod	_	_
3	dedicatoria	_	NOUN	NN	Gender=Fem|Number=Sing	4	nsubj	_	_
4	tuvo	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
5	lugar	_	NOUN	NN	Gender=Masc|Number=Sing	4	obj	_	_
6	el	_	DET	DT	Gender=Masc|Number=Sing	7	det	_	_
7	30	_	NUM	CD	Gender=Masc	4	obl:tmod	_	_
8	de	_	ADP	IN	_	9	case	_	_
9	abril	_	NOUN	NN	Gender=Masc|Number=Sing	7	nmod	_	_
10	de	_	ADP	IN	_	11	case	_	_
11	1995	_	NUM	CD	Gender=Masc	9	nmod	_	SpaceAfter=No
12	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 obl:tmod	color:blue
1	En	_	ADP	IN	_	3	case	_	_
2	el	_	DET	DT	Gender=Masc|Number=Sing	3	det	_	_
3	Tribunal	_	NOUN	NN	Gender=Masc|Number=Sing	17	obl	_	Proper=True
4	Supremo	_	ADJ	JJ	Gender=Masc|Number=Sing	3	amod	_	Proper=True
5	de	_	ADP	IN	_	6	case	_	Proper=True
6	Hong	_	PROPN	NNP	Number=Sing	3	nmod	_	_
7	Kong	_	PROPN	NNP	Number=Sing	6	flat:name	_	SpaceAfter=No
8	,	_	PUNCT	,	_	3	punct	_	_
9	dos	_	NUM	CD	Gender=Masc	10	nummod	_	_
10	años	_	NOUN	NN	Gender=Masc|Number=Plur	12	obl:tmod	_	_
11	más	_	ADV	RBR	_	12	advmod	_	_
12	tarde	_	ADV	RB	_	17	advmod	_	SpaceAfter=No
13	,	_	PUNCT	,	_	12	punct	_	_
14	Jutting	_	PROPN	NNP	Gender=Masc|Number=Sing	17	nsubj	_	_
15	apareció	_	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	17	cop	_	_
16	mayormente	_	ADV	RB	_	17	advmod	_	_
17	compuesto	_	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
18	.	_	PUNCT	.	_	17	punct	_	_

~~~


