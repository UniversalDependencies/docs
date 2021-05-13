---
layout: base
title:  'Statistics of punct in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `punct`

This relation is universal.

4102 nodes (24%) are attached to their parents as `punct`.

2273 instances of `punct` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.95758166747928.

The following 15 pairs of parts of speech are connected with `punct`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PUNCT.html">PUNCT</a></tt> (2713; 66% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PUNCT.html">PUNCT</a></tt> (671; 16% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-PUNCT.html">PUNCT</a></tt> (185; 5% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-PUNCT.html">PUNCT</a></tt> (156; 4% instances), <tt><a href="myv_jr-pos-INTJ.html">INTJ</a></tt>-<tt><a href="myv_jr-pos-PUNCT.html">PUNCT</a></tt> (109; 3% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-PUNCT.html">PUNCT</a></tt> (101; 2% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-PUNCT.html">PUNCT</a></tt> (75; 2% instances), <tt><a href="myv_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="myv_jr-pos-PUNCT.html">PUNCT</a></tt> (50; 1% instances), <tt><a href="myv_jr-pos-PART.html">PART</a></tt>-<tt><a href="myv_jr-pos-PUNCT.html">PUNCT</a></tt> (13; 0% instances), <tt><a href="myv_jr-pos-NUM.html">NUM</a></tt>-<tt><a href="myv_jr-pos-PUNCT.html">PUNCT</a></tt> (11; 0% instances), <tt><a href="myv_jr-pos-DET.html">DET</a></tt>-<tt><a href="myv_jr-pos-PUNCT.html">PUNCT</a></tt> (5; 0% instances), <tt><a href="myv_jr-pos-X.html">X</a></tt>-<tt><a href="myv_jr-pos-PUNCT.html">PUNCT</a></tt> (5; 0% instances), <tt><a href="myv_jr-pos-ADP.html">ADP</a></tt>-<tt><a href="myv_jr-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="myv_jr-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="myv_jr-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="myv_jr-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="myv_jr-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 punct	color:blue
1	Велень	веле	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	2	nmod:poss	_	GTtags=Sem/Plc,SP,Gen,Indef
2	росась	роса	NOUN	N	Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	GTtags=Sg,Nom,Def
3	эзь	эзь	AUX	Aux	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	4	aux:neg	_	_
4	костявт	костявомс	VERB	V	Connegative=Yes|Mood=Ind|Valency=1	0	root	_	GTtags=IV,Ind,ConNeg
5	валске	валске	NOUN	N	AdvType=Tim|Case=Nom|Definite=Ind|Number=Sing	6	compound	_	GTtags=Temp,Sg,Nom,Indef
6	мартонь	марто	NOUN	N	Case=Gen|Definite=Ind|NounType=Relat|Number=Plur,Sing	7	nmod	_	GTtags=Der/MWN,N,SP,Gen,Indef
7	чипайсэнть	чипай	NOUN	N	Case=Ine|Definite=Def|Number=Sing	4	obl:lmod	_	GTtags=Sg,Ine,Def|SpaceAfter=No
8	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 punct	color:blue
1	Турванзо	турва	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	2	nsubj	_	GTtags=Pl,Nom,PxSg3
2	равжо-сэнть	равжо-сэнь	ADJ	A	Number[subj]=Plur|Person[subj]=3|Tense=Pres	0	root	_	GTtags=Prs,ScPl3|SpaceAfter=No
3	,	,	PUNCT	CLB	_	4	punct	_	_
4	чамазо	чама	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	10	nsubj	_	GTtags=Sg,Nom,PxSg3|SpaceAfter=No
5	,	,	PUNCT	CLB	_	7	punct	_	_
6	прок	прок	CCONJ	CC	_	7	mark	_	_
7	лияназ	лияназ	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	8	compound	_	GTtags=Sg,Nom,Indef
8	коцт	коцт	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	10	advcl	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
9	,	,	PUNCT	CLB	_	8	punct	_	_
10	ашо	ашо	ADJ	A	Number[subj]=Sing|Person[subj]=3|Tense=Pres	2	conj	_	GTtags=Prs,ScSg3|SpaceAfter=No
11	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 punct	color:blue
1	Лиссь	лисемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg3
2	Ястребов	Ястребов	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|Gender=Masc|NameType=Sur|Number=Sing	1	nsubj	_	GTtags=Prop,Sur_Mal,Sg,Nom,Indef|SpaceAfter=No
3	,	,	PUNCT	CLB	_	5	punct	_	_
4	седеяк	седеяк	ADV	Adv	Clitic=Add|Degree=Cmp	5	advmod:deg	_	GTtags=Degree=Cmp,Clt/Gak
5	нусманясто	нусманясто	ADV	Adv	AdvType=Sta	2	acl	_	GTtags=State|SpaceAfter=No
6	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


