---
layout: base
title:  'Statistics of dislocated in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `dislocated`

This relation is universal.

5 nodes (0%) are attached to their parents as `dislocated`.

3 instances of `dislocated` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 4 pairs of parts of speech are connected with `dislocated`: <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (1; 20% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-PRON.html">PRON</a></tt> (1; 20% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 dislocated	color:blue
1	Bu	bu	DET	Det	_	2	det	_	_
2	öksürük	öksürük	NOUN	_	Case=Nom|Number=Sing|Person=3	12	nsubj	_	_
3	,	,	PUNCT	Comma	_	2	punct	_	_
4	bu	bu	DET	Demons	_	5	det	_	_
5	öksürük	öksürük	NOUN	_	Case=Nom|Number=Sing|Person=3	2	conj	_	_
6	bundan	bu	PRON	Demons	Case=Abl|Number=Sing|Person=3|PronType=Dem	2	dislocated	_	_
7	karısının	karı	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	11	nsubj	_	_
8	,	,	PUNCT	Comma	_	9	punct	_	_
9	karıcığının	karıcık	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	dislocated	_	_
10	bile	bile	ADV	Emph	_	9	advmod:emph	_	_
11	irkildiğini	irkil	VERB	Ptcp	Aspect=Perf|Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	12	ccomp	_	_
12	duyuyor	duy	VERB	_	Aspect=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	0	root	_	_
13	,	,	PUNCT	Comma	_	18	punct	_	_
14	geceleri	gece	NOUN	_	Case=Acc|Number=Plur|Person=3	17	obl	_	_
15	öksürükleriyle	öksürük	NOUN	_	Case=Ins|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	17	obl	_	_
16	onu	o	PRON	Pers	Case=Acc|Number=Sing|Person=3|PronType=Prs	17	obj	_	_
17	uyandırmamak	uyan	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Neg|VerbForm=Vnoun	18	xcomp	_	_
18	istiyordu	iste	VERB	_	Aspect=Imp|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	12	conj	_	_
19	.	.	PUNCT	Stop	_	18	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 dislocated	color:blue
1	Şimdiye	şimdi	NOUN	_	Case=Dat|Number=Sing|Person=3	8	obl	_	_
2	kadar	kadar	ADP	PCDat	_	1	case	_	_
3	her	her	DET	Det	_	5	det	_	_
4	türlü	türlü	ADJ	Adj	_	5	amod	_	_
5	terakkiden	terakki	NOUN	_	Case=Abl|Number=Sing|Person=3	8	obl	_	_
6	ne	ne	PRON	Ques	Case=Nom|Number=Sing|Person=3|PronType=Int	8	obl	_	_
7	kadar	kadar	ADP	PCDat	_	6	case	_	_
8	mahrum	mahrum	ADJ	Adj	_	10	csubj	_	_
9	kalmak	kal	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	8	compound	_	_
10	mümkünse	mümkün	VERB	_	Mood=Des|Number=Sing|Person=3|Polarity=Pos	13	dislocated	_	_
11	o	o	DET	Demons	_	13	obl	_	_
12	kadar	kadar	ADP	PCDat	_	11	case	_	_
13	mahrum	mahrum	ADJ	Adj	_	15	amod	_	_
14	kalmış	kal	VERB	Ptcp	Evident=Nfh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	13	compound	_	_
15	olan	ol	AUX	Ptcp	Polarity=Pos|Tense=Pres|VerbForm=Part	16	acl	_	_
16	vatanımıza	vatan	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1	17	obj	_	_
17	edilecek	et	VERB	Ptcp	Aspect=Prosp|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|Voice=Pass	20	acl	_	_
18	en	en	ADV	_	_	19	advmod	_	_
19	mühim	mühim	ADJ	Adj	_	20	amod	_	_
20	hizmet	hizmet	NOUN	_	Case=Acc|Number=Sing|Person=3	27	nsubj	_	_
21	zannederim	zannet	VERB	_	Aspect=Hab|Number=Sing|Person=1|Polarity=Pos|Tense=Pres	27	advcl	_	_
22	ki	ki	SCONJ	_	_	27	mark	_	_
23	vatandaşlarımızı	vatandaş	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=1	26	obj	_	_
24	his	his	NOUN	_	_	25	nmod:poss	_	_
25	itibariyle	itibari	NOUN	_	Case=Ins|Number=Sing|Person=3	26	obl	_	_
26	terbiyeye	terbiye	NOUN	_	Case=Dat|Number=Sing|Person=3	27	obj	_	_
27	çalışmaktır	çalış	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	0	root	_	_
28	.	.	PUNCT	Stop	_	27	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 dislocated	color:blue
1	Bu	bu	DET	Det	_	2	det	_	_
2	öksürük	öksürük	NOUN	_	Case=Nom|Number=Sing|Person=3	12	nsubj	_	_
3	,	,	PUNCT	Comma	_	2	punct	_	_
4	bu	bu	DET	Demons	_	5	det	_	_
5	öksürük	öksürük	NOUN	_	Case=Nom|Number=Sing|Person=3	2	conj	_	_
6	bundan	bu	PRON	Demons	Case=Abl|Number=Sing|Person=3|PronType=Dem	2	dislocated	_	_
7	karısının	karı	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	11	nsubj	_	_
8	,	,	PUNCT	Comma	_	9	punct	_	_
9	karıcığının	karıcık	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	dislocated	_	_
10	bile	bile	ADV	Emph	_	9	advmod:emph	_	_
11	irkildiğini	irkil	VERB	Ptcp	Aspect=Perf|Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	12	ccomp	_	_
12	duyuyor	duy	VERB	_	Aspect=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	0	root	_	_
13	,	,	PUNCT	Comma	_	18	punct	_	_
14	geceleri	gece	NOUN	_	Case=Acc|Number=Plur|Person=3	17	obl	_	_
15	öksürükleriyle	öksürük	NOUN	_	Case=Ins|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	17	obl	_	_
16	onu	o	PRON	Pers	Case=Acc|Number=Sing|Person=3|PronType=Prs	17	obj	_	_
17	uyandırmamak	uyan	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Neg|VerbForm=Vnoun	18	xcomp	_	_
18	istiyordu	iste	VERB	_	Aspect=Imp|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	12	conj	_	_
19	.	.	PUNCT	Stop	_	18	punct	_	_

~~~


