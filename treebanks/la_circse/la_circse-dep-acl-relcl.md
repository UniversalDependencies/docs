---
layout: base
title:  'Statistics of acl:relcl in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-acl.html">acl</a></tt>.

168 nodes (1%) are attached to their parents as `acl:relcl`.

133 instances of `acl:relcl` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.25.

The following 17 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (90; 54% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (19; 11% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (15; 9% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (11; 7% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (10; 6% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (7; 4% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (5; 3% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-NUM.html">NUM</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 acl:relcl	color:blue
1	quae	qui	PRON	J	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	3	det	_	LASLAVariant=1|LiLaflcat=p
2	uinci	uinco	VERB	B3	Aspect=Imp|InflClass=LatX|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Pass	3	xcomp	_	LiLaflcat=v3
3	potuit	possum	VERB	B6	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	_	LASLAVariant=1|LiLaflcat=v6
4	regia	regia	NOUN	A1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	8	dislocated:nsubj	_	LiLaflcat=n1
5	carmine	carmen	NOUN	A3	Case=Abl|Gender=Neut|InflClass=IndEurX|Number=Sing	2	obl:agent	_	LASLAVariant=1|LiLaflcat=n3
6	haec	hic	DET	I	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	9	det	_	LASLAVariant=1|LiLaflcat=p
7	uinci	uinco	VERB	B3	Aspect=Imp|InflClass=LatX|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Pass	8	xcomp	_	LiLaflcat=v3
8	poterit	possum	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	LASLAVariant=1|LiLaflcat=v6
9	regia	regia	NOUN	A1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	8	nsubj	_	LiLaflcat=n1
10	uiribus	uis	NOUN	A3	Case=Abl|Gender=Fem|InflClass=IndEurI|Number=Plur	7	obl:agent	_	LiLaflcat=n3

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 acl:relcl	color:blue
1	inueni	inuenio	VERB	B4	Aspect=Perf|InflClass=LatI|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v4
2	diem	dies	NOUN	A5	Case=Acc|Gender=Masc|InflClass=IndEurE|Number=Sing	1	obj	_	LiLaflcat=n5
3	inuisa	inuisus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	7	amod	_	LASLAVariant=1|LiLaflcat=n6
4	quo	qui	PRON	J	Case=Abl|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	8	obl:tmod	_	LASLAVariant=1|LiLaflcat=p
5	nos	nos	PRON	E	Case=Acc|InflClass=LatAnom|Number=Plur|Person=1|PronType=Prs	8	obj	_	LiLaflcat=p
6	Herculis	hercules	PROPN	A3	Case=Gen|Gender=Masc|InflClass=IndEurI|NameType=Giv|Number=Sing	7	nmod	_	LASLAVariant=N|LiLaflcat=n3
7	uirtus	uirtus	NOUN	A3	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	8	nsubj	_	LiLaflcat=n3
8	iuuet	iuuo	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl:relcl	_	LiLaflcat=v1

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 acl:relcl	color:blue
1	quod	qui	PRON	J	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	4	obj	_	LASLAVariant=1|LiLaflcat=p
2	nimis	nimis	ADV	M	Degree=Pos	4	advmod	_	LiLaflcat=i
3	miseri	miser	ADJ	C1	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Plur	7	nsubj	_	LiLaflcat=n6
4	uolunt	uolo	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl:relcl	_	LASLAVariant=3|LiLaflcat=v6
5	hoc	hic	DET	I	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	7	obj	_	LASLAVariant=1|LiLaflcat=p
6	facile	facile	ADV	M	Degree=Pos	7	advmod	_	LiLaflcat=i
7	credunt	credo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v3

~~~


