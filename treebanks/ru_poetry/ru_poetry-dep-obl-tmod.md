---
layout: base
title:  'Statistics of obl:tmod in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="ru_poetry-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="ru_poetry-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ru_poetry-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="ru_poetry-dep-obl-float.html">obl:float</a></tt>, <tt><a href="ru_poetry-dep-obl-pronmod.html">obl:pronmod</a></tt>.

333 nodes (1%) are attached to their parents as `obl:tmod`.

212 instances of `obl:tmod` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.49249249249249.

The following 11 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (297; 89% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (16; 5% instances), <tt><a href="ru_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ru_poetry-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 obl:tmod	color:blue
1	В	в	ADP	_	_	2	case	_	before=<se><line_meter="Д3м~Д3м"/>
2	веке	век	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	9	obl:tmod	_	_
3	прогресса	прогресс	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	2	punct	_	_
5	скажи	сказать	VERB	_	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	_
7	кто	кто	PRON	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|PronType=Int	9	nsubj	_	_
8	казаков	казак	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	9	obj	_	_
9	угадал	угадать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	ccomp	_	SpaceAfter=No
10	?	?	PUNCT	_	_	5	punct	_	</se><br/>

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 obl:tmod	color:blue
1	И	и	CCONJ	_	_	4	cc	_	before=<se><line_meter="Ан4ж 2*2*2*2*1"/>
2	на	на	ADP	_	_	3	case	_	_
3	ночь	ночь	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	9	obl:tmod	_	_
4	стало	стать	VERB	_	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	все	всё	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	4	nsubj	_	_
6	в	в	ADP	_	_	8	case	_	_
7	этом	этот	DET	_	Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	8	det	_	_
8	мире	мир	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	9	obl	_	_
9	похоже	похожий	ADJ	_	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	4	xcomp	_	before=<rhyme-zone/>|SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	</se><br/>

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:tmod	color:blue
1	В	в	ADP	_	_	2	case	_	before=<p_class="verse"><line_meter="Ан3м 2*2*2*0"/><se>
2	ночь	ночь	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	где	где	ADV	_	Degree=Pos|PronType=Rel	2	acl:relcl	_	_
5	после	после	ADP	_	_	6	case	_	_
6	дождя	дождь	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	obl:tmod	_	SpaceAfter=No
7	...	...	PUNCT	_	_	2	punct	_	</se>

~~~


