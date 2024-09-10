---
layout: base
title:  'Statistics of obl:tmod in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="es_pud-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="es_pud-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="es_pud-dep-obl-arg.html">obl:arg</a></tt>.

68 nodes (0%) are attached to their parents as `obl:tmod`.

48 instances of `obl:tmod` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.67647058823529.

The following 4 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (43; 63% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-NUM.html">NUM</a></tt> (16; 24% instances), <tt><a href="es_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (8; 12% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 obl:tmod	color:blue
1	Le	él	PRON	PRP	Case=Dat|Number=Sing|Person=3|PronType=Prs	2	obl:arg	_	_
2	apasiona	apasionar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	guitarra	guitarra	NOUN	NN	Gender=Fem|Number=Sing	2	obj	_	_
5	y	y	CCONJ	CC	_	6	cc	_	_
6	dio	dar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	_
7	un	uno	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	concierto	concierto	NOUN	NN	Gender=Masc|Number=Sing	6	obj	_	_
9	allí	allí	ADV	RB	_	6	advmod	_	_
10	ese	ese	DET	DT	Gender=Masc|Number=Sing|PronType=Dem	12	det	_	_
11	mismo	mismo	ADJ	JJ	Gender=Masc|Number=Sing	12	amod	_	_
12	año	año	NOUN	NN	Gender=Masc|Number=Sing	6	obl:tmod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:tmod	color:blue
1	La	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
2	alegre	alegre	ADJ	JJ	Gender=Fem|Number=Sing	3	amod	_	_
3	dedicatoria	dedicatoria	NOUN	NN	Gender=Fem|Number=Sing	4	nsubj	_	_
4	tuvo	tener	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	lugar	lugar	NOUN	NN	Gender=Masc|Number=Sing	4	obj	_	_
6	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	30	30	NUM	CD	Gender=Masc|NumForm=Digit|NumType=Card	4	obl:tmod	_	_
8	de	de	ADP	IN	_	9	case	_	_
9	abril	abril	NOUN	NN	Gender=Masc|Number=Sing	7	nmod	_	_
10	de	de	ADP	IN	_	11	case	_	_
11	1995	1995	NUM	CD	Gender=Masc|NumForm=Digit|NumType=Card	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 obl:tmod	color:blue
1	En	en	ADP	IN	_	3	case	_	_
2	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	Tribunal	tribunal	NOUN	NN	Gender=Masc|Number=Sing	15	obl	_	Proper=True
4	Supremo	supremo	ADJ	JJ	Gender=Masc|Number=Sing	3	amod	_	Proper=True
5	de	de	ADP	IN	_	6	case	_	Proper=True
6	Hong	Hong	PROPN	NNP	Number=Sing	3	nmod	_	_
7	Kong	Kong	PROPN	NNP	Number=Sing	6	flat:name	_	SpaceAfter=No
8	,	,	PUNCT	,	_	3	punct	_	_
9	dos	dos	NUM	CD	Gender=Masc|NumForm=Word|NumType=Card	10	nummod	_	_
10	años	año	NOUN	NN	Gender=Masc|Number=Plur	12	obl:tmod	_	_
11	más	más	ADV	RBR	Degree=Cmp	12	advmod	_	_
12	tarde	tarde	ADV	RB	_	15	advmod	_	SpaceAfter=No
13	,	,	PUNCT	,	_	12	punct	_	_
14	Jutting	Jutting	PROPN	NNP	Gender=Masc|Number=Sing	15	nsubj	_	_
15	apareció	aparecer	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
16	mayormente	mayormente	ADV	RB	_	15	advmod	_	_
17	compuesto	compuesto	ADJ	JJ	Gender=Masc|Number=Sing	15	xcomp	_	SpaceAfter=No
18	.	.	PUNCT	.	_	15	punct	_	_

~~~


