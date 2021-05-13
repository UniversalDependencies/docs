---
layout: base
title:  'Statistics of acl in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="kpv_lattice-dep-acl-relcl.html">acl:relcl</a></tt>.

109 nodes (1%) are attached to their parents as `acl`.

95 instances of `acl` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.01834862385321.

The following 7 pairs of parts of speech are connected with `acl`: <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (92; 84% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (5; 5% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (5; 5% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 acl	color:blue
1	Колхозъясын	колхоз	NOUN	N	Case=Ine|Number=Plur	3	obl:lmod	_	OrigLang=ru
2	ӧні	ӧні	ADV	Adv	_	3	advmod:tmod	_	_
3	мунӧ	мунны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	тайӧ	тайӧ	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	7	det	_	_
5	воӧм	воны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	7	acl	_	_
6	озыр	озыр	ADJ	A	Case=Nom|Number=Sing	7	amod	_	_
7	урожайсӧ	урожай	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	nmod:obj	_	OrigLang=ru
8	идралӧм	идравны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	3	csubj	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 acl	color:blue
1	Гу	гу	NOUN	N	Case=Nom|Number=Sing	3	obl:lmod	_	GTtags=Sg,Nom
2	вылӧ	вылӧ	ADP	Adp	AdpType=Post|Case=Ill|Number=Sing	1	case	_	GTtags=Po,Sg,Ill
3	воисны	воны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=IV,Ind,Prt1,Pl3
4	став	став	PRON	Pron	Case=Nom|Number=Sing	5	det	_	GTtags=Sg,Nom
5	дасьлунӧн	дасьлун	NOUN	N	Case=Ins|Number=Sing	3	obl	_	GTtags=Sg,Ins|SpaceAfter=No
6	:	:	PUNCT	CLB	_	7	punct	_	_
7	шыаӧсь	шыа	ADJ	A	Number[subj]=Plur	3	conj	_	GTtags=Cop,Pl|SpaceAfter=No
8	,	,	PUNCT	CLB	_	10	punct	_	_
9	октӧм	октыны	VERB	V	Tense=Past|VerbForm=Part	10	acl	_	GTtags=TV,Der,Der/ӧм,PastPtc
10	пищаляӧсь	пищаля	ADJ	A	Number[subj]=Plur	3	conj	_	GTtags=Cop,Pl|SpaceAfter=No
11	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 acl	color:blue
1	Вина	вина	NOUN	N	Case=Nom|Number=Sing	2	nmod:obj	_	GTtags=Sg,Nom,?
2	юӧм	юны	VERB	V	Case=Nom|Number=Sing|Valency=2|VerbForm=Vnoun	5	acl	_	GTtags=TV,Der,Der/ӧм,Der/NomAct,N,Sg,Nom
3	бӧрын	бӧрын	ADP	Adp	Case=Ine	2	case	_	GTtags=Ine
4	Павел	Павел	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	5	nsubj	_	GTtags=Prop,Sem/Mal,Sg,Nom
5	мустӧмтіс	мустӧмтны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,Sg3
6	асьсӧ	ас	PRON	Pron	Case=Acc|Number=Sing|Person=3|Reflex=Yes	5	obj	_	GTtags=Refl,Sg3,Acc
7	тӧрытъясьыс	тӧрытъя	ADJ	A	Case=Ela|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	obl:tmod	_	GTtags=Sg,Ela,PxSg3|SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


