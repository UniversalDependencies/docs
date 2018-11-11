---
layout: base
title:  'Statistics of nummod in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nummod`

This relation is universal.

686 nodes (1%) are attached to their parents as `nummod`.

580 instances of `nummod` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26967930029155.

The following 17 pairs of parts of speech are connected with `nummod`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (580; 85% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (42; 6% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (28; 4% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (8; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (6; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="en_gum-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PART.html">PART</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	In	in	ADP	IN	_	3	case	_	_
2	fifteen	fifteen	NUM	CD	NumType=Card	3	nummod	_	_
3	minutes	minute	NOUN	NNS	Number=Plur	7	nmod	_	_
4	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
5	would	would	AUX	MD	VerbForm=Fin	7	aux	_	_
6	be	be	AUX	VB	VerbForm=Inf	7	cop	_	_
7	home	home	NOUN	NN	Number=Sing	0	root	_	_
8	and	and	CCONJ	CC	_	12	cc	_	_
9	my	my	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	10	nmod:poss	_	_
10	mother	mother	NOUN	NN	Number=Sing	12	nsubj	_	_
11	would	would	AUX	MD	VerbForm=Fin	12	aux	_	_
12	fry	fry	VERB	VB	VerbForm=Inf	7	conj	_	_
13	eggs	egg	NOUN	NNS	Number=Plur	12	obj	_	SpaceAfter=No
14	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	9	9	X	LS	_	3	dep	_	_
2	Chehel	Chehel	PROPN	NNP	Number=Sing	3	compound	_	_
3	Sotoun	Sotoun	PROPN	NNP	Number=Sing	0	root	_	_
4	(	(	PUNCT	-LRB-	_	6	punct	_	SpaceAfter=No
5	The	the	DET	DT	Definite=Def|PronType=Art	6	det	_	_
6	Palace	palace	PROPN	NNP	Number=Sing	3	appos	_	_
7	of	of	ADP	IN	_	9	case	_	_
8	Forty	forty	NUM	CD	NumType=Card	9	nummod	_	_
9	Columns	column	PROPN	NNPS	Number=Plur	6	nmod	_	SpaceAfter=No
10	)	)	PUNCT	-RRB-	_	6	punct	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nummod	color:blue
1	Through	through	ADP	IN	_	2	case	_	_
2	them	them	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs	5	obl	_	_
3	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
4	may	may	AUX	MD	VerbForm=Fin	5	aux	_	_
5	cost	cost	VERB	VB	VerbForm=Inf	0	root	_	_
6	£	£	SYM	SYM	_	5	obj	_	_
7	20	@card@	NUM	CD	NumType=Card	6	nummod	_	_
8	in	in	ADP	IN	_	9	case	_	_
9	total	total	NOUN	NN	Number=Sing	5	obl	_	_
10	per	per	ADP	IN	_	11	case	_	_
11	person	person	NOUN	NN	Number=Sing	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	_	_

~~~


