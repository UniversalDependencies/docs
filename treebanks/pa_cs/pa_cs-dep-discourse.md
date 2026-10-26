---
layout: base
title:  'Statistics of discourse in UD_Punjabi-CS'
udver: '2'
---

## Treebank Statistics: UD_Punjabi-CS: Relations: `discourse`

This relation is universal.

15 nodes (1%) are attached to their parents as `discourse`.

8 instances of `discourse` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.06666666666667.

The following 8 pairs of parts of speech are connected with `discourse`: <tt><a href="pa_cs-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_cs-pos-INTJ.html">INTJ</a></tt> (6; 40% instances), <tt><a href="pa_cs-pos-INTJ.html">INTJ</a></tt>-<tt><a href="pa_cs-pos-INTJ.html">INTJ</a></tt> (3; 20% instances), <tt><a href="pa_cs-pos-ADV.html">ADV</a></tt>-<tt><a href="pa_cs-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="pa_cs-pos-ADV.html">ADV</a></tt>-<tt><a href="pa_cs-pos-INTJ.html">INTJ</a></tt> (1; 7% instances), <tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pa_cs-pos-INTJ.html">INTJ</a></tt> (1; 7% instances), <tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pa_cs-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="pa_cs-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_cs-pos-CCONJ.html">CCONJ</a></tt> (1; 7% instances), <tt><a href="pa_cs-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_cs-pos-PRON.html">PRON</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 2 discourse	color:blue
1	"	"	PUNCT	_	_	13	punct	_	_
2	ਊਂ	ਊਂ	INTJ	_	_	13	discourse	_	_
3	...	...	PUNCT	_	_	2	punct	_	_
4	।	।	PUNCT	_	_	2	punct	_	_
5	ਊਂ	ਊਂ	INTJ	_	_	13	discourse	_	_
6	...	...	PUNCT	_	_	5	punct	_	_
7	।	।	PUNCT	_	_	5	punct	_	_
8	ਮੈਨੂੰ	ਮੈ	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	13	nsubj	_	_
9	ਇਕ	ਇੱਕ	DET	_	PronType=Dem	10	det	_	_
10	ਭੇਡ	ਭੇਡ	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	13	obj	_	_
11	ਵਾਹ	ਵਾਹੁਣਾ	VERB	_	Aspect=Perf|Mood=Imp|VerbForm=Inf	13	advcl	_	_
12	ਕੇ	ਕੇ	ADP	_	_	11	mark	_	_
13	ਦਿਓ	ਦੇਣਾ	VERB	_	Mood=Imp|Number=Sing|Person=2|Polite=Form	0	root	_	_
14	।	।	PUNCT	_	_	13	punct	_	_
15	"	"	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 discourse	color:blue
1	"	"	PUNCT	_	_	2	punct	_	_
2	ਨਹੀਂ	ਨਹੀਂ	INTJ	_	_	0	root	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	ਨਹੀਂ	ਨਹੀਂ	INTJ	_	_	2	discourse	_	_
5	!	!	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 19 discourse	color:blue
1	ਉਸਨੇ	ਉਹ	PRON	_	Person=3|PronType=Prs	5	nsubj	_	_
2	ਬੜੇ	ਬੜਾ	ADV	_	_	3	advmod	_	_
3	ਧਿਆਨ	ਧਿਆਨ	NOUN	_	Case=Nom	5	obl	_	_
4	ਨਾਲ	ਨਾਲ	ADP	_	_	3	case	_	_
5	ਵੇਖਿਆ	ਵੇਖਣਾ	VERB	_	Mood=Ind|Tense=Past	0	root	_	_
6	ਤੇ	ਤੇ	CCONJ	_	_	5	cc	_	_
7	ਕਹਿਣ	ਕਹਿਣਾ	VERB	_	Mood=Ind	5	conj	_	_
8	ਲੱਗਾ	ਲੱਗਣਾ	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Pres|VerbForm=Fin	7	xcomp	_	_
9	:	:	PUNCT	_	_	8	punct	_	_
10	"	"	PUNCT	_	_	11	punct	_	_
11	ਨਹੀਂ	ਨਹੀਂ	INTJ	_	_	7	discourse	_	_
12	,	,	PUNCT	_	_	11	punct	_	_
13	ਨਹੀਂ	ਨਹੀਂ	INTJ	_	_	7	discourse	_	_
14	!	!	PUNCT	_	_	13	punct	_	_
15	ਇਹ	ਇਹ	PRON	_	Person=3|PronType=Dem	16	det	_	_
16	ਭੇਡ	ਭੇਡ	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	22	nsubj	_	_
17	ਤਾਂ	ਤਾਂ	ADV	_	_	16	advmod	_	_
18	ਅੱਗੇ	ਅੱਗੇ	ADV	_	_	22	advmod	_	_
19	ਹੀ	ਹੀ	ADV	_	_	20	discourse	_	_
20	ਬੜੀ	ਬੜਾ	ADV	_	_	21	advmod	_	_
21	ਮਰੀਅਲ	ਮਰੀਅਲ	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	22	amod	_	_
22	ਹੈ	ਹੈ	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	ccomp	_	_
23	।	।	PUNCT	_	_	7	punct	_	_
24	ਕੋਈ	ਕੋਈ	PRON	_	PronType=Ind	26	obj	_	_
25	ਹੋਰ	ਹੋਰ	DET	_	PronType=Ind	26	det	_	_
26	ਬਣਾਓ	ਬਣਾਉਣਾ	VERB	_	Mood=Imp	7	ccomp	_	_
27	।	।	PUNCT	_	_	26	punct	_	_
28	"	"	PUNCT	_	_	5	punct	_	_

~~~


