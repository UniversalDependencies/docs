---
layout: base
title:  'Statistics of mark:prt in UD_Irish'
udver: '2'
---

## Treebank Statistics: UD_Irish: Relations: `mark:prt`

This relation is a language-specific subtype of <tt><a href="ga-dep-mark.html">mark</a></tt>.

764 nodes (3%) are attached to their parents as `mark:prt`.

746 instances of `mark:prt` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.07068062827225.

The following 19 pairs of parts of speech are connected with `mark:prt`: <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-PART.html">PART</a></tt> (526; 69% instances), <tt><a href="ga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga-pos-PART.html">PART</a></tt> (131; 17% instances), <tt><a href="ga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (40; 5% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-SCONJ.html">SCONJ</a></tt> (22; 3% instances), <tt><a href="ga-pos-NUM.html">NUM</a></tt>-<tt><a href="ga-pos-PART.html">PART</a></tt> (9; 1% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-PART.html">PART</a></tt> (7; 1% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-ADP.html">ADP</a></tt> (6; 1% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="ga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="ga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="ga-pos-ADP.html">ADP</a></tt>-<tt><a href="ga-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="ga-pos-NUM.html">NUM</a></tt>-<tt><a href="ga-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="ga-pos-X.html">X</a></tt>-<tt><a href="ga-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ga-pos-X.html">X</a></tt>-<tt><a href="ga-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 mark:prt	color:blue
1	Ansin	ansin	ADV	Loc	_	6	advmod	_	_
2	nach	is	AUX	Cop	Mood=Int|Polarity=Neg|Tense=Pres|VerbForm=Cop	6	cop	_	_
3	deas	deas	ADJ	Adj	Degree=Pos	6	xcomp:pred	_	_
4	mar	mar	SCONJ	Subord	_	6	mark	_	_
5	a	a	PART	Vb	PartType=Vb|PronType=Rel	6	mark:prt	_	_
6	bheadh	bí	VERB	Cond	Form=Len|Mood=Cnd	0	root	_	_
7	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	8	det	_	_
8	scéal	scéal	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	6	nsubj	_	_
9	a'm	ag	ADP	Prep	Number=Sing|Person=1	6	obl:prep	_	SpaceAfter=No
10	?	?	PUNCT	?	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 mark:prt	color:blue
1	Bronnfar	bronn	VERB	VT	Mood=Ind|Tense=Fut|Voice=Auto	0	root	_	_
2	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	1	obj	_	_
3	ar	ar	ADP	Simp	_	5	case	_	_
4	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	5	det	_	_
5	Chnuasach	cnuasach	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	1	obl	_	_
6	Gearrscéalta	gearrscéal	NOUN	Noun	Case=Gen|Gender=Masc|NounType=Strong|Number=Plur	5	compound	_	_
7	nó	nó	CCONJ	Coord	_	9	cc	_	_
8	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	9	det	_	_
9	dráma	dráma	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	5	conj	_	_
10	is	is	PART	Sup	_	11	mark:prt	_	_
11	fearr	maith	ADJ	Adj	Degree=Cmp,Sup	5	amod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 mark:prt	color:blue
1	(	(	PUNCT	Punct	_	2	punct	_	SpaceAfter=No
2	postas	postas	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
3	níos	níos	NOUN	Subst	Number=Sing|PartType=Comp	4	mark:prt	_	_
4	mó	mór	ADJ	Adj	Degree=Cmp,Sup	2	amod	_	SpaceAfter=No
5	)	)	PUNCT	Punct	_	4	punct	_	SpaceAfter=No
6	.	.	PUNCT	.	_	2	punct	_	_

~~~


