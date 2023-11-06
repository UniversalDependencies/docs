---
layout: base
title:  'Statistics of obl:tmod in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="la_ittb-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="la_ittb-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="la_ittb-dep-obl-lmod.html">obl:lmod</a></tt>.

2 nodes (0%) are attached to their parents as `obl:tmod`.

2 instances of `obl:tmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.5.

The following 2 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 10 obl:tmod	color:blue
1	et	et	CCONJ	O4	_	2	cc	_	_
2	manifestum	manifestus	ADJ	B1|grn1|casA|gen3	Case=Nom|Compound=Yes|Gender=Neut|InflClass=IndEurO|Number=Sing	0	root	_	_
3	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
4	quod	quod	SCONJ	O4	_	16	mark	_	_
5	corpus	corpus	NOUN	C1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	16	nsubj	_	_
6	christi	christus	ADJ	B1|grn1|casB|gen1	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Sing	5	nmod	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	5	punct	_	_
8	etiam	etiam	ADV	O4|vgr1	Compound=Yes	10	advmod:emph	_	_
9	post	post	ADP	S4	_	10	case	_	_
10	unionem	unio	NOUN	C1|grn1|casD|gen2	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	16	obl:tmod	_	SpaceAfter=No
11	,	,	PUNCT	Punc	_	10	punct	_	_
12	non	non	PART	O4	Polarity=Neg	16	advmod:neg	_	_
13	fuit	sum	AUX	N3|modA|tem4|gen6	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	16	cop	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
14	ipsa	ipse	DET	F1|grn1|casA|gen2	Case=Nom|Form=Emp|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	16	det	_	_
15	uerbi	uerbum	NOUN	B1|grn1|casB|gen3|vgr1	Case=Gen|Gender=Neut|InflClass=IndEurO|Number=Sing	16	nmod	_	_
16	diuinitas	diuinitas	NOUN	C1|grn1|casA|gen2|vgr1	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	2	csubj	_	SpaceAfter=No
17	:	:	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 obl:tmod	color:blue
1	et	et	CCONJ	O4	_	9	cc	_	_
2	quod	qui	PRON	F1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	9	nsubj	_	_
3	possibile	possibilis	ADJ	C1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing	2	acl:relcl	_	_
4	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
5	non	non	PART	O4	Polarity=Neg	6	advmod:neg	_	_
6	moueri	moueo	VERB	K3|modQ|tem1|vgr1	Aspect=Imp|InflClass=LatE|Tense=Pres|VerbForm=Inf|Voice=Pass	3	xcomp	_	SpaceAfter=No|TraditionalMood=Infinitivus|TraditionalTense=Praesens
7	,	,	PUNCT	Punc	_	2	punct	_	_
8	non	non	PART	O4	Polarity=Neg	9	advmod:neg	_	_
9	habet	habeo	VERB	K3|modA|tem1|gen6	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
10	de	de	ADP	S4	_	11	case	_	_
11	se	sui	PRON	F1|grn1|casF|gen3	Case=Abl|InflClass=LatAnom|Person=3|PronType=Prs|Reflex=Yes	9	obl	_	_
12	ut	ut	SCONJ	O4|vgr1	PronType=Rel	15	mark	_	_
13	perpetuo	perpetuus	ADJ	B1|grn1|casF|gen3	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	14	amod	_	_
14	tempore	tempus	NOUN	C1|grn1|casF|gen3	Case=Abl|Gender=Neut|InflClass=IndEurX|Number=Sing	15	obl:tmod	_	_
15	moueatur	moueo	VERB	K3|modK|tem1|gen6	Aspect=Imp|InflClass=LatE|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	9	advcl	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
16	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


