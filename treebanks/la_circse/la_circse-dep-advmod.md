---
layout: base
title:  'Statistics of advmod in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `advmod`

This relation is universal.
There are 4 language-specific subtypes of `advmod`: <tt><a href="la_circse-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_circse-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="la_circse-dep-advmod-neg.html">advmod:neg</a></tt>, <tt><a href="la_circse-dep-advmod-tmod.html">advmod:tmod</a></tt>.

453 nodes (2%) are attached to their parents as `advmod`.

383 instances of `advmod` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.43708609271523.

The following 9 pairs of parts of speech are connected with `advmod`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (331; 73% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (64; 14% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (28; 6% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (16; 4% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (6; 1% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 advmod	color:blue
1	Iuno	iuno	PROPN	A3	Case=Voc|Gender=Fem|InflClass=IndEurX|NameType=Rel|Number=Sing	4	vocative	_	LASLAVariant=N|LiLaflcat=n3
2	cur	cur	ADV	O	PronType=Int	4	advmod	_	LiLaflcat=i
3	nondum	nondum	ADV	P	AdvType=Tim|Polarity=Neg	4	advmod:tmod	_	LiLaflcat=i
4	furis	furo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v3

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 advmod	color:blue
1	magna	magnus	ADJ	C1	Case=Acc|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Plur	4	obj	_	LiLaflcat=n6
2	sed	sed	CCONJ	S	_	4	cc	_	LiLaflcat=i
3	nimium	nimium	ADV	M	Degree=Pos	1	advmod	_	LASLAVariant=2|LiLaflcat=i
4	loquor	loquor	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LiLaflcat=v3
5	ignara	ignarus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	4	advcl:pred	_	LiLaflcat=n6
6	nostrae	noster	DET	F	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	7	det	_	LiLaflcat=n6
7	sortis	sors	NOUN	A3	Case=Gen|Gender=Fem|InflClass=IndEurI|Number=Sing	5	obl	_	LiLaflcat=n3

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod	color:blue
1	quid	quis	ADV	K	PronType=Int	3	advmod	_	LASLAVariant=1|LiLaflcat=p
2	geminum	geminus	ADJ	C1	Case=Acc|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	3	amod	_	LiLaflcat=n6
3	nefas	nefas	NOUN	A6	Gender=Neut|InflClass=Ind	0	root	_	LiLaflcat=n
4	mixtum	misceo	VERB	B2	Aspect=Perf|Case=Acc|Degree=Pos|Gender=Neut|InflClass=LatE|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	6	acl	_	LiLaflcat=v2
5	que	que	CCONJ	S	_	6	cc	_	LiLaflcat=i
6	nomen	nomen	NOUN	A3	Case=Acc|Gender=Neut|InflClass=IndEurX|Number=Sing	3	conj	_	LiLaflcat=n3
7	coniugis	coniux	NOUN	A3	Case=Gen|Gender=Fem,Masc|InflClass=IndEurX|Number=Sing	6	nmod	_	LiLaflcat=n3
8	nati	natus	NOUN	A2	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Sing	7	conj	_	LASLAVariant=1|LiLaflcat=n2
9	patris	pater	NOUN	A3	Case=Gen|Gender=Masc|InflClass=IndEurX|Number=Sing	7	conj	_	LiLaflcat=n3

~~~


