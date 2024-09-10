---
layout: base
title:  'Statistics of discourse:sp in UD_Chinese-CFL'
udver: '2'
---

## Treebank Statistics: UD_Chinese-CFL: Relations: `discourse:sp`

This relation is a language-specific subtype of <tt><a href="zh_cfl-dep-discourse.html">discourse</a></tt>.

103 nodes (1%) are attached to their parents as `discourse:sp`.

103 instances of `discourse:sp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.16504854368932.

The following 6 pairs of parts of speech are connected with `discourse:sp`: <tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_cfl-pos-PART.html">PART</a></tt> (74; 72% instances), <tt><a href="zh_cfl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_cfl-pos-PART.html">PART</a></tt> (18; 17% instances), <tt><a href="zh_cfl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_cfl-pos-PART.html">PART</a></tt> (6; 6% instances), <tt><a href="zh_cfl-pos-PRON.html">PRON</a></tt>-<tt><a href="zh_cfl-pos-PART.html">PART</a></tt> (2; 2% instances), <tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_cfl-pos-INTJ.html">INTJ</a></tt> (2; 2% instances), <tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_cfl-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 discourse:sp	color:blue
1	时间	时间	NOUN	_	_	2	dislocated	_	SpaceAfter=No|Translit=shíjiān|LTranslit=shíjiān
2	过	过	VERB	_	_	0	root	_	SpaceAfter=No|Translit=guò|LTranslit=guò
3	得	得	PART	_	_	2	compound:ext	_	SpaceAfter=No|Translit=de|LTranslit=de
4	很	很	ADV	_	_	5	advmod	_	SpaceAfter=No|Translit=hěn|LTranslit=hěn
5	快	快	ADJ	_	_	2	xcomp	_	SpaceAfter=No|Translit=kuài|LTranslit=kuài
6	，	，	PUNCT	_	_	11	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
7	我们	我	PRON	_	_	8	nsubj	_	SpaceAfter=No|Translit=wǒmen|LTranslit=wǒ
8	离开	离开	VERB	_	_	10	acl	_	SpaceAfter=No|Translit=líkāi|LTranslit=líkāi
9	的	的	PART	_	_	8	mark:rel	_	SpaceAfter=No|Translit=de|LTranslit=de
10	时间	时间	NOUN	_	_	11	nsubj	_	SpaceAfter=No|Translit=shíjiān|LTranslit=shíjiān
11	来	来	VERB	_	_	2	parataxis	_	SpaceAfter=No|Translit=lái|LTranslit=lái
12	了	了	PART	_	_	11	discourse:sp	_	SpaceAfter=No|Translit=le|LTranslit=le
13	。	。	PUNCT	_	_	2	punct	_	SpaceAfter=No|Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 discourse:sp	color:blue
1	我	我	PRON	_	_	3	nsubj	_	SpaceAfter=No|Translit=wǒ|LTranslit=wǒ
2	先	先	ADV	_	_	3	advmod	_	SpaceAfter=No|Translit=xiān|LTranslit=xiān
3	说	说	VERB	_	_	0	root	_	SpaceAfter=No|Translit=shuō|LTranslit=shuō
4	我	我	PRON	_	_	6	nmod	_	SpaceAfter=No|Translit=wǒ|LTranslit=wǒ
5	的	的	PART	_	_	4	case	_	SpaceAfter=No|Translit=de|LTranslit=de
6	生活	生活	NOUN	_	_	8	nsubj	_	SpaceAfter=No|Translit=shēnghuó|LTranslit=shēnghuó
7	很	很	ADV	_	_	8	advmod	_	SpaceAfter=No|Translit=hěn|LTranslit=hěn
8	单调	单调	ADJ	_	_	3	ccomp	_	SpaceAfter=No|Translit=dāndiào|LTranslit=dāndiào
9	的	的	PART	_	_	8	discourse:sp	_	SpaceAfter=No|Translit=de|LTranslit=de
10	，	，	PUNCT	_	_	17	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
11	那么	那么	ADV	_	_	17	discourse	_	SpaceAfter=No|Translit=nàme|LTranslit=nàme
12	我	我	PRON	_	_	17	nsubj	_	SpaceAfter=No|Translit=wǒ|LTranslit=wǒ
13	不	不	ADV	_	_	17	advmod	_	SpaceAfter=No|Translit=bù|LTranslit=bù
14	是	是	AUX	_	_	17	cop	_	SpaceAfter=No|Translit=shì|LTranslit=shì
15	主动	主动	ADJ	_	_	17	amod	_	SpaceAfter=No|Translit=zhǔdòng|LTranslit=zhǔdòng
16	的	的	PART	_	_	15	mark:rel	_	SpaceAfter=No|Translit=de|LTranslit=de
17	人	人	NOUN	_	_	3	parataxis	_	SpaceAfter=No|Translit=rén|LTranslit=rén
18	，	，	PUNCT	_	_	25	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
19	所以	所以	ADV	_	_	25	advmod	_	SpaceAfter=No|Translit=suǒyǐ|LTranslit=suǒyǐ
20	我	我	PRON	_	_	21	nsubj	_	SpaceAfter=No|Translit=wǒ|LTranslit=wǒ
21	难忘	难忘	VERB	_	_	23	acl	_	SpaceAfter=No|Translit=nánwàng|LTranslit=nánwàng
22	的	的	PART	_	_	21	mark:rel	_	SpaceAfter=No|Translit=de|LTranslit=de
23	事	事	NOUN	_	_	25	nsubj	_	SpaceAfter=No|Translit=shì|LTranslit=shì
24	不	不	ADV	_	_	25	advmod	_	SpaceAfter=No|Translit=bù|LTranslit=bù
25	多	多	ADJ	_	_	17	conj	_	SpaceAfter=No|Translit=duō|LTranslit=duō
26	。	。	PUNCT	_	_	3	punct	_	SpaceAfter=No|Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse:sp	color:blue
1	结果	结果	NOUN	_	_	0	root	_	SpaceAfter=No|Translit=jiéguǒ|LTranslit=jiéguǒ
2	呢	呢	PART	_	_	1	discourse:sp	_	SpaceAfter=No|Translit=ne|LTranslit=ne
3	？	？	PUNCT	_	_	1	punct	_	SpaceAfter=No|Translit=?|LTranslit=?

~~~


