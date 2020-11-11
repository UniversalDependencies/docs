---
layout: base
title:  'Statistics of discourse in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `discourse`

This relation is universal.

15 nodes (0%) are attached to their parents as `discourse`.

8 instances of `discourse` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.46666666666667.

The following 7 pairs of parts of speech are connected with `discourse`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (5; 33% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-INTJ.html">INTJ</a></tt> (3; 20% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (2; 13% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (2; 13% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-INTJ.html">INTJ</a></tt> (1; 7% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 discourse	color:blue
1	И	и	CCONJ	CC	_	5	cc	_	_
2	еджыд	еджыд	ADJ	A	Case=Nom|Number=Sing	3	amod	_	GTtags=Sg,Nom
3	чериыс	чери	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	GTtags=Sg,Nom,PxSg3
4	чукӧра	чукӧр	NOUN	N	Case=Nom|Derivation=ProprietiveMod|Number=Sing	5	obl	_	GTtags=Sg,Der,Der/ProprietiveMod,A,Sg,Nom
5	олӧ	овны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Valency=1	0	root	_	GTtags=IV,Ind,Prs,Sg3|SpaceAfter=No
6	,	,	PUNCT	CLB	_	9	punct	_	_
7	кульмыны	кульмыны	VERB	V	Valency=1|VerbForm=Inf	9	xcomp	_	GTtags=IV,Inf
8	жӧ	жӧ	ADV	Adv	_	7	discourse	_	GTtags=Parenthetic
9	лӧсьӧдчӧ	лӧсьӧдчыны	VERB	V	Mood=Ind|Number=Sing|Person=3|PronType=Ref|Tense=Pres	5	conj	_	GTtags=Refl,Ind,Prs,Sg3
10	да	да	SCONJ	CS	_	9	mark	_	SpaceAfter=No
11	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 discourse	color:blue
1	Ставыс	став	PRON	Pron	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	nsubj	_	GTtags=Sg,Nom,PxSg3
2	мыйкӧ	мыйкӧ	INTJ	Interj	_	3	discourse	_	_
3	горзісны	горзыны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,Pl3|SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	_
5	вӧрӧдісны	вӧрӧдны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|Valency=2	3	conj	_	GTtags=TV,Ind,Prt1,Pl3
6	вомнас	вом	NOUN	N	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	obl	_	GTtags=Sg,Ins,PxSg3|SpaceAfter=No
7	...	...	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 discourse	color:blue
1	Мӧдыс	мӧд	PRON	Pron	Case=Nom|Number=Sing|Number[psor]=Sing|NumType=Ord|Person[psor]=3	2	nsubj	_	GTtags=Det,Ord,Sg,Nom,PxSg3
2	пукаліс	пукавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,Sg3
3	век	век	ADV	Adv	_	2	advmod	_	_
4	сідз	сідзи	ADV	Adv	AdvType=Man	2	advmod	_	GTtags=Manner
5	жӧ	жӧ	ADV	Adv	_	4	discourse	_	GTtags=Parenthetic
6	юрсӧ	юр	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	obj	_	GTtags=Sg,Acc,PxSg3
7	сайӧдӧмӧн	сайӧдны	VERB	V	Case=Ins|Derivation=Vnoun|Number=Sing|Valency=2	2	advcl	_	GTtags=TV,Der,Der/ӧм,Der/NomAct,N,Sg,Ins|SpaceAfter=No
8	,	,	PUNCT	CLB	_	11	punct	_	_
9	гусьӧн	гусьӧн	ADV	Adv	Case=Ins	11	advmod	_	GTtags=Ins
10	мыйкӧ	мыйкӧ	PRON	Pron	Case=Nom|Definite=Ind|Derivation=Ko|Number=Sing|PronType=Ind	11	obj	_	GTtags=Indef,Indef,Sg,Nom,Der/кӧ
11	вашкӧдіс	вашкӧдны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=2	2	conj	_	GTtags=TV,Ind,Prt1,Sg3|SpaceAfter=No
12	,	,	PUNCT	CLB	_	15	punct	_	_
13	сэсся	сэсся	ADV	Adv	_	15	advmod:tmod	_	_
14	сьӧкыда	сьӧкыда	ADV	Adv	_	15	advmod:mmod	_	_
15	ышловзис	ышловзьыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=1	2	conj	_	GTtags=IV,Ind,Prt1,Sg3|SpaceAfter=No
16	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


