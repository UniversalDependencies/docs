---
layout: base
title:  'Statistics of root in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `root`

This relation is universal.

1550 nodes (10%) are attached to their parents as `root`.

1550 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.52.

The following 12 pairs of parts of speech are connected with `root`: -<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1218; 79% instances), -<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (134; 9% instances), -<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (61; 4% instances), -<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (41; 3% instances), -<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (34; 2% instances), -<tt><a href="myv_jr-pos-INTJ.html">INTJ</a></tt> (23; 1% instances), -<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (21; 1% instances), -<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (6; 0% instances), -<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (6; 0% instances), -<tt><a href="myv_jr-pos-ADP.html">ADP</a></tt> (2; 0% instances), -<tt><a href="myv_jr-pos-DET.html">DET</a></tt> (2; 0% instances), -<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	Велень	веле	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	2	nmod	_	GTtags=Sem/Plc,SP,Gen,Indef
2	росась	роса	NOUN	N	Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	GTtags=Sg,Nom,Def
3	эзь	эзь	AUX	Aux	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Prt1|VerbType=Aux	4	aux:neg	_	_
4	костявт	костявомс	VERB	V	Connegative=Yes|Mood=Ind|Valency=1	0	root	_	GTtags=IV,Ind,ConNeg
5	валске	валске	NOUN	N	AdvType=Tim|Case=Nom|Definite=Ind|Number=Sing	7	amod	_	GTtags=Temp,Sg,Nom,Indef
6	мартонь	марто	ADP	Adp	Case=Gen|Definite=Ind|Number=Plur,Sing	5	fixed	_	GTtags=Der/MWN,N,SP,Gen,Indef
7	чипайсэнть	чипай	NOUN	N	Case=Ine|Definite=Def|Number=Sing	4	obl	_	GTtags=Sg,Ine,Def|SpaceAfter=No
8	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	―	―	PUNCT	PUNCT	_	4	punct	_	_
2	Ох	ох	INTJ	Interj	_	4	discourse	_	GTtags=|SpaceAfter=No
3	,	,	PUNCT	CLB	_	2	punct	_	_
4	авинем	авине	NOUN	N	Case=Nom|Derivation=Dimin|Number=Sing|Number[psor]=Sing|Person[psor]=1	0	root	_	GTtags=Der/НЕ,Der/Dimin,N,Sg,Nom,PxSg1
5	-	-	PUNCT	Cmp/Hyph	_	6	punct	_	_
6	корминем	корма	NOUN	N	Case=Nom|Derivation=Dimin|Number=Sing|Number[psor]=Sing|Person[psor]=1	4	compound	_	GTtags=Der/НЕ,Der/Dimin,N,Sg,Nom,PxSg1
7	!	!	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Турванзо	турва	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	2	nsubj	_	GTtags=Pl,Nom,PxSg3
2	равжо-сэн	равжо-сэнь	ADJ	A	_	0	root	_	_
3	ть	оль	AUX	Cop	Number[subj]=Plur|Person[subj]=3|Tense=Pres	2	cop	_	GTtags=Prs,ScPl3
4	,	,	PUNCT	CLB	_	5	punct	_	_
5	чамазо	чама	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	11	nsubj	_	GTtags=Sg,Nom,PxSg3|SpaceAfter=No
6	,	,	PUNCT	CLB	_	8	punct	_	_
7	прок	прок	CCONJ	CC	_	8	mark	_	_
8	лияназ	лияназ	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	9	compound	_	GTtags=Sg,Nom,Indef
9	коцт	коцт	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	11	advcl	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
10	,	,	PUNCT	CLB	_	8	punct	_	_
11	ашо	ашо	ADJ	A	_	2	conj	_	_
12	_	оль	AUX	Cop	Number[subj]=Sing|Person[subj]=3|Tense=Pres	11	cop	_	GTtags=Prs,ScSg3
13	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


