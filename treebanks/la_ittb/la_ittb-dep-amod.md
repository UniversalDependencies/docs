---
layout: base
title:  'Statistics of amod in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `amod`

This relation is universal.
There are 1 language-specific subtypes of `amod`: <tt><a href="la_ittb-dep-amod-advmod.html">amod:advmod</a></tt>.

15157 nodes (4%) are attached to their parents as `amod`.

7615 instances of `amod` (50%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14455367157089.

The following 7 pairs of parts of speech are connected with `amod`: <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (14303; 94% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (363; 2% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (215; 1% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (184; 1% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (65; 0% instances), <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (26; 0% instances), <tt><a href="la_ittb-pos-X.html">X</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 amod	color:blue
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


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	uno	unus	NUM	F1|grn1|casF|gen1	Case=Abl|Degree=Pos|Gender=Masc|Number=Sing|NumType=Card	2	nummod	_	_
2	modo	modus	NOUN	B1|grn1|casF|gen1	Case=Abl|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	10	punct	_	_
4	ita	ita	ADV	O4	_	10	mark	_	_
5	quod	quod	SCONJ	O4	_	4	fixed	_	_
6	illud	ille	PRON	F1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Dem	10	nsubj	_	_
7	primum	primus	ADJ	B1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|NumType=Ord	6	amod	_	_
8	sit	sum	AUX	N3|modB|tem1|gen6	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
9	penitus	penitus	ADV	O4	_	10	advmod	_	_
10	immobile	immobilis	ADJ	C1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	2	advcl	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	aut	aut	CCONJ	O4	_	2	cc	_	_
2	est	sum	VERB	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	devenire	devenio	VERB	M3|modH|tem1|vgr1	Tense=Pres|VerbForm=Inf|Voice=Act	2	csubj	_	_
4	ad	ad	ADP	S4	AdpType=Prep	6	mark	_	_
5	aliquod	aliqui	PRON	F1|grn1|casD|gen3|varA	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|PronType=Ind	6	det	_	_
6	movens	moveo	VERB	K2|modD|tem1|grp1|casD|gen3|vgr1	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	3	ccomp	_	_
7	immobile	immobilis	ADJ	C1|grn1|casD|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	6	amod	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


