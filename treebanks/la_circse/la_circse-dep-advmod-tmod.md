---
layout: base
title:  'Statistics of advmod:tmod in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `advmod:tmod`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="la_circse-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_circse-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="la_circse-dep-advmod-neg.html">advmod:neg</a></tt>.

304 nodes (2%) are attached to their parents as `advmod:tmod`.

237 instances of `advmod:tmod` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.75986842105263.

The following 6 pairs of parts of speech are connected with `advmod:tmod`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (251; 83% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (34; 11% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (13; 4% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 advmod:tmod	color:blue
1	nemo	nemo	PRON	L	Case=Nom|InflClass=IndEurX|Number=Sing|PronType=Neg	0	root	_	LiLaflcat=n7
2	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	LASLAVariant=1|LiLaflcat=v6
3	nisi	nisi	SCONJ	T	Polarity=Neg	4	mark	_	LiLaflcat=i
4	ipse	ipse	DET	I	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	1	det	_	LiLaflcat=p
5	bella	bellum	NOUN	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	9	obj	_	LiLaflcat=n2
6	iam	iam	ADV	M	Degree=Pos	9	advmod:tmod	_	LiLaflcat=i
7	se	sui	PRON	G	Case=Abl|InflClass=LatAnom|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	9	obl	_	LASLAVariant=1|LiLaflcat=p
8	cum	cum	ADP	R	AdpType=Prep	7	case	_	LASLAVariant=2|LiLaflcat=i
9	gerat	gero	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	LiLaflcat=v3

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod:tmod	color:blue
1	pecuniam	pecunia	NOUN	A1	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	2	obj	_	LiLaflcat=n1
2	probant	probo	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v1|TraditionalMood=Indicativus|TraditionalTense=Praesens
3	ueterem	uetus	ADJ	C2	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	1	amod	_	LiLaflcat=n7
4	et	et	CCONJ	S	_	6	cc	_	LASLAVariant=2|LiLaflcat=i
5	diu	diu	ADV	M	_	6	advmod:tmod	_	LiLaflcat=i
6	notam	notus	ADJ	C1	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing|VerbForm=Part	3	conj	_	LASLAVariant=2|LiLaflcat=n6
7	serratos	serratus	ADJ	C1	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Plur	1	conj:expl	_	LiLaflcat=n6
8	bigatos	bigatus	ADJ	C1	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Plur	7	conj	_	LiLaflcat=n6
9	que	que	CCONJ	S	_	8	cc	_	LiLaflcat=i

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 advmod:tmod	color:blue
1	famuli	famulus	NOUN	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur	0	root	_	LASLAVariant=1|LiLaflcat=n2
2	ne	ne	PART	O	PartType=Int	1	discourse	_	LASLAVariant=2|LiLaflcat=i
3	fuerant	sum	AUX	B6	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pqp|VerbForm=Fin	1	cop	_	LASLAVariant=1|LiLaflcat=v6
4	ante	ante	ADV	M	Degree=Pos	1	advmod:tmod	_	LiLaflcat=i
5	quam	quam	SCONJ	T	_	6	mark	_	LiLaflcat=i
6	fierent	fio	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	advcl:cmp	_	LiLaflcat=v6
7	dei	deus	NOUN	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur	6	xcomp	_	LiLaflcat=n2

~~~


