---
layout: base
title:  'Statistics of obl:lmod in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `obl:lmod`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="kpv_lattice-dep-obl-tmod.html">obl:tmod</a></tt>.

147 nodes (3%) are attached to their parents as `obl:lmod`.

80 instances of `obl:lmod` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.49659863945578.

The following 7 pairs of parts of speech are connected with `obl:lmod`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (135; 92% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (4; 3% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obl:lmod	color:blue
1	Питер	Питер	PROPN	N	Case=Nom|Number=Sing	4	nsubj	_	Lang=Mixed
2	да	да	CCONJ	CC	_	3	cc	_	Lang=Mixed
3	Мери	Мери	PROPN	N	Case=Nom|Number=Sing	1	conj	_	Lang=Mixed
4	кутчысьлісны	кутчысьлыны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	_
5	да	да	CCONJ	CC	_	6	cc	_	Lang=Mixed
6	петісны	петны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	4	conj	_	_
7	вежӧсысь	вежӧс	NOUN	N	Case=Ela|Number=Sing	6	obl:lmod	_	SpaceAfter=No
8	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 obl:lmod	color:blue
1	Лун	лун	NOUN	N	Case=Nom|Number=Sing	2	nmod	_	_
2	шӧр	шӧр	NOUN	N	Case=Nom|Number=Sing	3	nmod	_	_
3	кадланьыс	кад	NOUN	N	Case=Apr|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	obl:tmod	_	_
4	нин	нин	ADV	Adv	_	7	advmod:tmod	_	_
5	кыськӧ	кысь	ADV	Adv	Case=Ela	7	obl:lmod	_	_
6	шур-шар	шур-шар	ADV	Adv	_	7	advmod	_	_
7	воис	воны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
8	неыджыд	неыджыд	ADJ	A	Case=Nom|Number=Sing|Polarity=Neg	9	amod	_	_
9	тӧвру	тӧвру	NOUN	N	Case=Nom|Number=Sing	7	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 obl:lmod	color:blue
1	Война	война	NOUN	N	Case=Nom|Number=Sing	5	obl:lmod	_	_
2	вылын	вылын	ADP	Po	Case=Ine|Number=Sing	1	case	_	_
3	татшӧм	татшӧм	DET	Det	Case=Nom|Number=Sing|PronType=Dem	4	det	_	_
4	гӧгӧрвотӧмыс	гӧгӧрвоны	VERB	V	Number[psor]=Sing|Person[psor]=3|Polarity=Neg|Tense=Past|VerbForm=Part	5	csubj	_	_
5	лёкджык	лёк	ADJ	A	Case=Nom|Degree=Cmp|Number=Sing	0	root	_	_
6	медся	медся	ADV	Adv	_	7	advmod:deg	_	_
7	ён	ён	ADJ	A	Case=Nom|Number=Sing	8	amod	_	_
8	бойысь	бой	NOUN	N	Case=Ela|Number=Sing	5	nmod:comp	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


