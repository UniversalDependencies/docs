---
layout: base
title:  'Statistics of obl:tmod in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="myv_jr-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="myv_jr-dep-obl-lmod.html">obl:lmod</a></tt>.

44 nodes (0%) are attached to their parents as `obl:tmod`.

34 instances of `obl:tmod` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.20454545454545.

The following 8 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (19; 43% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (17; 39% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (3; 7% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="myv_jr-pos-ADP.html">ADP</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 2% instances).


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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 obl:tmod	color:blue
1	Омбоце	кавто	ADJ	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Ord	2	amod	_	GTtags=Ord
2	недля	недля	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	5	obl:tmod	_	GTtags=Sg,Nom,Indef
3	Дёбаень	Дёбай	PROPN	N	Case=Gen|Definite=Ind|NameType=Hom|Number=Plur,Sing	4	nmod	_	GTtags=Sem/Sur,Prop,SP,Gen,Indef
4	Микол	Микол	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|Gender=Masc|NameType=Giv|Number=Sing	5	nsubj	_	GTtags=Ant_Mal,Prop,Sg,Nom,Indef
5	тайгасо	тайга	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	0	root	_	GTtags=SP,Ine,Indef|SpaceAfter=No
6	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


