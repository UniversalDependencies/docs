---
layout: base
title:  'Statistics of parataxis in UD_Greek-Messinian'
udver: '2'
---

## Treebank Statistics: UD_Greek-Messinian: Relations: `parataxis`

This relation is universal.

3 nodes (0%) are attached to their parents as `parataxis`.

3 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.33333333333333.

The following 2 pairs of parts of speech are connected with `parataxis`: <tt><a href="el_messinian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_messinian-pos-VERB.html">VERB</a></tt> (2; 67% instances), <tt><a href="el_messinian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_messinian-pos-ADJ.html">ADJ</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 parataxis	color:blue
1	Θα	θα	AUX	PtFu	Tense=Fut	2	aux	_	end_char=2618|start_char=2616
2	παίρναμε	παίρνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	end_char=2627|start_char=2619
3	,	,	PUNCT	PUNCT	_	4	punct	_	end_char=2629|start_char=2628
4	λέει	λέω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis	_	end_char=2634|start_char=2630
5	,	,	PUNCT	PUNCT	_	8	punct	_	end_char=2636|start_char=2635
6	και	και	CCONJ	CjCo	_	8	cc	_	end_char=2640|start_char=2637
7	κανά	κανένα	DET	PnId	Case=Acc|Gender=Neut|Number=Sing|PronType=Neg	8	det	_	end_char=2645|start_char=2641
8	στεκάκι	στεκάκι	NOUN	NoCm	Case=Acc|Degree=Dim|Gender=Neut|Number=Sing	4	obj	_	end_char=2653|start_char=2646
9	,	,	PUNCT	PUNCT	_	11	punct	_	end_char=2655|start_char=2654
10	σαν	σαν	ADV	AdBa	_	11	case	_	end_char=2659|start_char=2656
11	αυτά	αυς	DET	PnDm	Case=Acc|Gender=Neut|Number=Plur|PronType=Dem	8	amod	_	end_char=2664|start_char=2660
12	που	που	PRON	PnRe	Case=Acc|Gender=Neut|Number=Plur|PronType=Rel	13	obj	_	end_char=2668|start_char=2665
13	φοράς	φορώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	11	acl:relcl	_	end_char=2674|start_char=2669
14	.	.	PUNCT	PTERMP	_	2	punct	_	end_char=2676|start_char=2675

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 parataxis	color:blue
1	Βάζω	βάζω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	end_char=2503|start_char=2499
2	στέκες	στέκα	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Plur	1	obj	_	end_char=2510|start_char=2504
3	,	,	PUNCT	PUNCT	_	4	punct	_	end_char=2512|start_char=2511
4	άφαντες	άφαντος	ADJ	AjBa	Case=Acc|Gender=Fem|Number=Plur	1	parataxis	_	end_char=2520|start_char=2513
5	οι	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	6	det	_	end_char=2523|start_char=2521
6	στέκες	στέκα	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Plur	4	nsubj	_	end_char=2530|start_char=2524
7	σε	σε	ADP	AsPpSp	_	9	case	_	end_char=2533|start_char=2531
8	τρεις	τρεις	NUM	NmCd	Case=Acc|Gender=Fem|Number=Plur|NumType=Card	9	nummod	_	end_char=2539|start_char=2534
9	μέρες	μέρα	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Plur	4	nmod	_	end_char=2545|start_char=2540
10	.	.	PUNCT	PTERMP	_	1	punct	_	end_char=2547|start_char=2546

~~~


