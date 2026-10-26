---
layout: base
title:  'Statistics of det in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `det`

This relation is universal.
There are 2 language-specific subtypes of `det`: <tt><a href="uk_parlamint-dep-det-numgov.html">det:numgov</a></tt>, <tt><a href="uk_parlamint-dep-det-nummod.html">det:nummod</a></tt>.

3183 nodes (3%) are attached to their parents as `det`.

3096 instances of `det` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26672950047125.

The following 11 pairs of parts of speech are connected with `det`: <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> (3002; 94% instances), <tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> (81; 3% instances), <tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> (50; 2% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt> (23; 1% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> (12; 0% instances), <tt><a href="uk_parlamint-pos-DET.html">DET</a></tt>-<tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="uk_parlamint-pos-X.html">X</a></tt>-<tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det	color:blue
1	Пройшла	пройти	VERB	VERB	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
2	доба	доба	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	6	punct	_	_
4	ми	ми	PRON	PRON	Animacy=Anim|Case=Nom|Number=Plur|Person=1|PronType=Prs	6	nsubj	_	_
5	не	не	PART	PART	Polarity=Neg	6	advmod:neg	_	_
6	почули	почути	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	1	parataxis	_	_
7	жодної	жодний	DET	DET	Case=Gen|Gender=Fem|Number=Sing|PronType=Neg	8	det	_	_
8	відповіді	відповідь	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	6	obj	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 det	color:blue
1	Він	він	PRON	PRON	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
2	у	у	ADP	ADP	Case=Gen	3	case	_	_
3	всіх	весь	DET	DET	Case=Gen|Number=Plur|PronType=Tot	5	det	_	_
4	у	у	ADP	ADP	Case=Gen	5	case	_	_
5	вас	ви	PRON	PRON	Animacy=Anim|Case=Gen|Number=Plur|Person=2|PronType=Prs	6	obl	_	_
6	є	бути	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	на	на	ADP	ADP	Case=Loc	8	case	_	_
8	руках	рука	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Plur	6	obl	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 det	color:blue
1	Це	це	PRON	PRON	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	_	_
2	головні	головний	ADJ	ADJ	Case=Nom|Degree=Pos|Number=Plur	3	amod	_	_
3	дії	дія	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	0	root	_	_
4	уряду	уряд	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	7	punct	_	_
6	що	що	SCONJ	SCONJ	_	7	mark	_	_
7	реалізуються	реалізуватися	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Reflex=Yes|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	_
8	у	у	ADP	ADP	Case=Loc	9	case	_	_
9	масштабах	масштаб	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	7	obl	_	_
10	усієї	увесь	DET	DET	Case=Gen|Gender=Fem|Number=Sing|PronType=Tot	11	det	_	_
11	України	Україна	PROPN	PROPN	Animacy=Inan|Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


