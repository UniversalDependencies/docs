---
layout: base
title:  'Statistics of amod in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `amod`

This relation is universal.
There are 1 language-specific subtypes of `amod`: <tt><a href="la_ittb-dep-amod-advmod.html">amod:advmod</a></tt>.

15437 nodes (4%) are attached to their parents as `amod`.

7804 instances of `amod` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14426378182289.

The following 10 pairs of parts of speech are connected with `amod`: <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (14455; 94% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (370; 2% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (273; 2% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (189; 1% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (66; 0% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (50; 0% instances), <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (26; 0% instances), <tt><a href="la_ittb-pos-X.html">X</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-X.html">X</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 amod	color:blue
1	et	et	CCONJ	O4	_	5	cc	_	_
2	sic	sic	ADV	O4	_	5	advmod	_	_
3	nihil	nihil	PRON	G1|casA|gen3|vgr1	Case=Nom|Gender=Neut|Number=Sing|PronType=Neg	5	nsubj	_	_
4	inconveniens	inconveniens	ADJ	C1|grn1|casA|gen3|vgr1	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	3	amod	_	_
5	accidit	accido	VERB	L3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	cado
6	ponentibus	pono	VERB	L2|modD|tem1|grp1|casL|gen1	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	5	ccomp	_	_
7	deum	deus	PROPN	F1|grn1|casD|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	9	nsubj	_	_
8	non	non	ADV	O4	_	9	advmod	_	_
9	esse	sum	VERB	N3|modH|tem1	Tense=Pres|VerbForm=Inf|Voice=Act	6	ccomp	_	SpaceAfter=No
10	:	:	PUNCT	Punc	_	5	punct	_	_

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


