---
layout: base
title:  'Statistics of vocative in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `vocative`

This relation is universal.

30 nodes (0%) are attached to their parents as `vocative`.

25 instances of `vocative` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.43333333333333.

The following 5 pairs of parts of speech are connected with `vocative`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (22; 73% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (3; 10% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (3; 10% instances), <tt><a href="la_ittb-pos-AUX.html">AUX</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 vocative	color:blue
1	tu	tu	PRON	F1|grn1|casA|gen1	Case=Nom|InflClass=LatAnom|Number=Sing|PronType=Prs	8	nsubj	_	_
2	autem	autem	CCONJ	O4	_	8	cc	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	2	punct	_	_
4	domine	dominus	NOUN	B1|grn1|casE|gen1|comH	Case=Voc|Gender=Masc|InflClass=IndEurO|Number=Sing	8	vocative	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	4	punct	_	_
6	in	in	ADP	S4	AdpType=Prep	7	case	_	_
7	aeternum	aeternus	ADJ	B1|grn1|casD|gen3|vgr1	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	8	obl	_	_
8	permanes	permaneo	VERB	K3|modA|tem1|gen5	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 vocative	color:blue
1	deus	deus	NOUN	F1|grn1|casE|gen1	Case=Voc|Gender=Masc|InflClass=IndEurO|Number=Sing	4	vocative	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	1	punct	_	_
3	quis	quis	PRON	F1|grn1|casA|gen1|varA	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Ind,Int	4	nsubj	_	_
4	similis	similis	ADJ	C1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing	0	root	_	_
5	erit	sum	AUX	N3|modA|tem3|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	4	cop	_	_
6	tibi	tu	PRON	F1|grn1|casC|gen1	Case=Dat|InflClass=LatAnom|Number=Sing|PronType=Prs	4	nmod	_	SpaceAfter=No
7	?	?	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 vocative	color:blue
1	beati	beatus	NOUN	B1|grn1|casB|gen1	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Sing	0	root	_	_
2	qui	qui	PRON	F1|grn1|casJ|gen1	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Rel	3	nsubj	_	_
3	habitant	habito	VERB	J3|modA|tem1|gen9	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl:relcl	_	_
4	in	in	ADP	S4	AdpType=Prep	5	case	_	_
5	domo	domus	NOUN	F1|grn1|casF|gen2	Case=Abl|Gender=Fem|InflClass=IndEurU|Number=Sing	3	obl	_	_
6	tua	tuus	DET	A1|grn1|casF|gen2	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing|Number[psor]=Sing|Person[psor]=2|Poss=Yes|PronType=Prs	5	det	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	8	punct	_	_
8	domine	dominus	NOUN	B1|grn1|casE|gen1|comH	Case=Voc|Gender=Masc|InflClass=IndEurO|Number=Sing	1	vocative	_	SpaceAfter=No
9	:	:	PUNCT	Punc	_	1	punct	_	_

~~~


