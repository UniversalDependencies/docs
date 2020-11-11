---
layout: base
title:  'Statistics of advcl in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `advcl`

This relation is universal.
There are 1 language-specific subtypes of `advcl`: <tt><a href="kpv_lattice-dep-advcl-tmod.html">advcl:tmod</a></tt>.

93 nodes (2%) are attached to their parents as `advcl`.

53 instances of `advcl` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.81720430107527.

The following 10 pairs of parts of speech are connected with `advcl`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (71; 76% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (5; 5% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (5; 5% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 advcl	color:blue
1	Тэ	тэ	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	_	_
2	кыдзи	кыдзи	ADV	Adv	PronType=Int	3	advmod	_	_
3	мӧвпалан	мӧвпавны	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres	0	root	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	кор	кор	ADV	Adv	_	6	advmod:tmod	_	_
6	верман	вермыны	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres	3	advcl	_	_
7	волыны	волыны	VERB	V	VerbForm=Inf	6	xcomp	_	SpaceAfter=No
8	?	?	PUNCT	CLB	_	3	punct	_	_

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
4	бура	бура	ADV	Adv	_	7	advmod	_	_
5	кӧ	кӧ	SCONJ	CS	_	7	mark	_	_
6	он	оз	AUX	V	Mood=Ind|Person=2|Polarity=Neg|Tense=Pres	7	aux:neg	_	_
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advcl	color:blue
1	Аскинас	аскинас	ADV	Adv	AdvType=Tim	2	advmod:tmod	_	GTtags=Temp
2	ӧшӧдӧм	ӧшӧдны	VERB	V	Tense=Past|Valency=2|VerbForm=Part	4	advcl	_	GTtags=TV,Der,Der/ӧм,PastPtc
3	содтӧдъя	содтӧдъя	ADJ	A	Case=Nom|Number=Sing	4	amod	_	GTtags=Sg,Nom
4	приказын	приказ	NOUN	N	Case=Ine|Number=Sing	8	obl	_	GTtags=Sg,Ine
5	сійӧ	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	8	nsubj:cop	_	GTtags=Pers,Sg3,Nom
6	вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=1	8	aux	_	GTtags=IV,Ind,Prt1,Sg3
7	нин	нин	ADV	Adv	_	8	advcl	_	_
8	босьтӧмаяс	босьтны	VERB	V	Case=Nom|Derivation=Vnoun|Number=Plur|Tense=Past|Valency=2|VerbForm=Part	0	root	_	GTtags=TV,Der,Der/ӧм,PastPtc,N,Pl,Nom
9	лыдын	лыд	NOUN	N	Case=Ine|Number=Sing	8	case	_	GTtags=Sg,Ine|SpaceAfter=No
10	.	.	PUNCT	CLB	_	8	punct	_	_

~~~


