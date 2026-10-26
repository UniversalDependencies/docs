---
layout: base
title:  'Statistics of xcomp in UD_Turkish-Penn'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Penn: Relations: `xcomp`

This relation is universal.

688 nodes (0%) are attached to their parents as `xcomp`.

687 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.41279069767442.

The following 14 pairs of parts of speech are connected with `xcomp`: <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (333; 48% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (164; 24% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (88; 13% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (33; 5% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (29; 4% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-NUM.html">NUM</a></tt> (11; 2% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt> (9; 1% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (8; 1% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="tr_penn-pos-X.html">X</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 xcomp	color:blue
1	Telerate	Telerate	PROPN	_	Case=Nom|Number=Sing	9	nsubj	_	_
2	3	3	NUM	_	NumType=Card	3	nummod	_	_
3	Kasım	kasım	PROPN	_	Case=Nom|Number=Sing	4	nmod	_	_
4	tarihinde	tarih	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	obl	_	_
5	süresi	süre	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	nsubj	_	_
6	dolacak	dol	VERB	_	Aspect=Imp|Polarity=Pos|Tense=Fut|VerbForm=Part	7	xcomp	_	_
7	olan	ol	VERB	_	Polarity=Pos|Tense=Pres|VerbForm=Part	8	acl	_	_
8	teklifi	teklif	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	obj	_	_
9	reddetti	reddet	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 xcomp	color:blue
1	"	"	PUNCT	_	_	7	punct	_	_
2	Buna	bu	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Dem	7	obj	_	_
3	sıkıcı	sıkıcı	ADJ	_	_	5	amod	_	_
4	bir	bir	DET	_	Definite=Ind|PronType=Art	5	det	_	_
5	konu	konu	NOUN	_	Case=Nom|Number=Sing	6	xcomp	_	_
6	olarak	ol	VERB	_	Aspect=Prog|Polarity=Pos|VerbForm=Conv	7	advcl	_	_
7	bakıyorum	bak	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	10	ccomp	_	_
8	,	,	PUNCT	_	_	7	punct	_	_
9	"	"	PUNCT	_	_	7	punct	_	_
10	diyor	de	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 xcomp	color:blue
1	Kaçınılmaz	kaçınılmaz	ADJ	_	_	2	xcomp	_	_
2	olarak	ol	VERB	_	Aspect=Prog|Polarity=Pos|VerbForm=Conv	5	advcl	_	_
3	birçok	birçok	DET	_	Definite=Ind|PronType=Ind	4	det	_	_
4	türbülansın	türbülans	NOUN	_	Case=Gen|Number=Sing	5	nmod	_	_
5	içindeyiz	iç	NOUN	_	Number=Plur|Number[psor]=Sing|Person=1|Person[psor]=3	0	root	_	_
6	...	...	PUNCT	_	_	5	punct	_	_

~~~


