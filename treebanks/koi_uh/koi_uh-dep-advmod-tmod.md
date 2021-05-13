---
layout: base
title:  'Statistics of advmod:tmod in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `advmod:tmod`

This relation is a language-specific subtype of <tt><a href="koi_uh-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="koi_uh-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="koi_uh-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="koi_uh-dep-advmod-mmod.html">advmod:mmod</a></tt>.

27 nodes (3%) are attached to their parents as `advmod:tmod`.

19 instances of `advmod:tmod` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.74074074074074.

The following 5 pairs of parts of speech are connected with `advmod:tmod`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (23; 85% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="koi_uh-pos-ADV.html">ADV</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="koi_uh-pos-NUM.html">NUM</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="koi_uh-pos-PRON.html">PRON</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 advmod:tmod	color:blue
1	Ме	ме	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	GTtags=Pers,Sg1,Nom
2	эг	оз	AUX	_	Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Past	5	aux:neg	_	GTtags=Neg,Ind,Prt1,Sg1
3	вермы	вермыны	AUX	_	Connegative=Yes	5	aux	_	GTtags=ConNeg
4	сійӧ	сія	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	5	obj	_	GTtags=Pers,Sg3,Acc
5	вӧтны	вӧтны	VERB	_	VerbForm=Inf	0	root	_	GTtags=Inf|SpaceAfter=No
6	,	,	PUNCT	_	_	12	punct	_	_
7	сідз	сідз	ADV	_	_	12	mark	_	_
8	кыдз	кыдз	ADV	_	_	7	fixed	_	_
9	сія	сія	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	GTtags=Pers,Sg3,Nom
10	ӧддьӧн	ӧддьӧн	ADV	_	_	12	advmod:tmod	_	_
11	чожа	чожа	ADV	_	_	12	advmod:tmod	_	_
12	котӧртіс	котӧртны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	ccomp	_	GTtags=Ind,Prt1,Sg3|SpaceAfter=No
13	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 advmod:tmod	color:blue
1	Мортлӧ	морт	NOUN	N	Animacy=Anim|Case=Dat|Number=Sing	4	obl	_	GTtags=N,Sem/Ani,Sg,Dat
2	пыр	пыр	ADV	Adv	_	4	advmod:tmod	_	GTtags=Adv
3	овлӧ	овлыны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	cop	_	GTtags=V,IV,Ind,Prs,Sg3
4	долыт	долыт	ADJ	A	_	0	root	_	GTtags=A|SpaceAfter=No
5	,	,	PUNCT	CLB	_	8	punct	_	GTtags=CLB
6	кӧр	кӧр	ADV	Adv	_	8	mark	_	GTtags=Adv
7	сія	сія	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	GTtags=Pron,Pers,Sg3,Nom
8	локтас	локны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut	4	advcl:tcl	_	GTtags=V,Ind,Fut,Sg3
9	сэтшӧм	сэтшӧм	ADJ	Adn	PronType=Dem	10	amod	_	GTtags=Adn,Dem
10	пельӧсокӧ	пельӧс	NOUN	N	Case=Ill|Derivation=Dimin|Number=Sing	8	obl:lmod	_	GTtags=N,Der/Ок,Der/Dimin,N,Sg,Ill|SpaceAfter=No
11	,	,	PUNCT	CLB	_	13	punct	_	GTtags=CLB
12	кӧда	кӧда	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	13	nsubj	_	GTtags=Pron,Rel,Sg,Nom
13	чужтӧ	чужтыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	10	acl:relcl	_	GTtags=V,TV,Ind,Prs,Sg3
14	памятяс	памятяс	NOUN	_	_	13	obl:lmod	_	_
15	приятнӧй	приятнӧй	ADJ	A	_	16	amod	_	GTtags=A
16	касьтылӧм	касьтылӧм	NOUN	N	Animacy=Inan|Case=Nom|Number=Sing	13	obj	_	GTtags=N,Sem/Inanim,Sg,Nom|SpaceAfter=No
17	.	.	PUNCT	CLB	_	4	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 advmod:tmod	color:blue
1	—	—	PUNCT	_	_	6	punct	_	_
2	А	а	CCONJ	_	_	6	cc	_	_
3	пизьсö	пизьсö	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	obj	_	GTtags=Sg,Acc,PxSg3
4	председательыс	председатель	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	nsubj	_	GTtags=Sg,Nom,PxSg3
5	кöр	кӧр	ADV	_	_	6	advmod:tmod	_	_
6	сетас	сетны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut	0	root	_	SpaceAfter=No
7	?	?	PUNCT	CLB	_	6	punct	_	_
8	—	—	PUNCT	_	_	14	punct	_	_
9	натьтö	натьтö	ADV	_	_	14	advmod	_	SpaceAfter=No
10	,	,	PUNCT	CLB	_	9	punct	_	_
11	дасöтiсь	дасöтiсь	ADV	_	Case=Ela|NumType=OrdMult	14	advmod:tmod	_	GTtags=Ord,Ela,Mult
12	ни	ни	ADV	_	_	11	advmod:tmod	_	_
13	талун	талун	ADV	_	_	14	advmod:tmod	_	_
14	юалiс	юавны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	6	parataxis	_	GTtags=Ind,Prt1,Sg3
15	Санко	Санко	PROPN	_	Case=Nom|NameType=Giv|Number=Sing	14	nsubj	_	SpaceAfter=No
16	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


