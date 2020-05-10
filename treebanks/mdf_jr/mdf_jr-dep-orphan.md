---
layout: base
title:  'Statistics of orphan in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `orphan`

This relation is universal.

4 nodes (0%) are attached to their parents as `orphan`.

4 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 3 pairs of parts of speech are connected with `orphan`: <tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 orphan	color:blue
1	Марья	Марья	PROPN	N	Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	2	nsubj	_	GTtags=Prop,Sem/Fem,Sg,Nom,Indef
2	сявозе	сявомс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg3,OcSg3
3	бронзать	бронза	NOUN	N	Case=Gen|Definite=Def|Number=Sing	2	obj	_	GTtags=Sg,Gen,Def|SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	_
5	Петя	Петя	PROPN	N	Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	2	conj	_	GTtags=Prop,Sem/Mal,Sg,Nom,Indef
6	–	–	PUNCT	PUNCT	_	5	punct	_	_
7	сияннеть	сия	NOUN	N	Case=Gen|Definite=Def|Derivation=Poss|Number=Sing	5	orphan	_	GTtags=Der/Poss,N,Sg,Gen,Def|SpaceAfter=No
8	,	,	PUNCT	CLB	_	10	punct	_	_
9	а	а	CCONJ	CC	_	10	cc	_	_
10	Джейн	Джейн	PROPN	N	Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	2	conj	_	GTtags=Prop,Sem/Fem,Sg,Nom,Indef
11	–	–	PUNCT	PUNCT	_	10	punct	_	_
12	зрняннеть	зрня	NOUN	N	Case=Gen|Definite=Def|Derivation=Poss|Number=Sing	10	orphan	_	GTtags=Der/Poss,N,Sg,Gen,Def|SpaceAfter=No
13	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 orphan	color:blue
1	Сон	сон	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	рамась	рамамс	VERB	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg3
3	машина	машина	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	2	obj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	а	а	CCONJ	CC	_	6	cc	_	_
6	брадоц	брад	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	conj	_	GTtags=Sg,Nom,PxSg3
7	аньцек	аньцек	ADV	_	_	8	advmod	_	_
8	велосипед	велосипед	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	6	orphan	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 orphan	color:blue
1	―	―	PUNCT	PUNCT	_	5	punct	_	_
2	А	а	CCONJ	CC	_	5	cc	_	_
3	мон	мон	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
4	ашень	аш	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Polarity=Neg|Tense=Past	5	aux:neg	_	_
5	абонда	абондомс	VERB	V	Connegative=Yes|Valency=1	0	root	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	мярьгонь	мярьгомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Past|Valency=1	5	orphan	_	SpaceAfter=No
8	:	:	PUNCT	CLB	_	5	punct	_	_

~~~


