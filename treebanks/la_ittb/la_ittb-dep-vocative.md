---
layout: base
title:  'Statistics of vocative in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `vocative`

This relation is universal.

30 nodes (0%) are attached to their parents as `vocative`.

25 instances of `vocative` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.3.

The following 5 pairs of parts of speech are connected with `vocative`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (19; 63% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (4; 13% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (3; 10% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt> (3; 10% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 vocative	color:blue
1	tu	tu	PRON	F1|grn1|casA|gen1	Case=Nom|InflClass=LatAnom|Number=Sing|Person=2|PronType=Prs	8	nsubj	_	_
2	autem	autem	PART	O4	_	8	discourse	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	2	punct	_	_
4	domine	dominus	NOUN	B1|grn1|casE|gen1|comH	Case=Voc|Gender=Masc|InflClass=IndEurO|Number=Sing	8	vocative	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	4	punct	_	_
6	in	in	ADP	S4	_	7	case	_	_
7	aeternum	aeternus	ADJ	B1|grn1|casD|gen3|vgr1	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	8	obl	_	_
8	permanes	permaneo	VERB	K3|modA|tem1|gen5	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
9	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 vocative	color:blue
1	non	non	PART	O4	Polarity=Neg	6	advmod:neg	_	_
2	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
3	similis	similis	ADJ	C1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing	6	nsubj	_	_
4	tibi	tu	PRON	F1|grn1|casC|gen1	Case=Dat|InflClass=LatAnom|Number=Sing|Person=2|PronType=Prs	3	nmod	_	_
5	in	in	ADP	S4	_	6	case	_	_
6	diis	deus	NOUN	F1|grn1|casO|gen1|vgr2	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Plur	0	root	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	8	punct	_	_
8	domine	dominus	NOUN	B1|grn1|casE|gen1|comH	Case=Voc|Gender=Masc|InflClass=IndEurO|Number=Sing	6	vocative	_	SpaceAfter=No
9	;	;	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 vocative	color:blue
1	deus	deus	NOUN	F1|grn1|casE|gen1	Case=Voc|Gender=Masc|InflClass=IndEurO|Number=Sing	4	vocative	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	1	punct	_	_
3	quis	quis	PRON	F1|grn1|casA|gen1|varA	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Int	4	nsubj	_	_
4	similis	similis	ADJ	C1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing	0	root	_	_
5	erit	sum	AUX	N3|modA|tem3|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	cop	_	TraditionalMood=Indicativus|TraditionalTense=Futurum
6	tibi	tu	PRON	F1|grn1|casC|gen1	Case=Dat|InflClass=LatAnom|Number=Sing|Person=2|PronType=Prs	4	nmod	_	SpaceAfter=No
7	?	?	PUNCT	Punc	_	4	punct	_	_

~~~


