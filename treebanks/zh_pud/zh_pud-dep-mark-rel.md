---
layout: base
title:  'Statistics of mark:rel in UD_Chinese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Chinese-PUD: Relations: `mark:rel`

This relation is a language-specific subtype of <tt><a href="zh_pud-dep-mark.html">mark</a></tt>.
There are also 2 other language-specific subtypes of `mark`: <tt><a href="zh_pud-dep-mark-adv.html">mark:adv</a></tt>, <tt><a href="zh_pud-dep-mark-prt.html">mark:prt</a></tt>.

626 nodes (3%) are attached to their parents as `mark:rel`.

626 instances of `mark:rel` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.13099041533546.

The following 6 pairs of parts of speech are connected with `mark:rel`: <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-PART.html">PART</a></tt> (415; 66% instances), <tt><a href="zh_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_pud-pos-PART.html">PART</a></tt> (204; 33% instances), <tt><a href="zh_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_pud-pos-PART.html">PART</a></tt> (3; 0% instances), <tt><a href="zh_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_pud-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="zh_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="zh_pud-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="zh_pud-pos-X.html">X</a></tt>-<tt><a href="zh_pud-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 mark:rel	color:blue
1	對於	_	ADP	IN	_	11	case	_	SpaceAfter=No|Translit=duì於
2	通過	_	ADP	IN	_	4	case	_	SpaceAfter=No|Translit=tōngguò
3	社交	_	NOUN	NN	_	4	compound	_	SpaceAfter=No|Translit=shèjiāo
4	媒體	_	NOUN	NN	_	6	obl	_	SpaceAfter=No|Translit=媒tǐ
5	來	_	ADV	RB	_	6	mark:prt	_	SpaceAfter=No|Translit=lái
6	跟踪	_	VERB	VV	_	11	acl:relcl	_	SpaceAfter=No|Translit=gēnzōng
7	國會山	_	PROPN	NNP	_	9	compound	_	SpaceAfter=No|Translit=guóhuìshān
8	任職	_	NOUN	NN	_	9	compound	_	SpaceAfter=No|Translit=rènzhí
9	變遷	_	NOUN	NN	_	6	obj	_	SpaceAfter=No|Translit=biànqiān
10	的	_	PART	DEC	_	6	mark:rel	_	SpaceAfter=No|Translit=de
11	人	_	NOUN	NN	_	13	obl	_	SpaceAfter=No|Translit=rén
12	而	_	ADV	RB	_	13	advmod	_	SpaceAfter=No|Translit='ér
13	言	_	VERB	VV	_	21	advcl	_	SpaceAfter=No|Translit=yán
14	，	_	PUNCT	,	_	13	punct	_	SpaceAfter=No|Translit=，
15	這	_	DET	DT	_	16	det	_	SpaceAfter=No|Translit=zhè
16	次	_	NOUN	NNB	_	21	advmod	_	SpaceAfter=No|Translit=cì
17	與	_	ADP	IN	_	18	case	_	SpaceAfter=No|Translit=yǔ
18	以往	_	NOUN	NN	_	21	obl	_	SpaceAfter=No|Translit=yǐwǎng
19	有	_	AUX	VV	_	21	cop	_	SpaceAfter=No|Translit=yǒu
20	所	_	ADV	RB	_	21	mark:prt	_	SpaceAfter=No|Translit=suǒ
21	不同	_	ADJ	JJ	_	0	root	_	SpaceAfter=No|Translit=bùtóng
22	。	_	PUNCT	.	_	21	punct	_	Translit=。

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 mark:rel	color:blue
1	遊戲	_	NOUN	NN	_	7	nsubj	_	SpaceAfter=No|Translit=遊xì
2	與	_	ADP	IN	_	6	case	_	SpaceAfter=No|Translit=yǔ
3	我們	_	PRON	PRP	Number=Plur|Person=1	6	nmod	_	SpaceAfter=No|Translit=wǒmen
4	的	_	PART	DEC	Case=Gen	3	case	_	SpaceAfter=No|Translit=de
5	日常	_	ADJ	JJ	_	6	amod	_	SpaceAfter=No|Translit=rìcháng
6	生活	_	NOUN	NN	_	7	obl	_	SpaceAfter=No|Translit=shēnghuó
7	有	_	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=yǒu
8	相似	_	ADJ	JJ	_	10	amod	_	SpaceAfter=No|Translit=xiāngshì
9	之	_	PART	DEC	_	8	mark:rel	_	SpaceAfter=No|Translit=zhī
10	處	_	NOUN	NN	_	7	obj	_	SpaceAfter=No|Translit=chù
11	。	_	PUNCT	.	_	7	punct	_	Translit=。

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 mark:rel	color:blue
1	在	_	ADP	IN	_	5	case	_	SpaceAfter=No|Translit=zài
2	羅馬化	_	PROPN	NNP	_	5	acl:relcl	_	SpaceAfter=No|Translit=羅mǎhuà
3	的	_	PART	DEC	_	2	mark:rel	_	SpaceAfter=No|Translit=de
4	第一	_	ADJ	CD	NumType=Ord	5	amod	_	SpaceAfter=No|Translit=dìyī
5	階段	_	NOUN	NN	_	16	obl	_	SpaceAfter=No|Translit=jiēduàn
6	，	_	PUNCT	,	_	5	punct	_	SpaceAfter=No|Translit=，
7	羅馬	_	PROPN	NNP	_	16	nsubj	_	SpaceAfter=No|Translit=羅mǎ
8	出	_	VERB	VV	_	16	advcl	_	SpaceAfter=No|Translit=chū
9	於	_	VERB	VV	_	8	mark:prt	_	SpaceAfter=No|Translit=於
10	管理	_	VERB	VV	_	12	acl:relcl	_	SpaceAfter=No|Translit=guǎnlǐ
11	的	_	PART	DEC	_	10	mark:rel	_	SpaceAfter=No|Translit=de
12	原因	_	NOUN	NN	_	8	obj	_	SpaceAfter=No|Translit=yuányīn
13	把	_	ADP	BB	Voice=Cau	15	case	_	SpaceAfter=No|Translit=bǎ
14	該	_	DET	DT	_	15	det	_	SpaceAfter=No|Translit=gāi
15	半島	_	NOUN	NN	_	16	obl:patient	_	SpaceAfter=No|Translit=bàndǎo
16	一分為二	_	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=yīfēnwèi'èr
17	。	_	PUNCT	.	_	16	punct	_	Translit=。

~~~


