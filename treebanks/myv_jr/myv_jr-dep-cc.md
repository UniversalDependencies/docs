---
layout: base
title:  'Statistics of cc in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="myv_jr-dep-cc-preconj.html">cc:preconj</a></tt>.

342 nodes (2%) are attached to their parents as `cc`.

339 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.02046783625731.

The following 11 pairs of parts of speech are connected with `cc`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-CCONJ.html">CCONJ</a></tt> (230; 67% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-CCONJ.html">CCONJ</a></tt> (63; 18% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-CCONJ.html">CCONJ</a></tt> (13; 4% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-CCONJ.html">CCONJ</a></tt> (12; 4% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-CCONJ.html">CCONJ</a></tt> (8; 2% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-CCONJ.html">CCONJ</a></tt> (7; 2% instances), <tt><a href="myv_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="myv_jr-pos-CCONJ.html">CCONJ</a></tt> (4; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-DET.html">DET</a></tt>-<tt><a href="myv_jr-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	Аволь	аволь	AUX	Pcle	NegationType=Contrastive|Polarity=Neg	2	aux:neg	_	GTtags=Neg,Emphatic
2	пек	пек	ADV	Adv	AdvType=Deg	3	advmod:deg	_	GTtags=Degree
3	шумазь	шумамс	VERB	V	Derivation=Ozj|Valency=1|VerbForm=Conv	4	advcl	_	GTtags=IV,Der/Озь,Ger
4	охаесь	охаемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg3
5	ды	ды	CCONJ	CC	_	6	cc	_	_
6	кувсесь	кувсемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	4	conj	_	GTtags=IV,Ind,Prt1,ScSg3|SpaceAfter=No
7	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc	color:blue
1	―	―	PUNCT	PUNCT	_	2	punct	_	_
2	Пасиба	пасиба	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef|Gloss=thanks
3	ды	ды	CCONJ	CC	_	4	cc	_	GTtags=|Gloss=and
4	пасиба	пасиба	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	2	conj	_	GTtags=Sg,Nom,Indef|Gloss=thanks
5	тенк	тон	PRON	Pron	Case=Dat|Number=Plur|Person=2|PronType=Prs|Variant=Short	2	orphan	_	GTtags=Pers,Pl2,Dat,Short|Gloss=to-you-pl2|SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	ялгат	ялга	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	2	vocative	_	GTtags=Pl,Nom,Indef|Gloss=comrade|SpaceAfter=No
8	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
1	Ды	ды	CCONJ	CC	_	4	cc	_	_
2	вельть	вельть	ADV	Adv	_	4	advmod	_	_
3	уш	уш	ADV	Adv	AdvType=Tim	2	advmod:tmod	_	GTtags=Sem/Time
4	стака	стака	ADJ	A	_	0	root	_	_
5	эйзэнзэ	эйс	ADP	Adp	Case=Ill|Number[psor]=Sing|Person[psor]=3	6	obl	_	GTtags=Ill,PxSg3
6	керсемась	керсема	NOUN	N	Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	GTtags=Sg,Nom,Def|SpaceAfter=No
7	,	,	PUNCT	CLB	_	10	punct	_	_
8	ламо	ламо	ADV	Adv	_	9	advmod	_	GTtags=Qnt,Sg,Nom,Indef
9	шка	шка	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	10	obj	_	GTtags=Sem/Time,Sg,Nom,Indef
10	саи	саемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres	4	conj	_	GTtags=Ind,Prs,ScSg3|SpaceAfter=No
11	...	...	PUNCT	CLB	_	4	punct	_	_

~~~


