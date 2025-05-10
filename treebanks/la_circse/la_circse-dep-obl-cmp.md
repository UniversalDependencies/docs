---
layout: base
title:  'Statistics of obl:cmp in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `obl:cmp`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="la_circse-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="la_circse-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="la_circse-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="la_circse-dep-obl-tmod.html">obl:tmod</a></tt>.

24 nodes (0%) are attached to their parents as `obl:cmp`.

12 instances of `obl:cmp` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.16666666666667.

The following 6 pairs of parts of speech are connected with `obl:cmp`: <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (15; 63% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (3; 13% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (2; 8% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 obl:cmp	color:blue
1	res	res	NOUN	A5	Case=Nom|Gender=Fem|InflClass=IndEurE|Number=Sing	2	nsubj:pass	_	LiLaflcat=n5
2	agitur	ago	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LiLaflcat=v3
3	intus	intus	ADV	M	Degree=Pos	2	advmod:lmod	_	LASLAVariant=1|LiLaflcat=i
4	magna	magnus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	1	amod	_	LiLaflcat=n6
5	par	par	ADJ	C5	Case=Nom|Degree=Pos|Gender=Fem|InflClass=IndEurI|Number=Sing	1	amod	_	LASLAVariant=2|LiLaflcat=n7
6	annis	annus	NOUN	A2	Case=Dat|Gender=Masc|InflClass=IndEurO|Number=Plur	5	obl:cmp	_	LiLaflcat=n2
7	decem	decem	NUM	D1	InflClass=Ind|Number=Plur|NumType=Card	6	nummod	_	LiLaflcat=n
8	eheu	eheu	INTJ	U	_	9	discourse	_	LiLaflcat=i
9	quid	quis	PRON	K	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Int	2	conj	_	LASLAVariant=1|LiLaflcat=p
10	hoc	hic	DET	I	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	9	nsubj	_	LASLAVariant=1|LiLaflcat=p
11	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	LASLAVariant=1|LiLaflcat=v6

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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl:cmp	color:blue
1	et	et	CCONJ	S	_	4	cc	_	LASLAVariant=2|LiLaflcat=i
2	cur	cur	ADV	O	PronType=Int	4	advmod	_	LiLaflcat=i
3	Atrida	atrides	PROPN	A1	Case=Abl|InflClass=IndEurA|NameType=Giv|Number=Sing	5	obl:cmp	_	LASLAVariant=N|LiLaflcat=n1
4	uideor	uideo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LiLaflcat=v2
5	inferior	inferus	ADJ	C1	Case=Nom|Degree=Cmp|Gender=Masc|InflClass=IndEurX|Number=Sing	4	advcl:pred	_	LiLaflcat=n7
6	tibi	tu	PRON	E	Case=Dat|InflClass=LatAnom|Number=Sing|Person=2|PronType=Prs	4	obl	_	LiLaflcat=p
7	gnatus	natus	NOUN	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	4	nsubj:pass	_	LASLAVariant=1|LiLaflcat=n2
8	Thyestae	thyestes	PROPN	A1	Case=Gen|InflClass=IndEurA|NameType=Giv|Number=Sing	7	nmod	_	LASLAVariant=N|LiLaflcat=n1

~~~


