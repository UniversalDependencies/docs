---
layout: base
title:  'Statistics of appos in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `appos`

This relation is universal.

91 nodes (0%) are attached to their parents as `appos`.

91 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.64835164835165.

The following 11 pairs of parts of speech are connected with `appos`: <tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (33; 36% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (29; 32% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (11; 12% instances), <tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (5; 5% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt> (4; 4% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-X.html">X</a></tt> (2; 2% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 appos	color:blue
1	Que	qui	PRON	dpfsn	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	3	det	_	_
2	ultima	ultimus	ADJ	afs1ns	Case=Nom|Degree=Abs|Gender=Fem|InflClass=IndEurA|Number=Sing	3	amod	_	_
3	uxor	uxor	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	5	nsubj	_	_
4	de	de	ADP	e	AdpType=Prep	5	case	_	_
5	Ytalia	italia	PROPN	Sfs1b	Case=Abl|Gender=Fem|InflClass=IndEurA|NameType=Geo|Number=Sing	0	root	_	_
6	fuit	sum	AUX	va5irs3	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	cop	_	SpaceAfter=No
7	,	,	PUNCT	Pu	_	9	punct	_	_
8	Europe	europa	PROPN	Sfs1g	Case=Gen|Gender=Fem|InflClass=IndEurA|NameType=Geo|Number=Sing	9	nmod	_	_
9	regione	regio	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	5	appos	_	_
10	nobilissima	nobilis	ADJ	afs2bs	Case=Abl|Degree=Abs|Gender=Fem|InflClass=IndEurA|Number=Sing	9	amod	_	SpaceAfter=No
11	.	.	PUNCT	Pu	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 appos	color:blue
1	Si	si	SCONJ	cs	_	4	mark	_	_
2	te	tu	PRON	ppp2sma	Case=Acc|InflClass=LatAnom|Number=Sing|Person=2|PronType=Prs	4	obj	_	_
3	fama	fama	NOUN	sfs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	4	nsubj	_	_
4	iuvat	iuuo	VERB	va1ips3	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	advcl	_	SpaceAfter=No
5	,	,	PUNCT	Pu	_	4	punct	_	_
6	parvo	paruus	ADJ	ams1b	Case=Abl|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	8	amod	_	_
7	te	tu	PRON	ppp2sma	Case=Acc|InflClass=LatAnom|Number=Sing|Person=2|PronType=Prs	9	nsubj:pass	_	_
8	limite	limes	NOUN	sms3b	Case=Abl|Gender=Masc|InflClass=IndEurX|Number=Sing	9	obl:agent	_	_
9	septum	saepio	VERB	vp4prsma	Aspect=Perf|Case=Acc|Degree=Pos|Gender=Masc|InflClass=LatI|InflClass[nominal]=IndEurO|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	11	acl	_	_
10	non	non	PART	r	Polarity=Neg	11	advmod:neg	_	_
11	contentus	contentus	ADJ	ams1n	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing|VerbForm=Part	0	root	_	_
12	eris	sum	AUX	va5ifs2	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin	11	cop	_	SpaceAfter=No
13	,	,	PUNCT	Pu	_	17	punct	_	_
14	nec	neque	CCONJ	co	Polarity=Neg	17	cc	_	_
15	vulgo	uulgus	NOUN	sns2b	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	17	obl:agent	_	_
16	iudice	iudex	NOUN	sms3b	Case=Abl|Gender=Masc|InflClass=IndEurX|Number=Sing	15	appos	_	_
17	tolli	tollo	VERB	vp3fp	Aspect=Imp|InflClass=LatX|InflClass[nominal]=Ind|Tense=Pres|VerbForm=Inf|Voice=Pass	9	conj	_	SpaceAfter=No
18	.	.	PUNCT	Pu	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 appos	color:blue
1	Melibeus	meliboeus	PROPN	Sms2n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	2	nsubj	_	_
2	ait	aio	VERB	va5-ips3	Aspect=Imp|InflClass=LatI2|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	:	:	PUNCT	Pu	_	13	punct	_	_
4	«	«	PUNCT	Pu	_	13	punct	_	SpaceAfter=No
5	Tu	tu	PRON	ppp2smn	Case=Nom|InflClass=LatAnom|Number=Sing|Person=2|PronType=Prs	13	nsubj	_	_
6	tempora	tempus	NOUN	snp3a	Case=Acc|Gender=Neut|InflClass=IndEurX|Number=Plur	13	obj	_	_
7	lauro	laurus	NOUN	sfs2b	Case=Abl|Gender=Fem|InflClass=IndEurO|Number=Sing	9	obl	_	_
8	semper	semper	ADV	r	_	13	advmod	_	_
9	inornata	inornatus	ADJ	anp1a	Case=Acc|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Plur|Polarity=Neg	6	amod	_	_
10	per	per	ADP	e	AdpType=Prep	11	case	_	_
11	pascua	pascuum	NOUN	snp2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	12	obl	_	_
12	pastor	pastor	NOUN	sms3n	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	5	appos	_	_
13	habebis	habeo	VERB	va2ifs2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	2	parataxis:rep	_	SpaceAfter=No
14	?	?	PUNCT	Pu	_	13	punct	_	SpaceAfter=No
15	»	»	PUNCT	Pu	_	13	punct	_	SpaceAfter=No
16	.	.	PUNCT	Pu	_	2	punct	_	_

~~~


