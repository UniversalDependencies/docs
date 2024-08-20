---
layout: base
title:  'Statistics of flat:name in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="kpv_lattice-dep-flat-num.html">flat:num</a></tt>.

53 nodes (1%) are attached to their parents as `flat:name`.

53 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.13207547169811.

The following 4 pairs of parts of speech are connected with `flat:name`: <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (42; 79% instances), <tt><a href="kpv_lattice-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kpv_lattice-pos-PROPN.html">PROPN</a></tt> (8; 15% instances), <tt><a href="kpv_lattice-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	(	(	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No
2	Выль	выль	ADJ	A	Case=Nom|Number=Sing	0	root	_	_
3	олӧм	олӧм	NOUN	N	Case=Nom|Number=Sing	2	flat:name	_	_
4	колхоз	колхоз	NOUN	N	Case=Nom|Number=Sing	3	flat:name	_	OrigLang=ru|SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	председательыс	председатель	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	appos	_	OrigLang=ru
7	Калинин	Калинин	PROPN	N	Case=Nom|Number=Sing	6	nsubj	_	OrigLang=ru|SpaceAfter=No
8	)	)	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 flat:name	color:blue
1	А	а	CCONJ	CC	_	5	mark	_	GTtags=CC
2	вот	вот	ADV	Adv	_	5	advmod	_	GTtags=Adv,Parenthetic
3	тайӧ	тайӧ	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	4	det	_	GTtags=Pron,Dem,Sg,Nom
4	керкаясас	керка	NOUN	N	Case=Ine|Number=Plur|Number[psor]=Sing|Person[psor]=3	5	obl	_	GTtags=N,Pl,Ine,PxSg3
5	олісны	овны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=V,IV,Ind,Prt1,Pl3
6	кык	кык	NUM	Num	Case=Nom|Number=Sing|NumType=Card	7	nummod	_	GTtags=Num,Card,Sg,Nom
7	вок	вок	NOUN	N	Case=Nom|Number=Sing	5	nsubj	_	GTtags=N,Sg,Nom
8	—	—	PUNCT	PUNCT	_	9	punct	_	GTtags=PUNCT
9	Нетулика	Нетулика	PROPN	N	Animacy=Hum|Case=Nom|Number=Sing	7	appos	_	GTtags=N,Prop,Sem/Mal,Sg,Nom
10	Сеня	Сеня	PROPN	N	Animacy=Hum|Case=Nom|Number=Sing	9	flat:name	_	GTtags=N,Prop,Sem/Mal,Sg,Nom
11	да	да	CCONJ	CC	_	12	cc	_	GTtags=CC
12	Тулика	Тулика	PROPN	N	Animacy=Hum|Case=Nom|Number=Sing	9	conj	_	GTtags=N,Prop,Sem/Mal,Sg,Nom
13	Прокоп	Прокоп	PROPN	N	Animacy=Hum|Case=Nom|Number=Sing	12	flat:name	_	GTtags=N,Prop,Sem/Sur,Sg,Nom|SpaceAfter=No
14	.	.	PUNCT	CLB	_	5	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat:name	color:blue
1	Ыджыд	ыджыд	ADJ	A	Case=Nom|Number=Sing	2	amod	_	_
2	шуд	шуд	NOUN	N	Case=Nom|Number=Sing	0	root	_	_
3	миян	ми	PRON	Pron	Case=Gen|Number=Plur|Person=1|PronType=Prs	5	nmod	_	_
4	странаса	страна	NOUN	N	Case=Loc|Number=Sing	5	nmod:lmod	_	OrigLang=ru
5	томйӧзлӧн	томйӧзлӧн	NOUN	N	Case=Gen|Number=Sing	2	nmod	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	8	punct	_	_
7	кодъяс	коді	PRON	Pron	Case=Nom|Number=Plur|PronType=Int	8	nsubj	_	_
8	веськалӧны	веськавны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres	5	acl:relcl	_	_
9	Краснӧй	Краснӧй	PROPN	N	Case=Nom|Number=Sing	11	nmod	_	_
10	Армия	армия	NOUN	N	Case=Nom|Number=Sing	9	flat:name	_	OrigLang=ru
11	радӧ	рад	NOUN	N	Case=Ill|Number=Sing	8	obl:lmod	_	_
12	да	да	CCONJ	CC	_	13	cc	_	_
13	новлӧдлӧны	новлӧдлыны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres	8	conj	_	_
14	почетнӧй	почётнӧй	ADJ	A	Case=Nom|Number=Sing	15	amod	_	OrigLang=ru
15	ним	ним	NOUN	N	Case=Nom|Number=Sing	13	obj	_	_
16	–	–	PUNCT	PUNCT	_	20	punct	_	_
17	социализм	социализм	NOUN	N	Case=Nom|Number=Sing	18	nmod	_	OrigLang=ru
18	странаса	страна	NOUN	N	Case=Loc|Number=Sing	20	nmod:lmod	_	OrigLang=ru
19	великӧй	великӧй	ADJ	A	Case=Nom|Number=Sing	20	amod	_	OrigLang=ru
20	воинлысь	воин	NOUN	N	Case=Abl|Number=Sing	21	nmod	_	OrigLang=ru
21	ним	ним	NOUN	N	Case=Nom|Number=Sing	15	parataxis	_	SpaceAfter=No
22	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


