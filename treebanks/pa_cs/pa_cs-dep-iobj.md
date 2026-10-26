---
layout: base
title:  'Statistics of iobj in UD_Punjabi-CS'
udver: '2'
---

## Treebank Statistics: UD_Punjabi-CS: Relations: `iobj`

This relation is universal.

11 nodes (1%) are attached to their parents as `iobj`.

11 instances of `iobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.18181818181818.

The following 4 pairs of parts of speech are connected with `iobj`: <tt><a href="pa_cs-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_cs-pos-PRON.html">PRON</a></tt> (6; 55% instances), <tt><a href="pa_cs-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt> (3; 27% instances), <tt><a href="pa_cs-pos-AUX.html">AUX</a></tt>-<tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="pa_cs-pos-AUX.html">AUX</a></tt>-<tt><a href="pa_cs-pos-PRON.html">PRON</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 11 iobj	color:blue
1	ਮੈਂ	ਮੈਂ	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
2	ਛੋਟੇ	ਛੋਟਾ	ADJ	_	Case=Acc|Gender=Masc|Number=Sing	3	amod	_	_
3	ਬੱਚੇ	ਬੱਚਾ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	5	nmod	_	_
4	ਦੇ	ਦੇ	ADP	_	_	3	case	_	_
5	ਕੰਨ	ਕੰਨ	NOUN	_	Gender=Masc|Number=Sing	9	obl	_	_
6	ਵਿਚ	ਵਿਚ	ADP	_	_	5	case	_	_
7	ਹੌਲੀ	ਹੌਲੀ	ADV	_	_	9	advmod	_	_
8	ਜਿਹੀ	ਜਿਹਾ	ADV	_	_	7	advmod:emph	_	_
9	ਕਿਹਾ	ਕਹਿਣਾ	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
10	ਕਿ	ਕਿ	SCONJ	_	_	9	mark	_	_
11	ਮੈਨੂੰ	ਮੈ	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	15	iobj	_	_
12	ਡਰਾਇੰਗ	ਡਰਾਇੰਗ	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	13	obj	_	_
13	ਕਰਨੀ	ਕਰਨਾ	VERB	_	Case=Acc|Mood=Ind|VerbForm=Inf	15	obj	_	_
14	ਨਹੀਂ	ਨਹੀਂ	PART	_	_	15	advmod	_	_
15	ਆਉਂਦੀ	ਆਉਣਾ	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Part	9	ccomp	_	_
16	।	।	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 iobj	color:blue
1	ਮੈਂ	ਮੈਂ	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
2	ਆਪਣਾ	ਆਪਣਾ	PRON	_	Number=Sing|Person=1|Poss=Yes|PronType=Prs|Reflex=Yes	3	nmod:poss	_	_
3	ਸ਼ਾਹਕਾਰ	ਸ਼ਾਹਕਾਰ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	6	obj	_	_
4	ਵੱਡਿਆਂ	ਵੱਡਾ	NOUN	_	Gender=Masc|Number=Plur	6	iobj	_	_
5	ਨੂੰ	ਨੂੰ	ADP	_	_	4	case	_	_
6	ਦਿਖਾਇਆ	ਵੇਖਣਾ	VERB	_	Aspect=Perf|Mood=Ind|Tense=Past|VerbForm=Inf	0	root	_	_
7	ਤੇ	ਤੇ	CCONJ	_	_	6	cc	_	_
8	ਪੁੱਛਿਆ	ਪੁੱਛਣਾ	VERB	_	Aspect=Perf|Mood=Imp|Tense=Past|VerbForm=Fin	6	conj	_	_
9	ਕਿ	ਕਿ	SCONJ	_	_	14	mark	_	_
10	ਤੁਹਾਨੂੰ	ਤੁਹਾਨੂੰ	PRON	_	Number=Plur|Person=2|PronType=Rel	14	obl	_	_
11	ਇਸ	ਇਸ	PRON	_	Case=Abl|Number=Sing|PronType=Dem	13	nmod	_	_
12	ਤੋਂ	ਤੋਂ	ADP	_	_	11	case	_	_
13	ਡਰ	ਡਰ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	14	nsubj	_	_
14	ਲੱਗਦਾ	ਲੱਗਣਾ	VERB	_	Aspect=Imp|Mood=Imp|Number=Sing|Tense=Pres|VerbForm=Fin	8	ccomp	_	_
15	ਹੈ	ਹੈ	AUX	_	Number=Sing|Person=3|Tense=Pres	14	aux	_	_
16	?	?	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 14 iobj	color:blue
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


