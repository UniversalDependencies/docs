---
layout: base
title:  'Statistics of acl in UD_Uzbek-UzUDT'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-UzUDT: Relations: `acl`

This relation is universal.

137 nodes (2%) are attached to their parents as `acl`.

131 instances of `acl` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.78832116788321.

The following 6 pairs of parts of speech are connected with `acl`: <tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt> (105; 77% instances), <tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt> (11; 8% instances), <tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt> (9; 7% instances), <tt><a href="uz_uzudt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt> (5; 4% instances), <tt><a href="uz_uzudt-pos-AUX.html">AUX</a></tt>-<tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_uzudt-pos-ADJ.html">ADJ</a></tt> (3; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 acl	color:blue
1	buni	bu	PRON	P	Case=Acc|Number=Sing|PronType=Dem	3	obj	_	_
2	sezib	sez	VERB	V	Aspect=Perf|VerbForm=Conv	3	dep	_	_
3	qolgan	qol	VERB	V	Tense=Past|VerbForm=Part	4	acl	_	_
4	afandi	afandi	NOUN	N	Case=Nom|Number[psor]=Sing|Person[psor]=1	7	nsubj	_	_
5	xatning	xat	NOUN	N	Case=Gen	6	dep	_	_
6	oxiriga	oxir	NOUN	N	Case=Dat|Number[psor]=Sing|Person[psor]=3	7	obl	_	_
7	yozibdi	yoz	VERB	V	Evident=Fh|Tense=Past	0	root	_	_
8	:	:	PUNCT	Y	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 acl	color:blue
1	-	-	PUNCT	Y	_	4	punct	_	_
2	rosa	rosa	ADV	D	_	4	advmod	_	_
3	shilib	shil	VERB	V	VerbForm=Conv	4	advcl	_	_
4	oladigan	ol	VERB	V	Tense=Fut|VerbForm=Part	5	acl	_	_
5	boʻldim	boʻl	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	_
6	-	-	PUNCT	Y	_	5	punct	_	_
7	da	da	PART	T	_	5	discourse	_	_
8	!	!	PUNCT	Y	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 acl	color:blue
1	sen	sen	PRON	P	Case=Nom|Number=Sing|Person=2|PronType=Prs	6	nsubj	_	_
2	kishilarning	kishi	NOUN	N	_	3	nmod:poss	_	_
3	qalbida	qalb	NOUN	N	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3	4	nmod	_	_
4	yangragan	yangra	NOUN	N	_	6	acl	_	_
5	aks	aks	NOUN	N	_	6	amod	_	_
6	sado	sado	NOUN	N	Case=Nom	0	root	_	_
7	.	.	PUNCT	Y	_	6	punct	_	_

~~~


