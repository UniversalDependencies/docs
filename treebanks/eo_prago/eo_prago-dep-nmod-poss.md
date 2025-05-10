---
layout: base
title:  'Statistics of nmod:poss in UD_Esperanto-Prago'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Prago: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="eo_prago-dep-nmod.html">nmod</a></tt>.

4 nodes (0%) are attached to their parents as `nmod:poss`.

4 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-PRON.html">PRON</a></tt> (3; 75% instances), <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_prago-pos-PRON.html">PRON</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nmod:poss	color:blue
1	La	la	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	esperanto-komunumo	esperanto-komunumo	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	_
3	estas	esti	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	unu	unu	PRON	_	Case=Nom|Number=Sing	0	root	_	_
5	el	el	ADP	_	_	8	case	_	_
6	malmultaj	malmulta	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	8	amod	_	_
7	mondskalaj	mondskala	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	8	amod	_	_
8	lingvokomunumoj	lingvokomunumo	NOUN	_	Case=Nom|Number=Plur	4	nmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	16	punct	_	_
10	kies	kies	PRON	_	Case=Nom|Number=Sing|Poss=Yes|PronType=Rel	11	nmod:poss	_	_
11	parolantoj	parolanto	NOUN	_	Case=Nom|Number=Plur	16	nsubj	_	_
12	estas	esti	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	16	cop	_	_
13	senescepte	senescepte	ADV	_	_	16	advmod	_	_
14	du-	du-	PART	_	_	16	advmod	_	_
15	aŭ	aŭ	CCONJ	_	_	16	cc	_	_
16	plurlingvaj	plurlingva	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	8	acl:relcl	_	SpaceAfter=No
17	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	Intertempe	Intertempe	ADV	_	_	8	advmod	_	_
2	la	la	DET	_	Definite=Def|PronType=Art	3	det	_	_
3	celoj	celo	NOUN	_	Case=Nom|Number=Plur	8	nsubj	_	_
4	de	de	ADP	_	_	6	case	_	_
5	ĝiaj	ĝi	PRON	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	6	nmod:poss	_	_
6	parolantoj	paroli	VERB	_	Case=Nom|Number=Plur|Tense=Pres|VerbForm=Ger|Voice=Act	3	nmod	_	_
7	ne	ne	ADV	_	_	8	advmod	_	_
8	perdis	perdi	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
9	gravecon	graveco	NOUN	_	Case=Acc|Number=Sing	8	obj	_	_
10	kaj	kaj	CCONJ	_	_	11	cc	_	_
11	aktualecon	aktualeco	NOUN	_	Case=Acc|Number=Sing	9	conj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	8	punct	_	_

~~~


