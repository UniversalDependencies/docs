---
layout: base
title:  'Statistics of nmod:own in UD_Buryat'
udver: '2'
---

## Treebank Statistics: UD_Buryat: Relations: `nmod:own`

This relation is a language-specific subtype of <tt><a href="bxr-dep-nmod.html">nmod</a></tt>.

25 nodes (0%) are attached to their parents as `nmod:own`.

25 instances of `nmod:own` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.92.

The following 5 pairs of parts of speech are connected with `nmod:own`: <tt><a href="bxr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bxr-pos-PROPN.html">PROPN</a></tt> (16; 64% instances), <tt><a href="bxr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bxr-pos-NOUN.html">NOUN</a></tt> (6; 24% instances), <tt><a href="bxr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bxr-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="bxr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bxr-pos-ADP.html">ADP</a></tt> (1; 4% instances), <tt><a href="bxr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bxr-pos-PRON.html">PRON</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nmod:own	color:blue
1	Мааттида	Маатти	PROPN	_	Case=Dat|Gender=Masc	4	nmod:own	_	_
2	шэнэ	шэнэ	ADJ	_	_	4	amod	_	_
3	түмэр	түмэр	ADJ	_	_	0	root	_	_
4	морин	морин	NOUN	_	Case=Nom	3	fixed	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nmod:own	color:blue
1	Минии	би	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	3	det	_	_
2	хани	хани	NOUN	_	Case=Nom	6	nmod:own	_	_
3	нүхэртэ	нүхэр	NOUN	_	Case=Dat	2	fixed	_	_
4	Оулуһаань	Оулу	PROPN	_	Case=Abl|Number[psor]=Sing|Person[psor]=3	5	nmod	_	_
5	эльгээгдэһээн	эльгээгдэһээн	ADJ	_	_	6	acl	_	_
6	бэлэг	бэлэг	NOUN	_	Case=Nom	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:own	color:blue
1	Абарга	абарга	ADJ	_	_	2	compound	_	_
2	шалгаруулха	шалгаруулха	NOUN	_	Case=Nom	3	compound	_	_
3	тэмсээн	тэмсээн	NOUN	_	Case=Nom	6	nsubj	_	_
4	–	–	PUNCT	_	_	3	punct	_	_
5	Виртаненэй	Виртанен	PROPN	_	Case=Gen	6	nmod:own	_	_
6	зургаадахи	зурган	ADJ	_	_	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


