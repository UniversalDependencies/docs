---
layout: base
title:  'Statistics of aux:pass in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-aux.html">aux</a></tt>.

512 nodes (1%) are attached to their parents as `aux:pass`.

383 instances of `aux:pass` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.1796875.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-AUX.html">AUX</a></tt> (512; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux:pass	color:blue
1	facta	facio	VERB	vp3irs3	Aspect=Perf|InflClass=LatI2|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
2	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	aux:pass	_	_
3	quasi	quasi	SCONJ	r	Compound=Yes|PronType=Rel	4	mark	_	_
4	vidua	uidua	NOUN	sfs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	1	xcomp:pred	_	_
5	domina	domina	NOUN	sfs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	1	nsubj:pass	_	_
6	gentium	gens	NOUN	sfp3g	Case=Gen|Gender=Fem|InflClass=IndEurI|Number=Plur|VerbForm=Part	5	nmod	_	SpaceAfter=No
7	»	»	PUNCT	Pu	_	1	punct	_	SpaceAfter=No
8	.	.	PUNCT	Pu	_	1	punct	_	_

~~~


