---
layout: base
title:  'Statistics of csubj in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `csubj`

This relation is universal.

42 nodes (0%) are attached to their parents as `csubj`.

42 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.26190476190476.

The following 9 pairs of parts of speech are connected with `csubj`: <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (10; 24% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (8; 19% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (7; 17% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (6; 14% instances), <tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (5; 12% instances), <tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="ota_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 csubj	color:blue
1	Bu	bu	DET	Det	_	2	det	_	_
2	dakika	dakika	NOUN	_	Case=Nom|Number=Sing|Person=3	3	obl	_	_
3	yaşamak	yaşa	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	8	csubj	_	_
4	ona	o	PRON	Pers	Case=Dat|Number=Sing|Person=3|PronType=Prs	8	obl	_	_
5	ne	ne	ADV	Ques	_	7	advmod	_	_
6	kadar	kadar	ADP	PCDat	_	5	case	_	_
7	tatlı	tatlı	ADJ	Adj	_	8	xcomp	_	_
8	geliyordu	gel	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	_
9	.	.	PUNCT	Stop	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 5 csubj	color:blue
1	O	o	DET	Det	_	2	det	_	_
2	gün	gün	NOUN	_	Case=Nom|Number=Sing|Person=3	5	obl	_	_
3	o	o	DET	Demons	_	4	det	_	_
4	makaleyi	makale	NOUN	_	Case=Acc|Number=Sing|Person=3	5	obj	_	_
5	okumak	oku	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	11	csubj	_	_
6	benim	ben	PRON	Pers	Case=Gen|Number=Sing|Person=1|PronType=Prs	11	obl	_	_
7	için	için	ADP	PCNom	_	6	case	_	_
8	bir	bir	DET	Indef	_	10	det	_	_
9	ıyd-i	ıyd-i	NOUN	_	Case=Nom|Number=Sing|Person=3	11	obj	_	_
10	edebi	edep	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	amod	_	_
11	oldu...	Oldu...	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 csubj	color:blue
1	Yoksa	yoksa	ADV	_	_	5	advmod	_	_
2	zavallı	zavallı	ADJ	Adj	_	3	amod	_	_
3	erkeklerin	erkek	NOUN	_	Case=Gen|Number=Plur|Person=3	5	nsubj	_	_
4	mi	mi	AUX	Ques	Aspect=Imp|Number=Sing|Person=3|Tense=Pres	3	discourse	_	_
5	gaip	gaip	NOUN	_	Case=Nom|Number=Sing|Person=3	7	csubj	_	_
6	ettiği	et	VERB	Ptcp	Aspect=Perf|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	5	compound:lvc	_	_
7	tezahür	tezahür	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
8	eder	et	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	7	compound:lvc	_	_
9	.	.	PUNCT	Stop	_	7	punct	_	_

~~~


