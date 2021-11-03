---
layout: base
title:  'Statistics of xcomp in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `xcomp`

This relation is universal.

66 nodes (2%) are attached to their parents as `xcomp`.

51 instances of `xcomp` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.98484848484848.

The following 9 pairs of parts of speech are connected with `xcomp`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (39; 59% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (13; 20% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (5; 8% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 xcomp	color:blue
1	Сяльде	сяльде	ADV	Adv	_	5	advmod:tmod	_	_
2	мялезень	мяль	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	obj	_	_
3	петемс	петемс	VERB	V	Valency=2|VerbForm=Inf	5	xcomp	_	_
4	сон	сон	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
5	рамась	рамамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	0	root	_	_
6	самолёткя	самолёт	NOUN	N	Case=Nom|Definite=Ind|Derivation=Dimin|Number=Sing	5	obj	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp	color:blue
1	Сон	сон	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	симсь	симомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg3
3	чайда	чай	NOUN	N	Case=Abl|Definite=Ind|Number=Plur,Sing	2	obj	_	GTtags=SP,Abl,Indef
4	—	—	PUNCT	PUNCT	_	6	punct	_	_
5	ведняське	ведь	NOUN	N	Case=Nom|Clitic=AddGA|Definite=Def|Derivation=Dimin|Number=Sing	6	nsubj	_	GTtags=Der/Dimin,N,Sg,Nom,Def,Foc
6	марявсь	марявомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	2	conj	_	GTtags=IV,Ind,Prt1,ScSg3
7	танцти	танцти	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	8	amod	_	GTtags=Sg,Nom,Indef
8	симомбялькс	симомбяль	NOUN	N	Case=Tra|Definite=Ind|Number=Plur,Sing	6	xcomp	_	GTtags=SP,Tra,Indef|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 xcomp	color:blue
1	Лядыхне	лядомс	VERB	V	Case=Nom|Definite=Def|Derivation=NomAg|Number=Plur	2	nsubj	_	GTtags=NomAg,Pl,Nom,Def
2	ащесть	ащемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,ScPl3
3	оцюняснон	оцюня	ADJ	A	Case=Gen|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=3	2	obl:lmp	_	GTtags=SP,Gen,PxPl3
4	перьф	перьф	ADV	Adv	_	3	case	_	_
5	озада	озада	ADV	Adv	_	2	xcomp	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


