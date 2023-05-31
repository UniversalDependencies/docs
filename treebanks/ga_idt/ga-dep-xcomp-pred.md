---
layout: base
title:  'Statistics of xcomp:pred in UD_Irish'
udver: '2'
---

## Treebank Statistics: UD_Irish: Relations: `xcomp:pred`

This relation is a language-specific subtype of <tt><a href="ga-dep-xcomp.html">xcomp</a></tt>.

531 nodes (2%) are attached to their parents as `xcomp:pred`.

527 instances of `xcomp:pred` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.61016949152542.

The following 26 pairs of parts of speech are connected with `xcomp:pred`: <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (181; 34% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-ADJ.html">ADJ</a></tt> (152; 29% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-ADP.html">ADP</a></tt> (59; 11% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-ADJ.html">ADJ</a></tt> (28; 5% instances), <tt><a href="ga-pos-PRON.html">PRON</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (23; 4% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (21; 4% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-ADV.html">ADV</a></tt> (18; 3% instances), <tt><a href="ga-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (8; 2% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-PROPN.html">PROPN</a></tt> (8; 2% instances), <tt><a href="ga-pos-AUX.html">AUX</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="ga-pos-PRON.html">PRON</a></tt>-<tt><a href="ga-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="ga-pos-PRON.html">PRON</a></tt>-<tt><a href="ga-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="ga-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="ga-pos-ADP.html">ADP</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="ga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="ga-pos-ADV.html">ADV</a></tt>-<tt><a href="ga-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ga-pos-AUX.html">AUX</a></tt>-<tt><a href="ga-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ga-pos-DET.html">DET</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga-pos-PART.html">PART</a></tt>-<tt><a href="ga-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ga-pos-PART.html">PART</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga-pos-PRON.html">PRON</a></tt>-<tt><a href="ga-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ga-pos-X.html">X</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 xcomp:pred	color:blue
1	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	3	nmod:poss	_	_
3	mhaide	maide	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	1	nsubj	_	_
4	siúil	siúl	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	3	compound	_	_
5	ina	i	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes	6	case	_	_
6	láimh	lámh	NOUN	Noun	Case=Dat|Gender=Fem|Number=Sing	1	xcomp:pred	_	_
7	aige	ag	ADP	Prep	Gender=Masc|Number=Sing|Person=3	6	obl:prep	_	SpaceAfter=No
8	...	...	PUNCT	Punct	_	9	punct	_	_
9	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	1	ccomp	_	_
10	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	11	det	_	_
11	áit	áit	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	9	nsubj	_	_
12	réabtha	réabtha	ADJ	Adj	VerbForm=Part	9	xcomp:pred	_	_
13	dóite	dóite	ADJ	Adj	VerbForm=Part	12	amod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 xcomp:pred	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp:pred	color:blue
1	Sin	sin	AUX	Cop	PronType=Dem|VerbForm=Cop	0	root	_	_
2	a	a	PART	Vb	PartType=Vb|PronType=Rel	3	mark:prt	_	_
3	bhfuil	bí	VERB	VI	Form=Ecl|Mood=Ind|Tense=Pres	1	csubj:cleft	_	_
4	ann	i	ADP	Prep	Gender=Masc|Number=Sing|Person=3	3	xcomp:pred	_	SpaceAfter=No
5	.	.	PUNCT	.	_	1	punct	_	_

~~~


