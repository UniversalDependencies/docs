---
layout: base
title:  'Statistics of det in UD_Greek-Messinian'
udver: '2'
---

## Treebank Statistics: UD_Greek-Messinian: Relations: `det`

This relation is universal.

82 nodes (9%) are attached to their parents as `det`.

82 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26829268292683.

The following 7 pairs of parts of speech are connected with `det`: <tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_messinian-pos-DET.html">DET</a></tt> (56; 68% instances), <tt><a href="el_messinian-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_messinian-pos-DET.html">DET</a></tt> (10; 12% instances), <tt><a href="el_messinian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_messinian-pos-DET.html">DET</a></tt> (7; 9% instances), <tt><a href="el_messinian-pos-DET.html">DET</a></tt>-<tt><a href="el_messinian-pos-DET.html">DET</a></tt> (4; 5% instances), <tt><a href="el_messinian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_messinian-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="el_messinian-pos-X.html">X</a></tt>-<tt><a href="el_messinian-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="el_messinian-pos-NUM.html">NUM</a></tt>-<tt><a href="el_messinian-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	Όχι	όχι	INTJ	NoPr	_	6	discourse	_	_
2	,	,	PUNCT	NoPr	_	6	punct	_	_
3	είναι	είμαι	AUX	VbMn	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	6	cop	_	_
4	σ	σε	ADP	AjBa	_	6	case	_	_
5	την	ο	DET	AjBa	Case=Nom|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	Αθηνών	Αθήνα	PROPN	RgFwTr	Case=Gen|Gender=Fem|Number=Plur	0	root	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	Αυτό	αυτός	DET	PnDm	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	end_char=1328|start_char=1324
2	για	για	ADP	AsPpSp	_	3	case	_	end_char=1332|start_char=1329
3	μένα	εγώ	PRON	PnPe	Case=Acc|Number=Sing|Person=1|PronType=Prs	6	obl	_	end_char=1337|start_char=1333
4	είναι	είμαι	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	6	cop	_	end_char=1343|start_char=1338
5	το	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	6	det	_	end_char=1346|start_char=1344
6	καλύτερο	καλός	ADJ	AjCp	Case=Nom|Degree=Cmp|Gender=Neut|Number=Sing	0	root	_	end_char=1355|start_char=1347
7	.	.	PUNCT	PTERMP	_	6	punct	_	end_char=1357|start_char=1356

~~~


