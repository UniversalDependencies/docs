---
layout: base
title:  'Statistics of punct in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Relations: `punct`

This relation is universal.

220974 nodes (15%) are attached to their parents as `punct`.

125517 instances of `punct` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.91306669562935.

The following 18 pairs of parts of speech are connected with `punct`: <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-PUNCT.html">PUNCT</a></tt> (116875; 53% instances), <tt><a href="cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs-pos-PUNCT.html">PUNCT</a></tt> (40812; 18% instances), <tt><a href="cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs-pos-PUNCT.html">PUNCT</a></tt> (26094; 12% instances), <tt><a href="cs-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs-pos-PUNCT.html">PUNCT</a></tt> (19366; 9% instances), <tt><a href="cs-pos-NUM.html">NUM</a></tt>-<tt><a href="cs-pos-PUNCT.html">PUNCT</a></tt> (11628; 5% instances), <tt><a href="cs-pos-ADV.html">ADV</a></tt>-<tt><a href="cs-pos-PUNCT.html">PUNCT</a></tt> (3410; 2% instances), <tt><a href="cs-pos-DET.html">DET</a></tt>-<tt><a href="cs-pos-PUNCT.html">PUNCT</a></tt> (1268; 1% instances), <tt><a href="cs-pos-PRON.html">PRON</a></tt>-<tt><a href="cs-pos-PUNCT.html">PUNCT</a></tt> (604; 0% instances), <tt><a href="cs-pos-PART.html">PART</a></tt>-<tt><a href="cs-pos-PUNCT.html">PUNCT</a></tt> (456; 0% instances), <tt><a href="cs-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="cs-pos-PUNCT.html">PUNCT</a></tt> (161; 0% instances), <tt><a href="cs-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs-pos-PUNCT.html">PUNCT</a></tt> (80; 0% instances), <tt><a href="cs-pos-SYM.html">SYM</a></tt>-<tt><a href="cs-pos-PUNCT.html">PUNCT</a></tt> (74; 0% instances), <tt><a href="cs-pos-INTJ.html">INTJ</a></tt>-<tt><a href="cs-pos-PUNCT.html">PUNCT</a></tt> (58; 0% instances), <tt><a href="cs-pos-ADP.html">ADP</a></tt>-<tt><a href="cs-pos-PUNCT.html">PUNCT</a></tt> (41; 0% instances), <tt><a href="cs-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="cs-pos-PUNCT.html">PUNCT</a></tt> (33; 0% instances), <tt><a href="cs-pos-X.html">X</a></tt>-<tt><a href="cs-pos-PUNCT.html">PUNCT</a></tt> (11; 0% instances), <tt><a href="cs-pos-AUX.html">AUX</a></tt>-<tt><a href="cs-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 punct	color:blue
1	Potřebujete	potřebovat	VERB	VB-P---2P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	rychle	rychle	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	_	LDeriv=rychlý
3	poradit	poradit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	1	xcomp	_	SpaceAfter=No
4	?	?	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 punct	color:blue
1	|	|	PUNCT	Z:-------------	_	2	punct	_	_
2	Rady	rada	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	0	root	_	LId=rada-1|LGloss=(př._dát_někomu_dobrou_radu)
3	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	_	LId=na-1
4	telefon	telefon	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	2	nmod	_	_
5	|	|	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 punct	color:blue
1	(	(	PUNCT	Z:-------------	_	3	punct	_	SpaceAfter=No
2	Velmi	velmi	ADV	Db-------------	_	3	advmod	_	_
3	jemné	jemný	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	0	root	_	_
4	pouze	pouze	ADV	Db-------------	_	6	advmod:emph	_	_
5	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	_	LId=na-1
6	příjmu	příjem	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	3	dep	_	SpaceAfter=No
7	)	)	PUNCT	Z:-------------	_	3	punct	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


