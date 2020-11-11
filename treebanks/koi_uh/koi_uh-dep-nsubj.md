---
layout: base
title:  'Statistics of nsubj in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="koi_uh-dep-nsubj-cop.html">nsubj:cop</a></tt>.

76 nodes (9%) are attached to their parents as `nsubj`.

55 instances of `nsubj` (72%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.75.

The following 9 pairs of parts of speech are connected with `nsubj`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (34; 45% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (27; 36% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (5; 7% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt> (5; 7% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="koi_uh-pos-NUM.html">NUM</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Сія	сія	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	пондыліс	пондывны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3
3	чапкыны	чапкыны	VERB	_	VerbForm=Inf	2	xcomp	_	GTtags=Inf
4	куритны	куритны	VERB	_	VerbForm=Inf	3	xcomp	_	GTtags=Inf
5	да	да	CCONJ	_	_	6	cc	_	_
6	юны	юны	VERB	_	VerbForm=Inf	4	conj	_	GTtags=Inf|SpaceAfter=No
7	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Ныв	ныв	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	GTtags=Sg,Nom
2	гижис	гижны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3
3	ёртыслӧ	ёрт	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	obl	_	GTtags=Sg,Dat,PxSg3
4	гижӧт	гижӧт	NOUN	_	Case=Nom|Number=Sing	2	obj	_	GTtags=Sg,Nom|SpaceAfter=No
5	.	.	PUNCT	CLB	_	2	punct	_	_

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
5	айся	ай	NOUN	_	Case=Comp|Number=Sing	3	advcl	_	GTtags=Sg,Cmpr|SpaceAfter=No
6	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


