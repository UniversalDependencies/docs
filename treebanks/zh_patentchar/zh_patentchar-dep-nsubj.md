---
layout: base
title:  'Statistics of nsubj in UD_Chinese-PatentChar'
udver: '2'
---

## Treebank Statistics: UD_Chinese-PatentChar: Relations: `nsubj`

This relation is universal.

212 nodes (4%) are attached to their parents as `nsubj`.

212 instances of `nsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.38207547169811.

The following 6 pairs of parts of speech are connected with `nsubj`: <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (185; 87% instances), <tt><a href="zh_patentchar-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (11; 5% instances), <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-PROPN.html">PROPN</a></tt> (9; 4% instances), <tt><a href="zh_patentchar-pos-ADP.html">ADP</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="zh_patentchar-pos-ADV.html">ADV</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nsubj	color:blue
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
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 nsubj	color:blue
1	获取	_	VERB	_	_	0	root	_	Gloss=_|SpaceAfter=No|Translit=huò_qǔ
2	所述	_	ADJ	_	_	4	amod	_	Gloss=_|SpaceAfter=No|Translit=suǒ_shù
3	源数据	_	NOUN	_	_	4	nmod	_	Gloss=_|SpaceAfter=No|Translit=yuán_shù_jù
4	节点	_	NOUN	_	_	6	nmod	_	Gloss=_|SpaceAfter=No|Translit=jié_diǎn
5	的	_	PART	_	_	4	case	_	Gloss=_|SpaceAfter=No|Translit=de
6	版本	_	NOUN	_	_	1	obj	_	Gloss=_|SpaceAfter=No|Translit=bǎn_běn
7	，	_	PUNCT	_	_	21	punct	_	Gloss=_|SpaceAfter=No|Translit=，
8	确定	_	VERB	_	_	19	ccomp	_	Gloss=_|SpaceAfter=No|Translit=què_dìng
9	所述	_	ADJ	_	_	11	amod	_	Gloss=_|SpaceAfter=No|Translit=suǒ_shù
10	源数据	_	NOUN	_	_	11	nmod	_	Gloss=_|SpaceAfter=No|Translit=yuán_shù_jù
11	节点	_	NOUN	_	_	13	nmod	_	Gloss=_|SpaceAfter=No|Translit=jié_diǎn
12	的	_	PART	_	_	11	case	_	Gloss=_|SpaceAfter=No|Translit=de
13	版本	_	NOUN	_	_	14	nsubj	_	Gloss=_|SpaceAfter=No|Translit=bǎn_běn
14	高	_	ADJ	_	_	8	obj	_	Gloss=_|SpaceAfter=No|Translit=gāo
15	于	_	ADP	_	_	18	case	_	Gloss=_|SpaceAfter=No|Translit=yú
16	自身	_	NOUN	_	_	18	nmod	_	Gloss=_|SpaceAfter=No|Translit=zì_shēn
17	的	_	PART	_	_	16	case	_	Gloss=_|SpaceAfter=No|Translit=de
18	版本	_	NOUN	_	_	14	obl:arg	_	Gloss=_|SpaceAfter=No|Translit=bǎn_běn
19	时	_	NOUN	_	_	21	obl	_	Gloss=_|SpaceAfter=No|Translit=shí
20	，	_	PUNCT	_	_	19	punct	_	Gloss=_|SpaceAfter=No|Translit=，
21	缓存	_	VERB	_	_	1	parataxis	_	Gloss=_|SpaceAfter=No|Translit=huǎn_cún
22	所述	_	ADJ	_	_	24	amod	_	Gloss=_|SpaceAfter=No|Translit=suǒ_shù
23	复制	_	VERB	_	_	24	acl	_	Gloss=_|SpaceAfter=No|Translit=fù_zhì
24	日志	_	NOUN	_	_	21	obj	_	Gloss=_|SpaceAfter=No|Translit=rì_zhì
25	；	_	PUNCT	_	_	1	punct	_	Gloss=_|SpaceAfter=No|Translit=；

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nsubj	color:blue
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


