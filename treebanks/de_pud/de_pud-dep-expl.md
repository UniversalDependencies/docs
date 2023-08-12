---
layout: base
title:  'Statistics of expl in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `expl`

This relation is universal.
There are 1 language-specific subtypes of `expl`: <tt><a href="de_pud-dep-expl-pv.html">expl:pv</a></tt>.

90 nodes (0%) are attached to their parents as `expl`.

63 instances of `expl` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.06666666666667.

The following 3 pairs of parts of speech are connected with `expl`: <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (68; 76% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (18; 20% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (4; 4% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 expl	color:blue
1	Das	der	DET	DT	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	2	nsubj	_	_
2	ist	sein	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	es	es	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	expl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	8	punct	_	_
5	was	was	PRON	REL	Case=Nom|Gender=Neut|Number=Sing|PronType=Int,Rel	8	nsubj	_	_
6	uns	wir	PRON	PRP	Case=Acc|Number=Plur|Person=1|PronType=Prs	8	obj	_	_
7	süchtig	süchtig	ADV	RB	Degree=Pos	8	advmod	_	_
8	macht	machen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	acl:relcl	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 expl	color:blue
1	Vor	vor	ADP	IN	_	3	case	_	_
2	diesem	dieser	DET	DT	Case=Dat|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	Hintergrund	Hintergrund	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	6	obl	_	_
4	ist	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	cop	_	_
5	es	es	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	expl	_	_
6	sinnvoll	sinnvoll	ADJ	JJ	Degree=Pos	0	root	_	SpaceAfter=No
7	,	,	PUNCT	,	_	12	punct	_	_
8	über	über	ADP	IN	_	10	case	_	_
9	den	der	DET	DT	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	Handel	Handel	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	12	obl	_	_
11	zu	zu	PART	RP	_	12	mark	_	_
12	schimpfen	schimpfen	VERB	VB	_	6	csubj	_	SpaceAfter=No
13	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 expl	color:blue
1	Es	es	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
2	ist	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	cop	_	_
3	sein	sein	DET	DTP$	Case=Nom|Gender=Masc|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	4	det:poss	_	_
4	Traum	Traum	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	,	_	10	punct	_	_
6	seine	sein	DET	DTP$	Case=Acc|Gender=Fem|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	7	det:poss	_	_
7	Laufbahn	Laufbahn	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	10	obj	_	_
8	hier	hier	ADV	RB	Degree=Pos	10	advmod	_	_
9	zu	zu	PART	RP	_	10	mark	_	_
10	beenden	beenden	VERB	VB	_	4	csubj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	4	punct	_	_

~~~


