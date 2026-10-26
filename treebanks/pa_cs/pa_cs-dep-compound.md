---
layout: base
title:  'Statistics of compound in UD_Punjabi-CS'
udver: '2'
---

## Treebank Statistics: UD_Punjabi-CS: Relations: `compound`

This relation is universal.
There are 2 language-specific subtypes of `compound`: <tt><a href="pa_cs-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="pa_cs-dep-compound-svc.html">compound:svc</a></tt>.

22 nodes (1%) are attached to their parents as `compound`.

18 instances of `compound` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.54545454545455.

The following 6 pairs of parts of speech are connected with `compound`: <tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt> (11; 50% instances), <tt><a href="pa_cs-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_cs-pos-VERB.html">VERB</a></tt> (7; 32% instances), <tt><a href="pa_cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pa_cs-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="pa_cs-pos-AUX.html">AUX</a></tt>-<tt><a href="pa_cs-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pa_cs-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="pa_cs-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_cs-pos-AUX.html">AUX</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	ਪਹਿਲੀ	ਪਹਿਲਾ	ADJ	_	_	2	amod	_	_
2	ਰਾਤ	ਰਾਤ	NOUN	_	Case=Acc|Number=Sing	13	obl	_	_
3	ਮੈਂ	ਮੈਂ	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj	_	_
4	ਮਨੁੱਖੀ	ਮਨੁੱਖੀ	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	5	compound	_	_
5	ਆਬਾਦੀ	ਆਬਾਦੀ	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	9	nmod	_	_
6	ਤੋਂ	ਤੋਂ	ADP	_	Case=Abl	5	case	_	_
7	ਹਜ਼ਾਰਾਂ	ਹਜ਼ਾਰ	NUM	_	_	8	nummod	_	_
8	ਮੀਲ	ਮੀਲ	NOUN	_	Gender=Masc	9	obl	_	_
9	ਦੂਰ	ਦੂਰ	ADV	_	_	13	advmod	_	_
10	ਰੇਤ	ਰੇਤ	NOUN	_	Case=Acc	13	obl	_	_
11	ਤੇ	ਤੇ	ADP	_	_	10	case	_	_
12	ਹੀ	ਹੀ	ADV	_	_	10	advmod	_	_
13	ਸੌਂ	ਸੌਂ	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Pres|VerbForm=Fin	0	root	_	_
14	ਗਿਆ	ਗਿਆ	VERB	_	_	13	compound:svc	_	_
15	।	।	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound	color:blue
1	ਜਦੋਂ	ਜਦੋਂ	SCONJ	_	_	17	mark	_	_
2	"	"	PUNCT	_	_	3	punct	_	_
3	ਭੇਤ	ਭੇਤ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
4	"	"	PUNCT	_	_	3	punct	_	_
5	ਹਾਵੀ	ਹਾਵੀ	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	7	amod	_	_
6	ਹੋ	ਹੋਣਾ	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	7	compound	_	_
7	ਜਾਂਦਾ	ਜਾਣਾ	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Part	17	advcl	_	_
8	ਹੈ	ਹੈ	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
9	ਤਾਂ	ਤਾਂ	CCONJ	_	_	7	cc	_	_
10	ਉਸਨੂੰ	ਉਹ	PRON	_	Number=Sing|Person=3|PronType=Dem	17	obj	_	_
11	ਮੰਨਣ	ਮੰਨਣਾ	VERB	_	Case=Acc|VerbForm=Inf	17	obl	_	_
12	ਤੋਂ	ਤੋਂ	ADP	_	_	11	case	_	_
13	ਕੋਈ	ਕੋਈ	PRON	_	PronType=Ind	17	nsubj	_	_
14	ਇਨਕਾਰ	ਇਨਕਾਰ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	17	iobj	_	_
15	ਨਹੀ	ਨਹੀ	PART	_	_	14	advmod	_	_
16	ਕਰ	ਕਰਨਾ	VERB	_	Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	17	compound:svc	_	_
17	ਸਕਦਾ	ਸਕਣਾ	AUX	_	Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
18	।	।	PUNCT	_	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	ਇਹ	ਇਹ	PRON	_	Case=Nom|Number=Plur|PronType=Dem	14	nsubj	_	_
2	ਹੌਲੀ	ਹੌਲੀ	ADJ	_	_	4	amod	_	_
3	ਹੌਲੀ	ਹੌਲੀ	ADJ	_	_	2	compound	_	_
4	ਜਨਤਕ	ਜਨਤਕ	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	5	nmod	_	_
5	ਪ੍ਰਣਾਲੀ	ਪ੍ਰਣਾਲੀ	NOUN	_	_	14	obj	_	_
6	ਨੂੰ	ਨੂੰ	ADP	_	_	5	case	_	_
7	ਕਮਜ਼ੋਰ	ਕਮਜ਼ੋਰ	ADJ	_	_	5	amod	_	_
8	ਕਰ	ਕਰਨਾ	VERB	_	VerbForm=Inf	5	compound:lvc	_	_
9	ਦੇਵੇਗਾ	ਦੇਣਾ	VERB	_	Aspect=Perf|Mood=Ind|Tense=Fut|VerbForm=Fin	8	compound:lvc	_	_
10	ਅਤੇ	ਅਤੇ	CCONJ	_	_	14	cc	_	_
11	ਢਹਿ	ਢਹਿ	NOUN	_	_	14	compound:lvc	_	_
12	ਢੇਰੀ	ਢੇਰੀ	NOUN	_	_	11	compound:lvc	_	_
13	ਕਰ	ਕਰਨਾ	VERB	_	VerbForm=Inf	14	compound	_	_
14	ਦੇਵੇਗਾ	ਦੇਣਾ	VERB	_	_	0	root	_	_
15	।	।	PUNCT	_	_	14	punct	_	_

~~~


