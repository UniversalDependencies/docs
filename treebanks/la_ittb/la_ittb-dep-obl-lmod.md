---
layout: base
title:  'Statistics of obl:lmod in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `obl:lmod`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="la_ittb-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="la_ittb-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="la_ittb-dep-obl-tmod.html">obl:tmod</a></tt>.

6 nodes (0%) are attached to their parents as `obl:lmod`.

5 instances of `obl:lmod` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.66666666666667.

The following 3 pairs of parts of speech are connected with `obl:lmod`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (4; 67% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 17% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 obl:lmod	color:blue
1	unde	unde	ADV	O4	AdvType=Loc|PronType=Rel	12	advmod:lmod	_	_
2	ab	ab	ADP	S4|vgr2	_	4	case	_	_
3	uniuersali	uniuersalis	ADJ	C1|grn1|casF|gen2|vgr1	Case=Abl|Gender=Fem|InflClass=IndEurI|Number=Sing	4	amod	_	_
4	causa	causa	NOUN	A1|grn1|casF|gen2|vgr1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	11	obl:lmod	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	7	punct	_	_
6	quae	qui	PRON	F1|grn1|casA|gen2|vgr1	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	7	nsubj	_	_
7	deus	deus	NOUN	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	4	acl:relcl	_	_
8	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
9	,	,	PUNCT	Punc	_	4	punct	_	_
10	ordo	ordo	NOUN	C1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	11	nsubj	_	_
11	proueniens	prouenio	VERB	M2|modD|tem1|grp1|casA|gen1|vgr1	Aspect=Imp|Case=Nom|Gender=Masc|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	12	advcl:pred	_	Lilaflcat=LatI|TraditionalMood=Participium|TraditionalTense=Praesens
12	necesse	necesse	ADJ	G1	_	0	root	_	_
13	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
14	quod	quod	SCONJ	O4	_	16	mark	_	_
15	omnia	omnis	DET	C1|grn1|casM|gen3	Case=Acc|Gender=Neut|InflClass=IndEurI|Number=Plur|PronType=Tot	16	obj	_	_
16	complectatur	complector	VERB	L3|modK|tem1|gen6	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	12	csubj	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
17	.	.	PUNCT	Punc	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl:lmod	color:blue
1	ante	ante	ADP	S4	_	2	case	_	_
2	hominem	homo	NOUN	C1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurX|Number=Sing	4	obl:lmod	_	_
3	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
4	uita	uita	NOUN	A1|grn1|casA|gen2|vgr1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	0	root	_	_
5	et	et	CCONJ	O4	_	6	cc	_	_
6	mors	mors	NOUN	C1|grn1|casA|gen2	Case=Nom|Gender=Fem|InflClass=IndEurI|Number=Sing	4	conj	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	8	punct	_	_
8	bonum	bonum	NOUN	B1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	4	conj	_	_
9	et	et	CCONJ	O4	_	10	cc	_	_
10	malum	malum	NOUN	B1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	8	conj	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 obl:lmod	color:blue
1	quod	quod	SCONJ	O4	_	3	mark	_	_
2	scilicet	scilicet	CCONJ	O4	Compound=Yes	3	cc	_	_
3	oporteat	oportet	VERB	K3|modB|tem1|gen6|vgr1	Aspect=Imp|InflClass=LatE|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
4	uel	uel	CCONJ	O4|vgr1	_	6	cc	_	_
5	statim	statim	ADV	O4	_	6	advmod	_	_
6	deuenire	deuenio	VERB	M3|modH|tem1|vgr1	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	3	csubj	_	Lilaflcat=LatI|TraditionalMood=Infinitivus|TraditionalTense=Praesens
7	ad	ad	ADP	S4	_	9	case	_	_
8	primum	primus	ADJ	B1|grn1|casD|gen3	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing|NumType=Ord	9	amod	_	_
9	mouens	moueo	VERB	K2|modD|tem1|grp1|casD|gen3|vgr1	Aspect=Imp|Case=Acc|Gender=Neut|InflClass=LatE|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	6	obl:lmod	_	TraditionalMood=Participium|TraditionalTense=Praesens
10	immobile	immobilis	ADJ	C1|grn1|casD|gen3	Case=Acc|Gender=Neut|InflClass=IndEurI|Number=Sing	9	amod	_	_
11	separatum	separo	VERB	J2|modM|tem4|grp1|casD|gen3	Aspect=Perf|Case=Acc|Gender=Neut|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	9	acl	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
12	,	,	PUNCT	Punc	_	13	punct	_	_
13	uel	uel	CCONJ	O4|vgr1	_	15	cc	_	_
14	ad	ad	ADP	S4	_	15	case	_	_
15	mouens	moueo	VERB	K2|modD|tem1|grp1|casD|gen3|vgr1	Aspect=Imp|Case=Acc|Gender=Neut|InflClass=LatE|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	6	conj	_	TraditionalMood=Participium|TraditionalTense=Praesens
16	seipsum	seipsum	PRON	F1|grn1|casD|gen3	Case=Acc|Compound=Yes|Gender=Neut|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	15	obj	_	SpaceAfter=No
17	,	,	PUNCT	Punc	_	21	punct	_	_
18	ex	ex	ADP	S4|vgr2	_	19	case	_	_
19	quo	qui	PRON	F1|grn1|casF|gen3	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	21	obl	_	_
20	iterum	iterum	ADV	O4	AdvType=Tim	21	advmod:tmod	_	_
21	deuenitur	deuenio	VERB	M3|modJ|tem1|gen6	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	15	acl:relcl	_	Lilaflcat=LatI|TraditionalMood=Indicativus|TraditionalTense=Praesens
22	ad	ad	ADP	S4	_	23	case	_	_
23	mouens	moueo	VERB	K2|modD|tem1|grp1|casD|gen3|vgr1	Aspect=Imp|Case=Acc|Gender=Neut|InflClass=LatE|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	21	obl	_	TraditionalMood=Participium|TraditionalTense=Praesens
24	primum	primus	ADJ	B1|grn1|casD|gen3	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing|NumType=Ord	23	amod	_	_
25	immobile	immobilis	ADJ	C1|grn1|casD|gen3	Case=Acc|Gender=Neut|InflClass=IndEurI|Number=Sing	23	amod	_	_
26	separatum	separo	VERB	J2|modM|tem4|grp1|casD|gen3	Aspect=Perf|Case=Acc|Gender=Neut|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	23	acl	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
27	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


