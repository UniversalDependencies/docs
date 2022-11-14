---
layout: base
title:  'Statistics of dislocated:ccomp in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `dislocated:ccomp`

This relation is a language-specific subtype of .
There are also 4 other language-specific subtypes of `dislocated`: <tt><a href="la_ittb-dep-dislocated-advcl.html">dislocated:advcl</a></tt>, <tt><a href="la_ittb-dep-dislocated-csubj.html">dislocated:csubj</a></tt>, <tt><a href="la_ittb-dep-dislocated-nsubj.html">dislocated:nsubj</a></tt>, <tt><a href="la_ittb-dep-dislocated-obl.html">dislocated:obl</a></tt>.

1 nodes (0%) are attached to their parents as `dislocated:ccomp`.

1 instances of `dislocated:ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 1 pairs of parts of speech are connected with `dislocated:ccomp`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 18 dislocated:ccomp	color:blue
1	et	et	CCONJ	O4	_	20	cc	_	_
2	quia	quia	SCONJ	O4	_	14	mark	_	_
3	abundantia	abundantia	NOUN	A1|grn1|casA|gen2|vgr1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	14	nsubj	_	_
4	diuinae	diuinus	ADJ	A1|grn1|casB|gen2	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	5	amod	_	_
5	misericordiae	misericordia	NOUN	A1|grn1|casB|gen2|vgr1	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	3	nmod	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	8	punct	_	_
7	et	et	CCONJ	O4	_	8	cc	_	_
8	efficacia	efficacia	NOUN	A1|grn1|casA|gen2	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	3	conj	_	_
9	gratiae	gratia	NOUN	A1|grn1|casB|gen2|vgr1	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	8	nmod	_	_
10	christi	christus	ADJ	B1|grn1|casB|gen1	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Sing	9	nmod	_	SpaceAfter=No
11	,	,	PUNCT	Punc	_	3	punct	_	_
12	hoc	hic	DET	F1|grn1|casA|gen3	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	14	obj	_	_
13	non	non	PART	O4	Polarity=Neg	14	advmod:neg	_	_
14	patitur	patior	VERB	L3|modJ|tem1|gen6	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	20	advcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
15	ut	ut	SCONJ	O4|vgr1	PronType=Rel	18	mark	_	_
16	absque	absque	SCONJ	S4|comH	_	17	case	_	_
17	remedio	remedium	NOUN	B1|grn1|casF|gen3	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	18	obl	_	_
18	dimittatur	dimitto	VERB	L3|modK|tem1|gen6	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	14	dislocated:ccomp	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
19	,	,	PUNCT	Punc	_	14	punct	_	_
20	institutum	instituo	VERB	L2|modM|tem4|grp1|casA|gen3	Aspect=Perf|Case=Nom|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	TraditionalMood=Participium|TraditionalTense=Perfectum
21	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	20	aux:pass	_	_
22	aliud	alius	DET	F1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Con	24	det	_	_
23	sacramentale	sacramentalis	ADJ	C1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing	24	amod	_	_
24	remedium	remedium	NOUN	B1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	20	nsubj:pass	_	SpaceAfter=No
25	,	,	PUNCT	Punc	_	28	punct	_	_
26	quo	qui	PRON	F1|grn1|casF|gen3	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	28	obl:agent	_	_
27	peccata	peccatum	NOUN	B1|grn1|casJ|gen3	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Plur	28	nsubj:pass	_	_
28	purgentur	purgo	VERB	J3|modK|tem1|gen9	Aspect=Imp|InflClass=LatA|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	24	acl:relcl	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
29	.	.	PUNCT	Punc	_	20	punct	_	_

~~~


