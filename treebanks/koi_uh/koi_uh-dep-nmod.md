---
layout: base
title:  'Statistics of nmod in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `nmod`

This relation is universal.
There are 2 language-specific subtypes of `nmod`: <tt><a href="koi_uh-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="koi_uh-dep-nmod-poss.html">nmod:poss</a></tt>.

38 nodes (4%) are attached to their parents as `nmod`.

36 instances of `nmod` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.10526315789474.

The following 7 pairs of parts of speech are connected with `nmod`: <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (19; 50% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (10; 26% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt> (5; 13% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="koi_uh-pos-ADV.html">ADV</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="koi_uh-pos-ADV.html">ADV</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod	color:blue
1	Окаліс	окавны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3
2	Митя	Митя	PROPN	_	Case=Nom|NameType=Giv|Number=Sing	1	nsubj	_	GTtags=Prop,Prop,Sem/Mal,Sg,Nom
3	кыкнаннысӧ	кык	PRON	_	Case=Acc|Number=Sing|Number[psor]=Plur|Person[psor]=3|PronType=Tot	1	obj	_	GTtags=Coll,Der/MWN,N,Sg,PxPl3,Acc
4	да	да	CCONJ	_	_	5	cc	_	_
5	пуксьӧтіс	пуксьӧтны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	1	conj	_	GTtags=Ind,Prt1,Sg3
6	пызан	пызан	NOUN	_	Case=Nom|Number=Sing	7	nmod	_	GTtags=Sg,Nom
7	сайӧ	сай	NOUN	N	Case=Nom|NounType=Relat|Number=Sing|Number[psor]=Sing|Person[psor]=1	5	obl:lmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	Менам	ме	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	2	nmod	_	GTtags=Pers,Sg1,Gen
2	айӧ	ай	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	nsubj	_	GTtags=Sg,Nom,PxSg1
3	буржык	бур	ADJ	_	Degree=Cmp	0	root	_	GTtags=Der/жык,Comp
4	тэ	тэ	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nmod	_	GTtags=Pers,Sg2,Nom
5	айся	ай	NOUN	_	Case=Cmp|Number=Sing	3	advcl	_	GTtags=Sg,Cmpr|SpaceAfter=No
6	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod	color:blue
1	Петялӧн	Петя	PROPN	_	Animacy=Hum|Case=Gen|NameType=Giv|Number=Sing	3	nmod	_	GTtags=Prop,Sg,Gen
2	ордчӧн	ордчӧн	NOUN	_	_	3	nmod	_	_
3	олісьыс	олісь	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	nsubj	_	GTtags=Sg,Nom,PxSg3
4	краситӧма	краситны	VERB	_	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt2,Sg3
5	йӧрсӧ	йӧр	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obj	_	GTtags=Sg,Acc,PxSg3|SpaceAfter=No
6	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


