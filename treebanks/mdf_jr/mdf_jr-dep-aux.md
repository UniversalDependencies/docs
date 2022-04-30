---
layout: base
title:  'Statistics of aux in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `aux`

This relation is universal.
There are 5 language-specific subtypes of `aux`: <tt><a href="mdf_jr-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="mdf_jr-dep-aux-nec.html">aux:nec</a></tt>, <tt><a href="mdf_jr-dep-aux-neg.html">aux:neg</a></tt>, <tt><a href="mdf_jr-dep-aux-opt.html">aux:opt</a></tt>, <tt><a href="mdf_jr-dep-aux-q.html">aux:q</a></tt>.

5 nodes (0%) are attached to their parents as `aux`.

3 instances of `aux` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (2; 40% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 20% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 20% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Оду	оду	ADV	Adv	AdvType=Tim	3	advmod:tmod	_	GTtags=Sem/Time
2	савондяряй	савомс	AUX	_	Mood=Cnd|Number[subj]=Sing|Person[subj]=3	3	aux	_	GTtags=Cond,ScSg3
3	венцямс	венцямс	VERB	V	VerbForm=Inf	7	advcl	_	GTtags=Inf|SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	тонга	тон	PRON	Pron	Case=Nom|Clitic=AddGA|Number=Sing|Person=2|PronType=Prs	7	nsubj	_	GTtags=Pers,Sg2,Nom,Clt/Add
6	тяфта	тяфта	ADV	Adv	_	7	advmod	_	_
7	тик	тиемс	VERB	V	Mood=Imp|Number[subj]=Sing|Person[subj]=2	0	root	_	GTtags=Imprt,ScSg2
8	свадьбацень	свадьба	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=2	7	obj	_	GTtags=Sg,Gen,PxSg2|SpaceAfter=No
9	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Мехов	Мехов	PROPN	N	Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	3	nsubj:cop	_	GTtags=Prop,Sem/Mal-Sur,Sg,Nom,Indef
2	ульсь	улемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	3	aux	_	GTtags=IV,Ind,Prt1,ScSg3
3	оцю	оцю	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef
4	сереc	сереc	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	3	nmod	_	GTtags=SP,Ill,Indef|SpaceAfter=No
5	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux	color:blue
1	Школьнай	школьнай	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	3	amod	_	GTtags=Sg,Nom,Indef
2	фкя	фкя	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	3	nummod	_	GTtags=Card,Sg,Nom,Indef
3	комнатаса	комната	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	0	root	_	GTtags=SP,Ine,Indef
4	ульсь	улемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	3	aux	_	GTtags=IV,Ind,Prt1,ScSg3
5	эчке	эчке	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	6	amod	_	GTtags=Sg,Nom,Indef
6	доскаста	доска	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	7	obl	_	GTtags=SP,Ela,Indef
7	шавф	шавомс	VERB	V	Derivation=F|Valency=2|VerbForm=Part	8	advcl	_	GTtags=TV,PrfPrc
8	верстак	верстак	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	3	nsubj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
9	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


