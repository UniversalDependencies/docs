---
layout: base
title:  'Statistics of nmod:poss in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-nmod.html">nmod</a></tt>.
There are also 3 other language-specific subtypes of `nmod`: <tt><a href="kpv_lattice-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="kpv_lattice-dep-nmod-obj.html">nmod:obj</a></tt>, <tt><a href="kpv_lattice-dep-nmod-subj.html">nmod:subj</a></tt>.

49 nodes (1%) are attached to their parents as `nmod:poss`.

48 instances of `nmod:poss` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.55102040816327.

The following 9 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (28; 57% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (13; 27% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (2; 4% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Менам	ме	PRON	Pron	Case=Gen|Number=Sing|Person=1|PronType=Prs	2	nmod:poss	_	GTtags=Pers,Sg1,Gen
2	лолӧй	лов	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	4	nsubj	_	GTtags=Sg,Nom,PxSg1
3	вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	aux:tense	_	GTtags=IV,Ind,Prt1,Sg3
4	тырӧма	тырны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=IV,Der,Der/ӧм,PastPtc,N,Sg,Nom
5	удал	удал	ADJ	A	Case=Nom|Number=Sing	6	amod	_	GTtags=Sg,Nom
6	кыпыдлунӧн	кыпыдлун	NOUN	N	Case=Ins|Number=Sing	4	obl	_	GTtags=Sg,Ins|SpaceAfter=No
7	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod:poss	color:blue
1	Уличпӧлӧнса	Уличпӧлӧнса	ADJ	A	Case=Nom|Number=Sing	2	amod	_	GTtags=Sg,Nom
2	пуяслӧн	пу	NOUN	N	Case=Gen|Number=Plur	4	nmod:poss	_	GTtags=Pl,Gen
3	ув	ув	NOUN	N	Case=Nom|NounType=Relat|Number=Sing	4	nmod	_	GTtags=Relat,Sg,Nom
4	вож	вож	NOUN	N	Case=Nom|Number=Sing	6	obl:lmod	_	GTtags=Sg,Nom
5	вылын	вылын	ADP	Adp	AdpType=Post|Case=Ine|Number=Sing	4	case	_	GTtags=Po,Sg,Ine
6	пукаліс	пукавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=IV,Ind,Prt1,Sg3
7	лыдтӧм	лыдтӧм	ADJ	A	Case=Nom|Number=Sing	10	amod	_	GTtags=N,Der,Der/тӧм,Sg,Nom
8	-	-	PUNCT	_	_	7	punct	_	_
9	тшӧттӧм	тшӧттӧм	ADJ	A	_	7	conj	_	_
10	пышкай	пышкай	NOUN	N	Case=Nom|Number=Sing	6	nsubj	_	GTtags=Sg,Nom|SpaceAfter=No
11	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:poss	color:blue
1	Кӧні	кӧні	ADV	Adv	Case=Ine|PronType=Int	5	advmod:lmod	_	GTtags=Ine,Interr
2	тіян	тэ	PRON	Pron	Case=Gen|Number=Plur|Person=2|PronType=Prs	3	nmod:poss	_	GTtags=Pers,Pl2,Gen
3	кӧсйысьлӧм	кӧсйысьлыны	VERB	V	Tense=Past|VerbForm=Part	5	acl	_	GTtags=TV,Der,Der/ӧм,PastPtc
4	ыджыд	ыджыд	ADJ	A	Case=Nom|Number=Sing	5	amod	_	GTtags=Sg,Nom
5	нефтьныд	нефть	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Plur|Person[psor]=2	0	root	_	GTtags=Sg,Nom,PxPl2|SpaceAfter=No
6	,	,	PUNCT	CLB	_	8	punct	_	_
7	ыджыд	ыджыд	ADJ	A	Case=Nom|Number=Sing	8	amod	_	GTtags=Sg,Nom
8	газныд	газ	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Plur|Person[psor]=2	5	conj	_	GTtags=Sg,Nom,PxPl2|SpaceAfter=No
9	?	?	PUNCT	CLB	_	5	punct	_	_

~~~


