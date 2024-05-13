---
layout: base
title:  'Statistics of mark in UD_Chinese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Chinese-PUD: Relations: `mark`

This relation is universal.
There are 3 language-specific subtypes of `mark`: <tt><a href="zh_pud-dep-mark-adv.html">mark:adv</a></tt>, <tt><a href="zh_pud-dep-mark-prt.html">mark:prt</a></tt>, <tt><a href="zh_pud-dep-mark-rel.html">mark:rel</a></tt>.

291 nodes (1%) are attached to their parents as `mark`.

185 instances of `mark` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.89690721649485.

The following 9 pairs of parts of speech are connected with `mark`: <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-ADP.html">ADP</a></tt> (246; 85% instances), <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-SCONJ.html">SCONJ</a></tt> (23; 8% instances), <tt><a href="zh_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_pud-pos-ADP.html">ADP</a></tt> (13; 4% instances), <tt><a href="zh_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_pud-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="zh_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_pud-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="zh_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="zh_pud-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="zh_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="zh_pud-pos-DET.html">DET</a></tt>-<tt><a href="zh_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="zh_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="zh_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mark	color:blue
1	相比	相比	VERB	VV	_	19	acl	_	SpaceAfter=No|Translit=xiāngbǐ|LTranslit=xiāngbǐ
2	之下	之下	ADP	IN	_	1	mark	_	SpaceAfter=No|Translit=zhīxià|LTranslit=zhīxià
3	，	，	PUNCT	,	_	1	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
4	於	於	ADP	IN	_	6	case	_	SpaceAfter=No|Translit=yú|LTranslit=yú
5	2004	2004	NUM	CD	NumType=Card	6	nummod	_	SpaceAfter=No|Translit=2004|LTranslit=2004
6	年	年	NOUN	NNB	_	7	obl	_	SpaceAfter=No|Translit=nián|LTranslit=nián
7	開業	開業	VERB	VV	_	11	acl:relcl	_	SpaceAfter=No|Translit=kāiyè|LTranslit=kāiyè
8	的	的	PART	DEC	_	7	mark:rel	_	SpaceAfter=No|Translit=de|LTranslit=de
9	諾瑪	諾瑪	PROPN	NNP	_	11	compound	_	SpaceAfter=No|Translit=nuòmǎ|LTranslit=nuòmǎ
10	城際	城際	NOUN	NN	_	11	compound	_	Proper=True|SpaceAfter=No|Translit=chéngjì|LTranslit=chéngjì
11	地鐵站	地鐵站	NOUN	NN	_	15	compound	_	Proper=True|SpaceAfter=No|Translit=detiězhàn|LTranslit=detiězhàn
12	修建	修建	VERB	VV	_	14	advcl	_	SpaceAfter=No|Translit=xiūjiàn|LTranslit=xiūjiàn
13	所	所	ADV	RB	_	14	mark:prt	_	SpaceAfter=No|Translit=suǒ|LTranslit=suǒ
14	耗	耗	VERB	VV	_	15	amod	_	SpaceAfter=No|Translit=hào|LTranslit=hào
15	成本	成本	NOUN	NN	_	19	nsubj	_	SpaceAfter=No|Translit=chéngběn|LTranslit=chéngběn
16	為	為	AUX	VC	_	19	cop	_	SpaceAfter=No|Translit=wèi|LTranslit=wèi
17	103.7億	103.7億	NUM	CD	NumType=Card	19	nummod	_	SpaceAfter=No|Translit=103.7yì|LTranslit=103.7yì
18	美	美	PROPN	NNP	_	19	compound	_	SpaceAfter=No|Translit=měi|LTranslit=měi
19	元	元	NOUN	NNB	_	0	root	_	Proper=True|SpaceAfter=No|Translit=yuán|LTranslit=yuán
20	。	。	PUNCT	.	_	19	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 mark	color:blue
1	一旦	一旦	SCONJ	IN	_	7	mark	_	SpaceAfter=No|Translit=yīdàn|LTranslit=yīdàn
2	官方	官方	NOUN	NN	_	5	nmod	_	SpaceAfter=No|Translit=guānfāng|LTranslit=guānfāng
3	的	的	PART	DEC	Case=Gen	2	case	_	SpaceAfter=No|Translit=de|LTranslit=de
4	派對	派對	NOUN	NN	_	5	compound	_	SpaceAfter=No|Translit=pàiduì|LTranslit=pàiduì
5	照片	照片	NOUN	NN	_	7	nsubj:pass	_	SpaceAfter=No|Translit=zhàopiàn|LTranslit=zhàopiàn
6	被	被	AUX	BB	Voice=Pass	7	aux:pass	_	SpaceAfter=No|Translit=bèi|LTranslit=bèi
7	發布	發布	VERB	VV	_	13	xcomp	_	SpaceAfter=No|Translit=fābù|LTranslit=fābù
8	，	，	PUNCT	,	_	7	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
9	社交	社交	NOUN	NN	_	10	compound	_	SpaceAfter=No|Translit=shèjiāo|LTranslit=shèjiāo
10	媒體	媒體	NOUN	NN	_	13	nsubj	_	SpaceAfter=No|Translit=méitǐ|LTranslit=méitǐ
11	就	就	ADV	RB	_	13	advmod	_	SpaceAfter=No|Translit=jiù|LTranslit=jiù
12	會	會	AUX	MD	_	13	aux	_	SpaceAfter=No|Translit=huì|LTranslit=huì
13	發表	發表	VERB	VV	_	18	dep	_	SpaceAfter=No|Translit=fābiǎo|LTranslit=fābiǎo
14	評論	評論	NOUN	NN	_	13	obj	_	SpaceAfter=No|Translit=pínglùn|LTranslit=pínglùn
15	-	-	PUNCT	HYPH	_	13	punct	_	SpaceAfter=No|Translit=-|LTranslit=-
16	而且	而且	ADV	RB	_	18	advmod	_	SpaceAfter=No|Translit='érqiě|LTranslit='érqiě
17	它們	它	PRON	PRP	Number=Plur|Person=3	18	nsubj	_	SpaceAfter=No|Translit=tāmen|LTranslit=tā
18	都是	是	VERB	VC	_	0	root	_	SpaceAfter=No|Translit=dōushì|LTranslit=shì
19	不	不	ADV	RB	Polarity=Neg	21	advmod	_	SpaceAfter=No|Translit=bù|LTranslit=bù
20	太	太	ADV	RB	_	21	advmod	_	SpaceAfter=No|Translit=tài|LTranslit=tài
21	受	受	VERB	VV	_	18	xcomp	_	SpaceAfter=No|Translit=shòu|LTranslit=shòu
22	歡迎	歡迎	VERB	VV	_	21	xcomp	_	SpaceAfter=No|Translit=huanyíng|LTranslit=huanyíng
23	的	的	PART	UH	_	18	discourse:sp	_	SpaceAfter=No|Translit=de|LTranslit=de
24	。	。	PUNCT	.	_	18	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 mark	color:blue
1	這	這	PRON	PRD	_	10	nsubj	_	SpaceAfter=No|Translit=zhè|LTranslit=zhè
2	不僅	不僅	ADP	IN	_	3	mark	_	SpaceAfter=No|Translit=bùjǐn|LTranslit=bùjǐn
3	適用	適用	ADJ	JJ	_	10	xcomp	_	SpaceAfter=No|Translit=shìyòng|LTranslit=shìyòng
4	於	於	VERB	VV	_	3	mark:prt	_	SpaceAfter=No|Translit=yú|LTranslit=yú
5	娛樂	娛樂	NOUN	NN	_	6	compound	_	SpaceAfter=No|Translit=yúlè|LTranslit=yúlè
6	內容	內容	NOUN	NN	_	3	obj	_	SpaceAfter=No|Translit=nèiróng|LTranslit=nèiróng
7	，	，	PUNCT	,	_	3	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
8	同樣	同樣	ADV	RB	_	10	advmod	_	SpaceAfter=No|Translit=tóngyàng|LTranslit=tóngyàng
9	也	也	ADV	RB	_	10	advmod	_	SpaceAfter=No|Translit=yě|LTranslit=yě
10	適用	適用	ADJ	JJ	_	24	dep	_	SpaceAfter=No|Translit=shìyòng|LTranslit=shìyòng
11	於	於	VERB	VV	_	10	mark:prt	_	SpaceAfter=No|Translit=yú|LTranslit=yú
12	教育	教育	NOUN	NN	_	10	obj	_	SpaceAfter=No|Translit=jiàoyù|LTranslit=jiàoyù
13	，	，	PUNCT	,	_	14	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
14	科研	科研	NOUN	NN	_	12	conj	_	SpaceAfter=No|Translit=kēyán|LTranslit=kēyán
15	，	，	PUNCT	,	_	10	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
16	以及	以及	ADV	RB	_	24	advmod	_	SpaceAfter=No|Translit=yǐjí|LTranslit=yǐjí
17	也許	也許	ADV	RB	_	24	advmod	_	SpaceAfter=No|Translit=yěxǔ|LTranslit=yěxǔ
18	最	最	ADV	RB	_	19	advmod	_	SpaceAfter=No|Translit=zuì|LTranslit=zuì
19	重要	重要	ADJ	JJ	_	24	csubj	_	SpaceAfter=No|Translit=zhòngyào|LTranslit=zhòngyào
20	的	的	PART	DEC	_	19	mark:rel	_	SpaceAfter=No|Translit=de|LTranslit=de
21	是	是	AUX	VC	_	24	cop	_	SpaceAfter=No|Translit=shì|LTranslit=shì
22	，	，	PUNCT	,	_	21	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
23	政治	政治	NOUN	NN	_	24	compound	_	SpaceAfter=No|Translit=zhèngzhì|LTranslit=zhèngzhì
24	言論	言論	NOUN	NN	_	0	root	_	SpaceAfter=No|Translit=yánlùn|LTranslit=yánlùn
25	。	。	PUNCT	.	_	24	punct	_	Translit=.|LTranslit=.

~~~


