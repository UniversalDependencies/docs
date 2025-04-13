---
layout: base
title:  'Statistics of aux in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `aux`

This relation is universal.
There are 5 language-specific subtypes of `aux`: <tt><a href="kpv_lattice-dep-aux-aspect.html">aux:aspect</a></tt>, <tt><a href="kpv_lattice-dep-aux-nec.html">aux:nec</a></tt>, <tt><a href="kpv_lattice-dep-aux-neg.html">aux:neg</a></tt>, <tt><a href="kpv_lattice-dep-aux-pot.html">aux:pot</a></tt>, <tt><a href="kpv_lattice-dep-aux-tense.html">aux:tense</a></tt>.

144 nodes (2%) are attached to their parents as `aux`.

128 instances of `aux` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.51388888888889.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (125; 87% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (12; 8% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (5; 3% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux	color:blue
1	Татшӧм	татшӧм	DET	Det	Case=Nom|Number=Sing|PronType=Dem	2	det	_	_
2	настроениеяс	настроение	NOUN	N	Case=Nom|Number=Plur	3	nsubj	_	OrigLang=ru
3	лоны	лоны	VERB	V	VerbForm=Inf	0	root	_	_
4	оз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Pres	3	aux	_	_
5	вермы	вермыны	AUX	V	Connegative=Yes	3	aux:pot	_	SpaceAfter=No
6	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 aux	color:blue
1	Мӧд	мӧд	PRON	Pron	PronType=Dem	2	nmod	_	_
2	петанін	петанін	NOUN	N	Case=Nom|Number=Sing	0	root	_	_
3	сэтысь	сэтысь	ADV	Adv	Case=Ela	2	obl:lmod	_	_
4	эз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Past	2	aux	_	_
5	вӧв	вӧвны	AUX	V	Connegative=Yes	2	cop	_	SpaceAfter=No
6	.	_	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Сійӧ	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	GTtags=Pron,Pers,Sg3,Nom
2	вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	3	aux	_	GTtags=V,IV,Ind,Prt1,Sg3
3	вевттӧм	вевттӧм	ADJ	A	Case=Nom|Number=Sing	0	root	_	GTtags=A,Sg,Nom|SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	GTtags=CLB
5	ляпкыдик	ляпкыдик	ADJ	A	Case=Nom|Number=Sing	3	conj	_	GTtags=A,Sg,Nom|SpaceAfter=No
6	,	,	PUNCT	CLB	_	9	punct	_	GTtags=CLB
7	ӧшиньяссӧ	ӧшинь	NOUN	N	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3	9	obj	_	GTtags=N,Pl,Acc,PxSg3
8	пӧвйӧн	пӧвйӧн	NOUN	N	Case=Ins|Number=Sing	9	obl	_	GTtags=N,Sg,Ins
9	тупкӧма	тупкыны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	3	conj	_	GTtags=V,TV,Der,Der/ӧм,Der/NomAct,N,Sg,Der,Der/ProprietiveMod,A,Sg,Nom|SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	GTtags=CLB

~~~


