---
layout: base
title:  'Statistics of obl:arg in UD_Punjabi-Rang'
udver: '2'
---

## Treebank Statistics: UD_Punjabi-Rang: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="pa_rang-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="pa_rang-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="pa_rang-dep-obl-tmod.html">obl:tmod</a></tt>.

8 nodes (0%) are attached to their parents as `obl:arg`.

7 instances of `obl:arg` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.25.

The following 5 pairs of parts of speech are connected with `obl:arg`: <tt><a href="pa_rang-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_rang-pos-PRON.html">PRON</a></tt> (3; 38% instances), <tt><a href="pa_rang-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pa_rang-pos-PRON.html">PRON</a></tt> (2; 25% instances), <tt><a href="pa_rang-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pa_rang-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="pa_rang-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="pa_rang-pos-PRON.html">PRON</a></tt> (1; 13% instances), <tt><a href="pa_rang-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_rang-pos-NOUN.html">NOUN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 1 obl:arg	color:blue
1	اسے	اسے	PRON	_	PronType=Prs	14	obl:arg	_	_
2	لئی	لئی	ADP	_	_	1	case	_	_
3	میں	میں	PRON	_	PronType=Prs	14	nsubj	_	_
4	چھ	چھ	NUM	_	_	5	nummod	_	_
5	سال	سال	NOUN	_	_	14	nmod:tmod	_	_
6	دی	دی	ADP	_	_	5	case	_	_
7	عمر	عمر	NOUN	_	_	5	nmod	_	_
8	وچ	وچ	ADP	_	_	5	case	_	_
9	ہی	ہی	PART	_	_	5	advmod	_	_
10	چترکار	چترکار	NOUN	_	_	12	nmod	_	_
11	والا	والا	ADJ	_	_	12	amod	_	_
12	دھندا	دھندا	NOUN	_	_	14	obj	_	_
13	چھڈ	چھڈ	VERB	_	Aspect=Perf	14	compound	_	_
14	دتا	دینا	VERB	_	_	0	root	_	_
15	۔	۔	PUNCT	_	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 11 obl:arg	color:blue
1	میرے	میرا	PRON	_	Number=Sing|Person=1|PronType=Prs	8	obl:arg	_	_
2	لئی	لئی	ADP	_	_	1	case	_	_
3	اہ	اہ	PRON	_	PronType=Dem	8	nsubj	_	_
4	جیون	جیون	NOUN	_	Gender=Masc|Number=Sing	8	nmod:poss	_	_
5	تے	تے	CCONJ	_	_	6	cc	_	_
6	موت	موت	NOUN	_	Gender=Fem|Number=Sing	4	conj	_	_
7	دا	دا	ADP	_	_	4	case	_	_
8	سوال	سوال	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
9	سی	ہونا	AUX	_	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	8	cop	_	_
10	کیونکِ	کیونکِ	SCONJ	_	_	20	mark	_	_
11	میرے	میرا	PRON	_	PronType=Prs	20	obl:arg	_	_
12	کول	کول	ADP	_	_	11	case	_	_
13	سرف	صرف	ADV	_	_	20	advmod	_	_
14	اک	اک	NUM	_	_	15	nummod	_	_
15	ہفتے	ہفتہ	NOUN	_	Gender=Masc|Number=Sing	20	obl:tmod	_	_
16	لئی	لئی	ADP	_	_	15	case	_	_
17	ہی	ہی	ADV	_	_	15	discourse	_	_
18	پین	پین	NOUN	_	_	20	nmod:poss	_	_
19	دا	دا	ADP	_	_	18	case	_	_
20	پانی	پانی	NOUN	_	Gender=Masc|Number=Sing	8	advcl	_	_
21	سی	ہونا	AUX	_	Mood=Ind	20	cop	_	_
22	۔	۔	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 obl:arg	color:blue
1	پہلی	پہلا	ADJ	_	Gender=Fem|Number=Sing	2	amod	_	_
2	رات	رات	NOUN	_	Gender=Fem|Number=Sing	9	obl:tmod	_	_
3	میں	میں	PRON	_	Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
4	منکھی	منکھی	ADJ	_	Gender=Fem|Number=Sing	5	amod	_	_
5	آبادی	آبادی	NOUN	_	Gender=Fem|Number=Sing	9	obl:arg	_	_
6	تو	تو	ADP	_	_	5	case	_	_
7	ہزاراں	ہزار	NUM	_	_	8	nummod	_	_
8	میل	میل	NOUN	_	_	9	obl	_	_
9	دور	دور	ADJ	_	_	0	root	_	_
10	ریت	ریت	NOUN	_	Gender=Fem|Number=Sing	9	obl	_	_
11	تے	تے	ADP	_	_	10	case	_	_
12	ہی	ہی	ADV	_	_	9	discourse	_	_
13	سوں	سونا	VERB	_	VerbForm=Part	9	xcomp	_	_
14	گیا	گیا	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	13	compound	_	_
15	۔	۔	PUNCT	_	_	9	punct	_	_

~~~


