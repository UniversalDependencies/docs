---
layout: base
title:  'Statistics of amod in UD_Chinese-PatentChar'
udver: '2'
---

## Treebank Statistics: UD_Chinese-PatentChar: Relations: `amod`

This relation is universal.

393 nodes (8%) are attached to their parents as `amod`.

393 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.99236641221374.

The following 3 pairs of parts of speech are connected with `amod`: <tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_patentchar-pos-ADJ.html">ADJ</a></tt> (378; 96% instances), <tt><a href="zh_patentchar-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_patentchar-pos-ADJ.html">ADJ</a></tt> (9; 2% instances), <tt><a href="zh_patentchar-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_patentchar-pos-ADJ.html">ADJ</a></tt> (6; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 amod	color:blue
1	1.	_	PUNCT	_	_	5	punct	_	Gloss=_|SpaceAfter=No|Translit=1.
2	一	_	NUM	_	_	3	nummod	_	Gloss=_|SpaceAfter=No|Translit=yī
3	种	_	NUM	_	_	5	nummod	_	Gloss=_|SpaceAfter=No|Translit=zhǒng
4	压力	_	NOUN	_	_	5	nmod	_	Gloss=_|SpaceAfter=No|Translit=yā_lì
5	传感器	_	NOUN	_	_	0	root	_	Gloss=_|SpaceAfter=No|Translit=chuán_gǎn_qì
6	，	_	PUNCT	_	_	10	punct	_	Gloss=_|SpaceAfter=No|Translit=，
7	所述	_	ADJ	_	_	9	amod	_	Gloss=_|SpaceAfter=No|Translit=suǒ_shù
8	压力	_	NOUN	_	_	9	nmod	_	Gloss=_|SpaceAfter=No|Translit=yā_lì
9	传感器	_	NOUN	_	_	10	nsubj	_	Gloss=_|SpaceAfter=No|Translit=chuán_gǎn_qì
10	包括	_	VERB	_	_	5	parataxis	_	Gloss=_|SpaceAfter=No|Translit=bāo_kuò
11	：	_	PUNCT	_	_	5	punct	_	Gloss=_|SpaceAfter=No|Translit=：

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	所述	_	ADJ	_	_	2	amod	_	Gloss=_|SpaceAfter=No|Translit=suǒ_shù
2	TA	_	PROPN	_	_	8	nsubj	_	Gloss=_|SpaceAfter=No|Translit=TA
3	将	_	PART	_	_	7	case	_	Gloss=_|SpaceAfter=No|Translit=jiāng
4	所述	_	ADJ	_	_	8	advcl	_	Gloss=_|SpaceAfter=No|Translit=suǒ_shù
5	业务	_	NOUN	_	_	6	obl	_	Gloss=_|SpaceAfter=No|Translit=yè_wù
6	操作	_	VERB	_	_	8	advcl	_	Gloss=_|SpaceAfter=No|Translit=cāo_zuò
7	信息	_	NOUN	_	_	8	obj	_	Gloss=_|SpaceAfter=No|Translit=xìn_xī
8	发送	_	VERB	_	_	0	root	_	Gloss=_|SpaceAfter=No|Translit=fā_sòng
9	给	_	ADP	_	_	11	case	_	Gloss=_|SpaceAfter=No|Translit=gěi
10	所述	_	ADJ	_	_	11	amod	_	Gloss=_|SpaceAfter=No|Translit=suǒ_shù
11	客户端	_	NOUN	_	_	8	obl:arg	_	Gloss=_|SpaceAfter=No|Translit=kè_hù_duān
12	；	_	PUNCT	_	_	8	punct	_	Gloss=_|SpaceAfter=No|Translit=；

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 amod	color:blue
1	所述	_	ADJ	_	_	2	amod	_	Gloss=_|SpaceAfter=No|Translit=suǒ_shù
2	非显示区	_	NOUN	_	_	3	nsubj	_	Gloss=_|SpaceAfter=No|Translit=fēi_xiǎn_shì_qū
3	设置	_	VERB	_	_	0	root	_	Gloss=_|SpaceAfter=No|Translit=shè_zhì
4	有	_	VERB	_	_	3	compound:vv	_	Gloss=_|SpaceAfter=No|Translit=yǒu
5	驱动	_	VERB	_	_	6	acl	_	Gloss=_|SpaceAfter=No|Translit=qū_dòng
6	电路	_	NOUN	_	_	4	obj	_	Gloss=_|SpaceAfter=No|Translit=diàn_lù
7	和	_	CCONJ	_	_	12	cc	_	Gloss=_|SpaceAfter=No|Translit=hé
8	多	_	ADJ	_	_	9	advcl	_	Gloss=_|SpaceAfter=No|Translit=duō
9	个	_	NUM	_	_	12	nummod	_	CpdPos=NUM|Gloss=_|SpaceAfter=No|Translit=gè
10	压感	_	ADJ	_	_	11	amod	_	Gloss=_|SpaceAfter=No|Translit=yā_gǎn
11	触控	_	ADJ	_	_	12	amod	_	Gloss=_|SpaceAfter=No|Translit=hóng_kòng
12	单元	_	NOUN	_	_	6	conj	_	Gloss=_|SpaceAfter=No|Translit=dān_yuán
13	；	_	PUNCT	_	_	3	punct	_	Gloss=_|SpaceAfter=No|Translit=；

~~~


