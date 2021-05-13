---
layout: base
title:  'Statistics of acl:relcl in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-acl.html">acl</a></tt>.

7 nodes (0%) are attached to their parents as `acl:relcl`.

6 instances of `acl:relcl` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.71428571428571.

The following 5 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (2; 29% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (2; 29% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (1; 14% instances), <tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (1; 14% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 acl:relcl	color:blue
1	Тугановонь	Туганов	PROPN	N	Animacy=Hum|Case=Gen|Definite=Ind|Gender=Masc|NameType=Sur|Number=Plur,Sing	2	nmod:poss	_	GTtags=Prop,Sem/Mal-Sur,SP,Gen,Indef
2	мяльс	мяль	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	3	obl:lto	_	GTtags=SP,Ill,Indef
3	лядсь	лядемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,ScSg3
4	Злобинонь	Злобин	PROPN	N	Animacy=Hum|Case=Gen|Definite=Ind|Gender=Masc|NameType=Sur|Number=Plur,Sing	5	nmod:poss	_	GTtags=Prop,Sem/Mal-Sur,SP,Gen,Indef
5	романоц	роман	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	nsubj	_	GTtags=Sg,Nom,PxSg3|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	8	punct	_	_
7	конань	кона	PRON	Pron	Case=Gen|Definite=Ind|Number=Plur,Sing|PronType=Rel	8	obj	_	GTtags=Rel,SP,Gen,Indef
8	лувозе	лувомс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past	5	acl:relcl	_	GTtags=Ind,Prt1,ScSg3,OcSg3
9	аф	аф	AUX	V	Polarity=Neg|VerbType=Aux	10	aux:neg	_	GTtags=Aux,Neg
10	кунара	кунара	ADV	Adv	_	8	advmod:tmod	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 acl:relcl	color:blue
1	Ся	ся	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Dem	12	nsubj	_	GTtags=Dem,Sg,Nom,Indef|SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	5	punct	_	_
3	кие	кие	PRON	Pron	Case=Nom|Number=Sing|PronType=Int	5	nsubj	_	GTtags=Interr,Sg,Nom
4	изь	аф	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	5	aux:neg	_	GTtags=Aux,Neg,Ind,Prt1,ScSg3
5	пице	пицемс	VERB	V	Connegative=Yes	1	acl:relcl	_	GTtags=ConNeg
6	паксяса	пакся	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	5	obl:lmod	_	GTtags=SP,Ine,Indef
7	или	или	CCONJ	CC	_	8	cc	_	_
8	вирьса	вирь	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	6	conj	_	GTtags=SP,Ine,Indef
9	ярхцамбяль	ярхцамбяль	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	5	obj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	5	punct	_	_
11	аф	аф	AUX	V	Polarity=Neg|VerbType=Aux	12	aux:neg	_	GTtags=Aux,Neg
12	содасы	содамс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,ScSg3,OcSg3
13	таньфонц	таньф	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	obj	_	GTtags=Sg,Gen,PxSg3|SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl:relcl	color:blue
1	Кармась	кармамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,ScSg3
2	юксондома	юксондомс	VERB	V	Case=Loc|VerbForm=Inf	1	xcomp	_	GTtags=Inf,Loc
3	пильгонзон	пильге	NOUN	N	Case=Gen|Number=Plur|Number[psor]=Sing|Person[psor]=3	2	obj	_	GTtags=Pl,Gen,PxSg3|SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	7	punct	_	_
5	конат	кона	PRON	Pron	Case=Nom|Definite=Ind|Number=Plur|PronType=Rel	7	nsubj:cop	_	GTtags=Rel,Pl,Nom,Indef
6	плманжава	плманжа	NOUN	N	Case=Prl|Definite=Ind|Number=Plur,Sing	7	obl:lmp	_	GTtags=SP,Prl,Indef
7	пяндрат	пяндра	ADJ	A	Case=Nom|Definite=Ind|Number=Plur	3	acl:relcl	_	GTtags=Pl,Nom,Indef|SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


