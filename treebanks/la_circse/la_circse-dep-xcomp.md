---
layout: base
title:  'Statistics of xcomp in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="la_circse-dep-xcomp-relcl.html">xcomp:relcl</a></tt>.

220 nodes (1%) are attached to their parents as `xcomp`.

129 instances of `xcomp` (59%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.15909090909091.

The following 8 pairs of parts of speech are connected with `xcomp`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (145; 66% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (30; 14% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (29; 13% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (10; 5% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	quae	quis	PRON	K	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Int	4	det	_	LASLAVariant=1|LiLaflcat=p
2	fera	ferus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Plur	4	amod	_	LASLAVariant=2|LiLaflcat=n6
3	tyranni	tyrannus	NOUN	A2	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Sing	4	nmod	_	LiLaflcat=n2
4	iura	ius	NOUN	A3	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Plur	6	nsubj	_	LASLAVariant=1|LiLaflcat=n3
5	uiolento	uiolentus	ADJ	C1	Case=Dat|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	8	amod	_	LiLaflcat=n6
6	queant	queo	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v6
7	nocere	noceo	VERB	B2	Aspect=Imp|InflClass=LatE|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Act	6	xcomp	_	LiLaflcat=v2
8	iuueni	iuuenis	NOUN	A3	Case=Dat|Gender=Masc|InflClass=IndEurI|Number=Sing	7	obl:arg	_	LASLAVariant=1|LiLaflcat=n3

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	famuli	famulus	NOUN	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur	0	root	_	LASLAVariant=1|LiLaflcat=n2
2	ne	ne	PART	O	PartType=Int	1	discourse	_	LASLAVariant=2|LiLaflcat=i
3	fuerant	sum	AUX	B6	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pqp|VerbForm=Fin	1	cop	_	LASLAVariant=1|LiLaflcat=v6
4	ante	ante	ADV	M	Degree=Pos	1	advmod:tmod	_	LiLaflcat=i
5	quam	quam	SCONJ	T	_	6	mark	_	LiLaflcat=i
6	fierent	fio	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	advcl:cmp	_	LiLaflcat=v6
7	dei	deus	NOUN	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur	6	xcomp	_	LiLaflcat=n2

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 xcomp	color:blue
1	quemcumque	quicumque	DET	J	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	3	obj	_	LASLAVariant=1|LiLaflcat=p
2	miserum	miser	ADJ	C1	Case=Acc|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	3	xcomp	_	LiLaflcat=n6
3	uideris	uideo	VERB	B2	Aspect=Perf|InflClass=LatE|Mood=Sub|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	5	ccomp:relcl	_	LiLaflcat=v2
4	hominem	homo	NOUN	A3	Case=Acc|Gender=Masc|InflClass=IndEurX|Number=Sing	5	xcomp	_	LiLaflcat=n3
5	scias	scio	VERB	B4	Aspect=Imp|InflClass=LatI|Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v4

~~~


