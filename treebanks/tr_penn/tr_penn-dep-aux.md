---
layout: base
title:  'Statistics of aux in UD_Turkish-Penn'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Penn: Relations: `aux`

This relation is universal.

526 nodes (0%) are attached to their parents as `aux`.

520 instances of `aux` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.09505703422053.

The following 9 pairs of parts of speech are connected with `aux`: <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-AUX.html">AUX</a></tt> (207; 39% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-AUX.html">AUX</a></tt> (178; 34% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-AUX.html">AUX</a></tt> (95; 18% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-AUX.html">AUX</a></tt> (21; 4% instances), <tt><a href="tr_penn-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_penn-pos-AUX.html">AUX</a></tt> (11; 2% instances), <tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_penn-pos-AUX.html">AUX</a></tt> (7; 1% instances), <tt><a href="tr_penn-pos-DET.html">DET</a></tt>-<tt><a href="tr_penn-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="tr_penn-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_penn-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="tr_penn-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_penn-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 aux	color:blue
1	Bu	bu	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Dem	6	nsubj	_	_
2	Giant'ın	giant	PROPN	_	Case=Gen|Number=Sing	3	nmod	_	_
3	fanatiklerini	fanatik	ADJ	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3	4	obj	_	_
4	rahatlatacak	rahatla	VERB	_	Aspect=Imp|Polarity=Pos|Tense=Fut|VerbForm=Part|Voice=Cau	6	acl	_	_
5	bir	bir	DET	_	Definite=Ind|PronType=Art	6	det	_	_
6	ortalama	ortalama	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
7	değildir	değil	AUX	_	Evident=Fh|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	6	aux	_	_
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux	color:blue
1	Pek	pek	ADV	_	_	2	advmod	_	_
2	şaşırtıcı	şaşırtıcı	ADJ	_	_	6	parataxis	_	_
3	değil	değil	AUX	_	Polarity=Neg	2	aux	_	_
4	,	,	PUNCT	_	_	6	punct	_	_
5	bazen	bazen	ADV	_	_	6	advmod	_	_
6	ısırır	ısır	VERB	_	Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 aux	color:blue
1	Ekledi	ekle	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	8	parataxis	_	_
2	,	,	PUNCT	_	_	1	punct	_	_
3	"	"	PUNCT	_	_	8	punct	_	_
4	Bu	bu	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Dem	8	nsubj	_	_
5	1987'nin	1987	NUM	_	Case=Gen|Number=Sing|NumType=Card	8	nmod	_	_
6	yeniden	yeniden	ADV	_	_	8	advmod	_	_
7	ziyaret	ziyaret	NOUN	_	Case=Nom|Number=Sing	8	compound	_	_
8	edilmesi	et	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|VerbForm=Vnoun|Voice=Pass	0	root	_	_
9	değil	değil	AUX	_	Polarity=Neg	8	aux	_	_
10	.	.	PUNCT	_	_	8	punct	_	_
11	"	"	PUNCT	_	_	8	punct	_	_

~~~


