---
layout: base
title:  'Statistics of advmod:emph in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="la_circse-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="la_circse-dep-advmod-neg.html">advmod:neg</a></tt>, <tt><a href="la_circse-dep-advmod-tmod.html">advmod:tmod</a></tt>.

107 nodes (1%) are attached to their parents as `advmod:emph`.

92 instances of `advmod:emph` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.11214953271028.

The following 16 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (23; 21% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-CCONJ.html">CCONJ</a></tt> (19; 18% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (18; 17% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (13; 12% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (6; 6% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (5; 5% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (4; 4% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-CCONJ.html">CCONJ</a></tt> (3; 3% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-PART.html">PART</a></tt> (2; 2% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-CCONJ.html">CCONJ</a></tt> (2; 2% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-CCONJ.html">CCONJ</a></tt> (2; 2% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-CCONJ.html">CCONJ</a></tt> (2; 2% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 advmod:emph	color:blue
1	memorare	memoro	VERB	B1	Aspect=Imp|InflClass=LatA|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Act	2	xcomp	_	LiLaflcat=v1
2	cogis	cogo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v3
3	acta	actum	NOUN	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	1	obj	_	LiLaflcat=n2
4	securae	securus	ADJ	C1	Case=Dat|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	7	amod	_	LiLaflcat=n6
5	quoque	quoque	ADV	M	Degree=Pos	7	advmod:emph	_	LiLaflcat=i
6	horrenda	horrendus	ADJ	C1	Case=Acc|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Plur	3	amod	_	LiLaflcat=n6
7	menti	mens	NOUN	A3	Case=Dat|Gender=Fem|InflClass=IndEurI|Number=Sing	6	obl:arg	_	LiLaflcat=n3

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 advmod:emph	color:blue
1	silentium	silentium	NOUN	A2	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	10	nsubj:pass	_	LiLaflcat=n2
2	per	per	ADP	R	_	3	case	_	LiLaflcat=i
3	sacerdotes	sacerdos	NOUN	A3	Case=Acc|Gender=Masc|InflClass=IndEurX|Number=Plur	10	obl	_	LiLaflcat=n3
4	quibus	qui	PRON	J	Case=Dat|Gender=Masc|InflClass=LatPron|Number=Plur|PronType=Rel	3	acl:relcl	_	LASLAVariant=1|LiLaflcat=p
5	tum	tum	ADV	M	AdvType=Tim	4	advmod:tmod	_	LiLaflcat=i
6	et	et	CCONJ	M	_	8	advmod:emph	_	LASLAVariant=1|LiLaflcat=i
7	coercendi	coerceo	VERB	B2	Aspect=Prosp|Case=Gen|Gender=Neut|InflClass=LatE|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	8	acl	_	LiLaflcat=v2|TraditionalMood=Gerundium
8	ius	ius	NOUN	A3	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing	4	nsubj	_	LASLAVariant=1|LiLaflcat=n3
9	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	LASLAVariant=1|LiLaflcat=v6|TraditionalMood=Indicativus|TraditionalTense=Praesens
10	imperatur	impero	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LiLaflcat=v1|TraditionalMood=Indicativus|TraditionalTense=Praesens

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod:emph	color:blue
1	pectus	pectus	NOUN	A3	Case=Voc|Gender=Neut|InflClass=IndEurX|Number=Sing	0	root	_	LiLaflcat=n3
2	o	o	PART	U	PartType=Emp	1	advmod:emph	_	LiLaflcat=i
3	nimium	nimium	ADV	M	Degree=Pos	4	advmod	_	LASLAVariant=2|LiLaflcat=i
4	ferum	ferus	ADJ	C1	Case=Voc|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	1	amod	_	LASLAVariant=2|LiLaflcat=n6

~~~


