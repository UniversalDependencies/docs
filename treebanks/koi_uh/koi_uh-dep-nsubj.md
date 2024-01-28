---
layout: base
title:  'Statistics of nsubj in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="koi_uh-dep-nsubj-cop.html">nsubj:cop</a></tt>.

101 nodes (10%) are attached to their parents as `nsubj`.

78 instances of `nsubj` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.61386138613861.

The following 9 pairs of parts of speech are connected with `nsubj`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (46; 46% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (40; 40% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (5; 5% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt> (5; 5% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="koi_uh-pos-NUM.html">NUM</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nsubj	color:blue
1	Быд	быд	DET	_	Case=Nom|Number=Sing|PronType=Tot	2	det	_	GTtags=Sg,Nom
2	лaдopcянь	лaдopcянь	NOUN	_	Case=Egr|Number=Sing	6	obl:lmod	_	GTtags=Sg,Egr
3	Ворошилов	Ворошилов	PROPN	_	Animacy=Hum|Case=Nom|NameType=Sur|Number=Sing	6	obl:lmod	_	GTtags=Prop,Sem/Sur,Sem/Mal,Sg,Nom
4	дынӧ	дынӧ	ADP	_	AdpType=Post|AdvType=Loc|Case=Ill|Number=Sing	3	case	_	GTtags=Po,Spat,Sg,Ill
5	ӧні	ӧні	ADV	_	_	6	advmod:tmod	_	_
6	кoтӧpтіcӧ	кoтӧpтіcӧ	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Pl3
7	oтиp	oтиp	NOUN	_	Animacy=Hum|Case=Nom|Number=Sing	6	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	Кыкӧн	кык	NUM	_	NumType=Dist	3	advcl	_	GTtags=Card,Distr
2	нія	сія	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	_	GTtags=Pers,Pl3,Nom
3	иньдӧтчисӧ	иньдӧтчыны	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Pl3
4	петанін	петанін	NOUN	_	Case=Nom|Number=Sing	5	nmod	_	GTtags=Sg,Nom
5	ладорӧ	ладор	NOUN	_	Case=Ill|Number=Sing	3	obl:lmod	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	Менам	ме	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	2	nmod	_	GTtags=Pers,Sg1,Gen
2	айӧ	ай	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	nsubj	_	GTtags=Sg,Nom,PxSg1
3	буржык	бур	ADJ	_	Degree=Cmp	0	root	_	GTtags=Der/жык,Comp
4	тэ	тэ	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nmod	_	GTtags=Pers,Sg2,Nom
5	айся	ай	NOUN	_	Case=Cmp|Number=Sing	3	advcl	_	GTtags=Sg,Cmpr|SpaceAfter=No
6	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


