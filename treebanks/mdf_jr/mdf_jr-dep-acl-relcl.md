---
layout: base
title:  'Statistics of acl:relcl in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-acl.html">acl</a></tt>.

8 nodes (0%) are attached to their parents as `acl:relcl`.

7 instances of `acl:relcl` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.625.

The following 5 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (3; 38% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (2; 25% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (1; 13% instances), <tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (1; 13% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 acl:relcl	color:blue
1	А	а	CCONJ	CC	_	3	cc	_	_
2	кода	кода	ADV	Adv	_	3	advmod	_	_
3	ладяль	ладямс	VERB	V	Mood=Sub|Number[subj]=Sing|Person[subj]=3	0	root	_	GTtags=Conj,ScSg3
4	утомнясь	утом	NOUN	N	Case=Nom|Definite=Def|Derivation=Dimin|Number=Sing	3	nsubj	_	GTtags=Der/Dimin,Sg,Nom,Def
5	тейст	сон	PRON	Pron	Case=Dat|Number=Plur|Person=3|PronType=Prs|Variant=Short	3	obl	_	GTtags=Pers,Pl3,Dat,Short|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	11	punct	_	_
7	ня	ня	DET	Det	Number=Plur|PronType=Dem	8	det	_	GTtags=Dem,Pl
8	шочкнень	шочка	NOUN	N	Case=Gen|Definite=Def|Number=Plur	10	obl	_	GTtags=Pl,Gen,Def
9	эзда	эзда	ADP	Adp	Case=Abl	8	case	_	GTtags=Abl
10	тиемацка	тиемс	VERB	V	Case=Nom|Clitic=AddGA|Number=Sing|Number[psor]=Sing|Person[psor]=3|VerbForm=Vnoun	11	xcomp	_	GTtags=NomAct,Sg,Nom,PxSg3,Clt/Add
11	мезевок	мезевок	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Ind	3	conj	_	GTtags=Indef,Sg,Nom,Indef
12	аш	аш	AUX	_	Case=Loc|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Pres|VerbType=Aux	11	aux:neg	_	GTtags=Aux,Neg,Loc,Prs,ScSg3|SpaceAfter=No
13	,	,	PUNCT	PUNCT	_	15	punct	_	GTtags=PUNCT
14	анок	анок	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	15	advmod	_	GTtags=Sg,Nom,Indef
15	шапфт	шапомс	VERB	V	Aspect=Perf|Case=Nom|Definite=Ind|Derivation=F|Number=Plur|VerbForm=Part	11	acl:relcl	_	GTtags=Der/f,PrfPrc,Pl,Nom,Indef|SpaceAfter=No
16	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


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


