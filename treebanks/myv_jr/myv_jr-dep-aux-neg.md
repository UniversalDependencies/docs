---
layout: base
title:  'Statistics of aux:neg in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `aux:neg`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-aux.html">aux</a></tt>.
There are also 4 other language-specific subtypes of `aux`: <tt><a href="myv_jr-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="myv_jr-dep-aux-imp.html">aux:imp</a></tt>, <tt><a href="myv_jr-dep-aux-opt.html">aux:opt</a></tt>, <tt><a href="myv_jr-dep-aux-q.html">aux:q</a></tt>.

400 nodes (2%) are attached to their parents as `aux:neg`.

395 instances of `aux:neg` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.05.

The following 9 pairs of parts of speech are connected with `aux:neg`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (275; 69% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (55; 14% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (26; 7% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (23; 6% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (13; 3% instances), <tt><a href="myv_jr-pos-NUM.html">NUM</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="myv_jr-pos-ADP.html">ADP</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-DET.html">DET</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:neg	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux:neg	color:blue
1	Аволь	аволь	AUX	Pcle	NegationType=Contrastive|Polarity=Neg	2	aux:neg	_	GTtags=Neg,Emphatic
2	пек	пек	ADV	Adv	AdvType=Deg	3	advmod:deg	_	GTtags=Degree
3	шумазь	шумамс	VERB	V	Derivation=Ozj|Valency=1|VerbForm=Conv	4	advcl	_	GTtags=IV,Der/Озь,Ger
4	охаесь	охаемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg3
5	ды	ды	CCONJ	CC	_	6	cc	_	_
6	кувсесь	кувсемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	4	conj	_	GTtags=IV,Ind,Prt1,ScSg3|SpaceAfter=No
7	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:neg	color:blue
1	―	―	PUNCT	PUNCT	_	3	punct	_	_
2	А	а	AUX	Pcle	Polarity=Neg	3	aux:neg	_	GTtags=Neg
3	кирдевимашка	кирдевемашка	NOUN	N	Case=Nom|Definite=Ind|Number=Plur,Sing	0	root	_	GTtags=SP,Cmpr,Indef|SpaceAfter=No
4	...	...	PUNCT	CLB	_	3	punct	_	_

~~~


