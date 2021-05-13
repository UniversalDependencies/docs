---
layout: base
title:  'Statistics of csubj:pass in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="la_udante-dep-csubj-cleft.html">csubj:cleft</a></tt>.

126 nodes (0%) are attached to their parents as `csubj:pass`.

94 instances of `csubj:pass` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.88888888888889.

The following 9 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (88; 70% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (12; 10% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (12; 10% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (5; 4% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj:pass	color:blue
1	Et	et	CCONJ	co	_	3	cc	_	_
2	sic	sic	ADV	r	PronType=Dem	3	discourse	_	_
3	patet	pateo	VERB	va2*ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	soli	solus	DET	dpmsd	Case=Dat|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Emp	5	det	_	_
5	homini	homo	NOUN	sms3d	Case=Dat|Gender=Masc|InflClass=IndEurX|Number=Sing	6	obl:arg	_	_
6	datum	do	VERB	vp1fr	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|InflClass=LatA|InflClass[noun]=IndEurO|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	3	csubj	_	_
7	fuisse	sum	AUX	va5fr	Aspect=Perf|InflClass=LatAnom|InflClass[noun]=Ind|Tense=Past|VerbForm=Inf	6	aux:pass	_	_
8	loqui	loquor	VERB	vd3fp	Aspect=Imp|InflClass=LatX|InflClass[noun]=Ind|Tense=Pres|VerbForm=Inf|Voice=Pass	6	csubj:pass	_	SpaceAfter=No
9	.	.	PUNCT	Pu	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj:pass	color:blue
1	Sed	sed	CCONJ	co	_	2	cc	_	_
2	disserendum	dissero	VERB	va3*gvsnn	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Neut|InflClass=LatX|InflClass[noun]=IndEurO|Number=Sing|Tense=Fut|VerbForm=Gdv|Voice=Pass	0	root	_	_
3	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	aux:pass	_	_
4	que	qui	PRON	prepnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Rel	5	nsubj	_	_
5	maxima	magnus	ADJ	anp1ns	Case=Nom|Degree=Abs|Gender=Neut|InflClass=IndEurO|Number=Plur	2	csubj:pass	_	_
6	sint	sum	AUX	va5cpp3	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	SpaceAfter=No
7	.	.	PUNCT	Pu	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 csubj:pass	color:blue
1	Videtur	uideo	VERB	vp2ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
2	nobis	ego	PRON	ppp1pmd	Case=Dat|InflClass=LatAnom|Number=Plur|Person=1|PronType=Prs	1	obl:arg	_	_
3	hec	hic	DET	ddisfn	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	8	nsubj	_	_
4	quam	qui	PRON	presfa	Case=Acc|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	6	obj	_	_
5	habitudinem	habitudo	NOUN	sfs3a	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	6	xcomp:pred	_	_
6	dicimus	dico	VERB	va3ipp1	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
7	maxima	magnus	ADJ	afs1ns	Case=Nom|Degree=Abs|Gender=Fem|InflClass=IndEurA|Number=Sing	8	amod	_	_
8	pars	pars	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	1	csubj:pass	_	_
9	eius	is	PRON	ddesng	Case=Gen|Gender=Neut|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	8	nmod	_	_
10	quod	qui	PRON	presnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	11	nsubj	_	_
11	artis	ars	NOUN	sfs3g	Case=Gen|Gender=Fem|InflClass=IndEurI|Number=Sing	9	acl:relcl	_	_
12	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	SpaceAfter=No
13	.	.	PUNCT	Pu	_	1	punct	_	_

~~~


