---
layout: base
title:  'Statistics of dep in UD_Old_Russian-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_Russian-RNC: Relations: `dep`

This relation is universal.

43 nodes (0%) are attached to their parents as `dep`.

23 instances of `dep` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.7906976744186.

The following 11 pairs of parts of speech are connected with `dep`: <tt><a href="orv_rnc-pos-X.html">X</a></tt>-<tt><a href="orv_rnc-pos-X.html">X</a></tt> (12; 28% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-X.html">X</a></tt> (9; 21% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-X.html">X</a></tt> (8; 19% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-X.html">X</a></tt> (5; 12% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-X.html">X</a></tt> (3; 7% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-X.html">X</a></tt> (1; 2% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_rnc-pos-X.html">X</a></tt> (1; 2% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-X.html">X</a></tt> (1; 2% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PART.html">PART</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 dep	color:blue
1	{	{	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	л.	_	X	_	_	5	parataxis	_	_
3	3	_	X	_	_	2	dep	_	SpaceAfter=No
4	}	}	PUNCT	_	_	2	punct	_	_
5	Написано	написати	VERB	Transit=Tran	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
6	в	въ	ADP	_	_	7	case	_	_
7	доклад	докладъ	NOUN	Animacy[lex]=Inan	Case=Acc|Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dep	color:blue
1	<i>	<i>	X	_	_	2	dep	_	NoIndex=Yes|SpaceAfter=No
2	глаголет	глаголати	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Norm=глаголет|SpaceAfter=Yes
3	к	къ	ADP	_	_	4	case	_	Norm=к|SpaceAfter=Yes
4	сынома	сынъ	NOUN	_	Case=Dat|Gender=Masc|Number=Dual	2	obl	_	Norm=сынома|SpaceAfter=No
5	</i>	</i>	X	_	_	2	dep	_	NoIndex=Yes|SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 dep	color:blue
1	{л._41}	_	X	_	_	3	dep	_	NoIndex=Yes|_
2	Во	во	ADP	_	_	3	case	_	_
3	имя	имя	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	0	root	_	_
4	Отца	отецъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
5	и	и	CCONJ	_	_	6	cc	_	_
6	Сына	сынъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	4	conj	_	_
7	и	и	CCONJ	_	_	9	cc	_	_
8	Святаго	святой	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
9	Духа	духъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	3	conj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


