---
layout: base
title:  'Statistics of nmod:lmod in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `nmod:lmod`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-nmod.html">nmod</a></tt>.
There are also 6 other language-specific subtypes of `nmod`: <tt><a href="kpv_lattice-dep-nmod-appos.html">nmod:appos</a></tt>, <tt><a href="kpv_lattice-dep-nmod-comp.html">nmod:comp</a></tt>, <tt><a href="kpv_lattice-dep-nmod-lfrom.html">nmod:lfrom</a></tt>, <tt><a href="kpv_lattice-dep-nmod-obj.html">nmod:obj</a></tt>, <tt><a href="kpv_lattice-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="kpv_lattice-dep-nmod-subj.html">nmod:subj</a></tt>.

29 nodes (0%) are attached to their parents as `nmod:lmod`.

29 instances of `nmod:lmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20689655172414.

The following 3 pairs of parts of speech are connected with `nmod:lmod`: <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (27; 93% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:lmod	color:blue
1	Медбӧрын	медбӧрын	ADV	Adv	Case=Ine|Degree=Sup	2	advmod:tmod	_	_
2	кыр	кыр	NOUN	N	Case=Nom|Number=Sing	4	obl	_	_
3	йылын	йылын	ADP	Po	Case=Ine|Number=Sing	2	case	_	_
4	тыдовтчисны	тыдовтчыны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	_
5	сиктса	сикт	NOUN	N	Case=Loc|Number=Sing	6	nmod:lmod	_	_
6	керкаяс	керка	NOUN	N	Case=Nom|Number=Plur	4	nsubj	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 nmod:lmod	color:blue
1	Прохор	Прохор	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	12	nsubj	_	GTtags=Prop,Sem/Mal,Sg,Nom
2	Иванович	Иванович	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	1	flat:name	_	GTtags=Prop,Sem/Sur,Sg,Nom
3	Асныров	Асныров	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	1	flat:name	_	GTtags=Prop,Sem/Sur-Mal,Sg,Nom
4	уна	уна	DET	Det	_	5	det	_	_
5	во	во	NOUN	N	Case=Nom|Number=Sing	8	obl:tmod	_	GTtags=Sg,Nom
6	нин	нин	ADV	Adv	AdvType=Tim	5	advmod:tmod	_	GTtags=Sem/Time
7	кӧнъясынкӧ	кӧнъясынкӧ	ADV	Adv	Definite=Ind|Derivation=Ko	8	advmod:lmod	_	GTtags=Indef,Der/кӧ
8	ветлӧм	ветлыны	VERB	V	Case=Nom|Number=Sing|Valency=1|VerbForm=Vnoun	12	advcl	_	GTtags=IV,Der,Der/ӧм,Der/NomAct,N,Sg,Nom
9	бӧрын	бӧрын	ADP	Adp	AdpType=Post|Case=Ine|Number=Sing	8	case	_	GTtags=Po,Sg,Ine
10	регыдӧн	регыдӧн	ADV	Adv	Case=Ins	12	advmod:mmod	_	GTtags=Ins
11	на	на	ADV	Adv	AdvType=Tim	12	advmod:tmod	_	GTtags=Sem/Time
12	воӧм	воны	VERB	V	Case=Nom|Number=Sing|Valency=1|VerbForm=Vnoun	0	root	_	GTtags=IV,Der,Der/ӧм,Der/NomAct,N,Sg,Nom|SpaceAfter=No
13	,	,	PUNCT	CLB	_	15	punct	_	_
14	карса	кар	NOUN	N	Case=Loc|Number=Sing	15	nmod:lmod	_	GTtags=Sg,Der,Der/LocMod,A,Sg,Nom
15	паськӧма	паськӧма	ADJ	A	Case=Nom|Number=Sing	12	appos	_	GTtags=Sg,Nom|SpaceAfter=No
16	,	,	PUNCT	CLB	_	19	punct	_	_
17	...	...	PUNCT	CLB	_	19	punct	_	SpaceAfter=No
18	паськыда	паськыда	ADV	Adv	_	19	advmod	_	_
19	нязгис	нязгыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=1	12	conj	_	GTtags=IV,Ind,Prt1,Sg3,Cmp/Serial,Cmp
20	-	-	PUNCT	PUNCT	_	21	punct	_	_
21	ворсіс	ворсны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=1	19	conj	_	GTtags=IV,Ind,Prt1,Sg3
22	.	.	PUNCT	CLB	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:lmod	color:blue
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


