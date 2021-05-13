---
layout: base
title:  'Statistics of advmod:mmod in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `advmod:mmod`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-advmod.html">advmod</a></tt>.
There are also 11 other language-specific subtypes of `advmod`: <tt><a href="kpv_lattice-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="kpv_lattice-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="kpv_lattice-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="kpv_lattice-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="kpv_lattice-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="kpv_lattice-dep-advmod-freq.html">advmod:freq</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lfrom.html">advmod:lfrom</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lmp.html">advmod:lmp</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lto.html">advmod:lto</a></tt>, <tt><a href="kpv_lattice-dep-advmod-tmod.html">advmod:tmod</a></tt>.

102 nodes (1%) are attached to their parents as `advmod:mmod`.

92 instances of `advmod:mmod` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.67647058823529.

The following 5 pairs of parts of speech are connected with `advmod:mmod`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (96; 94% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:mmod	color:blue
1	Тэ	тэ	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	_	_
2	кыдзи	кыдзи	ADV	Adv	PronType=Int	3	advmod:mmod	_	_
3	мӧвпалан	мӧвпавны	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres	0	root	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	7	punct	_	_
5	кор	кор	ADV	Adv	_	7	advmod:tmod	_	_
6	верман	вермыны	AUX	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres	7	aux:pot	_	_
7	волыны	волыны	VERB	V	VerbForm=Inf	3	advcl	_	SpaceAfter=No
8	?	?	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 advmod:mmod	color:blue
1	Виринея	Виринея	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	4	nsubj	_	GTtags=Prop,Sem/Fem,Sg,Nom
2	муртса	муртса	ADV	Adv	_	4	advmod	_	_
3	эз	оз	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	4	aux:neg	_	GTtags=Neg,Ind,Prt1,Sg3
4	усь	усьны	VERB	V	Connegative=Yes|Valency=1	0	root	_	GTtags=IV,ConNeg
5	пуклӧс	пуклӧс	NOUN	N	Case=Nom|Number=Sing	4	obl	_	GTtags=Sg,Nom
6	вывсьыс	вылысь	ADP	Adp	AdpType=Post|Case=Ela|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	case	_	GTtags=Po,Sg,Ela,PxSg3|SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	13	punct	_	_
8	но	но	CCONJ	CC	_	13	cc	_	_
9	ӧні	ӧні	ADV	Adv	_	13	advmod:tmod	_	_
10	некор	некор	ADV	Adv	Polarity=Neg	13	nsubj:cop	_	GTtags=Neg
11	вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=1	13	cop	_	GTtags=IV,Ind,Prt1,Sg3
12	сылы	сійӧ	PRON	Pron	Case=Dat|Number=Sing|Person=3|PronType=Prs	13	obl:agent	_	GTtags=Pers,Sg3,Dat
13	жуйявнысӧ	жуйявны	VERB	V	Clitic=So|Valency=1|VerbForm=Inf	4	conj	_	GTtags=IV,Inf,Clt/сӧ|SpaceAfter=No
14	,	,	PUNCT	PUNCT	_	19	punct	_	_
15	гатшӧннас	гатшӧн	ADV	Adv	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	19	advmod	_	GTtags=Sg,Ins,PxSg3
16	моз	моз	ADV	Adv	_	15	advmod:mmod	_	_
17	на	на	ADV	Adv	AdvType=Tim	15	advmod:tmod	_	GTtags=Sem/Time
18	и	и	ADV	Adv	_	15	advmod:foc	_	_
19	судзӧдіс	судзӧдны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=2	4	conj	_	GTtags=TV,Ind,Prt1,Sg3
20	пыж	пыж	NOUN	N	Case=Nom|Number=Sing	21	nmod	_	GTtags=Sg,Nom
21	нырсьыс	ныр	NOUN	N	Case=Ela|Number=Sing|Number[psor]=Sing|Person[psor]=3	19	obl:lmod	_	GTtags=Sg,Ela,PxSg3
22	пищальсӧ	пищаль	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	19	obj	_	GTtags=Sg,Acc,PxSg3|SpaceAfter=No
23	,	,	PUNCT	PUNCT	_	24	punct	_	_
24	воськовтіс	воськовтны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=1	19	conj	_	GTtags=IV,Ind,Prt1,Sg3
25	ваӧ	ва	NOUN	N	Case=Ill|Number=Sing	24	obl:lmod	_	GTtags=Sg,Ill|SpaceAfter=No
26	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 advmod:mmod	color:blue
1	Но	но	CCONJ	CC	_	2	cc	_	_
2	эз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Past	0	root	_	_
3	нин	нин	ADV	Adv	_	2	advmod:tmod	_	_
4	сэтшӧм	сэтшӧм	ADJ	A	Case=Nom|Number=Sing|PronType=Dem	5	amod	_	_
5	яра	яра	ADV	Adv	_	2	advmod:mmod	_	SpaceAfter=No
6	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


