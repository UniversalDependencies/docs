---
layout: base
title:  'Statistics of vocative in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `vocative`

This relation is universal.

5 nodes (0%) are attached to their parents as `vocative`.

4 instances of `vocative` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.

The following 2 pairs of parts of speech are connected with `vocative`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (4; 80% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 vocative	color:blue
1	Панчк-ка	панжемс	VERB	V	Mood=Prec|Number[subj]=Sing|Person[subj]=2|Valency=2	0	root	_	GTtags=TV,Imprt,ScSg2
2	вальмять	вальмя	NOUN	N	Case=Gen|Definite=Def|Number=Sing	1	obj	_	GTtags=Sg,Gen,Def|SpaceAfter=No
3	,	,	PUNCT	CLB	_	4	punct	_	_
4	Самсон	Самсон	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	1	vocative	_	GTtags=Prop,Sem/Mal,Sg,Nom,Indef|SpaceAfter=No
5	!	!	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 vocative	color:blue
1	Шумбрат	шумбра	ADJ	A	Case=Nom|Definite=Ind|Number=Sing|Number[subj]=Sing|Person[subj]=2|Tense=Pres	5	discourse	_	CGdephead=#1-&gt;0|CGdeprel=@PRED|GTtags=Sg,Nom,Indef,Clt/Cop,Prs,ScSg2|SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	CGdephead=#2-&gt;1|CGdeprel=@CLB|GTtags=CLB
3	атяй	атя	NOUN	N	_	5	vocative	_	CGdephead=#3-&gt;3|CGdeprel=@ADDR|GTtags=Voc|SpaceAfter=No
4	,	,	PUNCT	CLB	_	3	punct	_	CGdephead=#4-&gt;3|CGdeprel=@CLB|GTtags=CLB
5	ськамот	ськамонза	PRON	Pron	Number[psor]=Sing|Person[psor]=2	0	root	_	CGdephead=#5-&gt;0|CGdeprel=@X|GTtags=Exclusive,PerifMod,PxSg2
6	што	што	SCONJ	CS	_	5	parataxis	_	CGdephead=#6-&gt;6|CGdeprel=@SC|GTtags=
7	ли	ли	AUX	_	_	6	fixed	_	CGdephead=#7-&gt;7|CGdeprel=@&lt;QST|GTtags=Use/SpellNoSugg,Pcle,Qst|SpaceAfter=No
8	?	?	PUNCT	CLB	_	5	punct	_	_

~~~


