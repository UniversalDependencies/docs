---
layout: base
title:  'Statistics of xcomp in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="la_udante-dep-xcomp-pred.html">xcomp:pred</a></tt>.

607 nodes (1%) are attached to their parents as `xcomp`.

368 instances of `xcomp` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.21416803953871.

The following 19 pairs of parts of speech are connected with `xcomp`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (472; 78% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (43; 7% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (34; 6% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-AUX.html">AUX</a></tt> (24; 4% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (5; 1% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="la_udante-pos-ADV.html">ADV</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-PART.html">PART</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 xcomp	color:blue
1	Sed	sed	CCONJ	co	_	9	cc	_	_
2	quare	quare	CCONJ	cs	Compound=Yes|PronType=Rel	3	cc	_	_
3	necessarium	necessarius	ADJ	ans1n	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	8	ccomp	_	_
4	sibi	sui	PRON	ppp3smd	Case=Dat|InflClass=LatAnom|Person=3|PronType=Prs|Reflex=Yes	3	obl	_	_
5	foret	sum	AUX	va5cis3	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	cop	_	SpaceAfter=No
6	,	,	PUNCT	Pu	_	3	punct	_	_
7	breviter	breuiter	ADV	r	Degree=Pos	8	advmod	_	_
8	pertractare	pertracto	VERB	va1fp	Aspect=Imp|InflClass=LatA|InflClass[nominal]=Ind|Tense=Pres|VerbForm=Inf|Voice=Act	9	xcomp	_	_
9	conemur	conor	VERB	vd1cpp1	Aspect=Imp|InflClass=LatA|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
10	.	.	PUNCT	Pu	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 xcomp	color:blue
1	Et	et	CCONJ	co	_	3	cc	_	_
2	manifestum	manifestus	ADJ	ans1n	Case=Nom|Compound=Yes|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	3	xcomp	_	_
3	potest	possum	VERB	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	esse	sum	AUX	va5fp	Aspect=Imp|InflClass=LatAnom|InflClass[nominal]=Ind|Tense=Pres|VerbForm=Inf	2	cop	_	_
5	dupliciter	dupliciter	ADV	r	Degree=Pos	2	advmod	_	SpaceAfter=No
6	:	:	PUNCT	Pu	_	7	punct	_	_
7	ratione	ratio	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	5	conj	_	_
8	scilicet	scilicet	CCONJ	r	Compound=Yes|VerbForm=Fin	7	cc	_	_
9	et	et	CCONJ	co	_	10	cc	_	_
10	fide	fides	NOUN	sfs5b	Case=Abl|Gender=Fem|InflClass=IndEurE|Number=Sing	7	conj	_	SpaceAfter=No
11	.	.	PUNCT	Pu	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 xcomp	color:blue
1	Ex	ex	ADP	e	AdpType=Prep	2	case	_	_
2	quo	qui	PRON	presnb	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	3	obl	_	_
3	sequitur	sequor	VERB	vd3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
4	quod	quod	SCONJ	cs	PronType=Rel	10	mark	_	_
5	Monarcha	monarcha	NOUN	sms1n	Case=Nom|Gender=Masc|InflClass=IndEurA|Number=Sing	12	nsubj	_	_
6	sincerissimum	sincerus	ADJ	ans1ns	Case=Nom|Degree=Abs|Gender=Neut|InflClass=IndEurO|Number=Sing	12	amod	_	_
7	inter	inter	ADP	e	AdpType=Prep	8	case	_	_
8	mortales	mortalis	NOUN	smp3a	Case=Acc|Gender=Masc|InflClass=IndEurX|Number=Plur	12	obl	_	_
9	iustitie	iustitia	NOUN	sfs1d	Case=Dat|Gender=Fem|InflClass=IndEurA|Number=Sing	12	nmod	_	_
10	possit	possum	VERB	va5cps3	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj	_	_
11	esse	sum	AUX	va5fp	Aspect=Imp|InflClass=LatAnom|InflClass[nominal]=Ind|Tense=Pres|VerbForm=Inf	12	cop	_	_
12	subiectum	subiectum	NOUN	sns2n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing|VerbForm=Part	10	xcomp	_	SpaceAfter=No
13	.	.	PUNCT	Pu	_	3	punct	_	_

~~~


