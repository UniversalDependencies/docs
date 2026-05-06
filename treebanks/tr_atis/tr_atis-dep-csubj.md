---
layout: base
title:  'Statistics of csubj in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `csubj`

This relation is universal.

76 nodes (0%) are attached to their parents as `csubj`.

74 instances of `csubj` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.78947368421053.

The following 14 pairs of parts of speech are connected with `csubj`: <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (34; 45% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (18; 24% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (5; 7% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="tr_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="tr_atis-pos-X.html">X</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 csubj	color:blue
1	Washington	washington	PROPN	_	Case=Nom|Number=Sing	5	obl	_	_
2	DC'de	dc	PROPN	_	Case=Loc|Number=Sing	1	flat	_	_
3	bir	bir	DET	_	Definite=Ind|PronType=Art	4	det	_	_
4	araba	araba	NOUN	_	Case=Nom|Number=Sing	5	obj	_	_
5	kiralamam	kiralama	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	6	csubj	_	_
6	gerekecek	gerek	VERB	_	Aspect=Imp|Polarity=Pos|Tense=Fut|VerbForm=Part	0	root	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 csubj	color:blue
1	Boston'dan	boston	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	Atlanta'ya	atlanta	PROPN	_	Case=Dat|Number=Sing	3	obl	_	_
3	uçmak	uç	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	6	csubj	_	_
4	ne	ne	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Int	6	obj	_	_
5	kadar	kadar	ADP	_	_	4	compound	_	_
6	sürüyor	sür	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 csubj	color:blue
1	Boston'dan	boston	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	Denver'e	denver	PROPN	_	Case=Dat|Number=Sing	5	obl	_	_
3	San	san	PROPN	_	Case=Nom|Number=Sing	2	list	_	_
4	Francisco'ya	francisco	PROPN	_	Case=Dat|Number=Sing	3	flat	_	_
5	uçup	uç	VERB	_	Polarity=Pos|VerbForm=Conv	7	advcl	_	_
6	geri	geri	ADJ	_	_	7	advmod	_	_
7	dönmem	dön	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1|Polarity=Pos|VerbForm=Vnoun	8	csubj	_	_
8	lazım	lazım	ADJ	_	_	0	root	_	_

~~~


