---
layout: base
title:  'Statistics of amod in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `amod`

This relation is universal.

260 nodes (5%) are attached to their parents as `amod`.

259 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20769230769231.

The following 8 pairs of parts of speech are connected with `amod`: <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (218; 84% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (22; 8% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (7; 3% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (7; 3% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 amod	color:blue
1	Игаузу	Игаузу	NOUN	N	Case=Nom|Number=Sing	7	nsubj	_	Lang=Mixed
2	-	-	PUNCT	PUNCT	_	7	punct	_	_
3	тайӧ	тайӧ	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	7	det	_	_
4	ыджыд	ыджыд	ADJ	A	Case=Nom|Number=Sing	7	amod	_	_
5	либӧ	либӧ	CCONJ	CC	_	6	cc	_	Lang=Mixed
6	ичӧт	ичӧт	ADJ	A	Case=Nom|Number=Sing	4	conj	_	_
7	канму	канму	NOUN	N	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
8	?	?	PUNCT	CLB	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	Кыдзи	кыдзи	ADV	Adv	PronType=Int	2	advmod	_	_
2	лои	лоны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	Краснӧй	краснӧй	ADJ	A	Case=Nom|Number=Sing	4	amod	_	_
4	Армияса	армияса	ADJ	A	Case=Nom|Number=Sing	5	amod	_	_
5	командирӧн	командир	NOUN	N	Case=Ins|Number=Sing	2	obl	_	SpaceAfter=No
6	?	?	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 amod	color:blue
1	Митяяслӧн	Митя	NOUN	N	Animacy=Hum|Case=Gen|Number=Plur	2	nmod:poss	_	GTtags=Prop,Sem/Mal,Pl,Gen
2	керкаыс	керка	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	nsubj:cop	_	GTtags=Sg,Nom,PxSg3
3	бокынджык	бокын	ADV	Adv	Case=Ine|Degree=Cmp	0	root	_	GTtags=Ine,Comp
4	грездса	грезд	NOUN	N	Case=Nom|Derivation=LocMod|Number=Sing	6	amod	_	GTtags=Sg,Der,Der/LocMod,A,Sg,Nom
5	мукӧд	мукӧд	PRON	Pron	Case=Nom|Number=Sing	6	det	_	GTtags=Sg,Nom
6	керкаясысь	керка	NOUN	N	Case=Ela|Number=Plur	3	obl	_	GTtags=Pl,Ela|SpaceAfter=No
7	...	...	PUNCT	CLB	_	3	punct	_	_

~~~


