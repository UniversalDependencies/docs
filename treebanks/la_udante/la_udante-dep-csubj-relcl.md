---
layout: base
title:  'Statistics of csubj:relcl in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `csubj:relcl`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-csubj.html">csubj</a></tt>.
There are also 4 other language-specific subtypes of `csubj`: <tt><a href="la_udante-dep-csubj-cleft.html">csubj:cleft</a></tt>, <tt><a href="la_udante-dep-csubj-outer.html">csubj:outer</a></tt>, <tt><a href="la_udante-dep-csubj-pass.html">csubj:pass</a></tt>, <tt><a href="la_udante-dep-csubj-reported.html">csubj:reported</a></tt>.

94 nodes (0%) are attached to their parents as `csubj:relcl`.

74 instances of `csubj:relcl` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.21276595744681.

The following 13 pairs of parts of speech are connected with `csubj:relcl`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (61; 65% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (6; 6% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (6; 6% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="la_udante-pos-ADV.html">ADV</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (3; 3% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 csubj:relcl	color:blue
1	Et	et	CCONJ	co	_	9	cc	_	_
2	quod	qui	PRON	presnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	5	nsubj:pass	_	_
3	per	per	ADP	e	_	4	case	_	_
4	duellum	duellum	NOUN	sns2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	5	obl	_	_
5	acquiritur	acquiro	VERB	vp3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	9	csubj:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
6	,	,	PUNCT	Pu	_	5	punct	_	_
7	de	de	ADP	e	_	8	case	_	_
8	iure	ius	NOUN	sns3b	Case=Abl|Gender=Neut|InflClass=IndEurI|Number=Sing	9	obl	_	_
9	acquiritur	acquiro	VERB	vp3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
10	.	.	PUNCT	Pu	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 6 csubj:relcl	color:blue
1	Vivit	uiuo	VERB	va3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
2	Dominus	dominus	NOUN	sms2n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing|Proper=Yes	1	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	Pu	_	4	punct	_	_
4	quia	quia	SCONJ	cs	PronType=Rel	12	mark	_	_
5	Qui	qui	PRON	presmn	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	6	nsubj	_	_
6	movit	moueo	VERB	va2irs3	Aspect=Perf|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	csubj:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
7	linguam	lingua	NOUN	sfs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	6	obj	_	_
8	in	in	ADP	e	_	9	case	_	_
9	asina	asina	NOUN	sfs1b	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	6	obl	_	_
10	Balaam	balaam	PROPN	Smsgi	Foreign=Yes|NameType=Giv	9	nmod	_	SpaceAfter=No
11	,	,	PUNCT	Pu	_	6	punct	_	_
12	Dominus	dominus	NOUN	sms2n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing|Proper=Yes	1	advcl	_	_
13	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
14	etiam	etiam	ADV	co	Compound=Yes	16	advmod:emph	_	_
15	modernorum	modernus	ADJ	amp1g	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Plur	16	amod	_	_
16	brutorum	brutum	NOUN	snp2g	Case=Gen|Gender=Neut|InflClass=IndEurO|Number=Plur	12	nmod	_	SpaceAfter=No
17	.	.	PUNCT	Pu	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 28 csubj:relcl	color:blue
1	Et	et	CCONJ	co	_	18	cc	_	_
2	quia	quia	SCONJ	cs	PronType=Rel	9	mark	_	_
3	per	per	ADP	e	_	5	case	_	_
4	notiora	notus	ADJ	anp1ac	Case=Acc|Degree=Cmp|Gender=Neut|InflClass=IndEurX|Number=Plur	5	amod	_	_
5	itinera	iter	NOUN	snp3a	Case=Acc|Gender=Neut|InflClass=IndEurX|Number=Plur	9	obl	_	_
6	salubrius	salubriter	ADV	r+	Degree=Cmp	9	advmod	_	_
7	brevius	breuiter	ADV	r+	Degree=Cmp	6	conj	_	_
8	que	que	CCONJ	co9	_	7	cc	_	_
9	transitur	transeo	VERB	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	18	advcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
10	,	,	PUNCT	Pu	_	9	punct	_	_
11	per	per	ADP	e	_	17	case	_	_
12	illud	ille	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	17	det	_	_
13	tantum	tantus	DET	r	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|NumType=Card|PronType=Dem	17	det	_	_
14	quod	qui	PRON	presnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	15	nsubj	_	_
15	nobis	ego	PRON	ppp1pmd	Case=Dat|InflClass=LatAnom|Number=Plur|Person=1|PronType=Prs	17	acl:relcl	_	_
16	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
17	ydioma	idioma	NOUN	sns3n	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	18	obl	_	_
18	pergamus	pergo	VERB	va3cpp1	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
19	,	,	PUNCT	Pu	_	21	punct	_	_
20	alia	alius	DET	dpnp1a	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Con	21	obj	_	_
21	desinentes	desino	VERB	va3pppmn	Aspect=Imp|Case=Nom|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Plur|VerbForm=Part|Voice=Act	18	advcl:pred	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Praesens
22	:	:	PUNCT	Pu	_	23	punct	_	_
23	nam	nam	PART	co	_	30	discourse	_	_
24	quod	qui	PRON	presnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	28	nsubj	_	_
25	in	in	ADP	e	_	26	case	_	_
26	uno	unus	DET	dpmsb	Case=Abl|Gender=Masc|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	28	obl	_	_
27	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
28	rationale	rationalis	ADJ	ans2n	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing	30	csubj:relcl	_	SpaceAfter=No
29	,	,	PUNCT	Pu	_	28	punct	_	_
30	videtur	uideo	VERB	vp2ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	18	conj	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
31	in	in	ADP	e	_	32	case	_	_
32	aliis	alius	DET	dpnpb	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Con	34	obl	_	_
33	esse	sum	AUX	va5fp	Aspect=Imp|InflClass=LatAnom|VerbForm=Inf	34	cop	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
34	causa	causa	NOUN	sfs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	30	xcomp	_	SpaceAfter=No
35	.	.	PUNCT	Pu	_	18	punct	_	_

~~~


