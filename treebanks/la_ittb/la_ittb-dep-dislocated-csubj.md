---
layout: base
title:  'Statistics of dislocated:csubj in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `dislocated:csubj`

This relation is a language-specific subtype of .
There are also 4 other language-specific subtypes of `dislocated`: <tt><a href="la_ittb-dep-dislocated-advcl.html">dislocated:advcl</a></tt>, <tt><a href="la_ittb-dep-dislocated-ccomp.html">dislocated:ccomp</a></tt>, <tt><a href="la_ittb-dep-dislocated-nsubj.html">dislocated:nsubj</a></tt>, <tt><a href="la_ittb-dep-dislocated-obl.html">dislocated:obl</a></tt>.

3 nodes (0%) are attached to their parents as `dislocated:csubj`.

2 instances of `dislocated:csubj` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 14.3333333333333.

The following 2 pairs of parts of speech are connected with `dislocated:csubj`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (2; 67% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 11 dislocated:csubj	color:blue
1	ex	ex	ADP	S4|vgr2	_	2	case	_	_
2	quo	qui	PRON	F1|grn1|casF|gen3	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	4	obl	_	_
3	euidenter	euidenter	ADV	C1|grn1|casG	_	4	advmod	_	_
4	colligitur	colligo	VERB	L3|modJ|tem1|gen6	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
5	,	,	PUNCT	Punc	_	11	punct	_	_
6	quaecumque	quicumque	DET	F1|grn1|casJ|gen3|vgr2	Case=Nom|Compound=Yes|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Rel	7	det	_	_
7	argumenta	argumentum	NOUN	B1|grn1|casJ|gen3	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Plur	11	nsubj:pass	_	_
8	contra	contra	ADP	S4	_	10	case	_	_
9	fidei	fides	NOUN	E1|grn1|casB|gen2	Case=Gen|Gender=Fem|InflClass=IndEurE|Number=Sing	10	nmod	_	_
10	documenta	documentum	NOUN	B1|grn1|casM|gen3	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	11	obl	_	_
11	ponantur	pono	VERB	L3|modK|tem1|gen9	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	24	dislocated:csubj	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
12	,	,	PUNCT	Punc	_	11	punct	_	_
13	haec	hic	DET	F1|grn1|casD|gen3|vgr1	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	24	nsubj	_	_
14	ex	ex	ADP	S4|vgr2	_	15	case	_	_
15	principiis	principium	NOUN	B1|grn1|casO|gen3|vgr1	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Plur	24	obl	_	_
16	primis	primus	ADJ	B1|grn1|casO|gen3	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Plur|NumType=Ord	15	amod	_	_
17	naturae	natura	NOUN	A1|grn1|casC|gen2|vgr1	Case=Dat|Gender=Fem|InflClass=IndEurA|Number=Sing	18	obl:arg	_	_
18	inditis	indo	VERB	L2|modM|tem4|grp1|casO|gen3	Aspect=Perf|Case=Abl|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	15	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
19	per	per	ADP	S4	_	20	case	_	_
20	se	sui	PRON	F1|grn1|casM|gen3	Case=Acc|InflClass=LatAnom|Person=3|PronType=Prs|Reflex=Yes	21	obl	_	_
21	notis	nosco	VERB	L2|modM|tem4|grp1|casO|gen3	Aspect=Perf|Case=Abl|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	15	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
22	non	non	PART	O4	Polarity=Neg	23	advmod:neg	_	_
23	recte	recte	ADV	B1|grn1|casG	_	24	advmod	_	_
24	procedere	procedo	VERB	L3|modH|tem1	Aspect=Imp|InflClass=LatX|VerbForm=Inf|Voice=Act	4	csubj:relcl	_	SpaceAfter=No|TraditionalMood=Infinitivus|TraditionalTense=Praesens
25	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 21 dislocated:csubj	color:blue
1	hoc	hic	DET	F1|grn1|casD|gen3	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	5	obj	_	_
2	etiam	etiam	ADV	O4|vgr1	Compound=Yes	5	advmod:emph	_	_
3	mediatoris	mediator	NOUN	C1|grn1|casB|gen1	Case=Gen|Gender=Masc|InflClass=IndEurX|Number=Sing	4	nmod	_	_
4	officium	officium	NOUN	B1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	5	nsubj	_	_
5	requirebat	requiro	VERB	L3|modA|tem2|gen6	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Imperfectum
6	quod	quod	SCONJ	O4	_	21	mark	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	10	punct	_	_
8	cum	cum	SCONJ	S4|vgr1	PronType=Rel	10	mark	_	_
9	communem	communis	ADJ	C1|grn1|casD|gen2	Case=Acc|Gender=Fem|InflClass=IndEurI|Number=Sing	10	xcomp	_	_
10	haberet	habeo	VERB	K3|modB|tem2|gen6	Aspect=Imp|InflClass=LatE|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	21	advcl	_	TraditionalMood=Subiunctivus|TraditionalTense=Imperfectum
11	nobis	ego	PRON	F1|grn1|casL|gen1|comC	Case=Abl|InflClass=LatAnom|Number=Plur|Person=1|PronType=Prs	9	obl:arg	_	_
12	cum	cum	ADP	F1|grn1|casL|gen1|comC	_	11	case	_	_
13	passibilem	passibilis	ADJ	C1|grn1|casD|gen2	Case=Acc|Gender=Fem|InflClass=IndEurI|Number=Sing	14	amod	_	_
14	carnem	caro	NOUN	C1|grn1|casD|gen2	Case=Acc|Gender=Fem|InflClass=IndEurI|Number=Sing	10	obj	_	_
15	et	et	CCONJ	O4	_	16	cc	_	_
16	mortalem	mortalis	ADJ	C1|grn1|casD|gen2	Case=Acc|Gender=Fem|InflClass=IndEurI|Number=Sing	13	conj	_	SpaceAfter=No
17	,	,	PUNCT	Punc	_	10	punct	_	_
18	cum	cum	ADP	S4|vgr1	_	19	case	_	_
19	deo	deus	NOUN	F1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	21	orphan	_	_
20	uero	uero	ADV	B1|grn1|casG|vgr1	_	21	discourse	_	_
21	uirtutem	uirtus	NOUN	C1|grn1|casD|gen2|vgr1	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	5	dislocated:csubj	_	_
22	et	et	CCONJ	O4	_	23	cc	_	_
23	gloriam	gloria	NOUN	A1|grn1|casD|gen2	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	21	conj	_	SpaceAfter=No
24	:	:	PUNCT	Punc	_	5	punct	_	_

~~~


