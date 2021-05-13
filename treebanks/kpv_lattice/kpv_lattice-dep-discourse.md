---
layout: base
title:  'Statistics of discourse in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `discourse`

This relation is universal.

15 nodes (0%) are attached to their parents as `discourse`.

11 instances of `discourse` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.4.

The following 10 pairs of parts of speech are connected with `discourse`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-INTJ.html">INTJ</a></tt> (4; 27% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (3; 20% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-INTJ.html">INTJ</a></tt> (1; 7% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-INTJ.html">INTJ</a></tt> (1; 7% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-INTJ.html">INTJ</a></tt> (1; 7% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 discourse	color:blue
1	Ставыс	став	PRON	Pron	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	nsubj	_	GTtags=Sg,Nom,PxSg3
2	мыйкӧ	мыйкӧ	INTJ	Interj	_	3	discourse	_	_
3	горзісны	горзыны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=IV,Ind,Prt1,Pl3|SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	_
5	вӧрӧдісны	вӧрӧдны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	3	conj	_	GTtags=TV,Ind,Prt1,Pl3
6	вомнас	вом	NOUN	N	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	obl	_	GTtags=Sg,Ins,PxSg3|SpaceAfter=No
7	...	...	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 discourse	color:blue
1	Чойыс	чой	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	nsubj	_	GTtags=Sg,Nom,PxSg3
2	регыд	регыд	ADV	Adv	_	4	advmod:tmod	_	_
3	и	и	ADV	Adv	_	2	discourse	_	_
4	лэччис	лэччыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=IV,Ind,Prt1,Sg3
5	карӧ	кар	NOUN	N	Case=Ill|Number=Sing	4	obl:lmod	_	GTtags=Sg,Ill|SpaceAfter=No
6	,	,	PUNCT	CLB	_	8	punct	_	_
7	бӧръя	бӧръя	ADJ	A	Case=Nom|Number=Sing	8	amod	_	GTtags=Sg,Nom
8	теплоходъяснас	теплоход	NOUN	N	Case=Ins|Number=Plur|Number[psor]=Sing|Person[psor]=3	4	obl	_	GTtags=Pl,Ins,PxSg3|SpaceAfter=No
9	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	Господи	господи	INTJ	Interj	_	4	discourse	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	_
3	кутшӧм	кутшӧм	ADJ	A	Case=Nom|Number=Sing|PronType=Rel	4	advmod:deg	_	GTtags=Rel,Sg,Nom
4	гажа	гажа	ADJ	A	Case=Nom|Number=Sing	0	root	_	GTtags=Sg,Nom
5	кыкӧныдлы	кыкӧн	NUM	Num	Case=Dat|Number=Sing|Number[psor]=Sing|NumType=Dist|Person[psor]=2	4	obl	_	GTtags=Dist,Sg,Dat,PxSg2|SpaceAfter=No
6	!	!	PUNCT	PUNCT	_	4	punct	_	_

~~~


