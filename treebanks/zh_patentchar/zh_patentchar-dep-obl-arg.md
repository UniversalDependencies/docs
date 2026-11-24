---
layout: base
title:  'Statistics of obl:arg in UD_Chinese-PatentChar'
udver: '2'
---

## Treebank Statistics: UD_Chinese-PatentChar: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="zh_patentchar-dep-obl.html">obl</a></tt>.

61 nodes (1%) are attached to their parents as `obl:arg`.

59 instances of `obl:arg` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.9344262295082.

The following 8 pairs of parts of speech are connected with `obl:arg`: <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (45; 74% instances), <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-ADP.html">ADP</a></tt> (5; 8% instances), <tt><a href="zh_patentchar-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (3; 5% instances), <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-PART.html">PART</a></tt> (3; 5% instances), <tt><a href="zh_patentchar-pos-ADP.html">ADP</a></tt>-<tt><a href="zh_patentchar-pos-ADP.html">ADP</a></tt> (2; 3% instances), <tt><a href="zh_patentchar-pos-ADP.html">ADP</a></tt>-<tt><a href="zh_patentchar-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="zh_patentchar-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="zh_patentchar-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="zh_patentchar-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_patentchar-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 15 obl:arg	color:blue
1	第一	_	NUM	_	_	2	nummod	_	Gloss=_|SpaceAfter=No|Translit=dì_yī
2	导体	_	NOUN	_	_	4	nsubj	_	Gloss=_|SpaceAfter=No|Translit=dǎo_tǐ
3	，	_	PUNCT	_	_	2	punct	_	Gloss=_|SpaceAfter=No|Translit=，
4	位	_	VERB	_	_	0	root	_	Gloss=_|SpaceAfter=No|Translit=wèi
5	于	_	ADP	_	_	15	case	_	Gloss=_|SpaceAfter=No|Translit=yú
6	包括	_	VERB	_	_	14	acl	_	Gloss=_|SpaceAfter=No|Translit=bāo_kuò
7	第一	_	NUM	_	_	8	nummod	_	Gloss=_|SpaceAfter=No|Translit=dì_yī
8	感测区	_	NOUN	_	_	6	obj	_	Gloss=_|SpaceAfter=No|Translit=gǎn_cè_qū
9	和	_	CCONJ	_	_	11	cc	_	Gloss=_|SpaceAfter=No|Translit=hé
10	第二	_	NUM	_	_	11	nummod	_	Gloss=_|SpaceAfter=No|Translit=dì_èr
11	感测区	_	NOUN	_	_	8	conj	_	Gloss=_|SpaceAfter=No|Translit=gǎn_cè_qū
12	的	_	PART	_	_	6	mark	_	Gloss=_|SpaceAfter=No|Translit=de
13	压力	_	NOUN	_	_	14	nmod	_	Gloss=_|SpaceAfter=No|Translit=yā_lì
14	感测区	_	NOUN	_	_	15	obj	_	Gloss=_|SpaceAfter=No|Translit=gǎn_cè_qū
15	中	_	NOUN	_	_	4	obl:arg	_	Gloss=_|SpaceAfter=No|Translit=zhōng
16	；	_	PUNCT	_	_	4	punct	_	Gloss=_|SpaceAfter=No|Translit=；

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obl:arg	color:blue
1	处理	_	VERB	_	_	2	acl	_	Gloss=_|SpaceAfter=No|Translit=chù_lǐ
2	单元	_	NOUN	_	_	0	root	_	Gloss=_|SpaceAfter=No|Translit=dān_yuán
3	，	_	PUNCT	_	_	4	punct	_	Gloss=_|SpaceAfter=No|Translit=，
4	用	_	VERB	_	_	2	parataxis	_	Gloss=_|SpaceAfter=No|Translit=yòng
5	于	_	ADP	_	_	4	obl:arg	_	Gloss=_|SpaceAfter=No|Translit=yú
6	对	_	PART	_	_	14	mark	_	Gloss=_|SpaceAfter=No|Translit=dùi
7	所述	_	ADJ	_	_	10	amod	_	Gloss=_|SpaceAfter=No|Translit=suǒ_shù
8	主	_	ADJ	_	_	10	amod	_	Gloss=_|SpaceAfter=No|Translit=zhǔ
9	交换	_	VERB	_	_	10	acl	_	Gloss=_|SpaceAfter=No|Translit=jiāo_huàn
10	芯片	_	NOUN	_	_	11	nsubj	_	Gloss=_|SpaceAfter=No|Translit=xīn_piàn
11	传输	_	VERB	_	_	14	advcl	_	Gloss=_|SpaceAfter=No|Translit=chuán_shū
12	的	_	PART	_	_	11	mark	_	Gloss=_|SpaceAfter=No|Translit=de
13	数据	_	NOUN	_	_	14	obj	_	Gloss=_|SpaceAfter=No|Translit=shù_jù
14	进行	_	VERB	_	_	5	ccomp	_	Gloss=_|SpaceAfter=No|Translit=jìn_xíng
15	处理	_	VERB	_	_	14	ccomp	_	Gloss=_|SpaceAfter=No|Translit=chù_lǐ
16	或	_	CCONJ	_	_	17	cc	_	Gloss=_|SpaceAfter=No|Translit=huò
17	预处理	_	VERB	_	_	15	conj	_	Gloss=_|SpaceAfter=No|Translit=yù_chù_lǐ
18	。	_	PUNCT	_	_	2	punct	_	Gloss=_|SpaceAfter=No|Translit=。

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 18 obl:arg	color:blue
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


