---
layout: base
title:  'Statistics of aux:neg in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `aux:neg`

This relation is a language-specific subtype of <tt><a href="koi_uh-dep-aux.html">aux</a></tt>.
There are also 1 other language-specific subtypes of `aux`: <tt><a href="koi_uh-dep-aux-pot.html">aux:pot</a></tt>.

12 nodes (1%) are attached to their parents as `aux:neg`.

11 instances of `aux:neg` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16666666666667.

The following 5 pairs of parts of speech are connected with `aux:neg`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-AUX.html">AUX</a></tt> (7; 58% instances), <tt><a href="koi_uh-pos-ADV.html">ADV</a></tt>-<tt><a href="koi_uh-pos-AUX.html">AUX</a></tt> (2; 17% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-AUX.html">AUX</a></tt> (1; 8% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-AUX.html">AUX</a></tt> (1; 8% instances), <tt><a href="koi_uh-pos-PRON.html">PRON</a></tt>-<tt><a href="koi_uh-pos-AUX.html">AUX</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:neg	color:blue
1	Сія	сія	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	GTtags=Pers,Sg3,Nom
2	кöркö	кӧркӧ	ADV	Adv	AdvType=Tim	4	advmod	_	_
3	абу	абу	AUX	_	Polarity=Neg	4	aux:neg	_	GTtags=CC,Neg
4	велöтчылöма	велӧтчывны	VERB	_	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	GTtags=Ind,Prt2,Sg3|SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:neg	color:blue
1	Ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj:cop	_	GTtags=Pron,Pers,Sg1,Nom
2	татӧн	татӧн	ADV	Adv	AdvType=Loc	4	advmod	_	GTtags=Adv
3	не	не	AUX	Pcle	_	4	aux:neg	_	GTtags=Pcle
4	ӧтнам	ӧтнам	ADV	Adv	_	0	root	_	GTtags=Adv|SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:neg	color:blue
1	Менам	ме	PRON	Pron	Case=Gen|Number=Sing|Person=1|PronType=Prs	2	nmod:poss	_	GTtags=Pers,Sg1,Gen
2	йöрнöс	йӧрнӧс	NOUN	N	Case=Nom|Number=Sing	4	nsubj:cop	_	GTtags=Sg,Nom
3	не	не	AUX	Pcle	Polarity=Neg	4	aux:neg	_	GTtags=Neg
4	сэтшöм	сэтшӧм	ADJ	A	Case=Nom|Number=Sing|PronType=Dem	0	root	_	GTtags=Adn,Dem,Der/MWN,Sg,Nom
5	кыдз	кыдз	ADV	Adv	_	6	mark	_	_
6	тэнат	тэ	PRON	Pron	Case=Gen|Number=Sing|Person=2|PronType=Prs	2	conj	_	GTtags=Pers,Sg2,Gen|SpaceAfter=No
7	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


