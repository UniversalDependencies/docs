---
layout: base
title:  'Statistics of nmod:comp in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `nmod:comp`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-nmod.html">nmod</a></tt>.
There are also 5 other language-specific subtypes of `nmod`: <tt><a href="mdf_jr-dep-nmod-appos.html">nmod:appos</a></tt>, <tt><a href="mdf_jr-dep-nmod-bahuv.html">nmod:bahuv</a></tt>, <tt><a href="mdf_jr-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="mdf_jr-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="mdf_jr-dep-nmod-tmod.html">nmod:tmod</a></tt>.

8 nodes (0%) are attached to their parents as `nmod:comp`.

8 instances of `nmod:comp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.375.

The following 5 pairs of parts of speech are connected with `nmod:comp`: <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-ADP.html">ADP</a></tt> (3; 38% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (2; 25% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (1; 13% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nmod:comp	color:blue
1	Синь	сон	PRON	Pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Pl3,Nom
2	эряйхть	эрямс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,ScPl3
3	корязонк	коряс	ADP	Adp	Case=Ill|Number[psor]=Plur|Person[psor]=1	5	nmod:comp	_	GTtags=Ill,PxPl1
4	сяда	сяда	ADV	Adv	AdvType=Deg	5	advmod:deg	_	GTtags=Deg
5	цебярьста	цебярьста	ADV	Adv	AdvType=Man	2	advmod:mmod	_	GTtags=Manner|SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:comp	color:blue
1	Тяда	тя	PRON	Pron	Case=Abl|Definite=Ind|Number=Sing|PronType=Dem	2	nmod:comp	_	GTtags=Dem,Sg,Abl,Indef
2	инголе	инголе	ADV	Adv	Case=Loc	5	advmod:tmod	_	GTtags=Loc
3	тага	тага	ADV	Adv	AdvType=Tim	5	advmod:tmod	_	GTtags=Sem/Time
4	Платон	Платон	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	5	nsubj	_	GTtags=Prop,Sg,Nom,Indef
5	дивандафтомань	дивандафтомс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=1|Person[subj]=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,ScSg3,OcSg1|SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:comp	color:blue
1	А	а	CCONJ	CC	_	4	cc	_	_
2	ушесь	уша	NOUN	N	Case=Nom|Definite=Def|Number=Sing	4	nsubj:cop	_	GTtags=Sg,Nom,Def
3	пародонга	пара	ADJ	A	Case=Abl|Clitic=AddNgA|Definite=Ind|Number=Plur,Sing	4	nmod:comp	_	GTtags=SP,Abl,Indef,Clt/Add
4	пароль	пара	ADJ	A	Case=Nom|Definite=Ind|Number=Sing|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=Sg,Nom,Indef,Clt/Cop,Prt2,ScSg3|SpaceAfter=No
5	,	,	PUNCT	CLB	_	8	punct	_	_
6	хоть	хоть	PART	Pcle	_	8	mark	_	_
7	и	и	ADV	Adv	_	8	advmod:foc	_	_
8	август	август	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	4	conj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
9	,	,	PUNCT	CLB	_	8	punct	_	_
10	а	а	CCONJ	CC	_	13	cc	_	_
11	ульцясь	ульця	NOUN	N	Case=Nom|Definite=Def|Number=Sing	13	nsubj:cop	_	GTtags=Sg,Nom,Def
12	июленнекс	июль	NOUN	N	Case=Tra|Definite=Ind|Derivation=Poss|Number=Plur,Sing	13	obl	_	GTtags=Der/Poss,SP,Tra,Indef
13	пси	пси	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	4	conj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
14	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


