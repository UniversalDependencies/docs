---
layout: base
title:  'Statistics of mark:prt in UD_Chinese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Chinese-PUD: Relations: `mark:prt`

This relation is a language-specific subtype of <tt><a href="zh_pud-dep-mark.html">mark</a></tt>.
There are also 2 other language-specific subtypes of `mark`: <tt><a href="zh_pud-dep-mark-adv.html">mark:adv</a></tt>, <tt><a href="zh_pud-dep-mark-rel.html">mark:rel</a></tt>.

338 nodes (2%) are attached to their parents as `mark:prt`.

235 instances of `mark:prt` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.11538461538462.

The following 7 pairs of parts of speech are connected with `mark:prt`: <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-VERB.html">VERB</a></tt> (214; 63% instances), <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-ADV.html">ADV</a></tt> (80; 24% instances), <tt><a href="zh_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_pud-pos-VERB.html">VERB</a></tt> (26; 8% instances), <tt><a href="zh_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_pud-pos-PART.html">PART</a></tt> (10; 3% instances), <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-PART.html">PART</a></tt> (6; 2% instances), <tt><a href="zh_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="zh_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 mark:prt	color:blue
1	他們	_	PRON	PRP	Number=Plur|Person=3	3	nmod	_	SpaceAfter=No|Translit=tāmen
2	的	_	PART	DEC	Case=Gen	1	case	_	SpaceAfter=No|Translit=de
3	成績	_	NOUN	NN	_	14	nsubj	_	SpaceAfter=No|Translit=chéngjī
4	屬	_	VERB	VV	_	14	advcl	_	SpaceAfter=No|Translit=shǔ
5	於	_	VERB	VV	_	4	mark:prt	_	SpaceAfter=No|Translit=於
6	4	_	NUM	CD	NumType=Card	7	nummod	_	SpaceAfter=No|Translit=4
7	年級	_	NOUN	NN	_	11	nmod	_	SpaceAfter=No|Translit=niánjí
8	的	_	PART	DEC	Case=Gen	7	case	_	SpaceAfter=No|Translit=de
9	全國	_	NOUN	NN	_	11	compound	_	SpaceAfter=No|Translit=quánguó
10	平均	_	ADJ	JJ	_	11	amod	_	SpaceAfter=No|Translit=píngjūn
11	水平	_	NOUN	NN	_	4	obj	_	SpaceAfter=No|Translit=shuǐpíng
12	，	_	PUNCT	,	_	4	punct	_	SpaceAfter=No|Translit=，
13	且	_	ADV	RB	_	14	advmod	_	SpaceAfter=No|Translit=qiě
14	優	_	ADJ	JJ	_	0	root	_	SpaceAfter=No|Translit=yōu
15	於	_	VERB	VV	_	14	mark:prt	_	SpaceAfter=No|Translit=於
16	8	_	NUM	CD	NumType=Card	17	nummod	_	SpaceAfter=No|Translit=8
17	年級	_	NOUN	NN	_	21	nmod	_	SpaceAfter=No|Translit=niánjí
18	的	_	PART	DEC	Case=Gen	17	case	_	SpaceAfter=No|Translit=de
19	全國	_	NOUN	NN	_	21	compound	_	SpaceAfter=No|Translit=quánguó
20	平均	_	ADJ	JJ	_	21	amod	_	SpaceAfter=No|Translit=píngjūn
21	水平	_	NOUN	NN	_	14	obj	_	SpaceAfter=No|Translit=shuǐpíng
22	。	_	PUNCT	.	_	14	punct	_	Translit=。

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 mark:prt	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 mark:prt	color:blue
1	也許	_	ADV	RB	_	6	advmod	_	SpaceAfter=No|Translit=yěxǔ
2	著裝	_	NOUN	NN	_	3	compound	_	SpaceAfter=No|Translit=zhezhuāng
3	要求	_	NOUN	NN	_	6	nsubj	_	SpaceAfter=No|Translit=yàoqiú
4	過	_	AUX	VV	_	6	cop	_	SpaceAfter=No|Translit=guò
5	於	_	VERB	VV	_	6	mark:prt	_	SpaceAfter=No|Translit=於
6	沉悶	_	ADJ	JJ	_	0	root	_	SpaceAfter=No|Translit=chénmèn
7	。	_	PUNCT	.	_	6	punct	_	Translit=。

~~~


