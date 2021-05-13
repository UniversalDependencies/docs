---
layout: base
title:  'Statistics of cc:preconj in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-cc.html">cc</a></tt>.

6 nodes (0%) are attached to their parents as `cc:preconj`.

6 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16666666666667.

The following 3 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-CCONJ.html">CCONJ</a></tt> (4; 67% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-CCONJ.html">CCONJ</a></tt> (1; 17% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-CCONJ.html">CCONJ</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc:preconj	color:blue
1	Эз	оз	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	3	aux:neg	_	_
2	позь	позьны	AUX	V	Connegative=Yes	3	aux:pot	_	_
3	бӧрйыны	бӧрйыны	VERB	V	VerbForm=Inf	0	root	_	_
4	ни	ни	CCONJ	CC	Polarity=Neg	5	cc:preconj	_	_
5	Питер	Питер	NOUN	N	Case=Nom|Number=Sing	3	obj	_	OrigLang=ru
6	Смитӧс	Смит	NOUN	N	Case=Acc|Number=Sing	5	flat:name	_	OrigLang=ru|SpaceAfter=No
7	,	,	PUNCT	CLB	_	9	punct	_	_
8	ни	ни	CCONJ	CC	Polarity=Neg	9	cc:preconj	_	_
9	Мери	Мери	NOUN	N	Case=Nom|Number=Sing	5	conj	_	OrigLang=ru
10	Браунӧс	Браун	NOUN	N	Case=Acc|Number=Sing	9	flat:name	_	OrigLang=ru|SpaceAfter=No
11	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc:preconj	color:blue
1	Кымын	кымын	CCONJ	CC	_	2	cc:preconj	_	_
2	ичӧтджык	ичӧт	ADJ	A	Case=Nom|Degree=Cmp|Number=Sing	0	root	_	GTtags=Comp,Sg,Nom
3	пызаныд	пызан	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	2	nsubj:cop	_	GTtags=Sg,Nom,PxSg2|SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	7	punct	_	_
5	сымын	сымын	CCONJ	CC	_	7	cc	_	_
6	озырджыкӧн	озыр	ADJ	A	Case=Ins|Degree=Cmp|Number=Sing	7	xcomp	_	GTtags=Comp,Sg,Ins
7	кажитчӧ	кажитчӧ	VERB	Adv	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	advcl:eval	_	GTtags=Parenthetic
8	пызан	пызан	NOUN	N	Case=Nom|Number=Sing	9	compound	_	GTtags=Sg,Nom
9	вылыд	выв	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	7	conj	_	GTtags=Relat,Sg,Nom,PxSg2|SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc:preconj	color:blue
1	Ни	ни	CCONJ	CC	Polarity=Neg	2	cc:preconj	_	_
2	горзӧмъяс	горзыны	VERB	V	Case=Nom|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	5	punct	_	_
4	ни	ни	CCONJ	CC	Polarity=Neg	5	cc	_	_
5	лыйсьӧмъяс	лыйсьыны	VERB	V	Case=Nom|Number=Plur|Tense=Past|VerbForm=Part	2	conj	_	SpaceAfter=No
6	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


