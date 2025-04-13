---
layout: base
title:  'Statistics of advcl in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `advcl`

This relation is universal.
There are 3 language-specific subtypes of `advcl`: <tt><a href="kpv_lattice-dep-advcl-eval.html">advcl:eval</a></tt>, <tt><a href="kpv_lattice-dep-advcl-lcl.html">advcl:lcl</a></tt>, <tt><a href="kpv_lattice-dep-advcl-tcl.html">advcl:tcl</a></tt>.

129 nodes (2%) are attached to their parents as `advcl`.

83 instances of `advcl` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.75968992248062.

The following 12 pairs of parts of speech are connected with `advcl`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (96; 74% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (8; 6% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (7; 5% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (4; 3% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 advcl	color:blue
1	Идралін	идравны	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Past	4	advcl	_	_
2	аскадӧ	аскадӧ	NOUN	N	Case=Ill|Number=Sing	1	obl:tmod	_	_
3	–	–	PUNCT	PUNCT	_	4	punct	_	_
4	выиграйтін	выиграйтны	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Past	0	root	_	OrigLang=ru|SpaceAfter=No
5	,	,	PUNCT	CLB	_	8	punct	_	_
6	сёрмӧдчин	сёрмӧдчыны	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Past	8	advcl	_	_
7	–	–	PUNCT	PUNCT	_	8	punct	_	_
8	проиграйтін	проиграйтны	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Past	4	conj	_	OrigLang=ru|SpaceAfter=No
9	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 advcl	color:blue
1	Неприятель	неприятель	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	_
2	страшнӧй	страшнӧй	ADJ	A	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	7	punct	_	_
4	бура	бура	ADV	Adv	_	7	advmod:mmod	_	_
5	кӧ	кӧ	SCONJ	CS	_	7	mark	_	_
6	он	оз	AUX	V	Mood=Ind|Person=2|Polarity=Neg|Tense=Pres	7	aux	_	_
7	тӧд	тӧдны	VERB	V	Connegative=Yes	2	advcl	_	SpaceAfter=No
8	,	,	PUNCT	CLB	_	10	punct	_	_
9	кӧні	кӧні	ADV	Adv	Case=Ine|Number=Sing|PronType=Int	10	advmod:lmod	_	_
10	сійӧ	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	acl:relcl	_	_
11	и	и	CCONJ	CC	_	12	cc	_	_
12	мый	мый	PRON	Pron	Case=Nom|PronType=Int	14	obj	_	_
13	сійӧ	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	_
14	вӧчӧ	вӧчны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	advcl	_	SpaceAfter=No
15	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advcl	color:blue
1	—	—	PUNCT	PUNCT	_	2	punct	_	_
2	Кодъяс	коді	PRON	Pron	Case=Nom|Number=Plur|PronType=Int	8	parataxis	_	GTtags=Interr,Pl,Nom|SpaceAfter=No
3	?	?	PUNCT	CLB	_	2	punct	_	_
4	—	—	PUNCT	PUNCT	_	8	punct	_	_
5	друг	друг	ADV	Adv	Case=Nom|Number=Sing	6	advmod:tmod	_	GTtags=Sg,Nom
6	пуксьӧм	пуксьыны	VERB	V	Tense=Past|VerbForm=Part	7	advcl	_	GTtags=Refl,Der,Der/ӧм,Der/NomAct,N,Sg,Nom
7	чӧвлӧняс	чӧвлӧняс	NOUN	N	_	8	obl	_	_
8	юаліс	юавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=IV,Ind,Prt1,Sg3
9	председатель	председатель	NOUN	N	Case=Nom|Number=Sing	8	nsubj	_	GTtags=Sg,Nom|SpaceAfter=No
10	.	.	PUNCT	CLB	_	8	punct	_	_

~~~


