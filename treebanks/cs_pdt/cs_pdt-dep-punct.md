---
layout: base
title:  'Statistics of punct in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `punct`

This relation is universal.

220961 nodes (15%) are attached to their parents as `punct`.

125501 instances of `punct` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.89619887672485.

The following 17 pairs of parts of speech are connected with `punct`: <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-PUNCT.html">PUNCT</a></tt> (116854; 53% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-PUNCT.html">PUNCT</a></tt> (41578; 19% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-PUNCT.html">PUNCT</a></tt> (26401; 12% instances), <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-PUNCT.html">PUNCT</a></tt> (18207; 8% instances), <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdt-pos-PUNCT.html">PUNCT</a></tt> (11497; 5% instances), <tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdt-pos-PUNCT.html">PUNCT</a></tt> (3473; 2% instances), <tt><a href="cs_pdt-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdt-pos-PUNCT.html">PUNCT</a></tt> (1285; 1% instances), <tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdt-pos-PUNCT.html">PUNCT</a></tt> (627; 0% instances), <tt><a href="cs_pdt-pos-PART.html">PART</a></tt>-<tt><a href="cs_pdt-pos-PUNCT.html">PUNCT</a></tt> (476; 0% instances), <tt><a href="cs_pdt-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_pdt-pos-PUNCT.html">PUNCT</a></tt> (179; 0% instances), <tt><a href="cs_pdt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_pdt-pos-PUNCT.html">PUNCT</a></tt> (94; 0% instances), <tt><a href="cs_pdt-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="cs_pdt-pos-PUNCT.html">PUNCT</a></tt> (94; 0% instances), <tt><a href="cs_pdt-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_pdt-pos-PUNCT.html">PUNCT</a></tt> (90; 0% instances), <tt><a href="cs_pdt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="cs_pdt-pos-PUNCT.html">PUNCT</a></tt> (59; 0% instances), <tt><a href="cs_pdt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="cs_pdt-pos-PUNCT.html">PUNCT</a></tt> (34; 0% instances), <tt><a href="cs_pdt-pos-X.html">X</a></tt>-<tt><a href="cs_pdt-pos-PUNCT.html">PUNCT</a></tt> (11; 0% instances), <tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_pdt-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 punct	color:blue
1	Potřebujete	potřebovat	VERB	VB-P---2P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	rychle	rychle	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	3:advmod	LDeriv=rychlý
3	poradit	poradit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	1	xcomp	1:xcomp	SpaceAfter=No
4	?	?	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 punct	color:blue
1	|	|	PUNCT	Z:-------------	_	2	punct	2:punct	_
2	Rady	rada	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	0	root	0:root	LId=rada-1|LGloss=(př._dát_někomu_dobrou_radu)
3	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	4:case	LId=na-1
4	telefon	telefon	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	2	nmod	2:nmod:na:acc	_
5	|	|	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 punct	color:blue
1	(	(	PUNCT	Z:-------------	_	3	punct	3:punct	SpaceAfter=No
2	Velmi	velmi	ADV	Db-------------	_	3	advmod	3:advmod	_
3	jemné	jemný	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	0	root	0:root	_
4	pouze	pouze	ADV	Db-------------	_	6	advmod:emph	6:advmod:emph	_
5	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	6:case	LId=na-1
6	příjmu	příjem	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	3	dep	3:dep	SpaceAfter=No
7	)	)	PUNCT	Z:-------------	_	3	punct	3:punct	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


