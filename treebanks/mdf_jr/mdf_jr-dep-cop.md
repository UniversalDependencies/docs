---
layout: base
title:  'Statistics of cop in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `cop`

This relation is universal.

19 nodes (0%) are attached to their parents as `cop`.

13 instances of `cop` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.52631578947368.

The following 5 pairs of parts of speech are connected with `cop`: <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (7; 37% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (4; 21% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (3; 16% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (3; 16% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (2; 11% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	Касондярян	касомс	VERB	V	Derivation=Cond|Mood=Ind|Number[subj]=Sing|Person[subj]=1	4	advcl	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	_
3	улян	улемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres	4	cop	_	_
4	лётчикокс	лётчик	NOUN	N	Case=Tra|Definite=Ind|Number=Plur,Sing	0	root	_	SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
1	Кукшенец	кукшень	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	nsubj:cop	_	GTtags=Sg,Nom,PxSg3
2	ульсь	улемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	4	cop	_	GTtags=IV,Ind,Prt1,ScSg3
3	крайкс	край	NOUN	N	Case=Tra|Definite=Ind|Number=Plur,Sing	4	obl:lmod	_	GTtags=SP,Tra,Indef
4	пяшксе	пяшксе	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	_
5	иможда	имож	NOUN	N	Case=Abl|Definite=Ind|Number=Plur,Sing	4	obl	_	GTtags=SP,Abl,Indef|SpaceAfter=No
6	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Синь	сон	PRON	Pron	Case=Gen|Number=Plur|Person=3|PronType=Prs	0	root	_	CGdephead=#1-&gt;1|CGdeprel=@ADVL-habitive&gt;|GTtags=Pers,Pl3,Gen
2	ульсть	улемс	AUX	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|VerbForm=Fin	1	cop	_	CGdephead=#2-&gt;0|CGdeprel=@FMV|GTtags=Ind,Prt1,ScPl3
3	колма	колма	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	4	nummod	_	CGdephead=#3-&gt;4|CGdeprel=@&gt;N|GTtags=Card,Sg,Nom,Indef
4	церасна	цёра	NOUN	N	Case=Nom|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=3	1	nsubj	_	CGdephead=#4-&gt;2|CGdeprel=@SPRED|GTtags=SP,Nom,PxPl3|SpaceAfter=No
5	.	.	PUNCT	CLB	_	1	punct	_	CGdephead=#5-&gt;2|CGdeprel=@X|GTtags=CLB

~~~


