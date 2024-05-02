---
layout: base
title:  'Statistics of root in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `root`

This relation is universal.

663 nodes (8%) are attached to their parents as `root`.

663 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.64102564102564.

The following 8 pairs of parts of speech are connected with `root`: -<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (521; 79% instances), -<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (54; 8% instances), -<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (51; 8% instances), -<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (23; 3% instances), -<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (8; 1% instances), -<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (3; 0% instances), -<tt><a href="kpv_lattice-pos-INTJ.html">INTJ</a></tt> (2; 0% instances), -<tt><a href="kpv_lattice-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Бур	бур	ADJ	A	Case=Nom|Number=Sing	2	amod	_	_
2	урожай	урожай	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	OrigLang=ru
3	воис	воны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
4	таво	таво	ADV	Adv	_	3	advmod:tmod	_	_
5	миян	ми	PRON	Pron	Case=Gen|Number=Plur|Person=1|PronType=Prs	7	nmod	_	_
6	районувса	районувса	ADJ	A	Case=Nom|Number=Sing	7	amod	_	OrigLang=ru
7	колхозъясын	колхоз	NOUN	N	Case=Ine|Number=Plur	3	obl:lmod	_	OrigLang=ru|SpaceAfter=No
8	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	Урожай	урожай	NOUN	N	Case=Nom|Number=Sing	2	nmod:obj	_	OrigLang=ru
2	идралӧм	идравны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	4	csubj	_	_
3	–	–	PUNCT	PUNCT	_	4	punct	_	_
4	удж	удж	NOUN	N	Case=Nom|Number=Sing	0	root	_	_
5	сезоннӧй	сезоннӧй	ADJ	A	Case=Nom|Number=Sing	4	amod	_	OrigLang=ru|SpaceAfter=No
6	,	,	PUNCT	CLB	_	9	punct	_	_
7	сійӧ	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
8	оз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Pres	9	aux:neg	_	_
9	виччысь	виччыны	VERB	V	Connegative=Yes	5	conj	_	_
10	некутшӧм	некутшӧм	ADJ	A	Case=Nom|Number=Sing|Polarity=Neg	11	amod	_	_
11	нюжмасьӧм	нюжмасьны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	9	obj	_	SpaceAfter=No
12	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
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


