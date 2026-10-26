---
layout: base
title:  'Statistics of conj:expl in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `conj:expl`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-conj.html">conj</a></tt>.

74 nodes (0%) are attached to their parents as `conj:expl`.

74 instances of `conj:expl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.01351351351351.

The following 16 pairs of parts of speech are connected with `conj:expl`: <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (13; 18% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (13; 18% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (11; 15% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (10; 14% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (7; 9% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (6; 8% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 conj:expl	color:blue
1	si	si	SCONJ	T	_	4	mark	_	_
2	fida	fidus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	4	amod	_	_
3	es	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	comes	comes	NOUN	A3	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	7	advcl	_	_
5	ensem	ensis	NOUN	A3	Case=Acc|Gender=Masc|InflClass=IndEurI|Number=Sing	7	obj	_	_
6	parenti	parens	NOUN	A3	Case=Dat|Gender=Masc|InflClass=IndEurI|Number=Sing	7	obl:arg	_	_
7	trade	trado	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	sed	sed	CCONJ	S	_	11	cc	_	_
9	notum	notus	ADJ	C1	Case=Acc|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Sing	11	amod	_	_
10	nece	nex	NOUN	A3	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	9	obl	_	_
11	ensem	ensis	NOUN	A3	Case=Acc|Gender=Masc|InflClass=IndEurI|Number=Sing	5	conj:expl	_	_
12	paterna	paternus	ADJ	C1	Case=Abl|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	10	amod	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 conj:expl	color:blue
1	quod	qui	PRON	J	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	2	nsubj	_	LASLAVariant=1|LiLaflcat=p
2	dest	desum	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LASLAVariant=1|LiLaflcat=v6
3	secunda	secundus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Plur	5	nsubj	_	LASLAVariant=1|LiLaflcat=n6
4	non	non	PART	P	Polarity=Neg	5	advmod:neg	_	LiLaflcat=i
5	habent	habeo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj:expl	_	LiLaflcat=v2
6	umquam	umquam	ADV	M	Degree=Pos	5	advmod:tmod	_	LiLaflcat=i
7	modum	modus	NOUN	A2	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	5	obj	_	LiLaflcat=n2

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 conj:expl	color:blue
1	ne	ne	SCONJ	T	Polarity=Neg	6	mark	_	_
2	quid	quis	PRON	L	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Ind	6	nsubj	_	_
3	e	ex	ADP	R	AdpType=Prep	4	case	_	_
4	fatis	fatum	NOUN	A2	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Plur	6	obl	_	_
5	tibi	tu	PRON	E	Case=Dat|InflClass=LatAnom|Number=Sing|Person=2|PronType=Prs	6	obl:arg	_	_
6	desset	desum	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	12	advcl	_	_
7	paternis	paternus	ADJ	C1	Case=Abl|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Plur	4	amod	_	_
8	hoc	hic	DET	I	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	12	obj	_	_
9	quoque	quoque	PART	M	_	8	advmod:emph	_	_
10	ex	ex	ADP	R	AdpType=Prep	11	case	_	_
11	illis	ille	DET	I	Case=Abl|Gender=Fem,Masc,Neut|InflClass=LatPron|Number=Plur|PronType=Dem	12	obl	_	_
12	habes	habeo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
13	errasse	erro	VERB	B1	Aspect=Perf|InflClass=LatA|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Act	8	conj:expl	_	_
14	thalamis	thalamus	NOUN	A2	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Plur	13	obl	_	_

~~~


