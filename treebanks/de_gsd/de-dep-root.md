---
layout: base
title:  'Statistics of root in UD_German'
udver: '2'
---

## Treebank Statistics: UD_German: Relations: `root`

This relation is universal.

15590 nodes (5%) are attached to their parents as `root`.

15590 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.44169339320077.

The following 13 pairs of parts of speech are connected with `root`: -<tt><a href="de-pos-VERB.html">VERB</a></tt> (11419; 73% instances), -<tt><a href="de-pos-NOUN.html">NOUN</a></tt> (2175; 14% instances), -<tt><a href="de-pos-ADJ.html">ADJ</a></tt> (1517; 10% instances), -<tt><a href="de-pos-PROPN.html">PROPN</a></tt> (295; 2% instances), -<tt><a href="de-pos-PRON.html">PRON</a></tt> (67; 0% instances), -<tt><a href="de-pos-ADV.html">ADV</a></tt> (34; 0% instances), -<tt><a href="de-pos-NUM.html">NUM</a></tt> (23; 0% instances), -<tt><a href="de-pos-AUX.html">AUX</a></tt> (22; 0% instances), -<tt><a href="de-pos-X.html">X</a></tt> (18; 0% instances), -<tt><a href="de-pos-ADP.html">ADP</a></tt> (10; 0% instances), -<tt><a href="de-pos-PART.html">PART</a></tt> (7; 0% instances), -<tt><a href="de-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), -<tt><a href="de-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Ich	ich	PRON	PPER	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	hatte	haben	VERB	VAFIN	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
3	Gelegenheit	Gelegenheit	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	_
4	eines	ein	DET	ART	Case=Acc|Definite=Ind|Number=Plur|PronType=Art	6	det	_	_
5	seiner	sein	PRON	PPOSAT	Case=Acc|Gender[psor]=Masc,Neut|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	6	det:poss	_	_
6	Seminare	Seminar	NOUN	NN	Case=Acc|Number=Plur	8	obj	_	_
7	zu	zu	PART	PTKZU	_	8	mark	_	_
8	besuchen	besuchen	VERB	VVINF	VerbForm=Inf	3	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	Manasse	Manasse	PROPN	NN	Case=Nom|Number=Sing	5	nsubj	_	_
2	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	ein	ein	DET	ART	Definite=Ind|PronType=Art	5	det	_	_
4	einzigartiger	einzigartig	ADJ	ADJA	Degree=Cmp,Pos	5	amod	_	_
5	Parfümeur	Parfümeur	NOUN	NN	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	unbeschreiblich	unbeschreiblich	ADJ	ADJD	Degree=Pos	0	root	_	SpaceAfter=No
4	.	.	PUNCT	$.	_	3	punct	_	_

~~~


