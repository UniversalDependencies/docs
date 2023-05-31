---
layout: base
title:  'Statistics of discourse in UD_Basque'
udver: '2'
---

## Treebank Statistics: UD_Basque: Relations: `discourse`

This relation is universal.

66 nodes (0%) are attached to their parents as `discourse`.

41 instances of `discourse` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.66666666666667.

The following 17 pairs of parts of speech are connected with `discourse`: <tt><a href="eu-pos-VERB.html">VERB</a></tt>-<tt><a href="eu-pos-PART.html">PART</a></tt> (16; 24% instances), <tt><a href="eu-pos-VERB.html">VERB</a></tt>-<tt><a href="eu-pos-INTJ.html">INTJ</a></tt> (12; 18% instances), <tt><a href="eu-pos-AUX.html">AUX</a></tt>-<tt><a href="eu-pos-INTJ.html">INTJ</a></tt> (7; 11% instances), <tt><a href="eu-pos-VERB.html">VERB</a></tt>-<tt><a href="eu-pos-CCONJ.html">CCONJ</a></tt> (6; 9% instances), <tt><a href="eu-pos-AUX.html">AUX</a></tt>-<tt><a href="eu-pos-PART.html">PART</a></tt> (4; 6% instances), <tt><a href="eu-pos-VERB.html">VERB</a></tt>-<tt><a href="eu-pos-ADJ.html">ADJ</a></tt> (4; 6% instances), <tt><a href="eu-pos-AUX.html">AUX</a></tt>-<tt><a href="eu-pos-X.html">X</a></tt> (3; 5% instances), <tt><a href="eu-pos-VERB.html">VERB</a></tt>-<tt><a href="eu-pos-ADV.html">ADV</a></tt> (3; 5% instances), <tt><a href="eu-pos-VERB.html">VERB</a></tt>-<tt><a href="eu-pos-X.html">X</a></tt> (3; 5% instances), <tt><a href="eu-pos-AUX.html">AUX</a></tt>-<tt><a href="eu-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="eu-pos-AUX.html">AUX</a></tt>-<tt><a href="eu-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="eu-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="eu-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="eu-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="eu-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="eu-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="eu-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="eu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="eu-pos-VERB.html">VERB</a></tt>-<tt><a href="eu-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="eu-pos-VERB.html">VERB</a></tt>-<tt><a href="eu-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
1	Ez	ez	PART	_	Polarity=Neg	6	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	6	punct	_	_
3	ez	ez	PART	_	Polarity=Neg	6	advmod	_	_
4	naiz	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Person[abs]=1	6	aux	_	_
5	bakarrik	bakarrik	ADV	_	_	6	advmod	_	_
6	egoiten	egon	VERB	_	Aspect=Imp|VerbForm=Inf	0	root	_	_
7	e	e	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Sing	6	vocative	_	SpaceAfter=No
8	!	!	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 discourse	color:blue
1	-	-	PUNCT	_	_	8	punct	_	_
2	Eskerrak	eskerrak	INTJ	_	_	8	discourse	_	_
3	ez	ez	PART	_	Polarity=Neg	8	advmod	_	_
4	nintzen	izan	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=1	8	aux	_	_
5	garai	garai	NOUN	_	_	8	obl	_	_
6	hartan	hura	DET	_	Case=Ine|Definite=Def|Number=Sing	5	det	_	_
7	bizi	bizi	NOUN	_	Case=Abs|Definite=Ind	8	compound	_	_
8	izan	izan	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	SpaceAfter=No
9	!	!	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 discourse	color:blue
1	hari	hura	DET	_	Case=Dat|Definite=Def|Number=Sing	2	nmod	_	_
2	buruzkoak	buruz	NOUN	_	Case=Abs|Definite=Def|Number=Plur	3	obj	_	_
3	jakiteko	jakin	VERB	_	Case=Abs|Definite=Ind	5	advcl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	9	punct	_	_
5	egon	egon	AUX	_	VerbForm=Part	9	cop	_	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	_
7	arren	arren	INTJ	_	_	5	discourse	_	SpaceAfter=No
8	,	,	PUNCT	_	_	5	punct	_	_
9	adi	adi	ADV	_	_	0	root	_	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


