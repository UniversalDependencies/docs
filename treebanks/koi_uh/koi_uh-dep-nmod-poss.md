---
layout: base
title:  'Statistics of nmod:poss in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="koi_uh-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="koi_uh-dep-nmod-lmod.html">nmod:lmod</a></tt>.

3 nodes (0%) are attached to their parents as `nmod:poss`.

3 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.66666666666667.

The following 2 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (2; 67% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nmod:poss	color:blue
1	Дядя	дядя	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	GTtags=N,Sg,Nom
2	Митя	Митя	NOUN	N	Case=Nom|Number=Sing	1	flat:name	_	GTtags=N,Prop,Sem/Ant,Sg,Nom
3	видзӧтіс	видзӧтны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=V,IV,Ind,Prt1,Sg3|SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	GTtags=CLB
5	кыдз	кыдз	ADV	Adv	AdvType=Man|PronType=Rel	6	advmod	_	GTtags=Adv,Manner,Rel
6	пиньӧвтчисӧ	пиньӧвтчыны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	3	advcl	_	GTtags=V,IV,Ind,Prt1,Pl3
7	менам	ме	PRON	Pron	Case=Gen|Number=Sing|Person=1|PronType=Prs	8	nmod:poss	_	GTtags=Pron,Pers,Sg1,Gen
8	аннэзӧ	ан	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=1	6	nsubj	_	GTtags=N,Pl,Nom,PxSg1|SpaceAfter=No
9	,	,	PUNCT	CLB	_	11	punct	_	GTtags=CLB
10	и	и	CCONJ	CC	_	11	cc	_	GTtags=CC
11	шынняліс	шыннявны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	3	conj	_	GTtags=V,Ind,Prt1,Sg3
12	довольнӧя	довольнӧя	ADV	Adv	_	11	advmod	_	GTtags=A,Der,Der/A,Adv|SpaceAfter=No
13	.	.	PUNCT	CLB	_	3	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:poss	color:blue
1	Петялӧн	Петя	PROPN	_	Animacy=Hum|Case=Gen|NameType=Giv|Number=Sing	3	nmod:poss	_	GTtags=Prop,Sg,Gen
2	ордчӧн	ордчӧн	NOUN	_	_	3	nmod	_	_
3	олісьыс	олісь	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	nsubj	_	GTtags=Sg,Nom,PxSg3
4	краситӧм	краситны	VERB	_	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt2,Sg3
5	йӧрсӧ	йӧр	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obj	_	GTtags=Sg,Acc,PxSg3|SpaceAfter=No
6	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


