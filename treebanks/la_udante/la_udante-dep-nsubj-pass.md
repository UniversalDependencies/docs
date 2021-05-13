---
layout: base
title:  'Statistics of nsubj:pass in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="la_udante-dep-nsubj-cleft.html">nsubj:cleft</a></tt>.

707 nodes (1%) are attached to their parents as `nsubj:pass`.

561 instances of `nsubj:pass` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.40735502121641.

The following 10 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (382; 54% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (169; 24% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (95; 13% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (33; 5% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-PROPN.html">PROPN</a></tt> (15; 2% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NUM.html">NUM</a></tt> (7; 1% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 nsubj:pass	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj:pass	color:blue
1	Patet	pateo	VERB	va2*ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	igitur	igitur	PART	r	_	1	discourse	_	_
3	quod	qui	PRON	presnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	4	nsubj:pass	_	_
4	querebatur	quaero	VERB	vp3*iis3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	1	csubj	_	SpaceAfter=No
5	.	.	PUNCT	Pu	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubj:pass	color:blue
1	Hoc	hic	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	7	nsubj:pass	_	_
2	idem	idem	DET	dpnsa	Case=Acc|Emphatic=Yes|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Emp	1	det	_	_
3	in	in	ADP	e	AdpType=Prep	4	case	_	_
4	versibus	uersus	NOUN	smp4b	Case=Abl|Gender=Masc|InflClass=IndEurU|Number=Plur|VerbForm=Part	6	obl	_	_
5	esse	sum	AUX	va5fp	Aspect=Imp|InflClass=LatAnom|InflClass[noun]=Ind|Tense=Pres|VerbForm=Inf	6	aux:pass	_	_
6	servandum	seruo	VERB	vp1gvsna	Aspect=Imp|Case=Acc|Degree=Pos|Gender=Neut|InflClass=LatA|InflClass[noun]=IndEurO|Number=Sing|Tense=Fut|VerbForm=Gdv|Voice=Pass	7	xcomp	_	_
7	astruimus	adstruo	VERB	va3ipp1	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Pu	_	7	punct	_	_

~~~


