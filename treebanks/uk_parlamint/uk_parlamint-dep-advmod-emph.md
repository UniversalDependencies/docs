---
layout: base
title:  'Statistics of advmod:emph in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="uk_parlamint-dep-advmod.html">advmod</a></tt>.
There are also 2 other language-specific subtypes of `advmod`: <tt><a href="uk_parlamint-dep-advmod-det.html">advmod:det</a></tt>, <tt><a href="uk_parlamint-dep-advmod-neg.html">advmod:neg</a></tt>.

104 nodes (0%) are attached to their parents as `advmod:emph`.

103 instances of `advmod:emph` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.86538461538462.

The following 15 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-PART.html">PART</a></tt> (44; 42% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt> (18; 17% instances), <tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="uk_parlamint-pos-PART.html">PART</a></tt> (8; 8% instances), <tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt> (7; 7% instances), <tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_parlamint-pos-PART.html">PART</a></tt> (6; 6% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-PART.html">PART</a></tt> (5; 5% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-PART.html">PART</a></tt> (3; 3% instances), <tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_parlamint-pos-PART.html">PART</a></tt> (3; 3% instances), <tt><a href="uk_parlamint-pos-DET.html">DET</a></tt>-<tt><a href="uk_parlamint-pos-PART.html">PART</a></tt> (2; 2% instances), <tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk_parlamint-pos-PART.html">PART</a></tt> (2; 2% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advmod:emph	color:blue
1	А	а	CCONJ	CCONJ	_	5	cc	_	_
2	ви	ви	PRON	PRON	Animacy=Anim|Case=Nom|Number=Plur|Person=2|PronType=Prs	5	nsubj	_	_
3	і	і	PART	PART	_	5	advmod:emph	_	_
4	від	від	ADP	ADP	Case=Gen	5	case	_	_
5	комітету	комітет	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	?	?	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 advmod:emph	color:blue
1	Ми	ми	PRON	PRON	Animacy=Anim|Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	згадаємо	згадати	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	7	punct	_	_
4	що	що	SCONJ	SCONJ	_	7	mark	_	_
5	суддівська	суддівський	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Sing	6	amod	_	_
6	реформа	реформа	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_
7	почалася	початися	VERB	VERB	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Reflex=Yes|Tense=Past|VerbForm=Fin	2	ccomp	_	_
8	ще	ще	ADV	ADV	_	11	advmod:emph	_	_
9	у	у	ADP	ADP	Case=Loc	11	case	_	_
10	2016	2016	ADJ	ADJ	Case=Loc|Gender=Masc|Number=Sing|NumType=Ord	11	amod	_	_
11	році	рік	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod:emph	color:blue
1	Тут	тут	ADV	ADV	PronType=Dem	2	advmod	_	_
2	є	бути	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	тільки	тільки	PART	PART	_	4	advmod:emph	_	_
4	одна	один	NUM	NUM	Case=Nom|Gender=Fem|Number=Sing|NumType=Card	5	nummod	_	_
5	домінанта	домінанта	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	_
6	–	–	PUNCT	PUNCT	_	8	punct	_	_
7	це	це	PRON	PRON	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	8	expl	_	_
8	відповідальність	відповідальність	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	5	appos	_	_
9	перед	перед	ADP	ADP	Case=Ins	10	case	_	_
10	Україною	Україна	PROPN	PROPN	Animacy=Inan|Case=Ins|Gender=Fem|NameType=Geo|Number=Sing	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


