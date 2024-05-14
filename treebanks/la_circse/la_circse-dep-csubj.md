---
layout: base
title:  'Statistics of csubj in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `csubj`

This relation is universal.
There are 2 language-specific subtypes of `csubj`: <tt><a href="la_circse-dep-csubj-pass.html">csubj:pass</a></tt>, <tt><a href="la_circse-dep-csubj-relcl.html">csubj:relcl</a></tt>.

78 nodes (0%) are attached to their parents as `csubj`.

43 instances of `csubj` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.42307692307692.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (35; 45% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (26; 33% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (14; 18% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 csubj	color:blue
1	pacem	pax	NOUN	A3	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	2	nsubj:pass	_	LiLaflcat=n3
2	reduci	reduco	VERB	B3	Aspect=Imp|InflClass=LatX|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Pass	3	ccomp	_	LiLaflcat=v3
3	uelle	uolo	VERB	B6	Aspect=Imp|InflClass=LatAnom|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Act	5	csubj	_	LASLAVariant=3|LiLaflcat=v6
4	uictori	uictor	NOUN	A3	Case=Dat|Gender=Masc|InflClass=IndEurX|Number=Sing	3	obl:arg	_	LiLaflcat=n3
5	expedit	expedio	VERB	B4	Aspect=Imp|InflClass=LatI|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v4
6	uicto	uinco	VERB	B3	Aspect=Perf|Case=Dat|Degree=Pos|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	7	obl:arg	_	LiLaflcat=v3
7	necesse	necesse	ADJ	C6	Degree=Pos|InflClass=Ind	5	conj	_	LiLaflcat=n
8	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	LASLAVariant=1|LiLaflcat=v6

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	uirtutis	uirtus	NOUN	A3	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	0	root	_	LiLaflcat=n3
2	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	LASLAVariant=1|LiLaflcat=v6
3	domare	domo	VERB	B1	Aspect=Imp|InflClass=LatA|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Act	1	csubj	_	LiLaflcat=v1
4	quae	qui	PRON	J	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Rel	6	obj	_	LASLAVariant=1|LiLaflcat=p
5	cuncti	cunctus	DET	C1	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Plur|PronType=Tot	6	nsubj	_	LiLaflcat=n6
6	pauent	paueo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	_	LiLaflcat=v2

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


