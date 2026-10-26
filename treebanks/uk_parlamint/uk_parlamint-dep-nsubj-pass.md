---
layout: base
title:  'Statistics of nsubj:pass in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="uk_parlamint-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="uk_parlamint-dep-nsubj-outer.html">nsubj:outer</a></tt>.

315 nodes (0%) are attached to their parents as `nsubj:pass`.

208 instances of `nsubj:pass` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.64761904761905.

The following 12 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (177; 56% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (48; 15% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt> (37; 12% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> (28; 9% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt> (10; 3% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt> (7; 2% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj:pass	color:blue
1	Позиція	позиція	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	комітету	комітет	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	SpaceAfter=No
3	:	:	PUNCT	PUNCT	_	6	punct	_	_
4	ця	цей	DET	DET	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
5	правка	правка	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	nsubj:pass	_	_
6	відхилена	відхилений	ADJ	ADJ	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	1	appos	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 nsubj:pass	color:blue
1	У	у	ADP	ADP	Case=Loc	2	case	_	_
2	залі	зала	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	3	obl	_	_
3	зареєстровано	зареєструвати	VERB	VERB	Aspect=Perf|Mood=Ind|Person=0|Typo=Yes|VerbForm=Fin	0	root	_	_
4	181	181	NUM	NUM	Case=Acc|Gender=Masc|NumType=Card	6	nummod	_	_
5	народний	народний	ADJ	ADJ	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	amod	_	_
6	депутат	депутат	NOUN	NOUN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:pass	color:blue
1	Комітетом	комітет	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	3	obl:agent	_	_
2	вона	вона	PRON	PRON	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	_	_
3	відхилена	відхилений	ADJ	ADJ	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
4	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


