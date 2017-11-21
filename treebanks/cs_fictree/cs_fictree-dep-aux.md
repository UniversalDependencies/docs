---
layout: base
title:  'Statistics of aux in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="cs_fictree-dep-aux-pass.html">aux:pass</a></tt>.

4168 nodes (2%) are attached to their parents as `aux`.

2819 instances of `aux` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.84932821497121.

The following 9 pairs of parts of speech are connected with `aux`: <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (4005; 96% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (99; 2% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (44; 1% instances), <tt><a href="cs_fictree-pos-PART.html">PART</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="cs_fictree-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="cs_fictree-pos-DET.html">DET</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux	color:blue
1	Daly	dát	VERB	VpFP----R-AA---	Gender=Fem|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	jsme	být	AUX	VB-P---1P-AA---	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	_	_
3	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pv	_	_
4	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	5	case	_	_
5	řeči	řeč	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	1	obl:arg	_	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux	color:blue
1	Litoval	litovat	VERB	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	_	_
3	ho	on	PRON	PHMS4--3-------	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Variant=Short	1	obj	_	_
4	a	a	CCONJ	J^-------------	_	7	cc	_	_
5	byl	být	AUX	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	7	cop	_	_
6	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
7	šťastný	šťastný	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	1	conj	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
1	Jeho	jeho	DET	PSIP1IS3-------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	_	_
2	listy	list	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	6	nsubj	_	_
3	jako	jako	SCONJ	J,-------------	_	6	mark	_	_
4	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	6	aux	_	_
5	byly	být	AUX	VpIP----R-AA---	Animacy=Inan|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	6	cop	_	_
6	prsty	prst	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	0	root	_	_
7	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	9	case	_	_
8	lidské	lidský	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	9	amod	_	_
9	ruce	ruka	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


