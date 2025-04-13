---
layout: base
title:  'Statistics of mark:rel in UD_Chinese-HK'
udver: '2'
---

## Treebank Statistics: UD_Chinese-HK: Relations: `mark:rel`

This relation is a language-specific subtype of <tt><a href="zh_hk-dep-mark.html">mark</a></tt>.
There are also 1 other language-specific subtypes of `mark`: <tt><a href="zh_hk-dep-mark-adv.html">mark:adv</a></tt>.

106 nodes (1%) are attached to their parents as `mark:rel`.

102 instances of `mark:rel` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.91509433962264.

The following 6 pairs of parts of speech are connected with `mark:rel`: <tt><a href="zh_hk-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_hk-pos-PART.html">PART</a></tt> (71; 67% instances), <tt><a href="zh_hk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_hk-pos-PART.html">PART</a></tt> (24; 23% instances), <tt><a href="zh_hk-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_hk-pos-ADP.html">ADP</a></tt> (5; 5% instances), <tt><a href="zh_hk-pos-ADV.html">ADV</a></tt>-<tt><a href="zh_hk-pos-PART.html">PART</a></tt> (3; 3% instances), <tt><a href="zh_hk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_hk-pos-PART.html">PART</a></tt> (2; 2% instances), <tt><a href="zh_hk-pos-PRON.html">PRON</a></tt>-<tt><a href="zh_hk-pos-PART.html">PART</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 mark:rel	color:blue
1	該	該	AUX	_	_	2	aux	_	SpaceAfter=No|Translit=gāi|LTranslit=gāi
2	取	取	VERB	_	_	6	obj:periph	_	SpaceAfter=No|Translit=qǔ|LTranslit=qǔ|Cxn=Resultative|CxnElt=2:Resultative.Event
3	走	走	VERB	_	_	2	compound:vv	_	SpaceAfter=No|Translit=zǒu|LTranslit=zǒu|CxnElt=2:Resultative.ResultState
4	的	的	PART	_	_	2	mark:rel	_	SpaceAfter=No|Translit=de|LTranslit=de
5	都	都	ADV	_	_	6	advmod	_	SpaceAfter=No|Translit=dōu|LTranslit=dōu
6	取	取	VERB	_	_	0	root	_	SpaceAfter=No|Translit=qǔ|LTranslit=qǔ|Cxn=Resultative|CxnElt=6:Resultative.Event
7	走	走	VERB	_	_	6	compound:vv	_	SpaceAfter=No|Translit=zǒu|LTranslit=zǒu|CxnElt=6:Resultative.ResultState
8	了	了	PART	_	_	6	discourse:sp	_	SpaceAfter=No|Translit=le|LTranslit=le
9	！	！	PUNCT	_	_	6	punct	_	SpaceAfter=No|Translit=!|LTranslit=!

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 mark:rel	color:blue
1	很	很	ADV	_	_	2	advmod	_	SpaceAfter=No|Translit=hěn|LTranslit=hěn
2	強	強	ADJ	_	_	4	amod	_	SpaceAfter=No|Translit=qiáng|LTranslit=qiáng
3	的	的	PART	_	_	2	mark:rel	_	SpaceAfter=No|Translit=de|LTranslit=de
4	戰鬥力	戰鬥力	NOUN	_	_	0	root	_	SpaceAfter=No|Translit=zhàndòulì|LTranslit=zhàndòulì
5	！	！	PUNCT	_	_	4	punct	_	SpaceAfter=No|Translit=!|LTranslit=!

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 mark:rel	color:blue
1	在	在	ADP	_	_	6	case	_	SpaceAfter=No|Translit=zài|LTranslit=zài
2	未	未	ADV	_	_	3	advmod	_	SpaceAfter=No|Translit=wèi|LTranslit=wèi
3	有	有	VERB	_	_	6	advcl	_	SpaceAfter=No|Translit=yǒu|LTranslit=yǒu|Cxn=Existential-HavePred
4	MP3	MP3	NOUN	_	_	3	obj	_	SpaceAfter=No|Translit=MP3|LTranslit=MP3|CxnElt=3:Existential-HavePred.Pivot
5	的	的	ADP	_	_	3	mark:rel	_	SpaceAfter=No|Translit=de|LTranslit=de
6	年代	年代	NOUN	_	_	15	obl:tmod	_	SpaceAfter=No|Translit=niándài|LTranslit=niándài
7	，	，	PUNCT	_	_	6	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
8	電台	電台	NOUN	_	_	9	nsubj	_	SpaceAfter=No|Translit=diàntái|LTranslit=diàntái
9	播	播	VERB	_	_	15	advcl	_	SpaceAfter=No|Translit=bō|LTranslit=bō
10	什麼	什麼	DET	_	_	11	det	_	SpaceAfter=No|Translit=shénme|LTranslit=shénme
11	歌	歌	NOUN	_	_	9	obj	_	SpaceAfter=No|Translit=gē|LTranslit=gē
12	，	，	PUNCT	_	_	9	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
13	我們	我	PRON	_	_	15	nsubj	_	SpaceAfter=No|Translit=wǒmen|LTranslit=wǒ
14	就	就	ADV	_	_	15	advmod	_	SpaceAfter=No|Translit=jiù|LTranslit=jiù
15	流行	流行	VERB	_	_	0	root	_	SpaceAfter=No|Translit=liúxíng|LTranslit=liúxíng
16	歌	歌	NOUN	_	_	15	obj	_	SpaceAfter=No|Translit=gē|LTranslit=gē
17	。	。	PUNCT	_	_	15	punct	_	SpaceAfter=No|Translit=.|LTranslit=.

~~~


