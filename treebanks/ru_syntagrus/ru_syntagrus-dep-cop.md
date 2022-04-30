---
layout: base
title:  'Statistics of cop in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `cop`

This relation is universal.

7666 nodes (1%) are attached to their parents as `cop`.

5352 instances of `cop` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.86446647534568.

The following 22 pairs of parts of speech are connected with `cop`: <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-AUX.html">AUX</a></tt> (3145; 41% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-AUX.html">AUX</a></tt> (2378; 31% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-AUX.html">AUX</a></tt> (778; 10% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (518; 7% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-AUX.html">AUX</a></tt> (328; 4% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-AUX.html">AUX</a></tt> (136; 2% instances), <tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt>-<tt><a href="ru_syntagrus-pos-AUX.html">AUX</a></tt> (130; 2% instances), <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_syntagrus-pos-AUX.html">AUX</a></tt> (61; 1% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-AUX.html">AUX</a></tt> (58; 1% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (38; 0% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (31; 0% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (27; 0% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (10; 0% instances), <tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (8; 0% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (5; 0% instances), <tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_syntagrus-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="ru_syntagrus-pos-ADP.html">ADP</a></tt>-<tt><a href="ru_syntagrus-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt>-<tt><a href="ru_syntagrus-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	Алгоритм	алгоритм	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj|4:nsubj	_
2	должен	должен	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	0	root	0:root	_
3	быть	быть	AUX	_	Aspect=Imp|VerbForm=Inf|Voice=Act	4	cop	4:cop	_
4	применим	применимый	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	2	xcomp	2:xcomp	_
5	к	к	ADP	_	_	7	case	7:case	_
6	разным	разный	ADJ	_	Case=Dat|Degree=Pos|Number=Plur	7	amod	7:amod	_
7	наборам	набор	NOUN	_	Animacy=Inan|Case=Dat|Gender=Masc|Number=Plur	4	obl	4:obl:к:dat	_
8	исходных	исходный	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	9	amod	9:amod	_
9	данных	данные	NOUN	_	Animacy=Inan|Case=Gen|Number=Plur	7	nmod	7:nmod:gen	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cop	color:blue
1	Преимущество	преимущество	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	nsubj	5:nsubj	_
2	было	быть	AUX	_	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
3	на	на	ADP	_	_	5	case	5:case	_
4	его	его	DET	_	Poss=Yes|PronType=Prs	5	det	5:det	_
5	стороне	сторона	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 cop	color:blue
1	За	за	ADP	_	_	2	case	2:case	_
2	пуд	пуд	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	obl	7:obl:за:acc	_
3	медных	медный	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	4	amod	4:amod	_
4	денег	деньги	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	2	nmod	2:nmod:gen	_
5	можно	можно	ADV	_	Degree=Pos	0	root	0:root	_
6	было	быть	AUX	_	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
7	получить	получить	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	5	csubj	5:csubj	_
8	от	от	ADP	_	_	9	case	9:case	_
9	32	32	NUM	_	NumType=Card	7	nummod	7:nummod	_
10	до	до	ADP	_	_	12	case	12:case	_
11	40	40	NUM	_	NumType=Card	12	nummod	12:nummod	_
12	рублей	рубль	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	9	obl	9:obl:до:gen	SpaceAfter=No
13	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


