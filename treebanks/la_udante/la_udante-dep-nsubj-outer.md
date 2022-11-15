---
layout: base
title:  'Statistics of nsubj:outer in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-nsubj.html">nsubj</a></tt>.
There are also 2 other language-specific subtypes of `nsubj`: <tt><a href="la_udante-dep-nsubj-cleft.html">nsubj:cleft</a></tt>, <tt><a href="la_udante-dep-nsubj-pass.html">nsubj:pass</a></tt>.

28 nodes (0%) are attached to their parents as `nsubj:outer`.

28 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.

The following 11 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (7; 25% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (4; 14% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (3; 11% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (3; 11% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (3; 11% instances), <tt><a href="la_udante-pos-ADV.html">ADV</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (2; 7% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (2; 7% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nsubj:outer	color:blue
1	Prima	primus	ADJ	afs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing|NumType=Ord	2	amod	_	_
2	divisio	diuisio	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	8	nsubj:outer	_	_
3	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop:outer	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
4	,	,	PUNCT	Pu	_	8	punct	_	_
5	qua	qui	PRON	presfb	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	8	obl:lmod	_	_
6	totum	totus	DET	dpnsn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Tot	7	det	_	_
7	opus	opus	NOUN	sns3n	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	8	nsubj:pass	_	_
8	dividitur	diuido	VERB	vp3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
9	in	in	ADP	e	_	11	case	_	_
10	tres	tres	NUM	aufpa	Case=Acc|Gender=Fem|InflClass=IndEurI|Number=Plur|NumType=Card	11	nummod	_	_
11	canticas	cantica	NOUN	sfp1a	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Plur	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	Pu	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 20 nsubj:outer	color:blue
1	Declarata	declaro	VERB	vp1irp3	Aspect=Perf|Case=Nom|Gender=Neut|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	TraditionalMood=Participium|TraditionalTense=Perfectum
2	igitur	igitur	PART	r	_	1	discourse	_	_
3	duo	duo	NUM	aunpn	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Plur|NumType=Card	1	nsubj:pass	_	_
4	sunt	sum	AUX	va5ipp3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	aux:pass	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
5	;	;	PUNCT	Pu	_	18	punct	_	_
6	quorum	qui	PRON	prepng	Case=Gen|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Rel	7	nmod	_	_
7	unum	unus	DET	aunsn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	18	nsubj:outer	_	_
8	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	cop:outer	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
9	,	,	PUNCT	Pu	_	18	punct	_	_
10	quod	quod	SCONJ	cs	PronType=Rel	18	mark	_	_
11	quicunque	quicumque	DET	prismn	Case=Nom|Compound=Yes|Form=Emp|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	15	nsubj	_	_
12	bonum	bonus	ADJ	sns2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	15	obj	_	_
13	rei	res	NOUN	sfs5g	Case=Gen|Gender=Fem|InflClass=IndEurE|Number=Sing	12	nmod	_	_
14	publice	publicus	ADJ	afs1g	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	13	amod	_	_
15	intendit	intendo	VERB	va3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	18	csubj:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
16	finem	finis	NOUN	sms3a	Case=Acc|Gender=Masc|InflClass=IndEurI|Number=Sing	18	obj	_	_
17	iuris	ius	NOUN	sns3g	Case=Gen|Gender=Neut|InflClass=IndEurI|Number=Sing	16	nmod	_	_
18	intendit	intendo	VERB	va3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	dislocated:csubj	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
19	:	:	PUNCT	Pu	_	31	punct	_	_
20	aliud	alius	DET	dpnsn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Con	31	nsubj:outer	_	_
21	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	31	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
22	,	,	PUNCT	Pu	_	31	punct	_	_
23	quod	quod	SCONJ	cs	PronType=Rel	31	mark	_	_
24	romanus	romanus	ADJ	ams1n	Case=Nom|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Sing	25	amod	_	_
25	populus	populus	NOUN	sms2n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	31	nsubj	_	_
26	subiciendo	subicio	VERB	va3fgb	Aspect=Prosp|Case=Abl|Gender=Neut|InflClass=LatI2|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	31	advcl	_	TraditionalMood=Gerundium
27	sibi	sui	PRON	ppp3smd	Case=Dat|InflClass=LatAnom|Person=3|PronType=Prs|Reflex=Yes	26	obl:arg	_	_
28	orbem	orbis	NOUN	sms3a	Case=Acc|Gender=Masc|InflClass=IndEurX|Number=Sing	26	obj	_	_
29	bonum	bonus	ADJ	sns2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	31	obj	_	_
30	publicum	publicus	ADJ	ans1a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing	29	amod	_	_
31	intendit	intendo	VERB	va3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	18	conj	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
32	.	.	PUNCT	Pu	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 19 nsubj:outer	color:blue
1	Unde	unde	ADV	r	AdvType=Loc|PronType=Rel	2	advmod:lmod	_	_
2	fit	fio	VERB	vs5ips3	Aspect=Imp|InflClass=LatI2|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
3	quod	quod	SCONJ	cs	PronType=Rel	6	mark	_	_
4	unum	unus	DET	aunsn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	6	csubj:pass	_	_
5	esse	sum	AUX	va5fp	Aspect=Imp|VerbForm=Inf	4	cop	_	TraditionalTense=Praesens
6	videtur	uideo	VERB	vp2ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	2	csubj	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
7	esse	sum	AUX	va5fp	Aspect=Imp|VerbForm=Inf	8	cop	_	TraditionalTense=Praesens
8	radix	radix	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	6	xcomp	_	_
9	eius	is	PRON	ddesng	Case=Gen|Gender=Neut|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	8	nmod	_	_
10	quod	qui	PRON	presnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	13	nsubj:outer	_	_
11	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop:outer	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
12	esse	sum	AUX	va5fp	Aspect=Imp|VerbForm=Inf	13	cop	_	TraditionalTense=Praesens
13	bonum	bonus	ADJ	sns2n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	9	acl:relcl	_	SpaceAfter=No
14	,	,	PUNCT	Pu	_	16	punct	_	_
15	et	et	CCONJ	co	_	16	cc	_	_
16	multa	multus	DET	anp1n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Plur|NumType=Card|PronType=Ind	6	conj	_	_
17	esse	sum	AUX	va5fp	Aspect=Imp|VerbForm=Inf	16	cop	_	TraditionalTense=Praesens
18	eius	is	PRON	ddesng	Case=Gen|Gender=Neut|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	16	orphan	_	_
19	quod	qui	PRON	presnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	22	nsubj:outer	_	_
20	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	cop:outer	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
21	esse	sum	AUX	va5fp	Aspect=Imp|VerbForm=Inf	22	cop	_	TraditionalTense=Praesens
22	malum	malus	ADJ	sns2n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	18	acl:relcl	_	SpaceAfter=No
23	;	;	PUNCT	Pu	_	33	punct	_	_
24	qua	qui	PRON	presfb	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	25	det	_	_
25	re	res	NOUN	sfs5b	Case=Abl|Gender=Fem|InflClass=IndEurE|Number=Sing	33	obl	_	_
26	Pictagoras	pythagoras	PROPN	Sms1n	Case=Nom|Gender=Masc|InflClass=IndEurA|NameType=Giv|Number=Sing	33	nsubj	_	_
27	in	in	ADP	e	_	28	case	_	_
28	correlationibus	correlatio	NOUN	sfp3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Plur	33	obl	_	_
29	suis	suus	DET	dsfpb	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Plur|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	28	det	_	_
30	ex	ex	ADP	e	_	31	case	_	_
31	parte	pars	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	33	obl	_	_
32	boni	bonus	ADJ	sns2g	Case=Gen|Gender=Neut|InflClass=IndEurO|Number=Sing	31	nmod	_	_
33	ponebat	pono	VERB	va3iis3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	TraditionalMood=Indicativus|TraditionalTense=Imperfectum
34	unum	unus	DET	aunsa	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	33	obj	_	SpaceAfter=No
35	,	,	PUNCT	Pu	_	40	punct	_	_
36	ex	ex	ADP	e	_	37	case	_	_
37	parte	pars	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	40	orphan	_	_
38	vero	uero	ADV	r	_	40	discourse	_	_
39	mali	malus	ADJ	sns2g	Case=Gen|Gender=Neut|InflClass=IndEurO|Number=Sing	37	nmod	_	_
40	plurale	pluralis	ADJ	ans2a	Case=Acc|Gender=Neut|InflClass=IndEurI|Number=Sing	33	conj	_	SpaceAfter=No
41	,	,	PUNCT	Pu	_	43	punct	_	_
42	ut	ut	SCONJ	r	PronType=Rel	43	mark	_	_
43	patet	pateo	VERB	va2*ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	33	advcl:cmp	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
44	in	in	ADP	e	_	45	case	_	_
45	primo	primus	ADJ	ams1b	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing|NumType=Ord	43	obl	_	_
46	eorum	is	PRON	ddepmg	Case=Gen|Gender=Neut|InflClass=LatPron|Number=Plur|Person=3|PronType=Prs	45	nmod	_	_
47	que	qui	PRON	prepnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Rel	49	nsubj:outer	_	_
48	De	de	ADP	e	Proper=Yes	49	mark	_	_
49	simpliciter	simpliciter	ADV	r	_	46	acl:relcl	_	_
50	ente	sum	AUX	sns3b	Aspect=Imp|Case=Abl|Gender=Neut|InflClass=LatAnom|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part	49	cop	_	SpaceAfter=No|TraditionalTense=Praesens
51	.	.	PUNCT	Pu	_	2	punct	_	_

~~~


