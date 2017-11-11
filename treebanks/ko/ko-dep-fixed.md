---
layout: base
title:  'Statistics of fixed in UD_Korean'
udver: '2'
---

## Treebank Statistics: UD_Korean: Relations: `fixed`

This relation is universal.

13 nodes (0%) are attached to their parents as `fixed`.

13 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.23076923076923.

The following 3 pairs of parts of speech are connected with `fixed`: <tt><a href="ko-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko-pos-VERB.html">VERB</a></tt> (10; 77% instances), <tt><a href="ko-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko-pos-ADV.html">ADV</a></tt> (2; 15% instances), <tt><a href="ko-pos-PRON.html">PRON</a></tt>-<tt><a href="ko-pos-VERB.html">VERB</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	고기도	_	NOUN	NOUN	_	2	nsubj	_	_
2	좋을	_	VERB	PREDREL	_	3	dep	_	_
3	뿐만	_	NOUN	NOUN	_	6	advcl	_	_
4	아니라	_	VERB	PREDCONJ	_	3	fixed	_	_
5	숙성도	_	NOUN	NOUN	_	6	obj	_	_
6	잘해서	_	VERB	PREDCONJ	_	9	advcl	_	_
7	삼겹살이	_	NOUN	NOUN	_	9	nsubj	_	_
8	정말	_	ADV	ADV	_	9	advmod	_	_
9	맛있습니다	_	ADJ	ADJ	_	0	root	_	SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 fixed	color:blue
1	팡시	_	NOUN	PNOUN	_	22	nsubj	_	_
2	호주	_	NOUN	PNOUN	_	1	det:poss	_	_
3	주재	_	NOUN	NOUN	_	2	flat	_	_
4	중국	_	NOUN	PNOUN	_	2	flat	_	_
5	대사관의	_	NOUN	NOUN	_	2	flat	_	_
6	경제담당	_	NOUN	NOUN	_	1	flat	_	_
7	관리는	_	NOUN	NOUN	_	1	flat	_	_
8	"남은	_	VERB	PREDREL	_	9	acl:relcl	_	_
9	조치들은	_	NOUN	NOUN	_	12	nsubj	_	_
10	형식적인	_	ADJ	ADJ	_	11	amod	_	_
11	것에	_	ADV	ADV	_	12	advmod	_	_
12	불과하다"면서	_	VERB	PREDCONJ	_	22	advcl	_	_
13	"하루	_	NOUN	NOUN	_	18	advmod	_	_
14	빨리	_	ADV	ADV	_	13	fixed	_	_
15	중국인들이	_	NOUN	PNOUN	_	18	nsubj	_	_
16	캥거루	_	NOUN	NOUN	_	18	obj	_	_
17	고기를	_	NOUN	NOUN	_	16	flat	_	_
18	맛볼	_	VERB	PREDREL	_	19	dep	_	_
19	수	_	NOUN	NOUN	_	20	nsubj	_	_
20	있기	_	NOUN	NOUN	_	21	obj	_	_
21	기대한다"고	_	VERB	PREDCOMP	_	22	ccomp	_	_
22	덧붙였다	_	VERB	VERB	_	0	root	_	SpaceAfter=No
23	.	.	PUNCT	.	_	22	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 fixed	color:blue
1	저	_	PRON	PRON	_	8	advcl	_	_
2	뿐만	_	NOUN	NOUN	_	1	flat	_	_
3	아니라	_	VERB	PREDCONJ	_	1	fixed	_	_
4	생각	_	NOUN	NOUN	_	5	nsubj	_	_
5	있으신	_	VERB	PREDREL	_	6	acl:relcl	_	_
6	분들은	_	NOUN	NOUN	_	8	nsubj	_	_
7	꼭	_	ADV	ADV	_	8	advmod	_	_
8	가보시기	_	NOUN	NOUN	_	9	obj	_	_
9	바랍니다	_	VERB	VERB	_	0	root	_	SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	_	_

~~~


