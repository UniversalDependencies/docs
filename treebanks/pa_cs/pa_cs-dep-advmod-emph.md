---
layout: base
title:  'Statistics of advmod:emph in UD_Punjabi-CS'
udver: '2'
---

## Treebank Statistics: UD_Punjabi-CS: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="pa_cs-dep-advmod.html">advmod</a></tt>.

10 nodes (1%) are attached to their parents as `advmod:emph`.

5 instances of `advmod:emph` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.1.

The following 5 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="pa_cs-pos-ADV.html">ADV</a></tt>-<tt><a href="pa_cs-pos-ADV.html">ADV</a></tt> (4; 40% instances), <tt><a href="pa_cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pa_cs-pos-ADV.html">ADV</a></tt> (3; 30% instances), <tt><a href="pa_cs-pos-ADV.html">ADV</a></tt>-<tt><a href="pa_cs-pos-PART.html">PART</a></tt> (1; 10% instances), <tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pa_cs-pos-ADV.html">ADV</a></tt> (1; 10% instances), <tt><a href="pa_cs-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_cs-pos-ADV.html">ADV</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod:emph	color:blue
1	ਇੰਜ	ਇੰਜ	ADV	_	_	5	advmod	_	_
2	ਹੀ	ਹੀ	ADV	_	_	1	advmod:emph	_	_
3	ਤਾਂ	ਤਾਂ	CCONJ	_	_	2	cc	_	_
4	ਮੈਂ	ਮੈਂ	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
5	ਚਾਹੁੰਦਾ	ਚਾਹੁਣਾ	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
6	ਸਾਂ	ਸੀ	AUX	_	Number=Sing|Person=1|Tense=Past	5	aux	_	_
7	।	।	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod:emph	color:blue
1	ਇਹ	ਇਹ	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Dem	6	nsubj	_	_
2	ਤਾਂ	ਤਾਂ	ADV	_	_	1	advmod	_	_
3	ਬਹੁਤ	ਬਹੁਤ	ADV	_	_	4	advmod:emph	_	_
4	ਛੋਟੀ	ਛੋਟਾ	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	5	amod	_	_
5	ਭੇਡ	ਭੇਡ	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	6	xcomp	_	_
6	ਹੈ	ਹੈ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Tense=Pres|VerbForm=Fin	0	root	_	_
7	ਜੋ	ਜੋ	PRON	_	PronType=Rel	10	obj	_	_
8	ਮੈਂ	ਮੈਂ	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
9	ਤੈਨੂੰ	ਤੈਨੂੰ	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs	10	obl	_	_
10	ਦਿੱਤੀ	ਦੇਣਾ	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Part	6	ccomp	_	_
11	ਹੈ	ਹੈ	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
12	।	।	PUNCT	_	_	6	punct	_	_
13	"	"	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 advmod:emph	color:blue
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


