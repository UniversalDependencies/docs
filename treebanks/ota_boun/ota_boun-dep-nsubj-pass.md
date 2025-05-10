---
layout: base
title:  'Statistics of nsubj:pass in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ota_boun-dep-nsubj.html">nsubj</a></tt>.

24 nodes (0%) are attached to their parents as `nsubj:pass`.

24 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.70833333333333.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (16; 67% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (5; 21% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:pass	color:blue
1	Herkesin	herkes	NOUN	_	Case=Gen|Number=Sing|Person=3	2	nmod:poss	_	هر كسك
2	yüzünde	yüz	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	obl	_	يوزنده
3	alâim-i	alâim	NOUN	_	Case=Nom|Number=Sing|Person=3	5	nsubj:pass	_	علائم
4	teessür	teessür	NOUN	_	Case=Nom|Number=Sing|Person=3	3	nmod:poss	_	تأثر
5	görüldü	gör	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past|Voice=Pass	0	root	_	كورلدى
6	.	.	PUNCT	Stop	_	5	punct	_	.

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 nsubj:pass	color:blue
1	Şarkta	şark	NOUN	_	Case=Loc|Number=Sing|Person=3	17	obl	_	شرقده
2	,	,	PUNCT	Comma	_	3	punct	_	,
3	Erzurum'da	Erzurum	PROPN	Place	Case=Loc|Number=Sing|Person=3	17	obl	_	ارضرومده
4	ve	ve	CCONJ	_	_	5	cc	_	و
5	Elaziz'de	Elaziz	PROPN	Place	Case=Loc|Number=Sing|Person=3	17	obl	_	العزيزه ده
6	merkez-i	merkez	NOUN	_	Case=Nom|Number=Sing|Person=3	9	nsubj	_	مركز
7	umumisi	umumi	ADJ	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	amod	_	عموميسى
8	İstanbul'da	İstanbul	PROPN	Place	Case=Loc|Number=Sing|Person=3	9	obl	_	استانبولده
9	olmak	ol	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	17	obl	_	ولمق
10	üzere	üzere	ADP	PCNom	_	9	case	_	اوزره
11	Vilâyât-ı	Vilâyât	NOUN	_	Case=Nom|Number=Sing|Person=3	14	nmod:poss	_	ولايات
12	Şarkiye	Şarkiye	ADJ	_	Case=Nom|Number=Sing|Person=3	11	nmod:poss	_	شرقيه
13	Müdafaa-i	Müdafaa	NOUN	_	Case=Nom|Number=Sing|Person=3	16	nmod:poss	_	مدافعه ء
14	Hukuk-ı	Hukuk	NOUN	_	Case=Nom|Number=Sing|Person=3	13	obj	_	حقوق
15	Milliye	Milliye	ADJ	_	Case=Nom|Number=Sing|Person=3	14	nmod:poss	_	مليه
16	Cemiyeti	cemiyet	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	17	nsubj:pass	_	جمعيتى
17	teşkil	teşkil	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	تشكيل
18	edilmişti	edil	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past|Voice=Pass	17	compound:lvc	_	ايدلمشدى
19	.	.	PUNCT	Stop	_	17	punct	_	.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	İzmir'in	İzmir	PROPN	Place	Case=Gen|Number=Sing|Person=3	2	nsubj:pass	_	ازميرك
2	işgal	işgal	NOUN	_	Case=Nom|Number=Sing|Person=3	10	obl	_	اشغال
3	olunacağına	olun	VERB	Ptcp	Aspect=Prosp|Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|Tense=Fut|VerbForm=Part	2	compound:lvc	_	اولنجغنه
4	dair	dair	ADP	PCDat	_	2	case	_	دائر
5	Mayıs'ın	mayıs	NOUN	_	Case=Gen|Number=Sing|Person=3	6	nmod:poss	_	مايسك
6	on	on	NUM	ANum	NumType=Card	11	obl	_	اون
7	üçünden	üç	NUM	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	flat	_	اوچندن
8	beri	beri	ADP	PCAbl	_	6	case	_	برى
9	fiilî	fiilî	ADJ	Adj	_	10	amod	_	فعلى
10	emâreler	emâre	NOUN	_	Case=Acc|Number=Plur|Person=3	11	obj	_	اماره لر
11	gören	gör	VERB	Ptcp	Polarity=Pos|Tense=Pres|VerbForm=Part	15	acl	_	كورن
12	İzmir'de	İzmir	PROPN	Place	Case=Loc|Number=Sing|Person=3	15	amod	_	ازميرده
13	bazı	bazı	DET	Det	_	15	det	_	بعض
14	genç	genç	ADJ	Adj	_	15	amod	_	كنج
15	vatanperverler	vatanperver	NOUN	_	Case=Nom|Number=Plur|Person=3	28	nsubj	_	وطنپرورلر
16	,	,	PUNCT	Comma	_	28	punct	_	,
17	ayın	ay	NOUN	_	Case=Gen|Number=Sing|Person=3	20	nmod:poss	_	آيك
18	14/15	14/15	NUM	ANum	NumType=Card	20	amod	_	_
19	,	,	PUNCT	Comma	_	18	punct	_	,
20	gecesi	gece	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	28	obl	_	كيجه سى
21	,	,	PUNCT	Comma	_	28	punct	_	,
22	bu	bu	DET	Demons	_	23	det	_	بو
23	elîm	elîm	ADJ	Adj	Case=Nom|Number=Sing|Person=3	24	amod	_	آليم
24	vaziyet	vaziyet	NOUN	_	Case=Nom|Number=Sing|Person=3	25	nmod:poss	_	وضعيت
25	hakkında	hak	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	28	obl	_	حقنده
26	müdâvele-i	müdâvele	NOUN	_	Case=Nom|Number=Sing|Person=3	28	obj	_	مداوله ء
27	efkâr	efkâr	NOUN	_	Case=Acc|Number=Sing|Person=3	26	nmod:poss	_	افكار
28	eylemişler	eyle	VERB	_	Evident=Nfh|Number=Plur|Person=3|Polarity=Pos|Tense=Past	0	root	_	ايلمشلر
29	ve	ve	CCONJ	_	_	49	cc	_	و
30	emr-i	emr	NOUN	_	Case=Nom|Number=Sing|Person=3	31	nmod:poss	_	امر
31	vâki	vâki	NOUN	_	Case=Nom|Number=Sing|Person=3	32	nmod:poss	_	واقع
32	hâline	hâl	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	34	obl	_	حالنه
33	geldiğine	gel	VERB	Ptcp	Aspect=Perf|Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	32	compound	_	كلديكنه
34	şüphe	şüphe	NOUN	_	Case=Nom|Number=Sing|Person=3	37	acl	_	شبهه
35	kalmayan	kal	VERB	Ptcp	Polarity=Neg|Tense=Pres|VerbForm=Part	34	compound	_	قالميان
36	Yunan	Yunan	PROPN	_	Case=Nom|Number=Sing|Person=3	37	nmod:poss	_	يونان
37	işgalinin	işgal	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	39	nsubj	_	اشغالنك
38	ilhakla	ilhak	NOUN	_	Case=Ins|Number=Sing|Person=3	39	nmod	_	الحاقله
39	neticelenmesine	neticelen	VERB	Vnoun	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|VerbForm=Vnoun	40	ccomp	_	نتيجه لنمسنه
40	mâni	mâni	NOUN	_	Case=Nom|Number=Sing|Person=3	42	nmod:poss	_	مانع
41	olmak	ol	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	40	compound:lvc	_	اولمق
42	esasında	esas	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	44	obl	_	اساسنده
43	müttefik	müttefik	ADJ	Adj	_	44	amod	_	متفق
44	kalmışlar	kal	VERB	_	Evident=Nfh|Number=Plur|Person=3|Polarity=Pos|Tense=Past	28	conj	_	قالمشلر
45	ve	ve	CCONJ	_	_	49	cc	_	و
46	Redd-i	redd	NOUN	_	Case=Nom|Number=Sing|Person=3	48	nmod:poss	_	رد
47	İlhak	ilhak	NOUN	_	Case=Nom|Number=Sing|Person=3	46	nmod:poss	_	الحاق
48	prensibini	prensip	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	49	obj	_	پرنسيبنى
49	ortaya	orta	NOUN	_	Case=Dat|Number=Sing|Person=3	28	conj	_	اورته يه
50	atmışlardır	at	VERB	_	Evident=Nfh|Number=Plur|Person=3|Polarity=Pos|Tense=Past	49	compound	_	آتمشلردر
51	.	.	PUNCT	Stop	_	49	punct	_	.

~~~


