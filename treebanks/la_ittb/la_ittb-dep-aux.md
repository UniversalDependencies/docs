---
layout: base
title:  'Statistics of aux in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="la_ittb-dep-aux-pass.html">aux:pass</a></tt>.

555 nodes (0%) are attached to their parents as `aux`.

425 instances of `aux` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.69189189189189.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (539; 97% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (10; 2% instances), <tt><a href="la_ittb-pos-AUX.html">AUX</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 aux	color:blue
1	quae	qui	PRON	F1|grn1|casA|gen2|vgr1	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	6	nsubj	_	_
2	tamen	tamen	ADV	O4	Form=Emp	6	advmod	_	_
3	in	in	ADP	S4	_	4	case	_	_
4	rebus	res	NOUN	E1|grn1|casO|gen2	Case=Abl|Gender=Fem|InflClass=IndEurE|Number=Plur	6	obl	_	_
5	diuinis	diuinus	ADJ	A1|grn1|casO|gen2|vgr1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Plur	4	amod	_	_
6	deficiens	deficio	VERB	L2|modD|tem1|grp1|casA|gen2	Aspect=Imp|Case=Nom|Gender=Fem|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	TraditionalMood=Participium|TraditionalTense=Praesens
7	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
8	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 aux	color:blue
1	propter	propter	ADP	S4	_	2	case	_	_
2	quod	qui	PRON	F1|grn1|casD|gen3	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	7	obl	_	_
3	et	et	CCONJ	O4	_	4	advmod:emph	_	_
4	aristoteles	aristoteles	PROPN	C1|grn1|casA|gen1|vgr1	Case=Nom|Gender=Masc|InflClass=IndEurI|NameType=Giv|Number=Sing	7	nsubj	_	_
5	congruo	congruus	ADJ	B1|grn1|casF|gen3	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	6	amod	_	_
6	exemplo	exemplum	NOUN	B1|grn1|casF|gen3	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	7	nmod	_	_
7	usus	usus	NOUN	D1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurU|Number=Sing	0	root	_	_
8	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
9	:	:	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 aux	color:blue
1	uidetur	uideo	VERB	K3|modJ|tem1|gen6|vgr1	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
2	igitur	igitur	PART	O4	_	1	discourse	_	_
3	impossibile	impossibilis	ADJ	C1|grn1|casA|gen3|vgr1	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing	1	xcomp	_	_
4	quod	quod	SCONJ	O4	_	8	mark	_	_
5	sit	sum	AUX	N3|modB|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
6	hominum	homo	NOUN	C1|grn1|casK|gen1	Case=Gen|Gender=Masc|InflClass=IndEurX|Number=Plur	7	nmod	_	_
7	resurrectio	resurrectio	NOUN	C1|grn1|casA|gen2	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	8	nsubj	_	_
8	futura	sum	AUX	N2|modD|tem3|grp1|casA|gen2	Aspect=Prosp|Case=Nom|Gender=Fem|InflClass=LatAnom|InflClass[nominal]=IndEurA|Number=Sing|VerbForm=Part	1	csubj:pass	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Futurum
9	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


