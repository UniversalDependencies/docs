---
layout: base
title:  'Statistics of expl in UD_Romanian-RRT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-RRT: Relations: `expl`

This relation is universal.
There are 4 language-specific subtypes of `expl`: <tt><a href="ro_rrt-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="ro_rrt-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="ro_rrt-dep-expl-poss.html">expl:poss</a></tt>, <tt><a href="ro_rrt-dep-expl-pv.html">expl:pv</a></tt>.

545 nodes (0%) are attached to their parents as `expl`.

481 instances of `expl` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35045871559633.

The following 5 pairs of parts of speech are connected with `expl`: <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-PRON.html">PRON</a></tt> (535; 98% instances), <tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_rrt-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="ro_rrt-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_rrt-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ro_rrt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_rrt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl	color:blue
1	P-	pe	ADP	Spsay	AdpType=Prep|Case=Acc|Variant=Short	2	case	_	SpaceAfter=No
2	ăsta	acesta	PRON	Pd3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	7	obj	_	_
3	ar	avea	AUX	Va--3	Person=3	4	aux	_	_
4	trebui	trebui	VERB	Vmnp	Tense=Pres|VerbForm=Inf	0	root	_	_
5	să	să	PART	Qs	Mood=Sub	7	mark	_	SpaceAfter=No
6	-l	el	PRON	Pp3msa--y-----w	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Variant=Short	7	expl	_	_
7	luați	lua	VERB	Vmip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	4	csubj	_	SpaceAfter=No
8	,	,	PUNCT	COMMA	_	11	punct	_	_
9	nu	nu	PART	Qz	Polarity=Neg	11	advmod	_	_
10	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	mine	eu	PRON	Pp1-sa--------s	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Strong	2	conj	_	SpaceAfter=No
12	!	!	PUNCT	EXCL	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl	color:blue
1	Conducătorii	conducător	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	7	nsubj:pass	_	_
2	locali	local	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	1	amod	_	_
3	au	avea	AUX	Va--3p	Number=Plur|Person=3	7	aux	_	_
4	fost	fi	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	7	aux:pass	_	_
5	și	și	CCONJ	Crssp	Polarity=Pos	6	advmod	_	_
6	ei	el	PRON	Pp3mpr--------s	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Strength=Strong	7	expl	_	_
7	menținuți	menținut	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
8	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl	color:blue
1	Parcă	parcă	ADV	Rgp	Degree=Pos	4	advmod	_	_
2	acuma	acuma	ADV	Rgp	Degree=Pos	4	advmod	_	_
3	le	el	PRON	Pp3-pd--------w	Case=Dat|Number=Plur|Person=3|PronType=Prs|Strength=Weak	4	expl	_	_
4	văz	văz	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
5	toate	tot	PRON	Pi3fpr	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PronType=Ind	4	obj	_	SpaceAfter=No
6	!	!	PUNCT	EXCL	_	4	punct	_	_

~~~


