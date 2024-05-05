---
layout: base
title:  'Statistics of compound in UD_Kyrgyz-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Kyrgyz-TueCL: Relations: `compound`

This relation is universal.
There are 2 language-specific subtypes of `compound`: <tt><a href="ky_tuecl-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="ky_tuecl-dep-compound-svc.html">compound:svc</a></tt>.

10 nodes (1%) are attached to their parents as `compound`.

10 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 5 pairs of parts of speech are connected with `compound`: <tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_tuecl-pos-NOUN.html">NOUN</a></tt> (5; 50% instances), <tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt> (2; 20% instances), <tt><a href="ky_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 10% instances), <tt><a href="ky_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_tuecl-pos-NUM.html">NUM</a></tt> (1; 10% instances), <tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	Жаштарды	жаш	NOUN	_	_	7	obj	_	_
2	ишке	иш	NOUN	_	_	3	compound	_	_
3	ашырылбас	аш	VERB	_	_	4	acl	_	_
4	максаттарынан	максат	NOUN	_	_	6	obl	_	_
5	баш	баш	NOUN	_	_	6	compound	_	_
6	тарттырышыбыз	тарт	VERB	_	_	7	csubj	_	_
7	керек	керек	ADJ	_	_	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound	color:blue
1	Ал	ал	PRON	_	_	4	nsubj	_	_
2	унаа	унаа	NOUN	_	_	4	obj	_	_
3	сатып	сат	VERB	_	_	4	compound	_	_
4	алды	ал	VERB	_	_	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	бирок	бирок	CCONJ	_	_	8	cc	_	_
7	анын	ал	PRON	_	_	8	nmod	_	_
8	иниси	ини	NOUN	_	_	4	conj	_	_
9	жѳн	жѳн	ADV	_	_	11	advmod	_	_
10	гана	гана	ADV	_	_	9	advmod:emph	_	_
11	велосипед	велосипед	NOUN	_	_	8	orphan	_	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound	color:blue
1	Анын	ал	PRON	_	_	2	nmod:poss	_	_
2	таенеси	таене	NOUN	_	_	4	nsubj	_	_
3	мед	мед	ADJ	_	_	4	compound	_	_
4	айым	айым	NOUN	_	_	0	root	_	_
5	эле	э	AUX	_	_	4	cop	_	SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


