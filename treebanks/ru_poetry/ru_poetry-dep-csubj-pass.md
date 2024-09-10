---
layout: base
title:  'Statistics of csubj:pass in UD_Russian-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Russian-Poetry: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="ru_poetry-dep-csubj.html">csubj</a></tt>.

8 nodes (0%) are attached to their parents as `csubj:pass`.

4 instances of `csubj:pass` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.25.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_poetry-pos-VERB.html">VERB</a></tt> (8; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 csubj:pass	color:blue
1	Нам	мы	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	5	iobj	_	before=<p_class="verse"><line_meter="Я3д"/><se>
2	в	в	ADP	_	_	3	case	_	_
3	бой	бой	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obl	_	_
4	идти	идти	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	5	csubj:pass	_	_
5	приказано	приказать	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	before=<rhyme-zone/>|after=<br/>
6	«	«	PUNCT	_	_	9	punct	_	before=<line_meter="Я3ж"/>|SpaceAfter=No
7	За	за	ADP	_	_	8	case	_	_
8	землю	земля	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	9	obl	_	_
9	станьте	стать	VERB	_	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	5	parataxis	_	_
10	честно	честно	ADV	_	Degree=Pos	9	advmod	_	before=<rhyme-zone/>|SpaceAfter=No
11	!	!	PUNCT	_	_	9	punct	_	SpaceAfter=No
12	»	»	PUNCT	_	_	9	punct	_	</se><br/>

~~~


