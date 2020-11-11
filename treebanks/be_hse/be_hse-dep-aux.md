---
layout: base
title:  'Statistics of aux in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="be_hse-dep-aux-pass.html">aux:pass</a></tt>.

595 nodes (0%) are attached to their parents as `aux`.

429 instances of `aux` (72%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.39327731092437.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (569; 96% instances), <tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (9; 2% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (8; 1% instances), <tt><a href="be_hse-pos-ADV.html">ADV</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="be_hse-pos-AUX.html">AUX</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="be_hse-pos-PRON.html">PRON</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	Пры	пры	ADP	IN	_	6	mark	_	_
2	чым	чым	SCONJ	IN	_	1	fixed	_	_
3	гэтыя	гэты	DET	DT	Case=Nom|Number=Plur|PronType=Dem	4	det	_	_
4	рэкамендацыі	рэкамендацыя	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	6	nsubj	_	_
5	будуць	быць	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	6	aux	_	_
6	тычыцца	тычыцца	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Mid	0	root	_	_
7	абодвух	абодва	NUM	CD	Case=Gen|Gender=Masc|NumType=Card	8	nummod	_	_
8	бакоў	бок	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	obj	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 aux	color:blue
1	«	«	PUNCT	PUNCT	_	7	punct	_	SpaceAfter=No
2	Лепш	лепш	ADV	RB	Degree=Pos	7	advmod	_	_
3	бы	бы	PART	UH	Mood=Cnd	2	fixed	_	_
4	я	я	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
5	за	за	ADP	IN	_	6	case	_	_
6	дэзэртырства	дэзэртырства	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	7	obl	_	_
7	адседзеў	адседзець	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	12	punct	_	_
9	але	але	CCONJ	CC	_	12	cc	_	_
10	быў	быць	AUX	VBC	Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	12	cop	_	_
11	бы	бы	AUX	IN	Mood=Cnd	12	aux	_	_
12	здаровы	здаровы	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	7	conj	_	SpaceAfter=No
13	»	»	PUNCT	PUNCT	_	12	punct	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Было	быць	VERB	VBC	Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	б	б	AUX	RP	Mood=Cnd	3	aux	_	_
3	жаданне	жаданне	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	1	nsubj	_	SpaceAfter=No
4	...	...	PUNCT	PUNCT	_	3	punct	_	_

~~~


