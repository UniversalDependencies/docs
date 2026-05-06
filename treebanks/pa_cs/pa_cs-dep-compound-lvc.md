---
layout: base
title:  'Statistics of compound:lvc in UD_Punjabi-CS'
udver: '2'
---

## Treebank Statistics: UD_Punjabi-CS: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="pa_cs-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="pa_cs-dep-compound-svc.html">compound:svc</a></tt>.

26 nodes (1%) are attached to their parents as `compound:lvc`.

19 instances of `compound:lvc` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.46153846153846.

The following 7 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="pa_cs-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_cs-pos-ADJ.html">ADJ</a></tt> (6; 23% instances), <tt><a href="pa_cs-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt> (6; 23% instances), <tt><a href="pa_cs-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_cs-pos-VERB.html">VERB</a></tt> (6; 23% instances), <tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pa_cs-pos-VERB.html">VERB</a></tt> (4; 15% instances), <tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="pa_cs-pos-AUX.html">AUX</a></tt>-<tt><a href="pa_cs-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="pa_cs-pos-AUX.html">AUX</a></tt>-<tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 compound:lvc	color:blue
1	ਹੁਣ	ਹੁਣ	ADV	_	_	12	advmod	_	_
2	ਇਹ	ਇਹ	DET	_	PronType=Dem	3	det	_	_
3	ਕਾਨੂੰਨ	ਕਾਨੂੰਨ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	12	nsubj	_	_
4	ਪੰਜਾਬ	ਪੰਜਾਬ	PROPN	_	Case=Acc	12	obj	_	_
5	ਅਤੇ	ਅਤੇ	CCONJ	_	_	6	cc	_	_
6	ਹਰਿਆਣਾ	ਹਰਿਆਣਾ	PROPN	_	Case=Acc	4	conj	_	_
7	ਨੂੰ	ਨੂੰ	ADP	_	Case=Acc	4	case	_	_
8	ਸਭ	ਸਭ	DET	_	PronType=Ind	10	obl	_	_
9	ਤੋਂ	ਤੋਂ	ADP	_	_	8	case	_	_
10	ਵੱਧ	ਵੱਧ	ADV	_	_	12	advmod	_	_
11	ਪ੍ਰਭਾਵਿਤ	ਪ੍ਰਭਾਵਿਤ	ADJ	_	_	12	compound:lvc	_	_
12	ਕਰਦੇ	ਕਰਨਾ	VERB	_	Aspect=Imp|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	_
13	ਹਨ	ਹੈ	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	_
14	।	।	PUNCT	_	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 11 compound:lvc	color:blue
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


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 compound:lvc	color:blue
1	ਇਸ	ਇਸ	ADV	_	ExtPos=ADV	7	advmod	_	_
2	ਕਰਕੇ	ਕਰਕੇ	ADV	_	_	1	fixed	_	_
3	ਮੈਨੂੰ	ਮੈਂ	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
4	ਡਰਾਇੰਗ	ਡਰਾਇੰਗ	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	5	obj	_	_
5	ਕਰਨੀ	ਕਰਨਾ	VERB	_	Gender=Fem|Mood=Ind|VerbForm=Inf	7	compound:lvc	_	_
6	ਨਹੀਂ	ਨਹੀਂ	PART	_	_	7	advmod	_	_
7	ਆਈ	ਆਉਣਾ	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
8	ਸਿਵਾਏ	ਸਿਵਾਏ	ADP	_	_	7	obl	_	_
9	ਅਜਗਰਾਂ	ਅਜਗਰ	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	14	nmod	_	_
10	ਦੇ	ਦਾ	ADP	_	Gender=Masc|Number=Plur	9	case	_	_
11	ਅੰਦਰੋਂ	ਅੰਦਰੋਂ	ADV	_	_	14	nmod	_	_
12	ਤੇ	ਤੇ	CCONJ	_	_	11	cc	_	_
13	ਬਾਹਰੋਂ	ਬਾਹਰੋਂ	ADV	_	_	11	conj	_	_
14	ਚਿੱਤਰਾਂ	ਚਿੱਤਰ	NOUN	_	Gender=Masc|Number=Plur	7	obl	_	_
15	ਦੇ	ਦਾ	ADP	_	_	14	case	_	_
16	।	।	PUNCT	_	_	7	punct	_	_

~~~


