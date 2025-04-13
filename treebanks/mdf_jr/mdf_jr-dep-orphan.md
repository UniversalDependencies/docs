---
layout: base
title:  'Statistics of orphan in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `orphan`

This relation is universal.

5 nodes (0%) are attached to their parents as `orphan`.

4 instances of `orphan` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.8.

The following 4 pairs of parts of speech are connected with `orphan`: <tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 20% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 orphan	color:blue
1	Марья	Марья	PROPN	N	Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	2	nsubj	_	GTtags=Prop,Sem/Fem,Sg,Nom,Indef
2	сявозе	сявомс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past	0	root	_	GTtags=TV,Ind,Prt1,ScSg3,OcSg3
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 orphan	color:blue
1	Тялонда	тялонда	ADV	Adv	_	2	advmod:tmod	_	CGdephead=#1-&gt;0|CGdeprel=@X|GTtags=
2	аноклайхть	анокламс	VERB	V	Case=Gen|Definite=Def|Nomzr=Ag|Number=Sing	0	root	_	CGdephead=#2-&gt;2|CGdeprel=@OBJ|GTtags=Der/NomAg,N,Sg,Gen,Def
3	сокатнень	сока	NOUN	N	Case=Gen|Definite=Def|Number=Plur	2	obj	_	CGdephead=#3-&gt;3|CGdeprel=@OBJ|GTtags=Pl,Gen,Def|SpaceAfter=No
4	,	,	PUNCT	CLB	_	7	punct	_	CGdephead=#4-&gt;5|CGdeprel=@X|GTtags=CLB
5	а	а	CCONJ	CC	_	7	cc	_	CGdephead=#5-&gt;5|CGdeprel=@CC|GTtags=
6	кизонда	кизонда	ADV	Adv	_	7	orphan	_	CGdephead=#6-&gt;0|CGdeprel=@X|GTtags=
7	нурттнень	нурда	NOUN	N	Case=Gen|Definite=Def|Number=Plur	2	conj	_	CGdephead=#7-&gt;7|CGdeprel=@OBJ|GTtags=Pl,Gen,Def|SpaceAfter=No
8	.	.	PUNCT	CLB	_	2	punct	_	CGdephead=#8-&gt;0|CGdeprel=@X|GTtags=CLB

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 orphan	color:blue
1	Сон	сон	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	рамась	рамамс	VERB	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=TV,Ind,Prt1,ScSg3
3	машина	машина	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	2	obj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	а	а	CCONJ	CC	_	6	cc	_	_
6	брадоц	брад	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	conj	_	GTtags=Sg,Nom,PxSg3
7	аньцек	аньцек	ADV	_	_	8	advmod:foc	_	_
8	велосипед	велосипед	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	6	orphan	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


