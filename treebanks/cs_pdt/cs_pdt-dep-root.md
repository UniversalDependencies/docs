---
layout: base
title:  'Statistics of root in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `root`

This relation is universal.

87913 nodes (6%) are attached to their parents as `root`.

87913 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.53221935322421.

The following 15 pairs of parts of speech are connected with `root`: -<tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt> (59200; 67% instances), -<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (11636; 13% instances), -<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (8969; 10% instances), -<tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt> (5197; 6% instances), -<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (1200; 1% instances), -<tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt> (888; 1% instances), -<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (367; 0% instances), -<tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt> (196; 0% instances), -<tt><a href="cs_pdt-pos-PART.html">PART</a></tt> (132; 0% instances), -<tt><a href="cs_pdt-pos-SYM.html">SYM</a></tt> (36; 0% instances), -<tt><a href="cs_pdt-pos-CCONJ.html">CCONJ</a></tt> (29; 0% instances), -<tt><a href="cs_pdt-pos-PUNCT.html">PUNCT</a></tt> (24; 0% instances), -<tt><a href="cs_pdt-pos-ADP.html">ADP</a></tt> (17; 0% instances), -<tt><a href="cs_pdt-pos-INTJ.html">INTJ</a></tt> (17; 0% instances), -<tt><a href="cs_pdt-pos-SCONJ.html">SCONJ</a></tt> (5; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Potřebujete	potřebovat	VERB	VB-P---2P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	rychle	rychle	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	3:advmod	LDeriv=rychlý
3	poradit	poradit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	1	xcomp	1:xcomp	SpaceAfter=No
4	?	?	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	|	|	PUNCT	Z:-------------	_	2	punct	2:punct	_
2	Rady	rada	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	0	root	0:root	LId=rada-1|LGloss=(př._dát_někomu_dobrou_radu)
3	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	4:case	LId=na-1
4	telefon	telefon	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	2	nmod	2:nmod:na:acc	_
5	|	|	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
1	Váš	tvůj	DET	PSIS4-P2-------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Number[psor]=Plur|Person=2|Poss=Yes|PronType=Prs	4	det	4:det	LGloss=(přivlast.)
2	obecně	obecně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	3:advmod	LDeriv=obecný
3	platný	platný	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	4	amod	4:amod	_
4	dotaz	dotaz	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	7	obj	7:obj	_
5	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
6	připraven	připravený	ADJ	VsYS---XX-AP---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	LDeriv=připravit
7	zodpovědět	zodpovědět	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	6	xcomp	6:xcomp	_
8	spolupracovník	spolupracovník	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	6	nsubj	6:nsubj	_
9	Profitu	profit	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	8	nmod	8:nmod:gen	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


