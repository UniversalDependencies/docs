---
layout: base
title:  'Statistics of aux in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="la_ittb-dep-aux-pass.html">aux:pass</a></tt>.

19 nodes (0%) are attached to their parents as `aux`.

11 instances of `aux` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.47368421052632.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (13; 68% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (3; 16% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (1; 5% instances), <tt><a href="la_ittb-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (1; 5% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	1	_	NUM	G5	NumForm=Digit	8	obl	_	_
2	utrum	utrum	ADV	O4|stRL	_	8	advmod	_	_
3	christus	christus	ADJ	B1|grn1|casA|gen1|stNP	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	8	nsubj	_	_
4	in	in	ADP	S4|stRL	AdpType=Prep	5	case	_	_
5	forma	forma	NOUN	A1|grn1|casF|gen2|stAN	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	8	obl	_	_
6	hominis	homo	NOUN	C1|grn1|casB|gen1|stRS	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	5	nmod	_	_
7	sit	sum	AUX	N3|modB|tem1|gen6|stAV	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	_	_
8	judicaturus	iudico	VERB	J2	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Tense=Fut|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
9	;	;	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 aux	color:blue
1	propter	propter	ADP	S4|stRL	AdpType=Prep	2	case	_	_
2	quod	qui	PRON	F1|grn1|casD|gen3|stRL	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|PronType=Rel	7	obl	_	_
3	et	et	CCONJ	O4|stRL	_	4	advmod:emph	_	_
4	aristoteles	aristoteles	PROPN	C1|grn1|casA|gen1|vgr1|stNP	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	7	nsubj	_	_
5	congruo	congruus	ADJ	B1|grn1|casF|gen3|stAN	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing	6	amod	_	_
6	exemplo	exemplum	NOUN	B1|grn1|casF|gen3|stAC	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing	7	obj	_	_
7	usus	usus	NOUN	D1|grn1|casA|gen1|stAN	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
8	est	sum	AUX	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	SpaceAfter=No
9	:	:	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 20 aux	color:blue
1	nulla	nullus	PRON	F1|grn1|casA|gen2|stPV	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|PronType=Ind	4	nmod	_	_
2	autem	autem	CCONJ	O4|stRL	_	8	cc	_	_
3	talis	talis	PRON	C1|grn1|casA|gen2|stPV	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|PronType=Ind	4	nmod	_	_
4	affectio	affectio	NOUN	C1|grn1|casA|gen2|stAM	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	8	nsubj	_	_
5	in	in	ADP	S4|stRL	AdpType=Prep	6	case	_	_
6	deo	deus	PROPN	F1|grn1|casF|gen1|stNP	Case=Abl|Degree=Pos|Gender=Masc|Number=Sing	7	obl	_	_
7	esse	sum	VERB	N3|modH|tem1|stAV	Tense=Pres|VerbForm=Inf|Voice=Act	8	xcomp	_	_
8	potest	possum	VERB	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod|Voice=Act	0	root	_	SpaceAfter=No
9	:	:	PUNCT	Punc	_	11	punct	_	_
10	cum	cum	SCONJ	S4|vgr1|stRL	_	11	mark	_	_
11	desit	desum	VERB	N3|modB|tem1|gen6|stAV	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	advcl	_	_
12	sibi	sui	PRON	F1|grn1|casC|gen1|stPV	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|PronType=Prs|Reflex=Yes	11	obj	_	_
13	sensitiva	sensitivus	ADJ	A1|grn1|casA|gen2|stAC	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	14	amod	_	_
14	cognitio	cognitio	NOUN	C1|grn1|casA|gen2|vgr1|stAC	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	11	nsubj	_	SpaceAfter=No
15	,	,	PUNCT	Punc	_	21	punct	_	_
16	ut	ut	SCONJ	O4|vgr1|stRL	_	21	mark	_	_
17	per	per	ADP	S4|stRL	AdpType=Prep	19	mark	_	_
18	supra	supra	ADP	S4|stRL	AdpType=Prep	19	advmod	_	_
19	dicta	dico	VERB	N2|modM|tem4|grp1|casM|gen3|stAE	Aspect=Perf|Case=Acc|Degree=Pos|Gender=Neut|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	21	advcl	_	_
20	est	sum	AUX	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	21	aux	_	_
21	manifestum	manifestus	ADJ	B1|grn1|casA|gen3|stAC	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	11	obl	_	SpaceAfter=No
22	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


