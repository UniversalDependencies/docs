---
layout: base
title:  'Statistics of csubj in UD_Turkish-Penn'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Penn: Relations: `csubj`

This relation is universal.

434 nodes (0%) are attached to their parents as `csubj`.

434 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.21198156682028.

The following 16 pairs of parts of speech are connected with `csubj`: <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (226; 52% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (70; 16% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (58; 13% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (41; 9% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (13; 3% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (7; 2% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-DET.html">DET</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-INTJ.html">INTJ</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 csubj	color:blue
1	Diyaloğun	diyalog	NOUN	_	Case=Gen|Number=Sing|Person=3	2	nmod	_	_
2	sürdürülmesi	sür	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	csubj	_	_
3	kesinlikle	kesinlikle	ADV	_	_	6	advmod	_	_
4	temel	temel	ADJ	_	_	5	amod	_	_
5	öneme	önem	NOUN	_	Case=Dat|Number=Sing|Person=3	6	obj	_	_
6	haizdir	haiz	VERB	_	Mood=Gen|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 csubj	color:blue
1	"	"	PUNCT	_	_	14	punct	_	_
2	Yine	yine	ADV	_	_	6	obj	_	_
3	de	de	CCONJ	_	_	2	conj	_	_
4	,	,	PUNCT	_	_	2	punct	_	_
5	"	"	PUNCT	_	_	2	punct	_	_
6	dedi	de	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	14	parataxis	_	_
7	,	,	PUNCT	_	_	14	punct	_	_
8	"	"	PUNCT	_	_	14	punct	_	_
9	bu	bu	DET	_	Definite=Def|PronType=Art	10	det	_	_
10	grevin	grev	NOUN	_	Case=Gen|Number=Sing|Person=3	13	nmod	_	_
11	epey	epey	ADV	_	_	12	advmod	_	_
12	uzun	uzun	ADJ	_	_	13	amod	_	_
13	sürmesi	sür	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	14	csubj	_	_
14	mümkün.	mümkün.	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
15	"	"	PUNCT	_	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 csubj	color:blue
1	"	"	PUNCT	_	_	8	punct	_	_
2	Ve	ve	CCONJ	_	_	8	cc	_	_
3	kesin	kesin	ADJ	_	_	6	advmod	_	_
4	Ve	ve	CCONJ	_	_	5	cc	_	_
5	doğru	doğru	ADJ	_	_	3	conj	_	_
6	olmak	ol	NOUN	_	Case=Nom|Number=Sing|Person=3	8	csubj	_	_
7	çok	çok	ADV	_	_	8	advmod	_	_
8	önemli	önemli	ADJ	_	_	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_
10	"	"	PUNCT	_	_	8	punct	_	_

~~~


