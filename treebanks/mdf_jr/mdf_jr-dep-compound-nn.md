---
layout: base
title:  'Statistics of compound:nn in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `compound:nn`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-compound.html">compound</a></tt>.

5 nodes (0%) are attached to their parents as `compound:nn`.

5 instances of `compound:nn` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `compound:nn`: <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt> (3; 60% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (2; 40% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound:nn	color:blue
1	Анна	Анна	PROPN	N	Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	2	compound:nn	_	GTtags=Prop,Sg,Nom,Indef
2	баба	баба	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	5	nsubj:cop	_	GTtags=Sg,Nom,Indef
3	эрь	эрь	DET	Det	Case=Nom|Definite=Ind|Number=Sing	4	det	_	GTtags=Sg,Nom,Indef
4	тевс	тев	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	5	nmod	_	GTtags=SP,Ill,Indef
5	анок	анок	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
6	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound:nn	color:blue
1	Михалу	Михалу	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	2	compound:nn	_	GTtags=Prop,Sg,Nom,Indef
2	шинь	ши	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	3	nmod	_	GTtags=SP,Gen,Indef
3	карша	карша	NOUN	N	Case=Nom|Definite=Ind|NounType=Relat|Number=Sing	4	obl:tmod	_	GTtags=Relator,Sg,Nom,Indef
4	путозь	путомс	VERB	V	Derivation=Ozj|VerbForm=Conv	0	root	_	GTtags=Der/Ozj,Ger
5	Марянь	Маря	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	6	nmod	_	GTtags=Prop,SP,Gen,Indef
6	позялонц	позял	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obj	_	GTtags=Sg,Gen,PxSg3|SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


