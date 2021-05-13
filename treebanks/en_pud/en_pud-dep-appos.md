---
layout: base
title:  'Statistics of appos in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `appos`

This relation is universal.

143 nodes (1%) are attached to their parents as `appos`.

143 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.28671328671329.

The following 14 pairs of parts of speech are connected with `appos`: <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (63; 44% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (23; 16% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (19; 13% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (18; 13% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="en_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="en_pud-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-X.html">X</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 appos	color:blue
1	Her	she	PRON	PRP$	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	nmod:poss	3:nmod:poss	_
2	1981	1981	NUM	CD	NumType=Card	3	compound	3:compound	_
3	album	album	NOUN	NN	Number=Sing	7	nsubj	7:nsubj	_
4	Wild	wild	ADJ	JJ	Degree=Pos	5	amod	5:amod	_
5	West	west	PROPN	NN	Number=Sing	3	appos	3:appos	_
6	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	cop	7:cop	_
7	one	one	NUM	CD	NumType=Card	0	root	0:root	_
8	of	of	ADP	IN	_	11	case	11:case	_
9	her	she	PRON	PRP$	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	11	nmod:poss	11:nmod:poss	_
10	biggest	biggest	ADJ	JJS	Degree=Sup	11	amod	11:amod	_
11	sellers	seller	NOUN	NNS	Number=Plur	7	nmod	7:nmod:of	SpaceAfter=No
12	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 appos	color:blue
1	They	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	3:nsubj	_
2	will	will	AUX	MD	VerbForm=Fin	3	aux	3:aux	_
3	play	play	VERB	VB	VerbForm=Inf	0	root	0:root	_
4	on	on	ADP	IN	_	5	case	5:case	_
5	Saturday	Saturday	PROPN	NNP	Number=Sing	3	obl	3:obl:on	SpaceAfter=No
6	,	,	PUNCT	,	_	5	punct	5:punct	_
7	10	10	NUM	CD	NumType=Card	8	nummod	8:nummod	_
8	June	June	PROPN	NNP	Number=Sing	5	appos	5:appos	SpaceAfter=No
9	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 appos	color:blue
1	Barón	Barón	PROPN	NNP	Number=Sing	0	root	0:root	_
2	de	de	PROPN	NNP	Number=Sing	1	flat	1:flat	_
3	Claret	Claret	PROPN	NNP	Number=Sing	1	flat	1:flat	SpaceAfter=No
4	,	,	PUNCT	,	_	7	punct	7:punct	_
5	the	the	DET	DT	Definite=Def|PronType=Art	7	det	7:det	_
6	only	only	ADJ	JJ	Degree=Pos	7	amod	7:amod	_
7	one	one	NOUN	NN	Number=Sing	1	appos	1:appos	_
8	in	in	ADP	IN	_	9	case	9:case	_
9	Government	government	NOUN	NN	Number=Sing	7	nmod	7:nmod:in	_
10	with	with	ADP	IN	_	13	case	13:case	_
11	a	a	DET	DT	Definite=Ind|PronType=Art	13	det	13:det	_
12	noble	noble	ADJ	JJ	Degree=Pos	13	amod	13:amod	_
13	title	title	NOUN	NN	Number=Sing	7	nmod	7:nmod:with	SpaceAfter=No
14	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


