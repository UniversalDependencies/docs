---
layout: base
title:  'Statistics of obl:agent in UD_Chinese-CFL'
udver: '2'
---

## Treebank Statistics: UD_Chinese-CFL: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="zh_cfl-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="zh_cfl-dep-obl-patient.html">obl:patient</a></tt>, <tt><a href="zh_cfl-dep-obl-tmod.html">obl:tmod</a></tt>.

5 nodes (0%) are attached to their parents as `obl:agent`.

5 instances of `obl:agent` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_cfl-pos-NOUN.html">NOUN</a></tt> (4; 80% instances), <tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_cfl-pos-PRON.html">PRON</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 obl:agent	color:blue
1	原定	原定	ADJ	_	_	2	amod	_	SpaceAfter=No|Translit=yuándìng|LTranslit=yuándìng
2	计划	计划	NOUN	_	_	3	nsubj	_	SpaceAfter=No|Translit=jìhuà|LTranslit=jìhuà
3	是	是	VERB	_	_	0	root	_	SpaceAfter=No|Translit=shì|LTranslit=shì
4	早晨	早晨	NOUN	_	_	10	obl:tmod	_	SpaceAfter=No|Translit=zǎochen|LTranslit=zǎochen
5	在	在	ADP	_	_	8	case	_	SpaceAfter=No|Translit=zài|LTranslit=zài
6	一	一	NUM	_	_	8	nummod	_	SpaceAfter=No|Translit=yī|LTranslit=yī
7	座	座	NOUN	_	_	6	clf	_	SpaceAfter=No|Translit=zuò|LTranslit=zuò
8	山	山	NOUN	_	_	10	obl:agent	_	SpaceAfter=No|Translit=shān|LTranslit=shān
9	上	上	ADP	_	_	8	case:loc	_	SpaceAfter=No|Translit=shàng|LTranslit=shàng
10	吃	吃	VERB	_	_	3	xcomp	_	SpaceAfter=No|Translit=chī|LTranslit=chī
11	午饭	午饭	NOUN	_	_	10	obj	_	SpaceAfter=No|Translit=wǔfàn|LTranslit=wǔfàn
12	。	。	PUNCT	_	_	3	punct	_	SpaceAfter=No|Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 obl:agent	color:blue
1	我们	我	PRON	_	_	2	nsubj	_	SpaceAfter=No|Translit=wǒmen|LTranslit=wǒ
2	相约	相约	VERB	_	_	0	root	_	SpaceAfter=No|Translit=xiāngyuē|LTranslit=xiāngyuē
3	在	在	ADP	_	_	7	case	_	SpaceAfter=No|Translit=zài|LTranslit=zài
4	当初	当初	NOUN	_	_	5	obl:tmod	_	SpaceAfter=No|Translit=dāngchū|LTranslit=dāngchū
5	表白	表白	VERB	_	_	7	acl	_	SpaceAfter=No|Translit=biǎobái|LTranslit=biǎobái
6	的	的	PART	_	_	5	mark:rel	_	SpaceAfter=No|Translit=de|LTranslit=de
7	地方	地方	NOUN	_	_	2	obl	_	SpaceAfter=No|Translit=defāng|LTranslit=defāng
8	，	，	PUNCT	_	_	13	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
9	我	我	PRON	_	_	13	nsubj	_	SpaceAfter=No|Translit=wǒ|LTranslit=wǒ
10	再次	再次	ADV	_	_	13	advmod	_	SpaceAfter=No|Translit=zàicì|LTranslit=zàicì
11	向	向	ADP	_	_	12	case	_	SpaceAfter=No|Translit=xiàng|LTranslit=xiàng
12	她	她	PRON	_	_	13	obl	_	SpaceAfter=No|Translit=tā|LTranslit=tā
13	表白	表白	VERB	_	_	2	parataxis	_	SpaceAfter=No|Translit=biǎobái|LTranslit=biǎobái
14	，	，	PUNCT	_	_	18	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
15	但是	但是	CCONJ	_	_	18	cc	_	SpaceAfter=No|Translit=dànshì|LTranslit=dànshì
16	被	被	ADP	_	_	17	case	_	SpaceAfter=No|Translit=bèi|LTranslit=bèi
17	她	她	PRON	_	_	18	obl:agent	_	SpaceAfter=No|Translit=tā|LTranslit=tā
18	拒绝	拒绝	VERB	_	_	13	conj	_	SpaceAfter=No|Translit=jùjué|LTranslit=jùjué
19	了	了	AUX	_	_	18	discourse:sp	_	SpaceAfter=No|Translit=le|LTranslit=le
20	。	。	PUNCT	_	_	2	punct	_	SpaceAfter=No|Translit=.|LTranslit=.

~~~


