---
layout: base
title:  'Statistics of csubj in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `csubj`

This relation is universal.
There are 2 language-specific subtypes of `csubj`: <tt><a href="la_circse-dep-csubj-pass.html">csubj:pass</a></tt>, <tt><a href="la_circse-dep-csubj-relcl.html">csubj:relcl</a></tt>.

105 nodes (0%) are attached to their parents as `csubj`.

57 instances of `csubj` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (53; 50% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (30; 29% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (19; 18% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 csubj	color:blue
1	tela	telum	NOUN	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	3	nsubj:pass	_	LiLaflcat=n2
2	sic	sic	ADV	M	Degree=Pos	4	advmod	_	LiLaflcat=i
3	mitti	mitto	VERB	B3	Aspect=Imp|InflClass=LatX|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Pass	4	csubj	_	LiLaflcat=v3
4	decet	decet	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v2
5	Herculea	herculeus	ADJ	C1	Case=Acc|Degree=Pos|Gender=Neut|InflClass=IndEurO|NameType=Giv|Number=Plur	1	amod	_	LASLAVariant=A|LiLaflcat=n6

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 csubj	color:blue
1	mihi	ego	PRON	E	Case=Dat|InflClass=LatAnom|Number=Sing|Person=1|PronType=Prs	4	obl	_	LiLaflcat=p
2	mori	morior	VERB	B5	Aspect=Imp|InflClass=LatI2|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Pass	4	csubj	_	LiLaflcat=v5
3	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	LASLAVariant=1|LiLaflcat=v6
4	securitas	securitas	NOUN	A3	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	0	root	_	LiLaflcat=n3

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	o	o	PART	U	PartType=Emp	3	advmod:emph	_	LiLaflcat=i
2	quam	quam	ADV	O	PronType=Int	3	advmod	_	LASLAVariant=2|LiLaflcat=i
3	miserum	miser	ADJ	C1	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	0	root	_	LiLaflcat=n6
4	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	LASLAVariant=1|LiLaflcat=v6
5	nescire	nescio	VERB	B4	Aspect=Imp|InflClass=LatI|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Act	3	csubj	_	LiLaflcat=v4
6	mori	morior	VERB	B5	Aspect=Imp|InflClass=LatI2|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Pass	5	xcomp	_	LiLaflcat=v5

~~~


