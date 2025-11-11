---
layout: base
title:  'Statistics of obl:float in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `obl:float`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="ru_syntagrus-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ru_syntagrus-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="ru_syntagrus-dep-obl-pronmod.html">obl:pronmod</a></tt>, <tt><a href="ru_syntagrus-dep-obl-tmod.html">obl:tmod</a></tt>.

753 nodes (0%) are attached to their parents as `obl:float`.

546 instances of `obl:float` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.1195219123506.

The following 12 pairs of parts of speech are connected with `obl:float`: <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (594; 79% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (69; 9% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (30; 4% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (29; 4% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (20; 3% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obl:float	color:blue
1	Чтобы	чтобы	SCONJ	_	Mood=Cnd	3	mark	3:mark	_
2	не	не	PART	_	Polarity=Neg	3	advmod	3:advmod	_
3	эволюционировать	эволюционировать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	0	root	0:root	_
4	самим	сам	DET	_	Case=Dat|Number=Plur|PronType=Emp	3	obl:float	3:obl:dat	_
5	как	как	ADV	_	Degree=Pos|ExtPos=ADV	7	advmod	7:advmod	_
6	можно	можно	VERB	_	_	5	fixed	5:fixed	_
7	дольше	долго	ADV	_	Degree=Cmp	3	advmod	3:advmod	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:float	color:blue
1	Я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	_
2	видел	видеть	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	ccomp	5:ccomp	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	2:punct	_
4	-	-	PUNCT	_	_	2	punct	2:punct	_
5	сказал	сказать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	Платонов	Платонов	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	5	nsubj	5:nsubj	_
7	первый	первый	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	obl:float	5:obl:nom	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 obl:float	color:blue
1	Но	но	CCONJ	_	_	6	cc	6:cc	_
2	эмиграция	эмиграция	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	nsubj	6:nsubj	_
3	сама	сам	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Emp	6	obl:float	6:obl:nom	_
4	по	по	ADP	_	_	5	case	5:case	_
5	себе	себя	PRON	_	Case=Dat|PronType=Prs|Reflex=Yes	3	nmod	3:nmod:по:dat	_
6	небольшая	небольшой	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	6:punct	_

~~~


