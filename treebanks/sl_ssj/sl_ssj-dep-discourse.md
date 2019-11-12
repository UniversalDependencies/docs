---
layout: base
title:  'Statistics of discourse in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `discourse`

This relation is universal.

66 nodes (0%) are attached to their parents as `discourse`.

55 instances of `discourse` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.03030303030303.

The following 7 pairs of parts of speech are connected with `discourse`: <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-PART.html">PART</a></tt> (43; 65% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-INTJ.html">INTJ</a></tt> (8; 12% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-PART.html">PART</a></tt> (7; 11% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-INTJ.html">INTJ</a></tt> (3; 5% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-PART.html">PART</a></tt> (3; 5% instances), <tt><a href="sl_ssj-pos-DET.html">DET</a></tt>-<tt><a href="sl_ssj-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_ssj-pos-INTJ.html">INTJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 discourse	color:blue
1	»	»	PUNCT	Z	_	2	punct	_	SpaceAfter=No|Dep=0|Rel=Root
2	Ne	ne	PART	Q	Polarity=Neg	6	discourse	_	SpaceAfter=No|Dep=0|Rel=Root
3	!	!	PUNCT	Z	_	2	punct	_	SpaceAfter=No|Dep=0|Rel=Root
4	«	«	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root
5	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	aux	_	Dep=6|Rel=PPart
6	zalajala	zalajati	VERB	Vmep-sf	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
7	.	.	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 discourse	color:blue
1	"	"	PUNCT	Z	_	2	punct	_	SpaceAfter=No|Dep=0|Rel=Root
2	Hm	hm	INTJ	I	_	6	discourse	_	SpaceAfter=No|Dep=0|Rel=Root
3	,	,	PUNCT	Z	_	2	punct	_	SpaceAfter=No|Dep=0|Rel=Root
4	"	"	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root
5	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	aux	_	Dep=6|Rel=PPart
6	zamomljal	zamomljati	VERB	Vmep-sm	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	Dep=0|Rel=Root
7	Wunderlich	Wunderlich	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	SpaceAfter=No|Dep=6|Rel=Sb
8	.	.	PUNCT	Z	_	6	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
1	No	no	PART	Q	_	6	discourse	_	SpaceAfter=No|Dep=0|Rel=Root
2	,	,	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root
3	tudi	tudi	PART	Q	_	6	advmod	_	Dep=0|Rel=Root
4	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	Dep=5|Rel=Sb
5	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	cop	_	Dep=0|Rel=Root
6	pomembno	pomemben	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	Dep=5|Rel=Atr
7	za	za	ADP	Sa	Case=Acc	9	case	_	Dep=9|Rel=Atr
8	dobro	dober	ADJ	Agpnsa	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	9	amod	_	Dep=9|Rel=Atr
9	delovanje	delovanje	NOUN	Ncnsa	Case=Acc|Gender=Neut|Number=Sing	6	obl	_	Dep=6|Rel=Obj
10	kmetijstva	kmetijstvo	NOUN	Ncnsg	Case=Gen|Gender=Neut|Number=Sing	9	nmod	_	SpaceAfter=No|Dep=9|Rel=Atr
11	.	.	PUNCT	Z	_	6	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


