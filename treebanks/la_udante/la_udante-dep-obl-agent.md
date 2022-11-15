---
layout: base
title:  'Statistics of obl:agent in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="la_udante-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="la_udante-dep-obl-cmp.html">obl:cmp</a></tt>, <tt><a href="la_udante-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="la_udante-dep-obl-tmod.html">obl:tmod</a></tt>.

201 nodes (0%) are attached to their parents as `obl:agent`.

130 instances of `obl:agent` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.24875621890547.

The following 13 pairs of parts of speech are connected with `obl:agent`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (135; 67% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (14; 7% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (14; 7% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (10; 5% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt> (9; 4% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl:agent	color:blue
1	An	an	PART	co	PartType=Int	7	discourse	_	_
2	septi	sepio	VERB	vp4prpmv	Aspect=Perf|Case=Voc|Gender=Masc|InflClass=LatI|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	7	advcl:pred	_	TraditionalMood=Participium|TraditionalTense=Perfectum
3	vallo	uallum	NOUN	sns2b	Case=Abl|Degree=Dim|Gender=Neut|InflClass=IndEurO|Number=Sing	2	obl:agent	_	_
4	ridiculo	ridiculus	ADJ	ams1b	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	3	amod	_	_
5	cuiquam	quisquam	DET	dinsfd	Case=Dat|Compound=Yes|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Ind	6	det	_	_
6	defensioni	defensio	NOUN	sfs3d	Case=Dat|Gender=Fem|InflClass=IndEurX|Number=Sing	7	obl:arg	_	_
7	confiditis	confido	VERB	vs3ipp2	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
8	?	?	PUNCT	Pu	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 obl:agent	color:blue
1	Unde	unde	ADV	r	AdvType=Loc|PronType=Rel	2	advmod:lmod	_	_
2	sequitur	sequor	VERB	vd3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
3	humanum	humanus	ADJ	ans1a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	4	amod	_	_
4	genus	genus	NOUN	sns3a	Case=Acc|Gender=Neut|InflClass=IndEurX|Number=Sing	7	nsubj	_	_
5	optime	bene	ADV	rs	Degree=Abs	7	advmod	_	_
6	se	sui	PRON	ppp3sna	Case=Acc|InflClass=LatAnom|Person=3|PronType=Prs|Reflex=Yes	7	obj	_	_
7	habere	habeo	VERB	va2fp	Aspect=Imp|VerbForm=Vnoun|Voice=Act	2	csubj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
8	cum	cum	SCONJ	cs	PronType=Rel	11	mark	_	_
9	ab	ab	ADP	e	_	10	case	_	_
10	uno	unus	DET	aumsb	Case=Abl|Gender=Masc|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	11	obl:agent	_	_
11	regitur	rego	VERB	vp3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	7	advcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
12	;	;	PUNCT	Pu	_	19	punct	_	_
13	et	et	CCONJ	co	_	19	cc	_	_
14	sic	sic	ADV	r	PronType=Dem	19	advmod	_	_
15	ad	ad	ADP	e	_	16	case	_	_
16	bene	bene	ADV	r	_	19	obl	_	_
17	esse	sum	AUX	va5fp	Aspect=Imp|VerbForm=Inf	16	cop	_	TraditionalTense=Praesens
18	mundi	mundus	NOUN	sms2g	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Sing	16	nmod	_	_
19	necesse	necesse	ADJ	din	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing	2	conj	_	_
20	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
21	Monarchiam	monarchia	NOUN	sfs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	19	csubj	_	_
22	esse	sum	AUX	va5fp	Aspect=Imp|VerbForm=Inf	21	cop	_	SpaceAfter=No|TraditionalTense=Praesens
23	.	.	PUNCT	Pu	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl:agent	color:blue
1	Sunt	sum	AUX	va5ipp3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
2	forsan	forsan	ADV	r	Compound=Yes	6	advmod	_	_
3	mea	meus	DET	dsnpn	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	4	det	_	_
4	regna	regnum	NOUN	snp2n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Plur	6	nsubj:pass	_	_
5	tibi	tu	PRON	ppp2smd	Case=Dat|InflClass=LatAnom|Number=Sing|Person=2|PronType=Prs	6	obl:agent	_	_
6	despecta	despicio	VERB	anp1n	Aspect=Perf|Case=Nom|Gender=Neut|InflClass=LatI2|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
7	?	?	PUNCT	Pu	_	6	punct	_	_

~~~


