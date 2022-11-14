---
layout: base
title:  'Statistics of appos in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `appos`

This relation is universal.

82 nodes (0%) are attached to their parents as `appos`.

82 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.97560975609756.

The following 10 pairs of parts of speech are connected with `appos`: <tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (34; 41% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (22; 27% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (11; 13% instances), <tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (4; 5% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (3; 4% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-X.html">X</a></tt> (2; 2% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 appos	color:blue
1	Que	qui	PRON	dpfsn	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	3	det	_	_
2	ultima	ultimus	ADJ	afs1ns	Case=Nom|Degree=Abs|Gender=Fem|InflClass=IndEurA|Number=Sing	3	amod	_	_
3	uxor	uxor	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	5	nsubj	_	_
4	de	de	ADP	e	_	5	case	_	_
5	Ytalia	italia	PROPN	Sfs1b	Case=Abl|Gender=Fem|InflClass=IndEurA|NameType=Geo|Number=Sing	0	root	_	_
6	fuit	sum	AUX	va5irs3	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
7	,	,	PUNCT	Pu	_	9	punct	_	_
8	Europe	europa	PROPN	Sfs1g	Case=Gen|Gender=Fem|InflClass=IndEurA|NameType=Geo|Number=Sing	9	nmod	_	_
9	regione	regio	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	5	appos	_	_
10	nobilissima	nobilis	ADJ	afs2bs	Case=Abl|Degree=Abs|Gender=Fem|InflClass=IndEurA|Number=Sing	9	amod	_	SpaceAfter=No
11	.	.	PUNCT	Pu	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 appos	color:blue
1	A	a	INTJ	i	_	3	discourse	_	SpaceAfter=No
2	,	,	PUNCT	Pu	_	1	punct	_	_
3	mater	mater	NOUN	sfs3v	Case=Voc|Gender=Fem|InflClass=IndEurX|Number=Sing	0	root	_	_
4	piissima	pius	ADJ	afs1vs	Case=Voc|Degree=Abs|Gender=Fem|InflClass=IndEurA|Number=Sing	3	amod	_	SpaceAfter=No
5	,	,	PUNCT	Pu	_	6	punct	_	_
6	sponsa	sponsa	NOUN	sfs1v	Case=Voc|Gender=Fem|InflClass=IndEurA|Number=Sing|VerbForm=Part	3	appos	_	_
7	Christi	christus	PROPN	Sms2g	Case=Gen|Gender=Masc|InflClass=IndEurO|NameType=Sur|Number=Sing	6	nmod	_	SpaceAfter=No
8	,	,	PUNCT	Pu	_	14	punct	_	_
9	que	qui	PRON	presfn	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	14	nsubj	_	_
10	in	in	ADP	e	_	11	case	_	_
11	aqua	aqua	NOUN	sfs1b	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	14	obl	_	_
12	et	et	CCONJ	co	_	13	cc	_	_
13	Spiritu	spiritus	NOUN	sms4b	Case=Abl|Gender=Masc|InflClass=IndEurU|Number=Sing|Proper=Yes	11	conj	_	_
14	generas	genero	VERB	va1ips2	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
15	tibi	tu	PRON	ppp2sfd	Case=Dat|InflClass=LatAnom|Number=Sing|Person=2|PronType=Prs	14	obl	_	_
16	filios	filius	NOUN	smp2a	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Plur	14	obj	_	_
17	ad	ad	ADP	e	_	18	case	_	_
18	ruborem	rubor	NOUN	sms3a	Case=Acc|Gender=Masc|InflClass=IndEurX|Number=Sing	14	obl	_	SpaceAfter=No
19	!	!	PUNCT	Pu	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 appos	color:blue
1	Melibeus	meliboeus	PROPN	Sms2n	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	2	nsubj	_	_
2	ait	aio	VERB	va5-ips3	Aspect=Imp|InflClass=LatI2|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
3	:	:	PUNCT	Pu	_	13	punct	_	_
4	«	«	PUNCT	Pu	_	13	punct	_	SpaceAfter=No
5	Tu	tu	PRON	ppp2smn	Case=Nom|InflClass=LatAnom|Number=Sing|Person=2|PronType=Prs	13	nsubj	_	_
6	tempora	tempus	NOUN	snp3a	Case=Acc|Gender=Neut|InflClass=IndEurX|Number=Plur	13	obj	_	_
7	lauro	laurus	NOUN	sfs2b	Case=Abl|Gender=Fem|InflClass=IndEurO|Number=Sing	9	obl	_	_
8	semper	semper	ADV	r	AdvType=Tim	13	advmod:tmod	_	_
9	inornata	inornatus	ADJ	anp1a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur|Polarity=Neg	6	amod	_	_
10	per	per	ADP	e	_	11	case	_	_
11	pascua	pascuum	NOUN	snp2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	12	obl	_	_
12	pastor	pastor	NOUN	sms3n	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	5	appos	_	_
13	habebis	habeo	VERB	va2ifs2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	2	ccomp:reported	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Futurum
14	?	?	PUNCT	Pu	_	13	punct	_	SpaceAfter=No
15	»	»	PUNCT	Pu	_	13	punct	_	SpaceAfter=No
16	.	.	PUNCT	Pu	_	2	punct	_	_

~~~


