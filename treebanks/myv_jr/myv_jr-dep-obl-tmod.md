---
layout: base
title:  'Statistics of obl:tmod in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-obl.html">obl</a></tt>.
There are also 7 other language-specific subtypes of `obl`: <tt><a href="myv_jr-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="myv_jr-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="myv_jr-dep-obl-inst.html">obl:inst</a></tt>, <tt><a href="myv_jr-dep-obl-lfrom.html">obl:lfrom</a></tt>, <tt><a href="myv_jr-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="myv_jr-dep-obl-lmp.html">obl:lmp</a></tt>, <tt><a href="myv_jr-dep-obl-lto.html">obl:lto</a></tt>.

59 nodes (0%) are attached to their parents as `obl:tmod`.

48 instances of `obl:tmod` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.35593220338983.

The following 6 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (32; 54% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (19; 32% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (4; 7% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 obl:tmod	color:blue
1	Инечис	инечи	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	7	obl:tmod	_	GTtags=Sem/Inanim_Cnt,SP,Ill,Indef|SpaceAfter=No
2	,	,	PUNCT	CLB	_	5	punct	_	_
3	од	од	ADJ	A	_	4	amod	_	_
4	иень	ие	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	5	nmod:gsubj	_	GTtags=Sem/Time,SP,Gen,Indef
5	самс	самс	VERB	V	VerbForm=Inf	1	appos	_	GTtags=Inf|SpaceAfter=No
6	,	,	PUNCT	CLB	_	5	punct	_	_
7	чавт-кундсек	чавомс-кундсемс	VERB	V	Mood=Imp|Number[subj]=Sing|Person[subj]=2|Valency=1	0	root	_	GTtags=IV,Imprt,ScSg2
8	эйсэст	эйсэ	ADP	Adp	Case=Ine|Number[psor]=Plur|Person[psor]=3	7	obj	_	GTtags=Ine,PxPl3|SpaceAfter=No
9	.	.	PUNCT	CLB	_	7	punct	_	_

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
4	кеместэ	кеместэ	ADV	Adv	_	5	advmod:mmod	_	_
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
3	шкане	шка	NOUN	N	Case=Tem|Definite=Ind|Number=Plur,Sing	4	obl:tmod	_	GTtags=SP,TempCx,Indef
4	ютксонок	ютко	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=1	0	root	_	GTtags=Relator,Spat,Ine,PxPl1|SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


