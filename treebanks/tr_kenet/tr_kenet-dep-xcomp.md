---
layout: base
title:  'Statistics of xcomp in UD_Turkish-Kenet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Kenet: Relations: `xcomp`

This relation is universal.

851 nodes (0%) are attached to their parents as `xcomp`.

847 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.82021151586369.

The following 20 pairs of parts of speech are connected with `xcomp`: <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (439; 52% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (165; 19% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt> (76; 9% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (73; 9% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (54; 6% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt> (8; 1% instances), <tt><a href="tr_kenet-pos-X.html">X</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-PROPN.html">PROPN</a></tt> (5; 1% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 xcomp	color:blue
1	Kimse	kimse	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|PronType=Neg	9	nsubj	_	_
2	,	,	PUNCT	_	_	1	punct	_	_
3	dört	dört	NUM	_	NumType=Card	4	nummod	_	_
4	çocuklu	çocuklu	ADJ	_	_	6	amod	_	_
5	bir	bir	DET	_	Definite=Ind|PronType=Art	6	det	_	_
6	aileye	aile	NOUN	_	Case=Dat|Number=Sing	8	obl	_	_
7	ev	ev	NOUN	_	Case=Nom|Number=Sing	8	obj	_	_
8	vermek	ver	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	9	xcomp	_	_
9	istememiş	iste	VERB	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 xcomp	color:blue
1	Bir	bir	NUM	_	NumType=Card	2	nummod	_	_
2	nevi	nevi	NOUN	_	Case=Nom|Number=Sing	3	nmod	_	_
3	oyunbozanlık	oyunbozanlık	NOUN	_	Case=Nom|Number=Sing	5	xcomp	_	_
4	da	da	CCONJ	_	_	3	advmod	_	_
5	sayabilirsiniz	say	VERB	_	Evident=Fh|Mood=GenPot|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
6	bunu	bu	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Dem	5	obj	_	_
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 xcomp	color:blue
1	Kırmızı	kırmızı	ADJ	_	_	4	nsubj	_	_
2	daha	daha	ADV	_	Degree=Cmp	3	advmod	_	_
3	ağır	ağır	ADJ	_	_	4	xcomp	_	_
4	basıyor	bas	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


