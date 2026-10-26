---
layout: base
title:  'Statistics of obl:agent in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="ru_syntagrus-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="ru_syntagrus-dep-obl-float.html">obl:float</a></tt>, <tt><a href="ru_syntagrus-dep-obl-pronmod.html">obl:pronmod</a></tt>, <tt><a href="ru_syntagrus-dep-obl-tmod.html">obl:tmod</a></tt>.

2529 nodes (0%) are attached to their parents as `obl:agent`.

2321 instances of `obl:agent` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.90668248319494.

The following 9 pairs of parts of speech are connected with `obl:agent`: <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (1937; 77% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (312; 12% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (246; 10% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (13; 1% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (12; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obl:agent	color:blue
1	Донато	донато	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	установил	установить	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	_	_	6	punct	6:punct	_
4	что	что	SCONJ	_	_	6	mark	6:mark	_
5	они	они	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj:pass	6:nsubj:pass	_
6	сделаны	сделать	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	2	ccomp	2:ccomp	_
7	человеком	человек	NOUN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	6	obl:agent	6:obl:ins	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 obl:agent	color:blue
1	По	по	ADP	_	_	2	case	2:case	_
2	сути	суть	NOUN	_	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	8	parataxis:discourse	8:parataxis:discourse	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	2:punct	_
4	сам	сам	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Emp	5	det	5:det	_
5	выбор	выбор	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	8	nsubj:pass	8:nsubj:pass	_
6	профессии	профессия	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	5	nmod	5:nmod:gen	_
7	был	быть	AUX	_	Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	8	aux:pass	8:aux:pass	_
8	обусловлен	обусловить	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	_
9	именно	именно	PART	_	_	10	advmod	10:advmod	_
10	ею	она	PRON	_	Case=Ins|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	obl:agent	8:obl:ins	SpaceAfter=No
11	.	.	PUNCT	_	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obl:agent	color:blue
1	Иногда	иногда	ADV	_	Degree=Pos	2	advmod	2:advmod	_
2	собирали	собирать	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	картофель	картофель	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	obj	2:obj	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	6:punct	_
5	насильно	насильно	ADV	_	Degree=Pos	6	advmod	6:advmod	_
6	введенный	ввести	VERB	_	Animacy=Inan|Aspect=Perf|Case=Acc|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	3	acl	3:acl	_
7	Екатериной	Екатерина	PROPN	_	Animacy=Anim|Case=Ins|Gender=Fem|NameType=Giv|Number=Sing	6	obl:agent	6:obl:agent	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


