---
layout: base
title:  'Statistics of advmod:lmp in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `advmod:lmp`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-advmod.html">advmod</a></tt>.
There are also 11 other language-specific subtypes of `advmod`: <tt><a href="kpv_lattice-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="kpv_lattice-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="kpv_lattice-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="kpv_lattice-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="kpv_lattice-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="kpv_lattice-dep-advmod-freq.html">advmod:freq</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lfrom.html">advmod:lfrom</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lto.html">advmod:lto</a></tt>, <tt><a href="kpv_lattice-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="kpv_lattice-dep-advmod-tmod.html">advmod:tmod</a></tt>.

10 nodes (0%) are attached to their parents as `advmod:lmp`.

5 instances of `advmod:lmp` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `advmod:lmp`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (8; 80% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (2; 20% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 advmod:lmp	color:blue
1	Гӧгӧр	гӧгӧр	ADV	Adv	_	4	advmod:lmp	_	_
2	ӧтгырся	ӧтгырся	ADJ	A	Case=Nom|Number=Sing	3	amod	_	GTtags=Sg,Nom
3	пожӧм	пожӧм	NOUN	N	Case=Nom|Number=Sing	4	nsubj	_	GTtags=Sg,Nom
4	тшетшвидзӧ	тшетшвидзны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	GTtags=IV,Ind,Prs,Sg3|SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 advmod:lmp	color:blue
1	Латвияса	Латвия	PROPN	N	Case=Loc|Number=Sing	2	nmod:lmod	_	GTtags=Prop,Sem/Plc,Sem/Plc,Sg,Der,Der/LocMod,A,Nom
2	му	му	NOUN	N	Case=Nom|Number=Sing	6	csubj	_	GTtags=Sg,Nom
3	нинӧмӧн	нинӧм	PRON	Pron	Case=Ins|Number=Sing|Polarity=Neg	6	obl	_	GTtags=Neg,Sg,Ins
4	ёнасӧ	ёна	ADV	Adv	Clitic=So	6	advmod	_	GTtags=Clt/сӧ
5	оз	оз	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	6	aux:neg	_	GTtags=Neg,Ind,Prs,Sg3
6	торъяв	торъявны	VERB	V	Connegative=Yes	0	root	_	GTtags=IV,ConNeg
7	Литваысь	Литва	NOUN	N	Case=Ela|Number=Sing	6	obl	_	GTtags=Prop,Sem/Plc,Sem/Plc,Sg,Ela|SpaceAfter=No
8	,	,	PUNCT	CLB	_	11	punct	_	_
9	местаясыс	места	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	11	nsubj:cop	_	GTtags=Pl,Nom,PxSg3
10	быттьӧ	быттьӧ	ADV	Adv	_	11	advmod:eval	_	GTtags=Parenthetic
11	сэтшӧмӧсь	сэтшӧм	ADJ	A	Number[subj]=Plur|PronType=Dem	6	parataxis	_	GTtags=Det,Dem,Cop,Pl
12	жӧ	жӧ	ADV	Adv	_	11	advmod:eval	_	GTtags=Parenthetic
13	таті	таті	ADV	Adv	Case=Tra	11	advmod:lmp	_	GTtags=Tra|SpaceAfter=No
14	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


