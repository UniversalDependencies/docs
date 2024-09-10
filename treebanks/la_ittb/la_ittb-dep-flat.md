---
layout: base
title:  'Statistics of flat in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `flat`

This relation is universal.

102 nodes (0%) are attached to their parents as `flat`.

102 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.02941176470588.

The following 6 pairs of parts of speech are connected with `flat`: <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (72; 71% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt> (13; 13% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (9; 9% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (3; 3% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	audi	audio	VERB	M3|modC|tem1|gen5	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Lilaflcat=LatI|SpaceAfter=No|TraditionalMood=Imperativus|TraditionalTense=Praesens
2	,	,	PUNCT	Punc	_	3	punct	_	_
3	israel	israel	PROPN	C1|grn1|casE|gen1	Foreign=Yes|Gender=Masc|NameType=Giv|Number=Sing	1	vocative	_	SpaceAfter=No|OrigLang=hbo
4	,	,	PUNCT	Punc	_	8	punct	_	_
5	dominus	dominus	NOUN	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	8	nsubj	_	_
6	deus	deus	NOUN	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	5	flat	_	_
7	tuus	tuus	DET	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing|Number[psor]=Sing|Person[psor]=2|Poss=Yes|PronType=Prs	6	det	_	_
8	deus	deus	NOUN	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	1	ccomp	_	_
9	unus	unus	DET	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	8	det	_	_
10	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
11	;	;	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 flat	color:blue
1	gratia	gratia	NOUN	A1|grn1|casA|gen2|vgr1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	0	root	_	_
2	uobis	uos	PRON	F1|grn1|casL|gen1|vgr1	Case=Dat|InflClass=LatAnom|Number=Plur|Person=2|PronType=Prs	1	nmod	_	_
3	et	et	CCONJ	O4	_	4	cc	_	_
4	pax	pax	NOUN	C1|grn1|casA|gen2	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	1	conj	_	_
5	a	ab	ADP	S4|vgr1	_	6	case	_	_
6	deo	deus	NOUN	F1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	1	conj	_	_
7	patre	pater	NOUN	C1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=IndEurX|Number=Sing	6	nmod	_	_
8	nostro	noster	DET	B1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	7	det	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	11	punct	_	_
10	et	et	CCONJ	O4	_	11	cc	_	_
11	domino	dominus	NOUN	B1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	6	conj	_	_
12	iesu	iesus	PROPN	F1|grn1|casF|gen1|vgr1	Case=Abl|Gender=Masc|InflClass=IndEurU|NameType=Giv|Number=Sing	11	flat	_	_
13	christo	christus	ADJ	B1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	12	amod	_	SpaceAfter=No
14	;	;	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat	color:blue
1	gregorius	gregorius	PROPN	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|NameType=Giv|Number=Sing	4	nsubj	_	_
2	autem	autem	PART	O4	_	4	discourse	_	_
3	nyssenus	nyssenus	ADJ	B1|grn1|casA|gen1|vgr1	Case=Nom|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Sing|Proper=Yes	1	flat	_	_
4	attribuit	attribuo	VERB	L3|modA|tem1|gen6	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
5	eam	is	PRON	F1|grn1|casD|gen2	Case=Acc|Gender=Fem|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	4	obj	_	_
6	dinarcho	dinarchus	PROPN	B1|grn1|casC|gen1	Case=Dat|Gender=Masc|InflClass=IndEurO|NameType=Giv|Number=Sing	4	obl:arg	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


