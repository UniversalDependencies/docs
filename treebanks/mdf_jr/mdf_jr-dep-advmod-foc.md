---
layout: base
title:  'Statistics of advmod:foc in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `advmod:foc`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-advmod.html">advmod</a></tt>.
There are also 9 other language-specific subtypes of `advmod`: <tt><a href="mdf_jr-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="mdf_jr-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="mdf_jr-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="mdf_jr-dep-advmod-freq.html">advmod:freq</a></tt>, <tt><a href="mdf_jr-dep-advmod-lfrom.html">advmod:lfrom</a></tt>, <tt><a href="mdf_jr-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="mdf_jr-dep-advmod-lto.html">advmod:lto</a></tt>, <tt><a href="mdf_jr-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="mdf_jr-dep-advmod-tmod.html">advmod:tmod</a></tt>.

12 nodes (0%) are attached to their parents as `advmod:foc`.

11 instances of `advmod:foc` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.75.

The following 4 pairs of parts of speech are connected with `advmod:foc`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (6; 50% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (2; 17% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (2; 17% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (2; 17% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advmod:foc	color:blue
1	А	а	CCONJ	CC	_	4	cc	_	_
2	мезе	мезе	PRON	Pron	Case=Nom|Number=Sing|PronType=Int	0	root	_	_
3	кда	кда	SCONJ	CS	_	4	mark	_	_
4	рамась	рамамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	2	advcl	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	7	punct	_	_
6	аньцек	аньцек	ADV	Adv	_	7	advmod:foc	_	_
7	налхксемс	налхксемс	VERB	V	Valency=1|VerbForm=Inf	2	advcl	_	SpaceAfter=No
8	,	,	PUNCT	CLB	_	7	punct	_	_
9	а	а	CCONJ	CC	_	11	cc	_	_
10	мон	мон	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj	_	_
11	ёран	ёрамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=2	2	conj	_	_
12	лиендемс	лиендемс	VERB	V	Valency=1|VerbForm=Inf	11	xcomp	_	SpaceAfter=No
13	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 advmod:foc	color:blue
1	Сёксень	сёксе	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	2	nmod	_	GTtags=SP,Gen,Indef
2	вирсь	вирь	NOUN	N	Case=Nom|Definite=Def|Number=Sing	5	nsubj:cop	_	GTtags=Sg,Nom,Def
3	ульсь	улемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	5	cop	_	GTtags=Ind,Prt1,ScSg3
4	пяк	пяк	ADV	Adv	AdvType=Deg	5	advmod:deg	_	GTtags=Deg
5	мазы	мази	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
6	,	,	PUNCT	CLB	_	10	punct	_	_
7	кодама	кодама	ADJ	A	Case=Nom|Definite=Ind|Number=Sing|PronType=Int	9	amod	_	GTtags=Interr,Sg,Nom,Indef
8	аньцек	аньцек	ADV	Adv	_	7	advmod:foc	_	_
9	краскат	краска	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	10	nsubj:cop	_	GTtags=Pl,Nom,Indef
10	сонь	сон	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	5	conj	_	GTtags=Pers,Sg3,Gen
11	эсонза	эса	ADP	Adp	Case=Ine|Number[psor]=Sing|Person[psor]=3	10	case	_	GTtags=Ine,PxSg3
12	ашельхть	аш	AUX	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	10	cop	_	GTtags=Aux,Neg,Loc,Ind,Prt2,ScPl3|SpaceAfter=No
13	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advmod:foc	color:blue
1	Сон	сон	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	рамась	рамамс	VERB	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg3
3	машина	машина	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	2	obj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	а	а	CCONJ	CC	_	6	cc	_	_
6	брадоц	брад	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	conj	_	GTtags=Sg,Nom,PxSg3
7	аньцек	аньцек	ADV	_	_	8	advmod:foc	_	_
8	велосипед	велосипед	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	6	orphan	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


