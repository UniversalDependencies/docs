---
layout: base
title:  'Statistics of nsubj:outer in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="ru_syntagrus-dep-nsubj-pass.html">nsubj:pass</a></tt>.

8 nodes (0%) are attached to their parents as `nsubj:outer`.

8 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.875.

The following 6 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (2; 25% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (2; 25% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (1; 13% instances), <tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (1; 13% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj:outer	color:blue
1	Спорт	спорт	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj:outer	6:nsubj:outer	_
2	-	-	PUNCT	_	_	1	punct	1:punct	_
3	это	это	PRON	_	PronType=Dem	6	expl	6:expl	_
4	когда	когда	SCONJ	_	_	6	mark	6:mark	_
5	все	все	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	6	nsubj	6:nsubj	_
6	ясно	ясный	ADJ	_	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	0:root	SpaceAfter=No
7	:	:	PUNCT	_	_	10	punct	6:punct	_
8	вон	вон	ADV	_	Degree=Pos	10	advmod	10:advmod	_
9	тот	тот	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	10	nsubj	10:nsubj	_
10	быстрее	быстрый	ADJ	_	Degree=Cmp	6	parataxis	6:parataxis	SpaceAfter=No
11	,	,	PUNCT	_	_	15	punct	15:punct	_
12	этот	этот	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	15	nsubj	15:nsubj	_
13	-	-	PUNCT	_	_	12	punct	12:punct	_
14	в	в	ADP	_	_	15	case	15:case	_
15	нокауте	нокаут	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	10	conj	6:parataxis|10:conj	SpaceAfter=No
16	.	.	PUNCT	_	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 nsubj:outer	color:blue
1	Ты	ты	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	2	nsubj	2:nsubj	_
2	думаешь	думать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	_	_	8	punct	8:punct	_
4	зима	зима	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	8	nsubj:outer	8:nsubj:outer	_
5	-	-	PUNCT	_	_	4	punct	4:punct	_
6	это	это	PRON	_	PronType=Dem	8	expl	8:expl	_
7	когда	когда	SCONJ	_	_	8	mark	8:mark	_
8	выпадает	выпадать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	2:ccomp	_
9	снег	снег	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	8	nsubj	8:nsubj	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubj:outer	color:blue
1	Это	это	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	7	nsubj:outer	7:nsubj:outer	_
2	когда	когда	SCONJ	_	_	7	mark	7:mark	_
3	у	у	ADP	_	_	4	case	4:case	_
4	соискателя	соискатель	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	7	obl	7:obl:у:gen	_
5	работы	работа	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	4	nmod	4:nmod:gen	_
6	выбор	выбор	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	7	nsubj	7:nsubj	_
7	больше	большой	ADJ	_	Degree=Cmp	0	root	0:root	SpaceAfter=No
8	,	,	PUNCT	_	_	11	punct	11:punct	_
9	чем	чем	SCONJ	_	_	11	mark	11:mark	_
10	у	у	ADP	_	_	11	case	11:case	_
11	тех	тот	DET	_	Case=Gen|Number=Plur|PronType=Dem	7	det	7:det|15:nsubj	SpaceAfter=No
12	,	,	PUNCT	_	_	15	punct	15:punct	_
13	кто	кто	PRON	_	Case=Nom|PronType=Int,Rel	15	nsubj	11:ref	_
14	ее	она	PRON	_	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	15	obj	15:obj	_
15	дает	давать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	acl:relcl	11:acl:relcl	SpaceAfter=No
16	.	.	PUNCT	_	_	7	punct	7:punct	_

~~~


