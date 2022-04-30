---
layout: base
title:  'Statistics of obl:inst in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `obl:inst`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-obl.html">obl</a></tt>.
There are also 7 other language-specific subtypes of `obl`: <tt><a href="myv_jr-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="myv_jr-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="myv_jr-dep-obl-lfrom.html">obl:lfrom</a></tt>, <tt><a href="myv_jr-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="myv_jr-dep-obl-lmp.html">obl:lmp</a></tt>, <tt><a href="myv_jr-dep-obl-lto.html">obl:lto</a></tt>, <tt><a href="myv_jr-dep-obl-tmod.html">obl:tmod</a></tt>.

71 nodes (0%) are attached to their parents as `obl:inst`.

45 instances of `obl:inst` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.80281690140845.

The following 6 pairs of parts of speech are connected with `obl:inst`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (66; 93% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 obl:inst	color:blue
1	―	―	PUNCT	PUNCT	_	2	punct	_	_
2	Цяпасть	цяпамс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScPl3
3	куватьс	куватьс	ADV	Adv	AdvType=Tim|Case=Ill	2	advmod:tmod	_	GTtags=Temp,Ill
4	кедь	кедь	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	5	compound	_	GTtags=Hom1,Sg,Nom,Indef
5	ладошкасост	ладошка	NOUN	N	Case=Ine|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=3	2	obl:inst	_	GTtags=SP,Ine,PxPl3|SpaceAfter=No
6	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:inst	color:blue
1	Улить	улемс	AUX	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres|Valency=1	0	root	_	GTtags=IV,Ind,Prs,ScPl3
2	эщо	ещё	ADV	Adv	AdvType=Tim	1	advmod:tmod	_	GTtags=Err/Lex,Sem/Time
3	сокасо	сока	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	4	obl:inst	_	GTtags=SP,Ine,Indef
4	сокицяноккак	сокиця	NOUN	N	Case=Nom|Clitic=Add|Number=Plur|Number[psor]=Plur|Person[psor]=1	1	nsubj	_	GTtags=Pl,Nom,PxPl1,Add|SpaceAfter=No
5	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 obl:inst	color:blue
1	Любань	Люба	PROPN	N	Animacy=Hum|Case=Gen|Definite=Ind|Gender=Fem|NameType=Giv|Number=Plur,Sing	3	nmod	_	GTtags=Ant_Fem,Prop,SP,Gen,Indef
2	вейке	вейке	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	3	nummod	_	GTtags=Card,Sg,Nom,Indef
3	кедезэ	кедь	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	nsubj	_	GTtags=Sg,Nom,PxSg3
4	кундазь	кундамс	VERB	V	Derivation=Ozj|Valency=2|VerbForm=Conv	0	root	_	GTtags=TV,Der/Озь,Ger
5	седланть	седла	NOUN	N	Case=Gen|Definite=Def|Number=Sing	7	nmod	_	GTtags=Sg,Gen,Def
6	удалсе	удалце	ADJ	Det	Case=Nom|Definite=Ind|Number=Sing|Style=Arch	7	amod	_	GTtags=Dem|ModernForm=удалце
7	лукантень	лукантень	NOUN	N	Case=Dat|Definite=Def|Number=Sing	4	obl	_	GTtags=Sg,Dat,Def|SpaceAfter=No
8	,	,	PUNCT	CLB	_	12	punct	_	_
9	омбоцесэнть	омбоце	ADJ	Num	Case=Ine|Definite=Def|Number=Sing|NumType=Ord	12	obl:inst	_	GTtags=Ord,Sg,Ine,Def
10	секе	секе	ADV	Adv	_	12	advmod	_	GTtags=Attr
11	тев	тев	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	10	fixed	_	GTtags=Sg,Nom,Indef
12	лепштясь	лепштямс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=2	4	conj	_	GTtags=TV,Ind,Prt1,ScSg3
13	пекенть	пеке	NOUN	N	Case=Gen|Definite=Def|Number=Sing	12	obj	_	GTtags=Sg,Gen,Def|SpaceAfter=No
14	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


