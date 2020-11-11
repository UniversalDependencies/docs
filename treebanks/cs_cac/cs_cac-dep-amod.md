---
layout: base
title:  'Statistics of amod in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `amod`

This relation is universal.

61528 nodes (12%) are attached to their parents as `amod`.

55719 instances of `amod` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32646924977246.

The following 18 pairs of parts of speech are connected with `amod`: <tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt> (60181; 98% instances), <tt><a href="cs_cac-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt> (627; 1% instances), <tt><a href="cs_cac-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt> (154; 0% instances), <tt><a href="cs_cac-pos-DET.html">DET</a></tt>-<tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt> (151; 0% instances), <tt><a href="cs_cac-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt> (104; 0% instances), <tt><a href="cs_cac-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt> (96; 0% instances), <tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (84; 0% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt> (82; 0% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt> (14; 0% instances), <tt><a href="cs_cac-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (10; 0% instances), <tt><a href="cs_cac-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (8; 0% instances), <tt><a href="cs_cac-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="cs_cac-pos-DET.html">DET</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="cs_cac-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cac-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cac-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="cs_cac-pos-PART.html">PART</a></tt>-<tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	Vypracování	vypracování	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	0	root	0:root	LDeriv=vypracovat
2	nových	nový	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	3	amod	3:amod	_
3	principů	princip	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	1	nmod	1:nmod:gen	_
4	regulace	regulace	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	3	nmod	3:nmod:gen	_
5	vodního	vodní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	6:amod	_
6	režimu	režim	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	4	nmod	4:nmod:gen	_
7	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	8:case	LId=v-1
8	půdě	půda	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	6	nmod	6:nmod:v:loc	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 amod	color:blue
1	Příprava	příprava	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	0	root	0:root	_
2	výstavby	výstavba	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	1	nmod	1:nmod:gen	_
3	společné	společný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	4:amod	_
4	ČOV	ČOV	NOUN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|Polarity=Pos	2	nmod	2:nmod	_
5	Dvůr	Dvůr	PROPN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|NameType=Geo|Number=Sing|Polarity=Pos	4	nmod	4:nmod:nom	_
6	Králové	Králové	ADJ	AAXXX----1A----	Degree=Pos|NameType=Geo|Polarity=Pos	5	amod	5:amod	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 amod	color:blue
1	Především	především	ADV	Db-------------	_	2	advmod	2:advmod	_
2	záleží	záležet	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	5:case	LId=na-1
4	vrozené	vrozený	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	5	amod	5:amod	LDeriv=vrodit
5	*	&cwildcard;	SYM	Xx-------------	Abbr=Yes	2	obl:arg	2:obl:arg:na	_
6	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


