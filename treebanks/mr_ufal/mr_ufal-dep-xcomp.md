---
layout: base
title:  'Statistics of xcomp in UD_Marathi-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Marathi-UFAL: Relations: `xcomp`

This relation is universal.

20 nodes (1%) are attached to their parents as `xcomp`.

18 instances of `xcomp` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.85.

The following 6 pairs of parts of speech are connected with `xcomp`: <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (9; 45% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt> (7; 35% instances), <tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="mr_ufal-pos-AUX.html">AUX</a></tt>-<tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="mr_ufal-pos-AUX.html">AUX</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 xcomp	color:blue
1	मी	मी	PRON	_	Case=Nom|Number=Sing|Person=1	6	nsubj	_	_
2	_	तू	PRON	_	Number=Sing|Person=2	4	nmod:poss	_	_
3	_	चा	ADP	_	Gender=Fem|Number=Sing	2	case	_	_
4	बहीण	बहीण	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	_
5	होऊ	होणे	VERB	_	Person=1|Tense=Fut|VerbForm=Fin	6	xcomp	_	_
6	इच्छिते	इच्छणे	VERB	_	Aspect=Imp|Gender=Fem|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
2	नका	नका	AUX	_	Mood=Imp|Number=Plur|Person=2|Polarity=Neg|VerbForm=Fin	3	aux	_	_
3	घालवू	घालवणे	VERB	_	Mood=Imp|Number=Plur|Person=2|Polarity=Neg|VerbForm=Fin	0	root	_	_
4	त्याला	तो	PRON	_	Case=Acc|Deixis=Remt|Gender=Masc|Number=Sing|Person=3	3	obj	_	_
5	दूर	दूर	ADJ	_	Case=Nom	3	xcomp	_	SpaceAfter=No
6	!	!	PUNCT	_	_	3	punct	_	SpaceAfter=No
7	"	"	PUNCT	_	_	3	punct	_	_
8	ती	तो	PRON	_	Case=Nom|Deixis=Remt|Gender=Fem|Number=Sing|Person=3	10	nsubj	_	_
9	रडत	रडणे	VERB	_	Aspect=Imp|VerbForm=Part	10	advcl	_	_
10	म्हणाली	म्हणणे	VERB	_	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|VerbForm=Fin	3	parataxis	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 xcomp	color:blue
1	आज	आज	ADV	_	_	9	advmod	_	_
2	मी	मी	PRON	_	Case=Nom|Number=Sing|Person=1	9	nsubj	_	_
3	तुला	तू	PRON	_	Case=Dat|Number=Sing|Person=2	8	iobj	_	_
4	तू	तू	PRON	_	Case=Nom|Number=Sing|Person=2	5	nsubj	_	_
5	मागशील	मागणे	VERB	_	Number=Sing|Person=2|Tense=Fut|VerbForm=Fin	7	acl	_	_
6	ती	तो	DET	_	Deixis=Remt|Gender=Fem|Number=Sing|PronType=Dem	7	det	_	_
7	किंमत	किंमत	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	8	obj	_	_
8	द्यायला	देणे	VERB	_	VerbForm=Sup	9	xcomp	_	_
9	तयार	तयार	ADV	_	_	0	root	_	_
10	झालो	होणे	AUX	_	Aspect=Perf|Gender=Masc|Number=Sing|Person=1|VerbForm=Fin	9	aux	_	_
11	होतो	असणे	AUX	_	Gender=Masc|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	9	aux	_	SpaceAfter=No
12	;	;	PUNCT	_	_	17	punct	_	_
13	परंतु	परंतु	CCONJ	_	_	17	cc	_	_
14	_	तू	PRON	_	Number=Sing|Person=2	16	nmod:poss	_	_
15	_	चा	ADP	_	Gender=Fem|Number=Sing	14	case	_	_
16	बुद्धी	बुद्धी	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	17	nsubj	_	_
17	भ्रष्ट	भ्रष्ट	ADJ	_	Case=Nom	9	conj	_	_
18	झाली	होणे	AUX	_	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|VerbForm=Fin	17	aux	_	_
19	आहे	असणे	AUX	_	Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	aux	_	SpaceAfter=No
20	.	.	PUNCT	_	_	17	punct	_	_

~~~


