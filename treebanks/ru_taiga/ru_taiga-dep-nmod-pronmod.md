---
layout: base
title:  'Statistics of nmod:pronmod in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `nmod:pronmod`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="ru_taiga-dep-nmod-float.html">nmod:float</a></tt>.

211 nodes (0%) are attached to their parents as `nmod:pronmod`.

126 instances of `nmod:pronmod` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13744075829384.

The following 16 pairs of parts of speech are connected with `nmod:pronmod`: <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (47; 22% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (41; 19% instances), <tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (35; 17% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (28; 13% instances), <tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (22; 10% instances), <tt><a href="ru_taiga-pos-DET.html">DET</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (11; 5% instances), <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (6; 3% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt> (6; 3% instances), <tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="ru_taiga-pos-DET.html">DET</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod:pronmod	color:blue
1	Думай	думать	VERB	_	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	feat="Transit=Intr"|before='<i>'
2	о	о	ADP	_	_	3	case	_	_
3	чем	что	PRON	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing|PronType=Rel	1	obl	_	_
4	угодно	угодный	ADJ	_	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	3	nmod:pronmod	_	pos="PRED"|SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	_
6	но	но	CCONJ	_	_	8	cc	_	_
7	не	не	PART	_	Polarity=Neg	8	advmod	_	_
8	забывай	забывать	VERB	_	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	1	conj	_	feat="Transit=Intr"|_
9	о	о	ADP	_	_	10	case	_	_
10	деле	дело	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	8	obl	_	SpaceAfter=No|after='</i>'
11	.	.	PUNCT	_	_	1	punct	_	sent_after='</p>\n</body>\n</root>'

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod:pronmod	color:blue
1	СОСИСКИ	сосиска	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	3	nsubj	_	_
2	там	там	ADV	_	Degree=Pos|PronType=Dem	3	advmod	_	_
3	что	что	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	0	root	_	_
4	надо	надо	VERB	_	_	3	nmod:pronmod	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nmod:pronmod	color:blue
1	Словарь	словарь	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	мог	мочь	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	feat="Transit=Intr,Tran"|_
3	расширяться	расширяться	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Mid	2	xcomp	_	feat="Transit=Intr"|_
4	как	как	ADV	_	Degree=Pos|PronType=Rel	3	advmod	_	pos="ADVPRO"|_
5	угодно	угодный	ADJ	_	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	4	nmod:pronmod	_	pos="PRED"|SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	_	_

~~~


