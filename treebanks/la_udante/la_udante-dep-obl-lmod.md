---
layout: base
title:  'Statistics of obl:lmod in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `obl:lmod`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="la_udante-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="la_udante-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="la_udante-dep-obl-cmpr.html">obl:cmpr</a></tt>, <tt><a href="la_udante-dep-obl-tmod.html">obl:tmod</a></tt>.

1 nodes (0%) are attached to their parents as `obl:lmod`.

1 instances of `obl:lmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.

The following 1 pairs of parts of speech are connected with `obl:lmod`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 19 obl:lmod	color:blue
1	Et	et	CCONJ	co	_	2	cc	_	_
2	hoc	hic	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	4	obj	_	_
3	etiam	etiam	ADV	co	Compound=Yes	4	advmod:emph	_	_
4	dicebat	dico	VERB	va3iis3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	premonens	praemoneo	VERB	va2ppsmn	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatE|InflClass[nominal]=IndEurI|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	4	xcomp	_	_
6	eos	is	PRON	ddepma	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Plur|Person=3|PronType=Prs	5	obj	_	_
7	pressuram	pressura	NOUN	sfs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing|VerbForm=Part	8	nsubj	_	_
8	futuram	sum	AUX	v5pfsfa	Aspect=Perf|Case=Acc|Degree=Pos|Gender=Fem|InflClass=LatAnom|InflClass[nominal]=IndEurA|Number=Sing|Tense=Fut|VerbForm=Part	5	ccomp	_	_
9	et	et	CCONJ	co	_	11	cc	_	_
10	despectum	despectus	NOUN	sms4a	Case=Acc|Gender=Masc|InflClass=IndEurU|Number=Sing|VerbForm=Sup	11	nsubj	_	_
11	futurum	sum	AUX	va5pfsma	Aspect=Perf|Case=Acc|Degree=Pos|Gender=Masc|InflClass=LatAnom|InflClass[nominal]=IndEurO|Number=Sing|Tense=Fut|VerbForm=Part	8	conj	_	_
12	erga	erga	ADP	e	AdpType=Prep	13	case	_	_
13	eos	is	PRON	ddepma	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Plur|Person=3|PronType=Prs	8	obl	_	SpaceAfter=No
14	,	,	PUNCT	Pu	_	16	punct	_	_
15	quasi	quasi	SCONJ	cs	Compound=Yes|PronType=Rel	16	mark	_	_
16	diceret	dico	VERB	va3cis3	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	advcl	_	SpaceAfter=No
17	:	:	PUNCT	Pu	_	16	punct	_	_
18	“	“	PUNCT	Pu	_	24	punct	_	SpaceAfter=No
19	Quousque	quousque	ADV	r	AdvType=Loc|Compound=Yes|Form=Emp|PronType=Rel	24	obl:lmod	_	_
20	fui	sum	AUX	va5irs1	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	21	cop	_	_
21	vobis	tu	PRON	ppp2pmb	Case=Abl|InflClass=LatAnom|Number=Plur|Person=2|PronType=Prs	19	acl:relcl	_	_
22	cum	cum	ADP	9	AdpType=Post|Clitic=Yes	21	case	_	_
23	,	,	PUNCT	Pu	_	24	punct	_	_
24	recepti	recipio	VERB	vp3i+p2	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatI2|InflClass[nominal]=IndEurO|Number=Plur|Tense=Pqp|VerbForm=Part|Voice=Pass	16	parataxis:rep	_	_
25	eratis	sum	AUX	va5iip2	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=2|Tense=Past|VerbForm=Fin	24	aux:pass	_	SpaceAfter=No
26	;	;	PUNCT	Pu	_	28	punct	_	_
27	nunc	nunc	ADV	r	_	28	advmod	_	_
28	fugabimini	fugo	VERB	vp1ifp2	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Plur|Person=2|Tense=Fut|VerbForm=Fin|Voice=Pass	24	conj	_	SpaceAfter=No
29	.	.	PUNCT	Pu	_	4	punct	_	_

~~~


