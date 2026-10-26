---
layout: base
title:  'Statistics of obl:tmod in UD_Punjabi-CS'
udver: '2'
---

## Treebank Statistics: UD_Punjabi-CS: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="pa_cs-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="pa_cs-dep-obl-arg.html">obl:arg</a></tt>.

14 nodes (1%) are attached to their parents as `obl:tmod`.

14 instances of `obl:tmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.71428571428571.

The following 5 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="pa_cs-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt> (9; 64% instances), <tt><a href="pa_cs-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_cs-pos-ADV.html">ADV</a></tt> (2; 14% instances), <tt><a href="pa_cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="pa_cs-pos-AUX.html">AUX</a></tt>-<tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="pa_cs-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_cs-pos-VERB.html">VERB</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 obl:tmod	color:blue
1	ਮੈਂ	ਮੈਂ	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
2	ਅਜਿਹੀ	ਅਜਿਹਾ	ADJ	_	Gender=Fem|Number=Sing	3	amod	_	_
3	ਭੇਡ	ਭੇਡ	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	4	obj	_	_
4	ਚਾਹੁੰਦਾ	ਚਾਹੁਣਾ	VERB	_	Gender=Masc|Number=Sing|Person=1|Tense=Pres|VerbForm=Part	0	root	_	_
5	ਹਾਂ	ਹੈ	AUX	_	Number=Sing|Tense=Pres	4	aux	_	_
6	ਜੋ	ਜੋ	PRON	_	PronType=Rel	13	nsubj	_	_
7	ਮੇਰੇ	ਮੈਂ	PRON	_	Number=Sing|Person=1|PronType=Prs	8	nmod:poss	_	_
8	ਕੋਲ	ਕੋਲ	ADP	_	_	13	obl	_	_
9	ਵੱਧ	ਵੱਧ	ADJ	_	Case=Acc|ExtPos=ADJ|Number=Sing	12	amod	_	_
10	ਤੋਂ	ਤੋਂ	ADP	_	_	9	fixed	_	_
11	ਵੱਧ	ਵੱਧ	ADJ	_	Number=Sing	9	fixed	_	_
12	ਸਮਾਂ	ਸਮਾਂ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	13	obl:tmod	_	_
13	ਰਹੇ	ਰਹਿਣਾ	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
14	।	।	PUNCT	_	_	4	punct	_	_
15	"	"	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 obl:tmod	color:blue
1	ਆਹ	ਆਹ	INTJ	_	_	2	discourse	_	_
2	ਵੇਖੋ	ਵੇਖਣਾ	VERB	_	Mood=Imp|VerbForm=Fin	0	root	_	_
3	ਉਸਦਾ	ਉਹ	PRON	_	Number=Sing|Person=3|PronType=Prs	6	nmod:poss	_	_
4	ਸੋਹਣਾ	ਸੋਹਣਾ	ADJ	_	Case=Acc|Gender=Masc|Number=Sing	6	amod	_	_
5	ਜਿਹਾ	ਜਿਹਾ	ADV	_	_	4	advmod	_	_
6	ਚਿੱਤਰ	ਚਿੱਤਰ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	2	obj	_	_
7	ਜੋ	ਜੋ	ADP	_	_	12	obj	_	_
8	ਮੈਂ	ਮੈਂ	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	12	nsubj	_	_
9	ਬਾਦ	ਬਾਦ	ADV	_	_	11	obl:tmod	_	_
10	ਵਿਚ	ਵਿਚ	ADP	_	_	9	case	_	_
11	ਬਣਾ	ਬਣਾਉਣਾ	VERB	_	Aspect=Perf|Number=Sing|VerbForm=Part	12	compound:svc	_	_
12	ਸਕਿਆ	ਸਕਣਾ	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	6	acl:relcl	_	_
13	।	।	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 18 obl:tmod	color:blue
1	ਇਸ	ਇਸ	ADV	_	ExtPos=ADV	11	advmod	_	_
2	ਲਈ	ਲਈ	ADV	_	_	1	fixed	_	_
3	ਮੈਂ	ਮੈਂ	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj	_	_
4	ਓਨੀ	ਓਨੀ	DET	_	PronType=Dem	5	det	_	_
5	ਦੇਰ	ਦੇਰ	NOUN	_	_	11	obl:tmod	_	_
6	ਤੱਕ	ਤੱਕ	ADP	_	_	5	case	_	_
7	ਆਪਣੀ	ਆਪਣਾ	PRON	_	PronType=Dem|Reflex=Yes	8	det:poss	_	_
8	ਜ਼ਿੰਦਗੀ	ਜ਼ਿੰਦਗੀ	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	11	obj	_	_
9	ਇਕੱਲੇ	ਇਕੱਲਾ	ADV	_	_	11	advmod	_	_
10	ਹੀ	ਹੀ	PART	_	_	9	advmod:emph	_	_
11	ਗੁਜ਼ਾਰੀ	ਗੁਜ਼ਾਰਨਾ	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|VerbForm=Part	0	root	_	_
12	,	,	PUNCT	_	_	11	punct	_	_
13	ਜਦੋਂ	ਜਦੋਂ	ADV	_	ExtPos=ADV	33	mark	_	_
14	ਤਕ	ਤਕ	ADV	_	_	13	fixed	_	_
15	ਅਜ	ਅੱਜ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	19	obl	_	_
16	ਤੋਂ	ਤੋਂ	ADP	_	_	15	case	_	_
17	ਛੇ	ਛੇ	NUM	_	_	18	nummod	_	_
18	ਸਾਲ	ਸਾਲ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	19	obl:tmod	_	_
19	ਪਹਿਲਾਂ	ਪਹਿਲਾਂ	ADJ	_	_	33	advmod	_	_
20	ਮੇਰੇ	ਮੈਂ	PRON	_	Number=Sing|Person=1|Poss=Yes|PronType=Prs	22	nmod:poss	_	_
21	ਹਵਾਈ	ਹਵਾਈ	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	30	nmod:poss	_	_
22	ਜਹਾਜ਼	ਜਹਾਜ਼	NOUN	_	_	21	conj	_	_
23	ਦਾ	ਦਾ	ADP	_	_	22	case	_	_
24	'	'	PUNCT	_	_	25	punct	_	_
25	ਸਹਾਰਾ	ਸਹਾਰਾ	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	27	nmod	_	_
26	ਦੇ	ਦੇ	ADP	_	_	25	case	_	_
27	ਰੇਗਿਸਤਾਨ	ਰੇਗਿਸਤਾਨ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	22	nmod	_	_
28	'	'	PUNCT	_	_	27	punct	_	_
29	ਵਿਚ	ਵਿਚ	ADP	_	_	27	case	_	_
30	ਹਾਦਸਾ	ਹਾਦਸਾ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	33	nsubj	_	_
31	ਨਹੀਂ	ਨਹੀਂ	PART	_	_	33	advmod	_	_
32	ਸੀ	ਸੀ	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	33	aux	_	_
33	ਹੋਇਆ	ਹੈ	AUX	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Part	11	advcl	_	_
34	।	।	PUNCT	_	_	11	punct	_	_

~~~


