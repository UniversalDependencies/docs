---
layout: base
title:  'Statistics of obl:arg in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="uk_parlamint-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="uk_parlamint-dep-obl-agent.html">obl:agent</a></tt>.

321 nodes (1%) are attached to their parents as `obl:arg`.

296 instances of `obl:arg` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.21806853582554.

The following 12 pairs of parts of speech are connected with `obl:arg`: <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (237; 74% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt> (29; 9% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (25; 8% instances), <tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (16; 5% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:arg	color:blue
1	Переходимо	переходити	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	до	до	ADP	ADP	Case=Gen	3	case	_	_
3	прийняття	прийняття	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	1	obl:arg	_	_
4	рішення	рішення	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	3	nmod	_	SpaceAfter=No
5	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:arg	color:blue
1	Про	про	ADP	ADP	Case=Acc	2	case	_	_
2	що	що	PRON	PRON	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Int	3	obl:arg	_	_
3	йдеться	йтися	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Reflex=Yes|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	?	?	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 obl:arg	color:blue
1	Прагнення	прагнення	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	9	nsubj:pass	_	_
2	українців	українець	NOUN	NOUN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	1	nmod	_	_
3	бути	бути	AUX	AUX	Aspect=Imp|VerbForm=Inf	4	cop	_	_
4	членами	член	NOUN	NOUN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Plur	1	acl	_	_
5	Європейського	європейський	ADJ	ADJ	Case=Gen|Gender=Masc|Number=Sing	6	amod	_	_
6	Союзу	союз	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	_
7	та	та	CCONJ	CCONJ	_	8	cc	_	_
8	НАТО	НАТО	PROPN	PROPN	Abbr=Yes|Animacy=Inan|Case=Gen|Gender=Neut|InflClass=Ind|Number=Sing	6	conj	_	_
9	відображені	відображений	ADJ	ADJ	Aspect=Perf|Case=Nom|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	_
10	в	в	ADP	ADP	Case=Loc	12	case	_	_
11	нашій	наш	DET	DET	Case=Loc|Gender=Fem|Number=Sing|Person=1|Poss=Yes|PronType=Prs	12	det	_	_
12	Конституції	конституція	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	9	obl:arg	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	9	punct	_	_

~~~


