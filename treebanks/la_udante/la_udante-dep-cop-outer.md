---
layout: base
title:  'Statistics of cop:outer in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `cop:outer`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-cop.html">cop</a></tt>.

30 nodes (0%) are attached to their parents as `cop:outer`.

28 instances of `cop:outer` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.6.

The following 6 pairs of parts of speech are connected with `cop:outer`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-AUX.html">AUX</a></tt> (16; 53% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-AUX.html">AUX</a></tt> (5; 17% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-AUX.html">AUX</a></tt> (5; 17% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-AUX.html">AUX</a></tt> (2; 7% instances), <tt><a href="la_udante-pos-ADV.html">ADV</a></tt>-<tt><a href="la_udante-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-AUX.html">AUX</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 cop:outer	color:blue
1	Prima	primus	ADJ	afs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing|NumType=Ord	2	amod	_	_
2	divisio	diuisio	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	8	nsubj:outer	_	_
3	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop:outer	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
4	,	,	PUNCT	Pu	_	3	punct	_	_
5	qua	qui	PRON	presfb	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	8	obl:lmod	_	_
6	totum	totus	DET	dpnsn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Tot	7	det	_	_
7	opus	opus	NOUN	sns3n	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	8	nsubj:pass	_	_
8	dividitur	diuido	VERB	vp3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
9	in	in	ADP	e	_	11	case	_	_
10	tres	tres	NUM	aufpa	Case=Acc|Gender=Fem|InflClass=IndEurI|Number=Plur|NumForm=Word|NumType=Card	11	nummod	_	_
11	canticas	cantica	NOUN	sfp1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Plur	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	Pu	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 4 cop:outer	color:blue
1	Itaque	itaque	PART	co	Form=Emp|PronType=Dem	13	discourse	_	_
2	prima	primus	ADJ	afs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing|NumType=Ord	3	amod	_	_
3	questio	quaestio	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	13	nsubj:outer	_	_
4	sit	sum	AUX	va5cps3	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop:outer	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
5	:	:	PUNCT	Pu	_	4	punct	_	_
6	utrum	utrum	SCONJ	r	PronType=Con	13	mark	_	_
7	ad	ad	ADP	e	_	8	mark	_	_
8	bene	bene	ADV	r	_	13	advcl	_	_
9	esse	sum	AUX	va5fp	Aspect=Imp|Tense=Pres|VerbForm=Inf	8	cop	_	TraditionalTense=Praesens
10	mundi	mundus	NOUN	sms2g	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Sing	8	nmod	_	_
11	Monarchia	monarchia	NOUN	sfs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	13	nsubj	_	_
12	temporalis	temporalis	ADJ	afs2n	Case=Nom|Gender=Fem|InflClass=IndEurI|Number=Sing	11	amod	_	_
13	necessaria	necessarius	ADJ	afs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	0	root	_	_
14	sit	sum	AUX	va5cps3	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
15	.	.	PUNCT	Pu	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 3 cop:outer	color:blue
1	Tertia	tertius	ADJ	aufs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing|NumType=Ord	2	amod	_	_
2	ratio	ratio	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	12	nsubj:outer	_	_
3	erat	sum	AUX	va5iis3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	12	cop:outer	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Imperfectum
4	:	:	PUNCT	Pu	_	3	punct	_	_
5	Omnis	omnis	DET	afs2n	Case=Nom|Gender=Fem|InflClass=IndEurI|Number=Sing|PronType=Tot	6	det	_	_
6	oppinio	opinio	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	12	nsubj	_	_
7	que	qui	PRON	presfn	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	8	nsubj	_	_
8	contradicit	contradico	VERB	va3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
9	sensui	sensus	NOUN	sms4d	Case=Dat|Gender=Masc|InflClass=IndEurU|Number=Sing	8	obl:arg	_	_
10	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
11	mala	malus	ADJ	afs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	12	amod	_	_
12	oppinio	opinio	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	0	root	_	SpaceAfter=No
13	:	:	PUNCT	Pu	_	21	punct	_	_
14	oppinari	opinor	VERB	vd1fp	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Pass	21	csubj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
15	aquam	aqua	NOUN	sfs1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	18	nsubj	_	_
16	non	non	PART	r	Polarity=Neg	18	advmod:neg	_	_
17	esse	sum	AUX	va5fp	Aspect=Imp|Tense=Pres|VerbForm=Inf	18	cop	_	TraditionalTense=Praesens
18	altiorem	altus	ADJ	afs1ac	Case=Acc|Degree=Cmp|Gender=Fem|InflClass=IndEurA|Number=Sing|VerbForm=Part	14	ccomp	_	_
19	terra	terra	NOUN	sfs1b	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	18	obl:cmp	_	_
20	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	aux	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
21	contradicere	contradico	VERB	va3fp	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	12	conj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
22	sensui	sensus	NOUN	sms4d	Case=Dat|Gender=Masc|InflClass=IndEurU|Number=Sing	21	obl:arg	_	SpaceAfter=No
23	;	;	PUNCT	Pu	_	27	punct	_	_
24	ergo	ergo	ADV	co	AdvType=Loc	27	discourse	_	_
25	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	27	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
26	mala	malus	ADJ	afs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	27	amod	_	_
27	oppinio	opinio	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	12	conj	_	SpaceAfter=No
28	.	.	PUNCT	Pu	_	12	punct	_	_

~~~


