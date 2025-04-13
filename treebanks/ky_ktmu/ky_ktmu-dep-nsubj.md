---
layout: base
title:  'Statistics of nsubj in UD_Kyrgyz-KTMU'
udver: '2'
---

## Treebank Statistics: UD_Kyrgyz-KTMU: Relations: `nsubj`

This relation is universal.

2241 nodes (9%) are attached to their parents as `nsubj`.

2236 instances of `nsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.413208389112.

The following 19 pairs of parts of speech are connected with `nsubj`: <tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt> (1636; 73% instances), <tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_ktmu-pos-PROPN.html">PROPN</a></tt> (269; 12% instances), <tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt> (123; 5% instances), <tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt> (81; 4% instances), <tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_ktmu-pos-PRON.html">PRON</a></tt> (59; 3% instances), <tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_ktmu-pos-PROPN.html">PROPN</a></tt> (17; 1% instances), <tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt> (16; 1% instances), <tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_ktmu-pos-NUM.html">NUM</a></tt> (12; 1% instances), <tt><a href="ky_ktmu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_ktmu-pos-PRON.html">PRON</a></tt> (5; 0% instances), <tt><a href="ky_ktmu-pos-PRON.html">PRON</a></tt>-<tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="ky_ktmu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="ky_ktmu-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ky_ktmu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ky_ktmu-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_ktmu-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ky_ktmu-pos-NUM.html">NUM</a></tt>-<tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_ktmu-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_ktmu-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_ktmu-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	Менин	Мен	PRON	PRP	Case=Gen|Number=Sing|Person=1|PronType=Prs	2	nmod	_	_
2	машинам	машина	NOUN	NN	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	nsubj	_	_
3	бар	бар	VERB	VB	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres	0	root	_	SpaceAfter=No
4	.	.	PUNCT	PCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 nsubj	color:blue
1	Чал	Чал	PROPN	PROP	Case=Nom|Number=Sing|Person=3	10	nsubj	_	_
2	жалгыз	жалгыз	ADV	ADV	_	5	advmod	_	_
3	өзү	өзү	PRON	PRN	PronType=Prs|Reflex=Yes	4	nmod	_	_
4	кайыгына	кайык	NOUN	NN	Case=Dat|Number=Sing	5	obl	_	_
5	түшүп	түш	VERB	VB	Polarity=Pos|Tense=Pres|VerbForm=Part	10	ccomp	_	SpaceAfter=No
6	,	,	PUNCT	PCT	_	5	punct	_	_
7	Гольфстримде	Гольфстрим	PROPN	PROP	Case=Loc|Number=Sing|Person=3	10	obl	_	_
8	балык	балык	NOUN	NN	Case=Nom|Number=Sing|Person=3	9	obj	_	_
9	уулап	уула	VERB	VB	Polarity=Pos|Tense=Pres|VerbForm=Part	10	ccomp	_	_
10	жүрдү	жүр	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
11	.	.	PUNCT	PCT	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	Билгендерим	Билген	VERB	VB	Case=Gen|Number=Plur|Person=1|Polarity=Pos|Tense=Past|VerbForm=Vnoun	4	nsubj	_	_
2	мага	мен	PRON	PRP	Case=Dat|Number=Sing|Person=1|PronType=Prs	4	obl	_	_
3	керек	керек	NOUN	NN	Case=Nom|Number=Sing|Person=3	4	nmod	_	_
4	болот	бол	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	.	.	PUNCT	PCT	_	4	punct	_	_

~~~


