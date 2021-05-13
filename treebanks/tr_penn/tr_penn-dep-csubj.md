---
layout: base
title:  'Statistics of csubj in UD_Turkish-Penn'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Penn: Relations: `csubj`

This relation is universal.

248 nodes (0%) are attached to their parents as `csubj`.

248 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.04032258064516.

The following 13 pairs of parts of speech are connected with `csubj`: <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (132; 53% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (33; 13% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (32; 13% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (22; 9% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (11; 4% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (6; 2% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-DET.html">DET</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-INTJ.html">INTJ</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 csubj	color:blue
1	Diyaloğun	diyalog	NOUN	_	Case=Gen|Number=Sing|Person=3	2	nsubj	_	_
2	sürdürülmesi	sür	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	csubj	_	_
3	kesinlikle	kesinlikle	ADV	_	_	6	advmod	_	_
4	temel	temel	ADJ	_	_	5	amod	_	_
5	öneme	önem	NOUN	_	Case=Dat|Number=Sing|Person=3	6	obj	_	_
6	haizdir	haiz	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 csubj	color:blue
1	Buraya	bura	NOUN	_	Case=Dat|Number=Sing|Person=3	3	obl	_	_
2	ait	ait	ADP	_	_	3	compound	_	_
3	olmayan	ol	ADJ	_	_	4	csubj	_	_
4	nedir	ne	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
5	?	?	PUNCT	_	_	4	punct	_	_

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


