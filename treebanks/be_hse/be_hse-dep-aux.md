---
layout: base
title:  'Statistics of aux in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="be_hse-dep-aux-pass.html">aux:pass</a></tt>.

586 nodes (0%) are attached to their parents as `aux`.

419 instances of `aux` (72%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37542662116041.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (557; 95% instances), <tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (11; 2% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (8; 1% instances), <tt><a href="be_hse-pos-ADV.html">ADV</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="be_hse-pos-AUX.html">AUX</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="be_hse-pos-PRON.html">PRON</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-X.html">X</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	Пры	пры	ADP	IN	_	6	mark	6:mark	_
2	чым	чым	SCONJ	IN	_	1	fixed	1:fixed	_
3	гэтыя	гэты	DET	DT	Case=Nom|Number=Plur|PronType=Dem	4	det	4:det	_
4	рэкамендацыі	рэкамендацыя	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	6	nsubj	6:nsubj	_
5	будуць	быць	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	6	aux	6:aux	_
6	тычыцца	тычыцца	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Mid	0	root	0:root	_
7	абодвух	абодва	NUM	CD	Case=Gen|Gender=Masc|NumType=Card	8	nummod	8:nummod	_
8	бакоў	бок	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	obj	6:obj	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 aux	color:blue
1	Будзе	быць	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	7	aux	7:aux	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	4	punct	4:punct	_
3	паводле	паводле	ADP	IN	_	4	case	4:case	_
4	аналітыкаў	аналітык	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	7	parataxis	7:parataxis	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	4	punct	4:punct	_
6	наогул	наогул	ADV	RB	Degree=Pos	7	advmod	7:advmod	_
7	кепска	кепскі	ADJ	PRED	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Было	быць	VERB	VBC	Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	б	б	AUX	RP	Mood=Cnd	3	aux	3:aux	_
3	жаданне	жаданне	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	1	nsubj	1:nsubj	SpaceAfter=No
4	...	...	PUNCT	PUNCT	_	1	punct	1:punct	_

~~~


