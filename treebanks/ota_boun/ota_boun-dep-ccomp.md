---
layout: base
title:  'Statistics of ccomp in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `ccomp`

This relation is universal.

121 nodes (1%) are attached to their parents as `ccomp`.

103 instances of `ccomp` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.09090909090909.

The following 8 pairs of parts of speech are connected with `ccomp`: <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (53; 44% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (27; 22% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (18; 15% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (12; 10% instances), <tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (5; 4% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt> (4; 3% instances), <tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 ccomp	color:blue
1	Arkadaşları	arkadaş	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	7	nsubj	_	_
2	“	“	PUNCT	Punc	_	5	punct	_	_
3	vah	vah	INTJ	_	_	5	discourse	_	_
4	vah	vah	INTJ	_	_	3	compound	_	_
5	ölmüş	öl	VERB	_	Evident=Nfh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	7	ccomp	_	_
6	”	”	PUNCT	Punc	_	5	punct	_	_
7	diyecekler	de	VERB	_	Aspect=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Pres	0	root	_	_
8	.	.	PUNCT	Stop	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 ccomp	color:blue
1	Hele	hele	ADV	_	_	4	advmod	_	_
2	yemeğini	yemek	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	obj	_	_
3	yemeğe	yemek	NOUN	_	Case=Dat|Number=Sing|Person=3	4	ccomp	_	_
4	başlayabildi	başla	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past|Voice=Pass	0	root	_	_
5	.	.	PUNCT	Stop	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	Onun	o	PRON	Pers	Case=Gen|Number=Sing|Person=3|PronType=Prs	2	nmod:poss	_	_
2	düşüncesi	düşünce	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	0	root	_	_
3	şimdi	şimdi	ADV	_	_	6	advmod	_	_
4	seni	sen	PRON	Pers	Case=Acc|Number=Sing|Person=2|PronType=Prs	6	obj	_	_
5	güler	gül	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	4	acl	_	_
6	görmek	gör	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	2	ccomp	_	_
7	...	...	PUNCT	TDots	_	6	punct	_	_

~~~


