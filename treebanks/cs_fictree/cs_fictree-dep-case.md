---
layout: base
title:  'Statistics of case in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `case`

This relation is universal.

12308 nodes (7%) are attached to their parents as `case`.

12306 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33799155021124.

The following 15 pairs of parts of speech are connected with `case`: <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-ADP.html">ADP</a></tt> (9230; 75% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-ADP.html">ADP</a></tt> (1816; 15% instances), <tt><a href="cs_fictree-pos-DET.html">DET</a></tt>-<tt><a href="cs_fictree-pos-ADP.html">ADP</a></tt> (584; 5% instances), <tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_fictree-pos-ADP.html">ADP</a></tt> (422; 3% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-ADP.html">ADP</a></tt> (129; 1% instances), <tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_fictree-pos-ADP.html">ADP</a></tt> (69; 1% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (22; 0% instances), <tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_fictree-pos-ADP.html">ADP</a></tt> (14; 0% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt> (11; 0% instances), <tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="cs_fictree-pos-X.html">X</a></tt>-<tt><a href="cs_fictree-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cs_fictree-pos-PART.html">PART</a></tt>-<tt><a href="cs_fictree-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	Daly	dát	VERB	VpFP----R-AA---	Gender=Fem|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
2	jsme	být	AUX	VB-P---1P-AA---	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	1:aux	_
3	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pv	1:expl:pv	_
4	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	5	case	5:case	_
5	řeči	řeč	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	1	obl:arg	1:obl:arg:do:gen	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	Jistě	jistě	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	5	advmod	5:advmod	_
2	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	5:aux	_
3	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	4	case	4:case	_
4	něj	on	PRON	P5MS2--3-------	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs	5	obl	5:obl:u:gen	_
5	stoupla	stoupnout	VERB	VpFS----R-AA--1	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
6	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	7:case	_
7	ceně	cena	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	5	obl	5:obl:v:loc	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case	color:blue
1	O	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	2	case	2:case	_
2	tohle	tenhle	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	3	obl:arg	3:obl:arg:o:acc	_
3	jde	jít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
4	:	:	PUNCT	Z:-------------	_	5	punct	5:punct	_
5	neurazit	urazit	VERB	Vf--------N----	Polarity=Neg|VerbForm=Inf	2	appos	2:appos	_
6	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pv	5:expl:pv	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


