---
layout: base
title:  'Statistics of appos in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `appos`

This relation is universal.

5 nodes (0%) are attached to their parents as `appos`.

5 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.4.

The following 4 pairs of parts of speech are connected with `appos`: <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 appos	color:blue
1	Biz	biz	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
2	üç	üç	NUM	_	NumType=Card	3	nummod	_	_
3	arkadaş	arkadaş	NOUN	_	Case=Nom|Number=Sing	1	appos	_	_
4	konuşuyoruz	konuş	VERB	_	Aspect=Prog|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 appos	color:blue
1	Nane	nane	NOUN	_	Case=Nom|Number=Sing	6	nsubj	_	_
2	bazı	bazı	DET	_	Definite=Ind|PronType=Art	3	det	_	_
3	şeylerle	şey	NOUN	_	Case=Ins|Number=Plur	6	obl	_	_
4	çok	çok	ADV	_	_	5	advmod	_	_
5	iyi	iyi	ADV	_	_	6	advmod	_	_
6	gidiyor	git	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	,	,	PUNCT	_	_	10	punct	_	_
8	örneğin	örneğin	ADV	_	_	10	advmod	_	_
9	kuzu	kuzu	NOUN	_	Case=Nom|Number=Sing	10	nmod	_	_
10	etiyle	et	NOUN	_	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	appos	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 appos	color:blue
1	Babıali	Babıali	PROPN	_	Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	7	punct	_	_
3	başka	başka	DET	_	Definite=Ind|PronType=Art	5	det	_	_
4	bir	bir	DET	_	Definite=Ind|PronType=Art	5	det	_	_
5	deyişle	deyiş	NOUN	_	Case=Ins|Number=Sing	7	nmod	_	_
6	Osmanlı	Osmanlı	PROPN	_	Number=Sing	7	nmod	_	_
7	hükümeti	hükümet	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	1	appos	_	SpaceAfter=No
8	…	…	PUNCT	_	_	1	punct	_	_

~~~


