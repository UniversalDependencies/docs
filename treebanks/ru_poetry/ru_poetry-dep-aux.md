---
layout: base
title:  'Statistics of aux in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="ru_poetry-dep-aux-pass.html">aux:pass</a></tt>.

126 nodes (0%) are attached to their parents as `aux`.

75 instances of `aux` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.92857142857143.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-AUX.html">AUX</a></tt> (111; 88% instances), <tt><a href="ru_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_poetry-pos-AUX.html">AUX</a></tt> (8; 6% instances), <tt><a href="ru_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_poetry-pos-AUX.html">AUX</a></tt> (4; 3% instances), <tt><a href="ru_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_poetry-pos-AUX.html">AUX</a></tt> (2; 2% instances), <tt><a href="ru_poetry-pos-DET.html">DET</a></tt>-<tt><a href="ru_poetry-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux	color:blue
1	Всё	всё	PRON	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	2	obj	_	before=<se><line_meter="Х5ж"/>
2	смотрела	смотреть	VERB	_	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	б	б	AUX	_	Mood=Cnd	2	aux	_	_
4	я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	_
6	долго	долго	ADV	_	Degree=Pos	8	advmod	_	_
7	б	б	AUX	_	Mood=Cnd	8	aux	_	_
8	смотрела	смотреть	VERB	_	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	before=<rhyme-zone/>|SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	</se><br/>

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux	color:blue
1	А	а	CCONJ	_	_	2	cc	_	before=<p_class="verse"><line_meter="Аф3ж"/><se>
2	лучше	лучше	ADJ	_	Degree=Cmp	0	root	_	_
3	бы	бы	AUX	_	Mood=Cnd	2	aux	_	_
4	--	--	PUNCT	_	_	5	punct	_	_
5	прочь	прочь	ADV	_	Degree=Pos	2	csubj	_	_
6	из	из	ADP	_	_	7	case	_	_
7	геенны	геенна	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	5	orphan	_	before=<rhyme-zone/>|SpaceAfter=No
8	…	…	PUNCT	_	_	7	punct	_	<br/>
9	(	(	PUNCT	_	_	10	punct	_	before=<line_meter="Аф3ж"/>|SpaceAfter=No
10	Ехидны	ехидна	NOUN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Plur	2	parataxis	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	шакалы	шакал	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	10	conj	_	SpaceAfter=No
13	,	,	PUNCT	_	_	14	punct	_	_
14	гиены	гиена	NOUN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Plur	10	conj	_	before=<rhyme-zone/>|SpaceAfter=No
15	.	.	PUNCT	_	_	10	punct	_	SpaceAfter=No
16	)	)	PUNCT	_	_	10	punct	_	</se></p>

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
1	О	о	INTJ	_	_	6	discourse	_	before=<p_class="verse"><line_meter="Я4ж"/><se>|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	если	если	SCONJ	_	_	6	mark	_	_
4	б	б	AUX	_	Mood=Cnd	6	aux	_	_
5	только	только	PART	_	_	6	advmod	_	_
6	сроки	срок	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
7	!	!	PUNCT	_	_	6	punct	_	</se>

~~~


