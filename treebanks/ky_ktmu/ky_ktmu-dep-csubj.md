---
layout: base
title:  'Statistics of csubj in UD_Kyrgyz-KTMU'
udver: '2'
---

## Treebank Statistics: UD_Kyrgyz-KTMU: Relations: `csubj`

This relation is universal.

25 nodes (0%) are attached to their parents as `csubj`.

25 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.8.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt> (15; 60% instances), <tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_ktmu-pos-PRON.html">PRON</a></tt> (4; 16% instances), <tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt> (2; 8% instances), <tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_ktmu-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_ktmu-pos-PROPN.html">PROPN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 csubj	color:blue
1	Бишкек	Бишкек	PROPN	PROP	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	2	compound	_	_
2	Ош	Ош	PROPN	PROP	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	nmod	_	_
3	жолунун	жол	NOUN	NN	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	obj	_	_
4	эки	эки	NUM	NUM	NumType=Card	5	nummod	_	_
5	тилкесине	тилке	NOUN	NN	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	obl	_	_
6	таш	таш	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	csubj	_	_
7	кулаган	кула	VERB	VB	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
8	.	.	PUNCT	PCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 csubj	color:blue
1	Сен	сен	PRON	PRP	Case=Gen|Number=Sing|Person=2|Person[psor]=2|PronType=Prs	13	nmod	_	_
2	чын	чын	ADV	ADV	_	13	advmod	_	_
3	эле	эле	ADV	ADV	_	2	compound	_	_
4	мунун	муну	PRON	PRP	Case=Acc|Number=Sing|Person=3	6	csubj	_	_
5	баарын	баары	PRON	PRP	Case=Acc|Number=Sing|PronType=Ind	6	obj	_	_
6	унута	унут	VERB	VB	Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Conv	13	ccomp	_	_
7	элексиңби	элек	DET	DET	Case=Acc|Number=Sing|Person=2	6	compound:svc	_	_
8	же	же	ADV	ADV	_	13	advmod	_	_
9	мен	мен	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj	_	_
10	сага	сен	PRON	PRP	Case=Dat|Number=Sing|Person=2|PronType=Prs	13	obl	_	_
11	кийин	кийин	ADV	ADV	_	10	case	_	_
12	айтып	айт	VERB	VB	Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Conv	13	ccomp	_	_
13	бердим	бер	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
14	еле	еле	VERB	VB	_	13	compound:svc	_	SpaceAfter=No
15	?	?	PUNCT	PCT	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 csubj	color:blue
1	15	15	NUM	NUM	NumType=Ord	5	nummod	_	SpaceAfter=No
2	-	-	PUNCT	PCT	_	1	punct	_	SpaceAfter=No
3	мартка	март	NOUN	NN	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	11	nmod	_	_
4	чейин	чейин	ADV	ADV	_	3	case	_	_
5	өлкө	өлкө	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	nmod	_	_
6	аймагында	аймак	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	11	obl	_	_
7	күтүлгөн	күт	VERB	VB	Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	9	acl	_	_
8	аба	аба	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	nmod	_	_
9	ырайы	ырай	NOUN	NN	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	11	csubj	_	_
10	тууралуу	тууралуу	ADV	ADV	_	9	advmod	_	_
11	маалымат	маалымат	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	0	root	_	SpaceAfter=No
12	.	.	PUNCT	PCT	_	11	punct	_	_

~~~


