---
layout: base
title:  'Statistics of appos in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `appos`

This relation is universal.

29 nodes (0%) are attached to their parents as `appos`.

29 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.13793103448276.

The following 10 pairs of parts of speech are connected with `appos`: <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (12; 41% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (6; 21% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (3; 10% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt> (2; 7% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 appos	color:blue
1	deus	deus	NOUN	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	0	root	_	_
2	magnus	magnus	ADJ	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	1	amod	_	_
3	dominus	dominus	NOUN	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	1	appos	_	_
4	et	et	CCONJ	O4	_	5	cc	_	_
5	rex	rex	NOUN	C1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	3	conj	_	_
6	magnus	magnus	ADJ	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	5	amod	_	_
7	super	super	ADP	S4	_	9	case	_	_
8	omnes	omnis	DET	C1|grn1|casM|gen1	Case=Acc|Gender=Masc|InflClass=IndEurI|Number=Plur|PronType=Tot	9	det	_	_
9	deos	deus	NOUN	F1|grn1|casM|gen1	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Plur	5	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 appos	color:blue
1	et	et	CCONJ	O4	_	10	cc	_	_
2	ioannes	iohannes	PROPN	C1|grn1|casA|gen1|vgr3	Case=Nom|Gender=Masc|InflClass=IndEurI|NameType=Giv|Number=Sing	10	nsubj	_	_
3	apostolus	apostolus	NOUN	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	2	appos	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	2	punct	_	_
5	in	in	ADP	S4	_	6	case	_	_
6	principio	principium	NOUN	B1|grn1|casF|gen3	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	10	obl	_	_
7	suae	suus	DET	A1|grn1|casB|gen2|vgr1	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	8	det	_	_
8	epistolae	epistola	NOUN	A1|grn1|casB|gen2|vgr1	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	6	nmod	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	6	punct	_	_
10	dicit	dico	VERB	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
11	:	:	PUNCT	Punc	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 appos	color:blue
1	bene	bene	ADV	O4	_	4	advmod	_	_
2	spiritus	spiritus	NOUN	D1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurU|Number=Sing	4	nsubj:pass	_	_
3	sanctus	sanctus	ADJ	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	2	amod	_	_
4	locutus	loquor	VERB	L2|modM|tem4|grp1|casA|gen1|vgr1	Aspect=Perf|Case=Nom|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	TraditionalMood=Participium|TraditionalTense=Perfectum
5	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
6	per	per	ADP	S4	_	7	case	_	_
7	isaiam	isaias	ADJ	A1|grn1|casD|gen1|vgr1	Case=Acc|Gender=Masc|InflClass=IndEurA|Number=Sing	9	obl	_	_
8	prophetam	propheta	NOUN	A1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurA|Number=Sing	7	appos	_	_
9	dicens	dico	VERB	N2|modD|tem1|grp1|casA|gen1	Aspect=Imp|Case=Nom|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	4	advcl	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Praesens
10	:	:	PUNCT	Punc	_	4	punct	_	_

~~~


