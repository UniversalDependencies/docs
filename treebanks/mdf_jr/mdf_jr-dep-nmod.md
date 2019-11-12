---
layout: base
title:  'Statistics of nmod in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="mdf_jr-dep-nmod-bahuv.html">nmod:bahuv</a></tt>.

16 nodes (3%) are attached to their parents as `nmod`.

16 instances of `nmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.375.

The following 4 pairs of parts of speech are connected with `nmod`: <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (11; 69% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (3; 19% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt> (1; 6% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nmod	color:blue
1	Рамаль	рамамс	VERB	V	Mood=Cnj|Number[subj]=Sing|Person[subj]=3|Valency=1	0	root	_	_
2	хуш	хуш	ADV	Adv	_	5	advmod	_	_
3	тядязень	тядя	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	5	nmod	_	_
4	муськома	муськомс	VERB	V	Case=Nom|Definite=Ind|Number=Sing|Valency=2|VerbForm=Vnoun	5	nmod	_	_
5	очконц	очка	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	1	obj	_	_
6	эшка	эшка	ADP	Adp	AdpType=Post	5	case	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod	color:blue
1	Алязе	аля	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	4	nsubj	_	GTtags=Sg,Nom,PxSg1
2	тонь	тон	PRON	Pron	Case=Gen|Number=Sing|Person=2|PronType=Prs	3	nmod	_	GTtags=Pers,Sg2,Gen
3	алядот	аля	NOUN	N	Case=Abl|Number=Plur,Sing|Number[psor]=Sing|Person[psor]=2	4	obl	_	GTtags=SP,Abl,PxSg2
4	крутой	крутой	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nmod	color:blue
1	Сон	сон	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	кассь	касомс	VERB	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg3
3	Парижса	Парижса	PROPN	_	Case=Nom|Definite=Ind|Number=Sing	2	obl	_	GTtags=Prop,Sg,Nom,Indef|SpaceAfter=No
4	.	.	PUNCT	CLB	_	2	punct	_	_
5	Парижсь	Парижсь	PROPN	_	Case=Nom|Definite=Def|Number=Sing	10	nsubj	_	GTtags=Prop,Sg,Nom,Def
6	–	–	PUNCT	_	_	7	punct	_	_
7	тя	тя	PRON	_	Case=Nom|Number=Sing|PronType=Dem	5	appos	_	GTtags=Dem,Sg,Nom
8	Франциять	Франция	PROPN	_	Case=Gen|Definite=Def|Number=Sing	10	nmod	_	GTtags=Prop,Sem/Plc,Sg,Gen,Def
9	ине	ине	ADJ	_	Case=Nom|Definite=Ind|Number=Sing	10	amod	_	GTtags=Sg,Nom,Indef
10	ошец	ош	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	parataxis	_	GTtags=Sg,Nom,PxSg3|SpaceAfter=No
11	.	.	PUNCT	CLB	_	10	punct	_	_

~~~


