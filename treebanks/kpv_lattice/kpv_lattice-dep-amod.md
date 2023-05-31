---
layout: base
title:  'Statistics of amod in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `amod`

This relation is universal.

345 nodes (4%) are attached to their parents as `amod`.

344 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22608695652174.

The following 10 pairs of parts of speech are connected with `amod`: <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (293; 85% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (22; 6% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (10; 3% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (8; 2% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 amod	color:blue
1	Игаузу	Игаузу	NOUN	N	Case=Nom|Number=Sing	7	nsubj	_	OrigLang=ru
2	-	-	PUNCT	PUNCT	_	7	punct	_	_
3	тайӧ	тайӧ	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	7	det	_	_
4	ыджыд	ыджыд	ADJ	A	Case=Nom|Number=Sing	7	amod	_	_
5	либӧ	либӧ	CCONJ	CC	_	6	cc	_	OrigLang=ru
6	ичӧт	ичӧт	ADJ	A	Case=Nom|Number=Sing	4	conj	_	_
7	канму	канму	NOUN	N	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
8	?	?	PUNCT	CLB	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
1	Чужӧмыс	чужӧм	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	nsubj	_	_
2	сылӧн	сійӧ	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	1	nmod	_	_
3	лои	лоны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
4	мел	мел	NOUN	N	Case=Nom|Number=Sing	5	nmod	_	_
5	кодь	кодь	ADJ	A	_	6	amod	_	_
6	еджыд	еджыд	ADJ	A	Case=Nom|Number=Sing	3	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 amod	color:blue
1	Меным	ме	PRON	Pron	Case=Dat|Number=Sing|Person=1|PronType=Prs	2	obl	_	GTtags=Pers,Sg1,Dat
2	кажитчис	кажитчыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Refl,Ind,Prt1,Sg3|SpaceAfter=No
3	,	,	PUNCT	CLB	_	4	punct	_	_
4	бӧръя	бӧръя	ADJ	A	Case=Nom|Number=Sing	5	amod	_	GTtags=Sg,Nom
5	воӧмсянь	воны	VERB	V	Case=Egr|Number=Sing|VerbForm=Vnoun	9	obl	_	GTtags=IV,Der,Der/ӧм,Der/NomAct,N,Sg,Egr
6	пиньясыс	пинь	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	9	nsubj	_	GTtags=Pl,Nom,PxSg3
7	сылӧн	сійӧ	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	9	nmod	_	GTtags=Pers,Sg3,Gen
8	ещӧ	ещӧ	ADV	Adv	_	9	advmod:tmod	_	_
9	вижӧдӧмаӧсь	вижӧдны	VERB	V	Evident=Nfh|Mood=Ind|Number=Plur|Person=3|Tense=Past	2	ccomp	_	GTtags=IV,Ind,Prt2,Pl3|SpaceAfter=No
10	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


