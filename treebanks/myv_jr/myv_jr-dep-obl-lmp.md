---
layout: base
title:  'Statistics of obl:lmp in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `obl:lmp`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-obl.html">obl</a></tt>.
There are also 7 other language-specific subtypes of `obl`: <tt><a href="myv_jr-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="myv_jr-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="myv_jr-dep-obl-inst.html">obl:inst</a></tt>, <tt><a href="myv_jr-dep-obl-lfrom.html">obl:lfrom</a></tt>, <tt><a href="myv_jr-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="myv_jr-dep-obl-lto.html">obl:lto</a></tt>, <tt><a href="myv_jr-dep-obl-tmod.html">obl:tmod</a></tt>.

93 nodes (1%) are attached to their parents as `obl:lmp`.

53 instances of `obl:lmp` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.2258064516129.

The following 7 pairs of parts of speech are connected with `obl:lmp`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (80; 86% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (5; 5% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADP.html">ADP</a></tt> (4; 4% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 obl:lmp	color:blue
1	Тарадтнэ	тарад	NOUN	N	Case=Nom|Definite=Def|Number=Plur	5	nsubj	_	GTtags=Pl,Nom,Def
2	апак	апак	AUX	Pcle	Polarity=Neg	3	aux:neg	_	GTtags=Neg
3	жаля	жалямс	VERB	V	Connegative=Yes|Valency=2	5	advcl	_	GTtags=TV,ConNeg|SpaceAfter=No
4	,	,	PUNCT	CLB	_	3	punct	_	_
5	риштьнесть	риштнемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScPl3
6	Любань	Люба	PROPN	N	Animacy=Hum|Case=Gen|Definite=Ind|Gender=Fem|NameType=Giv|Number=Plur,Sing	5	obj	_	GTtags=Ant_Fem,Prop,SP,Gen,Indef
7	чама	чама	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	8	nmod	_	GTtags=Sg,Nom,Indef
8	ланга	ланго	NOUN	N	Case=Prl|Definite=Ind|Number=Plur,Sing	5	obl:lmp	_	GTtags=Relator,Prl|SpaceAfter=No
9	,	,	PUNCT	CLB	_	10	punct	_	_
10	сельме	сельме	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	11	nmod	_	GTtags=Sg,Nom,Indef
11	ланга	ланго	NOUN	N	Case=Prl|Definite=Ind|Number=Plur,Sing	5	obl:lmp	_	GTtags=Relator,Prl|SpaceAfter=No
12	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl:lmp	color:blue
1	Перть	перть	ADJ	A	_	2	compound	_	_
2	пельга	пельга	ADV	Adv	AdvType=Loc|Case=Prl	4	obl:lmp	_	GTtags=Spat,Prl
3	кашт	кашт	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	4	nsubj	_	GTtags=Sg,Nom,Indef
4	моли	молемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	0	root	_	GTtags=IV,Ind,Prs,ScSg3|SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl:lmp	color:blue
1	Вакскан	вакска	ADP	Adp	Case=Prl|Number[psor]=Sing|Person[psor]=1	2	obl:lmp	_	GTtags=Relator,Prl,PxSg1
2	ютыцясь	ютамс	VERB	V	Case=Nom|Definite=Def|Derivation=VerbYcja|Number=Sing	4	nsubj	_	GTtags=NomAg,Sg,Nom,Def
3	курок	курок	ADV	Adv	AdvType=Tim	4	advmod:tmod	_	GTtags=Sem/Time
4	ёматотсь	ёматомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,ScSg3
5	лепеденть	лепе	NOUN	N	Case=Abl|Definite=Def|Number=Sing	6	nmod:comp	_	GTtags=Sg,Abl,Def
6	авасоло	авасоло	ADV	Adv	AdvType=Loc|Case=Loc	7	advmod:lmod	_	GTtags=Adv,Spat,Loc
7	касыця	касомс	VERB	V	Case=Nom|Definite=Ind|Derivation=VerbYcja|Number=Sing	10	acl	_	GTtags=NomAg,Sg,Nom,Indef
8	сэрей	сэрей	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	10	amod	_	GTtags=Sg,Nom,Indef
9	каль	каль	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	10	nmod	_	GTtags=Sg,Nom,Indef
10	куротнень	куро	NOUN	N	Case=Gen|Definite=Def|Number=Plur	11	nmod	_	GTtags=Pl,Gen,Def
11	экшс	экш	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	4	obl:lto	_	GTtags=Relator,SP,Ill,Indef|SpaceAfter=No
12	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


