---
layout: base
title:  'Statistics of xcomp in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `xcomp`

This relation is universal.

49 nodes (1%) are attached to their parents as `xcomp`.

44 instances of `xcomp` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.89795918367347.

The following 7 pairs of parts of speech are connected with `xcomp`: <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (21; 43% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (15; 31% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt> (7; 14% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (3; 6% instances), <tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ota_boun-pos-AUX.html">AUX</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 xcomp	color:blue
1	Kim	kim	PRON	Ques	Case=Nom|Number=Sing|Person=3|PronType=Int	2	nsubj	_	_
2	bilir	bil	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	0	root	_	_
3	ne	ne	PRON	Ques	Case=Nom|Number=Sing|Person=3|PronType=Int	6	obl	_	_
4	kadar	kadar	ADP	PCDat	_	3	case	_	_
5	rü’yâlar	rü’yâ	NOUN	_	Case=Acc|Number=Plur|Person=3	6	obj	_	_
6	görmüştür	gör	VERB	_	Evident=Nfh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	2	xcomp	_	_
7	!	!	PUNCT	Excl	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 xcomp	color:blue
1	Şu	şu	DET	Det	_	2	det	_	_
2	muamele	muamele	NOUN	_	Case=Nom|Number=Sing|Person=3	4	nsubj	_	_
3	bana	ben	PRON	Pers	Case=Dat|Number=Sing|Person=1|PronType=Prs	4	obl	_	_
4	garib	garib	NOUN	_	Case=Nom|Number=Sing|Person=3	5	xcomp	_	_
5	göründü	görün	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	_
6	:	:	PUNCT	Punc	_	12	punct	_	_
7	Bir	bir	DET	Det	_	8	det	_	_
8	müşteri	müşteri	NOUN	_	Case=Nom|Number=Sing|Person=3	12	nsubj	_	_
9	listeyi	liste	NOUN	_	Case=Acc|Number=Sing|Person=3	12	obj	_	_
10	istediği	iste	VERB	Ptcp	Aspect=Perf|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	11	acl	_	_
11	zaman	zaman	NOUN	_	Case=Nom|Number=Sing|Person=3	12	obl	_	_
12	okuyamaz	oku	VERB	_	Aspect=Hab|Mood=Pot|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	5	parataxis	_	_
13	mı	mi	AUX	Ques	Aspect=Imp|Number=Sing|Person=3|Tense=Pres	12	discourse	_	_
14	?	?	PUNCT	Ques	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 xcomp	color:blue
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


