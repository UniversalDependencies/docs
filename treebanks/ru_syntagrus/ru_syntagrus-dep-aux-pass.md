---
layout: base
title:  'Statistics of aux:pass in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-aux.html">aux</a></tt>.

3407 nodes (0%) are attached to their parents as `aux:pass`.

3315 instances of `aux:pass` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18256530672146.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-AUX.html">AUX</a></tt> (3405; 100% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	"	"	PUNCT	_	_	4	punct	4:punct	SpaceAfter=No
2	Алгоризм	алгоризм	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj:pass	4:nsubj	_
3	был	быть	AUX	_	Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	aux:pass	4:aux	_
4	придуман	придумать	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	в	в	ADP	_	_	6	case	6:case	_
6	Греции	Греция	PROPN	_	Animacy=Inan|Case=Loc|Gender=Fem|NameType=Geo|Number=Sing	4	obl	4:obl:в:loc	SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 aux:pass	color:blue
1	В	в	ADP	_	_	2	case	2:case	_
2	дальнейшем	дальнейший	ADJ	_	Case=Loc|Degree=Sup|Gender=Neut|Number=Sing	9	obl	9:obl:в:loc	_
3	рост	рост	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	9	nsubj:pass	9:nsubj:pass	_
4	данного	данный	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	5	amod	5:amod	_
5	сегмента	сегмент	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	nmod	3:nmod:gen	_
6	рынка	рынок	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	5:nmod:gen	_
7	будет	быть	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux:pass	9:aux:pass	_
8	тесно	тесно	ADV	_	Degree=Pos	9	advmod	9:advmod	_
9	взаимосвязан	взаимосвязанный	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	0	root	0:root	_
10	с	с	ADP	_	_	11	case	11:case	_
11	развитием	развитие	NOUN	_	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	9	obl	9:obl:с:ins|22:nsubj	_
12	торговых	торговый	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	13	amod	13:amod	_
13	сетей	сеть	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	11	nmod	11:nmod:gen	SpaceAfter=No
14	,	,	PUNCT	_	_	22	punct	22:punct	_
15	которое	который	DET	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	22	nsubj	11:ref	SpaceAfter=No
16	,	,	PUNCT	_	_	15	punct	15:punct	_
17	по	по	ADP	_	_	18	case	18:case	_
18	оценкам	оценка	NOUN	_	Animacy=Inan|Case=Dat|Gender=Fem|Number=Plur	22	parataxis	22:parataxis	_
19	аналитиков	аналитик	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	18	nmod	18:nmod:gen	SpaceAfter=No
20	,	,	PUNCT	_	_	18	punct	18:punct	_
21	будет	быть	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	22	cop	22:cop	_
22	одним	один	NUM	_	Case=Ins|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	11	acl:relcl	11:acl:relcl	_
23	из	из	ADP	_	_	25	case	25:case	_
24	самых	самый	DET	_	Case=Gen|Number=Plur|PronType=Emp	25	det	25:det	_
25	активных	активный	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	22	nmod	22:nmod:из:gen	_
26	в	в	ADP	_	_	28	case	28:case	_
27	российской	российский	ADJ	_	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	28	amod	28:amod	_
28	экономике	экономика	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	25	obl	25:obl:в:loc	SpaceAfter=No
29	.	.	PUNCT	_	_	9	punct	9:punct	_

~~~


