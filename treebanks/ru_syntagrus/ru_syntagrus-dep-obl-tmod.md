---
layout: base
title:  'Statistics of obl:tmod in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="ru_syntagrus-dep-obl-agent.html">obl:agent</a></tt>.

838 nodes (0%) are attached to their parents as `obl:tmod`.

595 instances of `obl:tmod` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.19212410501193.

The following 13 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (754; 90% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (25; 3% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (24; 3% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (14; 2% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (8; 1% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 obl:tmod	color:blue
1	Рано	рано	ADV	_	Degree=Pos	2	advmod	2:advmod	_
2	утром	утро	NOUN	_	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	5	obl:tmod	5:obl:tmod:ins	_
3	я	я	PRON	_	Case=Nom|Number=Sing|Person=1	5	nsubj:pass	5:nsubj:pass	_
4	был	быть	AUX	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	aux:pass	5:aux:pass	_
5	разбужен	разбудить	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	_
6	стрекотанием	стрекотание	NOUN	_	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	5	obl:agent	5:obl:agent	_
7	мотора	мотор	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	nmod	6:nmod:gen	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	5:punct	_~

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obl:tmod	color:blue
1	Завязка	завязка	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	5	nsubj	5:nsubj	_
2	этого	этот	DET	_	Case=Gen|Gender=Neut|Number=Sing	4	det	4:det	_
3	вечернего	вечерний	ADJ	_	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	4	amod	4:amod	_
4	исчезновения	исчезновение	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	1	nmod	1:nmod:gen	_
5	произошла	произойти	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	месяцем	месяц	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	7	obl:tmod	7:obl:tmod:ins	_
7	раньше	рано	ADV	_	Degree=Cmp	5	advmod	5:advmod	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	5:punct	_~

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 obl:tmod	color:blue
1	Кто	кто	PRON	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	ездил	ездить	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	acl	6:acl	_
3	по	по	ADP	_	_	4	case	4:case	_
4	Молдавии	Молдавия	PROPN	_	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	2	obl	2:obl:по:dat	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	4:punct	_
6	тот	тот	DET	_	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	7:nsubj	_
7	знает	знать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	7:punct	_
9	как	как	ADV	_	Degree=Pos	10	advmod	10:advmod	_
10	красива	красивый	ADJ	_	Degree=Pos|Gender=Fem|Number=Sing|Variant=Short	7	obl	7:obl	_
11	эта	этот	DET	_	Case=Nom|Gender=Fem|Number=Sing	12	det	12:det	_
12	земля	земля	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	10	nsubj	10:nsubj	_
13	весной	весна	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	10	obl:tmod	10:obl:tmod:ins	SpaceAfter=No
14	.	.	PUNCT	_	_	7	punct	7:punct	_~

~~~


