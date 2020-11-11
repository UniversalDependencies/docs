---
layout: base
title:  'Statistics of discourse in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `discourse`

This relation is universal.

297 nodes (0%) are attached to their parents as `discourse`.

260 instances of `discourse` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.47138047138047.

The following 6 pairs of parts of speech are connected with `discourse`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (216; 73% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (42; 14% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (24; 8% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (7; 2% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (7; 2% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 discourse	color:blue
1	nam	nam	PART	O4	_	9	discourse	_	_
2	in	in	ADP	S4	AdpType=Prep	3	case	_	_
3	psalmo	psalmus	NOUN	B1|grn1|casF|gen1	Case=Abl|Gender=Masc|Number=Sing	9	obl	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	3	punct	_	_
5	ut	ut	SCONJ	O4|vgr1	_	6	mark	_	_
6	dictum	dico	VERB	N2|modM|tem4|grp1|casA|gen3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	9	advcl	_	_
7	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux:pass	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	6	punct	_	_
9	legitur	lego	VERB	L3|modJ|tem1|gen6	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
10	:	:	PUNCT	Punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse	color:blue
1	una	unus	NOUN	F1|grn1|casA|gen2	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	quidem	quidem	PART	O4	_	1	discourse	_	_
3	ex	ex	ADP	S4|vgr2	AdpType=Prep	4	case	_	_
4	parte	pars	NOUN	C1|grn1|casF|gen2	Case=Abl|Gender=Fem|Number=Sing	1	advcl	_	_
5	primae	primus	ADJ	A1|grn1|casB|gen2	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|NumType=Ord	7	amod	_	_
6	rerum	res	NOUN	E1|grn1|casK|gen2	Case=Gen|Gender=Fem|Number=Plur	7	nmod	_	_
7	originis	origo	NOUN	C1|grn1|casB|gen2	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	SpaceAfter=No
8	:	:	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 discourse	color:blue
1	quod	qui	PRON	F1|grn1|casD|gen3	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	9	nsubj	_	_
2	quidem	quidem	PART	O4	_	6	discourse	_	_
3	secundum	secundum	ADP	S4	AdpType=Prep	4	case	_	_
4	carnem	caro	NOUN	C1|grn1|casD|gen2	Case=Acc|Gender=Fem|Number=Sing	9	obl	_	_
5	assumptam	assumo	VERB	L2|modM|tem4|grp1|casD|gen2	Aspect=Perf|Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	4	acl	_	_
6	certum	certus	ADJ	B1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
7	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
8	sibi	se	PRON	F1|grn1|casC|gen1	Case=Dat|Gender=Masc|Number=Sing|PronType=Prs|Reflex=Yes	9	obl:arg	_	_
9	conuenire	conuenio	VERB	M3|modH|tem1|vgr1	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	6	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


