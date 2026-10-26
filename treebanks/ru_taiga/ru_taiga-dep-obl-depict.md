---
layout: base
title:  'Statistics of obl:depict in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `obl:depict`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="ru_taiga-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ru_taiga-dep-obl-float.html">obl:float</a></tt>, <tt><a href="ru_taiga-dep-obl-pronmod.html">obl:pronmod</a></tt>, <tt><a href="ru_taiga-dep-obl-tmod.html">obl:tmod</a></tt>.

95 nodes (0%) are attached to their parents as `obl:depict`.

63 instances of `obl:depict` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.41052631578947.

The following 10 pairs of parts of speech are connected with `obl:depict`: <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (50; 53% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (27; 28% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (7; 7% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (4; 4% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-DET.html">DET</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 obl:depict	color:blue
1	но	но	CCONJ	_	_	3	cc	_	_
2	птичка	птичка	NOUN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	говорит	говорить	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	позволь	позволить	VERB	_	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	3	parataxis	_	_
5	и	и	CCONJ	_	_	7	cc	_	_
6	вдруг	вдруг	ADV	_	Degree=Pos	7	advmod	_	_
7	летает	летать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
8	безголова	безголовый	ADJ	_	Degree=Pos|Gender=Fem|Number=Sing|Variant=Short	7	obl:depict	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl:depict	color:blue
1	Видит	видеть	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	feat="Transit=Tran"|SpaceAfter=No
2	,	,	PUNCT	_	_	6	punct	_	_
3	лоток	лоток	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
4	накрытый	накрыть	VERB	_	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	3	amod	_	feat="Transit=Tran"|_
5	приготовлен	приготовить	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	6	obl:depict	_	feat="Transit=Tran"|_
6	стоит	стоять	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	feat="Transit=Intr"|SpaceAfter=No
7	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:depict	color:blue
1	Расти	расти	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	2	csubj	_	feat="Transit=Intr"|_
2	лучше	хороший	ADJ	_	Degree=Cmp	0	root	_	pos="PRED"|_
3	неучем	неуч	NOUN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	1	obl:depict	_	SpaceAfter=No
4	.	.	PUNCT	_	_	2	punct	_	sent_after='</p>\n<p>'

~~~


