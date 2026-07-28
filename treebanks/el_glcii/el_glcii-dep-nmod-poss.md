---
layout: base
title:  'Statistics of nmod:poss in UD_Greek-GLCII'
udver: '2'
---

## Treebank Statistics: UD_Greek-GLCII: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="el_glcii-dep-nmod.html">nmod</a></tt>.

2 nodes (0%) are attached to their parents as `nmod:poss`.

2 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-PRON.html">PRON</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nmod:poss	color:blue
1	Σαν	σαν	ADV	ADV	_	6	advmod	_	_
2	η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
3	αγαπημένη	αγαπώ	VERB	VERB	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	5	advcl	_	_
4	μας	μου	PRON	PRON	Case=Gen|Gender=Masc|Number=Plur|Person=1|Poss=Yes|PronType=Prs	5	nmod	_	_
5	θενεία	θενεία	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	_
6	λεεί	λεώ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	advcl	_	SpaceAfter=No
7	:	:	PUNCT	PUNCT	_	9	punct	_	_
8	"	"	PUNCT	PUNCT	_	9	punct	_	SpaceAfter=No
9	FOLLOW	follow	VERB	VERB	Foreign=Yes	0	root	_	Lang=en
10	YOUR	your	PRON	PRON	Case=Gen|Foreign=Yes|Person=2|Poss=Yes|PronType=Prs	11	nmod:poss	_	Lang=en
11	DREAMS	dreams	NOUN	NOUN	Foreign=Yes	9	obj	_	Lang=en|SpaceAfter=No
12	!	!	PUNCT	PUNCT	_	9	punct	_	SpaceAfter=No
13	"	"	PUNCT	PUNCT	_	9	punct	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	9	punct	_	_

~~~


