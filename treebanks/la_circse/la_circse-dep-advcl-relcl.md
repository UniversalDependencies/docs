---
layout: base
title:  'Statistics of advcl:relcl in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-advcl.html">advcl</a></tt>.
There are also 3 other language-specific subtypes of `advcl`: <tt><a href="la_circse-dep-advcl-abs.html">advcl:abs</a></tt>, <tt><a href="la_circse-dep-advcl-cmp.html">advcl:cmp</a></tt>, <tt><a href="la_circse-dep-advcl-pred.html">advcl:pred</a></tt>.

44 nodes (0%) are attached to their parents as `advcl:relcl`.

26 instances of `advcl:relcl` (59%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.90909090909091.

The following 11 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (26; 59% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (6; 14% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (3; 7% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="la_circse-pos-NUM.html">NUM</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advcl:relcl	color:blue
1	dum	dum	SCONJ	T	_	2	mark	_	_
2	prior	prior	ADJ	D2	Case=Nom|Degree=Cmp|Gender=Fem,Masc|InflClass=IndEurX|Number=Sing|NumType=Ord	5	advcl	_	_
3	quo	quo	SCONJ	N	PronType=Rel	4	mark	_	_
4	uis	uolo	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	5	advcl:relcl	_	_
5	eo	eo	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 advcl:relcl	color:blue
1	hinc	hinc	ADV	M	Degree=Pos	3	advmod:lmod	_	_
2	iam	iam	ADV	M	Degree=Pos	3	advmod:tmod	_	_
3	solue	soluo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	inhaerentem	inhaereo	VERB	B2	Aspect=Imp|Case=Acc|Degree=Pos|Gender=Fem|InflClass=LatE|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	5	acl	_	_
5	manum	manus	NOUN	A4	Case=Acc|Gender=Fem|InflClass=IndEurU|Number=Sing	3	obj	_	_
6	et	et	CCONJ	S	_	7	cc	_	_
7	patere	patior	VERB	B5	Aspect=Imp|InflClass=LatI2|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Pass	3	conj	_	_
8	caecum	caecus	ADJ	C1	Case=Acc|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	12	amod	_	_
9	qua	qua	SCONJ	N	PronType=Rel	10	mark	_	_
10	uolet	uolo	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	12	advcl:relcl	_	_
11	ferri	fero	VERB	B6	Aspect=Imp|InflClass=LatAnom|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Pass	10	xcomp	_	_
12	pedem	pes	NOUN	A3	Case=Acc|Gender=Masc|InflClass=IndEurX|Number=Sing	7	obj	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 11 advcl:relcl	color:blue
1	uictrice	uictrix	NOUN	A3	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	2	amod	_	LASLAVariant=1|LiLaflcat=n3
2	dextra	dextera	NOUN	A1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	3	obl:agent	_	LiLaflcat=n1
3	fusus	fundo	VERB	B3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	5	acl	_	LASLAVariant=2|LiLaflcat=v3
4	aduerso	aduersus	ADJ	C1	Case=Abl|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	8	amod	_	LASLAVariant=1|LiLaflcat=n6
5	Lycus	lycus	PROPN	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|NameType=Giv|Number=Sing	7	nsubj	_	LASLAVariant=N|LiLaflcat=n2
6	terram	terra	NOUN	A1	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	7	obj	_	LiLaflcat=n1
7	cecidit	caedo	VERB	B3	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v3
8	ore	os	NOUN	A3	Case=Abl|Gender=Neut|InflClass=IndEurI|Number=Sing	7	obl	_	LASLAVariant=1|LiLaflcat=n3
9	tum	tum	ADV	M	Degree=Pos	14	advmod:tmod	_	LiLaflcat=i
10	quisquis	quisquis	DET	J	Case=Nom|Gender=Fem,Masc|InflClass=LatPron|Number=Sing|PronType=Rel	11	det	_	LASLAVariant=1|LiLaflcat=p
11	comes	comes	NOUN	A3	Case=Nom|Gender=Fem,Masc|InflClass=IndEurX|Number=Sing	14	advcl:relcl	_	LiLaflcat=n3
12	fuerat	sum	AUX	B6	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	11	cop	_	LASLAVariant=1|LiLaflcat=v6
13	tyranni	tyrannus	NOUN	A2	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Sing	11	nmod	_	LiLaflcat=n2
14	iacuit	iaceo	VERB	B2	Aspect=Perf|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	conj	_	LiLaflcat=v2
15	et	et	ADV	M	Degree=Pos	17	advmod:emph	_	LASLAVariant=1|LiLaflcat=i
16	poenae	poena	NOUN	A1	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	17	nmod	_	LiLaflcat=n1
17	comes	comes	NOUN	A3	Case=Nom|Gender=Fem,Masc|InflClass=IndEurX|Number=Sing	11	conj	_	LiLaflcat=n3

~~~


