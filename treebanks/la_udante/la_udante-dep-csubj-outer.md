---
layout: base
title:  'Statistics of csubj:outer in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `csubj:outer`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-csubj.html">csubj</a></tt>.
There are also 4 other language-specific subtypes of `csubj`: <tt><a href="la_udante-dep-csubj-cleft.html">csubj:cleft</a></tt>, <tt><a href="la_udante-dep-csubj-pass.html">csubj:pass</a></tt>, <tt><a href="la_udante-dep-csubj-relcl.html">csubj:relcl</a></tt>, <tt><a href="la_udante-dep-csubj-reported.html">csubj:reported</a></tt>.

2 nodes (0%) are attached to their parents as `csubj:outer`.

2 instances of `csubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 1 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 csubj:outer	color:blue
1	Cum	cum	SCONJ	cs	PronType=Rel	6	mark	_	_
2	ergo	ergo	ADV	co	AdvType=Loc	16	discourse	_	_
3	scindere	scindo	VERB	va3fp	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	6	csubj:outer	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
4	Imperium	imperium	NOUN	sns2a	Case=Acc|Gender=Neut|InflClass=IndEurO|NameType=Com|Number=Sing|Proper=Yes	3	obj	_	_
5	esset	sum	AUX	va5cis3	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	TraditionalMood=Subiunctivus|TraditionalTense=Imperfectum
6	destruere	destruo	VERB	va3fp	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	16	advcl	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
7	ipsum	ipse	DET	ddesna	Case=Acc|Form=Emp|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	6	obj	_	SpaceAfter=No
8	,	,	PUNCT	Pu	_	9	punct	_	_
9	consistente	consisto	VERB	va3ppsnb	Aspect=Imp|Case=Abl|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	6	advcl:abs	_	TraditionalMood=Participium|TraditionalTense=Praesens
10	Imperio	imperium	NOUN	sns2b	Case=Abl|Gender=Neut|InflClass=IndEurO|NameType=Com|Number=Sing|Proper=Yes	9	nsubj	_	_
11	in	in	ADP	e	_	12	case	_	_
12	unitate	unitas	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	9	obl	_	_
13	Monarchie	monarchia	NOUN	sfs1g	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	12	nmod	_	_
14	universalis	uniuersalis	ADJ	afs2g	Case=Gen|Gender=Fem|InflClass=IndEurI|Number=Sing	13	amod	_	SpaceAfter=No
15	,	,	PUNCT	Pu	_	9	punct	_	_
16	manifestum	manifestus	ADJ	ans1n	Case=Nom|Compound=Yes|Gender=Neut|InflClass=IndEurO|Number=Sing	0	root	_	_
17	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
18	quod	quod	SCONJ	cs	PronType=Rel	25	mark	_	_
19	Imperii	imperium	NOUN	sns2g	Case=Gen|Gender=Neut|InflClass=IndEurO|NameType=Com|Number=Sing|Proper=Yes	20	nmod	_	_
20	auctoritate	auctoritas	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	21	obl:arg	_	_
21	fungenti	fungor	VERB	vd3ppsmd	Aspect=Imp|Case=Dat|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	25	obl:arg	_	TraditionalMood=Participium|TraditionalTense=Praesens
22	scindere	scindo	VERB	va3fp	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	25	csubj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
23	Imperium	imperium	NOUN	sns2a	Case=Acc|Gender=Neut|InflClass=IndEurO|NameType=Com|Number=Sing|Proper=Yes	22	obj	_	_
24	non	non	PART	r	Polarity=Neg	25	advmod:neg	_	_
25	licet	licet	VERB	va2*ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	16	csubj	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
26	.	.	PUNCT	Pu	_	16	punct	_	_

~~~


