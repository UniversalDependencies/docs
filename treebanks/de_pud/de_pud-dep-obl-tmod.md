---
layout: base
title:  'Statistics of obl:tmod in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="de_pud-dep-obl.html">obl</a></tt>.

173 nodes (1%) are attached to their parents as `obl:tmod`.

113 instances of `obl:tmod` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.40462427745665.

The following 8 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (77; 45% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (38; 22% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (27; 16% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (20; 12% instances), <tt><a href="de_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="de_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obl:tmod	color:blue
1	Doch	_	CCONJ	CC	_	6	cc	_	_
2	in	in	ADP	APPR	_	4	case	_	_
3	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|Person=3	4	det	_	_
4	Jahr	_	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing|Person=3	6	obl	_	_
5	2016	_	NUM	CD	NumType=Card	4	obl:tmod	_	_
6	verdient	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
7	das	_	DET	DT	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|Person=3	6	nsubj	_	_
8	immer	_	ADV	RB	Degree=Pos	9	advmod	_	_
9	mehr	_	DET	DT	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|Person=3	10	det	_	_
10	Beachtung	_	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	6	obj	_	SpaceAfter=No
11	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 obl:tmod	color:blue
1	Ihr	_	PRON	DTP$	Case=Nom|Gender=Masc|Number=Sing|Person=3|Person[psor]=3|PronType=Prs	3	nmod:poss	_	_
2	erster	_	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Person=3	3	amod	_	InflectionType=Mixed
3	König	_	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
4	war	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	cop	_	_
5	Mojmír	_	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	_
6	I.	_	NOUN	NNA	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	appos	_	InflectionType=Weak|Proper=True
7	(	_	PUNCT	(	_	8	punct	_	SpaceAfter=No
8	herrschte	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	parataxis	_	_
9	830	_	NUM	CD	NumType=Card	8	obl:tmod	_	_
10	-	_	NUM	_	NumType=Card	9	compound	_	_
11	846	_	NUM	_	NumType=Card	9	compound	_	SpaceAfter=No
12	)	_	PUNCT	)	_	8	punct	_	SpaceAfter=No
13	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:tmod	color:blue
1	Die	_	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|Person=3	3	det	_	_
2	aktuelle	_	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Person=3	3	amod	_	InflectionType=Weak
3	Wartezeit	_	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	4	nsubj	_	_
4	beträgt	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
5	acht	_	NUM	CD	NumType=Card	6	nummod	_	_
6	Wochen	_	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur|Person=3	4	obl:tmod	_	SpaceAfter=No
7	.	_	PUNCT	.	_	4	punct	_	_

~~~


