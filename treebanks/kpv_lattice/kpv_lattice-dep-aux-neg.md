---
layout: base
title:  'Statistics of aux:neg in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `aux:neg`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-aux.html">aux</a></tt>.
There are also 4 other language-specific subtypes of `aux`: <tt><a href="kpv_lattice-dep-aux-aspect.html">aux:aspect</a></tt>, <tt><a href="kpv_lattice-dep-aux-nec.html">aux:nec</a></tt>, <tt><a href="kpv_lattice-dep-aux-pot.html">aux:pot</a></tt>, <tt><a href="kpv_lattice-dep-aux-tense.html">aux:tense</a></tt>.

24 nodes (0%) are attached to their parents as `aux:neg`.

21 instances of `aux:neg` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.58333333333333.

The following 6 pairs of parts of speech are connected with `aux:neg`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (8; 33% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (6; 25% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (4; 17% instances), <tt><a href="kpv_lattice-pos-NUM.html">NUM</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (3; 13% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (2; 8% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 aux:neg	color:blue
1	Неылысса	неылысса	ADJ	A	Case=Nom|Number=Sing|Polarity=Neg	2	amod	_	_
2	сикт-грездын	сикт-грезд	NOUN	N	Case=Ine|Number=Sing	7	obl:lmod	_	_
3	сы	сійӧ	PRON	Pron	Case=Adp|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
4	йылысь	йылысь	ADP	Po	AdpType=Post|Case=Ela|Number=Sing	3	case	_	_
5	абу	абу	AUX	Pcle	Polarity=Neg	7	aux:neg	_	_
6	весиг	весиг	PART	Pcle	_	7	advmod	_	_
7	тӧдлӧмаӧсь	тӧдлыны	VERB	V	Evident=Nfh|Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	SpaceAfter=No
8	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:neg	color:blue
1	Тані	тані	ADV	Adv	_	4	advmod:lmod	_	GTtags=Adv
2	ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	GTtags=Pron,Pers,Sg1,Nom
3	абу	абу	AUX	Pcle	Polarity=Neg	4	aux:neg	_	GTtags=Adv,Neg
4	ӧтнам	ӧтнам	ADV	Adv	_	0	root	_	GTtags=Adv|SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 aux:neg	color:blue
1	—	—	PUNCT	PUNCT	_	4	punct	_	_
2	Сійӧ	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj:cop	_	GTtags=Pers,Sg3,Nom
3	ӧд	ӧд	ADV	Adv	Case=Nom|Number=Sing	4	advmod:eval	_	GTtags=Sg,Nom
4	ныв	ныв	NOUN	N	Case=Nom|Number=Sing	0	root	_	GTtags=Sg,Nom|SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	8	punct	_	_
6	абу	абу	AUX	_	Mood=Ind|Number=Sing|Polarity=Neg	8	aux:neg	_	GTtags=Neg,Cop,Ind,Sg
7	и	и	ADV	Adv	_	8	advmod:foc	_	_
8	мича	мича	ADJ	A	Case=Nom|Number=Sing	4	conj	_	GTtags=Sg,Nom
9	сылы	сійӧ	PRON	Pron	Case=Dat|Number=Sing|Person=3|PronType=Prs	8	obl	_	GTtags=Pers,Sg3,Dat
10	вӧзйысьнысӧ	вӧзйысьны	VERB	V	Clitic=So|VerbForm=Inf	8	csubj	_	GTtags=Refl,Inf,Clt/сӧ|SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


