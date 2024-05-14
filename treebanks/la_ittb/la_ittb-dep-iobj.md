---
layout: base
title:  'Statistics of iobj in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `iobj`

This relation is universal.

549 nodes (0%) are attached to their parents as `iobj`.

333 instances of `iobj` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.0327868852459.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (265; 48% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (241; 44% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt> (29; 5% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (13; 2% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj	color:blue
1	et	et	CCONJ	O4	_	3	cc	_	_
2	hoc	hic	PRON	F1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Dem	3	iobj	_	_
3	dicimus	dico	VERB	N3|modA|tem1|gen7	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	deum	deus	NOUN	F1|grn1|casD|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	3	xcomp	_	SpaceAfter=No
5	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 iobj	color:blue
1	huic	hic	PRON	F1|grn1|casC|gen2	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
2	etiam	etiam	ADV	O4|vgr1	_	5	advmod:emph	_	_
3	veritati	veritas	NOUN	C1|grn1|casC|gen2|vgr1	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing	7	iobj	_	_
4	sacra	sacer	ADJ	A1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	_
5	scriptura	scriptura	NOUN	A1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	7	nsubj	_	_
6	testimonium	testimonium	NOUN	B1|grn1|casD|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	7	obj	_	_
7	perhibet	perhibeo	VERB	K3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 iobj	color:blue
1	ex	ex	ADP	S4|vgr2	AdpType=Prep	2	case	_	_
2	quo	qui	PRON	F1|grn1|casF|gen3	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing|PronType=Rel	3	obl	_	_
3	patet	pateo	VERB	K3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	necessitas	necessitas	NOUN	C1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	3	nsubj	_	_
5	plura	multus	ADJ	C1|grn2|casM|gen3	Case=Acc|Degree=Cmp|Gender=Neut|Number=Plur	6	amod	_	_
6	nomina	nomen	NOUN	C1|grn1|casM|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur	8	obj	_	_
7	deo	deus	PROPN	F1|grn1|casC|gen1	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	8	iobj	_	_
8	dandi	do	VERB	J2|modE|grp1|casB	Case=Gen|Degree=Pos|Number=Sing|VerbForm=Ger|Voice=Act	4	acl	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


