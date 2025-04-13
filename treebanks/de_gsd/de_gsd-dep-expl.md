---
layout: base
title:  'Statistics of expl in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `expl`

This relation is universal.
There are 1 language-specific subtypes of `expl`: <tt><a href="de_gsd-dep-expl-pv.html">expl:pv</a></tt>.

398 nodes (0%) are attached to their parents as `expl`.

229 instances of `expl` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.5678391959799.

The following 6 pairs of parts of speech are connected with `expl`: <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-PRON.html">PRON</a></tt> (355; 89% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-PRON.html">PRON</a></tt> (30; 8% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-PRON.html">PRON</a></tt> (10; 3% instances), <tt><a href="de_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="de_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-DET.html">DET</a></tt>-<tt><a href="de_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 expl	color:blue
1	Wenn	wenn	SCONJ	KOUS	_	6	mark	_	_
2	es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	expl	_	_
3	schon	schon	ADV	ADV	_	6	advmod	_	_
4	Fastfood	Fastfood	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	_
5	sein	sein	AUX	VAINF	VerbForm=Inf	6	aux	_	_
6	muss	müssen	VERB	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	advcl	_	SpaceAfter=No
7	,	,	PUNCT	$,	_	6	punct	_	_
8	dann	dann	ADV	ADV	_	10	advmod	_	_
9	bei	bei	ADP	APPR	_	10	case	_	_
10	Jim	Jim	PROPN	NE	Case=Dat|Gender=Masc|Number=Sing	0	root	_	NamedEntity=Yes
11	Block	Block	PROPN	NN	Case=Dat|Gender=Masc|Number=Sing	10	flat	_	NamedEntity=Yes|SpaceAfter=No
12	.	.	PUNCT	$.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 expl	color:blue
1	Es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
2	war	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	cop	_	_
3	faszinierend	faszinierend	ADJ	ADJD	Degree=Pos	0	root	_	_
4	mit	mit	ADP	APPR	_	5	case	_	_
5	Ihnen	Sie	PRON	PPER	Case=Dat|Person=2|Polite=Form|PronType=Prs	8	obl	_	_
6	zusammen	zusammen	ADV	ADV	_	8	compound:prt	_	_
7	zu	zu	PART	PTKZU	_	8	mark	_	_
8	arbeiten	arbeiten	VERB	VVINF	VerbForm=Inf	3	csubj	_	SpaceAfter=No
9	.	.	PUNCT	$.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 expl	color:blue
1	Ihr	ihr	DET	PPOSAT	Case=Nom|Gender=Neut|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	2	det:poss	_	_
2	Ziel	Ziel	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
3	war	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	cop	_	_
4	es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	expl	_	SpaceAfter=No
5	,	,	PUNCT	$,	_	15	punct	_	_
6	die	der	DET	ART	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
7	traditionelle	traditionell	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	_
8	georgische	georgisch	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	_
9	Kultur	Kultur	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	15	obj	_	_
10	mit	mit	ADP	APPR	_	11	case	_	_
11	Moderne	Moderne	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	15	obl	_	_
12	und	und	CCONJ	KON	_	13	cc	_	_
13	Technik	Technik	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	11	conj	_	_
14	zu	zu	PART	PTKZU	_	15	mark	_	_
15	verbinden	verbinden	VERB	VVINF	VerbForm=Inf	2	csubj	_	SpaceAfter=No
16	.	.	PUNCT	$.	_	2	punct	_	_

~~~


