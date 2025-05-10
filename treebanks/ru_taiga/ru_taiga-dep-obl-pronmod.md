---
layout: base
title:  'Statistics of obl:pronmod in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `obl:pronmod`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="ru_taiga-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ru_taiga-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="ru_taiga-dep-obl-float.html">obl:float</a></tt>, <tt><a href="ru_taiga-dep-obl-tmod.html">obl:tmod</a></tt>.

163 nodes (0%) are attached to their parents as `obl:pronmod`.

88 instances of `obl:pronmod` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14110429447853.

The following 13 pairs of parts of speech are connected with `obl:pronmod`: <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (39; 24% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (36; 22% instances), <tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (30; 18% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (20; 12% instances), <tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (14; 9% instances), <tt><a href="ru_taiga-pos-DET.html">DET</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (6; 4% instances), <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (6; 4% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (5; 3% instances), <tt><a href="ru_taiga-pos-DET.html">DET</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obl:pronmod	color:blue
1	СОСИСКИ	сосиска	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	3	nsubj	_	_
2	там	там	ADV	_	Degree=Pos|PronType=Dem	3	advmod	_	_
3	что	что	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	0	root	_	_
4	надо	надо	VERB	_	_	3	obl:pronmod	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obl:pronmod	color:blue
1	Думай	думать	VERB	_	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	feat="Transit=Intr"|before='<i>'
2	о	о	ADP	_	_	3	case	_	_
3	чем	что	PRON	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing|PronType=Rel	1	obl	_	_
4	угодно	угодный	ADJ	_	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	3	obl:pronmod	_	pos="PRED"|SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	_
6	но	но	CCONJ	_	_	8	cc	_	_
7	не	не	PART	_	Polarity=Neg	8	advmod	_	_
8	забывай	забывать	VERB	_	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	1	conj	_	feat="Transit=Intr"|_
9	о	о	ADP	_	_	10	case	_	_
10	деле	дело	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	8	obl	_	SpaceAfter=No|after='</i>'
11	.	.	PUNCT	_	_	1	punct	_	sent_after='</p>\n</body>\n</root>'

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obl:pronmod	color:blue
1	Словарь	словарь	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	мог	мочь	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	feat="Transit=Intr,Tran"|_
3	расширяться	расширяться	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Mid	2	xcomp	_	feat="Transit=Intr"|_
4	как	как	ADV	_	Degree=Pos|PronType=Rel	3	advmod	_	pos="ADVPRO"|_
5	угодно	угодный	ADJ	_	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	4	obl:pronmod	_	pos="PRED"|SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	_	_

~~~


