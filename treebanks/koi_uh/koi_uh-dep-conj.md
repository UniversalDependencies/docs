---
layout: base
title:  'Statistics of conj in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `conj`

This relation is universal.

53 nodes (6%) are attached to their parents as `conj`.

53 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.07547169811321.

The following 12 pairs of parts of speech are connected with `conj`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-VERB.html">VERB</a></tt> (26; 49% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (7; 13% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (3; 6% instances), <tt><a href="koi_uh-pos-PRON.html">PRON</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (3; 6% instances), <tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt>-<tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt> (3; 6% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt> (2; 4% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt>-<tt><a href="koi_uh-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 conj	color:blue
1	Сія	сія	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	пондыліс	пондывны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3
3	чапкыны	чапкыны	VERB	_	VerbForm=Inf	2	xcomp	_	GTtags=Inf
4	куритны	куритны	VERB	_	VerbForm=Inf	3	xcomp	_	GTtags=Inf
5	да	да	CCONJ	_	_	6	cc	_	_
6	юны	юны	VERB	_	VerbForm=Inf	4	conj	_	GTtags=Inf|SpaceAfter=No
7	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 conj	color:blue
1	Ордчӧн	ордчӧн	ADV	Adv	_	3	advmod:lmod	_	GTtags=Adv
2	мекӧт	ме	PRON	Pron	Case=Com|Number=Sing|Person=1|PronType=Prs	1	nmod	_	GTtags=Pron,Pers,Sg1,Com
3	пукалӧ	пукавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	GTtags=V,TV,Ind,Prs,Sg3
4	сьӧд	сьӧд	ADJ	A	_	5	amod	_	GTtags=A
5	тошока	тошок	NOUN	N	Derivation=ProprietiveMod|Number=Sing	9	amod	_	GTtags=N,Sg,Der,Der/ProprietiveMod,A
6	и	и	CCONJ	CC	_	8	cc	_	GTtags=CC
7	гардчӧмкодь	гардчыны	VERB	V	Case=Nom|Derivation=CompMod|Number=Sing|Tense=Past|VerbForm=Part	8	advcl	_	GTtags=V,IV,Ind,Prt2,Sg3,Der,Der/CompMod
8	уссэза	ус	NOUN	N	Derivation=ProprietiveMod|Number=Plur	5	conj	_	GTtags=N,Pl,Der,Der/ProprietiveMod,A
9	мужик	мужик	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	GTtags=N,Sg,Nom|SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 conj	color:blue
1	Игаузу	Игаузу	PROPN	_	Case=Nom|NameType=Geo|Number=Sing	4	dislocated	_	GTtags=Prop,Sg,Nom
2	-	-	PUNCT	_	_	1	punct	_	_
3	этӧ	эта	PRON	_	Case=Nom|Number=Sing|PronType=Dem	4	nsubj	_	GTtags=Dem,Sg,Nom
4	ыджыт	ыджыт	ADJ	_	_	0	root	_	_
5	али	али	CCONJ	_	_	7	cc	_	_
6	учӧт	учӧт	ADJ	_	_	7	amod	_	_
7	страна	страна	NOUN	_	Case=Nom|Number=Sing	4	conj	_	GTtags=Sg,Nom|SpaceAfter=No
8	?	?	PUNCT	CLB	_	4	punct	_	_

~~~


