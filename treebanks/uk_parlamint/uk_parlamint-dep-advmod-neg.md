---
layout: base
title:  'Statistics of advmod:neg in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="uk_parlamint-dep-advmod.html">advmod</a></tt>.
There are also 2 other language-specific subtypes of `advmod`: <tt><a href="uk_parlamint-dep-advmod-det.html">advmod:det</a></tt>, <tt><a href="uk_parlamint-dep-advmod-emph.html">advmod:emph</a></tt>.

550 nodes (1%) are attached to their parents as `advmod:neg`.

545 instances of `advmod:neg` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23818181818182.

The following 12 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-PART.html">PART</a></tt> (384; 70% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-PART.html">PART</a></tt> (51; 9% instances), <tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_parlamint-pos-PART.html">PART</a></tt> (39; 7% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-PART.html">PART</a></tt> (37; 7% instances), <tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_parlamint-pos-PART.html">PART</a></tt> (11; 2% instances), <tt><a href="uk_parlamint-pos-PART.html">PART</a></tt>-<tt><a href="uk_parlamint-pos-PART.html">PART</a></tt> (9; 2% instances), <tt><a href="uk_parlamint-pos-DET.html">DET</a></tt>-<tt><a href="uk_parlamint-pos-PART.html">PART</a></tt> (6; 1% instances), <tt><a href="uk_parlamint-pos-AUX.html">AUX</a></tt>-<tt><a href="uk_parlamint-pos-PART.html">PART</a></tt> (5; 1% instances), <tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="uk_parlamint-pos-PART.html">PART</a></tt> (3; 1% instances), <tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk_parlamint-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="uk_parlamint-pos-X.html">X</a></tt>-<tt><a href="uk_parlamint-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod:neg	color:blue
1	І	і	CCONJ	CCONJ	_	6	cc	_	_
2	тому	тому	ADV	ADV	_	6	advmod	_	_
3	ми	ми	PRON	PRON	Animacy=Anim|Case=Nom|Number=Plur|Person=1|PronType=Prs	6	nsubj	_	_
4	цього	це	PRON	PRON	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	7	obj	_	_
5	не	не	PART	PART	Polarity=Neg	6	advmod:neg	_	_
6	хочемо	хотіти	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
7	допустити	допустити	VERB	VERB	Aspect=Perf|VerbForm=Inf	6	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 advmod:neg	color:blue
1	Так	так	ADV	ADV	PronType=Dem	2	advmod	_	_
2	звані	званий	ADJ	ADJ	Aspect=Imp|Case=Nom|Number=Plur|VerbForm=Part|Voice=Pass	4	amod	_	_
3	"	"	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No
4	ДНР	ДНР	PROPN	NOUN	Abbr=Yes|Animacy=Inan|Case=Nom|Gender=Fem|InflClass=Ind|NameType=Geo|Number=Sing	13	nsubj	_	SpaceAfter=No
5	"	"	PUNCT	PUNCT	_	4	punct	_	_
6	і	і	CCONJ	CCONJ	_	8	cc	_	_
7	"	"	PUNCT	PUNCT	_	8	punct	_	SpaceAfter=No
8	ЛНР	ЛНР	PROPN	PROPN	Abbr=Yes|Animacy=Inan|Case=Nom|Gender=Fem|InflClass=Ind|NameType=Geo|Number=Sing	4	conj	_	SpaceAfter=No
9	"	"	PUNCT	PUNCT	_	8	punct	_	_
10	не	не	PART	PART	Polarity=Neg	13	advmod:neg	_	_
11	є	бути	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
12	терористичними	терористичний	ADJ	ADJ	Case=Ins|Number=Plur	13	amod	_	_
13	організаціями	організація	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur	0	root	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:neg	color:blue
1	І	і	CCONJ	CCONJ	_	3	cc	_	_
2	не	не	PART	PART	Polarity=Neg	3	advmod:neg	_	_
3	потрібно	потрібно	ADV	ADV	Degree=Pos	0	root	_	_
4	розпалювати	розпалювати	VERB	VERB	Aspect=Imp|VerbForm=Inf	3	csubj	_	_
5	паніку	паніка	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	4	obj	_	_
6	і	і	CCONJ	CCONJ	_	7	cc	_	_
7	насаждати	насаждати	VERB	VERB	Aspect=Perf|VerbForm=Inf	4	conj	_	_
8	її	вона	PRON	PRON	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
9	всередині	всередині	ADP	ADP	Case=Gen	10	case	_	_
10	країни	країна	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


