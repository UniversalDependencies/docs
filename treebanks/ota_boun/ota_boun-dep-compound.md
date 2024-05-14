---
layout: base
title:  'Statistics of compound in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `compound`

This relation is universal.
There are 2 language-specific subtypes of `compound`: <tt><a href="ota_boun-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="ota_boun-dep-compound-redup.html">compound:redup</a></tt>.

77 nodes (1%) are attached to their parents as `compound`.

75 instances of `compound` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07792207792208.

The following 13 pairs of parts of speech are connected with `compound`: <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (46; 60% instances), <tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (10; 13% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (7; 9% instances), <tt><a href="ota_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="ota_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="ota_boun-pos-NUM.html">NUM</a></tt> (3; 4% instances), <tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ota_boun-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ota_boun-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ota_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	Artık	artık	ADV	_	_	2	advmod	_	_
2	karar	karar	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
3	vermişti	ver	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	2	compound	_	_
4	.	.	PUNCT	Stop	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound	color:blue
1	Bunlar	bu	PRON	Demons	Case=Nom|Number=Plur|Person=3|PronType=Dem	9	nsubj	_	SpaceAfter=No|TokenRange=1544:1550
2	,	,	PUNCT	Comma	_	9	punct	_	TokenRange=1550:1551
3	hayatı	hayat	NOUN	_	Case=Acc|Number=Sing|Person=3	5	obj	_	TokenRange=1552:1558
4	etrafımızda	etraf	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1	6	obl	_	TokenRange=1559:1570
5	serbest	serbest	ADJ	Adj	_	9	acl	_	TokenRange=1571:1578
6	bırakan	bırak	VERB	Ptcp	Polarity=Pos|Tense=Pres|VerbForm=Part	5	compound	_	TokenRange=1579:1586
7	geniş	geniş	ADJ	Adj	_	9	amod	_	TokenRange=1587:1592
8	lakayt	lakayt	ADJ	Adj	_	9	amod	_	TokenRange=1593:1599
9	dostlar	dost	NOUN	_	Case=Nom|Number=Plur|Person=3	0	root	_	_
10	dı	y	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	9	cop	_	_
11	.	.	PUNCT	Stop	_	9	punct	_	SpacesAfter=\r\n|TokenRange=1609:1610

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 18 compound	color:blue
1	Kubbe	kubbe	NOUN	_	Case=Acc|Number=Sing|Person=3	7	obj	_	TokenRange=3371:3376
2	ve	ve	CCONJ	_	_	3	cc	_	TokenRange=3377:3379
3	minareleri	minare	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	1	conj	_	TokenRange=3380:3390
4	o	o	DET	Demons	_	6	det	_	TokenRange=3391:3392
5	alaca	alaca	ADJ	Adj	_	6	amod	_	TokenRange=3393:3398
6	saatte	saat	NOUN	_	Case=Loc|Number=Sing|Person=3	7	obl	_	TokenRange=3399:3405
7	görmemiş	gör	VERB	Ptcp	Evident=Nfh|Number=Sing|Person=3|Polarity=Neg|Tense=Past	9	acl	_	TokenRange=3406:3414
8	olan	ol	AUX	Ptcp	Polarity=Pos|Tense=Pres|VerbForm=Part	7	aux	_	TokenRange=3415:3419
9	gözler	göz	NOUN	_	Case=Nom|Number=Plur|Person=3	22	nsubj	_	SpaceAfter=No|TokenRange=3420:3426
10	,	,	PUNCT	Comma	_	22	punct	_	TokenRange=3426:3427
11	taşa	taş	NOUN	_	Case=Dat|Number=Sing|Person=3	15	iobj	_	TokenRange=3428:3432
12	en	en	ADV	_	_	13	advmod	_	TokenRange=3433:3435
13	ilahî	ilahî	ADJ	Adj	_	14	amod	_	TokenRange=3436:3441
14	manayı	mana	NOUN	_	Case=Acc|Number=Sing|Person=3	15	obj	_	TokenRange=3442:3448
15	veren	ver	VERB	Ptcp	Polarity=Pos|Tense=Pres|VerbForm=Part	21	acl	_	TokenRange=3449:3454
16	o	o	DET	Demons	_	21	det	_	TokenRange=3455:3456
17	muhayyer	muhayyer	ADJ	_	_	20	amod	_	TokenRange=3457:3465
18	el	el	NOUN	_	Case=Nom|Number=Sing|Person=3	20	compound	_	SpaceAfter=No|TokenRange=3466:3468
19	-	-	PUNCT	Punc	_	20	punct	_	SpaceAfter=No|TokenRange=3468:3469
20	ukul	ukul	NOUN	_	Case=Nom|Number=Sing|Person=3	21	amod	_	TokenRange=3469:3473
21	mimariyi	mimari	NOUN	_	Case=Acc|Number=Sing|Person=3	22	obj	_	TokenRange=3474:3482
22	anlamış	anla	VERB	Ptcp	Evident=Nfh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	TokenRange=3483:3490
23	değiller	değil	AUX	Overt	Case=Nom|Number=Plur|Person=3	22	aux	_	_
24	dir	i	AUX	Zero	Aspect=Perf|Number=Sing|Person=3|Tense=Pres	22	cop	_	_
25	.	.	PUNCT	Stop	_	22	punct	_	SpacesAfter=\r\n|TokenRange=3502:3503

~~~


