---
layout: base
title:  'Statistics of expl in UD_German'
udver: '2'
---

## Treebank Statistics: UD_German: Relations: `expl`

This relation is universal.
There are 1 language-specific subtypes of `expl`: <tt><a href="de-dep-expl-pv.html">expl:pv</a></tt>.

396 nodes (0%) are attached to their parents as `expl`.

224 instances of `expl` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.52525252525253.

The following 7 pairs of parts of speech are connected with `expl`: <tt><a href="de-pos-VERB.html">VERB</a></tt>-<tt><a href="de-pos-PRON.html">PRON</a></tt> (354; 89% instances), <tt><a href="de-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de-pos-PRON.html">PRON</a></tt> (28; 7% instances), <tt><a href="de-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de-pos-PRON.html">PRON</a></tt> (9; 2% instances), <tt><a href="de-pos-AUX.html">AUX</a></tt>-<tt><a href="de-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="de-pos-ADV.html">ADV</a></tt>-<tt><a href="de-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="de-pos-PRON.html">PRON</a></tt>-<tt><a href="de-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="de-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 expl	color:blue
1	Wenn	wenn	SCONJ	KOUS	_	6	mark	_	_
2	es	es	PRON	PPER	Case=Acc,Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	expl	_	_
3	schon	schon	ADV	ADV	_	6	advmod	_	_
4	Fastfood	Fastfood	NOUN	NN	Case=Nom|Number=Sing	6	nsubj	_	_
5	sein	sein	AUX	VAINF	VerbForm=Inf	6	aux	_	_
6	muss	müssen	VERB	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	advcl	_	SpaceAfter=No
7	,	,	PUNCT	$,	_	10	punct	_	_
8	dann	dann	ADV	ADV	_	10	advmod	_	_
9	bei	bei	ADP	APPR	_	10	case	_	_
10	Jim	Jim	PROPN	NE	_	0	root	_	_
11	Block	Block	PROPN	NN	_	10	flat	_	SpaceAfter=No
12	.	.	PUNCT	$.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 expl	color:blue
1	Es	es	PRON	PPER	Case=Acc,Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	expl	_	_
2	ist	sein	AUX	VAFIN	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
3	alles	alle	PRON	PIS	Case=Nom|PronType=Tot	6	nsubj	_	_
4	noch	noch	ADV	ADV	_	6	advmod	_	_
5	sehr	sehr	ADV	ADV	_	6	advmod	_	_
6	neu	neu	ADJ	ADJD	Degree=Pos	0	root	_	_
7	und	und	CCONJ	KON	_	8	cc	_	_
8	modern	modern	ADJ	ADJD	Degree=Pos	6	conj	_	SpaceAfter=No
9	.	.	PUNCT	$.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 expl	color:blue
1	Ihr	Ihr|ihr	DET	PPOSAT	Person=2,3|Poss=Yes|PronType=Prs	2	det:poss	_	_
2	Ziel	Ziel	NOUN	NN	_	0	root	_	_
3	war	sein	AUX	VAFIN	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	2	cop	_	_
4	es	es	PRON	PPER	Case=Acc,Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	expl	_	SpaceAfter=No
5	,	,	PUNCT	$,	_	2	punct	_	_
6	die	der	DET	ART	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
7	traditionelle	traditionell	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	_
8	georgische	georgisch	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	_
9	Kultur	Kultur	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	15	obj	_	_
10	mit	mit	ADP	APPR	_	11	case	_	_
11	Moderne	Moderne	NOUN	NN	Case=Dat|Number=Sing	15	obl	_	_
12	und	und	CCONJ	KON	_	13	cc	_	_
13	Technik	Technik	NOUN	NN	_	11	conj	_	_
14	zu	zu	PART	PTKZU	_	15	mark	_	_
15	verbinden	verbinden	VERB	VVINF	VerbForm=Inf	2	csubj	_	SpaceAfter=No
16	.	.	PUNCT	$.	_	2	punct	_	_

~~~


