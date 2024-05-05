---
layout: base
title:  'Statistics of nsubj:outer in UD_Kyrgyz-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Kyrgyz-TueCL: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="ky_tuecl-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="ky_tuecl-dep-nsubj-pass.html">nsubj:pass</a></tt>.

2 nodes (0%) are attached to their parents as `nsubj:outer`.

2 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="ky_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 6 nsubj:outer	color:blue
1	Биз	биз	PRON	_	_	3	nsubj	_	_
2	чечүүгѳ	чеч	VERB	_	_	3	xcomp	_	_
3	аракет	аракет	NOUN	_	_	4	compound:lvc	_	_
4	кылып	кыл	VERB	_	_	6	acl	_	_
5	жаткан	жат	AUX	_	_	4	aux	_	_
6	кѳйгѳй	кѳйгѳй	NOUN	_	_	14	nsubj:outer	_	_
7	–	–	PUNCT	_	_	6	punct	_	_
8	китеп	китеп	NOUN	_	_	9	nmod:poss	_	_
9	текчесинде	текче	NOUN	_	_	13	obl	_	_
10	беш	беш	NUM	_	_	11	nummod	_	_
11	китептик	китептик	NOUN	_	_	13	nmod	_	_
12	да	да	ADV	_	_	11	advmod:emph	_	_
13	орундун	орун	NOUN	_	_	14	nsubj	_	_
14	жоктугу	жоктук	NOUN	_	_	0	root	_	SpaceAfter=No
15	.	.	PUNCT	_	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:outer	color:blue
1	Апасынын	апа	NOUN	_	_	2	nmod:poss	_	_
2	кыялы	кыял	NOUN	_	_	6	nsubj:outer	_	_
3	Дениздин	Дениз	PROPN	_	_	6	nsubj	_	_
4	жакшы	жакшы	ADJ	_	_	5	amod	_	_
5	мектепте	мектеп	NOUN	_	_	6	obl	_	_
6	окушу	оку	VERB	_	_	0	root	_	_
7	эле	э	AUX	_	_	6	cop	_	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


