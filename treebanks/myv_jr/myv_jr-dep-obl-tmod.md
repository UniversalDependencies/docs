---
layout: base
title:  'Statistics of obl:tmod in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="myv_jr-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="myv_jr-dep-obl-lmod.html">obl:lmod</a></tt>.

57 nodes (0%) are attached to their parents as `obl:tmod`.

46 instances of `obl:tmod` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.31578947368421.

The following 6 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (30; 53% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (19; 33% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (4; 7% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 obl:tmod	color:blue
1	Чокшнень	чокшне	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	4	obl:tmod	_	GTtags=SP,Gen,Indef
2	перть	перть	ADP	Adp	Case=Temp	1	case	_	GTtags=Temp
3	эзть	эзь	AUX	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	4	aux:neg	_	GTtags=Aux,Neg,Ind,Prt1,ScPl3
4	валгоне	валгонемс	VERB	V	Connegative=Yes|Valency=2	0	root	_	GTtags=TV,ConNeg
5	кельбрясто	кельбря	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	4	obl	_	GTtags=SP,Ela,Indef
6	неть	не	DET	Det	Case=Nom|Definite=Ind|Number=Plur	7	det	_	GTtags=Pl,Nom,Indef
7	валтнэ	вал	NOUN	N	Case=Nom|Definite=Def|Number=Plur	4	nsubj	_	GTtags=Pl,Nom,Def|SpaceAfter=No
8	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 obl:tmod	color:blue
1	Громовдо	Громов	PROPN	N	Animacy=Hum|Case=Abl|Definite=Ind|Gender=Masc|NameType=Sur|Number=Plur,Sing	2	nmod:comp	_	GTtags=Prop,Sur_Mal,SP,Abl,Indef
2	мейле	мейле	ADV	Adv	AdvType=Tim	5	obl:tmod	_	GTtags=Temp
3	сон	сон	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	GTtags=Pers,Sg3,Nom
4	кеместэ	кеместэ	ADV	Adv	_	5	advmod	_	_
5	кундась	кундамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg3
6	командирэнь	командир	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	7	nmod	_	GTtags=SP,Gen,Indef
7	тевентень	тев	NOUN	N	Case=Dat|Definite=Def|Number=Sing	5	obl	_	GTtags=Sg,Dat,Def|SpaceAfter=No
8	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:tmod	color:blue
1	Пазось	Паз	NOUN	N	Case=Nom|Definite=Def	4	nsubj	_	GTtags=Sg,Nom,Def
2	те	те	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Dem	3	det	_	GTtags=Dem,Sg,Nom,Indef
3	шкане	шка	NOUN	N	Case=Temp|Definite=Ind|Number=Plur,Sing	4	obl:tmod	_	GTtags=SP,TempCx,Indef
4	ютксонок	ютко	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=1	0	root	_	GTtags=Relator,Spat,Ine,PxPl1|SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


