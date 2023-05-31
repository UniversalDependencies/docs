---
layout: base
title:  'Statistics of case in UD_Kyrgyz-KTMU'
udver: '2'
---

## Treebank Statistics: UD_Kyrgyz-KTMU: Relations: `case`

This relation is universal.

73 nodes (1%) are attached to their parents as `case`.

55 instances of `case` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 12 pairs of parts of speech are connected with `case`: <tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_ktmu-pos-CCONJ.html">CCONJ</a></tt> (26; 36% instances), <tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_ktmu-pos-ADV.html">ADV</a></tt> (15; 21% instances), <tt><a href="ky_ktmu-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_ktmu-pos-CCONJ.html">CCONJ</a></tt> (12; 16% instances), <tt><a href="ky_ktmu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ky_ktmu-pos-CCONJ.html">CCONJ</a></tt> (5; 7% instances), <tt><a href="ky_ktmu-pos-ADV.html">ADV</a></tt>-<tt><a href="ky_ktmu-pos-CCONJ.html">CCONJ</a></tt> (4; 5% instances), <tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="ky_ktmu-pos-PRON.html">PRON</a></tt>-<tt><a href="ky_ktmu-pos-CCONJ.html">CCONJ</a></tt> (3; 4% instances), <tt><a href="ky_ktmu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ky_ktmu-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="ky_ktmu-pos-ADV.html">ADV</a></tt>-<tt><a href="ky_ktmu-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ky_ktmu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_ktmu-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="ky_ktmu-pos-PRON.html">PRON</a></tt>-<tt><a href="ky_ktmu-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="ky_ktmu-pos-PRON.html">PRON</a></tt>-<tt><a href="ky_ktmu-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 case	color:blue
1	Чал	Чал	PROPN	PROP	Case=Nom|Number=Sing|Person=3	9	nsubj	_	_
2	балага	бала	NOUN	NN	Case=Dat|Number=Sing|Person=3	9	obl	_	_
3	күндөн	күн	NOUN	NN	Case=Abl|Number=Sing|Person=3	9	nmod	_	_
4	кызарып	кызар	VERB	VB	Polarity=Pos|Tense=Pres|VerbForm=Vnoun	5	advcl	_	_
5	чыккан	чыкка	VERB	VB	Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Conv	6	advcl	_	_
6	көздөрү	көз	NOUN	NN	Case=Ins|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	9	obj	_	_
7	менен	менен	CCONJ	CCONJ	_	6	case	_	_
8	жароокер	жароокер	ADJ	ADJ	_	9	amod	_	_
9	карады	кара	VERB	VB	Aspect=Perf|Case=Gen,Loc|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
10	:	:	PUNCT	PCT	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 case	color:blue
1	Сенин	сен	PRON	PRP	Case=Gen|Number=Sing|Person=2|PronType=Prs	8	nsubj	_	_
2	союлуң	союл	NOUN	NN	Case=Acc|Number=Sing|Person=3	8	obj	_	_
3	карагай	карагай	NOUN	NN	Case=Nom|Number=Sing|Person=3	8	nmod	_	_
4	жаргандай	жаргандай	ADV	ADV	_	3	case	_	_
5	такылдап	такыл	VERB	VB	Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Conv	8	advcl	_	_
6	турганы	тур	VERB	VB	Number=Sing|Person=3|Person[psor]=2|Polarity=Pos|Tense=Past|VerbForm=Conv	8	ccomp	_	_
7	да	да	CCONJ	CCONJ	_	6	mark	_	_
8	эсимде	эсимде	NOUN	NN	Aspect=Perf|Case=Gen,Loc|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
9	.	.	PUNCT	PCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	Караколдо	Каракол	PROPN	PROP	Case=Nom|Number=Sing|Person=3	7	obl	_	_
2	уурулук	ууру	NOUN	ADJ	Case=Nom|Number=Sing|Person=3	4	amod	_	_
3	менен	менен	CCONJ	CCONJ	_	4	case	_	_
4	алектенген	алектен	VERB	VB	VerbForm=Part	6	acl	_	_
5	кылмыштуу	кылмыштуу	NOUN	NN	Case=Nom|Number=Sing|Person=3	6	compound	_	_
6	топ	топ	NOUN	NN	Case=Nom|Number=Sing	7	nsubj	_	_
7	кармалды	кармал	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
8	.	.	PUNCT	PCT	_	7	punct	_	_

~~~


