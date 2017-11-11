---
layout: base
title:  'Statistics of xcomp in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `xcomp`

This relation is universal.

10968 nodes (1%) are attached to their parents as `xcomp`.

10463 instances of `xcomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.75537928519329.

The following 23 pairs of parts of speech are connected with `xcomp`: <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (9095; 83% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (1689; 15% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (81; 1% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (36; 0% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (14; 0% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (10; 0% instances), <tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (9; 0% instances), <tt><a href="ru_syntagrus-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (6; 0% instances), <tt><a href="ru_syntagrus-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="ru_syntagrus-pos-ADP.html">ADP</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-dep-_.html">_</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-dep-_.html">_</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-dep-_.html">_</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Алгоритм	алгоритм	PROPN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	может	мочь	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	быть	быть	AUX	_	Aspect=Imp|VerbForm=Inf|Voice=Act	4	aux:pass	4:aux:pass	_
4	записан	записывать	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	2	xcomp	2:xcomp	_
5	словами	слово	NOUN	_	Animacy=Inan|Case=Ins|Gender=Neut|Number=Plur	4	obl	4:obl	_
6	и	и	CCONJ	_	_	7	cc	7:cc	_
7	изображён	изображать	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	4	conj	4:conj	_
8	схематически	схематически	ADV	_	Degree=Pos	7	advmod	7:advmod	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 xcomp	color:blue
1	Стартовать	стартовать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	3	xcomp	3:xcomp	_
2	ПКА	пка	PROPN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	3:nsubj	_
3	должен	должен	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	0	root	0:root	_
4	был	быть	AUX	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
5	на	на	ADP	_	_	7	case	7:case	_
6	королевской	королевский	ADJ	_	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	7	amod	7:amod	_
7	ракете-носителе	ракета-носитель	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	3	obl	3:obl	_
8	Р	река	PROPN	_	Foreign=Yes	7	nmod	7:nmod	SpaceAfter=No
9	-	-	PUNCT	_	_	8	punct	8:punct	SpaceAfter=No
10	7	7	NUM	_	_	8	nummod	8:nummod	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Алгоритм	алгоритм	PROPN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	должен	должен	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	0	root	0:root	_
3	быть	быть	AUX	_	Aspect=Imp|VerbForm=Inf|Voice=Act	4	cop	4:cop	_
4	применим	применимый	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	2	xcomp	2:xcomp	_
5	к	к	ADP	_	_	7	case	7:case	_
6	разным	разный	ADJ	_	Case=Dat|Degree=Pos|Number=Plur	7	amod	7:amod	_
7	наборам	набор	NOUN	_	Animacy=Inan|Case=Dat|Gender=Masc|Number=Plur	4	obl	4:obl	_
8	исходных	исходный	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	9	amod	9:amod	_
9	данных	данные	NOUN	_	Animacy=Inan|Case=Gen|Number=Plur	7	nmod	7:nmod	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	9:punct	_

~~~


