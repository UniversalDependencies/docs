---
layout: base
title:  'Statistics of csubj in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `csubj`

This relation is universal.

100 nodes (0%) are attached to their parents as `csubj`.

98 instances of `csubj` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.98.

The following 16 pairs of parts of speech are connected with `csubj`: <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (32; 32% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (27; 27% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (13; 13% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (8; 8% instances), <tt><a href="tr_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="tr_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 csubj	color:blue
1	Bir	bir	DET	_	Definite=Ind|PronType=Art	2	det	_	_
2	havayolunun	havayol	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	csubj	_	_
3	hizmet	hizmet	NOUN	_	Case=Nom|Number=Sing|Person=3	5	acl	_	_
4	verdiği	ver	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	compound	_	_
5	sınıflar	sınıfla	VERB	_	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	nsubj	_	_
6	nelerdir	ne	VERB	_	Mood=Gen|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 csubj	color:blue
1	Boston'dan	boston	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	Atlanta'ya	atlanta	PROPN	_	Case=Dat|Number=Sing	3	obl	_	_
3	uçmak	uç	NOUN	_	Case=Nom|Number=Sing|Person=3	6	csubj	_	_
4	ne	ne	PRON	_	PronType=Int	6	obj	_	_
5	kadar	kadar	ADP	_	_	4	compound	_	_
6	sürüyor	sür	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 csubj	color:blue
1	Washington	washington	PROPN	_	Case=Nom|Number=Sing	5	obl	_	_
2	DC'de	dc	PROPN	_	Case=Loc|Number=Sing	1	flat	_	_
3	bir	bir	DET	_	Definite=Ind|PronType=Art	4	det	_	_
4	araba	araba	NOUN	_	Case=Nom|Number=Sing|Person=3	5	obj	_	_
5	kiralamam	kiralama	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	6	csubj	_	_
6	gerekecek	gerek	ADJ	_	_	0	root	_	_

~~~


