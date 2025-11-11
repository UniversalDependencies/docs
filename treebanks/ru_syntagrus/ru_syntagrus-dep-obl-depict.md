---
layout: base
title:  'Statistics of obl:depict in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `obl:depict`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="ru_syntagrus-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ru_syntagrus-dep-obl-float.html">obl:float</a></tt>, <tt><a href="ru_syntagrus-dep-obl-pronmod.html">obl:pronmod</a></tt>, <tt><a href="ru_syntagrus-dep-obl-tmod.html">obl:tmod</a></tt>.

225 nodes (0%) are attached to their parents as `obl:depict`.

175 instances of `obl:depict` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.05777777777778.

The following 7 pairs of parts of speech are connected with `obl:depict`: <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (101; 45% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (61; 27% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (51; 23% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (7; 3% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obl:depict	color:blue
1	Тогда	тогда	ADV	_	Degree=Pos|PronType=Dem	3	advmod	3:advmod	pos="ADVPRO"|_
2	ты	ты	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	3:nsubj	_
3	сказал	сказать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
4	:	:	PUNCT	_	_	7	punct	3:punct	_
5	"	"	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
6	Следующим	следующий	ADJ	_	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	7	obl:depict	7:obl:ins	_
7	пойду	пойти	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	3	parataxis	3:parataxis	_
8	я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	7:nsubj	SpaceAfter=No
9	!	!	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
10	"	"	PUNCT	_	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 obl:depict	color:blue
1	Исцарапанная	исцарапать	VERB	_	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	9	obl:depict	9:obl:depict	SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	3:punct	_
3	избитая	избить	VERB	_	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	1	conj	1:conj|9:obl:depict	SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	7:punct	_
5	в	в	ADP	_	_	7	case	7:case	_
6	разорванном	разорвать	VERB	_	Aspect=Perf|Case=Loc|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	7	amod	7:amod	_
7	платье	платье	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	1	conj	1:conj|9:obl:depict	SpaceAfter=No
8	,	,	PUNCT	_	_	1	punct	1:punct	_
9	бежала	бежать	VERB	_	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
10	и	и	CCONJ	_	_	11	cc	11:cc	_
11	плакала	плакать	VERB	_	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	9	conj	0:root|9:conj	SpaceAfter=No
12	.	.	PUNCT	_	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 obl:depict	color:blue
1	Василий	Василий	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	3	nsubj	3:nsubj	_
2	Дмитриевич	Дмитриевич	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Pat|Number=Sing	1	appos	1:appos	_
3	уехал	уехать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	из	из	ADP	_	_	5	case	5:case	_
5	Сибири	Сибирь	PROPN	_	Animacy=Inan|Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	3	obl	3:obl:из:gen	_
6	молодым	молодой	ADJ	_	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	7	amod	7:amod	_
7	человеком	человек	NOUN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	3	obl:depict	3:obl:ins	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	3:punct	_

~~~


