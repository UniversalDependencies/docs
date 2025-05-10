---
layout: base
title:  'Statistics of det in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="la_udante-dep-det-numgov.html">det:numgov</a></tt>.

2020 nodes (4%) are attached to their parents as `det`.

1506 instances of `det` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31831683168317.

The following 16 pairs of parts of speech are connected with `det`: <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (1575; 78% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (111; 5% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (87; 4% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (66; 3% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (55; 3% instances), <tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (44; 2% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (44; 2% instances), <tt><a href="la_udante-pos-NUM.html">NUM</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (13; 1% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (7; 0% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="la_udante-pos-AUX.html">AUX</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="la_udante-pos-ADV.html">ADV</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="la_udante-pos-AUX.html">AUX</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-NUM.html">NUM</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-X.html">X</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	An	an	PART	co	PartType=Int	7	discourse	_	_
2	septi	sepio	VERB	vp4prpmv	Aspect=Perf|Case=Voc|Gender=Masc|InflClass=LatI|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	7	advcl:pred	_	TraditionalMood=Participium|TraditionalTense=Perfectum
3	vallo	uallum	NOUN	sns2b	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	2	obl:agent	_	_
4	ridiculo	ridiculus	ADJ	ams1b	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	3	amod	_	_
5	cuiquam	quisquam	DET	dinsfd	Case=Dat|Compound=Yes|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Ind	6	det	_	_
6	defensioni	defensio	NOUN	sfs3d	Case=Dat|Gender=Fem|InflClass=IndEurX|Number=Sing	7	obl:arg	_	_
7	confiditis	confido	VERB	vs3ipp2	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
8	?	?	PUNCT	Pu	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Sed	sed	CCONJ	co	_	10	cc	_	_
2	qua	qui	PRON	cs	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	3	det	_	_
3	re	res	NOUN	cs	Case=Abl|Gender=Fem|InflClass=IndEurE|Number=Sing	4	obl	_	_
4	necessarium	necessarius	ADJ	ans1n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	9	ccomp	_	_
5	sibi	sui	PRON	ppp3smd	Case=Dat|InflClass=LatAnom|Person=3|PronType=Prs|Reflex=Yes	4	obl	_	_
6	foret	sum	AUX	va5cis3	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	cop	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Imperfectum
7	,	,	PUNCT	Pu	_	4	punct	_	_
8	breviter	breuiter	ADV	r	_	9	advmod	_	_
9	pertractare	pertracto	VERB	va1fp	Aspect=Imp|InflClass=LatA|VerbForm=Inf|Voice=Act	10	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
10	conemur	conor	VERB	vd1cpp1	Aspect=Imp|InflClass=LatA|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
11	.	.	PUNCT	Pu	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Et	et	CCONJ	co	_	7	cc	_	_
2	de	de	ADP	e	_	4	case	_	_
3	hac	hic	DET	ddisfb	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	4	det	_	_
4	nobiliori	nobilis	ADJ	afs2bc	Case=Abl|Degree=Cmp|Gender=Fem|InflClass=IndEurX|Number=Sing	8	obl:arg	_	_
5	nostra	noster	DET	dsfsn	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	7	det	_	_
6	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
7	intentio	intentio	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	0	root	_	_
8	pertractare	pertracto	VERB	va1fp	Aspect=Imp|InflClass=LatA|VerbForm=Inf|Voice=Act	7	csubj	_	SpaceAfter=No|TraditionalMood=Infinitivus|TraditionalTense=Praesens
9	.	.	PUNCT	Pu	_	7	punct	_	_

~~~


