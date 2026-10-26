---
layout: base
title:  'Statistics of advmod:tmod in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `advmod:tmod`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="la_circse-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_circse-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="la_circse-dep-advmod-neg.html">advmod:neg</a></tt>.

459 nodes (2%) are attached to their parents as `advmod:tmod`.

358 instances of `advmod:tmod` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.57298474945534.

The following 7 pairs of parts of speech are connected with `advmod:tmod`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (379; 83% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (50; 11% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (19; 4% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod:tmod	color:blue
1	nunc	nunc	ADV	M	Degree=Pos	2	advmod:tmod	_	LiLaflcat=i
2	ede	edo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LASLAVariant=1|LiLaflcat=v3
3	nati	natus	NOUN	A2	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Sing	5	nmod	_	LASLAVariant=1|LiLaflcat=n2
4	nobilem	nobilis	ADJ	C4	Case=Acc|Degree=Pos|Gender=Fem|InflClass=IndEurI|Number=Sing	5	amod	_	LASLAVariant=2|LiLaflcat=n7
5	pugnam	pugna	NOUN	A1	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	2	obj	_	LiLaflcat=n1
6	mei	meus	DET	F	Case=Gen|Gender=Masc|InflClass=IndEurO|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	3	det	_	LiLaflcat=n6

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod:tmod	color:blue
1	hoc	hic	DET	I	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	4	nsubj	_	_
2	quoque	quoque	PART	M	_	1	advmod:emph	_	_
3	etiamnunc	etiamnunc	ADV	M	Degree=Pos	4	advmod:tmod	_	_
4	leue	leuis	ADJ	C4	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurI|Number=Sing	0	root	_	_
5	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
6	peperi	pario	VERB	B5	Aspect=Perf|InflClass=LatI2|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	4	conj	_	_
7	nocentes	nocens	ADJ	C5	Case=Acc|Degree=Pos|Gender=Fem,Masc|InflClass=IndEurI|Number=Plur	6	obj	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod:tmod	color:blue
1	nunc	nunc	ADV	M	Degree=Pos	3	advmod:tmod	_	LiLaflcat=i
2	Hercule	hercules	PROPN	A3	Case=Abl|Gender=Masc|InflClass=IndEurI|NameType=Giv|Number=Sing	3	obl:arg	_	LASLAVariant=N|LiLaflcat=n3
3	opus	opus	NOUN	A6	Gender=Neut|InflClass=Ind	0	root	_	LASLAVariant=2|LiLaflcat=n
4	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	LASLAVariant=1|LiLaflcat=v6
5	perfer	perfero	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	LiLaflcat=v6
6	hanc	hic	DET	I	Case=Acc|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	7	det	_	LASLAVariant=1|LiLaflcat=p
7	molem	moles	NOUN	A3	Case=Acc|Gender=Fem|InflClass=IndEurI|Number=Sing	5	obj	_	LiLaflcat=n3
8	mali	malum	NOUN	A2	Case=Gen|Gender=Neut|InflClass=IndEurO|Number=Sing	7	nmod	_	LASLAVariant=1|LiLaflcat=n2

~~~


