---
layout: base
title:  'Statistics of obl:lmod in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `obl:lmod`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-obl.html">obl</a></tt>.
There are also 7 other language-specific subtypes of `obl`: <tt><a href="myv_jr-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="myv_jr-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="myv_jr-dep-obl-inst.html">obl:inst</a></tt>, <tt><a href="myv_jr-dep-obl-lfrom.html">obl:lfrom</a></tt>, <tt><a href="myv_jr-dep-obl-lmp.html">obl:lmp</a></tt>, <tt><a href="myv_jr-dep-obl-lto.html">obl:lto</a></tt>, <tt><a href="myv_jr-dep-obl-tmod.html">obl:tmod</a></tt>.

112 nodes (1%) are attached to their parents as `obl:lmod`.

65 instances of `obl:lmod` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.0625.

The following 12 pairs of parts of speech are connected with `obl:lmod`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (85; 76% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (8; 7% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADP.html">ADP</a></tt> (5; 4% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="myv_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-NUM.html">NUM</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:lmod	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obl:lmod	color:blue
1	Коштось	кошт	NOUN	N	Case=Nom|Definite=Def|Number=Sing	5	nsubj	_	GTtags=Sem/Inanim_Cnt,Sg,Nom,Def
2	пертьпелькссэнть	пертьпелькс	NOUN	N	Case=Ine|Definite=Def|Number=Sing	1	obl:lmod	_	GTtags=Sem/Inanim_Cnt,Sg,Ine,Def
3	—	—	PUNCT	CLB	_	5	punct	_	_
4	теке	теке	ADV	Adv	_	5	advmod	_	_
5	медьарво	медьарво	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sem/Inanim_Cnt,Sg,Nom,Indef|SpaceAfter=No
6	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obl:lmod	color:blue
1	Пешкедсь	пешкедемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,ScSg3
2	вакссон	вакссо	ADP	Adp	Case=Ine|Number[psor]=Sing|Person[psor]=1	1	obl:lmod	_	GTtags=Relator,Ine,PxSg1
3	цёковдо	цёков	NOUN	N	Case=Abl|Definite=Ind|Number=Plur,Sing	1	obl	_	GTtags=SP,Abl,Indef
4	садпиресь	садпире	NOUN	N	Case=Nom|Definite=Def|Number=Sing	1	nsubj	_	GTtags=Sg,Nom,Def|SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	нолси	нолсемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres	1	conj	_	GTtags=Ind,Prs,ScSg3
7	чамам	чама	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	6	obj	_	GTtags=Sg,Gen,PxSg1
8	налксиця	налксемс	VERB	V	Case=Nom|Definite=Ind|Derivation=VerbYcja|Number=Sing	9	acl	_	GTtags=NomAg,Sg,Nom,Indef
9	вармась	варма	NOUN	N	Case=Nom|Definite=Def|Number=Sing	6	nsubj	_	GTtags=Sg,Nom,Def|SpaceAfter=No
10	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


