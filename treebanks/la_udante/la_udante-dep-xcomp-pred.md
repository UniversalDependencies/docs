---
layout: base
title:  'Statistics of xcomp:pred in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `xcomp:pred`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-xcomp.html">xcomp</a></tt>.

238 nodes (0%) are attached to their parents as `xcomp:pred`.

143 instances of `xcomp:pred` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.15966386554622.

The following 20 pairs of parts of speech are connected with `xcomp:pred`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (91; 38% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (80; 34% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (23; 10% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (11; 5% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt> (6; 3% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 xcomp:pred	color:blue
1	Iam	iam	ADV	r	_	3	advmod	_	_
2	garrulus	garrulus	ADJ	ams1n	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	3	xcomp:pred	_	_
3	factus	facio	VERB	vp3irs1	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatI2|InflClass[nominal]=IndEurO|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
4	sum	sum	AUX	va5ips1	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	aux:pass	_	SpaceAfter=No
5	:	:	PUNCT	Pu	_	8	punct	_	_
6	vos	tu	PRON	ppp2pmn	Case=Nom|InflClass=LatAnom|Number=Plur|Person=2|PronType=Prs	8	nsubj	_	_
7	me	ego	PRON	ppp1sma	Case=Acc|InflClass=LatAnom|Number=Sing|Person=1|PronType=Prs	8	obj	_	_
8	coegistis	cogo	VERB	va3irp2	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Plur|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	_	SpaceAfter=No
9	.	.	PUNCT	Pu	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 xcomp:pred	color:blue
1	facta	facio	VERB	vp3irs3	Aspect=Perf|InflClass=LatI2|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
2	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	aux:pass	_	_
3	quasi	quasi	SCONJ	r	Compound=Yes|PronType=Rel	4	mark	_	_
4	vidua	uidua	NOUN	sfs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	1	xcomp:pred	_	_
5	domina	domina	NOUN	sfs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	1	nsubj:pass	_	_
6	gentium	gens	NOUN	sfp3g	Case=Gen|Gender=Fem|InflClass=IndEurI|Number=Plur|VerbForm=Part	5	nmod	_	SpaceAfter=No
7	»	»	PUNCT	Pu	_	1	punct	_	SpaceAfter=No
8	.	.	PUNCT	Pu	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 xcomp:pred	color:blue
1	Hiis	hic	DET	ddipnb	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Dem	2	nsubj:pass	_	_
2	visis	uideo	VERB	vp2prpnb	Aspect=Perf|Case=Abl|Degree=Pos|Gender=Neut|InflClass=LatE|InflClass[nominal]=IndEurO|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	4	advcl:abs	_	SpaceAfter=No
3	,	,	PUNCT	Pu	_	2	punct	_	_
4	facile	facilis	ADJ	ans2n	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurI|Number=Sing	0	root	_	_
5	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
6	solvere	soluo	VERB	va3fp	Aspect=Imp|InflClass=LatX|InflClass[nominal]=Ind|Tense=Pres|VerbForm=Inf|Voice=Act	4	csubj	_	_
7	ad	ad	ADP	e	AdpType=Prep	8	case	_	_
8	argumenta	argumentum	NOUN	snp2a	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	6	obl	_	_
9	que	qui	PRON	prepnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Rel	12	nsubj	_	_
10	superius	supra	ADV	r+	Degree=Cmp	12	advmod	_	_
11	contra	contra	ADV	r	_	12	advmod	_	_
12	fiebant	fio	VERB	vs5iip3	Aspect=Imp|InflClass=LatI2|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	8	acl:relcl	_	SpaceAfter=No
13	;	;	PUNCT	Pu	_	17	punct	_	_
14	quod	qui	PRON	presnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	17	nsubj:pass	_	_
15	quidem	quidem	PART	r	_	17	discourse	_	_
16	quinto	quinto	ADV	rn	Degree=Pos|NumType=Ord	17	advmod	_	_
17	proponebatur	propono	VERB	vp3iis3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	4	advcl:pred	_	_
18	faciendum	facio	VERB	vp3gvsnn	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Neut|InflClass=LatI2|InflClass[nominal]=IndEurO|Number=Sing|Tense=Fut|VerbForm=Gdv|Voice=Pass	17	xcomp:pred	_	SpaceAfter=No
19	.	.	PUNCT	Pu	_	4	punct	_	_

~~~


