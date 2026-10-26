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

The following 14 pairs of parts of speech are connected with `csubj`: <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (213; 49% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (76; 18% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (65; 15% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (47; 11% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (11; 3% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="tr_penn-pos-X.html">X</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-DET.html">DET</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 csubj	color:blue
1	Ancak	ancak	CCONJ	_	_	5	cc	_	_
2	herkesin	herkes	PRON	_	Case=Gen|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=3|PronType=Ind	4	nsubj	_	_
3	para	para	NOUN	_	Case=Nom|Number=Sing	4	compound	_	_
4	kazanabildiği	kazan	VERB	_	Aspect=Perf|Case=Nom|Evident=Fh|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Vnoun	5	csubj	_	_
5	söylenemez	söyle	VERB	_	Evident=Fh|Polarity=Neg|Tense=Pres|VerbForm=Part|Voice=Pass	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 csubj	color:blue
1	Soruşturma	soruşturma	NOUN	_	Case=Nom|Number=Sing	7	csubj	_	_
2	kısa	kısa	ADJ	_	_	3	amod	_	_
3	süre	süre	NOUN	_	Case=Nom|Number=Sing	4	nmod	_	_
4	içinde	iç	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	obl	_	_
5	yargıç	yargıç	NOUN	_	Case=Nom|Number=Sing	6	nmod	_	_
6	üzerine	üzeri	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=2	7	obl	_	_
7	odaklandı	odaklan	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 csubj	color:blue
1	Diyaloğun	diyalog	NOUN	_	Case=Gen|Number=Sing	2	nmod	_	_
2	sürdürülmesi	sürdür	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|VerbForm=Vnoun|Voice=Pass	6	csubj	_	_
3	kesinlikle	kesinlikle	ADV	_	_	6	advmod	_	_
4	temel	temel	ADJ	_	_	5	amod	_	_
5	öneme	önem	NOUN	_	Case=Dat|Number=Sing	6	obj	_	_
6	haizdir	haiz	ADJ	_	Number=Sing|Person=3	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


