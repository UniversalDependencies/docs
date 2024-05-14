---
layout: base
title:  'Statistics of obl:cmp in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `obl:cmp`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="la_ittb-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="la_ittb-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="la_ittb-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="la_ittb-dep-obl-tmod.html">obl:tmod</a></tt>.

1 nodes (0%) are attached to their parents as `obl:cmp`.

1 instances of `obl:cmp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `obl:cmp`: <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 obl:cmp	color:blue
1	alias	alias	ADV	F1|grn1|casG	_	2	advmod	_	_
2	sequeretur	sequor	VERB	L3|modK|tem2|gen6	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Subiunctivus|TraditionalTense=Imperfectum
3	quod	quod	SCONJ	O4	_	4	mark	_	_
4	essent	sum	AUX	N3|modB|tem2|gen9	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	2	csubj	_	TraditionalMood=Subiunctivus|TraditionalTense=Imperfectum
5	infinitae	infinitus	ADJ	A1|grn1|casJ|gen2	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Plur	6	amod	_	_
6	relationes	relatio	NOUN	C1|grn1|casJ|gen2	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Plur	4	nsubj	_	_
7	actu	actus	NOUN	D1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=IndEurU|Number=Sing	4	obl	_	_
8	in	in	ADP	S4	_	9	case	_	_
9	eodem	idem	DET	F1|grn1|casF|gen3	Case=Abl|Form=Emp|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	4	obl	_	SpaceAfter=No
10	,	,	PUNCT	Punc	_	17	punct	_	_
11	cum	cum	SCONJ	S4|vgr1	PronType=Rel	17	mark	_	_
12	numeri	numerus	NOUN	B1|grn1|casJ|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur	17	nsubj	_	_
13	infiniti	infinitus	ADJ	B1|grn1|casJ|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur	12	amod	_	_
14	in	in	ADP	S4	_	15	case	_	_
15	potentia	potentia	NOUN	A1|grn1|casF|gen2|vgr1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	17	obl	_	_
16	sint	sum	AUX	N3|modB|tem1|gen9	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	17	cop	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
17	maiores	magnus	ADJ	C1|grn2|casJ|gen1|vgr2	Case=Nom|Degree=Cmp|Gender=Masc|InflClass=IndEurX|Number=Plur	2	advcl	_	_
18	binario	binarius	ADJ	B1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	17	obl:cmp	_	SpaceAfter=No
19	,	,	PUNCT	Punc	_	24	punct	_	_
20	quibus	qui	PRON	F1|grn1|casO|gen1	Case=Abl|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Rel	24	obl	_	_
21	omnibus	omnis	DET	C1|grn1|casO|gen1	Case=Abl|Gender=Masc|InflClass=IndEurI|Number=Plur|PronType=Tot	20	det	_	_
22	ipse	ipse	DET	F1|grn1|casA|gen1	Case=Nom|Form=Emp|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	24	nsubj	_	_
23	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	24	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
24	prior	prior	ADJ	C1|grn2|casA|gen1	Case=Nom|Degree=Cmp|Gender=Masc|InflClass=IndEurX|Number=Sing|NumType=Ord	12	acl:relcl	_	SpaceAfter=No
25	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


