---
layout: base
title:  'Statistics of parataxis in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `parataxis`

This relation is universal.

23 nodes (1%) are attached to their parents as `parataxis`.

19 instances of `parataxis` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.65217391304348.

The following 7 pairs of parts of speech are connected with `parataxis`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (17; 74% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-SCONJ.html">SCONJ</a></tt> (1; 4% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 parataxis	color:blue
1	Кода	кода	ADV	_	_	2	advmod:mmod	_	_
2	арьсят	арьсемс	VERB	_	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres	0	root	_	GTtags=TV,Ind,Prs,ScSg2|SpaceAfter=No
3	,	,	PUNCT	CLB	_	6	punct	_	_
4	мзярда	мзярда	ADV	_	AdvType=Tim	6	advmod:tmod	_	_
5	тон	тон	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	6	nsubj	_	GTtags=Pers,Sg2,Nom
6	сават	савомс	VERB	_	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres	2	parataxis	_	GTtags=IV,Ind,Prs,ScSg2|SpaceAfter=No
7	?	?	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 parataxis	color:blue
1	Велень	веле	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	2	nmod	_	GTtags=SP,Gen,Indef
2	стирьхне	стирь	NOUN	N	Case=Nom|Definite=Def|Number=Plur	8	nsubj:cop	_	GTtags=Pl,Nom,Def|SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	5	punct	_	_
4	тонцьке	тонць	PRON	Pron	Case=Nom|Clitic=AddGA|Number=Sing|Person=2|PronType=Prs|Reflex=Yes	5	nsubj	_	GTtags=Refl,Sg2,Nom,Clt/Add
5	содасак	содамс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=2|Tense=Pres|VerbForm=Fin	8	parataxis	_	GTtags=Ind,Prs,ScSg2,OcSg3|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	5	punct	_	_
7	кодама	кодама	ADJ	A	Case=Nom|Definite=Ind|Number=Sing|PronType=Int	8	advmod:deg	_	GTtags=Interr,Sg,Nom,Indef
8	мазыхть	мазы	ADJ	A	Case=Nom|Definite=Ind|Number=Plur	0	root	_	GTtags=Pl,Nom,Indef
9	и	и	CCONJ	CC	_	11	cc	_	_
10	тевонь	тев	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	11	obj	_	GTtags=SP,Gen,Indef
11	кельгихть	кельгомс	VERB	V	Case=Nom|Definite=Ind|Derivation=NomAg|Number=Plur	8	conj	_	GTtags=NomAg,Pl,Nom,Indef|SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 parataxis	color:blue
1	Шумбрат	шумбра	ADJ	A	Case=Nom|Definite=Ind|Number=Sing|Number[subj]=Sing|Person[subj]=2|Tense=Pres	5	discourse	_	CGdephead=#1-&gt;0|CGdeprel=@PRED|GTtags=Sg,Nom,Indef,Clt/Cop,Prs,ScSg2|SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	CGdephead=#2-&gt;1|CGdeprel=@CLB|GTtags=CLB
3	атяй	атя	NOUN	N	_	5	vocative	_	CGdephead=#3-&gt;3|CGdeprel=@ADDR|GTtags=Voc|SpaceAfter=No
4	,	,	PUNCT	CLB	_	3	punct	_	CGdephead=#4-&gt;3|CGdeprel=@CLB|GTtags=CLB
5	ськамот	ськамот	PRON	Pron	Number[psor]=Sing|Person[psor]=2	0	root	_	CGdephead=#5-&gt;0|CGdeprel=@X|GTtags=Exclusive,PerifMod,PxSg2
6	што	што	SCONJ	CS	_	5	parataxis	_	CGdephead=#6-&gt;6|CGdeprel=@SC|GTtags=
7	ли	ли	AUX	_	_	6	fixed	_	CGdephead=#7-&gt;7|CGdeprel=@&lt;QST|GTtags=Use/SpellNoSugg,Pcle,Qst|SpaceAfter=No
8	?	?	PUNCT	CLB	_	5	punct	_	_

~~~


