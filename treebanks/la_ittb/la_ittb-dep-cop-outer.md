---
layout: base
title:  'Statistics of cop:outer in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `cop:outer`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-cop.html">cop</a></tt>.

47 nodes (0%) are attached to their parents as `cop:outer`.

47 instances of `cop:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.17021276595745.

The following 6 pairs of parts of speech are connected with `cop:outer`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (27; 57% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (11; 23% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (4; 9% instances), <tt><a href="la_ittb-pos-AUX.html">AUX</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (3; 6% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 cop:outer	color:blue
1	primum	primus	ADJ	B1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing|NumType=Ord	8	nsubj:outer	_	_
2	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop:outer	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
3	,	,	PUNCT	Punc	_	2	punct	_	_
4	quod	quod	SCONJ	O4	_	8	mark	_	_
5	intellectus	intellectus	NOUN	D1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurU|Number=Sing	8	nsubj	_	_
6	noster	noster	DET	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	5	det	_	_
7	simpliciter	simpliciter	ADV	C1|grn1|casG	_	8	advmod	_	_
8	finitus	finio	VERB	M2|modM|tem4|grp1|casA|gen1	Aspect=Perf|Case=Nom|Gender=Masc|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	Lilaflcat=LatI|TraditionalMood=Participium|TraditionalTense=Perfectum
9	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:pass	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
10	:	:	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 cop:outer	color:blue
1	homo	homo	NOUN	C1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	7	nsubj:outer	_	_
2	enim	enim	PART	O4	_	7	discourse	_	_
3	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop:outer	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
4	quod	qui	PRON	F1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	7	nsubj	_	_
5	uere	uere	ADV	B1|grn1|casG|vgr1	_	7	advmod	_	_
6	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
7	animal	animal	NOUN	C1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing	0	root	_	SpaceAfter=No
8	;	;	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 cop:outer	color:blue
1	quod	qui	PRON	F1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	7	nsubj:outer	_	_
2	autem	autem	PART	O4	_	7	discourse	_	_
3	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop:outer	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
4	in	in	ADP	S4	_	6	case	_	_
5	omnibus	omnis	DET	C1|grn1|casO|gen1	Case=Abl|Gender=Masc|InflClass=IndEurI|Number=Plur|PronType=Tot	6	det	_	_
6	effectibus	effectus	NOUN	D1|grn1|casO|gen1	Case=Abl|Gender=Masc|InflClass=IndEurU|Number=Plur	7	obl	_	_
7	perfectissimum	perfectus	ADJ	B1|grn3|casA|gen3	Case=Nom|Degree=Abs|Gender=Neut|InflClass=IndEurO|Number=Sing	0	root	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	9	punct	_	_
9	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
10	esse	esse	NOUN	G1|casA|gen3	_	7	nsubj	_	SpaceAfter=No
11	:	:	PUNCT	Punc	_	7	punct	_	_

~~~


