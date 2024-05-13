---
layout: base
title:  'Statistics of discourse in UD_Chinese-CFL'
udver: '2'
---

## Treebank Statistics: UD_Chinese-CFL: Relations: `discourse`

This relation is universal.
There are 1 language-specific subtypes of `discourse`: <tt><a href="zh_cfl-dep-discourse-sp.html">discourse:sp</a></tt>.

2 nodes (0%) are attached to their parents as `discourse`.

2 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.5.

The following 2 pairs of parts of speech are connected with `discourse`: <tt><a href="zh_cfl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_cfl-pos-ADV.html">ADV</a></tt> (1; 50% instances), <tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_cfl-pos-ADV.html">ADV</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 11 discourse	color:blue
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
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 23 discourse	color:blue
1	吃	吃	VERB	_	_	6	advcl	_	SpaceAfter=No|Translit=chī|LTranslit=chī
2	完	完	VERB	_	_	1	compound:vv	_	SpaceAfter=No|Translit=wán|LTranslit=wán
3	后	后	ADP	_	_	1	mark	_	SpaceAfter=No|Translit=hòu|LTranslit=hòu
4	，	，	PUNCT	_	_	1	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
5	自然	自然	ADJ	_	_	6	advmod	_	SpaceAfter=No|Translit=zìrán|LTranslit=zìrán
6	去	去	VERB	_	_	0	root	_	SpaceAfter=No|Translit=qù|LTranslit=qù
7	了	了	AUX	_	_	6	aux	_	SpaceAfter=No|Translit=le|LTranslit=le
8	KTV	KTV	PROPN	_	_	6	obj	_	SpaceAfter=No|Translit=KTV|LTranslit=KTV
9	，	，	PUNCT	_	_	21	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
10	我	我	PRON	_	_	16	nsubj	_	SpaceAfter=No|Translit=wǒ|LTranslit=wǒ
11	跟	跟	ADP	_	_	15	case	_	SpaceAfter=No|Translit=gēn|LTranslit=gēn
12	常	常	ADV	_	_	13	advmod	_	SpaceAfter=No|Translit=cháng|LTranslit=cháng
13	见	见	VERB	_	_	15	acl	_	SpaceAfter=No|Translit=jiàn|LTranslit=jiàn
14	的	的	PART	_	_	13	mark:rel	_	SpaceAfter=No|Translit=de|LTranslit=de
15	老板	老板	NOUN	_	_	16	obl	_	SpaceAfter=No|Translit=lǎobǎn|LTranslit=lǎobǎn
16	打招呼	打招呼	VERB	_	_	21	advcl	_	SpaceAfter=No|Translit=dǎzhāohū|LTranslit=dǎzhāohū
17	后	后	ADP	_	_	16	mark	_	SpaceAfter=No|Translit=hòu|LTranslit=hòu
18	，	，	PUNCT	_	_	16	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
19	对	对	ADP	_	_	20	case	_	SpaceAfter=No|Translit=duì|LTranslit=duì
20	他	他	PRON	_	_	21	obl	_	SpaceAfter=No|Translit=tā|LTranslit=tā
21	说	说	VERB	_	_	6	conj	_	SpaceAfter=No|Translit=shuō|LTranslit=shuō
22	“	“	PUNCT	_	_	24	punct	_	SpaceAfter=No|Translit=“|LTranslit=“
23	请	请	ADV	_	_	24	discourse	_	SpaceAfter=No|Translit=qǐng|LTranslit=qǐng
24	给	给	VERB	_	_	21	parataxis	_	SpaceAfter=No|Translit=gěi|LTranslit=gěi
25	我们	我	PRON	_	_	24	iobj	_	SpaceAfter=No|Translit=wǒmen|LTranslit=wǒ
26	时间	时间	NOUN	_	_	24	obj	_	SpaceAfter=No|Translit=shíjiān|LTranslit=shíjiān
27	多	多	ADV	_	_	28	advmod	_	SpaceAfter=No|Translit=duō|LTranslit=duō
28	一点	一点	DET	_	_	26	det	_	SpaceAfter=No|Translit=yīdiǎn|LTranslit=yīdiǎn
29	”	”	PUNCT	_	_	24	punct	_	SpaceAfter=No|Translit=”|LTranslit=”
30	，	，	PUNCT	_	_	32	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
31	后	后	ADV	_	_	32	advmod	_	SpaceAfter=No|Translit=hòu|LTranslit=hòu
32	进	进	VERB	_	_	6	conj	_	SpaceAfter=No|Translit=jìn|LTranslit=jìn
33	去	去	VERB	_	_	32	compound:dir	_	SpaceAfter=No|Translit=qù|LTranslit=qù
34	房子	房子	NOUN	_	_	32	obj	_	SpaceAfter=No|Translit=fángzi|LTranslit=fángzi
35	立刻	立刻	ADV	_	_	38	advmod	_	SpaceAfter=No|Translit=lìkè|LTranslit=lìkè
36	热烈	热烈	ADJ	_	_	38	advmod	_	SpaceAfter=No|Translit=rèliè|LTranslit=rèliè
37	地	地	PART	_	_	36	mark:adv	_	SpaceAfter=No|Translit=de|LTranslit=de
38	唱歌	唱歌	VERB	_	_	32	conj	_	SpaceAfter=No|Translit=chànggē|LTranslit=chànggē
39	了	了	PART	_	_	38	discourse:sp	_	SpaceAfter=No|Translit=le|LTranslit=le
40	。	。	PUNCT	_	_	6	punct	_	SpaceAfter=No|Translit=.|LTranslit=.

~~~


