---
layout: base
title:  'Statistics of acl:relcl in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-acl.html">acl</a></tt>.

10 nodes (0%) are attached to their parents as `acl:relcl`.

8 instances of `acl:relcl` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.3.

The following 5 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (4; 40% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (3; 30% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (1; 10% instances), <tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (1; 10% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 acl:relcl	color:blue
1	сире	сире	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	2	amod	_	CGdephead=#8-&gt;9|CGdeprel=@&gt;N|GTtags=Sg,Nom,Indef
2	пингть	пинге	NOUN	N	Case=Gen|Definite=Def|Number=Sing	5	obl:tmod	_	CGdephead=#9-&gt;12|CGdeprel=@OBJ&gt;|GTtags=Sg,Gen,Def
3	тя	тя	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Dem	4	det	_	CGdephead=#10-&gt;11|CGdeprel=@&gt;N|GTtags=Dem,Sg,Nom,Indef
4	шиня	ши	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=1	5	obl:tmod	_	CGdephead=#11-&gt;12|CGdeprel=@SUBJ&gt;|GTtags=Pl,Nom,PxSg1,Err/Orth-lowered-final-e-2-ja
5	паннелезь	паннемс	VERB	V	Mood=Sub|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=3	0	root	_	CGdephead=#12-&gt;0|CGdeprel=@FMV|GTtags=Conj,ScPl3,OcSg3
6	сивотьф	сиводемс	VERB	V	Case=Nom|Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	7	acl:relcl	_	CGdephead=#13-&gt;12|CGdeprel=@IMV|GTtags=Der/f,PrfPrc,Sg,Nom,Indef
7	работникнень	работник	NOUN	N	Case=Gen|Definite=Def|Number=Plur	8	nmod:poss	_	CGdephead=#14-&gt;15|CGdeprel=@&gt;N|GTtags=Pl,Gen,Def
8	ярмакснон	ярмак	NOUN	N	Case=Gen|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=3	5	obj	_	CGdephead=#15-&gt;0|CGdeprel=@X|GTtags=SP,Gen,PxPl3|SpaceAfter=No
9	.	.	PUNCT	CLB	_	5	punct	_	CGdephead=#16-&gt;12|CGdeprel=@X|GTtags=CLB

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 acl:relcl	color:blue
1	А	а	CCONJ	CC	_	3	cc	_	_
2	кода	кода	ADV	Adv	_	3	advmod	_	_
3	ладяль	ладямс	VERB	V	Mood=Sub|Number[subj]=Sing|Person[subj]=3	0	root	_	GTtags=Conj,ScSg3
4	утомнясь	утом	NOUN	N	Case=Nom|Definite=Def|Degree=Dim|Number=Sing	3	nsubj	_	GTtags=Der/Dimin,Sg,Nom,Def
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl:relcl	color:blue
1	Кармась	кармамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	GTtags=Ind,Prt1,ScSg3
2	юксондома	юксондомс	VERB	V	Case=Loc|VerbForm=Inf	1	xcomp	_	GTtags=Inf,Loc
3	пильгонзон	пильге	NOUN	N	Case=Gen|Number=Plur|Number[psor]=Sing|Person[psor]=3	2	obj	_	GTtags=Pl,Gen,PxSg3|SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	7	punct	_	_
5	конат	кона	PRON	Pron	Case=Nom|Definite=Ind|Number=Plur|PronType=Rel	7	nsubj:cop	_	GTtags=Rel,Pl,Nom,Indef
6	плманжава	плманжа	NOUN	N	Case=Prl|Definite=Ind|Number=Plur,Sing	7	obl:lmod	_	GTtags=SP,Prl,Indef
7	пяндрат	пяндра	ADJ	A	Case=Nom|Definite=Ind|Number=Plur	3	acl:relcl	_	GTtags=Pl,Nom,Indef|SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


