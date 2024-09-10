---
layout: base
title:  'Statistics of compound:ext in UD_Chinese-CFL'
udver: '2'
---

## Treebank Statistics: UD_Chinese-CFL: Relations: `compound:ext`

This relation is a language-specific subtype of <tt><a href="zh_cfl-dep-compound.html">compound</a></tt>.
There are also 3 other language-specific subtypes of `compound`: <tt><a href="zh_cfl-dep-compound-dir.html">compound:dir</a></tt>, <tt><a href="zh_cfl-dep-compound-vo.html">compound:vo</a></tt>, <tt><a href="zh_cfl-dep-compound-vv.html">compound:vv</a></tt>.

10 nodes (0%) are attached to their parents as `compound:ext`.

10 instances of `compound:ext` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `compound:ext`: <tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_cfl-pos-PART.html">PART</a></tt> (8; 80% instances), <tt><a href="zh_cfl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_cfl-pos-PART.html">PART</a></tt> (2; 20% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound:ext	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 compound:ext	color:blue
1	天气	天气	NOUN	_	_	2	nsubj	_	SpaceAfter=No|Translit=tiānqì|LTranslit=tiānqì
2	变	变	VERB	_	_	0	root	_	SpaceAfter=No|Translit=biàn|LTranslit=biàn
3	冷	冷	ADJ	_	_	2	compound:vv	_	SpaceAfter=No|Translit=lěng|LTranslit=lěng
4	了	了	PART	_	_	2	discourse:sp	_	SpaceAfter=No|Translit=le|LTranslit=le
5	，	，	PUNCT	_	_	7	punct	_	SpaceAfter=No|Translit=,|LTranslit=,
6	我们	我	PRON	_	_	7	nsubj	_	SpaceAfter=No|Translit=wǒmen|LTranslit=wǒ
7	冷	冷	ADJ	_	_	2	parataxis	_	SpaceAfter=No|Translit=lěng|LTranslit=lěng
8	得	得	PART	_	_	7	compound:ext	_	SpaceAfter=No|Translit=de|LTranslit=de
9	瑟瑟	瑟瑟	ADV	_	_	10	advmod	_	SpaceAfter=No|Translit=瑟瑟|LTranslit=瑟瑟
10	发抖	发抖	VERB	_	_	7	xcomp	_	SpaceAfter=No|Translit=fādǒu|LTranslit=fādǒu
11	起来	起来	VERB	_	_	10	compound:dir	_	SpaceAfter=No|Translit=qǐlái|LTranslit=qǐlái
12	。	。	PUNCT	_	_	2	punct	_	SpaceAfter=No|Translit=.|LTranslit=.

~~~


