---
layout: base
title:  'Statistics of advmod:tmod in UD_Romanian-RRT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-RRT: Relations: `advmod:tmod`

This relation is a language-specific subtype of <tt><a href="ro_rrt-dep-advmod.html">advmod</a></tt>.

129 nodes (0%) are attached to their parents as `advmod:tmod`.

98 instances of `advmod:tmod` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.62015503875969.

The following 7 pairs of parts of speech are connected with `advmod:tmod`: <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt> (99; 77% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-ADP.html">ADP</a></tt> (12; 9% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt> (6; 5% instances), <tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt> (5; 4% instances), <tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt> (5; 4% instances), <tt><a href="ro_rrt-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 advmod:tmod	color:blue
1	Acum	acum	ADV	Rgp	Degree=Pos	5	advmod:tmod	_	_
2	nu	nu	PART	Qz	Polarity=Neg	4	advmod	_	_
3	mai	mai	ADV	Rp	_	5	advmod	_	_
4	putea	putea	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
5	gândi	gândi	VERB	Vmnp	Tense=Pres|VerbForm=Inf	4	ccomp	_	_
6	nimic	nimic	PRON	Pz3-sr	Case=Acc,Nom|Number=Sing|Person=3|PronType=Neg	5	obj	_	SpaceAfter=No
7	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 advmod:tmod	color:blue
1	Puteți	putea	VERB	Vmip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
2	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc|ExtPos=ADV	5	advmod:tmod	_	_
3	urmă	urmă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	2	fixed	_	_
4	să	să	PART	Qs	Mood=Sub	5	mark	_	_
5	dormiți	dormi	VERB	Vmsp2p	Mood=Sub|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
6	până	până	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	poimâine	poimâine	ADV	Rgp	Degree=Pos	5	advmod:tmod	_	_
8	dimineață	dimineață	ADV	Rgp	Degree=Pos	7	advmod:tmod	_	SpaceAfter=No
9	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 13 advmod:tmod	color:blue
1	Ea	el	PRON	Pp3fsr--------s	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Strong	4	nsubj	_	_
2	și-	sine	PRON	Px3--d--y-----w	Case=Dat|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	4	expl:poss	_	SpaceAfter=No
3	a	avea	AUX	Va--3s	Number=Sing|Person=3	4	aux	_	_
4	găsit	găsi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
5	un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	6	det	_	_
6	iubit	iubit	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	obj	_	_
7	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
8	care	care	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	10	obj	_	SpaceAfter=No
9	-l	el	PRON	Pp3msa--y-----w	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Variant=Short	10	expl	_	_
10	place	plăcea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	acl	_	SpaceAfter=No
11	,	,	PUNCT	COMMA	_	16	punct	_	_
12	dar	dar	CCONJ	Ccssp	Polarity=Pos	16	cc	_	_
13	acum	acum	ADV	Rgp	Degree=Pos	16	advmod:tmod	_	SpaceAfter=No
14	,	,	PUNCT	COMMA	_	13	punct	_	_
15	următoarea	următor	ADJ	Afpfsry	Case=Acc,Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	16	amod	_	_
16	provocare	provocare	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	conj	_	_
17	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	cop	_	_
18	să	să	PART	Qs	Mood=Sub	20	mark	_	SpaceAfter=No
19	-l	el	PRON	Pp3msa--y-----w	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Variant=Short	20	obj	_	_
20	păstreze	păstra	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	16	csubj	_	SpaceAfter=No
21	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


