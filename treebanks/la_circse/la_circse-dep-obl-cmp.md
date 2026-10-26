---
layout: base
title:  'Statistics of obl:cmp in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `obl:cmp`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="la_circse-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="la_circse-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="la_circse-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="la_circse-dep-obl-tmod.html">obl:tmod</a></tt>.

27 nodes (0%) are attached to their parents as `obl:cmp`.

14 instances of `obl:cmp` (52%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.22222222222222.

The following 7 pairs of parts of speech are connected with `obl:cmp`: <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (14; 52% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (5; 19% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (2; 7% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (2; 7% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (2; 7% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:cmp	color:blue
1	nobilius	nobilis	ADJ	C4	Case=Acc|Degree=Cmp|Gender=Neut|InflClass=IndEurX|Number=Sing	2	amod	_	LASLAVariant=2|LiLaflcat=n7
2	aliquid	aliquis	PRON	L	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Ind	5	obj	_	LiLaflcat=p
3	genere	genus	NOUN	A3	Case=Abl|Gender=Neut|InflClass=IndEurX|Number=Sing	1	obl:cmp	_	LASLAVariant=1|LiLaflcat=n3
4	regali	regalis	ADJ	C4	Case=Abl|Degree=Pos|Gender=Neut|InflClass=IndEurI|Number=Sing	3	amod	_	LiLaflcat=n7
5	appetis	appeto	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v3

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 obl:cmp	color:blue
1	his	hic	DET	I	Case=Abl|Gender=Fem,Masc,Neut|InflClass=LatPron|Number=Plur|PronType=Dem	6	obl:cmp	_	LASLAVariant=1|LiLaflcat=p
2	etiam	etiam	ADV	M	Degree=Pos	6	advmod:emph	_	LiLaflcat=i
3	pater	pater	NOUN	A3	Case=Voc|Gender=Masc|InflClass=IndEurX|Number=Sing	9	vocative	_	LiLaflcat=n3
4	quicquam	quisquam	PRON	L	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Ind	9	nsubj	_	LiLaflcat=p
5	timeri	timeo	VERB	B2	Aspect=Imp|InflClass=LatE|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Pass	9	xcomp	_	LiLaflcat=v2
6	maius	magnus	ADJ	C1	Case=Nom|Degree=Cmp|Gender=Neut|InflClass=IndEurX|Number=Sing	4	amod	_	LiLaflcat=n7
7	aut	aut	CCONJ	S	_	8	cc	_	LiLaflcat=i
8	grauius	grauis	ADJ	C4	Case=Nom|Degree=Cmp|Gender=Neut|InflClass=IndEurX|Number=Sing	6	conj	_	LiLaflcat=n7
9	potest	possum	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LASLAVariant=1|LiLaflcat=v6

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 obl:cmp	color:blue
1	tumet	tumeo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	animus	animus	NOUN	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	1	nsubj	_	_
3	ira	ira	NOUN	A1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	1	obl	_	_
4	feruet	ferueo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
5	immensus	immensus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	6	amod	_	_
6	dolor	dolor	NOUN	A3	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	4	nsubj	_	_
7	maius	magnus	ADJ	C1	Case=Acc|Degree=Cmp|Gender=Neut|InflClass=IndEurX|Number=Sing	16	amod	_	_
8	que	que	CCONJ	S	_	17	cc	_	_
9	quam	quam	SCONJ	N	PronType=Rel	10	mark	_	_
10	quod	qui	PRON	J	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	7	obl:cmp	_	_
11	casus	casus	NOUN	A4	Case=Nom|Gender=Masc|InflClass=IndEurU|Number=Sing	15	nsubj	_	_
12	et	et	CCONJ	S	_	14	cc	_	_
13	iuuenum	iuuenis	NOUN	A3	Case=Gen|Gender=Fem,Masc|InflClass=IndEurI|Number=Plur	14	nmod	_	_
14	furor	furor	NOUN	A3	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	11	conj	_	_
15	conatur	conor	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	10	acl:relcl	_	_
16	aliquid	aliquis	PRON	L	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Ind	17	obj	_	_
17	cupio	cupio	VERB	B5	Aspect=Imp|InflClass=LatI2|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_

~~~


