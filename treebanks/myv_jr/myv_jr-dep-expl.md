---
layout: base
title:  'Statistics of expl in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `expl`

This relation is universal.

9 nodes (0%) are attached to their parents as `expl`.

9 instances of `expl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.88888888888889.

The following 4 pairs of parts of speech are connected with `expl`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (4; 44% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (2; 22% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (2; 22% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-DET.html">DET</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 expl	color:blue
1	Те	те	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Dem	2	expl	_	GTtags=Dem,Sg,Nom,Indef
2	чартизе	чартямс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg3,OcSg3
3	прянзо	пря	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	obj	_	GTtags=Sem/Body_part,Sg,Gen,PxSg3
4	Вирьавась	Вирьава	NOUN	N	Case=Nom|Definite=Def|Number=Sing	2	nsubj	_	GTtags=Sem/Anim_Cnt,Sg,Nom,Def|SpaceAfter=No
5	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 expl	color:blue
1	Те	те	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Dem	3	expl	_	CGdephead=#1-&gt;1|CGdeprel=@&gt;N|GTtags=Dem,Sg,Nom,Indef
2	кода	кода	ADV	Adv	AdvType=Man|PronType=Int	3	advmod	_	CGdephead=#2-&gt;0|CGdeprel=@ADVL|GTtags=Interr,Manner
3	истя	истя	ADV	Adv	AdvType=Man	0	root	_	CGdephead=#3-&gt;0|CGdeprel=@ADVL|GTtags=Manner|SpaceAfter=No
4	?	?	PUNCT	CLB	_	3	punct	_	CGdephead=#4-&gt;2|CGdeprel=@CLB|GTtags=CLB

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 expl	color:blue
1	—	—	PUNCT	PUNCT	_	4	punct	_	_
2	Те	те	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Dem	4	expl	_	GTtags=Dem,Sg,Nom,Indef|Gloss=it
3	так	так	ADV	Adv	_	4	advmod	_	GTtags=|Gloss=let-me-see
4	плант	план	NOUN	N	Case=Nom|Definite=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres	0	root	_	GTtags=Pl,Nom,Indef|Gloss=plan|SpaceAfter=No
5	...	...	PUNCT	CLB	_	4	punct	_	_

~~~


