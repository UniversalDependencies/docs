---
layout: base
title:  'Statistics of obl:agent in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="la_ittb-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="la_ittb-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="la_ittb-dep-obl-tmod.html">obl:tmod</a></tt>.

1540 nodes (0%) are attached to their parents as `obl:agent`.

908 instances of `obl:agent` (59%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.11363636363636.

The following 5 pairs of parts of speech are connected with `obl:agent`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1022; 66% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (240; 16% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (193; 13% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (69; 4% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt> (16; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:agent	color:blue
1	ponam	pono	VERB	L3|modA|tem3|gen4	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Futurum
2	uniuersos	uniuersus	DET	B1|grn1|casM|gen1	Case=Acc|Compound=Yes|Gender=Masc|InflClass=IndEurO|Number=Plur|PronType=Tot	3	det	_	_
3	filios	filius	NOUN	B1|grn1|casM|gen1	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Plur	1	obj	_	_
4	tuos	tuus	DET	B1|grn1|casM|gen1	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Plur|Number[psor]=Sing|Person[psor]=2|Poss=Yes|PronType=Prs	3	det	_	_
5	doctos	doceo	VERB	K2|modM|tem4|grp1|casM|gen1	Aspect=Perf|Case=Acc|Gender=Masc|InflClass=LatE|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	1	xcomp	_	TraditionalMood=Participium|TraditionalTense=Perfectum
6	a	ab	ADP	S4|vgr1	_	7	case	_	_
7	domino	dominus	NOUN	B1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	5	obl:agent	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 obl:agent	color:blue
1	hoc	hic	DET	F1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	10	nsubj:pass	_	_
2	quod	qui	PRON	F1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	5	nsubj:pass	_	_
3	a	ab	ADP	S4|vgr1	_	4	case	_	_
4	seipso	seipsum	PRON	F1|grn1|casF|gen3	Case=Abl|Compound=Yes|Gender=Neut|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	6	obl:agent	_	_
5	ponitur	pono	VERB	L3|modJ|tem1|gen6	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	1	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
6	moueri	moueo	VERB	K3|modQ|tem1|vgr1	Aspect=Imp|InflClass=LatE|Tense=Pres|VerbForm=Inf|Voice=Pass	5	xcomp	_	SpaceAfter=No|TraditionalMood=Infinitivus|TraditionalTense=Praesens
7	,	,	PUNCT	Punc	_	1	punct	_	_
8	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:pass	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
9	primo	primo	ADV	B1|grn1|casG	Degree=Abs	10	advmod	_	_
10	motum	moueo	VERB	K2|modM|tem4|grp1|casA|gen3	Aspect=Perf|Case=Nom|Gender=Neut|InflClass=LatE|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
11	.	.	PUNCT	Punc	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obl:agent	color:blue
1	omne	omnis	DET	C1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing|PronType=Tot	7	nsubj:pass	_	_
2	quod	qui	PRON	F1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	3	nsubj:pass	_	_
3	mouetur	moueo	VERB	K3|modJ|tem1|gen6|vgr1	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	1	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
4	,	,	PUNCT	Punc	_	1	punct	_	_
5	ab	ab	ADP	S4|vgr2	_	6	case	_	_
6	alio	alius	DET	F1|grn1|casF|gen3	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Con	7	obl:agent	_	_
7	mouetur	moueo	VERB	K3|modJ|tem1|gen6|vgr1	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
8	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


