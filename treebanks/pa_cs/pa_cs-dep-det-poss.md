---
layout: base
title:  'Statistics of det:poss in UD_Punjabi-CS'
udver: '2'
---

## Treebank Statistics: UD_Punjabi-CS: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="pa_cs-dep-det.html">det</a></tt>.

12 nodes (1%) are attached to their parents as `det:poss`.

12 instances of `det:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16666666666667.

The following 2 pairs of parts of speech are connected with `det:poss`: <tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pa_cs-pos-PRON.html">PRON</a></tt> (9; 75% instances), <tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pa_cs-pos-DET.html">DET</a></tt> (3; 25% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det:poss	color:blue
1	ਪਹਿਲੀ	ਪਹਿਲਾ	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	4	amod	_	_
2	ਅਤੇ	ਅਤੇ	CCONJ	_	_	1	cc	_	_
3	ਦੂਜੀ	ਦੂਜਾ	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	4	amod	_	_
4	ਡਰਾਇੰਗ	ਡਰਾਇੰਗ	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	6	nmod	_	_
5	ਦੀ	ਦੀ	ADP	_	_	4	case	_	_
6	ਨਾਕਾਮੀ	ਨਾਕਾਮ	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	11	nsubj	_	_
7	ਨੇ	ਨੇ	ADP	_	_	6	case	_	_
8	ਮੇਰਾ	ਮੈਂ	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	9	det:poss	_	_
9	ਦਿਲ	ਦਿਲ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	11	obj	_	_
10	ਤੋੜ	ਤੋੜਣਾ	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	11	compound:svc	_	_
11	ਦਿੱਤਾ	ਦੇਣਾ	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
12	।	।	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det:poss	color:blue
1	ਮੈਂ	ਮੈਂ	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
2	ਆਪਣੀਆਂ	ਆਪਣਾ	DET	_	PronType=Prs	3	det:poss	_	_
3	ਅੱਖਾਂ	ਅੱਖ	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	7	obj	_	_
4	ਨੂੰ	ਨੂੰ	ADP	_	_	3	case	_	_
5	ਚੰਗੀ	ਚੰਗਾ	ADJ	_	Degree=Pos	6	amod	_	_
6	ਤਰ੍ਹਾਂ	ਤਰ੍ਹਾਂ	ADV	_	_	7	advmod	_	_
7	ਮਲਿਆ	ਮਲਣਾ	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
8	।	।	PUNCT	_	_	7	punct	_	_

~~~


