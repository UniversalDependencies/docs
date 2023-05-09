---
layout: base
title:  'Statistics of dep in UD_Old_East_Slavic-TOROT'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-TOROT: Relations: `dep`

This relation is universal.

163 nodes (0%) are attached to their parents as `dep`.

96 instances of `dep` (59%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.76687116564417.

The following 8 pairs of parts of speech are connected with `dep`: <tt><a href="orv_torot-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_torot-pos-NOUN.html">NOUN</a></tt> (80; 49% instances), <tt><a href="orv_torot-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_torot-pos-PRON.html">PRON</a></tt> (67; 41% instances), <tt><a href="orv_torot-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_torot-pos-PROPN.html">PROPN</a></tt> (8; 5% instances), <tt><a href="orv_torot-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_torot-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="orv_torot-pos-ADP.html">ADP</a></tt>-<tt><a href="orv_torot-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="orv_torot-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_torot-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="orv_torot-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_torot-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="orv_torot-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_torot-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 dep	color:blue
1	не	не	ADV	Df	Polarity=Neg	2	advmod	_	ref=23
2	хощет	хотѣти	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=23
3	см҃рти	съмьрть	NOUN	Nb	Case=Gen|Gender=Fem|Number=Sing	2	dep	_	ref=23
4	грѣшничи	грѣшьничь	ADJ	A-	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Variant=Short	3	amod	_	ref=23

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 dep	color:blue
1	я	я	PRON	Pp	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	ref=13
2	ево	и	PRON	Pp	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	dep	_	ref=13
3	и	и	ADV	Df	_	5	advmod	_	ref=13
4	не	не	ADV	Df	Polarity=Neg	5	advmod	_	ref=13
5	видал	видати	VERB	V-	Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=PartRes|Voice=Act	0	root	_	ref=13

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 dep	color:blue
1	а	а	CCONJ	C-	_	2	cc	_	ref=11
2	всядемъ	въсѣсти	VERB	V-	Mood=Imp|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=11
3	братіе	братия	NOUN	Nb	Case=Voc|Gender=Fem|Number=Sing	2	vocative	_	ref=11
4	на	на	ADP	R-	_	7	case	_	ref=11
5	свои	свои	DET	Pt	Case=Acc|Gender=Masc|Number=Plur|Person=3|Poss=Yes|Reflex=Yes	7	det	_	ref=11
6	бръзыя	бързыи	ADJ	A-	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	7	amod	_	ref=11
7	комони	комонь	NOUN	Nb	Case=Acc|Gender=Masc|Number=Plur	2	obl	_	ref=11
8	да	да	SCONJ	G-	_	9	mark	_	ref=11
9	позримъ	позьрѣти	VERB	V-	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	advcl	_	ref=11
10	синего	синии	ADJ	A-	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	11	amod	_	ref=11
11	Дону	донъ	PROPN	Ne	Case=Gen|Gender=Masc|Number=Sing	9	dep	_	ref=11

~~~


