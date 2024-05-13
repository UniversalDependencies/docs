---
layout: base
title:  'Statistics of nmod in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `nmod`

This relation is universal.

5557 nodes (15%) are attached to their parents as `nmod`.

5437 instances of `nmod` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.82364585207846.

The following 24 pairs of parts of speech are connected with `nmod`: <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (4029; 73% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-X.html">X</a></tt> (887; 16% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-X.html">X</a></tt> (407; 7% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (33; 1% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt> (24; 0% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt> (23; 0% instances), <tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (22; 0% instances), <tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_cltt-pos-X.html">X</a></tt> (21; 0% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt> (20; 0% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (18; 0% instances), <tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_cltt-pos-SYM.html">SYM</a></tt> (13; 0% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (12; 0% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (12; 0% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (11; 0% instances), <tt><a href="cs_cltt-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (8; 0% instances), <tt><a href="cs_cltt-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_cltt-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt>-<tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod	color:blue
1	Metoda	metoda	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	0	root	0:root	_
2	komponentního	komponentní	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	3	amod	3:amod	_
3	odpisování	odpisování	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	1	nmod	1:nmod:gen	_
4	majetku	majetek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	3	nmod	3:nmod:gen	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 nmod	color:blue
1	Položky	položka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	15	nsubj	15:nsubj|16:nsubj:xsubj	_
2	„	"	PUNCT	Z:-------------	_	3	punct	3:punct	SpaceAfter=No
3	AKTIVA	AKTIVA	X	X@-------------	_	1	nmod	1:nmod	LGloss=(from_multi_word_term)
4	CELKEM	CELKEM	X	X@-------------	_	3	nmod	3:nmod	SpaceAfter=No|LGloss=(from_multi_word_term)
5	“	"	PUNCT	Z:-------------	_	3	punct	3:punct	_
6	(	(	PUNCT	Z:-------------	_	7	punct	7:punct	SpaceAfter=No
7	netto	netto	PART	TT-------------	_	3	appos	3:appos	SpaceAfter=No
8	)	)	PUNCT	Z:-------------	_	7	punct	7:punct	_
9	a	a	CCONJ	J^-------------	_	11	cc	11:cc	LId=a-1
10	„	"	PUNCT	Z:-------------	_	11	punct	11:punct	SpaceAfter=No
11	PASIVA	PASIVA	X	X@-------------	_	3	conj	1:nmod|3:conj	LGloss=(from_multi_word_term)
12	CELKEM	CELKEM	X	X@-------------	_	11	nmod	11:nmod	SpaceAfter=No|LGloss=(from_multi_word_term)
13	“	"	PUNCT	Z:-------------	_	11	punct	11:punct	_
14	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	16	expl:pv	16:expl:pv	_
15	musí	muset	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
16	rovnat	rovnat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	15	xcomp	15:xcomp	SpaceAfter=No
17	.	.	PUNCT	Z:-------------	_	15	punct	15:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nmod	color:blue
1	Ustanovení	ustanovení	NOUN	NNNP1-----A----	Case=Nom|Gender=Neut|Number=Plur|Polarity=Pos	0	root	0:root	_
2	přechodná	přechodný	ADJ	AANP1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos	1	amod	1:amod	_
3	zavedena	zavedený	ADJ	VsQW---XX-AP---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	1	dep	1:dep	LDeriv=zavést
4	vyhláškou	vyhláška	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	3	obl:arg	3:obl:arg:ins	_
5	č._472/2003_Sb._Čl._II	č._472/2003_Sb._Čl._II	X	X@-------------	_	4	nmod	4:nmod	_

~~~


