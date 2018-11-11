---
layout: base
title:  'Statistics of xcomp in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `xcomp`

This relation is universal.

5379 nodes (2%) are attached to their parents as `xcomp`.

3555 instances of `xcomp` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.01617401003904.

The following 19 pairs of parts of speech are connected with `xcomp`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (3616; 67% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (899; 17% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (691; 13% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (75; 1% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (55; 1% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (18; 0% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt> (7; 0% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="la_ittb-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 xcomp	color:blue
1	ponam	pono	VERB	L3|modA|tem3|gen4	Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
2	universos	universus	ADJ	B1|grn1|casM|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	3	amod	_	_
3	filios	filius	NOUN	B1|grn1|casM|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	1	obj	_	_
4	tuos	tuus	ADJ	B1|grn1|casM|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Poss=Yes	3	amod	_	_
5	doctos	doceo	VERB	K2|modM|tem4|grp1|casM|gen1	Aspect=Perf|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	1	xcomp	_	_
6	a	ab	ADP	S4|vgr1	AdpType=Prep	7	case	_	_
7	domino	dominus	NOUN	B1|grn1|casF|gen1	Case=Abl|Degree=Pos|Gender=Masc|Number=Sing	5	obl:arg	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	et	et	CCONJ	O4	_	3	cc	_	_
2	hoc	hic	PRON	F1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Dem	3	iobj	_	_
3	dicimus	dico	VERB	N3|modA|tem1|gen7	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	deum	deus	NOUN	F1|grn1|casD|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	3	xcomp	_	SpaceAfter=No
5	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 xcomp	color:blue
1	et	et	CCONJ	O4	_	3	cc	_	_
2	simile	similis	ADJ	C1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	3	xcomp	_	_
3	apparet	appareo	VERB	K3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	in	in	ADP	S4	AdpType=Prep	5	case	_	_
5	arte	ars	NOUN	C1|grn1|casF|gen2	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	3	obl	_	_
6	gubernatoria	gubernatorius	ADJ	A1|grn1|casF|gen2	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	_
7	respectu	respectus	NOUN	D1|grn1|casF|gen1	Case=Abl|Degree=Pos|Gender=Masc|Number=Sing	3	obl	_	_
8	navifactivae	navifactivus	ADJ	A1|grn1|casB|gen2|vgr1	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
9	;	;	PUNCT	Punc	_	3	punct	_	_

~~~


