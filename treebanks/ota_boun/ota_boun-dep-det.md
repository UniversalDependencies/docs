---
layout: base
title:  'Statistics of det in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `det`

This relation is universal.

508 nodes (6%) are attached to their parents as `det`.

508 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.24803149606299.

The following 6 pairs of parts of speech are connected with `det`: <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-DET.html">DET</a></tt> (482; 95% instances), <tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_boun-pos-DET.html">DET</a></tt> (16; 3% instances), <tt><a href="ota_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_boun-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="ota_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="ota_boun-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ota_boun-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-DET.html">DET</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Bu	bu	DET	Det	_	2	det	_	_
2	suale	sual	NOUN	_	Case=Dat|Number=Sing|Person=3	4	obj	_	_
3	bilmem	bil	VERB	Vnoun	Aspect=Hab|Number=Sing|Person=1|Polarity=Neg|Tense=Pres	5	parataxis	_	_
4	hacet	hacet	NOUN	_	Case=Nom|Number=Sing|Person=3	5	nsubj	_	_
5	var	var	NOUN	Exist	Number=Sing|Person=3|Polarity=Pos	0	root	_	_
6	mı	mi	AUX	Ques	Aspect=Imp|Number=Sing|Person=3|Tense=Pres	5	discourse	_	_
7	?	?	PUNCT	Ques	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Bu	bu	DET	Det	_	2	det	_	_
2	temel	temel	ADJ	_	Case=Nom|Number=Sing|Person=3	7	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	Comma	_	7	punct	_	_
4	senin	sen	PRON	Pers	Case=Gen|Number=Sing|Person=2|PronType=Prs	7	nmod:poss	_	_
5	en	en	ADV	_	_	6	advmod	_	_
6	kıymetli	kıymetli	ADJ	Adj	_	7	amod	_	_
7	hazinendir	hazinen	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Stop	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
1	Çünkü	çünkü	CCONJ	_	_	14	cc	_	_
2	lokantanın	lokanta	NOUN	_	Case=Gen|Number=Sing|Person=3	3	nsubj	_	_
3	bulunduğu	bulun	VERB	Ptcp	Aspect=Perf|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	5	acl	_	_
4	işlek	işlek	ADJ	Adj	_	5	amod	_	_
5	caddede	cadde	NOUN	_	Case=Loc|Number=Sing|Person=3	14	obl	_	_
6	her	her	DET	Det	_	7	det	_	_
7	nasılsa	nasıl	ADV	_	_	14	advmod	_	_
8	şimdiye	şimdi	NOUN	_	Case=Dat|Number=Sing|Person=3	14	obl	_	_
9	kadar	kadar	ADP	PCDat	_	8	case	_	_
10	başka	başka	ADJ	Adj	_	13	amod	_	_
11	yemek	yemek	NOUN	_	Case=Nom|Number=Sing|Person=3	12	obj	_	_
12	yiyecek	yiyecek	VERB	Adj	Case=Nom|Number=Sing|Person=3	13	acl	_	_
13	yer	yer	NOUN	_	Case=Nom|Number=Sing|Person=3	14	nsubj	_	_
14	yapılamamış	yap	VERB	_	Evident=Nfh|Number=Sing|Person=3|Polarity=Pos|Tense=Past|Voice=Pass	0	root	_	_
15	.	.	PUNCT	Stop	_	14	punct	_	_

~~~


