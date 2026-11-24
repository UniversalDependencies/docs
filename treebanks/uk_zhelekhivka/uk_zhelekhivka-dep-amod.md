---
layout: base
title:  'Statistics of amod in UD_Ukrainian-Zhelekhivka'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-Zhelekhivka: Relations: `amod`

This relation is universal.

756 nodes (8%) are attached to their parents as `amod`.

673 instances of `amod` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.36243386243386.

The following 9 pairs of parts of speech are connected with `amod`: <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt> (716; 95% instances), <tt><a href="uk_zhelekhivka-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt> (29; 4% instances), <tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="uk_zhelekhivka-pos-X.html">X</a></tt>-<tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="uk_zhelekhivka-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	Віщовання	віщування	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	_	TokenRange=0:9
2	про	про	ADP	ADP	Case=Acc	4	case	_	TokenRange=10:13
3	XX.	XX.	ADJ	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	amod	_	_
4	вік	вік	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	1	nmod	_	SpaceAfter=No|TokenRange=18:21
5	.	.	PUNCT	PUNCT	_	1	punct	_	SpacesAfter=\r\n|TokenRange=21:22

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 amod	color:blue
1	А	а	CCONJ	CCONJ	_	2	cc	_	TokenRange=17310:17311
2	нагадаймо	нагадати	VERB	VERB	Aspect=Perf|Mood=Imp|Number=Plur|Person=1|VerbForm=Fin	0	root	_	TokenRange=17312:17321
3	собі	себе	PRON	PRON	Case=Dat|PronType=Prs|Reflex=Yes	2	obl	_	TokenRange=17322:17326
4	про	про	ADP	ADP	Case=Acc	5	case	_	TokenRange=17327:17330
5	війну	війна	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	2	obl	_	TokenRange=17331:17336
6	сучасної	сучасний	ADJ	ADJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	TokenRange=17337:17345
7	Франциї	Франція	PROPN	PROPN	Animacy=Inan|Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	5	nmod	_	NameType=Geo|TokenRange=17346:17353
8	в	в	ADP	ADP	Case=Loc	9	case	_	TokenRange=17354:17355
9	Азиї	Азія	PROPN	PROPN	Animacy=Inan|Case=Loc|Gender=Fem|NameType=Geo|Number=Sing	5	nmod	_	NameType=Geo|SpaceAfter=No|TokenRange=17356:17360
10	!	!	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=17360:17361

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	Без	без	ADP	ADP	Case=Gen	3	case	_	TokenRange=11742:11745
2	цеї	цей	DET	DET	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	TokenRange=11746:11749
3	віри	віра	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	5	obl	_	TokenRange=11750:11754
4	не	не	PART	PART	Polarity=Neg	5	advmod:neg	_	TokenRange=11755:11757
5	вийде	вийти	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	TokenRange=11758:11763
6	нічого	ніщо	PRON	PRON	Animacy=Inan|Case=Gen|PronType=Neg	5	obj	_	TokenRange=11764:11770
7	путнього	путній	ADJ	ADJ	Case=Gen|Gender=Neut|Number=Sing	6	amod	_	SpaceAfter=No|TokenRange=11771:11779
8	.	.	PUNCT	PUNCT	_	5	punct	_	TokenRange=11779:11780

~~~


