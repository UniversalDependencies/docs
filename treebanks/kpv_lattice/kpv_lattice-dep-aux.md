---
layout: base
title:  'Statistics of aux in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `aux`

This relation is universal.
There are 5 language-specific subtypes of `aux`: <tt><a href="kpv_lattice-dep-aux-aspect.html">aux:aspect</a></tt>, <tt><a href="kpv_lattice-dep-aux-nec.html">aux:nec</a></tt>, <tt><a href="kpv_lattice-dep-aux-neg.html">aux:neg</a></tt>, <tt><a href="kpv_lattice-dep-aux-pot.html">aux:pot</a></tt>, <tt><a href="kpv_lattice-dep-aux-tense.html">aux:tense</a></tt>.

15 nodes (0%) are attached to their parents as `aux`.

11 instances of `aux` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.53333333333333.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (6; 40% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (5; 33% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (3; 20% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 aux	color:blue
1	Аскинас	аскинас	ADV	Adv	AdvType=Tim	2	advmod:tmod	_	GTtags=Temp
2	ӧшӧдӧм	ӧшӧдны	VERB	V	Tense=Past|VerbForm=Part	4	advcl	_	GTtags=TV,Der,Der/ӧм,PastPtc
3	содтӧдъя	содтӧдъя	ADJ	A	Case=Nom|Number=Sing	4	amod	_	GTtags=Sg,Nom
4	приказын	приказ	NOUN	N	Case=Ine|Number=Sing	8	obl	_	GTtags=Sg,Ine
5	сійӧ	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	8	nsubj:cop	_	GTtags=Pers,Sg3,Nom
6	вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	8	aux	_	GTtags=IV,Ind,Prt1,Sg3
7	нин	нин	ADV	Adv	_	8	advcl	_	_
8	босьтӧмаяс	босьтны	VERB	V	Case=Nom|Number=Plur|VerbForm=Vnoun	0	root	_	GTtags=TV,Der,Der/ӧм,PastPtc,N,Pl,Nom
9	лыдын	лыд	NOUN	N	Case=Ine|Number=Sing	8	case	_	GTtags=Sg,Ine|SpaceAfter=No
10	.	.	PUNCT	CLB	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux	color:blue
1	Таво	таво	ADV	Adv	AdvType=Tim	2	advmod:tmod	_	GTtags=Temp
2	матіясас	матіса	ADJ	A	Case=Ine|Number=Plur|Number[psor]=Sing|Person[psor]=3	0	root	_	GTtags=Pl,Ine,PxSg3,So/CP
3	эз	оз	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	5	aux:neg	_	GTtags=Neg,Ind,Prt1,Sg3
4	вӧв	вӧвны	AUX	V	Connegative=Yes	5	aux	_	GTtags=IV,ConNeg
5	вотӧсыс	вотӧс	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	nsubj	_	GTtags=Sg,Nom,PxSg3|SpaceAfter=No
6	.	.	PUNCT	CLB	_	2	punct	_	_

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


