---
layout: base
title:  'Statistics of root in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `root`

This relation is universal.

19416 nodes (6%) are attached to their parents as `root`.

19416 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.53121137206428.

The following 17 pairs of parts of speech are connected with `root`: -<tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt> (12646; 65% instances), -<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (2493; 13% instances), -<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (1945; 10% instances), -<tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt> (1015; 5% instances), -<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (544; 3% instances), -<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (271; 1% instances), -<tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt> (235; 1% instances), -<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (95; 0% instances), -<tt><a href="cs_pdt-pos-X.html">X</a></tt> (52; 0% instances), -<tt><a href="cs_pdt-pos-PART.html">PART</a></tt> (40; 0% instances), -<tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt> (34; 0% instances), -<tt><a href="cs_pdt-pos-SYM.html">SYM</a></tt> (28; 0% instances), -<tt><a href="cs_pdt-pos-PUNCT.html">PUNCT</a></tt> (10; 0% instances), -<tt><a href="cs_pdt-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), -<tt><a href="cs_pdt-pos-INTJ.html">INTJ</a></tt> (2; 0% instances), -<tt><a href="cs_pdt-pos-ADP.html">ADP</a></tt> (1; 0% instances), -<tt><a href="cs_pdt-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Trápí	trápit	VERB	VB-P---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
2	vás	vy	PRON	PP-P4--2-------	Case=Acc|Number=Plur|Person=2|PronType=Prs	1	obj	1:obj	Entity=(cmpr9410009c1--1-gstype:gen)|Functor=1:PAT
3	daně	daň	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	1	nsubj	1:nsubj	Entity=(cmpr9410009c6--1)|Functor=1:ACT|LGloss=(peněžní/naturální_dávka)|SpaceAfter=No
4	?	?	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	|	|	PUNCT	Z:-------------	_	3	punct	3:punct	_
2	Daňový	daňový	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	amod	3:amod	Entity=(cmpr9410009c2--2-gstype:spec|Functor=3:RSTR
3	poradce	poradce	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	0	root	0:root	Entity=cmpr9410009c2)|Functor=0:DENOM
4	|	|	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Jsou	být	AUX	VB-P---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	Functor=3:PRED
2	vám	vy	PRON	PP-P3--2-------	Case=Dat|Number=Plur|Person=2|PronType=Prs	3	obl:arg	3:obl:arg:dat	Entity=(cmpr9410009c1--1-gstype:gen)|Functor=3:BEN
3	nejasná	jasný	ADJ	AANP1----1N----	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Neg	0	root	0:root	Functor=0:PAT
4	některá	některý	DET	PZNP1----------	Case=Nom|Gender=Neut|Number=Plur|PronType=Ind	5	det	5:det	Functor=5:RSTR
5	ustanovení	ustanovení	NOUN	NNNP1-----A----	Case=Nom|Gender=Neut|Number=Plur|Polarity=Pos|VerbForm=Vnoun	3	nsubj	3:nsubj	LDeriv=ustanovit|Functor=3:ACT.cop
6	daňových	daňový	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	7:amod	Functor=7:RSTR
7	zákonů	zákon	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	5	nmod	5:nmod:gen	SpaceAfter=No|Functor=5:APP
8	?	?	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


