---
layout: base
title:  'Statistics of obl:tmod in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="de_pud-dep-obl.html">obl</a></tt>.

120 nodes (1%) are attached to their parents as `obl:tmod`.

68 instances of `obl:tmod` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.475.

The following 8 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (42; 35% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (37; 31% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (23; 19% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (8; 7% instances), <tt><a href="de_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="de_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 obl:tmod	color:blue
1	Ihr	Ihr|ihr	PRON	DTP$	Case=Nom|Gender=Masc|Number=Sing|Person=3|Person[psor]=3|PronType=Prs	3	nmod:poss	_	_
2	erster	erst	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Person=3	3	amod	_	InflectionType=Mixed
3	König	König	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
4	war	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	cop	_	_
5	Mojmír	Mojmír	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	_
6	I.	I.	NOUN	NNA	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	appos	_	InflectionType=Weak|Proper=True
7	(	(	PUNCT	(	_	8	punct	_	SpaceAfter=No
8	herrschte	herrschen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	parataxis	_	_
9	830	830	NUM	CD	NumType=Card	8	obl:tmod	_	_
10	-	-	NUM	_	NumType=Card	9	compound	_	_
11	846	846	NUM	_	NumType=Card	9	compound	_	SpaceAfter=No
12	)	)	PUNCT	)	_	8	punct	_	SpaceAfter=No
13	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:tmod	color:blue
1	Die	der	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|Person=3	3	det	_	_
2	aktuelle	aktuell	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Person=3	3	amod	_	InflectionType=Weak
3	Wartezeit	Wartezeit	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	4	nsubj	_	_
4	beträgt	betragen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
5	acht	acht	NUM	CD	NumType=Card	6	nummod	_	_
6	Wochen	Woche	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur|Person=3	4	obl:tmod	_	SpaceAfter=No
7	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 obl:tmod	color:blue
1	Ihr	Ihr|ihr	PRON	DTP$	Case=Nom|Gender=Neut|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|PronType=Prs	2	nmod:poss	_	_
2	Album	Album	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing|Person=3	10	nsubj	_	_
3	Wild	Wild	ADJ	JJ	Case=Nom|Degree=Pos|Number=Sing|Person=3	4	amod	_	Proper=True
4	West	West	NOUN	NN	Case=Nom|Number=Sing|Person=3	2	appos	_	Proper=True
5	aus	aus	ADP	IN	_	7	case	_	_
6	dem	der	DET	DT	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|Person=3	7	det	_	_
7	Jahr	Jahr	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing|Person=3	2	nmod	_	_
8	1981	1981	NUM	CD	NumType=Card	7	obl:tmod	_	_
9	war	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	10	cop	_	_
10	einer	ein	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	_
11	ihrer	ihr	PRON	DTP$	Case=Gen|Gender=Masc|Gender[psor]=Fem|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3|PronType=Prs	13	nmod:poss	_	_
12	größten	groß	ADJ	JJ	Case=Gen|Degree=Cmp|Gender=Masc|Number=Plur|Person=3	13	amod	_	InflectionType=Mixed
13	Verkaufsschlager	Verkaufsschlager	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur|Person=3	10	nmod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	10	punct	_	_

~~~


