---
layout: base
title:  'Statistics of aux:pass in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="qtd_sagt-dep-aux.html">aux</a></tt>.
There are also 1 other language-specific subtypes of `aux`: <tt><a href="qtd_sagt-dep-aux-q.html">aux:q</a></tt>.

13 nodes (0%) are attached to their parents as `aux:pass`.

7 instances of `aux:pass` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.84615384615385.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt> (12; 92% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 aux:pass	color:blue
1	Und	und	CCONJ	_	_	3	cc	_	CSID=DE|Lang=de
2	die	der	PRON	_	Case=Nom|Gender=Fem|Number=Plur|PronType=Dem	3	nsubj	_	CSID=DE|Lang=de
3	schreiben	schreiben	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	CSID=DE|Lang=de
4	selber	selber	ADV	_	_	3	advmod	_	CSID=DE|Lang=de
5	so	so	ADV	_	_	3	advmod	_	CSID=DE|Lang=de|SpaceAfter=No
6	:	:	PUNCT	_	_	8	punct	_	CSID=OTHER
7	"	"	PUNCT	_	_	8	punct	_	CSID=OTHER|SpaceAfter=No
8	ifşalandık	ifşalan	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Plur|Person=1|Tense=Past	3	parataxis	_	CSID=TR|Lang=tr|SpaceAfter=No
9	"	"	PUNCT	_	_	8	punct	_	CSID=OTHER|SpaceAfter=No
10	,	,	PUNCT	_	_	14	punct	_	CSID=OTHER
11	so	so	ADV	_	_	14	advmod	_	CSID=DE|Lang=de
12	wir	wir	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	14	nsubj	_	CSID=DE|Lang=de
13	werden	werden	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	14	aux:pass	_	CSID=DE|Lang=de
14	geoutet	outen	VERB	_	VerbForm=Part	8	parataxis:trans	_	CSID=DE|Lang=de
15	ne	ne	INTJ	_	_	14	discourse	_	CSID=DE|Lang=de|SpaceAfter=No
16	.	.	PUNCT	_	_	3	punct	_	CSID=OTHER

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 aux:pass	color:blue
1	Aber	aber	CCONJ	_	_	3	cc	_	CSID=DE|Lang=de
2	ich	ich	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	CSID=DE|Lang=de
3	stelle	stellen	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	CSID=DE|Lang=de
4	mir	ich	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	3	expl:pv	_	CSID=DE|Lang=de
5	manchmal	manchmal	ADV	_	_	3	advmod	_	CSID=DE|Lang=de
6	die	der	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	CSID=DE|Lang=de
7	Frage	Frage	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	3	obj	_	CSID=DE|Lang=de|SpaceAfter=No
8	,	,	PUNCT	_	_	17	punct	_	CSID=OTHER
9	acaba	acaba	ADV	_	_	17	advmod	_	CSID=TR|Lang=tr
10	aslında	aslında	ADV	_	_	17	advmod	_	CSID=TR|Lang=tr
11	bugün	bugün	NOUN	_	_	13	obl	_	CSID=TR|Lang=tr
12	kü	kü	ADP	_	Case=Nom|Number=Sing	11	case	_	CSID=TR|Lang=tr
13	olduğumuz	ol	VERB	_	Number=Sing|Tense=Past|VerbForm=Part	14	acl	_	CSID=TR|Lang=tr
14	yerde	yer	NOUN	_	Case=Loc|Number=Sing	17	obl	_	CSID=TR|Lang=tr
15	hätten	haben	AUX	_	Mood=Sub|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	17	aux	_	CSID=DE|Lang=de
16	wir	wir	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	17	nsubj	_	CSID=DE|Lang=de
17	weiter	weiter	ADJ	_	_	7	ccomp	_	CSID=DE|Lang=de
18	sein	sein	AUX	_	VerbForm=Inf	17	aux:pass	_	CSID=DE|Lang=de
19	sollen	sollen	AUX	_	VerbForm=Inf	17	aux	_	CSID=DE|Lang=de
20	mit	mit	ADP	_	_	22	case	_	CSID=DE|Lang=de
21	der	der	DET	_	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	CSID=DE|Lang=de
22	Technik	Technik	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	17	iobj	_	CSID=DE|Lang=de|SpaceAfter=No
23	?	?	PUNCT	_	_	3	punct	_	CSID=OTHER

~~~


