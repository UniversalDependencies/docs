---
layout: base
title:  'Statistics of csubj in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `csubj`

This relation is universal.

43 nodes (0%) are attached to their parents as `csubj`.

43 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.2093023255814.

The following 9 pairs of parts of speech are connected with `csubj`: <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (11; 26% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (7; 16% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (6; 14% instances), <tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (5; 12% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (5; 12% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt> (4; 9% instances), <tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (3; 7% instances), <tt><a href="ota_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 csubj	color:blue
1	Bu	bu	DET	Det	_	2	det	_	بو
2	dakika	dakika	NOUN	_	Case=Nom|Number=Sing|Person=3	3	obl	_	دقيقه
3	yaşamak	yaşa	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	8	csubj	_	ياشامق
4	ona	o	PRON	Pers	Case=Dat|Number=Sing|Person=3|PronType=Prs	8	obl	_	اوكا
5	ne	ne	ADV	Ques	_	7	advmod	_	نه
6	kadar	kadar	ADP	PCDat	_	5	case	_	قدر
7	tatlı	tatlı	ADJ	Adj	_	8	xcomp	_	طاتلى
8	geliyordu	gel	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	كليوردى
9	.	.	PUNCT	Stop	_	8	punct	_	.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 csubj	color:blue
1	Bütün	bütün	DET	Adj	_	2	det	_	بتون|TokenRange=3646:3651
2	mabetler	mabet	NOUN	_	Case=Nom|Number=Plur|Person=3	3	nmod:poss	_	معبدلر|TokenRange=3652:3660
3	içinde	iç	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	obl	_	ايچنده|TokenRange=3661:3667
4	güneşten	güneş	NOUN	_	Case=Abl|Number=Sing|Person=3	7	obl	_	كونشدن|TokenRange=3668:3676
5	ilk	ilk	ADV	Adj	_	7	advmod	_	ايلك|TokenRange=3677:3680
6	ziya	ziya	NOUN	_	Case=Acc|Number=Sing|Person=3	7	obj	_	ضيا|TokenRange=3681:3685
7	alan	al	VERB	Ptcp	Polarity=Pos|Tense=Pres|VerbForm=Part	8	csubj	_	آلان|TokenRange=3686:3690
8	cami	cami	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
9	dir	i	AUX	Zero	Aspect=Perf|Number=Sing|Person=3|Tense=Pres	8	cop	_	_
10	.	.	PUNCT	Stop	_	8	punct	_	.|SpacesAfter=\r\n|TokenRange=3698:3699

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 23 csubj	color:blue
1	Çünkü	çünkü	CCONJ	_	_	26	cc	_	چونكه
2	i’tikadımca	i’tikad	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	26	obl	_	اعتقادمجه
3	roman	roman	NOUN	_	Case=Nom|Number=Sing|Person=3	9	amod	_	رومان
4	,	,	PUNCT	Comma	_	5	punct	_	,
5	tiyatro	tiyatro	NOUN	_	Case=Nom|Number=Sing|Person=3	3	conj	_	تياترو
6	,	,	PUNCT	Comma	_	7	punct	_	,
7	novel	novel	NOUN	_	Case=Nom|Number=Sing|Person=3	3	conj	_	نوول
8	gibi	gibi	ADP	PCNom	_	3	case	_	كبى
9	şeyler	şey	NOUN	_	Case=Acc|Number=Plur|Person=3	10	obj	_	شيلر
10	yazmağa	yaz	VERB	Vnoun	Case=Dat|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	11	ccomp	_	يازمغه
11	hâhişli	hâhişli	ADJ	Adj	_	12	obj	_	خواهشلى
12	olanlara	ol	VERB	Ptcp	Case=Dat|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Part	26	obl	_	اولانلره
13	göre	göre	ADP	PCDat	_	12	case	_	كوره
14	ahvâl-i	ahvâl	NOUN	_	Case=Nom|Number=Sing|Person=3	23	obj	_	احوال
15	umûmiyye-i	umûmiyye	NOUN	_	Case=Nom|Number=Sing|Person=3	14	amod	_	عموميه
16	beşeriyyeti	beşeriyyeti	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	15	nmod:poss	_	بشريتى
17	uzaktan	uzak	NOUN	_	Case=Abl|Number=Sing|Person=3	23	obl	_	اوزاقدن
18	uzağa	uzak	NOUN	_	Case=Dat|Number=Sing|Person=3	17	flat	_	اوزاغه
19	akıl	akıl	NOUN	_	Case=Nom|Number=Sing|Person=3	23	nmod	_	عقل
20	ve	ve	CCONJ	_	_	21	cc	_	و
21	his	his	NOUN	_	Case=Nom|Number=Sing|Person=3	19	conj	_	حس
22	ile	ile	CCONJ	_	_	19	case	_	ايله
23	tasavvur	tasavvur	NOUN	_	Case=Nom|Number=Sing|Person=3	26	csubj	_	تصور
24	ve	ve	CCONJ	_	_	25	cc	_	و
25	tahayyül	tahayyül	NOUN	_	Case=Nom|Number=Sing|Person=3	23	conj	_	تخيل
26	kâfi	kâfi	NOUN	_	_	0	root	_	كافى
27	olamaz	ol	VERB	_	Aspect=Hab|Mood=Pot|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	26	compound:lvc	_	اوله‌ماز
28	.	.	PUNCT	Stop	_	27	punct	_	.

~~~


