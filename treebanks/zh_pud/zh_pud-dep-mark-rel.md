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
Average distance between parent and child is 2.16453674121406.

The following 6 pairs of parts of speech are connected with `mark:rel`: <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-PART.html">PART</a></tt> (424; 68% instances), <tt><a href="zh_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_pud-pos-PART.html">PART</a></tt> (195; 31% instances), <tt><a href="zh_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_pud-pos-PART.html">PART</a></tt> (3; 0% instances), <tt><a href="zh_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_pud-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="zh_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="zh_pud-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="zh_pud-pos-X.html">X</a></tt>-<tt><a href="zh_pud-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 mark:rel	color:blue
1	對於	對於	ADP	IN	_	11	case	_	SpaceAfter=No|Translit=duìyú|LTranslit=duìyú
2	通過	通過	ADP	IN	_	4	case	_	SpaceAfter=No|Translit=tōngguò|LTranslit=tōngguò
3	社交	社交	NOUN	NN	_	4	compound	_	SpaceAfter=No|Translit=shèjiāo|LTranslit=shèjiāo
4	媒體	媒體	NOUN	NN	_	6	obl	_	SpaceAfter=No|Translit=méitǐ|LTranslit=méitǐ
5	來	來	ADV	RB	_	6	mark:prt	_	SpaceAfter=No|Translit=lái|LTranslit=lái
6	跟踪	跟踪	VERB	VV	_	11	acl:relcl	_	SpaceAfter=No|Translit=gēnzōng|LTranslit=gēnzōng
7	國會山	國會山	PROPN	NNP	_	9	compound	_	SpaceAfter=No|Translit=guóhuìshān|LTranslit=guóhuìshān
8	任職	任職	NOUN	NN	_	9	compound	_	SpaceAfter=No|Translit=rènzhí|LTranslit=rènzhí
9	變遷	變遷	NOUN	NN	_	6	obj	_	SpaceAfter=No|Translit=biànqiān|LTranslit=biànqiān
10	的	的	PART	DEC	_	6	mark:rel	_	SpaceAfter=No|Translit=de|LTranslit=de
11	人	人	NOUN	NN	_	13	obl	_	SpaceAfter=No|Translit=rén|LTranslit=rén
12	而	而	ADV	RB	_	13	advmod	_	SpaceAfter=No|Translit='ér|LTranslit='ér
13	言	言	VERB	VV	_	19	advcl	_	SpaceAfter=No|Translit=yán|LTranslit=yán
14	，	，	PUNCT	,	_	13	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
15	這	這	DET	DT	_	16	det	_	SpaceAfter=No|Translit=zhè|LTranslit=zhè
16	次	次	NOUN	NNB	_	19	obl	_	SpaceAfter=No|Translit=cì|LTranslit=cì
17	與	與	ADP	IN	_	18	case	_	SpaceAfter=No|Translit=yǔ|LTranslit=yǔ
18	以往	以往	NOUN	NN	_	19	obl	_	SpaceAfter=No|Translit=yǐwǎng|LTranslit=yǐwǎng
19	有	有	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=yǒu|LTranslit=yǒu
20	所	所	ADV	RB	_	19	mark:prt	_	SpaceAfter=No|Translit=suǒ|LTranslit=suǒ
21	不同	不同	ADJ	JJ	_	19	xcomp	_	SpaceAfter=No|Translit=bùtóng|LTranslit=bùtóng
22	。	。	PUNCT	.	_	19	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 mark:rel	color:blue
1	遊戲	遊戲	NOUN	NN	_	7	nsubj	_	SpaceAfter=No|Translit=yóuxì|LTranslit=yóuxì
2	與	與	ADP	IN	_	6	case	_	SpaceAfter=No|Translit=yǔ|LTranslit=yǔ
3	我們	我	PRON	PRP	Number=Plur|Person=1	6	nmod	_	SpaceAfter=No|Translit=wǒmen|LTranslit=wǒ
4	的	的	PART	DEC	Case=Gen	3	case	_	SpaceAfter=No|Translit=de|LTranslit=de
5	日常	日常	ADJ	JJ	_	6	amod	_	SpaceAfter=No|Translit=rìcháng|LTranslit=rìcháng
6	生活	生活	NOUN	NN	_	7	obl	_	SpaceAfter=No|Translit=shēnghuó|LTranslit=shēnghuó
7	有	有	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=yǒu|LTranslit=yǒu
8	相似	相似	ADJ	JJ	_	10	amod	_	SpaceAfter=No|Translit=xiāngshì|LTranslit=xiāngshì
9	之	之	PART	DEC	_	8	mark:rel	_	SpaceAfter=No|Translit=zhī|LTranslit=zhī
10	處	處	NOUN	NN	_	7	obj	_	SpaceAfter=No|Translit=chù|LTranslit=chù
11	。	。	PUNCT	.	_	7	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 mark:rel	color:blue
1	在	在	ADP	IN	_	5	case	_	SpaceAfter=No|Translit=zài|LTranslit=zài
2	羅馬化	羅馬化	PROPN	NNP	_	5	acl:relcl	_	SpaceAfter=No|Translit=luómǎhuà|LTranslit=luómǎhuà
3	的	的	PART	DEC	_	2	mark:rel	_	SpaceAfter=No|Translit=de|LTranslit=de
4	第一	第一	ADJ	CD	NumType=Ord	5	amod	_	SpaceAfter=No|Translit=dìyī|LTranslit=dìyī
5	階段	階段	NOUN	NN	_	16	obl	_	SpaceAfter=No|Translit=jiēduàn|LTranslit=jiēduàn
6	，	，	PUNCT	,	_	5	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
7	羅馬	羅馬	PROPN	NNP	_	16	nsubj	_	SpaceAfter=No|Translit=luómǎ|LTranslit=luómǎ
8	出	出	VERB	VV	_	16	advcl	_	SpaceAfter=No|Translit=chū|LTranslit=chū
9	於	於	VERB	VV	_	8	mark:prt	_	SpaceAfter=No|Translit=yú|LTranslit=yú
10	管理	管理	VERB	VV	_	12	acl:relcl	_	SpaceAfter=No|Translit=guǎnlǐ|LTranslit=guǎnlǐ
11	的	的	PART	DEC	_	10	mark:rel	_	SpaceAfter=No|Translit=de|LTranslit=de
12	原因	原因	NOUN	NN	_	8	obj	_	SpaceAfter=No|Translit=yuányīn|LTranslit=yuányīn
13	把	把	ADP	BB	Voice=Cau	15	case	_	SpaceAfter=No|Translit=bǎ|LTranslit=bǎ
14	該	該	DET	DT	_	15	det	_	SpaceAfter=No|Translit=gāi|LTranslit=gāi
15	半島	半島	NOUN	NN	_	16	obl:patient	_	SpaceAfter=No|Translit=bàndǎo|LTranslit=bàndǎo
16	一分為二	為	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=yīfēnwèi'èr|LTranslit=wèi
17	。	。	PUNCT	.	_	16	punct	_	Translit=.|LTranslit=.

~~~


