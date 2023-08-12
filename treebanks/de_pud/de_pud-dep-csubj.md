---
layout: base
title:  'Statistics of csubj in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="de_pud-dep-csubj-pass.html">csubj:pass</a></tt>.

28 nodes (0%) are attached to their parents as `csubj`.

23 instances of `csubj` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.28571428571429.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (13; 46% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (10; 36% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (3; 11% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 6 csubj	color:blue
1	Warum	warum	ADV	WRB	_	6	advmod	_	_
2	das	der	DET	DT	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	3	det	_	_
3	Video	Video	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	6	nsubj:pass	_	_
4	in	in	ADP	IN	_	5	case	_	_
5	Deutschland	Deutschland	PROPN	NNP	Case=Dat|Gender=Neut|Number=Sing	6	obl	_	_
6	beworben	bewerben	VERB	VBN	Tense=Past	11	csubj	_	_
7	wird	werden	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	aux:pass	_	SpaceAfter=No
8	,	,	PUNCT	,	_	6	punct	_	_
9	ist	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	11	cop	_	_
10	aber	aber	ADV	RB	Degree=Pos	11	advmod	_	_
11	unklar	unklar	ADJ	JJ	Degree=Pos	0	root	_	SpaceAfter=No
12	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 csubj	color:blue
1	Fest	fest	ADV	RB	Degree=Pos	2	advmod	_	_
2	steht	stehen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
3	:	:	PUNCT	:	_	11	punct	_	_
4	Männer	Mann	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	11	nsubj	_	_
5	könnten	können	AUX	VBC	Mood=Sub|Number=Plur|Person=3|Tense=Past	11	aux	_	_
6	in	in	ADP	IN	_	7	case	_	_
7	Sachen	Sache	NOUN	NN	Case=Dat|Gender=Fem|Number=Plur	11	obl	_	_
8	Verhütung	Verhütung	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	7	appos	_	_
9	größere	groß	ADJ	JJ	Case=Acc|Degree=Cmp|Gender=Fem|Number=Sing	10	amod	_	InflectionType=Strong
10	Verantwortung	Verantwortung	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	11	obj	_	_
11	übernehmen	übernehmen	VERB	VB	_	2	csubj	_	SpaceAfter=No
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 csubj	color:blue
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


