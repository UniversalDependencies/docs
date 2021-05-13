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
Average distance between parent and child is 3.92439862542955.

The following 9 pairs of parts of speech are connected with `mark`: <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-ADP.html">ADP</a></tt> (238; 82% instances), <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-SCONJ.html">SCONJ</a></tt> (22; 8% instances), <tt><a href="zh_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_pud-pos-ADP.html">ADP</a></tt> (21; 7% instances), <tt><a href="zh_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_pud-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="zh_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_pud-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="zh_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_pud-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="zh_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="zh_pud-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="zh_pud-pos-DET.html">DET</a></tt>-<tt><a href="zh_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="zh_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="zh_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mark	color:blue
1	相比	_	VERB	VV	_	19	acl	_	SpaceAfter=No|Translit=xiāngbǐ
2	之下	_	ADP	IN	_	1	mark	_	SpaceAfter=No|Translit=zhīxià
3	，	_	PUNCT	,	_	1	punct	_	SpaceAfter=No|Translit=，
4	於	_	ADP	IN	_	6	case	_	SpaceAfter=No|Translit=於
5	2004	_	NUM	CD	NumType=Card	6	nummod	_	SpaceAfter=No|Translit=2004
6	年	_	NOUN	NNB	_	7	obl	_	SpaceAfter=No|Translit=nián
7	開業	_	VERB	VV	_	11	acl:relcl	_	SpaceAfter=No|Translit=kāiyè
8	的	_	PART	DEC	_	7	mark:rel	_	SpaceAfter=No|Translit=de
9	諾瑪	_	PROPN	NNP	_	11	compound	_	SpaceAfter=No|Translit=諾瑪
10	城際	_	NOUN	NN	_	11	compound	_	Proper=True|SpaceAfter=No|Translit=chéngjì
11	地鐵站	_	NOUN	NN	_	15	compound	_	Proper=True|SpaceAfter=No|Translit=detiězhàn
12	修建	_	VERB	VV	_	14	advcl	_	SpaceAfter=No|Translit=xiūjiàn
13	所	_	ADV	RB	_	14	mark:prt	_	SpaceAfter=No|Translit=suǒ
14	耗	_	VERB	VV	_	15	amod	_	SpaceAfter=No|Translit=hào
15	成本	_	NOUN	NN	_	19	nsubj	_	SpaceAfter=No|Translit=chéngběn
16	為	_	AUX	VC	_	19	cop	_	SpaceAfter=No|Translit=wèi
17	103.7億	_	NUM	CD	NumType=Card	19	nummod	_	SpaceAfter=No|Translit=103.7yì
18	美	_	PROPN	NNP	_	19	compound	_	SpaceAfter=No|Translit=měi
19	元	_	NOUN	NNB	_	0	root	_	Proper=True|SpaceAfter=No|Translit=yuán
20	。	_	PUNCT	.	_	19	punct	_	Translit=。

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 mark	color:blue
1	一旦	_	SCONJ	IN	_	7	mark	_	SpaceAfter=No|Translit=yīdàn
2	官方	_	NOUN	NN	_	5	nmod	_	SpaceAfter=No|Translit=guānfāng
3	的	_	PART	DEC	Case=Gen	2	case	_	SpaceAfter=No|Translit=de
4	派對	_	NOUN	NN	_	5	compound	_	SpaceAfter=No|Translit=pàiduì
5	照片	_	NOUN	NN	_	7	nsubj:pass	_	SpaceAfter=No|Translit=zhàopiàn
6	被	_	AUX	BB	Voice=Pass	7	aux:pass	_	SpaceAfter=No|Translit=bèi
7	發布	_	VERB	VV	_	13	xcomp	_	SpaceAfter=No|Translit=fābù
8	，	_	PUNCT	,	_	7	punct	_	SpaceAfter=No|Translit=，
9	社交	_	NOUN	NN	_	10	compound	_	SpaceAfter=No|Translit=shèjiāo
10	媒體	_	NOUN	NN	_	13	nsubj	_	SpaceAfter=No|Translit=媒tǐ
11	就	_	ADV	RB	_	13	advmod	_	SpaceAfter=No|Translit=jiù
12	會	_	AUX	MD	_	13	aux	_	SpaceAfter=No|Translit=huì
13	發表	_	VERB	VV	_	18	dep	_	SpaceAfter=No|Translit=fābiǎo
14	評論	_	NOUN	NN	_	13	obj	_	SpaceAfter=No|Translit=pínglùn
15	-	_	PUNCT	HYPH	_	13	punct	_	SpaceAfter=No|Translit=-
16	而且	_	ADV	RB	_	18	advmod	_	SpaceAfter=No|Translit='érqiě
17	它們	_	PRON	PRP	Number=Plur|Person=3	18	nsubj	_	SpaceAfter=No|Translit=tāmen
18	都是	_	VERB	VC	_	0	root	_	SpaceAfter=No|Translit=dōushì
19	不	_	ADV	RB	Polarity=Neg	21	advmod	_	SpaceAfter=No|Translit=bù
20	太	_	ADV	RB	_	21	advmod	_	SpaceAfter=No|Translit=tài
21	受	_	VERB	VV	_	18	xcomp	_	SpaceAfter=No|Translit=shòu
22	歡迎	_	VERB	VV	_	21	xcomp	_	SpaceAfter=No|Translit=huanyíng
23	的	_	PART	UH	_	18	discourse:sp	_	SpaceAfter=No|Translit=de
24	。	_	PUNCT	.	_	18	punct	_	Translit=。

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 mark	color:blue
1	這	_	PRON	PRD	_	10	nsubj	_	SpaceAfter=No|Translit=zhè
2	不僅	_	ADP	IN	_	3	mark	_	SpaceAfter=No|Translit=bùjǐn
3	適用	_	ADJ	JJ	_	10	xcomp	_	SpaceAfter=No|Translit=shìyòng
4	於	_	VERB	VV	_	3	mark:prt	_	SpaceAfter=No|Translit=於
5	娛樂	_	NOUN	NN	_	6	compound	_	SpaceAfter=No|Translit=yúlè
6	內容	_	NOUN	NN	_	3	obj	_	SpaceAfter=No|Translit=nèiróng
7	，	_	PUNCT	,	_	3	punct	_	SpaceAfter=No|Translit=，
8	同樣	_	ADV	RB	_	10	advmod	_	SpaceAfter=No|Translit=tóngyàng
9	也	_	ADV	RB	_	10	advmod	_	SpaceAfter=No|Translit=yě
10	適用	_	ADJ	JJ	_	24	dep	_	SpaceAfter=No|Translit=shìyòng
11	於	_	VERB	VV	_	10	mark:prt	_	SpaceAfter=No|Translit=於
12	教育	_	NOUN	NN	_	10	obj	_	SpaceAfter=No|Translit=jiàoyù
13	，	_	PUNCT	,	_	14	punct	_	SpaceAfter=No|Translit=，
14	科研	_	NOUN	NN	_	12	conj	_	SpaceAfter=No|Translit=kēyán
15	，	_	PUNCT	,	_	10	punct	_	SpaceAfter=No|Translit=，
16	以及	_	ADV	RB	_	24	advmod	_	SpaceAfter=No|Translit=yǐjí
17	也許	_	ADV	RB	_	24	advmod	_	SpaceAfter=No|Translit=yěxǔ
18	最	_	ADV	RB	_	19	advmod	_	SpaceAfter=No|Translit=zuì
19	重要	_	ADJ	JJ	_	24	csubj	_	SpaceAfter=No|Translit=zhòngyào
20	的	_	PART	DEC	_	19	mark:rel	_	SpaceAfter=No|Translit=de
21	是	_	AUX	VC	_	24	cop	_	SpaceAfter=No|Translit=shì
22	，	_	PUNCT	,	_	21	punct	_	SpaceAfter=No|Translit=，
23	政治	_	NOUN	NN	_	24	compound	_	SpaceAfter=No|Translit=zhèngzhì
24	言論	_	NOUN	NN	_	0	root	_	SpaceAfter=No|Translit=yánlùn
25	。	_	PUNCT	.	_	24	punct	_	Translit=。

~~~


