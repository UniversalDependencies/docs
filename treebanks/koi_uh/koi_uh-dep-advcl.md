---
layout: base
title:  'Statistics of advcl in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `advcl`

This relation is universal.
There are 3 language-specific subtypes of `advcl`: <tt><a href="koi_uh-dep-advcl-lmod.html">advcl:lmod</a></tt>, <tt><a href="koi_uh-dep-advcl-mmod.html">advcl:mmod</a></tt>, <tt><a href="koi_uh-dep-advcl-tmod.html">advcl:tmod</a></tt>.

14 nodes (2%) are attached to their parents as `advcl`.

9 instances of `advcl` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.85714285714286.

The following 4 pairs of parts of speech are connected with `advcl`: <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (5; 36% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-VERB.html">VERB</a></tt> (5; 36% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-VERB.html">VERB</a></tt> (3; 21% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-NUM.html">NUM</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advcl	color:blue
1	Менам	ме	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	2	nmod	_	GTtags=Pers,Sg1,Gen
2	айӧ	ай	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	nsubj	_	GTtags=Sg,Nom,PxSg1
3	буржык	бур	ADJ	_	Degree=Cmp	0	root	_	GTtags=Der/жык,Comp
4	тэ	тэ	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nmod	_	GTtags=Pers,Sg2,Nom
5	айся	ай	NOUN	_	Case=Comp|Number=Sing	3	advcl	_	GTtags=Sg,Cmpr|SpaceAfter=No
6	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advcl	color:blue
1	—	—	PUNCT	_	_	2	punct	_	_
2	Кытшӧм	кытшӧм	PRON	_	PronType=Int	0	root	_	_
3	талун	талун	ADV	_	_	2	advmod:tmod	_	_
4	луныс	лун	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	nsubj:cop	_	SpaceAfter=No
5	?	?	PUNCT	_	_	2	punct	_	_
6	—	—	PUNCT	_	_	8	punct	_	_
7	ылӧстӧма	ылӧстны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Prt2|Valency=1	8	advcl	_	_
8	юаліс	юавны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=1	2	parataxis	_	_
9	сія	сія	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advcl	color:blue
1	Ордчӧн	ордчӧн	ADV	Adv	_	3	advmod:lmod	_	GTtags=Adv
2	мекӧт	ме	PRON	Pron	Case=Com|Number=Sing|Person=1|PronType=Prs	1	nmod	_	GTtags=Pron,Pers,Sg1,Com
3	пукалӧ	пукавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Valency=2	0	root	_	GTtags=V,TV,Ind,Prs,Sg3
4	сьӧд	сьӧд	ADJ	A	_	5	amod	_	GTtags=A
5	тошока	тошока	NOUN	N	Derivation=ProprietiveMod|Number=Sing	9	amod	_	GTtags=N,Sg,Der,Der/ProprietiveMod,A
6	и	и	CCONJ	CC	_	8	cc	_	GTtags=CC
7	гардчӧмкодь	гардчыны	VERB	V	Derivation=CompMod|Mood=Ind|Number=Sing|Person=3|Tense=Prt2|Valency=1	8	advcl	_	GTtags=V,IV,Ind,Prt2,Sg3,Der,Der/CompMod
8	уссэза	ус	NOUN	N	Derivation=ProprietiveMod|Number=Plur	5	conj	_	GTtags=N,Pl,Der,Der/ProprietiveMod,A
9	мужик	мужик	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	GTtags=N,Sg,Nom|SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	GTtags=CLB

~~~


