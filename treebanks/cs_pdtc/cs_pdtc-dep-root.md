---
layout: base
title:  'Statistics of root in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `root`

This relation is universal.

42853 nodes (6%) are attached to their parents as `root`.

42853 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.24831400368702.

The following 16 pairs of parts of speech are connected with `root`: -<tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt> (28065; 65% instances), -<tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt> (5930; 14% instances), -<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (3928; 9% instances), -<tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt> (1386; 3% instances), -<tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt> (1277; 3% instances), -<tt><a href="cs_pdtc-pos-PART.html">PART</a></tt> (647; 2% instances), -<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (382; 1% instances), -<tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt> (363; 1% instances), -<tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt> (326; 1% instances), -<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (284; 1% instances), -<tt><a href="cs_pdtc-pos-CCONJ.html">CCONJ</a></tt> (114; 0% instances), -<tt><a href="cs_pdtc-pos-X.html">X</a></tt> (81; 0% instances), -<tt><a href="cs_pdtc-pos-INTJ.html">INTJ</a></tt> (49; 0% instances), -<tt><a href="cs_pdtc-pos-SYM.html">SYM</a></tt> (17; 0% instances), -<tt><a href="cs_pdtc-pos-ADP.html">ADP</a></tt> (3; 0% instances), -<tt><a href="cs_pdtc-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Trápí	trápit	VERB	VB-P---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
2	vás	vy	PRON	PP-P4--2-------	Case=Acc|Number=Plur|Person=2|PronType=Prs	1	obj	1:obj	Entity=(cmpr9410009e1--1-gstype:gen)|Functor=1:PAT
3	daně	daň	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur	1	nsubj	1:nsubj	Entity=(cmpr9410009e12--1)|Functor=1:ACT|LGloss=(peněžní/naturální_dávka)|SpaceAfter=No
4	?	?	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	|	|	PUNCT	Z:-------------	_	3	punct	3:punct	_
2	Daňový	daňový	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	amod	3:amod	Entity=(cmpr9410009e6--2-gstype:spec|Functor=3:RSTR
3	poradce	poradce	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	Entity=cmpr9410009e6)|Functor=0:DENOM
4	|	|	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Jsou	být	AUX	VB-P---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	Functor=3:PRED
2	vám	vy	PRON	PP-P3--2-------	Case=Dat|Number=Plur|Person=2|PronType=Prs	3	obl	3:obl:dat	Entity=(cmpr9410009e1--1-gstype:gen)|Functor=3:BEN
3	nejasná	jasný	ADJ	AANP1----1N----	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Neg	0	root	0:root	Functor=0:PAT
4	některá	některý	DET	PZNP1----------	Case=Nom|Gender=Neut|Number=Plur|PronType=Ind	5	det	5:det	Functor=5:RSTR
5	ustanovení	ustanovení	NOUN	NNNP1-----A----	Case=Nom|Gender=Neut|Number=Plur|VerbForm=Vnoun	3	nsubj	3:nsubj	LDeriv=ustanovit|Functor=3:ACT.cop
6	daňových	daňový	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	7:amod	Functor=7:RSTR
7	zákonů	zákon	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	5	nmod	5:nmod:gen	SpaceAfter=No|Functor=5:APP
8	?	?	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


